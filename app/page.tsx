import Link from "next/link";

export default function Home() {
  return (
      <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", color: "#111" }}>

        {/* HERO */}
        <section style={{ position: "relative", height: "100svh", minHeight: 500 }}>
          <img
              src="/plomari2.jpg"
              alt="Lesvos"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), transparent 40%, rgba(0,0,0,0.7))" }} />

          {/* Navbar — hidden on mobile (handled by NavBar component) */}
          <div className="hidden lg:flex" style={{ position: "absolute", top: 0, left: 0, right: 0, justifyContent: "space-between", alignItems: "center", padding: "24px 64px" }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff" }}>
            Lesvos
          </span>
            {/*<nav style={{ display: "flex", alignItems: "center", gap: 40 }}>*/}
            {/*  {["Beaches", "Villages", "Food", "Nature", "Map"].map((item) => (*/}
            {/*      <Link key={item} href={`/${item.toLowerCase()}`}*/}
            {/*            style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>*/}
            {/*        {item}*/}
            {/*      </Link>*/}
            {/*  ))}*/}
            {/*</nav>*/}
            {/*<Link href="/planner"*/}
            {/*      style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#111", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 20px", borderRadius: 100, textDecoration: "none" }}>*/}
            {/*  Plan trip →*/}
            {/*</Link>*/}
          </div>

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
              <Link href="/explore"
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#111", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 24px", borderRadius: 100, textDecoration: "none" }}>
                Explore
                <span style={{ width: 20, height: 20, background: "#111", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              </Link>
            </div>
            {/*<p className="hidden lg:block" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, textAlign: "right", maxWidth: 200 }}>*/}
            {/*  Beaches, villages<br />& authentic food*/}
            {/*</p>*/}
          </div>
        </section>

        {/* CATEGORIES */}
        <section style={{ padding: "40px 24px 0" }} className="lg:px-16 lg:pt-16">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20 }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 600 }}>Categories</span>
            <span style={{ fontSize: 11, color: "#999", cursor: "pointer" }}>See all</span>
          </div>

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

          {/*/!* Desktop: image grid *!/*/}
          {/*<div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>*/}
          {/*  {[*/}
          {/*    { label: "Beaches", sub: "32 spots", img: "/beach.jpg", href: "/beaches" },*/}
          {/*    { label: "Villages", sub: "18 spots", img: "/village.jpg", href: "/villages" },*/}
          {/*    { label: "Food", sub: "Local cuisine", img: "/food.jpg", href: "/food" },*/}
          {/*    { label: "Nature", sub: "Wild trails", img: "/nature.jpg", href: "/nature" },*/}
          {/*  ].map((cat) => (*/}
          {/*      <Link key={cat.label} href={cat.href}*/}
          {/*            style={{ position: "relative", height: 220, borderRadius: 16, overflow: "hidden", display: "block", textDecoration: "none" }}>*/}
          {/*        <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />*/}
          {/*        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />*/}
          {/*        <div style={{ position: "absolute", bottom: 0, left: 0, padding: 20 }}>*/}
          {/*          <p style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 600, color: "#fff", margin: "0 0 2px" }}>{cat.label}</p>*/}
          {/*          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>{cat.sub}</p>*/}
          {/*        </div>*/}
          {/*      </Link>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </section>

        {/* TOP PLACES */}
        <Section title="Top places" href="/places">
          {/* Mobile: list */}
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "Molyvos", sub: "Medieval village · North", tag: "Village", img: "/molivos.jpg", href: "/villages/molivos" },
              { num: "02", name: "Vatera", sub: "Blue flag beach · South", tag: "Beach", img: "/vatera.jpg", href: "/beaches/vatera" },
              { num: "03", name: "Plomari", sub: "Ouzo capital · South", tag: "Village", img: "/plomari2.jpg", href: "/villages/plomari" },
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
          {/* Desktop: cards */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", name: "Molyvos", sub: "Medieval village · North", tag: "Village", img: "/molivos.jpg", href: "/villages/molivos" },
              { num: "02", name: "Vatera", sub: "Blue flag beach · South", tag: "Beach", img: "/vatera.jpg", href: "/beaches/vatera" },
              { num: "03", name: "Plomari", sub: "Ouzo capital · South", tag: "Village", img: "/plomari2.jpg", href: "/villages/plomari" },
            ].map((p) => <DesktopCard key={p.name} {...p} />)}
          </div>
        </Section>

        {/* TOP HOTELS */}
        <Section title="Top hotels" href="/hotels">
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "Theofilos Paradise Boutique Hotel", sub: "Boutique · Mytilene", tag: "Hotel", img: "/theo-entry.jpg", href: "/hotels/theofilos-paradise" },
              // { num: "02", name: "Loriet", sub: "Luxury · Mytilene", tag: "Hotel", img: "/hotel2.jpg", href: "/hotels/loriet" },
              // { num: "03", name: "Olive Press", sub: "Design · Molyvos", tag: "Hotel", img: "/hotel3.jpg", href: "/hotels/olive-press" },
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
          <div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", name: "Theofilos Paradise Boutique Hotel", sub: "Boutique · Mytilene", tag: "Hotel", img: "/theo-entry.jpg", href: "/hotels/theofilos-paradise" },
              // { num: "02", name: "Loriet", sub: "Luxury · Mytilene", tag: "Hotel", img: "/hotel2.jpg", href: "/hotels/loriet" },
              // { num: "03", name: "Olive Press", sub: "Design · Molyvos", tag: "Hotel", img: "/hotel3.jpg", href: "/hotels/olive-press" },
            ].map((p) => <DesktopCard key={p.name} {...p} />)}
          </div>
        </Section>

        {/* TOP RESTAURANTS */}
        <Section title="Top restaurants" href="/food">
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "To Limanaki ton Pamfilon", sub: "Delicious dishes · Skala Pamfilon", tag: "Restaurant", img: "/limanaki_pamfilon1.jpg", href: "/restaurants/limanaki_pamfilon" },
              { num: "02", name: "Tropicana - Platanos", sub: "Beautiful hospitality · Vafios", tag: "Restaurant", img: "/tropicana1.jpg", href: "/restaurants/tropicana" },
              { num: "03", name: "Tryfon", sub: "Locan dishes · Kalloni", tag: "Tavern", img: "/tryfon6.jpg", href: "/restaurants/tryfon" },
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
          <div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", name: "To Limanaki ton Pamfilon", sub: "Delicious dishes · Skala Pamfilon", tag: "Restaurant", img: "/limanaki_pamfilon1.jpg", href: "/restaurants/limanaki_pamfilon" },
              { num: "02", name: "Tropicana - Platanos", sub: "Beautiful hospitality · Vafios", tag: "Restaurant", img: "/tropicana1.jpg", href: "/restaurants/tropicana" },
              { num: "03", name: "Tryfon", sub: "Locan dishes · Kalloni", tag: "Tavern", img: "/tryfon6.jpg", href: "/restaurants/tryfon" },
            ].map((p) => <DesktopCard key={p.name} {...p} />)}
          </div>
        </Section>
        {/* TOP Bars & cafes */}
        <Section title="Top bars & cafes" href="/food">
          <div className="flex lg:hidden" style={{ flexDirection: "column" }}>
            {[
              { num: "01", name: "Naf's Cocktail Corner", sub: "Cocktail · Agios Isidoros", tag: "bar", img: "/naf-logo.jpg", href: "/food/nafs-cocktail-corner" },
              // { num: "02", name: "Vafios", sub: "Traditional · Vafios", tag: "Restaurant", img: "/rest2.jpg", href: "/restaurants/vafios" },
              // { num: "03", name: "Cavo d'Oro", sub: "Mediterranean · Molyvos", tag: "Restaurant", img: "/rest3.jpg", href: "/restaurants/cavo-doro" },
            ].map((p, i, arr) => (
                <MobileListItem key={p.name} {...p} last={i === arr.length - 1} />
            ))}
          </div>
          <div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", name: "Naf's Cocktail Corner", sub: "Cocktail · Agios Isidoros", tag: "bar", img: "/naf-logo.jpg", href: "/food/nafs-cocktail-corner" },
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
            <Link href="/planner"
                  style={{ alignSelf: "flex-start", flexShrink: 0, background: "#fff", color: "#111", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 100, textDecoration: "none" }}
                  className="lg:self-auto">
              Start planning →
            </Link>
          </div>
        </section>

        {/*/!* BOTTOM NAV — mobile only *!/*/}
        {/*<nav className="lg:hidden" style={{ display: "flex", justifyContent: "space-around", padding: "14px 0 28px", borderTop: "1px solid #f0f0f0", position: "sticky", bottom: 0, background: "#fff" }}>*/}
        {/*  {[*/}
        {/*    { label: "Home", active: true, href: "/", icon: <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" /> },*/}
        {/*    { label: "Search", href: "/search", icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></> },*/}
        {/*    { label: "Map", href: "/map", icon: <><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></> },*/}
        {/*    { label: "Saved", href: "/saved", icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" /> },*/}
        {/*  ].map((item) => (*/}
        {/*      <Link key={item.label} href={item.href}*/}
        {/*            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: item.active ? "#111" : "#bbb", textDecoration: "none" }}>*/}
        {/*        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{item.icon}</svg>*/}
        {/*        {item.label}*/}
        {/*        {item.active && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#111" }} />}*/}
        {/*      </Link>*/}
        {/*  ))}*/}
        {/*</nav>*/}

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