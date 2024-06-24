import React from "react";
import AdminNavbar from "../_components/Navbar";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  cookies();
  return (
    <div
      lang="en"
      dir="ltr"
      className={cn(
        "flex size-full min-h-screen w-full flex-col",
        inter.className,
      )}
    >
      <AdminNavbar />
      <main className="size-full p-4 pb-20 md:gap-8 md:p-8">{children}</main>
    </div>
  );
}
