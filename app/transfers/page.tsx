import React from "react";
import Link from "next/link";

const featuredDrivers = [
    {
        id: 1,
        slug: "nikos-taxi",
        name: "Nikos Taxi",
        area: "Mytilene",
        vehicle: "Mercedes E-Class",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    },

    {
        id: 2,
        slug: "giannis-transfers",
        name: "Giannis Transfers",
        area: "Petra",
        vehicle: "Skoda Octavia",
        image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    },
];

const featuredCompanies = [
    {
        id: 1,
        slug: "golocal-transfers",
        name: "GO LOCAL Transfers & Tours",
        location: "Molyvos",
        vehicles: 2,
        services: ["Airport", "Port", "VIP"],
        image:
            "golocal/cars.png",
    },

    // {
    //     id: 2,
    //     slug: "aegean-vip-rides",
    //     name: "Aegean VIP Rides",
    //     location: "Molyvos",
    //     vehicles: 8,
    //     services: ["Luxury", "Private Tours", "Night Rides"],
    //     image:
    //         "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    // },
];

export default function TaxiServicesPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            {/* HERO */}

            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519767840294-07a5b0b28f3a?q=80&w=1600&auto=format&fit=crop"
                        alt="Lesvos Taxi Services"
                        className="h-full w-full object-cover opacity-30"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-yellow-950/70" />
                </div>

                <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200 backdrop-blur">
                            Lesvos Taxi & Transfer Services
                        </div>

                        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                            Reliable Transfers Across Lesvos
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Discover trusted taxi drivers and professional transfer companies
                            for airport pickups, private island routes, port transfers, beach
                            trips, and VIP transportation around Lesvos.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#drivers"
                                className="rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-yellow-300"
                            >
                                Explore Drivers
                            </a>

                            <a
                                href="#companies"
                                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
                            >
                                Transfer Companies
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* DRIVERS */}

            <section id="drivers" className="bg-white px-6 py-24 text-slate-950">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
                            Independent Drivers
                        </p>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Book directly with local taxi drivers
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuredDrivers.map((driver) => (
                            <article
                                key={driver.id}
                                className="overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={driver.image}
                                        alt={driver.name}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">{driver.name}</h3>

                                    <p className="mt-2 text-slate-600">
                                        📍 {driver.area}
                                    </p>

                                    <p className="mt-3 text-slate-700">
                                        🚗 {driver.vehicle}
                                    </p>

                                    <Link
                                        href={`/drivers/${driver.slug}`}
                                        className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                                    >
                                        View Driver
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPANIES */}

            <section
                id="companies"
                className="bg-slate-100 px-6 py-24 text-slate-950"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                            Transfer Companies
                        </p>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Professional transfer fleets & VIP transportation
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-8 lg:grid-cols-2">
                        {featuredCompanies.map((company) => (
                            <article
                                key={company.id}
                                className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={company.image}
                                        alt={company.name}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />

                                    <div className="absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950">
                                        {company.vehicles} Vehicles
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-3xl font-bold">{company.name}</h3>

                                    <p className="mt-3 text-slate-600">
                                        📍 {company.location}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {company.services.map((service) => (
                                            <span
                                                key={service}
                                                className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
                                            >
                        {service}
                      </span>
                                        ))}
                                    </div>

                                    {/* BUTTONS */}

                                    <div className="mt-8 flex flex-wrap gap-4">
                                        {/* FULL COMPANY PAGE */}

                                        <Link
                                            href={`/companies/${company.slug}`}
                                            className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                                        >
                                            View Company
                                        </Link>

                                        {/* GO DIRECTLY TO FLEET SECTION */}

                                        <Link
                                            href={`/companies/${company.slug}#fleet`}
                                            className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
                                        >
                                            Fleet Details
                                        </Link>

                                        {/* OPTIONAL EXTRA LINKS */}

                                        <Link
                                            href={`/companies/${company.slug}#booking`}
                                            className="rounded-2xl border border-yellow-400 bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300"
                                        >
                                            Book Transfer
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className="relative overflow-hidden bg-slate-950 px-6 py-24">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                        Lesvos Transfers
                    </p>

                    <h2 className="mt-4 text-5xl font-bold leading-tight">
                        Airport pickups, island rides & private transfers
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Connect directly with local drivers and professional transfer
                        companies for safe and comfortable travel around Lesvos.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href="#drivers"
                            className="rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-yellow-300"
                        >
                            Find Drivers
                        </a>

                        <a
                            href="#companies"
                            className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
                        >
                            Browse Companies
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}