'use client';

import { useEffect } from "react";

export default function InsightaProvider() {
  useEffect(() => {
    const handleRouteChange = () => {
      
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
