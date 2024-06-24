"use client";

import {
  addNewService,
  editService,
} from "@/Controllers/Admin/Services/AddService";
import { deleteService } from "@/Controllers/Admin/Services/DeleteService";
import { deleteServiceImage } from "@/Controllers/Admin/Services/DeleteServiceImage";
import { uploadServiceImage } from "@/Controllers/Admin/Services/UploadServiceImage";
import TextEditor from "@/components/GeneralComponents/TextEditor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn, toInt } from "@/lib/utils";
import addServiceSchema from "@/types/AddServiceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Service } from "@prisma/client";
import { ArrowRight, Trash } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function AddServiceForm({ service }: { service?: Service }) {
  const form = useForm<z.infer<typeof addServiceSchema>>({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      name: service?.name ?? "",
      category: service?.category ?? "",
      price: service?.price ?? 0,

      description: service?.description ?? "",
      subDescription: service?.subDescription ?? "",
      active: service?.active ?? false,
    },
  });
  const [loading, startTrans] = useTransition();
  const [imageUrl, setUrl] = useState<string | undefined>(
    service?.thumbnailImage ?? undefined,
  );
  const handelChangeImage = (e: any) => {
    if (service == null) return;
    if (e?.target?.files?.length == 0 || e?.target?.files?.length == null)
      return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const loadingId = toast.loading("Uploading image ...");
      startTrans(async () => {
        const name = e?.target?.files[0].name;
        if (!reader.result || name.split(".").length < 2) return;

        const res = await uploadServiceImage(
          `${reader.result}`,
          service.id,
          name,
        );
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
  const handelSubmit = (data: any, publish?: boolean) => {
    startTrans(async () => {
      const res =
        service == null
          ? await addNewService({ ...data, active: false })
          : await editService(
              {
                name: data?.name ?? "",
                category: data?.category ?? "",
                price: data?.price ?? 0,

                description: data?.description ?? "",
                subDescription: data?.subDescription ?? "",
                active: publish == null ? service.active : publish,
              },
              service.id,
            );
      if (res?.error != null) {
        toast.error(res.error);
      }
      if (res?.success == true) {
        toast.success(
          publish == null
            ? "Changes saved successfully"
            : `Service ${publish ? "published" : "un published"} successfully`,
        );
      }
    });
  };
  const handelDeleteImage = () => {
    if (service == null) return;
    if (!window.confirm("Are you sure to delet this banner image?")) return;
    startTrans(async () => {
      const res = await deleteServiceImage(service.id);
      if (res?.error) {
        toast.error(res.error);
        return;
      }
      setUrl(undefined);
    });
  };
  const handelDeleteService = () => {
    if (service == null) return;
    if (!window.confirm("Are you sure to delet this service?")) return;
    startTrans(async () => {
      const res = await deleteService(service.id);
      if (res?.error) {
        toast.error(res.error);
        return;
      }
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => handelSubmit(data))}>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold">
              {service?.name ?? "Add new service"}
            </h2>
            {service != null && (
              <Link target="__blank" href={`/services/${service?.id}`}>
                <Button
                  className="rounded-full"
                  size={"icon"}
                  type="button"
                  variant={"outline"}
                >
                  <ArrowRight className="w-4" />
                </Button>
              </Link>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-full" disabled={loading} type="submit">
              {service == null ? "Add Service" : "Save Changes"}
            </Button>
            {service != null && (
              <>
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  type="button"
                  disabled={loading}
                  onClick={form.handleSubmit((data) =>
                    handelSubmit(data, !service.active),
                  )}
                >
                  {service.active ? "UnPublish" : "Publish"}
                </Button>
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  type="button"
                  size={"icon"}
                  disabled={loading}
                  onClick={handelDeleteService}
                >
                  <Trash className="w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
        <div
          className={cn({
            "grid grid-cols-1 gap-4 lg:grid-cols-2": service != null,
          })}
        >
          <div className="flex flex-col space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel> Name </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                      placeholder="Service name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel> Category </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                      placeholder="Service category"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel> Price </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      value={toInt(field.value) ?? 0}
                      onChange={(e) =>
                        field.onChange(toInt(e.target.value) ?? 0)
                      }
                      type="number"
                      placeholder="100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subDescription"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel> Sub Description </FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      {...field}
                      placeholder="Sub Description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {service != null && (
            <div className="col-span-1 space-y-5">
              <div className="lg:text-2lx mx-auto aspect-video  w-full max-w-[700px] overflow-hidden rounded-lg border bg-gray-50 lg:mx-0">
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
                    <p className="text-xl font-semibold opacity-35">
                      Service Banner
                    </p>
                  ) : (
                    <div className="">
                      <img src={imageUrl} className="z-0 w-full  object-contain" />
                      <Button
                        onClick={handelDeleteImage}
                        size={"icon"}
                        disabled={loading}
                        className="absolute right-3 top-3 z-10 aspect-square rounded-full"
                        variant={"outline"}
                      >
                        <Trash className="w-4" />
                      </Button>
                    </div>
                  )}
                  {imageUrl == null && !loading && (
                    <input
                      type="file"
                      id="uploadBanner"
                      disabled={loading}
                      accept=".png, .jpg, .jpeg"
                      hidden
                      onChange={handelChangeImage}
                    />
                  )}
                </label>
              </div>
            </div>
          )}
        </div>
        {service != null && (
          <Card className="w-full mt-5">
            <CardHeader>
              <CardTitle className="flex flex-wrap gap-2">
                Visit Statistics
                <Badge>{service?.active ? "Published" : "Not Published"}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="grid">
                <div className="text-4xl font-bold">{service?.visits}</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Total Visits
                </div>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Created {moment(service.createdAt).fromNow()}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {service?.active
                  ? "This content is currently published and visible to the public."
                  : "This content is currently not published and not visible to the public."}
              </div>
            </CardContent>
          </Card>
        )}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>Description </FormLabel>
              <FormControl>
                <TextEditor
                  className=""
                  onDataUpdate={(data) => {
                    field.onChange(data);
                  }}
                  content={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
