import CustomTable from "@/components/ui/CustomTable";
import React from "react";
import { faqCols } from "./_components/FAQCols";
import { Button } from "@/components/ui/button";

import { prisma } from "@/lib/db";
import AddQuestionModal from "./_components/AddQuestionModel";

export default async function FAQsPage() {
  const faqs = await prisma.fAQ.findMany();

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">FAQs</h2>
        <AddQuestionModal />
      </div>
      <CustomTable columns={faqCols} data={JSON.parse(JSON.stringify(faqs))} />
    </div>
  );
}
