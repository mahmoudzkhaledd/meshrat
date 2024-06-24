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
import { websiteInfoSchema } from "@/types/WebsiteInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Review, WebsiteInfo } from "@prisma/client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function InfoForm({
  info,
}: {
  info?: WebsiteInfo ;
}) {
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
    },
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
    if (item != "reviews")
      Items.push(
        <FormField
          key={item}
          control={form.control}
          //@ts-ignore
          name={item}
          render={({ field }) => {
            return (
              <FormItem className="">
                <FormLabel> {item} </FormLabel>
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
        <div className="flex justify-end">
          <Button type="submit" disabled={loading} loading={loading}>
            Save
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="col-span-1 space-y-5">{Items}</div>
        </div>
      </form>
    </Form>
  );
}
