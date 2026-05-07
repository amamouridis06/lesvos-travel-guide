"use client";
import { useEffect } from "react";

const IMG = {
  hero: "/votsalo3.jpg",
  votsalo1: "/votsalo1.jpg",
  votsalo2: "/votsalo2.png",
  votsalo3: "/votsalo3.jpg",
  votsalo4: "/votsalo4.jpg",
  votsalo5: "/votsalo5.jpg",
  votsalo6: "/votsalo6.jpg",
  votsalo7:"/votsalo7.jpg",
  votsalo8:"/votsalo8.jpg",
};

const votsalo = {
  name: "Taverna To Votsalo",
  region: "Eftalou Lesvos Greece",
  country: "Greece",
  tagline: "",
  intro:
      "Welcome to Taverna To Votsalo in Eftalou",
  body: [
    "Fully renovated with modern design and careful details, it offers comfort, elegance and privacy.",
    "It is located just 2 minutes from Ermou Street, with direct access to shops, cafes and restaurants, while the quiet location ensures joy. The main attractions and the port are accessible on foot, as is the Church of St. Theraponta.",
    "The studio has a double bed and a sofa bed, as well as modern facilities: fast Wi-Fi, air conditioning, smart TV and a fully equipped kitchen. Quality white items, towels and toiletries are provided, along with hairdryer, iron and basic items for a comfortable and premium accommodation.",
  ],
  highlights: [
    { label: "View ", value: "Yes" },
    // { label: "Transport from / to the airport", value: "No"  },
    // { label: "Wi-Fi", value: "Free" },
    { label: "Parking", value: "Yes" },
  ],
  pros: [
    "Near the sea",
    "Beautiful view",
    "The best hospitality"
  ],
  knowBefore: [
    "Reserve a table",
    "The best time is in afternoon",
  ],
  gallery: [
    { src: IMG.votsalo1, alt: "Cocktail", caption: "Cocktail: Where Every Sip Tastes Like Summer" },
    { src: IMG.votsalo2, alt: "Eggplants", caption: "Eggplants: From Garden to Tablen" },
    { src: IMG.votsalo3, alt: "Seafood", caption: "Seafood: Fresh from the Aegean" },
    { src: IMG.votsalo4, alt: "Kritharaki", caption: "Kritharaki: Slow-Cooked Memories" },
    { src: IMG.votsalo5, alt: "Shrimps", caption: "Shrimps: Calm in the heart of the city."},
    { src: IMG.votsalo6, alt: "balcony", caption: "" },
    { src: IMG.votsalo7, alt: "bath", caption: "" },
    { src: IMG.votsalo8, alt: "bath", caption: "" }
  ],
  bookUrl:
      "https://www.booking.com/Share-WK9K1bo",
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
    document.title = `${votsalo.name}, ${votsalo.region} — The Quiet Atlas`;
  }, []);

  return (
      <div className="ms-root min-h-screen">
        <section className="relative flex min-h-[760px] w-full overflow-hidden sm:min-h-[820px] lg:h-screen lg:min-h-[720px]">
          <img
              src={IMG.hero}
              alt={votsalo.name}
              className="ms-slow-zoom absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.45)_100%)]" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8 md:px-12 md:pb-24 lg:pb-32">
            <div className="ms-fade-up max-w-5xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="ms-hairline ms-shimmer" />
                <p className="ms-eyebrow" style={{ color: "var(--ms-gold-soft)" }}>
                  {votsalo.region} · {votsalo.country}
                </p>
              </div>
              <h1 className="ms-balance mt-5 text-5xl leading-[0.98] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                {votsalo.name}
              </h1>
              <p className="ms-display mt-5 max-w-2xl text-xl italic text-white/85 sm:text-2xl md:text-3xl">
                “{votsalo.tagline}”
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
            {votsalo.highlights.map((h, i) => (
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
                {votsalo.intro}
              </p>

              <div className="ms-pretty mt-10 space-y-6 text-[15px] leading-[1.8] sm:text-base md:mt-12 md:text-[17px]" style={{ color: "var(--ms-muted)" }}>
                {votsalo.body.map((p, i) => (
                    <p key={i} className={i === 0 ? "ms-dropcap" : undefined}>
                      {p}
                    </p>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.24em] md:tracking-[0.3em]" style={{ color: "var(--ms-muted)" }}>
                <span className="ms-hairline" />
                <span>PP Urban Studio</span>
              </div>
            </main>

            <aside className="lg:col-span-4 lg:col-start-9">

                <div>
                  <div className="flex items-center gap-4">
                    <span className="ms-hairline" />
                    <p className="ms-eyebrow">Why we love it</p>
                  </div>
                  <ul className="mt-6 space-y-4 text-sm" style={{ color: "var(--ms-muted)" }}>
                    {votsalo.pros.map((p) => (
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
                    {votsalo.knowBefore.map((p, i) => (
                        <li key={p} className="flex gap-4 leading-relaxed">
                          <span className="ms-serif-num shrink-0 not-italic" style={{ color: "var(--ms-gold)" }}>0{i + 1}</span>
                          <span>{p}</span>
                        </li>
                    ))}
                  </ul>
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
                <p><strong className="text-[color:var(--ms-fg)]">Phone:</strong> +30 2253 072680</p>
                <p><strong className="text-[color:var(--ms-fg)]">Email:</strong>  tavernatovotsalo@gmail.comm </p>
                <p><strong className="text-[color:var(--ms-fg)]">Address:</strong> Eftalou Lesvos </p>
                <p><strong className="text-[color:var(--ms-fg)]">Instagram:</strong> @tovotsalo_eftalou</p>
              </div>
            </div>
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
                <span className="italic" style={{ color: "var(--ms-gold)" }}>from the perfect dishes.</span>
              </h2>
            </div>

          </div>
        </section>

      </div>
  );
}
