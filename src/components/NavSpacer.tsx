"use client";

import { usePathname } from "next/navigation";

export default function NavSpacer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <div className="h-24" />;
}