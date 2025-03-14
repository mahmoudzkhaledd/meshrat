"use client";

import { Button } from "@/components/ui/button";
import { Advertisement } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import Link from "next/link";

export const adCols: ColumnDef<Advertisement>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },

  {
    header: "Language",
    cell: (row) => {
      return <>{row.row.original.arabic ? "Arabic" : "English"}</>;
    },
  },
  {
    header: "Start Date",
    cell: (row) => {
      return <>{moment(row.row.original.startDate).format("YYYY-MM-DD")}</>;
    },
  },
  {
    header: "End Date",
    cell: (row) => {
      return <>{moment(row.row.original.endDate).format("YYYY-MM-DD")}</>;
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
      return (
        <Link href={`/admin/ads/edit?id=${row.row.original.id}`}>
          <Button>Edit</Button>
        </Link>
      );
    },
  },
];
