import React from "react";

const drivers = [
    {
        id: 1,
        name: "Nikos Taxi",
        area: "Mytilene",
        vehicle: "Mercedes E-Class",
        languages: "Greek · English",
        availability: "24/7 Available",
        phone: "+30 690 000 0000",
        whatsapp: "+306900000000",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
        routes: ["Airport Transfers", "Port Pickup", "Private Island Trips"],
    },

    {
        id: 2,
        name: "Giannis Transfers",
        area: "Molyvos",
        vehicle: "Skoda Octavia",
        languages: "Greek · English · German",
        availability: "Day & Night",
        phone: "+30 690 111 1111",
        whatsapp: "+306901111111",
        image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
        routes: ["Molyvos Routes", "Beach Transfers", "Hotel Pickup"],
    },

    {
        id: 3,
        name: "Petros VIP Taxi",
        area: "Petra",
        vehicle: "BMW 5 Series",
        languages: "Greek · English",
        availability: "VIP Service",
        phone: "+30 690 222 2222",
        whatsapp: "+306902222222",
        image:
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop",
        routes: ["Luxury Transfers", "Private Tours", "Night Rides"],
    },
];

export default function IndependentDriversPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>

            {/* HERO */}

            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519767840294-07a5b0b28f3a?q=80&w=1600&auto=format&fit=crop"
                        alt="Taxi Drivers"
                        className="h-full w-full object-cover opacity-20"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-yellow-950/50" />
                </div>

                <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200 backdrop-blur">
                            Independent Taxi Drivers · Lesvos
                        </div>

                        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                            Trusted local taxi drivers across the island
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Connect directly with independent drivers for airport transfers,
                            beach routes, port pickups, village trips, and private rides
                            around Lesvos.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#drivers"
                                className="rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-yellow-300"
                            >
                                Browse Drivers
                            </a>

                            <a
                                href="#contact"
                                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
                            >
                                Contact Drivers
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* DRIVERS GRID */}

            <section
                id="drivers"
                className="bg-slate-50 px-6 py-24 text-slate-950"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                            Available Drivers
                        </p>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Find the right driver for your trip
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Each driver offers direct communication, flexible booking, and
                            local route experience around Lesvos.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {drivers.map((driver, index) => (
                            <article
                                key={driver.id}
                                className="animate-fade-up overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                style={{
                                    animationDelay: `${index * 0.12}s`,
                                }}
                            >
                                {/* IMAGE */}

                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={driver.image}
                                        alt={driver.name}
                                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                                    />

                                    <div className="absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950">
                                        Independent Driver
                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="p-7">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold">
                                                {driver.name}
                                            </h3>

                                            <p className="mt-2 text-slate-600">
                                                📍 {driver.area}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-slate-100 px-4 py-3 text-3xl">
                                            🚕
                                        </div>
                                    </div>

                                    {/* INFO */}

                                    <div className="mt-6 space-y-3 rounded-3xl bg-slate-50 p-5">
                                        <p className="text-sm text-slate-700">
                                            🚗 <span className="font-semibold">Vehicle:</span>{" "}
                                            {driver.vehicle}
                                        </p>

                                        <p className="text-sm text-slate-700">
                                            🗣️ <span className="font-semibold">Languages:</span>{" "}
                                            {driver.languages}
                                        </p>

                                        <p className="text-sm text-slate-700">
                                            🕒 <span className="font-semibold">Availability:</span>{" "}
                                            {driver.availability}
                                        </p>
                                    </div>

                                    {/* ROUTES */}

                                    <div className="mt-6">
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                                            Services
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {driver.routes.map((route) => (
                                                <span
                                                    key={route}
                                                    className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
                                                >
                          {route}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* BUTTONS */}

                                    <div className="mt-8 grid gap-3">
                                        <a
                                            href={`tel:${driver.phone}`}
                                            className="rounded-2xl bg-slate-950 px-5 py-4 text-center font-semibold text-white transition hover:bg-slate-800"
                                        >
                                            Call Driver
                                        </a>

                                        <a
                                            href={`https://wa.me/${driver.whatsapp.replace(
                                                /[^0-9]/g,
                                                ""
                                            )}`}
                                            target="_blank"
                                            className="rounded-2xl bg-yellow-400 px-5 py-4 text-center font-semibold text-slate-950 transition hover:bg-yellow-300"
                                        >
                                            WhatsApp Booking
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section
                id="contact"
                className="relative overflow-hidden bg-slate-950 px-6 py-24"
            >
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                        Lesvos Taxi Network
                    </p>

                    <h2 className="mt-4 text-5xl font-bold leading-tight">
                        Reliable island transportation anytime
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Airport transfers, beach rides, port pickups, village routes, and
                        private trips with experienced local drivers.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href="#drivers"
                            className="rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-yellow-300"
                        >
                            View Drivers
                        </a>

                        <a
                            href="https://wa.me/306900000000"
                            className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
                        >
                            WhatsApp Support
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}