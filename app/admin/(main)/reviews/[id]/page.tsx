import { prisma } from "@/lib/db";
import { toInt } from "@/lib/utils";
import { notFound } from "next/navigation";
import AddReviewForm from "../_components/AddReviewForm";
export default async function EditReviewPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const reviewId = toInt(id);
  if (reviewId == null) {
    return notFound();
  }
  const review = await prisma.review.findUnique({
    where: {
      id: reviewId,
    },
  });
  if (review == null) {
    return notFound();
  }
  return <AddReviewForm review={review} />;
}
