import Link from "next/link";

export default function Home() {
  return (
      <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", color: "#111" }}>

        {/* HERO */}
        <section style={{ position: "relative", height: "100svh" }}>
          <img
              src="/plomari2.jpg"
              alt="Lesvos"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), transparent 40%, rgba(0,0,0,0.7))" }} />

          {/* Navbar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 64px" }}>
          <span style={{ fontFamily: "Syne, sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff" }}>
            Lesvos
          </span>
            <nav style={{ display: "flex", alignItems: "center", gap: 40 }}>
              {["Beaches", "Villages", "Food", "Nature", "Map"].map((item) => (
                  <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                  >
                    {item}
                  </Link>
              ))}
            </nav>
            <Link
                href="/planner"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#111", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 20px", borderRadius: 100, textDecoration: "none" }}
            >
              Plan trip →
            </Link>
          </div>

          {/* Hero content */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 64px 80px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
            <span style={{ display: "block", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
              Greece · Aegean Islands
            </span>
              <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(42px, 8vw, 96px)", fontWeight: 700, color: "#fff", lineHeight: 1.02, margin: "0 0 32px" }}>
                The island<br />of Lesvos
              </h1>
              <Link
                  href="/explore"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#111", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 24px", borderRadius: 100, textDecoration: "none" }}
              >
                Explore
                <span style={{ width: 20, height: 20, background: "#111", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              </Link>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, textAlign: "right", maxWidth: 200 }}>
              Beaches, villages<br />& authentic food
            </p>
          </div>
        </section>

        {/* CATEGORIES */}
        <section style={{ padding: "64px 64px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 600 }}>Categories</span>
            <span style={{ fontSize: 11, color: "#999", cursor: "pointer" }}>See all</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { label: "Beaches", sub: "32 spots", img: "/beach.jpg", href: "/beaches" },
              { label: "Villages", sub: "18 spots", img: "/village.jpg", href: "/villages" },
              { label: "Food", sub: "Local cuisine", img: "/food.jpg", href: "/food" },
              { label: "Nature", sub: "Wild trails", img: "/nature.jpg", href: "/nature" },
            ].map((cat) => (
                <Link key={cat.label} href={cat.href} style={{ position: "relative", height: 220, borderRadius: 16, overflow: "hidden", display: "block", textDecoration: "none" }}>
                  <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, padding: 20 }}>
                    <p style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 600, color: "#fff", margin: "0 0 2px" }}>{cat.label}</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>{cat.sub}</p>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        {/* TOP PLACES */}
        <section style={{ padding: "64px 64px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 600 }}>Top places</span>
            <Link href="/places" style={{ fontSize: 11, color: "#999", textDecoration: "none" }}>View all</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", name: "Molyvos", sub: "Medieval village · North", tag: "Village", img: "/molivos.jpg", href: "/villages/molivos" },
              { num: "02", name: "Vatera", sub: "Blue flag beach · South", tag: "Beach", img: "/vatera.jpg", href: "/beaches/vatera" },
              { num: "03", name: "Plomari", sub: "Ouzo capital · South", tag: "Village", img: "/plomari2.jpg", href: "/villages/plomari" },
            ].map((place) => (
                <Link key={place.name} href={place.href} style={{ display: "block", border: "1px solid #f0f0f0", borderRadius: 16, overflow: "hidden", textDecoration: "none" }}>
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <img src={place.img} alt={place.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <span style={{ position: "absolute", top: 16, left: 16, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", background: "rgba(0,0,0,0.3)", padding: "4px 10px", borderRadius: 100 }}>
                  {place.tag}
                </span>
                  </div>
                  <div style={{ padding: 20, display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 600, color: "#111", margin: "0 0 4px" }}>{place.name}</p>
                      <p style={{ fontSize: 12, color: "#999", margin: 0 }}>{place.sub}</p>
                    </div>
                    <span style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 600, color: "#ddd", marginTop: 4 }}>{place.num}</span>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        {/* PLANNER */}
        <section style={{ padding: "64px 64px 80px" }}>
          <div style={{ background: "#111", borderRadius: 24, padding: "56px 64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 12px" }}>AI-powered</p>
              <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: 36, fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: "0 0 12px" }}>
                Plan your perfect trip
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0, maxWidth: 360 }}>
                Tell us how long you're staying and we'll build a custom itinerary just for you.
              </p>
            </div>
            <Link
                href="/planner"
                style={{ flexShrink: 0, background: "#fff", color: "#111", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 100, textDecoration: "none" }}
            >
              Start planning →
            </Link>
          </div>
        </section>

      </main>
  );
}