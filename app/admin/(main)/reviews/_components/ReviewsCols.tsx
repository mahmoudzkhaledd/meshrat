"use client";

import { Review } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export const reviewsCols: ColumnDef<Review>[] = [
  {
    header: "Person Name",
    accessorKey: "personName",
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
        <Link href={`/admin/reviews/${row.row.original.id}`}>
          <Edit />
        </Link>
      );
    },
  },
];
