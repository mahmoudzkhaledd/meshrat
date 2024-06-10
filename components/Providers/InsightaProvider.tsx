'use client';

import { useEffect } from "react";

export default function InsightaProvider() {
  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed:", window.location.pathname);
    };

   
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  return (
    <></>
  )
}
