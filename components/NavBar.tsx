"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname.startsWith("/en");
  const toggleLanguage =
    isEnglish ? pathname.replace("/en", "") || "/" : `/en${pathname}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-white text-lg font-bold tracking-wide"
        >
          Lesvos Travel Guide
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          {/* Explore Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button className="hover:text-yellow-400 transition">
              Explore
            </button>

            {exploreOpen && (
              <div className="absolute top-8 left-0 bg-black rounded-lg py-3 w-48 shadow-lg">
                <Link
                  href="/beaches"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Beaches
                </Link>
                <Link
                  href="/culture"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Culture & History
                </Link>
                <Link
                  href="/activities"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Activities
                </Link>
                <Link
                  href="/maps"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Maps
                </Link>
              </div>
            )}
          </div>

          <Link href="/villages" className="hover:text-yellow-400 transition">
            Villages
          </Link>

          <Link href="/food" className="hover:text-yellow-400 transition">
            Food
          </Link>

          <Link href="/nature" className="hover:text-yellow-400 transition">
            Nature
          </Link>

          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          {/* Language Toggle */}
          <button
            onClick={() => router.push(toggleLanguage)}
            className="ml-4 px-3 py-1 rounded-full border border-white/40 text-xs hover:bg-white hover:text-black transition"
          >
            {isEnglish ? "EL" : "EN"}
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black text-white border-t border-white/10 px-6 py-4 space-y-3 text-sm">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <div className="pt-2 border-t border-white/10">
            <p className="text-xs uppercase text-gray-400 mb-2">Explore</p>
            <Link href="/beaches" onClick={() => setMobileOpen(false)}>
              Beaches
            </Link>
            <Link href="/culture" onClick={() => setMobileOpen(false)}>
              Culture & History
            </Link>
            <Link href="/activities" onClick={() => setMobileOpen(false)}>
              Activities
            </Link>
            <Link href="/maps" onClick={() => setMobileOpen(false)}>
              Maps
            </Link>
          </div>

          <Link href="/villages" onClick={() => setMobileOpen(false)}>
            Villages
          </Link>
          <Link href="/food" onClick={() => setMobileOpen(false)}>
            Food
          </Link>
          <Link href="/nature" onClick={() => setMobileOpen(false)}>
            Nature
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
