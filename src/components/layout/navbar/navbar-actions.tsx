import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, Heart, UserCircle2 } from "lucide-react";

export default function NavbarActions() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-muted-foreground transition hover:bg-muted hover:text-foreground"
        aria-label="Notifications"
      >
        <Bell className="h-4 w-4" />
      </button>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-muted-foreground transition hover:bg-muted hover:text-foreground"
        aria-label="Favorites"
      >
        <Heart className="h-4 w-4" />
      </button>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-muted-foreground transition hover:bg-muted hover:text-foreground"
        aria-label="Account"
      >
        <UserCircle2 className="h-5 w-5" />
      </button>

      <Button
        asChild
        className="h-10 rounded-xl bg-emerald-600 px-4 text-sm font-semibold hover:bg-emerald-700"
      >
        <Link href="/shops/add">List Your Shop</Link>
      </Button>
    </div>
  );
}
