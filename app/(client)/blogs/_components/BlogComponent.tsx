import { Blog } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { convert } from "html-to-text";
export default function BlogComponent({
  post,
  maxChars,
}: {
  post: Blog;
  maxChars: number;
}) {
  const content = convert(post.content);
  return (
    <Link
      href={`/blogs/${post.slug}`}
      key={post.id}
      className="flex flex-col gap-4 overflow-hidden rounded-lg lg:flex-row"
    >
      <img
        src={post.bannerImage ?? ""}
        alt={"Banner"}
        width={600}
        height={400}
        className="mx-auto max-w-[300px] rounded-lg object-cover lg:m-5 lg:mx-0 lg:max-w-[200px]"
      />
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          {content.length > maxChars
            ? `${content.substring(0, maxChars)} ...`
            : content}
        </p>
      </div>
    </Link>
  );
}
