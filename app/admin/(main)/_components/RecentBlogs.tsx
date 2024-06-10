import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@prisma/client";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function RecentBlogs({ blogs }: { blogs: Blog[] }) {
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p>Top Blogs</p>
          <Link href={'/admin/blogs'}>
            <Button size={"icon"} variant={"outline"} className="rounded-full">
              <MoveUpRight className="w-4" />
            </Button>
          </Link>
        </CardTitle>
        <CardDescription>Top 5 blogs of the website</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        {blogs.map((e, idx) => (
          <Link
            href={`/admin/blogs/${e.id}`}
            key={idx}
            className="flex items-center gap-4 rounded-md px-4 py-2 hover:bg-muted"
          >
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{idx + 1}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{e.title}</p>
            </div>
            <div className="ml-auto font-medium">{e.visits}</div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
