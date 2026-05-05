"use client";

import { Car, Phone, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

const cars = [
    {
        name: "Economy Car",
        image: "/cars/economy.jpg",
        description: "Ιδανικό για πόλη, χαμηλή κατανάλωση",
    },
    {
        name: "SUV",
        image: "/cars/suv.jpg",
        description: "Άνεση και χώρος για οικογένειες",
    },
    {
        name: "Luxury",
        image: "/cars/luxury.jpg",
        description: "Premium εμπειρία οδήγησης",
    },
];

export default function Home() {
    return (
        <main className="bg-gray-50 text-gray-800">
            {/* HERO */}
            <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
                <img
                    src="/5hero.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="car rental"
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Ενοικίαση Αυτοκινήτων
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Άνεση, αξιοπιστία και οι καλύτερες τιμές
                    </p>

                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                        Κλείσε τώρα
                    </button>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section className="py-20 px-6 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-6">About us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Είμαστε μια αξιόπιστη εταιρεία ενοικίασης αυτοκινήτων στην Αθήνα,
                        προσφέροντας σύγχρονα οχήματα, ανταγωνιστικές τιμές και άριστη εξυπηρέτηση.
                        Στόχος μας είναι να κάνουμε τη μετακίνησή σας εύκολη και άνετη.
                    </p>
                </motion.div>
            </section>

            {/* CARS */}
            <section className="py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10">Our Cars</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cars.map((car, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition hover:-translate-y-2"
                        >
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{car.name}</h3>
                                <p className="text-sm mt-2 text-gray-600">{car.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Services</h2>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {["Airport / Port Deliveries", "Road Assistance", "Unlimited Kilometers", "Free Extra Driver", "Free Baby Seat"].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <Car className="mx-auto mb-3 text-blue-600" size={40} />
                            <p className="font-medium">{service}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-gray-100 py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Τι λένε οι πελάτες μας
                </h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {["Άψογη εξυπηρέτηση και πολύ καλές τιμές!", "Το αυτοκίνητο ήταν σε άριστη κατάσταση."].map((text, i) => (
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
            </section>

            {/* CONTACT */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Επικοινωνία</h2>

                <div className="space-y-4">
                    <p className="flex justify-center items-center gap-2">
                        <Phone size={18} /> +30 6900000000
                    </p>

                    <p className="flex justify-center items-center gap-2">
                        <MapPin size={18} /> Αθήνα, Ελλάδα
                    </p>
                </div>

                <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    Καλέστε τώρα
                </button>
            </section>

            {/* FOOTER */}
            <footer className="bg-black text-white text-center py-6">
                © 2026 Car Rental. All rights reserved.
            </footer>
        </main>
    );
}
