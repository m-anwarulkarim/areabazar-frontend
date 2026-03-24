"use client";

import { useState } from "react";
import { Menu, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import NavbarBrand from "./navbar-brand";
import NavbarDesktopNav from "./navbar-desktop-nav";
import NavbarSearch from "./navbar-search";
import NavbarActions from "./navbar-actions";
import MobileMenu from "./mobile-menu";

type Props = {
  pathname?: string;
};

export default function Navbar({ pathname }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-3 lg:h-20">
            <NavbarBrand />

            <div className="hidden xl:block">
              <NavbarDesktopNav pathname={pathname} />
            </div>

            <NavbarSearch />

            <div className="ml-auto flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-sm text-muted-foreground md:flex lg:hidden">
                <MapPin className="h-4 w-4 text-emerald-600" />
                Khulna
              </div>

              <NavbarActions />

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-foreground transition hover:bg-muted xl:hidden",
                  mobileOpen && "bg-muted",
                )}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>
    </>
  );
}
