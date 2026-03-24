import { MapPin, Search } from "lucide-react";

export default function NavbarSearch() {
  return (
    <div className="hidden min-w-[320px] flex-1 items-center justify-center lg:flex xl:px-4">
      <div className="flex w-full max-w-[520px] items-center gap-2 rounded-2xl border border-border/70 bg-background/80 p-2 shadow-sm backdrop-blur">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl px-2">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search shops, products, or markets..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="hidden h-8 w-px bg-border/70 sm:block" />

        <div className="hidden items-center gap-2 rounded-xl px-2 sm:flex">
          <MapPin className="h-4 w-4 text-emerald-600" />
          <input
            type="text"
            placeholder="Location"
            className="w-24 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <button className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Search
        </button>
      </div>
    </div>
  );
}
