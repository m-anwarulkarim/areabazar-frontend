import Link from "next/link";
import { ArrowRight, MapPin, Store } from "lucide-react";

const areas = [
  {
    name: "Khulna City",
    shops: "120+ Shops",
    categories: "Electronics, Grocery, Fashion",
  },
  {
    name: "Sonadanga",
    shops: "85+ Shops",
    categories: "Mobile, Grocery, Home & Kitchen",
  },
  {
    name: "Dakbangla Bazar",
    shops: "95+ Shops",
    categories: "Electronics, Accessories, Repair",
  },
  {
    name: "New Market",
    shops: "70+ Shops",
    categories: "Fashion, Lifestyle, Cosmetics",
  },
];

export default function PopularAreas() {
  return (
    <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-600">Popular Areas</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Find Shops by Your Area
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Browse shops based on your city, market, or local neighborhood to
            find nearby products faster.
          </p>
        </div>

        <Link
          href="/areas"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          View all areas
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {areas.map((area) => (
          <Link
            key={area.name}
            href="#"
            className="group rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-5"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-2 sm:gap-3">
              <div className="rounded-xl bg-emerald-100 p-2 dark:bg-emerald-900/30 sm:rounded-2xl sm:p-3">
                <MapPin className="h-4 w-4 text-emerald-600 sm:h-5 sm:w-5" />
              </div>

              <span className="rounded-full bg-muted px-2 py-1 text-[10px] text-muted-foreground sm:px-3 sm:text-[11px]">
                Local
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-base font-semibold leading-5 sm:text-lg">
              {area.name}
            </h3>

            {/* Shops */}
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
              <Store className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{area.shops}</span>
            </div>

            {/* Category */}
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
              {area.categories}
            </p>

            {/* CTA */}
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 sm:mt-5 sm:gap-2 sm:text-sm">
              Explore
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
