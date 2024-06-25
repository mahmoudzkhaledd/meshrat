"use server";
import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import {
  DEFAULT_REDIRECT,
  adminAuthRoutes,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";
import { isUrlMatching } from "./lib/utils";

import { authXAdmin } from "./authXAdmin";
const handelApiRoutes = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  if (!pathname.startsWith("/api/server")) return null;
  const secret = req.headers.get("api-secret");
  if (secret != process.env.API_SECRET) {
    return Response.json({ message: "unauthorized" });
  } else {
    return null;
  }
};
const handelAdminRoutes = async (req: NextRequest) => {
  const user = await authXAdmin();

  const isLoggedin = user?.user != null;
  const route = req.nextUrl;
  const isAuthRoute = isUrlMatching(route.pathname, adminAuthRoutes);

  if (isAuthRoute) {
    if (isLoggedin) {
      return Response.redirect(new URL("/admin", route));
    }
    return null;
  }
  if (!isLoggedin) {
    return Response.redirect(new URL("/", route));
  }
  return null;
};

const middleware = async (req: NextRequest) => {
 
  if (req.nextUrl.pathname.startsWith("/api")) return handelApiRoutes(req);
  if (req.nextUrl.pathname.startsWith("/admin")) return handelAdminRoutes(req);

  
  return null;
};

export default middleware;
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
