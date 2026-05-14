"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WelcomePopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // εμφανίζεται όταν μπει ο χρήστης
        setOpen(true);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* background overlay */}
            <div
                className="absolute inset-0 bg-black/70"
                onClick={() => setOpen(false)}
            />

            {/* modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-6 p-8 text-center animate-fadeIn">

                <h2 className="text-2xl font-bold">
                    Welcome to Lesvos 🌿
                </h2>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Discover beaches, taverns, hotels and hidden gems across the island.
                    Your travel guide starts here.
                </p>

                <div className="mt-6 space-y-3">
                    <Link
                        href="/food"
                        className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        🍽 Explore Food & Drinks
                    </Link>

                    <Link
                        href="/hotels"
                        className="block bg-neutral-900 text-white py-2 rounded-lg hover:bg-neutral-800 transition"
                    >
                        🏨 Explore Hotels
                    </Link>
                </div>

                <button
                    onClick={() => setOpen(false)}
                    className="mt-5 text-sm text-gray-500 hover:text-gray-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
}