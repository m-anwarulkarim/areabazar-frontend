import Image from "next/image";
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
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Smart Mobile Corner",
    area: "Sonadanga, Khulna",
    category: "Mobile Accessories",
    rating: "4.7",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bismillah Grocery",
    area: "Khulna City",
    category: "Grocery",
    rating: "4.6",
    verified: false,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "New Market Fashion House",
    area: "New Market, Khulna",
    category: "Fashion",
    rating: "4.9",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kitchen Plus",
    area: "Gollamari, Khulna",
    category: "Home & Kitchen",
    rating: "4.5",
    verified: false,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Care Pharmacy",
    area: "Shibbari, Khulna",
    category: "Pharmacy",
    rating: "4.8",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedShops() {
  return (
    <section className="w-full py-12 md:container md:mx-auto md:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 px-4 flex flex-col gap-3 md:px-0 md:flex-row md:items-end md:justify-between">
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

      <div className="grid grid-cols-2 gap-3 px-3 sm:px-4 md:px-0 sm:gap-2 md:grid-cols-2 xl:grid-cols-3">
        {shops.map((shop) => (
          <div
            key={shop.name}
            className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-40 w-full overflow-hidden sm:h-44">
              <Image
                src={shop.image}
                alt={shop.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
            </div>

            <div className="p-3 sm:p-5">
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <div>
                  <h3 className="text-sm font-semibold sm:text-lg">
                    {shop.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {shop.category}
                  </p>
                </div>

                {shop.verified && (
                  <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 sm:px-3 sm:text-[11px]">
                    <BadgeCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    Verified
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <MapPin className="h-3.5 w-3.5 text-emerald-600 sm:h-4 sm:w-4" />
                <span>{shop.area}</span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500 sm:h-4 sm:w-4" />
                <span>{shop.rating} rating</span>
              </div>

              <div className="mt-4 flex gap-2 sm:gap-3">
                <Button
                  asChild
                  size="sm"
                  className="flex-1 rounded-xl bg-emerald-600 text-xs hover:bg-emerald-700 sm:rounded-2xl sm:text-sm"
                >
                  <Link
                    href={`/shops/${shop.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    View
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 rounded-xl text-xs sm:rounded-2xl sm:text-sm"
                >
                  <Link href="#">Products</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
