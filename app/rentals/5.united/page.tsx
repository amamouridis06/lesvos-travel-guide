"use client";

import { Car, Phone, MapPin, Star } from "lucide-react";

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
            <section className="bg-black text-white py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Ενοικίαση Αυτοκινήτων
                </h1>
                <p className="text-lg md:text-xl">
                    Άνεση, αξιοπιστία και οι καλύτερες τιμές στην αγορά
                </p>
            </section>

            {/* ABOUT */}
            <section className="py-16 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Σχετικά με εμάς</h2>
                <p>
                    Είμαστε μια σύγχρονη εταιρεία ενοικίασης αυτοκινήτων με στόχο την
                    άριστη εξυπηρέτηση και την παροχή αξιόπιστων οχημάτων για κάθε ανάγκη.
                </p>
            </section>

            {/* CARS */}
            <section className="py-16 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Ο Στόλος μας
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cars.map((car, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-2xl shadow-md overflow-hidden"
                        >
                            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{car.name}</h3>
                                <p className="text-sm mt-2">{car.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Υπηρεσίες</h2>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <Car className="mx-auto mb-3" size={40} />
                        <p>Μεγάλη ποικιλία αυτοκινήτων</p>
                    </div>

                    <div>
                        <Star className="mx-auto mb-3" size={40} />
                        <p>Ασφάλεια & αξιοπιστία</p>
                    </div>

                    <div>
                        <MapPin className="mx-auto mb-3" size={40} />
                        <p>Παράδοση & παραλαβή</p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-gray-100 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Τι λένε οι πελάτες μας
                </h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-xl shadow">
                        <p>"Άψογη εξυπηρέτηση και πολύ καλές τιμές!"</p>
                        <span className="text-sm mt-2 block">- Γιώργος</span>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <p>"Το αυτοκίνητο ήταν σε άριστη κατάσταση."</p>
                        <span className="text-sm mt-2 block">- Μαρία</span>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Επικοινωνία</h2>

                <div className="space-y-4">
                    <p className="flex justify-center items-center gap-2">
                        <Phone size={18} /> +30 6900000000
                    </p>

                    <p className="flex justify-center items-center gap-2">
                        <MapPin size={18} /> Αθήνα, Ελλάδα
                    </p>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black text-white text-center py-6">
                © 2026 Car Rental. All rights reserved.
            </footer>
        </main>
    );
}