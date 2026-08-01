import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@shrimps/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@shrimps/ui/sheet";

type HeaderVariantProps = VariantProps<typeof headerVariants>;

interface HeaderProps
  extends React.ComponentPropsWithoutRef<"header">, HeaderVariantProps {}

type HeaderBrandProps = React.ComponentPropsWithoutRef<"div">;

type HeaderNavProps = React.ComponentPropsWithoutRef<"nav">;

type HeaderNavLinkProps = React.ComponentPropsWithoutRef<"a">;

type HeaderActionsProps = React.ComponentPropsWithoutRef<"div">;

type HeaderMobileMenuProps = React.ComponentProps<typeof Sheet>;

type HeaderMobileMenuTriggerProps = React.ComponentProps<typeof SheetTrigger>;

type HeaderMobileMenuPanelProps = React.ComponentProps<typeof SheetContent>;

const headerVariants = cva("z-40 h-16 w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    position: {
      static: "relative",
      sticky: "sticky top-0",
    },
    surface: {
      solid: "border-b border-border bg-background",
      blurred:
        "border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      transparent: "border-b border-transparent bg-transparent",
    },
  },
  defaultVariants: {
    position: "sticky",
    surface: "blurred",
  },
});

function Header({
  className,
  position,
  surface,
  children,
  ...props
}: HeaderProps) {
  return (
    <header
      data-slot="header"
      className={cn(headerVariants({ position, surface }), className)}
      {...props}
    >
      <div
        data-slot="header-container"
        className="mx-auto flex h-full w-full max-w-7xl items-center gap-4"
      >
        {children}
      </div>
    </header>
  );
}

function HeaderBrand({ className, ...props }: HeaderBrandProps) {
  return (
    <div
      data-slot="header-brand"
      className={cn(
        "flex shrink-0 items-center gap-2 font-semibold text-text",
        className,
      )}
      {...props}
    />
  );
}

function HeaderNav({ className, ...props }: HeaderNavProps) {
  return (
    <nav
      data-slot="header-nav"
      aria-label="Primary"
      className={cn("hidden items-center gap-6 md:flex", className)}
      {...props}
    />
  );
}

function HeaderNavLink({ className, ...props }: HeaderNavLinkProps) {
  return (
    <a
      data-slot="header-nav-link"
      className={cn(
        "text-2xl font-medium text-on-surface transition-colors hover:text-text aria-[current=page]:text-text md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

function HeaderActions({ className, ...props }: HeaderActionsProps) {
  return (
    <div
      data-slot="header-actions"
      className={cn("ml-auto flex items-center gap-2", className)}
      {...props}
    />
  );
}

function HeaderMobileMenuTrigger({
  className,
  ...props
}: HeaderMobileMenuTriggerProps) {
  return (
    <SheetTrigger
      data-slot="header-mobile-menu-trigger"
      render={
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", className)}
          aria-label="Open menu"
        />
      }
      {...props}
    >
      <Menu aria-hidden="true" />
    </SheetTrigger>
  );
}

function HeaderMobileMenuPanel({
  className,
  children,
  ...props
}: HeaderMobileMenuPanelProps) {
  return (
    <SheetContent
      data-slot="header-mobile-menu-panel"
      className={cn("gap-1 p-8", className)}
      {...props}
    >
      <SheetTitle className="sr-only">Navigation</SheetTitle>
      <nav
        data-slot="header-mobile-nav"
        aria-label="Mobile"
        className="flex flex-col gap-3"
      >
        {children}
      </nav>
    </SheetContent>
  );
}

const HeaderMobileMenu = Object.assign(Sheet, {
  Trigger: HeaderMobileMenuTrigger,
  Panel: HeaderMobileMenuPanel,
});

Header.Brand = HeaderBrand;
Header.Nav = HeaderNav;
Header.NavLink = HeaderNavLink;
Header.Actions = HeaderActions;
Header.MobileMenu = HeaderMobileMenu;

export {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderNavLink,
  HeaderActions,
  HeaderMobileMenu,
  HeaderMobileMenuTrigger,
  HeaderMobileMenuPanel,
};
export type {
  HeaderProps,
  HeaderBrandProps,
  HeaderNavProps,
  HeaderNavLinkProps,
  HeaderActionsProps,
  HeaderMobileMenuProps,
  HeaderMobileMenuTriggerProps,
  HeaderMobileMenuPanelProps,
};
