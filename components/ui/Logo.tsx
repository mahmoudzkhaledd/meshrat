
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ to, newPage, className, isLink }: { isLink?: boolean; to?: string, newPage?: boolean, className?: string; }) {
    if (isLink == false) {
        return <p className={cn("font-bold text-xl", className)}>ANALYTIX</p>
    }
    return (
        <Link
            href={to || "/"}
            className={cn("font-bold text-xl", className)}
            target={newPage ? "_blank" : "_self"}
        >
            <Image className="aspect-square w-[50px]" alt="Main logo of the website" src={'/images/logo.png'} width={50} height={50} />
        </Link>
    )
}
