import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shops", href: "/shops" },
  { label: "Areas", href: "/areas" },
  { label: "Categories", href: "/categories" },
  { label: "Markets", href: "/markets" },
];

type Props = {
  pathname?: string;
};

export default function NavbarDesktopNav({ pathname }: Props) {
  return (
    <nav className="hidden items-center gap-1 xl:flex">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-medium transition",
              isActive
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                : "text-foreground/80 hover:bg-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
