import Link from "next/link";
import {
  CookingPot,
  MonitorSmartphone,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Stethoscope,
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: MonitorSmartphone },
  { name: "Grocery", icon: ShoppingBasket },
  { name: "Fashion", icon: Shirt },
  { name: "Mobile Accessories", icon: Smartphone },
  { name: "Home & Kitchen", icon: CookingPot },
  { name: "Pharmacy", icon: Stethoscope },
];

export default function BrowseCategories() {
  return (
    <section className="bg-muted/30 py-14 dark:bg-muted/10 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-600">
            Browse Categories
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Discover What You Need Faster
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Jump directly into the category you need and explore nearby shops
            with fewer clicks.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/categories/${encodeURIComponent(category.name.toLowerCase())}`}
                className="group rounded-3xl border border-border/60 bg-card p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>

                <h3 className="mt-4 text-sm font-semibold sm:text-base">
                  {category.name}
                </h3>

                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                  Explore local shops
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
