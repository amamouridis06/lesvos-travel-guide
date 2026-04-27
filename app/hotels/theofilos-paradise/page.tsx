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
        "Theofilos Paradise Boutique Hotel is a small «treasure » hospitality in the center of Mytilene. It combines the mansion atmosphere of a historic neoclassical building with the modern comfort of a boutique hotel, offering an authentic experience Lesmon through With a welcoming atmosphere and careful services, it is an ideal choice for those looking for quality, character and genuine Greek The hotel continues to evolve vigorously with the impending expansion and addition of new rooms, strengthening its location as",
        "Built back in 1912, the 4-star boutique hotel’s main building is a carefully restored traditional mansion. Today it houses the reception hall, lounge with marble fireplace, as well as some of the rooms and suites.",
        // "The cliffside infinity pool — lit by hand each evening with a hundred candles — is reserved exclusively for guests. The subterranean spa, excavated from the bedrock in 1962, draws on Provençal botanicals and a century-old hammam tradition. And dinner is a single seven-course tasting menu, written each morning by Chef Élise Marchand from the kitchen garden and the morning catch.",
    ],
    highlights: [
        { label: "Established", value: "1912" },
        { label: "Parking", value: "Free" },
        { label: "Rooms", value: "35" },
        // { label: "Restaurant", value: "Michelin-Starred" },
        { label: "Wellness", value: "Spa & Wellness Centre" },
    ],
    pros: [
        "Central location within walking distance of key attractions",
        "Comfortable rooms with modern amenities",
        "On-site restaurant and bar",
        "Friendly, attentive service",
    ],
    knowBefore: [
        "Check-in time: 12.00PM; Check-out time: 11:00AM",
        "Located in the city centre — some street noise may be expected",
        "Valid ID and credit card required at check-in",
    ],
    gallery: [
        { src: IMG.pool, alt: "Cliffside infinity pool at dusk", caption: "Sun, water, repeat." },
        { src: IMG.bed, alt: "Plated dish at the restaurant", caption: "Sleep in style, wake refreshed." },
        { src: IMG.sauna, alt: "Stone soaking tub in the spa", caption: "Heat your body, clear your mind." },
    ],
    bookUrl: "https://www.booking.com/hotel/gr/theofilos-paradise-boutique.en-gb.html?aid=2428353&label=metagha-link-MRGR-hotel-273019_dev-desktop_los-1_bw-13_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21404703270_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260510_ppt-_lp-2300_r-12263088559701900561&sid=747f34aafbdfb5cbb28107ae025e80b0&all_sr_blocks=27301905_392699596_2_1_0&checkin=2026-05-10&checkout=2026-05-11&dest_id=273019&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=27301905_392699596_2_1_0&hpos=1&matching_block_id=27301905_392699596_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=27301905_392699596_2_1_0__13100&srepoch=1777297346&srpvid=fb29605d0ced0140&type=total&ucfs=1&",
};

// ---------- Scoped styles (design tokens + animations) ----------
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
    letter-spacing: 0.32em;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--ms-gold);
  }
  .ms-hairline {
    display: inline-block;
    width: 56px;
    height: 1px;
    background: var(--ms-gold);
    vertical-align: middle;
  }
  .ms-serif-num {
    font-family: var(--ms-display);
    font-feature-settings: "lnum", "pnum";
    font-style: italic;
    font-weight: 300;
  }
  .ms-dropcap::first-letter {
    font-family: var(--ms-display);
    font-size: 4.5rem;
    font-weight: 500;
    float: left;
    line-height: 0.85;
    padding: 0.35rem 0.75rem 0 0;
    color: var(--ms-gold);
  }
  .ms-balance { text-wrap: balance; }
  .ms-pretty  { text-wrap: pretty; }

  @keyframes ms-fade-up   { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ms-slow-zoom { from { transform: scale(1.05); } to { transform: scale(1.18); } }
  @keyframes ms-shimmer   { from { transform: scaleX(0); transform-origin: left; } to { transform: scaleX(1); transform-origin: left; } }
  @keyframes ms-float     { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

  .ms-fade-up   { animation: ms-fade-up 1.1s cubic-bezier(.2,.7,.2,1) both; }
  .ms-slow-zoom { animation: ms-slow-zoom 18s ease-in-out infinite alternate; }
  .ms-shimmer   { animation: ms-shimmer 1.6s cubic-bezier(.2,.7,.2,1) .3s both; }
  .ms-float     { animation: ms-float 4s ease-in-out infinite; }

  html { scroll-behavior: smooth; }
`;

export default function TheofilosParadise() {
    // Inject scoped styles once on mount
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
            {/* Top bar */}
            {/*<header className="absolute left-0 right-0 top-0 z-30">*/}
            {/*    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">*/}
            {/*        <a href="#" className="ms-display text-xl text-[color:var(--ms-bg)] md:text-2xl">*/}
            {/*            The Quiet <span className="italic text-[color:var(--ms-gold-soft)]">Atlas</span>*/}
            {/*        </a>*/}
            {/*        <a*/}
            {/*            href="#"*/}
            {/*            className="text-[10px] uppercase tracking-[0.3em] text-white/80 underline-offset-8 hover:text-white hover:underline md:text-xs"*/}
            {/*        >*/}
            {/*            ← All hotels*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</header>*/}

            {/* Hero */}
            <section className="relative min-h-[85vh] md:h-[92svh] w-full overflow-hidden">
                <img
                    src={hotel.gallery[0] && IMG.hero}
                    alt={hotel.name}
                    className="ms-slow-zoom absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/85" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-12 md:pb-32">
                    <div className="ms-fade-up">
                        <div className="flex items-center gap-4">
                            <span className="ms-hairline ms-shimmer" />
                            <p className="ms-eyebrow" style={{ color: "var(--ms-gold-soft)" }}>
                                {hotel.region} · {hotel.country}
                            </p>
                        </div>
                        <h1 className="ms-balance mt-6 max-w-4xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-8xl">
                            {hotel.name}
                        </h1>
                        <p className="mt-6 max-w-xl text-lg italic text-white/85 ms-display sm:text-xl md:text-3xl">
                            "{hotel.tagline}"
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.3em] text-white/70">
                            <span>Est. <span className="ms-serif-num text-base text-[color:var(--ms-gold-soft)] not-italic">{hotel.established}</span></span>
                            <span className="hidden h-3 w-px bg-white/30 md:block" />
                            <span><span className="ms-serif-num text-base text-[color:var(--ms-gold-soft)]">{hotel.rooms}</span> Suites</span>
                            <span className="hidden h-3 w-px bg-white/30 md:block" />
                            <span>From <span className="ms-serif-num text-base text-[color:var(--ms-gold-soft)] not-italic">{hotel.fromPrice}</span></span>
                        </div>
                    </div>
                </div>

                <div className="ms-float absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/60 md:block">
                    Scroll
                </div>
            </section>

            {/* At a glance */}
            <section
                className="border-y px-6 py-12 backdrop-blur-sm md:px-12 md:py-16"
                style={{ borderColor: "var(--ms-border)", background: "color-mix(in oklab, var(--ms-bg) 60%, transparent)" }}
            >
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {hotel.highlights.map((h, i) => (
                        <div key={h.label} className="relative md:px-4">
                            {i > 0 && (
                                <span
                                    className="absolute -left-0 top-1 hidden h-12 w-px md:block"
                                    style={{ background: "var(--ms-border)" }}
                                />
                            )}
                            <div className="text-[10px] uppercase tracking-[0.32em]" style={{ color: "var(--ms-muted)" }}>
                                {h.label}
                            </div>
                            <div className="ms-display mt-3 text-3xl leading-none md:text-4xl">{h.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Body */}
            <section className="relative px-6 py-24 md:px-12 md:py-32">
                <div
                    className="ms-display pointer-events-none absolute left-6 top-12 select-none text-[5rem] sm:text-[7rem] leading-none md:left-12 md:text-[18rem]"
                    style={{ color: "color-mix(in oklab, var(--ms-gold) 10%, transparent)" }}
                >
                    "
                </div>

                <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-20">
                    <div className="md:col-span-7">
                        <div className="flex items-center gap-4">
                            <span className="ms-hairline" />
                            <p className="ms-eyebrow">The Entry</p>
                        </div>
                        <p className="ms-display ms-balance mt-8 text-3xl leading-[1.2] md:text-[2.5rem]">
                            {hotel.intro}
                        </p>
                        <div
                            className="ms-pretty mt-12 space-y-7 text-[15px] leading-[1.85] md:text-[17px]"
                            style={{ color: "var(--ms-muted)" }}
                        >
                            {hotel.body.map((p, i) => (
                                <p key={i} className={i === 0 ? "ms-dropcap" : undefined}>
                                    {p}
                                </p>
                            ))}
                        </div>

                        <div
                            className="mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.3em]"
                            style={{ color: "var(--ms-muted)" }}
                        >
                            <span className="ms-hairline" />
                            <span>Theofilos Paradise Boutique Hotel</span>
                        </div>
                        {/* Contact */}
                        <section className="relative px-6 py-16 md:px-12 md:py-32">
                            <div className="mx-auto max-w-7xl">
                                <div className="flex items-center gap-4">
                                    <span className="ms-hairline" />
                                    <p className="ms-eyebrow">Contact</p>
                                </div>

                                <h2 className="ms-display mt-6 text-4xl md:text-6xl">
                                    Get in touch
                                </h2>

                                <p className="mt-6 text-sm leading-relaxed" style={{ color: "var(--ms-muted)" }}>
                                    For reservations, special requests or availability inquiries, our team is available daily to assist you.
                                </p>

                                <div className="mt-10 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                                    <p><span className="text-[color:var(--ms-fg)]"><strong>Phone</strong>:</span> +30 22510 43300</p>
                                    <p><span className="text-[color:var(--ms-fg)]"><strong>Email</strong>:</span> info@theofilosparadise.gr</p>
                                    <p><span className="text-[color:var(--ms-fg)]"><strong>Address</strong></span> Skra 7, Mytilene 81100, Lesvos, Greece</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Booking aside */}
                    <aside className="space-y-10 mt-16 md:mt-0 md:col-span-4 md:col-start-9">
                        <div className="md:sticky md:top-8 static">
                            <div
                                className="relative border p-8"
                                style={{
                                    borderColor: "var(--ms-border)",
                                    background: "var(--ms-card)",
                                    boxShadow: "0 30px 60px -30px color-mix(in oklab, var(--ms-ink) 25%, transparent)",
                                }}
                            >
                <span
                    className="absolute -top-px left-8 right-8 h-px"
                    style={{ background: "var(--ms-gold)" }}
                />
                                <div className="text-[10px] uppercase tracking-[0.32em]" style={{ color: "var(--ms-muted)" }}>
                                    From
                                </div>
                                <div className="mt-2 flex items-baseline gap-2">
                                    <span className="ms-display text-5xl">{hotel.fromPrice}</span>
                                    <span className="text-xs" style={{ color: "var(--ms-muted)" }}>/ night</span>
                                </div>
                                <div className="mt-1 text-xs" style={{ color: "var(--ms-muted)" }}>
                                    double occupancy, taxes incl.
                                </div>

                                <a
                                    href={hotel.bookUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group mt-7 flex w-full md:w-auto items-center justify-center gap-3 py-4 text-[10px] uppercase tracking-[0.35em] text-white transition-all duration-500"
                                    style={{ background: "var(--ms-ink)" }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "var(--ms-gold)";
                                        e.currentTarget.style.color = "var(--ms-ink)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "var(--ms-ink)";
                                        e.currentTarget.style.color = "white";
                                    }}
                                >
                                    Book Direct
                                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                                </a>


                                <div
                                    className="mt-7 border-t pt-5 text-[11px] uppercase tracking-[0.28em]"
                                    style={{ borderColor: "var(--ms-border)", color: "var(--ms-muted)" }}
                                >
                                    {[
                                        ["Check-in", "14:00"],
                                        ["Check-out", "11:00"],
                                        ["Cancellation ", "3 days"],
                                    ].map(([k, v]) => (
                                        <div key={k} className="flex justify-between py-1.5">
                                            <span>{k}</span>
                                            <span style={{ color: "var(--ms-fg)" }}>{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className="flex items-center gap-4">
                                    <span className="ms-hairline" />
                                    <p className="ms-eyebrow">Why we love it</p>
                                </div>
                                <ul className="mt-6 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                                    {hotel.pros.map((p) => (
                                        <li key={p} className="flex gap-4 leading-relaxed">
                      <span
                          className="mt-2 h-px w-4 shrink-0"
                          style={{ background: "var(--ms-gold)" }}
                      />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-12">
                                <div className="flex items-center gap-4">
                                    <span className="ms-hairline" />
                                    <p className="ms-eyebrow">Know before you go</p>
                                </div>
                                <ul className="mt-6 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                                    {hotel.knowBefore.map((p, i) => (
                                        <li key={p} className="flex gap-4 leading-relaxed">
                      <span
                          className="ms-serif-num shrink-0 not-italic"
                          style={{ color: "var(--ms-gold)" }}
                      >
                        0{i + 1}
                      </span>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Pull quote */}
            <section
                className="px-6 py-24 text-white md:px-12 md:py-32"
                style={{ background: "var(--ms-ink)" }}
            >
                <div className="mx-auto max-w-4xl text-center">
                    <span className="ms-display text-6xl leading-none md:text-8xl" style={{ color: "var(--ms-gold)" }}>
                      "
                    </span>
                    <blockquote className="ms-display ms-balance mt-4 text-3xl italic leading-[1.25] text-white/90 md:text-5xl">
                        In the heart of town, yet worlds away.
                    </blockquote>
                </div>
            </section>

            {/* Gallery */}
            <section className="px-6 py-24 md:px-12 md:py-32" style={{ background: "var(--ms-bg)" }}>
                <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-8 grid-cols-1">
                    <div className="flex items-end justify-between gap-6">
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

                    </div>


                    <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-8">
                        {hotel.gallery.map((g, i) => {
                            const layouts = [
                                "md:col-span-7 md:row-span-2 aspect-[4/5]",
                                "md:col-span-5 aspect-[4/3]",
                                "md:col-span-5 md:col-start-8 aspect-[4/3]",
                            ];
                            return (
                                <figure key={g.src} className={`group ${layouts[i] ?? "md:col-span-4 aspect-[4/5]"}`}>
                                    <div className="relative h-full overflow-hidden" style={{ background: "var(--ms-border)" }}>
                                        <img
                                            src={g.src}
                                            alt={g.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                    </div>
                                    <figcaption className="mt-4 flex items-baseline gap-3">
                    <span className="ms-serif-num text-sm" style={{ color: "var(--ms-gold)" }}>
                      0{i + 1}
                    </span>
                                        <span className="ms-display text-lg italic" style={{ color: "var(--ms-muted)" }}>
                      {g.caption}
                    </span>
                                    </figcaption>
                                </figure>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section
                className="relative overflow-hidden px-6 py-24 text-white md:px-12 md:py-32"
                style={{ background: "var(--ms-ink)" }}
            >
                <div className="pointer-events-none absolute inset-0 opacity-30">
                    <div
                        className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-[140px]"
                        style={{ background: "var(--ms-gold)" }}
                    />
                    <div
                        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full blur-[120px]"
                        style={{ background: "var(--ms-gold)" }}
                    />
                </div>
                <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
                    <p className="ms-eyebrow" style={{ color: "var(--ms-gold-soft)" }}>Ready when you are</p>
                    <h2 className="ms-display ms-balance mt-6 text-4xl leading-[1.05] md:text-7xl">
                        Stay at <span className="italic" style={{ color: "var(--ms-gold-soft)" }}>{hotel.name}</span>.
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                        Rooms are limited and the season fills early. We recommend booking at least eight weeks ahead.
                    </p>
                    <a
                        href={hotel.bookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-10 flex w-full md:w-auto items-center justify-center gap-4 border bg-transparent px-10 py-5 text-[10px] uppercase tracking-[0.4em] text-white transition-all duration-500"
                        style={{ borderColor: "var(--ms-gold)" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--ms-gold)";
                            e.currentTarget.style.color = "var(--ms-ink)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "white";
                        }}
                    >
                        Reserve a Suite
                        <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </section>

        </div>
    );
}