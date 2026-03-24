import Link from "next/link";
import { BadgeCheck, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const shops = [
  {
    name: "Rahman Electronics",
    area: "Dakbangla Bazar, Khulna",
    category: "Electronics",
    rating: "4.8",
    verified: true,
  },
  {
    name: "Smart Mobile Corner",
    area: "Sonadanga, Khulna",
    category: "Mobile Accessories",
    rating: "4.7",
    verified: true,
  },
  {
    name: "Bismillah Grocery",
    area: "Khulna City",
    category: "Grocery",
    rating: "4.6",
    verified: false,
  },
  {
    name: "New Market Fashion House",
    area: "New Market, Khulna",
    category: "Fashion",
    rating: "4.9",
    verified: true,
  },
  {
    name: "Kitchen Plus",
    area: "Gollamari, Khulna",
    category: "Home & Kitchen",
    rating: "4.5",
    verified: false,
  },
  {
    name: "Care Pharmacy",
    area: "Shibbari, Khulna",
    category: "Pharmacy",
    rating: "4.8",
    verified: true,
  },
];

export default function FeaturedShops() {
  return (
    <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-600">Featured Shops</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted Local Shops Near You
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Browse highlighted local shops with verified listings, ratings, and
            easy location visibility.
          </p>
        </div>

        <Button asChild variant="outline" className="rounded-2xl">
          <Link href="/shops">Browse All Shops</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {shops.map((shop) => (
          <div
            key={shop.name}
            className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-40 bg-gradient-to-br from-emerald-100 via-white to-teal-100 dark:from-emerald-950/30 dark:via-background dark:to-teal-950/20" />

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{shop.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {shop.category}
                  </p>
                </div>

                {shop.verified && (
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span>{shop.area}</span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                <span>{shop.rating} rating</span>
              </div>

              <div className="mt-5 flex gap-3">
                <Button
                  asChild
                  className="flex-1 rounded-2xl bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/shops/demo">View Shop</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-2xl"
                >
                  <Link href="/shops/demo/products">View Products</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
