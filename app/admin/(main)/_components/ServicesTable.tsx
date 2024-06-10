import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Service } from "@prisma/client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import moment from "moment";
export default function ServicesTable({ services }: { services: Service[] }) {
  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Services</CardTitle>
          <CardDescription>Last 5 services of your website.</CardDescription>
        </div>
        <Button
          asChild
          size="icon"
          variant={"outline"}
          className="ml-auto gap-1 rounded-full"
        >
          <Link href="/admin/services">
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Page</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((e, idx) => (
              <TableRow key={idx}>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.visits}</TableCell>
                <TableCell>{e.price} EGP</TableCell>
                <TableCell>
                  <Badge className="text-xs" variant="outline">
                    {e.active ? "Active" : "In active"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/admin/services/${e.id}/edit`}>
                    <ArrowRight className=" w-4"/>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
