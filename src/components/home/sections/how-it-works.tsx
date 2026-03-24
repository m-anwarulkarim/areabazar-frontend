"use client";

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
    <section className="relative overflow-hidden bg-muted/30 py-14 dark:bg-muted/10 lg:py-24">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_40%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
            Process
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find Local Shops in 3 Easy Steps
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            সহজ ৩টি ধাপে আপনার এলাকার প্রয়োজনীয় দোকান এবং সেবা খুঁজে নিন কোনো
            ঝামেলা ছাড়াই।
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-16">
          {/* Connector Line (Only for Desktop) */}
          <div className="absolute top-1/2 left-[10%] right-[10%] hidden h-px border-t-2 border-dashed border-border md:block" />

          <div className="mt-10 grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex flex-col items-center rounded-xl border border-border/60 bg-card p-3 text-center shadow-sm sm:rounded-2xl sm:p-6"
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
                  </div>

                  {/* Step */}
                  <div className="mt-2 text-[10px] text-muted-foreground sm:mt-5 sm:text-xs">
                    Step {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="mt-1 text-xs font-semibold sm:mt-3 sm:text-lg">
                    {step.title}
                  </h3>

                  {/* Description (hide on mobile) */}
                  <p className="hidden sm:block mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
