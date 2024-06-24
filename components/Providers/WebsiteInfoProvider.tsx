"use client";
import { WebsiteInfo } from "@prisma/client";
import React, { createContext, useContext } from "react";

const ctx = createContext<WebsiteInfo>({
  id: 0,
  phone: "",
  location: "",
  email: "",
  linkedIn: null,
  facebook: null,
  instagram: null,
  whatsapp: null,
  twitter: null,
});

export const useWebsiteInfo = () => {
  const cctx = useContext<WebsiteInfo>(ctx);
  return cctx;
};

export default function WebsiteInfoProvider({
  info,
  children,
}: {
  info: WebsiteInfo;
  children: React.ReactNode;
}) {
  return <ctx.Provider value={info}>{children}</ctx.Provider>;
}
