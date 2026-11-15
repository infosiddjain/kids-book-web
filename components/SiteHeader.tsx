"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const links = [
  { href: "/books", label: "Stories" },
  { href: "/learn", label: "Letters" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-20 border-b border-blush/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="text-shimmer text-xl font-bold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex gap-1 overflow-x-auto">
          {links.map((l) => {
            const active = path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition duration-300 ${
                  active ? "bg-petal text-white" : "text-ink hover:bg-champagne"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
