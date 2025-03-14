"use client";

import { saveWebsiteInfo } from "@/Controllers/Admin/Info/SaveWebsiteInfo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { websiteInfoSchema } from "@/types/WebsiteInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Review, WebsiteInfo } from "@prisma/client";
import { Plus, X } from "lucide-react";

import { useTransition } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function InfoForm({ info }: { info?: WebsiteInfo }) {
  const [loading, startTrans] = useTransition();

  const form = useForm<z.infer<typeof websiteInfoSchema>>({
    resolver: zodResolver(websiteInfoSchema),
    defaultValues: {
      phone: info?.phone ?? "",
      location: info?.location ?? "",
      linkedIn: info?.linkedIn ?? undefined,
      facebook: info?.facebook ?? undefined,
      instagram: info?.instagram ?? undefined,
      whatsapp: info?.whatsapp ?? undefined,
      twitter: info?.twitter ?? undefined,
      email: info?.email ?? "",
      seoKeyWords:
        info?.seoKeyWords?.map((e) => ({
          name: e,
        })) ?? [],
    },
  });
  const { append, fields, remove } = useFieldArray({
    control: form.control,
    name: "seoKeyWords",
  });
  const handleSubmit = (e: any) => {
    startTrans(async () => {
      const res = await saveWebsiteInfo(e);
      if (res?.error) {
        toast.error(res.error);
        return;
      } else {
        toast.success("Changes saved successfully");
      }
    });
  };
  const Items = [];
  for (const item of Object.keys(websiteInfoSchema.shape)) {
    if (item != "reviews" && item != "seoKeyWords")
      Items.push(
        <FormField
          key={item}
          control={form.control}
          //@ts-ignore
          name={item}
          render={({ field }) => {
            return (
              <FormItem className="">
                <FormLabel className="capitalize"> {item} </FormLabel>
                <FormControl>
                  {
                    // @ts-ignore
                    <Input disabled={loading} {...field} />
                  }
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />,
      );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="mb-5 flex justify-between">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <Button type="submit" disabled={loading} loading={loading}>
            Save
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">{Items}</div>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">SEO Keywords</h2>
            <Button
              onClick={() => append({ name: "" })}
              className=""
              size={"icon"}
              type="button"
            >
              <Plus className="w-5" />
            </Button>
          </div>
          {fields.length == 0 && (
            <p className="my-3 text-center">No keywords added </p>
          )}
          {fields.map((e, idx) => (
            <div key={idx}>
              <Label htmlFor={`seoKeyWords.${idx}.subTitle`}>Description</Label>
              <div className="flex items-center gap-3">
                <Input
                  id={`seoKeyWords.${idx}.subTitle`}
                  {...form.register(`seoKeyWords.${idx}.name`)}
                  className="mt-1"
                />
                <Button
                  type="button"
                  onClick={() => remove(idx)}
                  className=""
                  variant={"destructive"}
                  size={"icon"}
                >
                  <X className="w-5" />
                </Button>
              </div>
              {form.formState.errors.seoKeyWords?.[idx]?.name && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.seoKeyWords?.[idx]?.name.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </form>
    </Form>
  );
}
