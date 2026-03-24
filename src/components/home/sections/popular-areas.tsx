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
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          View all areas <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {areas.map((area) => (
          <Link
            key={area.name}
            href={`/areas/${encodeURIComponent(area.name.toLowerCase())}`}
            className="group rounded-3xl border border-border/60 bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-2xl bg-emerald-100 p-3 dark:bg-emerald-900/30">
                <MapPin className="h-5 w-5 text-emerald-600" />
              </div>

              <span className="rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground">
                Local
              </span>
            </div>

            <h3 className="mt-5 text-lg font-semibold">{area.name}</h3>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Store className="h-4 w-4" />
              <span>{area.shops}</span>
            </div>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {area.categories}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
              Explore area
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
