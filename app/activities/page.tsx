import React from "react";

export default function ActivitiesTravelGuidePage() {
    const section = {
        title: "Δραστηριότητες",
        subtitle: "Unique experiences around Lesvos",
        description:
            "Discover handpicked activities and local experiences for your trip. From sea adventures and nature walks to cultural tours and family-friendly moments, choose what fits your travel style.",
        heroImage:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
        activities: [
            {
                title: "Boat Trips",
                area: "Molyvos · Petra · Skala Sikamineas",
                duration: "Half-day or full-day",
                price: "From €35 / person",
                image:
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
                description:
                    "Enjoy the Aegean Sea with relaxing boat trips, swimming stops, hidden coves, and beautiful coastal views.",
                includes: ["Swimming stops", "Sea views", "Local guidance"],
                tag: "Sea Experience",
            },
            {
                title: "Hiking Trails",
                area: "North & Central Lesvos",
                duration: "2–5 hours",
                price: "From €20 / person",
                image:
                    "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=900&auto=format&fit=crop",
                description:
                    "Explore scenic paths, olive groves, traditional villages, and peaceful landscapes with local walking routes.",
                includes: ["Nature routes", "Photo stops", "Village paths"],
                tag: "Nature",
            },
            {
                title: "Food & Local Products Tour",
                area: "Mytilene · Plomari · Villages",
                duration: "3–4 hours",
                price: "From €45 / person",
                image:
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop",
                description:
                    "Taste local flavours, traditional products, olive oil, cheese, ouzo, and authentic dishes from Lesvos.",
                includes: ["Tastings", "Local products", "Traditional flavours"],
                tag: "Taste Lesvos",
            },
            {
                title: "Cultural Tours",
                area: "Mytilene · Molyvos · Agiasos",
                duration: "2–4 hours",
                price: "From €30 / person",
                image:
                    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=900&auto=format&fit=crop",
                description:
                    "Visit castles, museums, traditional settlements, churches, old markets, and beautiful historic corners.",
                includes: ["History", "Architecture", "Local stories"],
                tag: "Culture",
            },
            {
                title: "Family Activities",
                area: "Across Lesvos",
                duration: "Flexible",
                price: "On request",
                image:
                    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop",
                description:
                    "Easy, enjoyable experiences for families with children, including beaches, light walks, villages, and fun stops.",
                includes: ["Child-friendly", "Flexible pace", "Easy access"],
                tag: "Family Friendly",
            },
            {
                title: "Sunset Experiences",
                area: "Petra · Molyvos · Eressos",
                duration: "Evening activity",
                price: "From €25 / person",
                image:
                    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=900&auto=format&fit=crop",
                description:
                    "End your day with magical sunset views, seaside moments, romantic spots, and relaxed island atmosphere.",
                includes: ["Sunset views", "Photo moments", "Relaxed route"],
                tag: "Sunset",
            },
        ],
        highlights: [
            "Local experiences",
            "Nature & sea activities",
            "Family-friendly options",
            "Private or group tours",
            "Flexible planning",
            "Authentic Lesvos moments",
        ],
    };

    return (
        <main className="min-h-screen overflow-hidden bg-emerald-950 text-white">
            <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(1deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.08);
          }
        }

        @keyframes slideLine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.85s ease forwards;
        }

        .animate-float-soft {
          animation: floatSoft 4.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3.2s ease-in-out infinite;
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

        .moving-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 55%;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(167, 243, 208, 0.95), transparent);
          animation: slideLine 3s linear infinite;
        }
      `}</style>

            <section className="relative min-h-screen px-5 py-8">
                <img
                    src={section.heroImage}
                    alt="Activities in Lesvos"
                    className="absolute inset-0 h-full w-full object-cover opacity-35"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-950/90 to-cyan-950/75" />
                <div className="absolute left-8 top-24 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl animate-pulse-glow delay-300" />

                <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <div className="animate-fade-up inline-flex rounded-full border border-emerald-200/30 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur">
                            Lesvos Travel Guide
                        </div>

                        <h1 className="animate-fade-up delay-100 mt-6 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                            {section.title}
                        </h1>

                        <p className="animate-fade-up delay-200 mt-5 text-2xl text-emerald-100">
                            {section.subtitle}
                        </p>

                        <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-lg leading-8 text-emerald-50/90">
                            {section.description}
                        </p>

                        <div className="animate-fade-up delay-400 mt-8 flex flex-wrap gap-4">
                            <a
                                href="#activities"
                                className="rounded-2xl bg-emerald-300 px-6 py-4 font-semibold text-emerald-950 shadow-lg shadow-emerald-300/20 transition hover:-translate-y-1 hover:bg-emerald-200"
                            >
                                View activities
                            </a>

                            <a
                                href="#plan"
                                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
                            >
                                Plan your experience
                            </a>
                        </div>
                    </div>

                    <div className="animate-float-soft rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                        <div className="rounded-[1.5rem] bg-emerald-950/80 p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm text-emerald-100/70">Featured</p>
                                    <p className="text-2xl font-bold">Island Experiences</p>
                                </div>
                                <div className="rounded-2xl bg-emerald-300 px-4 py-3 text-3xl">🌿</div>
                            </div>

                            <div className="relative my-8 h-12 overflow-hidden rounded-full bg-emerald-900 moving-line">
                                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200 shadow-lg shadow-emerald-200/60" />
                            </div>

                            <div className="grid gap-3">
                                {section.highlights.slice(0, 4).map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="rounded-2xl bg-white/10 px-4 py-3 text-emerald-50"
                                    >
                                        ✓ {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="activities" className="bg-stone-50 px-5 py-20 text-stone-950">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                            Activities
                        </p>
                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Choose your experience
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-stone-600">
                            Add the details of each activity, price, meeting point, contact information, and booking link.
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {section.activities.map((activity, index) => (
                            <article
                                key={activity.title}
                                className="animate-fade-up overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{ animationDelay: `${index * 0.12}s` }}
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                    <div className="absolute left-4 top-4 rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-950">
                                        {activity.tag}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">{activity.title}</h3>
                                    <p className="mt-2 text-stone-600">📍 {activity.area}</p>
                                    <p className="mt-1 text-stone-600">⏱️ {activity.duration}</p>
                                    <p className="mt-1 font-semibold text-emerald-700">{activity.price}</p>

                                    <p className="mt-4 leading-7 text-stone-600">
                                        {activity.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {activity.includes.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800"
                                            >
                        {item}
                      </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 grid gap-3">
                                        <a
                                            href="#contact"
                                            className="rounded-2xl bg-emerald-950 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
                                        >
                                            Ask for details
                                        </a>

                                        <a
                                            href="#contact"
                                            className="rounded-2xl bg-emerald-200 px-5 py-3 text-center font-semibold text-emerald-950 transition hover:bg-emerald-300"
                                        >
                                            Book activity
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="plan" className="bg-white px-5 py-20 text-stone-950">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
                    <div className="rounded-[2rem] bg-emerald-950 p-8 text-white shadow-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
                            Why book activities
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">Make your trip more memorable</h2>
                        <p className="mt-5 leading-8 text-emerald-50/85">
                            Activities help travellers discover the real character of Lesvos through nature, sea, culture, local food, and authentic island experiences.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {section.highlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/20"
                                >
                                    ✓ {highlight}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="contact" className="rounded-[2rem] bg-emerald-50 p-8 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                            Contact
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">Add booking details</h2>
                        <p className="mt-5 leading-8 text-stone-600">
                            Replace this area with your contact form, WhatsApp button, phone number, or booking link. You can also add separate contact details for each activity provider.
                        </p>

                        <div className="mt-8 grid gap-4">
                            <a
                                href="tel:+302251000000"
                                className="rounded-2xl bg-emerald-950 px-6 py-4 text-center font-semibold text-white transition hover:bg-emerald-800"
                            >
                                Call for information
                            </a>

                            <a
                                href="https://wa.me/306900000000"
                                className="rounded-2xl bg-emerald-300 px-6 py-4 text-center font-semibold text-emerald-950 transition hover:bg-emerald-200"
                            >
                                Contact on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
