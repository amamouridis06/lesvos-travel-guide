import React from "react";

export default function FarmTravelGuidePage() {
    const farm = {
        title: "Φάρμα",
        subtitle: "Authentic farm experiences in Lesvos",
        description:
            "Discover local farm life in Lesvos through family-friendly visits, animals, traditional products, nature activities, and authentic island moments. A warm experience for travellers who want to connect with the countryside.",
        heroImage:
            "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600&auto=format&fit=crop",
        experiences: [
            {
                title: "Farm Visit",
                area: "Countryside of Lesvos",
                duration: "1–2 hours",
                price: "On request",
                image:
                    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=900&auto=format&fit=crop",
                description:
                    "Walk around the farm, meet the animals, learn about local rural life, and enjoy a calm countryside experience.",
                includes: ["Animal visit", "Farm walk", "Local stories"],
                tag: "Farm Life",
            },
            {
                title: "Meet the Animals",
                area: "Family-friendly farm area",
                duration: "45–90 minutes",
                price: "From €10 / person",
                image:
                    "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=900&auto=format&fit=crop",
                description:
                    "A gentle experience for children and families, with animals, feeding moments, photos, and simple farm activities.",
                includes: ["Child-friendly", "Animal feeding", "Photo moments"],
                tag: "Family Friendly",
            },
            {
                title: "Local Products Tasting",
                area: "Farm tasting corner",
                duration: "1 hour",
                price: "From €15 / person",
                image:
                    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=900&auto=format&fit=crop",
                description:
                    "Taste seasonal products, cheese, olive oil, herbs, honey, homemade treats, and flavours inspired by Lesvos.",
                includes: ["Tastings", "Local products", "Seasonal flavours"],
                tag: "Taste Local",
            },
            {
                title: "Olive & Nature Experience",
                area: "Olive groves & farm paths",
                duration: "2–3 hours",
                price: "From €20 / person",
                image:
                    "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=900&auto=format&fit=crop",
                description:
                    "Explore olive groves, herbs, plants, and peaceful paths while learning about the agricultural side of the island.",
                includes: ["Olive groves", "Nature walk", "Local knowledge"],
                tag: "Nature",
            },
        ],
        highlights: [
            "Family-friendly experience",
            "Meet local animals",
            "Taste local products",
            "Nature and countryside",
            "Authentic island life",
            "Educational visits",
        ],
    };

    return (
        <main className="min-h-screen overflow-hidden bg-lime-950 text-white">
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-1deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }

        @keyframes slideLine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        .animate-fade-up { animation: fadeUp 0.85s ease forwards; }
        .animate-float-soft { animation: floatSoft 4.5s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 3.2s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        .moving-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 55%;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(217, 249, 157, 0.95), transparent);
          animation: slideLine 3s linear infinite;
        }
      `}</style>

            <section className="relative min-h-screen px-5 py-8">
                <img
                    src={farm.heroImage}
                    alt="Farm experience in Lesvos"
                    className="absolute inset-0 h-full w-full object-cover opacity-35"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-lime-950 via-lime-950/90 to-yellow-950/70" />
                <div className="absolute left-8 top-24 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-yellow-300/15 blur-3xl animate-pulse-glow delay-300" />

                <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <div className="animate-fade-up inline-flex rounded-full border border-lime-200/30 bg-white/10 px-4 py-2 text-sm font-medium text-lime-100 backdrop-blur">
                            Lesvos Travel Guide
                        </div>

                        <h1 className="animate-fade-up delay-100 mt-6 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                            {farm.title}
                        </h1>

                        <p className="animate-fade-up delay-200 mt-5 text-2xl text-lime-100">
                            {farm.subtitle}
                        </p>

                        <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-lg leading-8 text-lime-50/90">
                            {farm.description}
                        </p>

                        <div className="animate-fade-up delay-400 mt-8 flex flex-wrap gap-4">
                            <a
                                href="#experiences"
                                className="rounded-2xl bg-lime-300 px-6 py-4 font-semibold text-lime-950 shadow-lg shadow-lime-300/20 transition hover:-translate-y-1 hover:bg-lime-200"
                            >
                                View experiences
                            </a>

                            <a
                                href="#contact"
                                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
                            >
                                Book a visit
                            </a>
                        </div>
                    </div>

                    <div className="animate-float-soft rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                        <div className="rounded-[1.5rem] bg-lime-950/80 p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm text-lime-100/70">Featured</p>
                                    <p className="text-2xl font-bold">Countryside Moments</p>
                                </div>
                                <div className="rounded-2xl bg-lime-300 px-4 py-3 text-3xl">🐐</div>
                            </div>

                            <div className="relative my-8 h-12 overflow-hidden rounded-full bg-lime-900 moving-line">
                                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-200 shadow-lg shadow-lime-200/60" />
                            </div>

                            <div className="grid gap-3">
                                {farm.highlights.slice(0, 4).map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="rounded-2xl bg-white/10 px-4 py-3 text-lime-50"
                                    >
                                        ✓ {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experiences" className="bg-stone-50 px-5 py-20 text-stone-950">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-700">
                            Farm experiences
                        </p>
                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Choose your farm experience
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-stone-600">
                            Add the details of each farm activity, price, location, provider, contact information, and booking link.
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
                        {farm.experiences.map((experience, index) => (
                            <article
                                key={experience.title}
                                className="animate-fade-up overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{ animationDelay: `${index * 0.12}s` }}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                    <div className="absolute left-4 top-4 rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-lime-950">
                                        {experience.tag}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                                    <p className="mt-2 text-stone-600">📍 {experience.area}</p>
                                    <p className="mt-1 text-stone-600">⏱️ {experience.duration}</p>
                                    <p className="mt-1 font-semibold text-lime-700">{experience.price}</p>

                                    <p className="mt-4 leading-7 text-stone-600">
                                        {experience.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {experience.includes.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full bg-lime-50 px-3 py-2 text-sm font-medium text-lime-800"
                                            >
                        {item}
                      </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 grid gap-3">
                                        <a
                                            href="#contact"
                                            className="rounded-2xl bg-lime-950 px-5 py-3 text-center font-semibold text-white transition hover:bg-lime-800"
                                        >
                                            Ask for details
                                        </a>

                                        <a
                                            href="#contact"
                                            className="rounded-2xl bg-lime-200 px-5 py-3 text-center font-semibold text-lime-950 transition hover:bg-lime-300"
                                        >
                                            Book visit
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-white px-5 py-20 text-stone-950">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
                    <div className="rounded-[2rem] bg-lime-950 p-8 text-white shadow-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-200">
                            Why visit a farm
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">A real taste of island life</h2>
                        <p className="mt-5 leading-8 text-lime-50/85">
                            Farm visits are perfect for families, nature lovers, food travellers, and anyone who wants to experience the authentic countryside of Lesvos.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {farm.highlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/20"
                                >
                                    ✓ {highlight}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-lime-50 p-8 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-700">
                            Contact
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">Add farm booking details</h2>
                        <p className="mt-5 leading-8 text-stone-600">
                            Replace this area with the farm contact details, WhatsApp button, phone number, booking form, address, opening hours, or seasonal availability.
                        </p>

                        <div className="mt-8 grid gap-4">
                            <a
                                href="tel:+302251000000"
                                className="rounded-2xl bg-lime-950 px-6 py-4 text-center font-semibold text-white transition hover:bg-lime-800"
                            >
                                Call the farm
                            </a>

                            <a
                                href="https://wa.me/306900000000"
                                className="rounded-2xl bg-lime-300 px-6 py-4 text-center font-semibold text-lime-950 transition hover:bg-lime-200"
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
