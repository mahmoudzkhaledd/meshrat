"use server";

import { deleteObject, ref } from "firebase/storage";
import { storage } from "./firebase";
export const deleteImageFromUrl = async (
  url: string,
): Promise<string | undefined> => {
  try {
    await deleteObject(ref(storage, url));
  } catch (ex: any) {
    return ex.message;
  }
};
