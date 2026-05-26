import React from "react";

export default function NikosDriverPage() {
    const driver = {
        name: "Nikos Taxi",
        area: "Mytilene",
        vehicle: "Mercedes E-Class",
        languages: "Greek · English",
        availability: "24/7 Available",
        phone: "+30 690 000 0000",
        whatsapp: "+306900000000",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
        description:
            "Professional taxi driver based in Mytilene offering safe and comfortable transfers across Lesvos island.",
        services: ["Airport Transfers", "Port Pickup", "Private Tours", "Night Rides"],
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            {/* HERO */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src={driver.image}
                    alt={driver.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-yellow-950/60" />

                <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                            Independent Driver
                        </p>

                        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
                            {driver.name}
                        </h1>

                        <p className="mt-4 text-lg text-slate-300">
                            📍 {driver.area}
                        </p>
                    </div>
                </div>
            </section>

            {/* INFO */}
            <section className="bg-white px-6 py-20 text-slate-950">
                <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold">About</h2>
                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            {driver.description}
                        </p>

                        <div className="mt-6 space-y-2 text-slate-700">
                            <p>🚗 Vehicle: {driver.vehicle}</p>
                            <p>🗣️ Languages: {driver.languages}</p>
                            <p>🕒 Availability: {driver.availability}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">Services</h2>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {driver.services.map((s) => (
                                <span
                                    key={s}
                                    className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
                                >
                  {s}
                </span>
                            ))}
                        </div>

                        {/* CONTACT */}
                        <div className="mt-10 grid gap-4">
                            <a
                                href={`tel:${driver.phone}`}
                                className="rounded-2xl bg-slate-950 px-6 py-4 text-center font-semibold text-white"
                            >
                                Call Now
                            </a>

                            <a
                                href={`https://wa.me/${driver.whatsapp.replace(/[^0-9]/g, "")}`}
                                className="rounded-2xl bg-yellow-400 px-6 py-4 text-center font-semibold text-slate-950"
                            >
                                WhatsApp Booking
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}