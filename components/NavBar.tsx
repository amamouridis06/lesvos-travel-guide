"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-emerald-900/85 backdrop-blur-lg border-b border-emerald-800 shadow-md">
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
              <Link href="/under-construction" className="hover:text-yellow-300 transition">
                Villages
              </Link>
              <Link href="/beaches" className="hover:text-yellow-300 transition">
                Beaches
              </Link>
              <Link href="/food" className="hover:text-yellow-300 transition">
                Food & Drinks
              </Link>
              <Link href="/under-construction" className="hover:text-yellow-300 transition">
                Nature
              </Link>
              <Link href="/hotels" className="hover:text-yellow-300 transition">
                Hotels
              </Link>
              <Link href="/rentals" className="hover:text-yellow-300 transition">
                Rentals
              </Link>
              <Link href="/taxi-services" className="hover:text-yellow-300 transition">
                Taxi
              </Link>
              <Link href="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
              <Link href="/emergency" className="hover:text-yellow-300 transition">
                Emergency
              </Link>
              <Link href="/under-construction" className="hover:text-yellow-300 transition">
                Activities
              </Link>
            </div>

            {/* Mobile button */}
            <div className="md:hidden">
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
            <div className="md:hidden bg-emerald-900/95 border-t border-emerald-800 shadow-lg text-white">
              <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col">
                <Link href="/" onClick={closeMenu} className="py-3 border-b border-white/10 hover:text-yellow-300 transition" >
                  Home
                </Link>
                <Link href="/under-construction" onClick={closeMenu} className="py-3 border-b border-white/10 hover:text-yellow-300 transition" >
                  Villages
                </Link>
                <Link
                    href="/under-construction"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Beaches
                </Link>

                <Link
                    href="/food"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Food & Drinks
                </Link>

                <Link
                    href="/under-construction"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Nature
                </Link>

                <Link
                    href="/hotels"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Hotels
                </Link>
                <Link
                    href="/rentals/"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Rentals
                </Link>
                <Link
                    href="/taxi-services/"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Taxi
                </Link>

                <Link
                    href="/about"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  About
                </Link>

                <Link
                    href="/emergency"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Emergency
                </Link>
                <Link
                    href="under-construction"
                    onClick={closeMenu}
                    className="py-3 border-b border-white/10 hover:text-yellow-300 transition"
                >
                  Activities
                </Link>
              </div>
            </div>
        )}
      </nav>
  );
}