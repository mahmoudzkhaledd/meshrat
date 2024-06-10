import { navbarItems } from "@/constants/navbarItems";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../ui/Logo";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("items-cetner flex justify-between py-5", className)}>
      <div className="hidden items-center gap-x-7 lg:flex">
        {navbarItems.map((e, idx) => (
          <Link className="hover:underline" href={e.link} key={idx}>
            {e.name}
          </Link>
        ))}
      </div>

      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <button>
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white">
          <div className="flex w-full flex-col items-center gap-3 gap-x-7">
            {navbarItems.map((e, idx) => (
              <Link
                className="w-full text-center hover:underline"
                href={e.link}
                key={idx}
              >
                {e.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Logo />
    </nav>
  );
}
