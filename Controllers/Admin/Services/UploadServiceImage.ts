"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { storage } from "@/lib/firebase";
import { extractAxiosError, slugify } from "@/lib/utils";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { redirect } from "next/navigation";

function base64ToUint8Array(base64: string) {
  var binaryString = atob(base64.split(",")[1]);
  var len = binaryString.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export const uploadServiceImage = async (
  image: string,
  serviceId: string,
  imageName: string,
): Promise<{ error?: string; url?: string } | undefined> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  try {
    const urlfinal = await prisma.$transaction(async (prsma) => {
      const service = await prsma.service.findUnique({
        where: {
          id: serviceId,
        },
      });
      if (service == null) throw new Error("Service not found");
      if(service.thumbnailImage != null) throw new Error("You must delete the current banner before upload new one");
      const fileRef = ref(
        storage,
        `services/${serviceId}/banner.${imageName.split(".")[imageName.split(".").length - 1]}`,
      );
      const snap = await uploadBytes(fileRef, base64ToUint8Array(image));
      const url = await getDownloadURL(fileRef);
      await prsma.service.update({
        where: {
          id: serviceId,
        },
        data: {
          thumbnailImage: url,
        },
      });
      return url;
    });
    return {
      url: urlfinal,
    };
  } catch (ex) {
    const err = extractAxiosError(ex);
    return {
      error: err ?? "Unknown error occured, please try again later.",
    };
  }
};
