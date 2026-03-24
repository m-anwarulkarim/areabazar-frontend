import Link from "next/link";
import { Button } from "@/components/ui/button";

import HeroStats from "./hero-stats";
import HeroVisual from "./hero-visual";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-emerald-50 via-white to-white dark:from-emerald-950/20 dark:via-background dark:to-background" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-80px] top-[40px] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute right-[-100px] top-[80px] h-80 w-80 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10" />
        <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-100/50 blur-3xl dark:bg-lime-500/5" />
      </div>

      <div className="container mx-auto px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
                Your Local Marketplace
              </div>

              <div className="inline-flex items-center rounded-full border border-border/70 bg-white/80 px-4 py-2 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur dark:bg-background/70">
                Trusted & Verified Listings
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              Find Local Shops,
              <span className="block">Products & Deals</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Near You
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg lg:mx-0">
              Explore trusted local markets, discover nearby shops, and find
              products faster with a premium shopping experience built for your
              area.
            </p>

            {/* <div className="mt-8">
              <HeroSearch />
            </div> */}

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-2xl bg-emerald-600 px-6 text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700"
              >
                <Link href="/shops">Explore Shops</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-border/70 bg-background/80 px-6 text-sm font-semibold backdrop-blur hover:bg-muted/80"
              >
                <Link href="/shops/add">List Your Shop</Link>
              </Button>
            </div>

            <div className="mt-8">
              <HeroStats />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[620px] lg:mx-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
