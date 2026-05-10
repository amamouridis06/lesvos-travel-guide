import React from "react";

export default function TaxiServicesTravelGuidePage() {
    const service = {
        name: "Lesvos Taxi Services",
        subtitle: "Reliable transfers around the island",
        location: "Lesvos, Greece",
        description:
            "Find trusted taxi drivers and private transfer services across Lesvos. Contact each driver directly for airport transfers, port pickup, hotel rides, beach trips, night rides, and private island routes.",
        heroImage:
            "https://images.unsplash.com/photo-1519767840294-07a5b0b28f3a?q=80&w=1600&auto=format&fit=crop",
        services: [
            {
                title: "Airport Transfers",
                text: "Pickup and drop-off from Mytilene International Airport.",
                icon: "✈️",
            },
            {
                title: "Port Transfers",
                text: "Easy transfers from the port to hotels, villages, and beaches.",
                icon: "⛴️",
            },
            {
                title: "Island Routes",
                text: "Private rides to Molyvos, Petra, Plomari, Eressos, and more.",
                icon: "🗺️",
            },
            {
                title: "Night Rides",
                text: "Safe evening and late-night transportation around the island.",
                icon: "🌙",
            },
        ],
        drivers: [
            {
                name: "Tryfon Parmakellis",
                area: "Kalloni · Airport · Port",
                phone: "+30 22530 23238",
                whatsapp: "+30 6976683130",
                vehicle: "Standard taxi",
                languages: "Greek, English",
                availability: "Available daily",
                image:
                    "/taxi/tryfon-taxi.jpg",
            },
            // {
            //     name: "Maria Private Transfers",
            //     area: "Molyvos · Petra · North Lesvos",
            //     phone: "+30 22510 11111",
            //     whatsapp: "+30 690 111 1111",
            //     vehicle: "Comfort vehicle",
            //     languages: "Greek, English",
            //     availability: "Pre-booking recommended",
            //     image:
            //         "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=900&auto=format&fit=crop",
            // },
            // {
            //     name: "George Island Rides",
            //     area: "Plomari · Vatera · South Lesvos",
            //     phone: "+30 22510 22222",
            //     whatsapp: "+30 690 222 2222",
            //     vehicle: "Taxi & private routes",
            //     languages: "Greek, English",
            //     availability: "Flexible routes",
            //     image:
            //         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop",
            // },
        ],
        highlights: [
            "Direct contact with drivers",
            "Airport & port pickup",
            "Clean vehicles",
            "Local route knowledge",
            "Flexible booking",
            "Private transfers",
        ],
        popularRoutes: [
            "Airport → Mytilene Center",
            "Mytilene Port → Molyvos",
            "Mytilene → Plomari",
            "Petra → Kalloni",
        ],
    };

    return (
        <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
            <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes driveLine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        @keyframes pulseSoft {
          0%, 100% {
            transform: scale(1);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulseSoft 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .road-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          height: 3px;
          width: 60%;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.95), transparent);
          animation: driveLine 2.8s linear infinite;
        }
      `}</style>

            <section className="relative min-h-screen px-5 py-8">
                <img
                    src={service.heroImage}
                    alt="Taxi service on the road"
                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-yellow-950/70" />
                <div className="absolute left-10 top-24 h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl animate-pulse-soft" />
                <div className="absolute bottom-28 right-8 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl animate-pulse-soft delay-300" />

                <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <div className="animate-fade-up inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-medium text-yellow-200 backdrop-blur">
                            Taxi Services · {service.location}
                        </div>

                        <h1 className="animate-fade-up delay-100 mt-6 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                            {service.name}
                        </h1>

                        <p className="animate-fade-up delay-200 mt-5 text-2xl text-yellow-200">
                            {service.subtitle}
                        </p>

                        <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                            {service.description}
                        </p>

                        <div className="animate-fade-up delay-400 mt-8 flex flex-wrap gap-4">
                            <a
                                href="#drivers"
                                className="rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:-translate-y-1 hover:bg-yellow-300"
                            >
                                View taxi drivers
                            </a>

                            <a
                                href="#routes"
                                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
                            >
                                Popular routes
                            </a>
                        </div>
                    </div>

                    <div className="animate-float-slow rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                        <div className="rounded-[1.5rem] bg-slate-950/80 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-400">Available for</p>
                                    <p className="text-2xl font-bold">Taxi & Private Transfers</p>
                                </div>
                                <div className="rounded-2xl bg-yellow-400 px-4 py-3 text-3xl">🚕</div>
                            </div>

                            <div className="relative my-8 h-12 overflow-hidden rounded-full bg-slate-800 road-line">
                                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/60" />
                            </div>

                            <div className="rounded-2xl bg-yellow-400/15 p-4 text-yellow-100">
                                Choose a driver · Contact directly · Book your route
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-slate-50 px-5 py-20 text-slate-950">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
                            Services
                        </p>
                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Easy transport for every part of your trip
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {service.services.map((item, index) => (
                            <div
                                key={item.title}
                                className="animate-fade-up rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{ animationDelay: `${index * 0.12}s` }}
                            >
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="drivers" className="bg-white px-5 py-20 text-slate-950">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                            Taxi drivers
                        </p>
                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Choose your driver
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            Each driver has their own contact details, area, vehicle type, and availability so travellers can book directly.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {service.drivers.map((driver, index) => (
                            <article
                                key={driver.name}
                                className="animate-fade-up overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{ animationDelay: `${index * 0.14}s` }}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={driver.image}
                                        alt={driver.name}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                    <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950">
                                        Driver #{index + 1}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">{driver.name}</h3>
                                    <p className="mt-2 text-slate-600">📍 {driver.area}</p>

                                    <div className="mt-5 space-y-3 text-sm text-slate-700">
                                        <p>🚗 {driver.vehicle}</p>
                                        <p>🗣️ {driver.languages}</p>
                                        <p>🕒 {driver.availability}</p>
                                        <p>☎️ {driver.phone}</p>
                                        <p>💬 {driver.whatsapp}</p>
                                    </div>

                                    <div className="mt-6 grid gap-3">
                                        <a
                                            href={`tel:${driver.phone}`}
                                            className="rounded-2xl bg-slate-950 px-5 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
                                        >
                                            Call driver
                                        </a>

                                        <a
                                            href={`https://wa.me/${driver.whatsapp.replace(/[^0-9]/g, "")}`}
                                            className="rounded-2xl bg-yellow-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-yellow-300"
                                        >
                                            WhatsApp booking
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="routes" className="bg-yellow-50 px-5 py-20 text-slate-950">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
                    <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                            Why choose us
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">Travel with comfort and confidence</h2>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {service.highlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/20"
                                >
                                    ✓ {highlight}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                            Popular routes
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">Recommended transfers</h2>

                        <div className="mt-8 space-y-4">
                            {service.popularRoutes.map((route, index) => (
                                <div
                                    key={route}
                                    className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 shadow-sm transition hover:translate-x-2 hover:shadow-md"
                                >
                                    <span className="font-medium">{route}</span>
                                    <span className="rounded-full bg-slate-950 px-3 py-1 text-sm text-white">
                    0{index + 1}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
