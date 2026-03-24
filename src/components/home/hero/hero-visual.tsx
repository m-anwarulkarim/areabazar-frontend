import {
  BadgeCheck,
  MapPin,
  ShoppingBag,
  Star,
  Store,
  TrendingUp,
} from "lucide-react";

const featuredShops = [
  {
    title: "Dakbangla Bazar",
    subtitle: "Electronics & Accessories",
    badge: "Popular",
    icon: Store,
  },
  {
    title: "New Market",
    subtitle: "Fashion & Lifestyle",
    badge: "Trending",
    icon: ShoppingBag,
  },
];

export default function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-3 top-4 z-20 hidden rounded-2xl border border-border/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:block dark:bg-background/90">
        <p className="text-[11px] text-muted-foreground">Top Category</p>
        <p className="mt-1 text-sm font-semibold">Mobile Accessories</p>
      </div>

      <div className="absolute -right-3 bottom-8 z-20 hidden rounded-2xl border border-border/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:block dark:bg-background/90">
        <p className="text-[11px] text-muted-foreground">Trending Area</p>
        <p className="mt-1 text-sm font-semibold">Khulna City</p>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 p-3 shadow-[0_30px_80px_-30px_rgba(16,185,129,0.25)] backdrop-blur-xl dark:bg-background/70 sm:p-4">
        <div className="rounded-[28px] bg-gradient-to-br from-emerald-100 via-white to-teal-100 p-3 dark:from-emerald-950/40 dark:via-background dark:to-teal-950/30 sm:p-5">
          <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-white/40 bg-white/80 p-4 dark:bg-background/70 sm:min-h-[500px] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%)]" />

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-border/60 bg-white/90 px-3 py-2 shadow-sm dark:bg-card/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-medium">Khulna</span>
                </div>
              </div>

              <div className="rounded-full border border-border/60 bg-white/90 px-3 py-2 shadow-sm dark:bg-card/80">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-medium">Verified Shops</span>
                </div>
              </div>

              <div className="rounded-full border border-border/60 bg-white/90 px-3 py-2 shadow-sm dark:bg-card/80">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-medium">Local Deals</span>
                </div>
              </div>
            </div>

            <div className="relative mt-6 h-[180px] rounded-[24px] border border-border/50 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background">
              <div className="absolute left-[16%] top-[24%] h-4 w-4 rounded-full bg-emerald-500 ring-8 ring-emerald-100 dark:ring-emerald-900/40" />
              <div className="absolute left-[48%] top-[34%] h-4 w-4 rounded-full bg-teal-500 ring-8 ring-teal-100 dark:ring-teal-900/40" />
              <div className="absolute right-[18%] top-[44%] h-4 w-4 rounded-full bg-lime-500 ring-8 ring-lime-100 dark:ring-lime-900/40" />
              <div className="absolute left-[30%] bottom-[18%] h-4 w-4 rounded-full bg-green-600 ring-8 ring-green-100 dark:ring-green-900/40" />
            </div>

            <div className="mt-5 grid gap-3">
              {featuredShops.map((shop) => {
                const Icon = shop.icon;

                return (
                  <div
                    key={shop.title}
                    className="rounded-2xl border border-border/60 bg-white/90 p-4 shadow-lg backdrop-blur dark:bg-card/90"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-start gap-3">
                        <div className="rounded-2xl bg-emerald-100 p-2.5 dark:bg-emerald-900/30">
                          <Icon className="h-5 w-5 text-emerald-600" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold sm:text-base">
                            {shop.title}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            {shop.subtitle}
                          </p>

                          <div className="mt-2 flex items-center gap-1.5">
                            <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
                            <span className="text-xs text-muted-foreground">
                              4.8 rating
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {shop.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-border/60 bg-white/90 p-3 text-center shadow-sm dark:bg-card/80">
                <p className="text-lg font-bold">500+</p>
                <p className="text-[11px] text-muted-foreground">Shops</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-white/90 p-3 text-center shadow-sm dark:bg-card/80">
                <p className="text-lg font-bold">50+</p>
                <p className="text-[11px] text-muted-foreground">Markets</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-white/90 p-3 text-center shadow-sm dark:bg-card/80">
                <p className="text-lg font-bold">10+</p>
                <p className="text-[11px] text-muted-foreground">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
