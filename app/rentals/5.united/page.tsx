"use client";

import { Car as CarIcon, Phone, MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

type CarType = {
    name: string;
    image: string;
    description: string;
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

const cars: CarType[] = [
    {
        name: "OPEL KARL",
        image: "/opencarl.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "A",
            passengers: 4,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 170",
            ac: true,
        },
    },
    {
        name: "OPEL CORSA",
        image: "/corsa.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "B",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 180",
            ac: false,
        },
    },
    {
        name: "VW POLO",
        image: "/polo.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "B",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 170",
            ac: true,
        },
    },
    {
    name: "HYUNDAI I20",
    image: "/i20.jpg",
    description: "Perfect for city driving, low fuel consumption",
    specs: {
    class: "B",
        passengers: 5,
        doors: 5,
        luggage: 2,
        fuel: "Petrol",
        transmission: "Manual",
        speed: "Max 180",
        ac: true,
   },
},
    {
        name: "SKODA FABIA",
        image: "/fabia.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "C",
            passengers: 5,
            doors: 5,
            luggage: 3,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 190",
            ac: false,
        },
    },
    {
        name: "RENAULT CLIO",
        image: "/clio.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "C",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Diesel",
            transmission: "Manual",
            speed: "Max 180",
            ac: true,
        },
    },
    {
        name: "OPEL ASTRA",
        image: "/astra.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "D",
            passengers: 5,
            doors: 5,
            luggage: 4,
            fuel: "Diesel",
            transmission: "Manual",
            speed: "Max 200",
            ac: false,
        },
    },
    {
        name: "SKODA YETI",
        image: "/yeti.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "E",
            passengers: 5,
            doors: 5,
            luggage: 4,
            fuel: "Petrol",
            transmission: "Automatic",
            speed: "Max 200",
            ac: true,
        },
    },
    {
        name: "PEUGEOT 2008",
        image: "/peugeot.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "E",
            passengers: 5,
            doors: 5,
            luggage: 3,
            fuel: "Petrol",
            transmission: "Automatic",
            speed: "Max 200",
            ac: false,
        },
    },
    {
        name: "FIAT PANDA 4X4",
        image: "/panda4.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "E",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 170",
            ac: true,
        },
    },
    {
        name: "SUZUKI ALTO",
        image: "/alto.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "A",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 160",
            ac: true,
        },
    },
    {
        name: "NISSAN NOTE",
        image: "/nnote.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "C",
            passengers: 4,
            doors: 5,
            luggage: 3,
            fuel: "Diesel",
            transmission: "Manual",
            speed: "Max 200",
            ac: false,
        },
    },
    {
        name: "FIAT PANDA II",
        image: "/pantaii.png",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "A",
            passengers: 4,
            doors: 5,
            luggage: 2,
            fuel: "Diesel",
            transmission: "Manual",
            speed: "Max 200",
            ac: true,
        },
    },
    {
        name: "FIAT PANDA",
        image: "/panda.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "A",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 170",
            ac: true,
        },
    },
    {
        name: "HYUNDAI I10",
        image: "/i10.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "A",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 160",
            ac: true,
        },
    },
    {
        name: "TOYOTA AYGO",
        image: "/aygo.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "A",
            passengers: 4,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 160",
            ac: true,
        },
    },
    {
        name: "CITROEN C3",
        image: "/citroen_c3.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "B",
            passengers: 5,
            doors: 5,
            luggage: 3,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 180",
            ac: true,
        },
    },
    {
        name: "NISSAN MICRA",
        image: "/nissan_micra.jpg",
        description: "Perfect for city driving, low fuel consumption",
        specs: {
            class: "K",
            passengers: 5,
            doors: 5,
            luggage: 2,
            fuel: "Petrol",
            transmission: "Manual",
            speed: "Max 180",
            ac: true,
        },
    },
];

export default function Home() {
    return (
        <main className="bg-slate-50 text-gray-800">
            {/* HERO */}
            <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
                <img src="/5hero.jpg" className="absolute inset-0 w-full h-full object-cover" alt="car rental" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">5 UNITED CAR RENTAL</h1>
                    <p className="text-lg md:text-xl mb-6">Comfort, reliability and the best prices on the market</p>

                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg">
                        Book Now
                    </button>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section className="py-20 px-6 max-w-5xl mx-auto text-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">About Us</h2>
                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded"></div>
                    <p className="text-gray-600 leading-relaxed">
                        5 United is a car rental company, located in Skala Kallonis, Lesvos island, Greece. We provide a wide range of vehicles for rent, suitable for all your travel needs. Whether you need a compact car for city exploration or a spacious SUV for a family adventure, we have the perfect car for you.
                    </p>
                </motion.div>
            </section>

            {/* CARS */}
            <section className="py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Our Fleet</h2>
                <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10 rounded"></div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cars.map((car, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
                        >
                            <img src={car.image} alt={car.name} className="w-full h-52 object-cover" />

                            <div className="p-5 border-t-4 border-yellow-400">
                                <h3 className="text-xl font-semibold">{car.name}</h3>
                                <p className="text-sm mt-2 text-gray-600">{car.description}</p>

                                {/* SPECS */}
                                <div className="mt-4 border-t pt-4 grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Passengers</span>
                                        <span className="font-medium">{car.specs.passengers}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Doors</span>
                                        <span className="font-medium">{car.specs.doors}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Luggage</span>
                                        <span className="font-medium">{car.specs.luggage}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Fuel</span>
                                        <span className="font-medium">{car.specs.fuel}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Transmission</span>
                                        <span className="font-medium">{car.specs.transmission}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">A/C</span>
                                        <span className="font-medium">{car.specs.ac ? "Yes" : "No"}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Services</h2>
                <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10 rounded"></div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {["24/7 Customer Support", "Flexible Rental Options", "Easy Online Booking", "Roadside Assistance", "Free Baby Seat"].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
                        >
                            <CarIcon className="mx-auto mb-3 text-yellow-400" size={40} />
                            <p className="font-medium">{service}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-gray-100 py-20 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">What Our Customers Say</h2>
                <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10 rounded"></div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {["Excellent service and great prices!", "The car was in perfect condition."].map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-5 rounded-xl shadow"
                        >
                            <div className="text-yellow-400 mb-2">★★★★★</div>
                            <p>"{text}"</p>
                        </motion.div>
                    ))}
                </div>
                <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md">
                    Call Now
                </button>
            </section>

            {/* CONTACT */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
                <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded"></div>

                <div className="space-y-4">
                    <p className="flex justify-center items-center gap-2 text-gray-700">
                        <Phone size={18} className="text-yellow-400" /> +30 6900000000
                    </p>

                    <p className="flex justify-center items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-yellow-400" /> Athens, Greece
                    </p>

                    <p className="flex justify-center items-center gap-2 text-gray-700">
                        <Mail size={18} className="text-yellow-400" /> info@carrental.gr
                    </p>

                    <p className="flex justify-center items-center gap-2 text-gray-700">
                        <Clock size={18} className="text-yellow-400" /> Mon - Fri: 7am - 10pm
                    </p>
                </div>

                <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md">
                    Call Now
                </button>
            </section>


        </main>
    );
}
