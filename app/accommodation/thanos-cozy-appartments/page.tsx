"use client";
import { useEffect } from "react";


const IMG = {
  hero: "/thanos/thanosbed.jpg",
  bath: "/thanos/thanosbath.jpg",
  table:"/thanos/thanostable.jpg",
  ntou: "/thanos/thanosb.jpg",
  bed1: "/thanos/thanosbed.jpg",
  bed2: "/thanos/thanosbed2.jpg",
  livingroom: "/thanos/thanosliv.jpg",
  kitchen: "/thanos/thanosk.jpg",
  house: "/thanos/thanoshouse.jpg",
};

// ---------- Appartment data ----------
const appartment = {
  name: "Thanos Cozy Apartments",
  region: "Kalloni Lesvos",
  country: "Greece",
  fromPrice: "€82",
  tagline: "Where the sea meets stillness.",
  intro:
      "Nice Appartment to stay in Skalla Kallonis",
  body: [
    "Accommodation: Thanos Cozy Apartments in Skala Kallonis offers a sun terrace and free WiFi. Each apartment features air-conditioning, a terrace, and a balcony with sea views.",

    "Modern Amenities: Guests enjoy a kitchenette, private bathroom, washing machine, and a work desk. Additional facilities include a paid shuttle service, 24-hour front desk, daily housekeeping, and luggage storage.",

  " Prime Location: Skala Kallonis Beach is a 4-minute walk away. Nearby attractions include Agia Paraskevi and Olive Museum, each 10 km from the property. Mytilene International Airport is 46 km distant.",

  ],
  highlights: [
    { label: "Wi-Fi", value: "Free" },
    { label: "Parking", value: "Free" },
    { label: "Air condition", value: "Yes" },
    { label: "Balcony", value: "Yes" },
  ],
  pros: [
    "Central location in the heart of the island",
    "Just steps away from the sea",
    "Beautiful sea view from the apartment",
    "Close to shops, restaurants, and local attractions",
    "Peaceful atmosphere despite central location",
  ],
  knowBefore: [
    "Check-in time: 15:00 to 23:00; Check-out time: 08:00 to 10:00",
    "Some street noise may be expected",
    "Valid ID and credit card required at check-in",
    "Τhere is no accessibility for people with disabilities"
  ],
  gallery: [
    { src: IMG.house, alt: "Where Comfort Meets Clean" },
    { src: IMG.bed1, alt: "Where Every Night Feels Better" },
    { src: IMG.table, alt: "Designed for Delicious Moments"},
    { src: IMG.livingroom, alt: "Your Space, Your Story" },
    { src: IMG.kitchen, alt: "Designed for Delicious Moments"},
    { src: IMG.bath, alt: "Where Comfort Meets Clean" },
    { src: IMG.bed2, alt: "Where Every Night Feels Better" },
    { src: IMG.ntou, alt: "Designed for Delicious Moments"},
  ],

  bookUrl: "https://www.booking.com/hotel/gr/thanos-cozy-apartments.en-gb.html?aid=397594&label=gog235jc-10CAEoggI46AdIM1gDaFyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AuPcyc8GwAIB0gIkNjVjMzhiNTEtNmU0My00MjRjLThiMDItZTYwMGRlZTcyNTgx2AIB4AIB&sid=747f34aafbdfb5cbb28107ae025e80b0&dest_id=14571543&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1777533098&srpvid=cc27924072e3031b&type=total&ucfs=1&",
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

export default function ThanosCozy() {
  // Inject scoped styles once on mount
  useEffect(() => {
    const id = "maison-solene-styles";
    if (document.getElementById(id)) return;
    const tag = document.createElement("style");
    tag.id = id;
    tag.textContent = STYLES;
    document.head.appendChild(tag);
    document.title = `${appartment.name}, ${appartment.region} — The Quiet Atlas`;
  }, []);

  return (
      <div className="ms-root min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[85vh] md:h-[92svh] w-full overflow-hidden">
          <img
              src={appartment.gallery[0] && IMG.hero}
              alt={appartment.name}
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
                  {appartment.region} · {appartment.country}
                </p>
              </div>
              <h1 className="ms-balance mt-6 max-w-4xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-8xl">
                {appartment.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg italic text-white/85 ms-display sm:text-xl md:text-3xl">
                "{appartment.tagline}"
              </p>
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
            {appartment.highlights.map((h, i) => (
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
          <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-7">
              <div className="flex items-center gap-4">
                <span className="ms-hairline" />
                <p className="ms-eyebrow">The Entry</p>
              </div>
              <p className="ms-display ms-balance mt-8 text-3xl leading-[1.2] md:text-[2.5rem]">
                {appartment.intro}
              </p>
              <div
                  className="ms-pretty mt-12 space-y-7 text-[15px] leading-[1.85] md:text-[17px]"
                  style={{ color: "var(--ms-muted)" }}
              >
                {appartment.body.map((p, i) => (
                    <p
                        key={i}
                        className={i === 0 ? "ms-dropcap" : undefined}
                        dangerouslySetInnerHTML={{ __html: p }}
                    />
                ))}
              </div>

              <div
                  className="mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--ms-muted)" }}
              >
                <span className="ms-hairline" />
                <span>Thanos Cozy Appartments</span>
              </div>
              {/* Contact */}
              <section className="relative px-6 py-24 md:px-12 md:py-32">
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
                    <p><span className="text-[color:var(--ms-fg)]"><strong>Phone</strong>:</span> +30 6974603592</p>
                    <p><span className="text-[color:var(--ms-fg)]"><strong>Email</strong>:</span> tcanancy@gmail.com</p>
                    <p><span className="text-[color:var(--ms-fg)]"><strong>Address</strong></span> Skala Kallonis 811 07, Lesvos, Greece</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Booking aside */}
            <aside className="space-y-10 md:col-span-4 md:col-start-9">
              <div className="md:sticky md:top-8">
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
                    <span className="ms-display text-5xl">{appartment.fromPrice}</span>
                    <span className="text-xs" style={{ color: "var(--ms-muted)" }}>/ night</span>
                  </div>
                  <div className="mt-1 text-xs" style={{ color: "var(--ms-muted)" }}>
                    double occupancy, taxes incl.
                  </div>

                  <a
                      href={appartment.bookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-7 flex items-center justify-center gap-3 py-4 text-[10px] uppercase tracking-[0.35em] text-white transition-all duration-500"
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
                      ["Check-in", "15:00 to 23:00"],
                      ["Check-out", "08:00 to 10:00"],
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
                    {appartment.pros.map((p) => (
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
                    {appartment.knowBefore.map((p, i) => (
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


        {/* Gallery */}
        <section className="px-5 py-20 sm:px-8 md:px-12 md:py-28" style={{ background: "var(--ms-bg)" }}>
          <div className="mx-auto max-w-7xl">
            <div>
              <div className="flex items-center gap-4">
                <span className="ms-hairline" />
                <p className="ms-eyebrow">From the stay</p>
              </div>
              <h2 className="ms-display mt-4 text-4xl leading-tight md:text-6xl">
                A few photos<br />
                <span className="italic" style={{ color: "var(--ms-gold)" }}>from the stay.</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-8">
              {appartment.gallery.map((g, i) => {
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