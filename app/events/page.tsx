import React from "react";

type EventItem = {
    id: number;
    title: string;
    date: string;
    time?: string;
    location: string;
    category: string;
    description: string;
    imageUrl?: string;
    link?: string;
};

const upcomingEvents: EventItem[] = [
    {
        id: 1,
        title: "Summer Music Night",
        date: "2026-07-05",
        time: "20:30",
        location: "Old Town Square",
        category: "Music",
        description:
            "An open-air music evening with local artists, food stands, and summer vibes.",
        imageUrl: "/images/events/summer-music-night.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Traditional Food Festival",
        date: "2026-07-12",
        time: "18:00",
        location: "Central Park",
        category: "Food",
        description:
            "Taste local dishes, traditional recipes, and handmade products from regional producers.",
        imageUrl: "/images/events/food-festival.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Guided Sunset Walk",
        date: "2026-07-18",
        time: "19:00",
        location: "Harbor Promenade",
        category: "Experience",
        description:
            "A relaxed guided walk through scenic spots, perfect for travelers and photography lovers.",
        imageUrl: "/images/events/sunset-walk.jpg",
        link: "#",
    },
];

function formatEventDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-[#f8f5ef] px-6 py-12">
            <section className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
                        Travel Guide
                    </p>

                    <h1 className="text-4xl font-bold text-stone-900 md:text-5xl">
                        Upcoming Events & Local Experiences
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base text-stone-600 md:text-lg">
                        Discover what’s happening soon. From local festivals and cultural
                        events to guided walks and seasonal activities.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.map((event) => (
                        <article
                            key={event.id}
                            className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="h-52 bg-stone-200">
                                {event.imageUrl ? (
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-stone-500">
                                        Event image
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
                    {event.category}
                  </span>

                                    <span className="text-sm text-stone-500">
                    {formatEventDate(event.date)}
                  </span>
                                </div>

                                <h2 className="text-xl font-bold text-stone-900">
                                    {event.title}
                                </h2>

                                <div className="mt-3 space-y-1 text-sm text-stone-600">
                                    {event.time && <p>🕒 {event.time}</p>}
                                    <p>📍 {event.location}</p>
                                </div>

                                <p className="mt-4 text-sm leading-6 text-stone-600">
                                    {event.description}
                                </p>

                                {event.link && (
                                    <a
                                        href={event.link}
                                        className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
                                    >
                                        Learn more
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}