import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

/* Self-hosted at build time by next/font — no runtime request to Google.

   Fraunces is variable: requesting only the opsz axis leaves WONK and SOFT
   pinned at their defaults of 0, which is what DESIGN_BRIEF.md §3.2 asks for.
   No weight is given, so the full 100–900 range ships and the type scale can
   use 400 for display and 500 for H3. */
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* Placeholder metadata — the full SEO pass happens in Phase 12. */
export const metadata: Metadata = {
  title: `${site.name} — Wholesale Cotton Towel Manufacturer`,
  description: site.hero.subtext,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-2 focus:z-50 focus:rounded focus:bg-accent focus:px-2 focus:py-1 focus:text-bg"
        >
          Skip to content
        </a>

        <header>
          <Navbar />
        </header>

        <main id="main">{children}</main>

        {/* Footer — Phase 11 */}
        <footer />
      </body>
    </html>
  );
}
