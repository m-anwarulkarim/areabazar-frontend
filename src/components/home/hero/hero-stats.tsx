const stats = [
  { value: "500+", label: "Shops Listed" },
  { value: "50+", label: "Local Markets" },
  { value: "10+", label: "Categories" },
  { value: "Trusted", label: "Verified Listings" },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border/60 bg-white/70 p-4 text-left shadow-sm backdrop-blur dark:bg-background/60"
        >
          <p className="text-lg font-bold sm:text-xl">{item.value}</p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
