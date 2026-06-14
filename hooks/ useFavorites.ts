"use client";

import { useCallback, useEffect, useState } from "react";

export type FavoriteDestination = {
    id: string;
    name: string;
    location: string;
    category: string;
    description?: string
    image: string;
    href: string;
};

const STORAGE_KEY = "lesvos-favorites";

function getStoredFavorites(): FavoriteDestination[] {
    if (typeof window === "undefined") return [];

    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) return [];

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function useFavorites() {
    const [favorites, setFavorites] = useState<FavoriteDestination[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setFavorites(getStoredFavorites());
        setIsLoaded(true);
    }, []);

    const saveFavorites = useCallback(
        (items: FavoriteDestination[]) => {
            setFavorites(items);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
            window.dispatchEvent(new Event("favorites-updated"));
        },
        [],
    );

    const toggleFavorite = useCallback(
        (destination: FavoriteDestination) => {
            const current = getStoredFavorites();

            const exists = current.some(
                (item) => item.id === destination.id,
            );

            if (exists) {
                saveFavorites(
                    current.filter((item) => item.id !== destination.id),
                );
            } else {
                saveFavorites([...current, destination]);
            }
        },
        [saveFavorites],
    );

    const isFavorite = useCallback(
        (id: string) =>
            favorites.some((item) => item.id === id),
        [favorites],
    );

    const clearFavorites = useCallback(() => {
        saveFavorites([]);
    }, [saveFavorites]);

    useEffect(() => {
        const syncFavorites = () => {
            setFavorites(getStoredFavorites());
        };

        window.addEventListener(
            "favorites-updated",
            syncFavorites,
        );

        window.addEventListener("storage", syncFavorites);

        return () => {
            window.removeEventListener(
                "favorites-updated",
                syncFavorites,
            );

            window.removeEventListener(
                "storage",
                syncFavorites,
            );
        };
    }, []);

    return {
        favorites,
        favoritesCount: favorites.length,
        isLoaded,
        isFavorite,
        toggleFavorite,
        clearFavorites,
    };
}