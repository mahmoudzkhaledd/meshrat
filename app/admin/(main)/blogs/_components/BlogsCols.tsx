"use client";

import { Badge } from "@/components/ui/badge";
import { Blog } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRightCircle, Check, Edit, X } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export const blogsCols: ColumnDef<Blog>[] = [
  {
    header: "Title",
    cell: (row) => {
      return (
        <>
          {row.row.original.title == "" ? "Untitled" : row.row.original.title}
        </>
      );
    },
  },
  {
    header: "Language",
    cell: (row) => {
      return (
        <>
          {row.row.original.arabic ? "Arabic" : "English"}
        </>
      );
    },
  },
  {
    header: "State",
    cell: (row) => {
      return (
        <Badge>
          {row.row.original.published ? "published" : "not published"}
        </Badge>
      );
    },
  },
  {
    header: "Visits",
    accessorKey: "visits",
  },
  {
    header: "Created At",
    cell: (data) => {
      return <p>{moment(data.row.original.createdAt).fromNow()}</p>;
    },
  },
  {
    header: "Page",
    cell: (row) => {
      return (
        <a target="__blank" href={`/blogs/${row.row.original.slug}`}>
          <ArrowRightCircle className="w-5" />
        </a>
      );
    },
  },
  {
    header: "Edit",
    cell: (row) => {
      return (
        <Link href={`/admin/blogs/${row.row.original.id}`}>
          <Edit className="w-5" />
        </Link>
      );
    },
  },
];
