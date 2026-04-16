"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname.startsWith("/en");
  const toggleLanguage = isEnglish
  ? pathname.replace(/^\/en/, "") || "/"
  : pathname === "/"
  ? "/en"
  : `/en${pathname}`;

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600/90 backdrop-blur-md border-b border-blue-500 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-semibold text-base sm:text-lg"
            onClick={closeMenu}
          >
            Lesvos Travel Guide
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
            <Link href="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
            <Link href="/villages" className="hover:text-yellow-300 transition">
              Villages
            </Link>
            <Link href="/beaches" className="hover:text-yellow-300 transition">
              Beaches
            </Link>
            <Link href="/food" className="hover:text-yellow-300 transition">
              Food
            </Link>
            <Link href="/nature" className="hover:text-yellow-300 transition">
              Nature
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition">
              About
            </Link>

            <button
              onClick={() => router.push(toggleLanguage)}
              className="ml-2 px-3 py-1 rounded-full border border-white/40 text-xs hover:bg-white hover:text-blue-700 transition"
            >
              {isEnglish ? "EL" : "EN"}
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => router.push(toggleLanguage)}
              className="px-3 py-1 rounded-full border border-white/40 text-xs text-white hover:bg-white hover:text-blue-700 transition"
            >
              {isEnglish ? "EL" : "EN"}
            </button>

            <button
              className="text-2xl text-white leading-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-blue-600/90 border-t shadow-lg text-white [&_a]:text-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="py-3 text-neutral-800 border-b border-neutral-100"
            >
              Home
            </Link>

            <Link
              href="/villages"
              onClick={closeMenu}
              className="py-3 text-neutral-800 border-b border-neutral-100"
            >
              Villages
            </Link>

            <Link
              href="/beaches"
              onClick={closeMenu}
              className="py-3 text-neutral-800 border-b border-neutral-100"
            >
              Beaches
            </Link>

            <Link
              href="/food"
              onClick={closeMenu}
              className="py-3 text-neutral-800 border-b border-neutral-100"
            >
              Food
            </Link>

            <Link
              href="/nature"
              onClick={closeMenu}
              className="py-3 text-neutral-800 border-b border-neutral-100"
            >
              Nature
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="py-3 text-neutral-800"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
