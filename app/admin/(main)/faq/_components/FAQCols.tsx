"use client";

import { FAQ } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import moment from "moment";

import AddQuestionModal from "./AddQuestionModel";

export const faqCols: ColumnDef<FAQ>[] = [
  {
    header: "Question",
    accessorKey: "question",
  },
  {
    header: "Language",
    cell: (row) => {
      return <>{row.row.original.arabic ? "Arablic" : "English"}</>;
    },
  },
  {
    header: "Created At",
    cell: (row) => {
      return <>{moment(row.row.original.createdAt).fromNow()}</>;
    },
  },
  {
    header: "Edit",
    cell: (row) => {
      return <AddQuestionModal faq={row.row.original}/>;
    },
  },
];
