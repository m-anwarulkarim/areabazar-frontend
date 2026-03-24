"use client";

import Link from "next/link";
import { MapPinned, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HeroSearchBar() {
  return (
    <div className="rounded-[28px] border border-border/60 bg-card/80 p-2 shadow-xl shadow-emerald-500/5 backdrop-blur">
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-2xl px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
            <Search className="h-4 w-4" />
          </div>

          <div className="flex-1">
            <Input
              placeholder="Search market, area, or shop..."
              className="h-auto border-0 bg-transparent px-0 py-0 text-sm shadow-none focus-visible:ring-0"
            />
          </div>
        </div>

        <Button
          asChild
          className="h-12 rounded-2xl bg-emerald-600 px-5 text-sm font-semibold hover:bg-emerald-700"
        >
          <Link href="/shops">
            <MapPinned className="mr-2 h-4 w-4" />
            Search Now
          </Link>
        </Button>
      </div>
    </div>
  );
}
