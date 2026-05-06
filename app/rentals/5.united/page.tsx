"use client";

import { motion } from "framer-motion";

/* ---------------- SEASONS ---------------- */
const seasons = [
    { name: "Low Season", start: "2026-01-01", end: "2026-04-15" },
    { name: "Mid Season", start: "2026-04-16", end: "2026-06-20" },
    { name: "High Season", start: "2026-06-21", end: "2026-09-14" },
    { name: "Mid Season", start: "2026-09-15", end: "2026-10-31" },

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
    { name: "OPEL KARL", image: "/opencarl.jpg", description: "City car", prices: { low: 18 - 25, mid: 25 - 30, high: 40 - 50 }, specs: { class: "A", passengers: 4, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true } },
    { name: "FIAT PANDA", image: "/panda.jpg", description: "City", prices: { low: 22, mid: 30, high: 45 }, specs: { class: "A", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true } },
    { name: "HYUNDAI I10", image: "/i10.jpg", description: "City", prices: { low: 20, mid: 28, high: 40 }, specs: { class: "A", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 160", ac: true } },
    { name: "TOYOTA AYGO", image: "/aygo.jpg", description: "City", prices: { low: 20, mid: 28, high: 40 }, specs: { class: "A", passengers: 4, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 160", ac: true } },
    { name: "OPEL CORSA", image: "/corsa.jpg", description: "City car", prices: { low: 25, mid: 35, high: 50 }, specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: false } },
    { name: "HYUNDAI I20", image: "/i20.jpg", description: "City car", prices: { low: 28, mid: 38, high: 55 }, specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: true } },
    { name: "SKODA FABIA", image: "/fabia.jpg", description: "Comfort", prices: { low: 30, mid: 40, high: 60 }, specs: { class: "C", passengers: 5, doors: 5, luggage: 3, fuel: "Petrol", transmission: "Manual", speed: "Max 190", ac: false } },
    { name: "RENAULT CLIO", image: "/clio.jpg", description: "Reliable", prices: { low: 30, mid: 42, high: 60 }, specs: { class: "C", passengers: 5, doors: 5, luggage: 2, fuel: "Diesel", transmission: "Manual", speed: "Max 180", ac: true } },
    { name: "OPEL ASTRA", image: "/astra.jpg", description: "Family car", prices: { low: 35, mid: 50, high: 70 }, specs: { class: "D", passengers: 5, doors: 5, luggage: 4, fuel: "Diesel", transmission: "Manual", speed: "Max 200", ac: false } },
    { name: "SKODA YETI", image: "/yeti.jpg", description: "SUV", prices: { low: 45, mid: 60, high: 85 }, specs: { class: "E", passengers: 5, doors: 5, luggage: 4, fuel: "Petrol", transmission: "Automatic", speed: "Max 200", ac: true } },
    { name: "PEUGEOT 2008", image: "/peugeot.jpg", description: "SUV", prices: { low: 45, mid: 60, high: 85 }, specs: { class: "E", passengers: 5, doors: 5, luggage: 3, fuel: "Petrol", transmission: "Automatic", speed: "Max 200", ac: false } },
    { name: "FIAT PANDA 4X4", image: "/panda4.jpg", description: "4x4", prices: { low: 40, mid: 55, high: 75 }, specs: { class: "E", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true } },
    { name: "SUZUKI ALTO", image: "/alto.jpg", description: "Small", prices: { low: 18, mid: 25, high: 35 }, specs: { class: "A", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 160", ac: true } },
    { name: "NISSAN NOTE", image: "/nnote.jpg", description: "Compact", prices: { low: 28, mid: 38, high: 55 }, specs: { class: "C", passengers: 4, doors: 5, luggage: 3, fuel: "Diesel", transmission: "Manual", speed: "Max 200", ac: false } },
    { name: "FIAT PANDA II", image: "/pantaii.png", description: "Small", prices: { low: 20, mid: 28, high: 40 }, specs: { class: "A", passengers: 4, doors: 5, luggage: 2, fuel: "Diesel", transmission: "Manual", speed: "Max 200", ac: true } },
    { name: "VW POLO", image: "/polo.jpg", description: "Comfort", prices: { low: 28, mid: 38, high: 55 }, specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true } },
    { name: "CITROEN C3", image: "/citroen_c3.jpg", description: "Comfort", prices: { low: 28, mid: 38, high: 55 }, specs: { class: "B", passengers: 5, doors: 5, luggage: 3, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: true } },
    { name: "NISSAN MICRA", image: "/nissan_micra.jpg", description: "City", prices: { low: 28, mid: 38, high: 55 }, specs: { class: "K", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: true } },
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

        <section className="py-20 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10">Our Fleet</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {cars.map((car, index) => (
                    <motion.div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">

                        <div className="relative">
                            <img src={car.image} className="w-full h-52 object-cover" />

                            <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                                €{getPrice(car)} / day
                            </div>

                            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                                {season?.name}
                            </div>
                        </div>

                        <div className="p-5 border-t-4 border-yellow-400">
                            <h3 className="text-xl font-semibold">{car.name}</h3>
                            <p className="text-sm mt-2 text-gray-600">{car.description}</p>

                            <div className="mt-4 border-t pt-4 grid grid-cols-2 gap-3 text-sm">

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Class</span>
                                    <span>{car.specs.class}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Passengers</span>
                                    <span>{car.specs.passengers}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Doors</span>
                                    <span>{car.specs.doors}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Luggage</span>
                                    <span>{car.specs.luggage}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Fuel</span>
                                    <span>{car.specs.fuel}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Transmission</span>
                                    <span>{car.specs.transmission}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Speed</span>
                                    <span>{car.specs.speed}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">A/C</span>
                                    <span>{car.specs.ac ? "Yes" : "No"}</span>
                                </div>

                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>

    </main>
);
}
