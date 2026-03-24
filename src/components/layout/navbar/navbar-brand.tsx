"use client";

import Link from "next/link";

export default function NavbarBrand() {
  return (
    <Link href="/" className="group flex items-center">
      <h1 className="text-xl font-black tracking-tight sm:text-2xl">
        <span className="bg-green-500 bg-clip-text text-transparent">Area</span>
        <span className="text-foreground">Bazar</span>
      </h1>
    </Link>
  );
}
