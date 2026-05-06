"use client";

import { Car as CarIcon, Phone, MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- SEASONS ---------------- */
const seasons = [
    { name: "Low Season", start: "2026-01-01", end: "2026-05-31" },
    { name: "High Season", start: "2026-06-01", end: "2026-09-30" },
    { name: "Mid Season", start: "2026-10-01", end: "2026-12-31" },
];

function getCurrentSeason() {
    const today = new Date();


return seasons.find((season) => {
    const start = new Date(season.start);
    const end = new Date(season.end);
    return today >= start && today <= end;
});


}

/* ---------------- TYPES ---------------- */
type CarType = {
    name: string;
    image: string;
    description: string;
    prices: {
        low: number;
        mid: number;
        high: number;
    };
    specs: {
        class: string;
        passengers: number;
        doors: number;
        luggage: number;
        fuel: string;
        transmission: string;
        speed: string;
        ac: boolean;
    };
};

/* ---------------- CARS ---------------- */
const cars: CarType[] = [
    {
        name: "OPEL KARL",
        image: "/opencarl.jpg",
        description: "Perfect for city driving",
        prices: { low: 20, mid: 30, high: 45 },
        specs: { class: "A", passengers: 4, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true },
    },
    {
        name: "OPEL CORSA",
        image: "/corsa.jpg",
        description: "Perfect for city driving",
        prices: { low: 25, mid: 35, high: 50 },
        specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: false },
    },
    {
        name: "HYUNDAI I20",
        image: "/i20.jpg",
        description: "Great balance",
        prices: { low: 28, mid: 38, high: 55 },
        specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: true },
    },
    {
        name: "SKODA FABIA",
        image: "/fabia.jpg",
        description: "Comfort driving",
        prices: { low: 30, mid: 40, high: 60 },
        specs: { class: "C", passengers: 5, doors: 5, luggage: 3, fuel: "Petrol", transmission: "Manual", speed: "Max 190", ac: false },
    },
];

/* ---------------- COMPONENT ---------------- */
export default function Home() {
    const season = getCurrentSeason();


    function getPrice(car: CarType) {
        if (!season) return "";

        if (season.name === "Low Season") return car.prices.low;
        if (season.name === "Mid Season") return car.prices.mid;
        if (season.name === "High Season") return car.prices.high;
    }

    return (
        <main className="bg-slate-50 text-gray-800">

            {/* HERO */}
            <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
                <img src="/5hero.jpg" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">5 UNITED CAR RENTAL</h1>
                </div>
            </section>

            {/* CARS */}
            <section className="py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10">Our Fleet</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cars.map((car, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            {/* IMAGE + BADGES */}
                            <div className="relative">
                                <img src={car.image} className="w-full h-52 object-cover"/>

                                {/* PRICE */}
                                <div
                                    className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                                    €{getPrice(car)} / day
                                </div>

                                {/* SEASON */}
                                <div
                                    className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                                    {season?.name}
                                </div>
                            </div>

                            {/* INFO */}
                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{car.name}</h3>
                                <p className="text-sm text-gray-600">{car.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </main>
    );
}
