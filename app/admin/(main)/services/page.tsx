import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ServicesPageHeader from "./_components/ServicePageHeader";
import { ArrowDown, ArrowUp, File, ListFilter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/db";
import CustomTable from "@/components/ui/CustomTable";
import { servicesCols } from "./_components/ServiceCols";

import Link from "next/link";



export default async function AdminUsersPage() {
  const services = await prisma.service.findMany({});
  
  return (
    <main className=" flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="mb-5 flex items-center justify-between">
          <h2 className=" font-bold text-2xl">Services</h2>
          <Link href={"/admin/services/add"}>
            <Button>Add Service</Button>
          </Link>
        </div>
        <CustomTable
          columns={servicesCols}
          data={JSON.parse(JSON.stringify(services))}
        />
      </div>
    </main>
  );
}
