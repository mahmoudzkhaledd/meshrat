"use client";

import { useEffect, useTransition } from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, RefreshCwIcon, Trash } from "lucide-react";
import { format, subDays } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { createAdSchema, CreateAdSchema } from "@/types/AdSchema";
import { CustomAdvertisementDialog } from "@/components/GeneralComponents/AdvDialog";
import { addAdvertsmentAction } from "./_actions/createAdAction";
import toast from "react-hot-toast";
import { Advertisement } from "@prisma/client";
import { uploadAdImage } from "./_actions/uploadAdImage";
import { deleteAdImage } from "./_actions/deleteAdImage";

export default function AdvertisementForm({ adv }: { adv?: Advertisement }) {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<CreateAdSchema | null>(null);
  const [loading, startTrans] = useTransition();

  const defaultValues: Partial<CreateAdSchema> = {
    adId: adv?.id,
    title: adv?.title,
    arabic: adv?.arabic,
    description: adv?.description,
    offerBadge: adv?.offerBadge,
    backgroundImage: adv?.backgroundImage ?? undefined,
    buttonText: adv?.buttonText,
    buttonUrl: adv?.buttonUrl,
    endDate: adv?.endDate ?? null,
    startDate: adv?.startDate,
  };

  const form = useForm<CreateAdSchema>({
    resolver: zodResolver(createAdSchema),
    defaultValues,
  });
  const imageUrl = form.watch("backgroundImage");
  function onSubmit(data: CreateAdSchema) {
    startTrans(async () => {
      const res = await addAdvertsmentAction(data);
      if (res?.error) {
        toast.error(res.error);
        return;
      }
    });
  }
  async function previewDialog() {
    const res = await form.trigger();
    if (!res) return;
    setShowPreview(true);
    setFormData(form.getValues());
  }
  const handelDeleteImage = () => {
    if (adv == null) return;
    if (!window.confirm("Are you sure to delet this background image?")) return;
    startTrans(async () => {
      const res = await deleteAdImage(adv.id);
      if (res?.error) {
        toast.error(res.error);
        return;
      }
      form.setValue("backgroundImage", null);
    });
  };

  const handelChangeImage = (e: any) => {
    if (adv == null) return;
    if (e?.target?.files?.length == 0 || e?.target?.files?.length == null)
      return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const loadingId = toast.loading("Uploading image ...");
      startTrans(async () => {
        const name = e?.target?.files[0].name;
        if (!reader.result || name.split(".").length < 2) return;

        const res = await uploadAdImage(`${reader.result}`, adv.id, name);
        if (res?.error) {
          toast.error(res.error);
        }
        if (res?.url) {
          form.setValue("backgroundImage", res.url);
        }
        toast.dismiss(loadingId);
      });
    };
    reader.readAsDataURL(e?.target?.files[0]);
  };
  const endDate = form.watch("endDate");
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-2xl font-bold">
        Advertisement Dialog Configuration
      </h1>
      {adv != null && (
        <div className="col-span-1 mb-5 w-full space-y-5">
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="lg:text-2lx mx-auto aspect-video w-full max-w-[700px] overflow-hidden rounded-lg border bg-gray-50 lg:mx-0"
          >
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
                  <img src={imageUrl} className="z-0 w-full object-contain" />
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
      <fieldset disabled={loading}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, (err) => console.log(err))}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dialog Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Special Discount" {...field} />
                    </FormControl>
                    <FormDescription>
                      The main heading of your advertisement dialog.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="offerBadge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Offer Badge Text</FormLabel>
                    <FormControl>
                      <Input placeholder="Limited Time Offer" {...field} />
                    </FormControl>
                    <FormDescription>
                      The text displayed in the highlighted badge.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Get 50% off on all premium plans"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A brief description of your offer.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buttonText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Button Text</FormLabel>
                    <FormControl>
                      <Input placeholder="Claim Now" {...field} />
                    </FormControl>
                    <FormDescription>
                      The text displayed on the call-to-action button.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="buttonUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Button URL</FormLabel>
                    <FormControl>
                      <Input placeholder="/contact" {...field} />
                    </FormControl>
                    <FormDescription>
                      The url that the user will be redirected to when hitting
                      the button.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Offer Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <Calendar className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date <= subDays(new Date(), 1) ||
                            (endDate != null && date > endDate)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      When your offer will start.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Offer End Date</FormLabel>
                    <Popover>
                      <div className="flex items-center gap-3">
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <Calendar className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <Button
                          type="button"
                          size={"icon"}
                          onClick={() => form.setValue("endDate", null)}
                        >
                          <RefreshCwIcon className="w-5" />
                        </Button>
                      </div>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      When your offer will expire.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="arabic"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Is Arabic?</FormLabel>
                      <FormDescription>
                        Check if the language of the AD is Arabic.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-4">
              <Button loading={loading} disabled={loading} type="submit">
                {adv ? "Edit Advertsment" : "Add Advertsment"}
              </Button>
              <Button
                disabled={loading}
                type="button"
                onClick={previewDialog}
                variant="outline"
              >
                Preview Dialog
              </Button>
            </div>
          </form>
        </Form>
      </fieldset>
      {showPreview && formData && (
        <CustomAdvertisementDialog
          data={formData}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}
