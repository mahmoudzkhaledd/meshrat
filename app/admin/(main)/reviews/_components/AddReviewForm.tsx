"use client";
import { addEditReview } from "@/Controllers/Admin/Info/AddReview";
import { deleteReview } from "@/Controllers/Admin/Info/DeleteReview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { reviewSchema } from "@/types/WebsiteInfo";
import { Review } from "@prisma/client";
import { Trash } from "lucide-react";

import React, { useTransition } from "react";
import toast from "react-hot-toast";

function CustomInput({
  name,
  defaultValue,
  disabled,
  placeHolder,
  title,
  type,
  area,
}: {
  title: string;
  disabled?: boolean;
  name: string;
  defaultValue?: string;
  placeHolder?: string;
  type?: "number" | "text" | "date";
  area?: boolean;
}) {
  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{title}</Label>
      {area == true ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeHolder}
          disabled={disabled}
          defaultValue={defaultValue}
        />
      ) : (
        <Input
          type={type}
          id={name}
          name={name}
          placeholder={placeHolder}
          disabled={disabled}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
}
export default function AddReviewForm({ review }: { review?: Review }) {
  const [loading, startTrans] = useTransition();
  const handelDelete = () => {
    if (!window.confirm("Are you sure to delete the review?") || review == null)
      return;
    startTrans(async () => {
      const res = await deleteReview(review?.id);
      if (res?.error) {
        toast.error(res.error);
      }
    });
  };
  const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(e.currentTarget).entries());
    const model = reviewSchema.safeParse({
      ...obj,
      date: new Date(`${obj.date}`),
    });
    if (!model.success) {
      toast.error("Please Enter the full data required");
      return;
    }
    model.data.id = review?.id;
    startTrans(async () => {
      const res = await addEditReview(model.data);
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Review Added Successfully");
      }
    });
  };
  return (
    <form onSubmit={handelFormSubmit} id="frm-review">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold">
          {review == null ? "Add" : "Edit"} Review
        </h2>
        <div className="flex items-center gap-4">
          <Button type="submit" size={"sm"} disabled={loading}>
            {review == null ? "Add" : "Save Changes"}
          </Button>
          {review != null && (
            <Button
              disabled={loading}
              type="button"
              size={"icon"}
              onClick={handelDelete}
              className="rounded-full"
              variant={"outline"}
            >
              <Trash className="w-5" />
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <CustomInput
          disabled={loading}
          placeHolder="Title"
          name="title"
          defaultValue={review?.title}
          title="Title"
        />
        <CustomInput
          disabled={loading}
          placeHolder="Person Name"
          name="personName"
          defaultValue={review?.personName}
          title="Person Name"
        />
        <CustomInput
          disabled={loading}
          type="date"
          name="date"
          defaultValue={review?.date.toISOString().split("T")[0]}
          title="Review Date"
        />
        <CustomInput
          disabled={loading}
          area
          name="review"
          title="Review"
          placeHolder="Review"
          defaultValue={review?.review}
        />
      </div>
    </form>
  );
}
