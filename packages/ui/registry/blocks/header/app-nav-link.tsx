"use client";

import Link from "next/link";

import { Header, HeaderNavLinkProps } from "@shrimps/ui/blocks/header/header";
import { useIsActivePath } from "@/hooks/use-is-active-path";

interface AppNavLinkProps extends HeaderNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function AppNavLink({ href, children, ...props }: AppNavLinkProps) {
  const isActive = useIsActivePath(href);

  return (
    <Header.NavLink
      render={<Link href={href} />}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {children}
    </Header.NavLink>
  );
}
