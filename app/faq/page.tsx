"use client";

import Link from "next/link";
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

type FAQCategory = {
    category: string;
    description: string;
    questions: FAQItem[];
};

const faqCategories: FAQCategory[] = [
    {
        category: "Getting to Lesvos",
        description:
            "Information about flights, ferries, ports and arriving on the island.",
        questions: [
            {
                question: "How can I travel to Lesvos?",
                answer:
                    "You can reach Lesvos by plane or ferry. The island has an international airport near Mytilene and ferry connections with mainland Greece and other Aegean islands.",
            },
            {
                question: "Does Lesvos have an airport?",
                answer:
                    "Yes. Mytilene International Airport is located a few kilometres south of Mytilene. Domestic and seasonal international flights operate throughout the year.",
            },
            {
                question: "Are there ferries from Athens?",
                answer:
                    "Ferries connect the port of Piraeus with Mytilene. Routes, departure times and journey duration may change depending on the season, so check the latest timetable before travelling.",
            },
            {
                question: "How do I get from the airport or port to my accommodation?",
                answer:
                    "You can use a taxi, public bus, private transfer or rental car. Booking a transfer in advance is recommended during the busy summer months.",
            },
        ],
    },
    {
        category: "Getting Around",
        description:
            "Useful information about cars, public transport, taxis and distances.",
        questions: [
            {
                question: "Do I need to rent a car?",
                answer:
                    "Renting a car is recommended if you want to explore villages, beaches and attractions across the island independently. Lesvos is a large island and many places are far from Mytilene.",
            },
            {
                question: "Is public transport available?",
                answer:
                    "Public buses connect Mytilene with several towns, villages and popular destinations. Services may be less frequent in remote areas and outside the summer season.",
            },
            {
                question: "Are taxis easy to find?",
                answer:
                    "Taxis are commonly available in Mytilene, at the airport, near the port and in popular tourist areas. In smaller villages, booking in advance may be necessary.",
            },
            {
                question: "How long does it take to travel across the island?",
                answer:
                    "Travel times vary because Lesvos is large and many roads pass through mountainous areas. Reaching destinations on the opposite side of the island can take two hours or more.",
            },
        ],
    },
    {
        category: "Accommodation",
        description:
            "Advice about choosing an area and booking your stay.",
        questions: [
            {
                question: "Which area is best for staying in Lesvos?",
                answer:
                    "Mytilene is convenient for transport, restaurants and city life. Molyvos, Petra, Anaxos, Skala Eressos, Plomari and Vatera are popular choices for beach holidays and a quieter atmosphere.",
            },
            {
                question: "Should I book accommodation in advance?",
                answer:
                    "Advance booking is highly recommended during July and August, especially in popular seaside destinations. Booking early can also provide more options and better prices.",
            },
            {
                question: "What types of accommodation are available?",
                answer:
                    "Lesvos offers hotels, traditional guesthouses, apartments, holiday homes, villas and small family-run properties.",
            },
        ],
    },
    {
        category: "Beaches & Activities",
        description:
            "Suggestions for beaches, outdoor activities and island experiences.",
        questions: [
            {
                question: "What are some popular beaches in Lesvos?",
                answer:
                    "Popular beaches include Vatera, Petra, Anaxos, Skala Eressos, Agios Isidoros, Eftalou, Tsonia and Charamida.",
            },
            {
                question: "Are the beaches suitable for children?",
                answer:
                    "Many beaches are suitable for families, especially organised beaches with calm water and nearby facilities. Conditions can vary, so always supervise children near the sea.",
            },
            {
                question: "What activities can I do on the island?",
                answer:
                    "Visitors can enjoy swimming, hiking, birdwatching, cycling, boat trips, water sports, food experiences and visits to museums, monasteries and traditional villages.",
            },
            {
                question: "Are there hiking routes and nature excursions?",
                answer:
                    "Yes. Lesvos offers walking routes through forests, volcanic landscapes, olive groves, wetlands and traditional settlements. Some routes are best explored with a local guide.",
            },
        ],
    },
    {
        category: "Food & Local Products",
        description:
            "Local dishes, drinks, shopping and useful dining information.",
        questions: [
            {
                question: "What local food should I try?",
                answer:
                    "Try sardines from Kalloni, ladotyri cheese, fresh seafood, local olive oil, traditional meze, stuffed vegetables, local pastries and the island's famous ouzo.",
            },
            {
                question: "Is Lesvos suitable for vegetarians or vegans?",
                answer:
                    "Many traditional Greek dishes are vegetarian or vegan, including salads, legumes, vegetable dishes and olive-oil-based recipes. Ask the restaurant staff about ingredients when ordering.",
            },
            {
                question: "Where can I buy local products and souvenirs?",
                answer:
                    "Local products are available in village shops, markets, cooperatives, olive oil producers, traditional workshops and souvenir stores.",
            },
            {
                question: "Is tap water safe to drink?",
                answer:
                    "Tap water quality can vary by location. Many visitors prefer bottled water, especially in smaller villages. Ask your accommodation provider for local advice.",
            },
        ],
    },
    {
        category: "Useful Travel Information",
        description:
            "Practical details for a safe and comfortable visit.",
        questions: [
            {
                question: "What is the best time to visit Lesvos?",
                answer:
                    "May, June, September and early October offer pleasant weather and fewer visitors. July and August are the hottest and busiest months.",
            },
            {
                question: "What currency is used in Lesvos?",
                answer:
                    "Lesvos uses the euro. Cards are widely accepted in hotels, restaurants and larger shops, but carrying some cash is useful in villages and smaller businesses.",
            },
            {
                question: "Is English widely spoken?",
                answer:
                    "English is commonly spoken in hotels, restaurants, rental agencies and tourist areas. Learning a few basic Greek phrases is always appreciated.",
            },
            {
                question: "What should I do in an emergency?",
                answer:
                    "Call 112 for emergencies. You can also visit the Emergency section of this guide for useful telephone numbers and local medical information.",
            },
            {
                question: "Are pharmacies and medical centres available?",
                answer:
                    "Pharmacies, doctors and medical centres are available in Mytilene and several towns across the island. Opening hours may vary, especially on weekends and public holidays.",
            },
        ],
    },
];

export default function FAQPage() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(
        "How can I travel to Lesvos?"
    );

    const toggleQuestion = (question: string) => {
        setOpenQuestion((currentQuestion) =>
            currentQuestion === question ? null : question
        );
    };

    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-emerald-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
                    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-300 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Lesvos Travel Information
          </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Frequently Asked Questions
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50 sm:text-lg">
                        Find useful answers about travelling to Lesvos, getting around,
                        accommodation, beaches, food and local services.
                    </p>

                    <a
                        href="#faq-content"
                        className="mt-8 inline-flex rounded-xl bg-yellow-300 px-7 py-3 font-semibold text-emerald-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-200"
                    >
                        Browse Questions
                    </a>
                </div>
            </section>

            {/* Quick links */}
            <section className="border-b border-stone-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
                    {faqCategories.map((category) => (
                        <a
                            key={category.category}
                            href={`#${category.category
                                .toLowerCase()
                                .replaceAll(" ", "-")
                                .replaceAll("&", "and")}`}
                            className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
                        >
                            {category.category}
                        </a>
                    ))}
                </div>
            </section>

            {/* FAQ content */}
            <section
                id="faq-content"
                className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
            >
                <div className="mx-auto max-w-5xl space-y-16">
                    {faqCategories.map((category) => {
                        const categoryId = category.category
                            .toLowerCase()
                            .replaceAll(" ", "-")
                            .replaceAll("&", "and");

                        return (
                            <section
                                key={category.category}
                                id={categoryId}
                                className="scroll-mt-28"
                            >
                                <div className="mb-8">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                                        Travel Guide
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold tracking-tight">
                                        {category.category}
                                    </h2>

                                    <p className="mt-3 max-w-3xl leading-7 text-stone-600">
                                        {category.description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {category.questions.map((item) => {
                                        const isOpen = openQuestion === item.question;

                                        return (
                                            <article
                                                key={item.question}
                                                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-emerald-200"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() => toggleQuestion(item.question)}
                                                    aria-expanded={isOpen}
                                                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                                                >
                          <span className="text-base font-semibold text-stone-900 sm:text-lg">
                            {item.question}
                          </span>

                                                    <span
                                                        aria-hidden="true"
                                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xl font-medium text-emerald-800 transition-transform duration-200 ${
                                                            isOpen ? "rotate-45" : ""
                                                        }`}
                                                    >
                            +
                          </span>
                                                </button>

                                                {isOpen && (
                                                    <div className="border-t border-stone-100 px-6 py-5 sm:px-7">
                                                        <p className="max-w-3xl leading-8 text-stone-600">
                                                            {item.answer}
                                                        </p>

                                                        {item.question ===
                                                            "What should I do in an emergency?" && (
                                                                <Link
                                                                    href="/emergency"
                                                                    className="mt-4 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-600"
                                                                >
                                                                    View emergency information →
                                                                </Link>
                                                            )}

                                                        {item.question ===
                                                            "How do I get from the airport or port to my accommodation?" && (
                                                                <Link
                                                                    href="/transfers"
                                                                    className="mt-4 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-600"
                                                                >
                                                                    Explore transfer options →
                                                                </Link>
                                                            )}

                                                        {item.question === "Do I need to rent a car?" && (
                                                            <Link
                                                                href="/rentals"
                                                                className="mt-4 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-600"
                                                            >
                                                                View vehicle rentals →
                                                            </Link>
                                                        )}

                                                        {item.question ===
                                                            "Which area is best for staying in Lesvos?" && (
                                                                <Link
                                                                    href="/hotels"
                                                                    className="mt-4 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-600"
                                                                >
                                                                    Browse accommodation →
                                                                </Link>
                                                            )}

                                                        {item.question ===
                                                            "What are some popular beaches in Lesvos?" && (
                                                                <Link
                                                                    href="/beaches"
                                                                    className="mt-4 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-600"
                                                                >
                                                                    Discover beaches →
                                                                </Link>
                                                            )}

                                                        {item.question ===
                                                            "What local food should I try?" && (
                                                                <Link
                                                                    href="/food-drinks"
                                                                    className="mt-4 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-600"
                                                                >
                                                                    Explore food and drinks →
                                                                </Link>
                                                            )}
                                                    </div>
                                                )}
                                            </article>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-emerald-900 px-4 py-20 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                        Need more help?
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Still have a question?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-emerald-100">
                        Explore the rest of the travel guide or contact our team for more
                        information about visiting Lesvos.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/about"
                            className="inline-flex justify-center rounded-xl bg-yellow-300 px-7 py-3 font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-yellow-200"
                        >
                            About Us
                        </Link>

                        <Link
                            href="/join-us"
                            className="inline-flex justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                        >
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* Back home */}
            <section className="bg-white px-4 py-8 text-center sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="font-semibold text-emerald-800 transition hover:text-emerald-600"
                >
                    ← Back to home
                </Link>
            </section>
        </main>
    );
}