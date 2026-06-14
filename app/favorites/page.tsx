"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import FavoriteButton from "../../components/FavoriteButton";
import { useFavorites } from "../../hooks/useFavorites";

export default function FavoritesPage() {
    const {
        favorites,
        favoritesCount,
        clearFavorites,
        isLoaded,
    } = useFavorites();

    if (!isLoaded) {
        return (
            <main className="min-h-screen bg-[#07100f] p-10 text-white">
                Loading...
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#07100f] p-6 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-orange-300" />
                    <h1 className="text-4xl font-black">
                        My Favorites
                    </h1>
                </div>

                <p className="mt-3 text-white/60">
                    {favoritesCount} saved places
                </p>

                {favorites.length > 0 && (
                    <button
                        type="button"
                        onClick={clearFavorites}
                        className="mt-5 rounded-full bg-red-500 px-5 py-2 text-sm font-bold"
                    >
                        Clear all
                    </button>
                )}

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((destination) => (
                        <article
                            key={destination.id}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                        >
                            <div className="relative">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="h-64 w-full object-cover"
                                />

                                <div className="absolute right-4 top-4">
                                    <FavoriteButton destination={destination} />
                                </div>
                            </div>

                            <div className="p-5">
                                <p className="text-sm text-orange-300">
                                    {destination.category}
                                </p>

                                <h2 className="mt-2 text-2xl font-black">
                                    {destination.name}
                                </h2>

                                <p className="mt-2 text-sm text-white/50">
                                    {destination.location}
                                </p>

                                <Link
                                    href={destination.href}
                                    className="mt-5 inline-block text-orange-300"
                                >
                                    View destination →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}