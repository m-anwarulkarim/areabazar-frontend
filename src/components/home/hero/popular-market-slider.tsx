"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { MapPin, MoveRight, Store, TrendingUp } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type MarketSlideItem = {
  id: string;
  name: string;
  location: string;
  shops: number;
  badge: string;
  image: string;
};

type Props = {
  items: MarketSlideItem[];
};

export default function PopularMarketSlider({ items }: Props) {
  return (
    <div className="relative">
      <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-emerald-500/20 blur-3xl lg:block" />
      <div className="absolute -bottom-4 -right-4 hidden h-28 w-28 rounded-full bg-lime-400/20 blur-3xl lg:block" />

      <div className="overflow-hidden rounded-[32px] border border-border/60 bg-card/70 p-3 shadow-2xl shadow-black/5 backdrop-blur-xl sm:p-4">
        <div className="mb-4 flex items-center justify-between px-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Popular Markets
            </p>
            <h3 className="mt-1 text-xl font-bold sm:text-2xl">
              Trending marketplaces
            </h3>
          </div>

          <Badge
            variant="secondary"
            className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-700 dark:text-emerald-300"
          >
            <TrendingUp className="mr-1 h-3.5 w-3.5" />
            Live Picks
          </Badge>
        </div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id}>
                <div className="group overflow-hidden rounded-[28px] border border-border/60 bg-background">
                  <div className="relative h-[260px] w-full overflow-hidden sm:h-[330px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      priority
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    <div className="absolute left-4 top-4">
                      <Badge className="rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur-md">
                        {item.badge}
                      </Badge>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                      <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="text-xl font-bold sm:text-2xl">
                              {item.name}
                            </h4>

                            <div className="mt-2 flex items-center gap-2 text-sm text-white/85">
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </div>

                            <div className="mt-2 flex items-center gap-2 text-sm text-white/85">
                              <Store className="h-4 w-4" />
                              <span>{item.shops}+ shops available</span>
                            </div>
                          </div>

                          <Button
                            asChild
                            size="icon"
                            className="h-11 w-11 shrink-0 rounded-full bg-white text-foreground hover:bg-white/90"
                          >
                            <Link href="/markets">
                              <MoveRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>

                        <div className="mt-4 flex gap-2">
                          <Button
                            asChild
                            className="h-11 rounded-2xl bg-emerald-600 px-4 hover:bg-emerald-700"
                          >
                            <Link href="/markets">View Market</Link>
                          </Button>

                          <Button
                            asChild
                            variant="secondary"
                            className="h-11 rounded-2xl border border-white/20 bg-white/10 px-4 text-white hover:bg-white/20"
                          >
                            <Link href="/shops">Explore Shops</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
