"use client";
import { useEffect } from "react";

const IMG = {
    hero: "/pierres/hero.jpeg",
    pool: "/pierres/pool1.jpeg",
    pool3: "/pierres/pool3.jpeg",
    entry: "/pierres/entry.jpeg",
    view:"/pierres/view.jpeg",
    outdoor: "/pierres/outdoor.jpeg",
    liv1: "/pierres/liv1.jpeg",
    liv2: "/pierres/liv2.jpeg",
    kitch:"/pierres/kitch.jpeg",
    kitch1:"/pierres/kitch1.jpeg",
    bath:"/pierres/bath.jpeg",
    bath2:"/pierres/bath2.jpeg",
    bed1:"/pierres/bed.jpeg",
    bed2: "/pierres/bed2.jpeg",
    bed3: "/pierres/bed3.jpeg",
    drone:"/pierres/drone.jpeg",
};

const hotel = {
    name: "Pierres Blanches Residences",
    region: "Mytilene Lesvos 81100",
    country: "Greece",
    fromPrice: "€129",
    tagline: "Residences in East Lesvos",
    intro:
        "Welcome to Pierres Blanches Residences in Mytilene",
    body: [
        "Just a short drive from Mytilene, Pierres Blanches Residences offers a refined hospitality experience that redefines modern travel.",
        "Designed for today’s traveler, it goes beyond accommodation, providing comfort, privacy, and a true sense of home. Ideal for families and groups, each residence combines shared living with personal space, ensuring both connection and independence.",
        "Set within a beautifully integrated natural landscape, the stone-built villas feature elegant design and private pools, reflecting understated luxury and attention to detail.",
        "Founded by Michalis Tsizmetzis, the project is driven by a passion for hospitality and genuine human connection. Guests are welcomed into a warm, personal environment that often inspires return visits.",
        "Pierres Blanches Residences is not just a place to stay, but an experience of belonging, relaxation, and authentic island living."

    ],
    highlights: [
        { label: "Outdoor swimming pool", value: "Yes" },
        {label:"Free cot always available", value:"Yes"},
        { label: "Transport from / to the airport", value: "No"  },
        { label: "Facilities for disabled guests", value: "No" },
        { label: "Parking", value: "Free" },
        { label: "Wi-Fi", value: "Free" },
        {label:"Pets", value:"Yes"}
    ],
    pros: [
        "Beautiful stone-built luxury residences with authentic character and elegant design",
        "Peaceful location just outside Mytilene, offering easy access to the city while maintaining privacy",
        "Private swimming pools with relaxing views of the surrounding natural landscape",
        "Ideal for families and groups, offering a perfect balance of shared spaces and privacy",
        "Thoughtfully designed interiors combining modern comfort with warm, home-like atmosphere",
        "A serene setting perfect for relaxation, slow living, and authentic island stays",
    ],
    knowBefore: [
        "Located in the East Lesvos",
        "Valid ID and credit card required at check-in",
        "The property is located a short drive from Mytilene, so a car is recommended for easier access and exploring the island",
        "Private pools may be seasonal and subject to weather conditions",
    ],
    gallery: [
        { src: IMG.pool, alt: "entry"},
        { src: IMG.pool3, alt: "Pool area" },
        { src: IMG.entry, alt: "Hotel room" },
        { src: IMG.view, alt: "samp" },
        { src: IMG.outdoor, alt: "bed room"},
        { src: IMG.liv1, alt: "balcony" },
        { src: IMG.liv2, alt: "bath" },
        { src: IMG.kitch, alt: "bath" },
        { src: IMG.kitch1, alt: "bath" },
        { src: IMG.bath, alt: "bath" },
        { src: IMG.bed1, alt: "bed" },
        { src: IMG.bed2, alt: "bed" },
        { src: IMG.bed3, alt: "bed" },
        { src: IMG.drone, alt: "drone" },
    ],
    bookUrl:
        "https://www.booking.com/hotel/gr/pierres-blanches",
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

export default function PPUrban() {
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
                            <span>Pierres Blanches Residences</span>
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
                                        ["Cancellation", "Call the hotel"],
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
                            For reservations, special requests or availability inquiries, the team is available daily to assist you.
                        </p>
                        <div className="mt-8 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                            <p><strong className="text-[color:var(--ms-fg)]">Phone:</strong> +30 6972821275 </p>
                            <p><strong className="text-[color:var(--ms-fg)]">Email:</strong> pierresblanches3@gmail.com </p>
                            <p><strong className="text-[color:var(--ms-fg)]">Region:</strong> Mytilene, Lesvos </p>
                            <p><strong className="text-[color:var(--ms-fg)]">Instagram:</strong> pierresblanchesmjt</p>
                            <p><strong className="text-[color:var(--ms-fg)]">Facebook:</strong>  Pierres Blanches</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 sm:px-8 md:px-12 md:py-28" style={{ background: "var(--ms-bg)" }}>
                <div className="mx-auto max-w-7xl">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="ms-hairline" />
                            <p className="ms-eyebrow">From the houses</p>
                        </div>
                        <h2 className="ms-display mt-4 text-4xl leading-tight md:text-6xl">
                            A few photos<br />
                            <span className="italic" style={{ color: "var(--ms-gold)" }}>from the houses.</span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-8">
                        {hotel.gallery.map((g, i) => {
                            const layouts = [
                                "w-full aspect-[4/5] md:col-span-7 md:row-span-2 md:aspect-[4/5]",
                                "w-full aspect-[4/5] md:col-span-5 md:aspect-[4/3]",
                                "w-full aspect-[4/5] md:col-span-5 md:col-start-8 md:aspect-[4/3]",
                            ];
                            return (
                                <figure key={g.src} className={`group ${layouts[i] ?? "aspect-[4/5] md:col-span-4 md:aspect-[4/5]]"}`}>
                                    <div className="relative h-full min-h-[260px] overflow-hidden md:min-h-0 md:aspect-auto aspect-[4/5]" style={{ background: "var(--ms-border)" }}>
                                        <img
                                            src={g.src}
                                            alt={g.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                    </div>

                                </figure>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
