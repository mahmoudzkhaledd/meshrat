"use client";
import { addEditFAQ } from "@/Controllers/Admin/Info/AddEditFAQ";
import { deleteQuestion } from "@/Controllers/Admin/Info/DeleteFaq";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { FAQ } from "@prisma/client";
import { Edit, Trash } from "lucide-react";
import { FormEvent, useTransition } from "react";
import toast from "react-hot-toast";

export default function AddQuestionModal({ faq }: { faq?: FAQ }) {
  const [loading, startTrans] = useTransition();
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTrans(async () => {
      const obj = Object.fromEntries(new FormData(e.currentTarget).entries());
      const res = await addEditFAQ({
        ...obj,
        arabic: obj.arabic == "on",
        id: faq?.id,
      });
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Changes Saved Successfully.");
      }
    });
  };
  const handelDelete = () => {
    if (faq == null || !window.confirm("Are you sure to delete this question?"))
      return;
    startTrans(async () => {
      const res = await deleteQuestion(faq.id);
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Question deleted succefully");
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={faq != null ? "icon" : "default"}
          variant={faq != null ? "outline" : "default"}
        >
          {faq == null ? "Add Question" : <Edit />}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen max-w-[425px] overflow-y-auto lg:max-w-[600px]">
        <form onSubmit={handelSubmit}>
          <DialogHeader>
            <DialogTitle>
              {faq == null ? "Add new Question" : "Edit Question"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="question" className="text-right">
                Question
              </Label>
              <Input
                disabled={loading}
                name="question"
                id="question"
                defaultValue={faq?.question}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="answer" className="text-right">
                Answer
              </Label>
              <Textarea
                disabled={loading}
                name="answer"
                id="answer"
                defaultValue={faq?.answer}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Arabic
              </Label>
              <Switch
                disabled={loading}
                name="arabic"
                id="arabic"
                defaultChecked={faq?.arabic}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="flex items-center">
            <Button disabled={loading} type="submit">
              Save changes
            </Button>
            {faq != null && (
              <Button
                onClick={handelDelete}
                size={"icon"}
                className="rounded-full"
                variant={"outline"}
                disabled={loading}
                type="button"
              >
                <Trash className="w-5" />
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
