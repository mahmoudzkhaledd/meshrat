import React from "react";

import { cn } from "@/lib/utils";
import Logo from "../ui/Logo";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 flex w-full items-center justify-between bg-white p-5 transition md:px-16",
        className,
      )}
    >
      <Logo className="w-14"/>
      <nav>
        <div className="flex items-center justify-between gap-20 lg:gap-28">
          <div className="flex items-center justify-between gap-16">
            <a
              className="mt-0.5 border-b-2 border-[#2b7dad] text-lg font-bold text-primary transition duration-500 hover:text-[#2b7dad]"
              href="/"
            >
              Home
            </a>
           
            <a
              className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
              href="#reviews"
            >
              Reviews
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
