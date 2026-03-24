"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Store,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import PopularMarketSlider, { MarketSlideItem } from "./popular-market-slider";
import HeroSearchBar from "./hero-search";

const popularMarkets: MarketSlideItem[] = [
  {
    id: "1",
    name: "Dakbangla Bazar",
    location: "Khulna",
    shops: 128,
    badge: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    name: "New Market",
    location: "Dhaka",
    shops: 245,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    name: "Jhawtola Market",
    location: "Khulna",
    shops: 96,
    badge: "Fast Growing",
    image:
      "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4",
    name: "GEC Circle Market",
    location: "Chattogram",
    shops: 172,
    badge: "Verified Sellers",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 bg-background/95 backdrop-blur-3xl" />

      <div className="grid min-h-[calc(100vh-80px)] items-center gap-10 py-8 md:min-h-[88vh] md:grid-cols-[1.1fr_0.9fr] md:py-14 lg:gap-16 lg:py-20">
        <div className="px-4 md:px-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            <TrendingUp className="h-4 w-4" />
            বাংলাদেশের লোকাল মার্কেট এখন আরও সহজে খুঁজুন
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Find trusted local shops
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
            Area Bazar আপনাকে আপনার এলাকার জনপ্রিয় মার্কেট, ভেরিফাইড দোকান, এবং
            দরকারি প্রোডাক্ট খুব সহজে খুঁজে পেতে সাহায্য করবে। লোকাল শপ ডিসকাভার
            করুন, মার্কেট দেখুন, আর দ্রুত যোগাযোগ করুন।
          </p>

          <div className="mt-6">
            <HeroSearchBar />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-2xl bg-emerald-600 px-6 text-sm font-semibold hover:bg-emerald-700"
            >
              <Link href="/shops">
                Explore Shops
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl px-6 text-sm font-semibold"
            >
              <Link href="/markets">Browse Markets</Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl border border-border/60 bg-card/70 p-2 text-center backdrop-blur sm:rounded-2xl sm:p-4">
              <div className="flex justify-center text-emerald-600">
                <Store className="h-4 w-4" />
              </div>
              <p className="mt-1 text-sm font-bold sm:mt-3 sm:text-2xl">
                1,200+
              </p>
              <p className="text-[10px] text-muted-foreground sm:text-sm">
                Shops
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-border/60 bg-card/70 p-2 text-center backdrop-blur sm:rounded-2xl sm:p-4">
              <div className="flex justify-center text-emerald-600">
                <MapPin className="h-4 w-4" />
              </div>
              <p className="mt-1 text-sm font-bold sm:mt-3 sm:text-2xl">85+</p>
              <p className="text-[10px] text-muted-foreground sm:text-sm">
                Markets
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-border/60 bg-card/70 p-2 text-center backdrop-blur sm:rounded-2xl sm:p-4">
              <div className="flex justify-center text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <p className="mt-1 text-sm font-bold sm:mt-3 sm:text-2xl">500+</p>
              <p className="text-[10px] text-muted-foreground sm:text-sm">
                Verified Sellers
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-0">
          <PopularMarketSlider items={popularMarkets} />
        </div>
      </div>
    </section>
  );
}
