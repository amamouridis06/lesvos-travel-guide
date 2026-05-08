"use client";
import { useEffect } from "react";

const IMG = {
    hero: "/theo-entry.jpg",
    pool: "/theo-pool.jpg",
    bed: "/theo-liv.jpg",
    sauna: "/theo-sauna.jpg",
    hamam: "/theo-hamam.jpg",
    samp: "/theo-samp.jpg",
    bed2: "/theo-bed2.jpg",
    entry: "/theo-drone.jpg",
    recept: "/theo.recept.jpg"
};

const hotel = {
    name: "Theofilos Paradise Boutique Hotel",
    region: "Mytilene Lesvos Greece",
    country: "Greece",
    established: "1912",
    fromPrice: "€100",
    tagline: "Where the sea meets stillness.",
    intro:
        "Comfortable rooms in the heart of the city. A long-standing tradition of hospitality, shaped by generations.",
    body: [
        "Theofilos Paradise Boutique Hotel is a small treasure of hospitality in the center of Mytilene. It combines the mansion atmosphere of a historic neoclassical building with the modern comfort of a boutique hotel, offering an authentic experience in Lesvos. With a welcoming atmosphere and careful services, it is an ideal choice for those looking for quality, character and genuine Greek hospitality.",
        "Built back in 1912, the 4-star boutique hotel’s main building is a carefully restored traditional mansion. Today it houses the reception hall, lounge with marble fireplace, as well as some of the rooms and suites.",
    ],
    highlights: [
        { label: "Room service", value: "Yes" },
        {label : "Exceptional breakfast", value: "Yes"},
        { label: "Parking", value: "Free (depend on availability)" },
        { label: "Wellness", value: "Spa & Wellness Centre" },
        { label: "Airport shuttle", value: "Yes" },

    ],
    pros: [
        "Central location within walking distance of key attractions",
        "Comfortable rooms with modern amenities",
        "On-site restaurant and bar",
        "Friendly, attentive service",
        "Outdoor swimming pool",
        "Traditional Greek breakfast highlights local products from Lesvos, offering an authentic taste from the start of the day."
    ],
    knowBefore: [
        "Check-in time: 14:00; Check-out time: until 11:00",
        "Located in the city centre — some street noise may be expected",
        "Valid ID and credit card required at check-in",
        "We are in the heart of Mytilene, at a distance of breathing from the port and the main attractions.",
        "Pet Policy: Our hotel is friendly to pets (upon appointment) so that visitors don't leave the four-legged friends. ",
        "Accessibility: There are infrastructure and rooms specially designed for people with mobility difficulties"
    ],
    gallery: [
        { src: IMG.entry, alt: "entry", caption: "Step Inside, Leave the Ordinary Behind" },
        { src: IMG.recept, alt: "Reception", caption: "Where Every Stay Starts with a Smile" },
        { src: IMG.pool, alt: "Pool area", caption: "Sun, water, repeat." },
        { src: IMG.bed, alt: "Hotel room", caption: "Sleep in style, wake refreshed." },
        { src: IMG.samp, alt: "samp", caption: "Celebrate the Moment" },
        { src: IMG.bed2, alt: "BEd room2", caption: "Sleep, Perfected" },
        { src: IMG.hamam, alt: "Hamam", caption: "Steam, Serenity, Renewal" },
        { src: IMG.sauna, alt: "Sauna and wellness area", caption: "Heat your body, clear your mind." },
    ],
    bookUrl:
        "https://www.booking.com/hotel/gr/theofilos-paradise-boutique.en-gb.html",
};

const STYLES = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap");

  .ms-root {
    --ms-bg: oklch(0.975 0.012 80);
    --ms-fg: oklch(0.18 0.015 60);
    --ms-muted: oklch(0.45 0.02 60);
    --ms-border: oklch(0.9 0.013 80);
    --ms-card: oklch(0.985 0.008 80);
    --ms-ink: oklch(0.14 0.012 60);
    --ms-gold: oklch(0.68 0.11 75);
    --ms-gold-soft: oklch(0.82 0.06 80);
    --ms-display: "Cormorant Garamond", serif;
    --ms-sans: "Inter", sans-serif;
    background: var(--ms-bg);
    color: var(--ms-fg);
    font-family: var(--ms-sans);
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background-image:
      radial-gradient(circle at 20% 10%, color-mix(in oklab, var(--ms-gold) 6%, transparent) 0%, transparent 40%),
      radial-gradient(circle at 80% 90%, color-mix(in oklab, var(--ms-ink) 5%, transparent) 0%, transparent 45%);
  }

  .ms-root h1, .ms-root h2, .ms-root h3, .ms-root h4, .ms-display {
    font-family: var(--ms-display);
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .ms-eyebrow {
    font-family: var(--ms-sans);
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-size: 0.65rem;
    font-weight: 500;
    color: var(--ms-gold);
  }

  @media (min-width: 768px) {
    .ms-eyebrow { letter-spacing: 0.32em; font-size: 0.7rem; }
  }

  .ms-hairline {
    display: inline-block;
    width: 40px;
    height: 1px;
    background: var(--ms-gold);
    vertical-align: middle;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    .ms-hairline { width: 56px; }
  }

  .ms-serif-num {
    font-family: var(--ms-display);
    font-feature-settings: "lnum", "pnum";
    font-style: italic;
    font-weight: 300;
  }

  .ms-dropcap::first-letter {
    font-family: var(--ms-display);
    font-size: 3.5rem;
    font-weight: 500;
    float: left;
    line-height: 0.85;
    padding: 0.35rem 0.65rem 0 0;
    color: var(--ms-gold);
  }

  @media (min-width: 768px) {
    .ms-dropcap::first-letter { font-size: 4.5rem; padding-right: 0.75rem; }
  }

  .ms-balance { text-wrap: balance; }
  .ms-pretty  { text-wrap: pretty; }

  @keyframes ms-fade-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ms-slow-zoom { from { transform: scale(1.04); } to { transform: scale(1.12); } }
  @keyframes ms-shimmer { from { transform: scaleX(0); transform-origin: left; } to { transform: scaleX(1); transform-origin: left; } }
  @keyframes ms-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

  .ms-fade-up { animation: ms-fade-up 1.1s cubic-bezier(.2,.7,.2,1) both; }
  .ms-slow-zoom { animation: ms-slow-zoom 18s ease-in-out infinite alternate; }
  .ms-shimmer { animation: ms-shimmer 1.6s cubic-bezier(.2,.7,.2,1) .3s both; }
  .ms-float { animation: ms-float 4s ease-in-out infinite; }

  html { scroll-behavior: smooth; }
`;

export default function TheofilosParadise() {
    useEffect(() => {
        const id = "maison-solene-styles";
        if (document.getElementById(id)) return;
        const tag = document.createElement("style");
        tag.id = id;
        tag.textContent = STYLES;
        document.head.appendChild(tag);
        document.title = `${hotel.name}, ${hotel.region} — The Quiet Atlas`;
    }, []);

    return (
        <div className="ms-root min-h-screen">
            <section className="relative flex min-h-[760px] w-full overflow-hidden sm:min-h-[820px] lg:h-screen lg:min-h-[720px]">
                <img
                    src={IMG.hero}
                    alt={hotel.name}
                    className="ms-slow-zoom absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/85" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.45)_100%)]" />

                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8 md:px-12 md:pb-24 lg:pb-32">
                    <div className="ms-fade-up max-w-5xl">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <span className="ms-hairline ms-shimmer" />
                            <p className="ms-eyebrow" style={{ color: "var(--ms-gold-soft)" }}>
                                {hotel.region} · {hotel.country}
                            </p>
                        </div>
                        <h1 className="ms-balance mt-5 text-5xl leading-[0.98] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                            {hotel.name}
                        </h1>
                        <p className="ms-display mt-5 max-w-2xl text-xl italic text-white/85 sm:text-2xl md:text-3xl">
                            “{hotel.tagline}”
                        </p>
                        <div className="mt-8 flex flex-col gap-3 text-[10px] uppercase tracking-[0.26em] text-white/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 md:tracking-[0.3em]">
                            <span>Est. <span className="ms-serif-num text-base text-[color:var(--ms-gold-soft)] not-italic">{hotel.established}</span></span>
                            <span className="hidden h-3 w-px bg-white/30 sm:block" />
                            <span>From <span className="ms-serif-num text-base text-[color:var(--ms-gold-soft)] not-italic">{hotel.fromPrice}</span></span>
                        </div>
                    </div>
                </div>

                <div className="ms-float absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/60 lg:block">
                    Scroll
                </div>
            </section>

            <section
                className="border-y px-5 py-10 backdrop-blur-sm sm:px-8 md:px-12 md:py-16"
                style={{ borderColor: "var(--ms-border)", background: "color-mix(in oklab, var(--ms-bg) 60%, transparent)" }}
            >
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {hotel.highlights.map((h, i) => (
                        <div key={h.label} className="relative lg:px-4">
                            {i > 0 && (
                                <span
                                    className="absolute -left-0 top-1 hidden h-12 w-px lg:block"
                                    style={{ background: "var(--ms-border)" }}
                                />
                            )}
                            <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color: "var(--ms-muted)" }}>
                                {h.label}
                            </div>
                            <div className="ms-display mt-2 text-3xl leading-tight md:mt-3 md:text-4xl">{h.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:py-32">
                <div
                    className="ms-display pointer-events-none absolute left-5 top-10 select-none text-[8rem] leading-none sm:left-8 md:left-12 md:text-[16rem]"
                    style={{ color: "color-mix(in oklab, var(--ms-gold) 10%, transparent)" }}
                >
                    ”
                </div>

                <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-20">
                    <main className="lg:col-span-7">
                        <div className="flex items-center gap-4">
                            <span className="ms-hairline" />
                            <p className="ms-eyebrow">The Entry</p>
                        </div>

                        <p className="ms-display ms-balance mt-7 text-3xl leading-[1.15] sm:text-4xl md:text-5xl lg:text-[2.75rem]">
                            {hotel.intro}
                        </p>

                        <div className="ms-pretty mt-10 space-y-6 text-[15px] leading-[1.8] sm:text-base md:mt-12 md:text-[17px]" style={{ color: "var(--ms-muted)" }}>
                            {hotel.body.map((p, i) => (
                                <p key={i} className={i === 0 ? "ms-dropcap" : undefined}>
                                    {p}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.24em] md:tracking-[0.3em]" style={{ color: "var(--ms-muted)" }}>
                            <span className="ms-hairline" />
                            <span>Theofilos Paradise Boutique Hotel</span>
                        </div>
                    </main>

                    <aside className="lg:col-span-4 lg:col-start-9">
                        <div className="space-y-12 lg:sticky lg:top-8">
                            <div
                                className="relative border p-6 sm:p-8"
                                style={{
                                    borderColor: "var(--ms-border)",
                                    background: "var(--ms-card)",
                                    boxShadow: "0 30px 60px -30px color-mix(in oklab, var(--ms-ink) 25%, transparent)",
                                }}
                            >
                                <span className="absolute -top-px left-6 right-6 h-px sm:left-8 sm:right-8" style={{ background: "var(--ms-gold)" }} />
                                <div className="text-[10px] uppercase tracking-[0.32em]" style={{ color: "var(--ms-muted)" }}>From</div>
                                <div className="mt-2 flex items-baseline gap-2">
                                    <span className="ms-display text-5xl">{hotel.fromPrice}</span>
                                    <span className="text-xs" style={{ color: "var(--ms-muted)" }}>/ night</span>
                                </div>
                                <div className="mt-1 text-xs" style={{ color: "var(--ms-muted)" }}>double occupancy, taxes incl.</div>

                                <a
                                    href={hotel.bookUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group mt-7 flex items-center justify-center gap-3 py-4 text-[10px] uppercase tracking-[0.28em] text-white transition-all duration-500 sm:tracking-[0.35em]"
                                    style={{ background: "var(--ms-ink)" }}
                                >
                                    Book Direct
                                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                                </a>

                                <div className="mt-7 border-t pt-5 text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em]" style={{ borderColor: "var(--ms-border)", color: "var(--ms-muted)" }}>
                                    {[
                                        ["Check-in", "14:00"],
                                        ["Check-out", "11:00"],
                                        ["Cancellation", "3 days"],
                                    ].map(([k, v]) => (
                                        <div key={k} className="flex justify-between gap-4 py-1.5">
                                            <span>{k}</span>
                                            <span style={{ color: "var(--ms-fg)" }}>{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="ms-hairline" />
                                    <p className="ms-eyebrow">Why we love it</p>
                                </div>
                                <ul className="mt-6 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                                    {hotel.pros.map((p) => (
                                        <li key={p} className="flex gap-4 leading-relaxed">
                                            <span className="mt-2 h-px w-4 shrink-0" style={{ background: "var(--ms-gold)" }} />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="ms-hairline" />
                                    <p className="ms-eyebrow">Know before you go</p>
                                </div>
                                <ul className="mt-6 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                                    {hotel.knowBefore.map((p, i) => (
                                        <li key={p} className="flex gap-4 leading-relaxed">
                                            <span className="ms-serif-num shrink-0 not-italic" style={{ color: "var(--ms-gold)" }}>0{i + 1}</span>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="px-5 py-18 sm:px-8 md:px-12 md:py-24">
                <div className="mx-auto grid max-w-6xl gap-10 border-y py-12 md:grid-cols-12 md:py-16" style={{ borderColor: "var(--ms-border)" }}>
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-4">
                            <span className="ms-hairline" />
                            <p className="ms-eyebrow">Contact</p>
                        </div>
                        <h2 className="ms-display mt-5 text-4xl md:text-6xl">Get in touch</h2>
                    </div>
                    <div className="md:col-span-6 md:col-start-7">
                        <p className="text-sm leading-relaxed md:text-base" style={{ color: "var(--ms-muted)" }}>
                            For reservations, special requests or availability inquiries, our team is available daily to assist you.
                        </p>
                        <div className="mt-8 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                            <p><strong className="text-[color:var(--ms-fg)]">Phone:</strong> 22510 43300</p>
                            <p><strong className="text-[color:var(--ms-fg)]">Email:</strong> info@theofilosparadise.gr</p>
                            <p><strong className="text-[color:var(--ms-fg)]">Address:</strong> Skra 7, Mytilini 81100</p>
                            <p><strong className="text-[color:var(--ms-fg)]">Website:</strong> theofilosparadise.gr</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 text-white sm:px-8 md:px-12 md:py-28" style={{ background: "var(--ms-ink)" }}>
                <div className="mx-auto max-w-4xl text-center">
                    <span className="ms-display text-6xl leading-none md:text-8xl" style={{ color: "var(--ms-gold)" }}>“</span>
                    <blockquote className="ms-display ms-balance mt-4 text-3xl italic leading-[1.25] text-white/90 md:text-5xl">
                        In the heart of town, yet worlds away.
                    </blockquote>
                </div>
            </section>

            <section className="px-5 py-20 sm:px-8 md:px-12 md:py-28" style={{ background: "var(--ms-bg)" }}>
                <div className="mx-auto max-w-7xl">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="ms-hairline" />
                            <p className="ms-eyebrow">From the visit</p>
                        </div>
                        <h2 className="ms-display mt-4 text-4xl leading-tight md:text-6xl">
                            A few moments<br />
                            <span className="italic" style={{ color: "var(--ms-gold)" }}>from the stay.</span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-8">
                        {hotel.gallery.map((g, i) => {
                            const layouts = [
                                "md:col-span-7 md:row-span-2 aspect-[4/5]",
                                "md:col-span-5 aspect-[4/3]",
                                "md:col-span-5 md:col-start-8 aspect-[4/3]",
                            ];
                            return (
                                <figure key={g.src} className={`group ${layouts[i] ?? "md:col-span-4 aspect-[4/5]"}`}>
                                    <div className="relative h-full min-h-[260px] overflow-hidden md:min-h-0" style={{ background: "var(--ms-border)" }}>
                                        <img
                                            src={g.src}
                                            alt={g.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                    </div>
                                    <figcaption className="mt-4 flex items-baseline gap-3">
                                        <span className="ms-serif-num text-sm" style={{ color: "var(--ms-gold)" }}>0{i + 1}</span>
                                        <span className="ms-display text-lg italic" style={{ color: "var(--ms-muted)" }}>{g.caption}</span>
                                    </figcaption>
                                </figure>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/*<section className="relative overflow-hidden px-5 py-20 text-white sm:px-8 md:px-12 md:py-28" style={{ background: "var(--ms-ink)" }}>*/}
            {/*    <div className="pointer-events-none absolute inset-0 opacity-30">*/}
            {/*        <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-[140px]" style={{ background: "var(--ms-gold)" }} />*/}
            {/*        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full blur-[120px]" style={{ background: "var(--ms-gold)" }} />*/}
            {/*    </div>*/}
            {/*    <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">*/}
            {/*        <p className="ms-eyebrow" style={{ color: "var(--ms-gold-soft)" }}>Ready when you are</p>*/}
            {/*        <h2 className="ms-display ms-balance mt-6 text-4xl leading-[1.05] md:text-7xl">*/}
            {/*            Stay at <span className="italic" style={{ color: "var(--ms-gold-soft)" }}>{hotel.name}</span>.*/}
            {/*        </h2>*/}
            {/*        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">*/}
            {/*            Rooms are limited and the season fills early. We recommend booking at least eight weeks ahead.*/}
            {/*        </p>*/}
            {/*        <a*/}
            {/*            href={hotel.bookUrl}*/}
            {/*            target="_blank"*/}
            {/*            rel="noreferrer"*/}
            {/*            className="group mt-10 inline-flex max-w-full items-center gap-4 border bg-transparent px-8 py-5 text-center text-[10px] uppercase tracking-[0.28em] text-white transition-all duration-500 sm:px-10 sm:tracking-[0.4em]"*/}
            {/*            style={{ borderColor: "var(--ms-gold)" }}*/}
            {/*        >*/}
            {/*            Reserve a Suite*/}
            {/*            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
}
