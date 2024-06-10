"use client";
import { addNewBlog } from "@/Controllers/Admin/Blogs/AddNewBlog";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import toast from "react-hot-toast";

export default function AddBlogBtn() {
  const [pending, startTrans] = useTransition();
  const addBlog = () => {
    startTrans(async () => {
      const res = await addNewBlog();
      if (res?.error != null) {
        toast.error(res.error);
      }
    });
  };
  return (
    <Button onClick={addBlog} loading={pending}>
      Add article
    </Button>
  );
}
