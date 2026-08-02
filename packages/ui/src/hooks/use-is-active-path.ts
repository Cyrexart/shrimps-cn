"use client";

import { usePathname } from "next/navigation";

export function useIsActivePath(href: string, { exact = true } = {}) {
  const pathname = usePathname();
  return exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}
