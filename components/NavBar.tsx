"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type NavCategory = {
  label: string;
  items: NavLink[];
};

const navCategories: NavCategory[] = [
  {
    label: "Discover",
    items: [
      {
        label: "Villages",
        href: "/villages",
      },
      {
        label: "Beaches",
        href: "/under-construction",
      },
      {
        label: "Nature",
        href: "/under-construction",
      },
    ],
  },
  {
    label: "Stay",
    items: [
      {
        label: "Accommodation",
        href: "/accommodation",
      },
      {
        label: "Rentals",
        href: "/rentals",
      },
    ],
  },
  {
    label: "Experience",
    items: [
      {
        label: "Food & Drinks",
        href: "/food-drinks",
      },
      {
        label: "Activities",
        href: "/activities/kariofilis-ecofarm",
      },
      {
        label: "Souvenirs",
        href: "/souvenirs/mourelia",
      },
      {
        label: "Events",
        href: "/under-construction",
      },
    ],
  },
  {
    label: "Travel Info",
    items: [
      {
        label: "Transfers",
        href: "/transfers",
      },
      {
        label: "Emergency",
        href: "/emergency",
      },
    ],
  },
  {
    label: "About",
    items: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Join Our Team",
        href: "/join-us",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
    ],
  },
  // {
  //   label: "Favourites",
  //   href: "/favourites",
  // },

];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] =
      useState<string | null>(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenMobileCategory(null);
  };

  const toggleMobileCategory = (label: string) => {
    setOpenMobileCategory((currentCategory) =>
        currentCategory === label ? null : label
    );
  };

  return (
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-emerald-800 bg-emerald-900/90 shadow-md backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
                href="/"
                onClick={closeMenu}
                className="whitespace-nowrap text-sm font-semibold text-white transition hover:text-yellow-300 sm:text-base lg:text-lg"
            >
              Lesvos Travel Guide
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-5 text-sm font-medium text-white md:flex lg:gap-8">
              {navCategories.map((category) => (
                  <div
                      key={category.label}
                      className="group relative"
                  >
                    <button
                        type="button"
                        className="flex items-center gap-1 py-5 transition hover:text-yellow-300 focus:text-yellow-300 focus:outline-none"
                    >
                      {category.label}

                      <span
                          aria-hidden="true"
                          className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      >
                    ▾
                  </span>
                    </button>

                    {/* Dropdown */}
                    <div className="invisible absolute left-1/2 top-full min-w-52 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-emerald-950/95 p-2 opacity-0 shadow-xl backdrop-blur-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {category.items.map((item) => (
                          <Link
                              key={item.label}
                              href={item.href}
                              className="block rounded-lg px-4 py-3 whitespace-nowrap text-white transition hover:bg-white/10 hover:text-yellow-300 focus:bg-white/10 focus:text-yellow-300 focus:outline-none"
                          >
                            {item.label}
                          </Link>
                      ))}
                    </div>
                  </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
                type="button"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => {
                  setMobileOpen((currentValue) => !currentValue);
                  setOpenMobileCategory(null);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl leading-none text-white transition hover:bg-white/10 hover:text-yellow-300 md:hidden"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
            <div
                id="mobile-navigation"
                className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-emerald-800 bg-emerald-950/95 text-white shadow-lg md:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-3">
                {navCategories.map((category) => {
                  const isOpen = openMobileCategory === category.label;

                  return (
                      <div
                          key={category.label}
                          className="border-b border-white/10"
                      >
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => toggleMobileCategory(category.label)}
                            className="flex w-full items-center justify-between py-4 text-left font-medium transition hover:text-yellow-300"
                        >
                          <span>{category.label}</span>

                          <span
                              aria-hidden="true"
                              className={`text-sm transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : ""
                              }`}
                          >
                      ▾
                    </span>
                        </button>

                        {isOpen && (
                            <div className="mb-3 rounded-xl bg-black/10 p-2">
                              {category.items.map((item) => (
                                  <Link
                                      key={item.label}
                                      href={item.href}
                                      onClick={closeMenu}
                                      className="block rounded-lg px-4 py-3 text-sm text-white/90 transition hover:bg-white/10 hover:text-yellow-300"
                                  >
                                    {item.label}
                                  </Link>
                              ))}
                            </div>
                        )}
                      </div>
                  );
                })}
              </div>
            </div>
        )}
      </nav>
  );
}