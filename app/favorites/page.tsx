"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Heart,
    MapPin,
    Trash2,
} from "lucide-react";

import FavoriteButton from "@/components/FavoriteButton";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
    const {
        favorites,
        favoritesCount,
        clearFavorites,
        isLoaded,
    } = useFavorites();

    if (!isLoaded) {
        return (
            <main className="min-h-screen bg-[#07100f] px-4 py-24 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="h-12 w-64 animate-pulse rounded-xl bg-white/10" />

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="h-[420px] animate-pulse rounded-[2rem] bg-white/[0.06]"
                            />
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#07100f] text-white">
            <section className="border-b border-white/10 px-4 py-20 sm:px-6 sm:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                        <Heart className="h-4 w-4" />
                        Your favorites
                    </div>

                    <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <h1 className="text-5xl font-black tracking-[-0.06em] sm:text-7xl">
                                Saved places
                                <span className="block text-white/35">
                  in Lesvos.
                </span>
                            </h1>

                            <p className="mt-5 text-white/55">
                                {favoritesCount}{" "}
                                {favoritesCount === 1
                                    ? "saved destination"
                                    : "saved destinations"}
                            </p>
                        </div>

                        {favorites.length > 0 && (
                            <button
                                type="button"
                                onClick={clearFavorites}
                                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white/70 transition hover:bg-red-500/10 hover:text-red-300"
                            >
                                <Trash2 className="h-4 w-4" />
                                Clear all
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {favorites.length === 0 ? (
                    <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] px-6 py-20 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.06]">
                            <Heart className="h-7 w-7 text-white/35" />
                        </div>

                        <h2 className="mt-6 text-3xl font-black">
                            No favorites yet
                        </h2>

                        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/50">
                            Press the heart icon on beaches, villages,
                            restaurants and attractions to save them here.
                        </p>

                        <Link
                            href="/explore"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-300 px-6 py-3.5 text-sm font-black text-stone-950"
                        >
                            Explore Lesvos
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {favorites.map((destination) => (
                            <article
                                key={destination.id}
                                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055]"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={destination.image}
                                        alt={destination.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                    <div className="absolute right-4 top-4">
                                        <FavoriteButton
                                            destination={destination}
                                        />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-6">
                                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                                            <MapPin className="h-4 w-4" />
                                            {destination.location}
                                        </p>

                                        <h2 className="mt-2 text-3xl font-black">
                                            {destination.name}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-6">
                  <span className="rounded-full bg-orange-300/10 px-3 py-1.5 text-xs font-bold text-orange-300">
                    {destination.category}
                  </span>

                                    {destination.description && (
                                        <p className="mt-5 line-clamp-3 text-sm leading-7 text-white/55">
                                            {destination.description}
                                        </p>
                                    )}

                                    <Link
                                        href={destination.href}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-300"
                                    >
                                        View destination
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}