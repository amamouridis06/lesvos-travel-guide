"use client";

import { Heart } from "lucide-react";

import {
    FavoriteDestination,
    useFavorites,
} from "@/hooks/useFavorites";

type FavoriteButtonProps = {
    destination: FavoriteDestination;
    className?: string;
};

export default function FavoriteButton({
                                           destination,
                                           className = "",
                                       }: FavoriteButtonProps) {
    const {
        isFavorite,
        toggleFavorite,
        isLoaded,
    } = useFavorites();

    const saved = isFavorite(destination.id);

    if (!isLoaded) {
        return (
            <div
                className={`h-11 w-11 animate-pulse rounded-full bg-white/15 ${className}`}
            />
        );
    }

    return (
        <button
            type="button"
            onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();

                toggleFavorite(destination);
            }}
            aria-label={
                saved
                    ? `Remove ${destination.name} from favorites`
                    : `Add ${destination.name} to favorites`
            }
            className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition ${
                saved
                    ? "border-rose-400 bg-rose-500 text-white"
                    : "border-white/20 bg-black/30 text-white hover:bg-white hover:text-stone-950"
            } ${className}`}
        >
            <Heart
                className="h-5 w-5"
                fill={saved ? "currentColor" : "none"}
            />
        </button>
    );
}