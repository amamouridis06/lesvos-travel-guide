"use client";
import { useEffect } from "react";

// ---------- Replace with your own images ----------
const IMG = {
    hero: "/theo-entry.jpg",
    pool: "/theo-pool.jpg",
    bed: "/theo-liv.jpg",
    sauna: "/theo-sauna.jpg",
};

// ---------- Hotel data ----------
const hotel = {
    name: "Theofilos Paradise Boutique Hotel.",
    region: "Mytilene Lesvos Greece",
    country: "Greece",
    established: "1912",
    rooms: "35",
    fromPrice: "€100",
    tagline: "Where the sea meets stillness.",
    intro:
        "Comfortable rooms in the heart of the city. A long-standing tradition of hospitality, shaped by generations.",
    body: [
        "Theofilos Paradise Boutique Hotel is a small treasure of hospitality in the center of Mytilene. It combines the atmosphere of a historic neoclassical building with modern boutique comfort, offering an authentic Greek experience. With a welcoming environment and attentive service, it is an ideal choice for guests seeking quality, character, and genuine hospitality.",
        "Built in 1912, the 4-star boutique hotel’s main building is a carefully restored traditional mansion. Today it houses the reception hall, lounge with marble fireplace, as well as some of the rooms and suites.",
    ],
    highlights: [
        { label: "Established", value: "1912" },
        { label: "Parking", value: "Free" },
        { label: "Rooms", value: "35" },
        { label: "Wellness", value: "Spa & Wellness Centre" },
    ],
    pros: [
        "Central location within walking distance of key attractions",
        "Comfortable rooms with modern amenities",
        "On-site restaurant and bar",
        "Friendly, attentive service",
    ],
    knowBefore: [
        "Check-in time: 12:00 PM; Check-out time: 11:00 AM",
        "Limited on-site parking available; reservation recommended",
        "Located in the city centre — some street noise may be expected",
        "Valid ID and credit card required at check-in",
    ],
    gallery: [
        { src: IMG.pool, alt: "Hotel atmosphere", caption: "Sun, water, repeat." },
        { src: IMG.bed, alt: "Room interior", caption: "Sleep in style, wake refreshed." },
        { src: IMG.sauna, alt: "Wellness area", caption: "Heat your body, clear your mind." },
    ],
    bookUrl: "https://www.booking.com/",
};

// ---------- Styles ----------
const STYLES = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap");

  .ms-root {
    --ms-bg: #f7f6f2;
    --ms-fg: #1b1b1b;
    --ms-muted: #666;
    --ms-border: #e6e3dc;
    --ms-card: #ffffff;
    --ms-ink: #111;
    --ms-gold: #b08d57;

    --ms-display: "Cormorant Garamond", serif;
    --ms-sans: "Inter", sans-serif;

    background: var(--ms-bg);
    color: var(--ms-fg);
    font-family: var(--ms-sans);
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
  }

  .ms-display { font-family: var(--ms-display); }
  .ms-eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.7rem;
    color: var(--ms-gold);
  }

  html { scroll-behavior: smooth; }
`;

export default function TheofilosParadise() {
    useEffect(() => {
        const id = "hotel-styles";
        if (document.getElementById(id)) return;
        const tag = document.createElement("style");
        tag.id = id;
        tag.textContent = STYLES;
        document.head.appendChild(tag);
        document.title = `${hotel.name} — Boutique Hotel`;
    }, []);

    return (
        <div className="ms-root min-h-screen">

            {/* HERO */}
            <section className="relative h-[85svh] md:h-[92svh] min-h-[520px] overflow-hidden">
                <img
                    src={IMG.hero}
                    alt={hotel.name}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-12 md:pb-24">
                    <div>
                        <p className="ms-eyebrow">{hotel.region} · {hotel.country}</p>
                        <h1 className="ms-display mt-4 text-5xl md:text-7xl text-white">
                            {hotel.name}
                        </h1>
                        <p className="mt-4 text-white/80 italic text-lg md:text-2xl">
                            {hotel.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="border-y py-12 md:py-16" style={{ borderColor: "var(--ms-border)" }}>
                <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
                    {hotel.highlights.map((h) => (
                        <div key={h.label}>
                            <p className="text-xs uppercase tracking-widest text-gray-500">{h.label}</p>
                            <p className="ms-display text-3xl mt-2">{h.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* INTRO */}
            <section className="px-6 md:px-12 py-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="ms-display text-3xl md:text-5xl">{hotel.intro}</h2>

                    <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
                        {hotel.body.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="px-6 md:px-12 py-20 bg-white border-t" style={{ borderColor: "var(--ms-border)" }}>
                <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">

                    <div>
                        <p className="ms-eyebrow">Contact</p>
                        <h2 className="ms-display text-4xl md:text-5xl mt-4">Get in touch</h2>

                        <div className="mt-8 space-y-3 text-gray-600">
                            <p><span className="text-black">Phone:</span> +30 22510 43300</p>
                            <p><span className="text-black">Email:</span> info@theofilosparadise.gr</p>
                            <p><span className="text-black">Address:</span> Skra 7, Mitilini 811 00</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}