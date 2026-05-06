"use client";

import { motion } from "framer-motion";

import { Car, Shield, Clock, MapPin, Baby, KeyRound, Phone, Mail} from "lucide-react";

const services = [
    { icon: <Clock />, title: "24/7 Support", desc: "We are always available for you" },
    { icon: <KeyRound />, title: "Easy Pickup", desc: "Fast and simple car delivery" },
    { icon: <Car />, title: "Modern Fleet", desc: "New and well maintained cars" },
    { icon: <Shield />, title: "Full Insurance", desc: "Drive with total safety" },
    { icon: <Baby />, title: "Free Baby Seat", desc: "Safety for your family" },
    { icon: <MapPin />, title: "Island Coverage", desc: "We deliver anywhere in Lesvos" },
];

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
        low: { min: number; max: number };
        mid: { min: number; max: number };
        high: { min: number; max: number };
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
        description: "City car",
        prices: {
            low: { min: 18, max: 25 },
            mid: { min: 25, max: 30 },
            high: { min: 40, max: 50 },
        },
        specs: { class: "A", passengers: 4, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true }
    },
    {
        name: "FIAT PANDA",
        image: "/panda.jpg",
        description: "City",
        prices: {
            low: { min: 18, max: 25 },
            mid: { min: 25, max: 30 },
            high: { min: 40, max: 50 },
        },
        specs: { class: "A", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true }
    },
    {
        name: "HYUNDAI I10",
        image: "/i10.jpg",
        description: "City",
        prices: {
            low: { min: 18, max: 25 },
            mid: { min: 25, max: 30 },
            high: { min: 40, max: 50 },
        },
        specs: { class: "A", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 160", ac: true }
    },
    {
        name: "TOYOTA AYGO",
        image: "/aygo.jpg",
        description: "City",
        prices: {
            low: { min: 18, max: 25 },
            mid: { min: 25, max: 30 },
            high: { min: 40, max: 50 },
        },
        specs: { class: "A", passengers: 4, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 160", ac: true }
    },
    {
        name: "OPEL CORSA",
        image: "/corsa.jpg",
        description: "City car",
        prices: {
            low: { min: 20, max: 28 },
            mid: { min: 30, max: 35 },
            high: { min: 45, max: 55 },
        },
        specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: false }
    },
    {
        name: "HYUNDAI I20",
        image: "/i20.jpg",
        description: "City car",
        prices: {
            low: { min: 18, max: 25 },
            mid: { min: 25, max: 30 },
            high: { min: 40, max: 50 },
        },
        specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: true }
    },
    {
        name: "SKODA FABIA",
        image: "/fabia.jpg",
        description: "Comfort",
        prices: {
            low: { min: 23, max: 30 },
            mid: { min: 35, max: 40 },
            high: { min: 50, max: 65 },
        },
        specs: { class: "C", passengers: 5, doors: 5, luggage: 3, fuel: "Petrol", transmission: "Manual", speed: "Max 190", ac: false }
    },
    {
        name: "RENAULT CLIO",
        image: "/clio.jpg",
        description: "Reliable",
        prices: {
            low: { min: 23, max: 30 },
            mid: { min: 35, max: 40 },
            high: { min: 50, max: 65 },
        },
        specs: { class: "C", passengers: 5, doors: 5, luggage: 2, fuel: "Diesel", transmission: "Manual", speed: "Max 180", ac: true }
    },
    {
        name: "OPEL ASTRA",
        image: "/astra.jpg",
        description: "Family car",
        prices: {
            low: { min: 30, max: 40 },
            mid: { min: 40, max: 50 },
            high: { min: 55, max: 80 },
        },
        specs: { class: "D", passengers: 5, doors: 5, luggage: 4, fuel: "Diesel", transmission: "Manual", speed: "Max 200", ac: false }
    },
    {
        name: "SKODA YETI",
        image: "/yeti.jpg",
        description: "SUV",
        prices: {
            low: { min: 30, max: 45 },
            mid: { min: 32, max: 40 },
            high: { min: 50, max: 60 },
        },
        specs: { class: "E", passengers: 5, doors: 5, luggage: 4, fuel: "Petrol", transmission: "Automatic", speed: "Max 200", ac: true }
    },
    {
        name: "PEUGEOT 2008",
        image: "/peugeot.jpg",
        description: "SUV",
        prices: {
            low: { min: 30, max: 45 },
            mid: { min: 32, max: 40 },
            high: { min: 50, max: 60 },
        },
        specs: { class: "E", passengers: 5, doors: 5, luggage: 3, fuel: "Petrol", transmission: "Automatic", speed: "Max 200", ac: false }
    },
    {
        name: "FIAT PANDA 4X4",
        image: "/panda4.jpg",
        description: "4x4",
        prices: {
            low: { min: 30, max: 45 },
            mid: { min: 32, max: 40 },
            high: { min: 50, max: 60 },
        },
        specs: { class: "E", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true }
    },
    {
        name: "SUZUKI ALTO",
        image: "/alto.jpg",
        description: "Small",
        prices: {
            low: { min: 18, max: 25 },
            mid: { min: 25, max: 30 },
            high: { min: 40, max: 50 },
        },
        specs: { class: "A", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 160", ac: true }
    },
    {
        name: "NISSAN NOTE",
        image: "/nnote.jpg",
        description: "Compact",
        prices: {
            low: { min: 23, max: 30 },
            mid: { min: 35, max: 40 },
            high: { min: 50, max: 65 },
        },
        specs: { class: "C", passengers: 4, doors: 5, luggage: 3, fuel: "Diesel", transmission: "Manual", speed: "Max 200", ac: false }
    },
    {
        name: "FIAT PANDA II",
        image: "/pantaii.png",
        description: "Small",
        prices: {
            low: { min: 30, max: 45 },
            mid: { min: 32, max: 40 },
            high: { min: 50, max: 60 },
        },
        specs: { class: "A", passengers: 4, doors: 5, luggage: 2, fuel: "Diesel", transmission: "Manual", speed: "Max 200", ac: true }
    },
    {
        name: "VW POLO",
        image: "/polo.jpg",
        description: "Comfort",
        prices: {
            low: { min: 20, max: 28 },
            mid: { min: 30, max: 35 },
            high: { min: 45, max: 55 },
        },
        specs: { class: "B", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 170", ac: true }
    },
    {
        name: "CITROEN C3",
        image: "/citroen_c3.jpg",
        description: "Comfort",
        prices: {
            low: { min: 20, max: 28 },
            mid: { min: 30, max: 35 },
            high: { min: 45, max: 55 },
        },
        specs: { class: "B", passengers: 5, doors: 5, luggage: 3, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: true }
    },
    {
        name: "NISSAN MICRA",
        image: "/nissan_micra.jpg",
        description: "City",
        prices: {
            low: { min: 25, max: 30 },
            mid: { min: 45, max: 60 },
            high: { min: 60, max: 80 },
        },
        specs: { class: "K", passengers: 5, doors: 5, luggage: 2, fuel: "Petrol", transmission: "Manual", speed: "Max 180", ac: true }
    },
];

/* ---------------- COMPONENT ---------------- */
export default function Home() {
    const season = getCurrentSeason();

    function getPrice(car: CarType) {
        if (!season) return "—";

        const price =
            season.name === "Low Season"
                ? car.prices.low
                : season.name === "Mid Season"
                    ? car.prices.mid
                    : car.prices.high;

        return `${price.min} - ${price.max}`;
    }

return (
    <main className="bg-slate-50 text-gray-800">
        <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-5xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
            <span className="text-yellow-500 font-semibold tracking-widest text-sm">
                ABOUT US
            </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
                        Reliable Car Rental in Lesvos
                    </h2>

                    <div className="w-20 h-1 bg-yellow-400 mx-auto my-6 rounded-full"></div>

                    <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
                        5 United Car Rental offers high-quality vehicles, transparent pricing and
                        premium service in Skala Kallonis, Lesvos. Whether you need a compact city car
                        or an SUV for island exploration, we guarantee comfort and reliability.
                    </p>
                </motion.div>

            </div>
        </section>
        <section className="py-24 px-6 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-transparent hover:border-yellow-300"
                    >
                        <div className="text-yellow-500 mb-4 group-hover:scale-110 transition">
                            {s.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            {s.title}
                        </h3>

                        <p className="text-gray-600 text-sm">
                            {s.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>

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
        <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">

            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                {/* LEFT INFO */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >

                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-4">5 United Car Rental</h3>

                        <div className="space-y-4 text-gray-700">

                            <div className="flex items-center gap-3">
                                <MapPin className="text-yellow-500" size={18} />
                                Skala Kallonis, Lesvos Island, Greece
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="text-yellow-500" size={18} />
                                +30 698 17 222 15
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="text-yellow-500" size={18} />
                                5unitedcarrental@gmail.com
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock className="text-yellow-500" size={18} />
                                Mon - Fri: 07:00 - 22:00
                            </div>

                        </div>
                    </div>

                    {/* CALL BUTTON */}
                    <a
                        href="tel:+306981722215"
                        className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
                    >
                        Call Now
                    </a>

                </motion.div>

    </main>
);
}
