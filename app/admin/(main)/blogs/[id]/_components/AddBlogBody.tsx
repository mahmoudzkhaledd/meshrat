"use client";

import React, { useEffect, useRef, useState, useTransition } from "react";

import TextEditor from "../../../../../../components/GeneralComponents/TextEditor";
import { useBlog } from "./BlogProvider";
import { Button } from "@/components/ui/button";
import { editBlog } from "@/Controllers/Admin/Blogs/EditBlog";
import toast from "react-hot-toast";
import { ArrowLeft, ArrowRight, Trash } from "lucide-react";
import { deleteBlog } from "@/Controllers/Admin/Blogs/DeleteBlog";
import { uploadBlogImage } from "@/Controllers/Admin/Blogs/UploadBlogImage";
import { deleteBlogImage } from "@/Controllers/Admin/Blogs/DeleteImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import moment from "moment";
import { revalidatePath } from "next/cache";

export default function AddBlogBody() {
  const [pending, startTrans] = useTransition();
  const blog = useBlog();
  const [imageUrl, setUrl] = useState<string | null>(blog.bannerImage);
  const handelChangeImage = (e: any) => {
    if (e?.target?.files?.length == 0 || e?.target?.files?.length == null)
      return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const loadingId = toast.loading("Uploading image ...");
      startTrans(async () => {
        const name = e?.target?.files[0].name;
        if (!reader.result || name.split(".").length < 2) return;

        const res = await uploadBlogImage(`${reader.result}`, blog.id, name);
        if (res?.error) {
          toast.error(res.error);
        }
        if (res?.url) {
          setUrl(res.url);
        }
        toast.dismiss(loadingId);
      });
    };
    reader.readAsDataURL(e?.target?.files[0]);
  };
  const handelPublish = (publish: boolean | null) => {
    startTrans(async () => {
      if (publish != null) blog.published = publish;
      const res = await editBlog(blog);
      if (res?.error) {
        toast.error(res.error);
      }
      if (res?.success != null) {
        toast.success(
          publish != null
            ? `Blog ${publish ? "published" : "not published"} successfully`
            : "Changes saved successfully",
        );
 
      }
    });
  };
  const handelDelete = () => {
    if (!window.confirm("Are you sure that you want to delete this article?"))
      return;
    startTrans(async () => {
      const res = await deleteBlog(blog.id);
      if (res?.error) {
        toast.error(res.error);
      }
    });
  };
  const handelDeleteImage = () => {
    if (!window.confirm("Are you sure to delet this banner image?")) return;
    startTrans(async () => {
      const res = await deleteBlogImage(blog.id);
      if (res?.error) {
        toast.error(res.error);
        return;
      }
      setUrl(null);
    });
  };
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-bold">Edit Blog Article</h2>
          <a target="__blank" href={`/blogs/${blog.slug}`}>
            <Button className="rounded-full" size={"icon"} variant={"outline"}>
              <ArrowRight className="w-4" />
            </Button>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => handelPublish(!blog.published)}
            disabled={pending}
            className="rounded-full"
          >
            {blog.published ? "UnPublish" : "Publish"}
          </Button>
          <Button
            onClick={() => handelPublish(null)}
            disabled={pending}
            variant={"outline"}
            className="rounded-full"
          >
            Save Changes
          </Button>
          <Button
            onClick={() => handelDelete()}
            disabled={pending}
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
          >
            <Trash className="aspect-square w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:text-2lx mx-auto aspect-video w-full max-w-[700px] overflow-hidden rounded-lg border bg-gray-50 lg:mx-0">
          <label
            className={cn(
              "relative flex h-full w-full items-center justify-center",
              {
                "cursor-pointer": imageUrl == null,
              },
            )}
            htmlFor="uploadBanner"
          >
            {imageUrl == null ? (
              <p className="text-xl font-semibold opacity-35">Blog Banner</p>
            ) : (
              <div className="">
                <img src={imageUrl} className="z-0 w-full object-cover" />
                <Button
                  onClick={handelDeleteImage}
                  size={"icon"}
                  disabled={pending}
                  className="absolute right-3 top-3 z-10 aspect-square rounded-full"
                  variant={"outline"}
                >
                  <Trash className="w-4" />
                </Button>
              </div>
            )}
            {imageUrl == null && (
              <input
                type="file"
                id="uploadBanner"
                disabled={pending}
                accept=".png, .jpg, .jpeg"
                hidden
                onChange={handelChangeImage}
              />
            )}
          </label>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex flex-wrap gap-2">
              Visit Statistics{" "}
              <Badge>{blog.published ? "Published" : "Not Published"}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <div className="grid gap-2">
              <div className="text-4xl font-bold">{blog.visits}</div>
              <div className="text-gray-500 dark:text-gray-400">
                Total Visits
              </div>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              Created {moment(blog.createdAt).fromNow()}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {blog.published
                ? "This content is currently published and visible to the public."
                : "This content is currently not published and not visible to the public."}
            </div>
          </CardContent>
        </Card>
      </div>
      <textarea
        onKeyDown={(e) => {
          if (e.keyCode == 13) {
            e.preventDefault();
          }
        }}
        defaultValue={blog.title}
        onChange={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
          blog.title = e.target.value;
        }}
        className="mt-10 h-20 w-full resize-none text-xl font-medium leading-tight outline-none placeholder:opacity-40"
        placeholder="Article Title"
      />
      <TextEditor
        content={blog.content}
        onDataUpdate={(data) => {
          blog.content = data;
        }}
      />
    </div>
  );
}
