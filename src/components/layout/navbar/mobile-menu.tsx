"use client";

import Link from "next/link";
import {
  X,
  Search,
  MapPin,
  Store,
  LayoutGrid,
  MapPinned,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mobileNavItems = [
  { label: "Home", href: "/", icon: Store },
  { label: "Shops", href: "/shops", icon: ShoppingBag },
  { label: "Areas", href: "/areas", icon: MapPinned },
  { label: "Categories", href: "/categories", icon: LayoutGrid },
  { label: "Markets", href: "/markets", icon: MapPin },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="border-t border-border/60 bg-background/95 backdrop-blur xl:hidden">
      <div className="container mx-auto px-4 py-4 sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">
            Browse AreaBazar
          </p>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background text-muted-foreground"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-3 shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex h-12 items-center gap-2 rounded-xl border border-border/70 bg-background px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search shops, products..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex h-12 items-center gap-2 rounded-xl border border-border/70 bg-background px-3">
              <MapPin className="h-4 w-4 text-emerald-600" />
              <input
                type="text"
                placeholder="Select location"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            <button className="h-11 rounded-xl bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700">
              Search Now
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                <div className="rounded-xl bg-emerald-100 p-2 dark:bg-emerald-900/30">
                  <Icon className="h-4 w-4 text-emerald-600" />
                </div>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-4">
          <Button
            asChild
            className="h-11 w-full rounded-2xl bg-emerald-600 text-sm font-semibold hover:bg-emerald-700"
          >
            <Link href="/shops/add" onClick={onClose}>
              List Your Shop
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
