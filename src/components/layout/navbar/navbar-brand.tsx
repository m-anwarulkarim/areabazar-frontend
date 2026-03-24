import AreaBazarLogo from "@/components/areabazar";
import Link from "next/link";

export default function NavbarBrand() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Go to AreaBazar homepage"
    >
      <AreaBazarLogo size="md" variant="full" className="h-10 w-auto sm:h-11" />
    </Link>
  );
}
