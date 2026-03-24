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

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href="#"
                className="group rounded-2xl border border-border/60 bg-card p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-5"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 transition-colors dark:bg-emerald-900/30 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
                </div>

                <h3 className="mt-3 text-xs font-semibold leading-5 sm:mt-4 sm:text-base">
                  {category.name}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-muted-foreground sm:mt-2 sm:text-xs">
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
