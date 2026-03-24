import { MapPin, Search, SlidersHorizontal } from "lucide-react";

const quickFilters = [
  "Nearby Shops",
  "Verified Shops",
  "Electronics",
  "Grocery",
  "Khulna",
  "Dakbangla Bazar",
];

export default function HeroSearch() {
  return (
    <div className="rounded-3xl border border-border/60 bg-white/85 p-3 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.18)] backdrop-blur-xl dark:bg-background/80">
      <div className="grid gap-3 xl:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div className="flex h-12 items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search shops, products, or markets..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex h-12 items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4">
          <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder="Select location"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex h-12 items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4">
          <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted-foreground" />
          <select className="w-full bg-transparent text-sm outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Grocery</option>
            <option>Fashion</option>
            <option>Mobile Accessories</option>
            <option>Home & Kitchen</option>
            <option>Pharmacy</option>
          </select>
        </div>

        <button className="h-12 rounded-2xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700">
          Search
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {quickFilters.map((item) => (
          <button
            key={item}
            className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-muted"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
