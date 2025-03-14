"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { storage } from "@/lib/firebase";
import { base64ToUint8Array, extractAxiosError, slugify } from "@/lib/utils";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { redirect } from "next/navigation";

export const uploadAdImage = async (
  image: string,
  adId: string,
  imageName: string,
): Promise<{ error?: string; url?: string } | undefined> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  try {
    const urlfinal = await prisma.$transaction(async (prsma) => {
      const tmpAd = await prsma.advertisement.findUnique({
        where: {
          id: adId,
        },
      });
      if (tmpAd == null) throw new Error("Ad not found");
      if (tmpAd.backgroundImage != null)
        throw new Error(
          "You must delete the current banner before upload new one",
        );
      const fileRef = ref(
        storage,
        `ads/${adId}/banner.${imageName.split(".")[imageName.split(".").length - 1]}`,
      );
      const snap = await uploadBytes(fileRef, base64ToUint8Array(image));
      const url = await getDownloadURL(fileRef);
      await prsma.advertisement.update({
        where: {
          id: adId,
        },
        data: {
          backgroundImage: url,
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
