"use client";

import { Service } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRightCircle, Check, Edit, X } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export const servicesCols: ColumnDef<Service>[] = [
  {
    header: "Name",
    accessorKey: "name",
    enableSorting: true,
    enableHiding: false,
  },
  {
    header: "Price",
    cell: (row) => {
      return <>{row.row.original.price} EGP</>;
    },
  },
  {
    header: "Visits",
    accessorKey: "visits",
  },
  {
    header: "Active",
    cell: (row) => {
      return <>{row.row.original.active ? <Check /> : <X />}</>;
    },
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
        <a target="__blank" href={`/services/${row.row.original.id}`}>
          <ArrowRightCircle className="w-5" />
        </a>
      );
    },
  },
  {
    header: "Edit",
    cell: (row) => {
      return (
        <Link href={`/admin/services/${row.row.original.id}/edit`}>
          <Edit className="w-5" />
        </Link>
      );
    },
  },
];
