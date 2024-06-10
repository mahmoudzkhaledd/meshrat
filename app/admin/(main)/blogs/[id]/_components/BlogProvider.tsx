"use client";
import { Blog } from "@prisma/client";
import React, { createContext, useContext, useState } from "react";
const ctx = createContext<Blog>({
  id: "",
  title: "",
  slug: "",
  bannerImage: "",
  content: "",
  visits: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  adminId: "",
  published: false,
});

export const useBlog = (): Blog => {
  const cont = useContext(ctx);
  
  return cont;
};

export default function BlogProvider({
  blog,
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
  blog: Blog;
}) {
  return (
    <ctx.Provider value={blog}>
      <div className={className}>{children}</div>
    </ctx.Provider>
  );
}
