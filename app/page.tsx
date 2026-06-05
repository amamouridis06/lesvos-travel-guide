import Link from "next/link";

export default function Home() {
  return (
      <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", color: "#111" }}>

        {/* HERO */}
        <section style={{ position: "relative", height: "100svh", minHeight: 500 }}>
          <img
              src="/villages/plomari2.jpg"
              alt="Lesvos"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), transparent 40%, rgba(0,0,0,0.7))" }} />


          {/* Hero content */}
          <div className="lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:pb-20"
               style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 36px" }}>
            <div>
            <span style={{ display: "block", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>
              Greece · Aegean Islands
            </span>
              <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(38px, 8vw, 96px)", fontWeight: 700, color: "#fff", lineHeight: 1.02, margin: "0 0 24px" }}>
                The island<br />of Lesvos
              </h1>
              <Link href="/under-construction"
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#111", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 24px", borderRadius: 100, textDecoration: "none" }}>
                Explore
                <span style={{ width: 20, height: 20, background: "#111", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section style={{ padding: "40px 24px 0" }} className="lg:px-16 lg:pt-16">
          {/* Mobile: pill scroll */}
          <div className="flex lg:hidden" style={{ gap: 10, overflowX: "auto", paddingBottom: 2, scrollbarWidth: "none" }}>
            {[
              { label: "All", href: "/", active: true },
              { label: "Beaches", href: "/beaches" },
              { label: "Villages", href: "/villages" },
              { label: "Food", href: "/food" },
              { label: "Nature", href: "/nature" },
            ].map((cat) => (
                <Link key={cat.label} href={cat.href}
                      style={{ flexShrink: 0, padding: "9px 16px", borderRadius: 100, border: `1px solid ${cat.active ? "#111" : "#e8e8e8"}`, background: cat.active ? "#111" : "#fff", color: cat.active ? "#fff" : "#444", fontSize: 12, whiteSpace: "nowrap", textDecoration: "none" }}>
                  {cat.label}
                </Link>
            ))}
          </div>
        </section>

        {/* TOP PLACES */}
        <Section title="Top places" href="/places">
          {/* Mobile: list */}
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "Molyvos", sub: "Medieval village · North", tag: "Village", img: "/villages/molivos.jpg", href: "/under-construction" },
              { num: "02", name: "Vatera", sub: "Blue flag beach · South", tag: "Beach", img: "/villages/vatera.jpg", href: "/under-construction" },
              { num: "03", name: "Plomari", sub: "Ouzo capital · South", tag: "Village", img: "/villages/plomari2.jpg", href: "/under-construction" },
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
          {/* Desktop: cards */}
            <div
                className="hidden lg:grid"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 20,
                }}
            >
            {[
              { num: "01", name: "Molyvos", sub: "Medieval village · North", tag: "Village", img: "/villages/molivos.jpg", href: "/under-construction" },
              { num: "02", name: "Vatera", sub: "Blue flag beach · South", tag: "Beach", img: "/villages/vatera.jpg", href: "/under-construction" },
              { num: "03", name: "Plomari", sub: "Ouzo capital · South", tag: "Village", img: "/villages/plomari2.jpg", href: "/under-construction" },
            ].map((p) => <DesktopCard key={p.name} {...p} />)}
          </div>
        </Section>

        {/* TOP HOTELS */}
        <Section title="Top hotels" href="/hotels">
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "Eressian Hotel & Hammam Spa", sub: "Villa Hotel · Mytilene", tag: "Hotel", img: "/eressian/er_pool1.jpg", href: "/hotels/eressian" },
               { num: "02", name: "Presidential Beach Villa", sub: "Villa · Pyrgi", tag: "Hotel", img: "/villa/hero.jpg", href: "/hotels/presidential-beach-villa" },
              { num: "03", name: "Hotel Petrino", sub: "Luxury · Molyvos", tag: "Hotel", img: "/petrino/petrino3.png", href: "/hotels/petrino" },
              { num: "04", name: "Theofilos Paradise Boutique Hotel", sub: "Luxury · Mytilene", tag: "Hotel", img: "/theofilos/theo-entry.jpg", href: "/hotels/theofilos-paradise" }
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
            <div
                className="hidden lg:grid"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 20,
                }}
            >
            {[
                { num: "01", name: "Eressian Hotel & Hammam Spa", sub: "Villa Hotel · Mytilene", tag: "Hotel", img: "/eressian/er_pool1.jpg", href: "/hotels/eressian" },
                { num: "02", name: "Presidential Beach Villa", sub: "Villa · Pyrgi", tag: "Hotel", img: "/villa/hero.jpg", href: "/hotels/presidential-beach-villa" },
                { num: "03", name: "Hotel Petrino", sub: "Luxury · Molyvos", tag: "Hotel", img: "/petrino/petrino3.png", href: "/hotels/petrino" },
                { num: "04", name: "Theofilos Paradise Boutique Hotel", sub: "Luxury · Mytilene", tag: "Hotel", img: "/theofilos/theo-entry.jpg", href: "/hotels/theofilos-paradise" },

            ].map((p) => <DesktopCard key={p.name} {...p} />)}
          </div>
        </Section>

        {/* TOP RESTAURANTS */}
        <Section title="Top restaurants" href="/food#cafeTaverns">
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "To Limanaki ton Pamfilon", sub: "Delicious dishes · Skala Pamfilon", tag: "Restaurant", img: "/limanaki/limanaki_pamf.jpg", href: "/food-drinks/limanaki_pamfilon" },
              { num: "02", name: "Tropicana - Platanos", sub: "Beautiful hospitality · Vafios", tag: "Restaurant", img: "/tropicana/tropicana1.jpg", href: "/food-drinks/tropicana" },
              { num: "03", name: "Tryfon", sub: "Locan dishes · Kalloni", tag: "Tavern", img: "/tryfon/tryfon6.jpg", href: "/food-drinks/tryfon" },
              { num: "04", name: "Nisi Restaurant", sub: "Restaurant · Molyvos", tag: "Restaurant", img: "/nisi/nisi_logo.png", href: "/food-drinks/nisi-restaurant" }
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
            <div
                className="hidden lg:grid"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 20,
                }}
            >
            {[
              { num: "01", name: "To Limanaki ton Pamfilon", sub: "Delicious dishes · Skala Pamfilon", tag: "Restaurant", img: "/limanaki/limanaki_pamf.jpg", href: "/food-drinks/limanaki_pamfilon" },
              { num: "02", name: "Tropicana - Platanos", sub: "Beautiful hospitality · Molivos", tag: "Restaurant", img: "/tropicana/tropicana1.jpg", href: "/food-drinks/tropicana" },
              { num: "03", name: "Tryfon", sub: "Locan dishes · Kalloni", tag: "Tavern", img: "/tryfon/tryfon6.jpg", href: "/food-drinks/tryfon" },
              { num: "04", name: "Nisi Restaurant", sub: "Restaurant · Molyvos", tag: "Restaurant", img: "/nisi/nisi_logo.png", href: "/food-drinks/nisi-restaurant" },
            ].map((p) => <DesktopCard key={p.name} {...p} />)}
          </div>
        </Section>
        {/* TOP Bars & cafes */}
        <Section title="Top bars" href="/food#bars">
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "Naf's Cocktail Corner", sub: "Cocktail · Agios Isidoros", tag: "bar", img: "/naf/naf-logo.jpg", href: "/food/nafs-cocktail-corner" },
              // { num: "02", name: "Vafios", sub: "Traditional · Vafios", tag: "Restaurant", img: "/rest2.jpg", href: "/restaurants/vafios" },
              // { num: "03", name: "Cavo d'Oro", sub: "Mediterranean · Molyvos", tag: "Restaurant", img: "/rest3.jpg", href: "/restaurants/cavo-doro" },
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
            <div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", name: "Naf's Cocktail Corner", sub: "Cocktail · Agios Isidoros", tag: "bar", img: "/naf/naf-logo.jpg", href: "/food/nafs-cocktail-corner" },
              // { num: "02", name: "Vafios", sub: "Traditional · Vafios", tag: "Restaurant", img: "/rest2.jpg", href: "/restaurants/vafios" },
              // { num: "03", name: "Cavo d'Oro", sub: "Mediterranean · Molyvos", tag: "Restaurant", img: "/rest3.jpg", href: "/restaurants/cavo-doro" },
            ].map((p) => <DesktopCard key={p.name} {...p} />)}
          </div>
        </Section>


        {/* PLANNER */}
        <section style={{ padding: "40px 24px 80px" }} className="lg:px-16 lg:pt-16 lg:pb-24">
          <div className="lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-14"
               style={{ background: "#111", borderRadius: 24, padding: "32px 24px", display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              {/*<p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 12px" }}>AI-powered</p>*/}
              <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: "0 0 10px" }}>
                Plan your perfect trip
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0 }}>
                Tell us how long you're staying and we'll build a custom itinerary just for you.
              </p>
            </div>
            <Link href="/under-construction"
                  style={{ alignSelf: "flex-start", flexShrink: 0, background: "#fff", color: "#111", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 100, textDecoration: "none" }}
                  className="lg:self-auto">
              Start planning →
            </Link>
          </div>
        </section>



      </main>
  );
}

// ─── Shared sub-components ───────────────────────────────────────────────────

function Section({
                   title,
                   href,
                   children,
                 }: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
      <section style={{ padding: "40px 24px 0" }} className="lg:px-16 lg:pt-16">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20 }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 600 }}>{title}</span>
          <Link href={href} style={{ fontSize: 11, color: "#999", textDecoration: "none" }}>View all</Link>
        </div>
        {children}
      </section>
  );
}

function MobileListItem({
                          num, name, sub, tag, img, href, last,
                        }: {
  num: string; name: string; sub: string; tag: string; img: string; href: string; last?: boolean;
}) {
  return (
      <Link href={href}
            style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: last ? "none" : "1px solid #f0f0f0", textDecoration: "none" }}>
        <span style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 600, color: "#ccc", width: 18, flexShrink: 0 }}>{num}</span>
        <div style={{ width: 52, height: 52, borderRadius: 10, flexShrink: 0, overflow: "hidden", background: "#e8e8e8" }}>
          <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 600, color: "#111", margin: "0 0 2px" }}>{name}</p>
          <p style={{ fontSize: 11, color: "#999", margin: 0 }}>{sub}</p>
        </div>
        <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#aaa", padding: "3px 8px", border: "1px solid #eee", borderRadius: 100 }}>
        {tag}
      </span>
      </Link>
  );
}

function DesktopCard({
                       num, name, sub, tag, img, href,
                     }: {
  num: string; name: string; sub: string; tag: string; img: string; href: string;
}) {
  return (
      <Link href={href}
            style={{ display: "block", border: "1px solid #f0f0f0", borderRadius: 16, overflow: "hidden", textDecoration: "none" }}>
        <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
          <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <span style={{ position: "absolute", top: 16, left: 16, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", background: "rgba(0,0,0,0.3)", padding: "4px 10px", borderRadius: 100 }}>
          {tag}
        </span>
        </div>
        <div style={{ padding: 20, display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 600, color: "#111", margin: "0 0 4px" }}>{name}</p>
            <p style={{ fontSize: 12, color: "#999", margin: 0 }}>{sub}</p>
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 600, color: "#ddd", marginTop: 4 }}>{num}</span>
        </div>
      </Link>
  );
}