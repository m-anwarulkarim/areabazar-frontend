import { MapPin, Search, Store } from "lucide-react";

const steps = [
  {
    title: "Choose Your Area",
    description: "Select your city, market, or nearby location first.",
    icon: MapPin,
  },
  {
    title: "Search What You Need",
    description: "Search by shop name, product name, or category.",
    icon: Search,
  },
  {
    title: "Explore Local Shops",
    description: "Browse trusted listings and find the right shop faster.",
    icon: Store,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-muted/30 py-14 dark:bg-muted/10 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-600">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Find Local Shops in 3 Easy Steps
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Built to help people quickly discover shops around them without a
            confusing search experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>

                <div className="mt-5 inline-flex rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  Step {index + 1}
                </div>

                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
