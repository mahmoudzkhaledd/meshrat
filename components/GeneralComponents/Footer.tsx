import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("flex items-center justify-between p-4", className)}>
      <aside className="flex items-center gap-3">
        <Image
          className="aspect-square w-7"
          src={"/images/logo.png"}
          width={50}
          height={50}
          alt="Logo"
        />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="flex flex-wrap items-center gap-3">
        {siteConfig.socialMedia.map((e, idx) => (
          <a key={idx} target="__blank" href={e.link}>
            <e.icon className="w-5" />
          </a>
        ))}
      </nav>
    </footer>
  );
}
