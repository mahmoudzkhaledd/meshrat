"use client";

import { slugify } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DynamicTitle({ title }: { title: string }) {
  const router = useRouter();
  useEffect(() => {
    const newUrl = `/services/${slugify(title)}`;
    router.push(newUrl);
    if (window.location.pathname !== newUrl) {
      window.history.replaceState(null, "", newUrl);
    }
  }, []);
  return <></>;
}
