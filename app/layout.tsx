import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: `${site.name} – Kids Stories in English & Hindi`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.developer }],
  appleWebApp: { capable: true, title: site.name, statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#b76e79",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-blush/60 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-ink/70 sm:flex-row">
            <p>
              © 2026 {site.name} · Made with love by {site.developer}
            </p>
            <nav aria-label="Footer" className="flex gap-4 font-semibold">
              <Link href="/about" className="hover:text-petal-deep">About</Link>
              <Link href="/privacy" className="hover:text-petal-deep">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-petal-deep">Contact Us</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
