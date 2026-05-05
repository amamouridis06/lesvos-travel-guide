export default function FarmPage() {
    return (
        <div style={{ fontFamily: "'Georgia', serif", background: "#f5f0e8", minHeight: "100vh", color: "#2a2218" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Jost:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        .display { font-family: 'Abril Fatface', serif; }
        .body    { font-family: 'Jost', sans-serif; }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5c4a2a;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 1; }

        .product-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid #e0d8c8;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(80,55,20,0.12); }

        .btn {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
        }
        .btn:hover { opacity: 0.85; transform: scale(1.02); }

        .section-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8b6d3f;
        }

        .value-row {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(245,240,232,0.1);
        }
        .value-row:last-child { border-bottom: none; }
      `}</style>

            {/* HERO */}
            <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "88vh" }}>
                <div style={{ padding: "80px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p className="section-label" style={{ marginBottom: 24 }}>Est. 1952 · Hudson Valley, NY</p>
                    <h1 className="display" style={{ fontSize: "clamp(52px, 5vw, 80px)", lineHeight: 1.05, color: "#2a2218", marginBottom: 32 }}>
                        Grown slow.<br />Sold fresh.
                    </h1>
                    <p className="body" style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: "#5c4a2a", maxWidth: 380, marginBottom: 48 }}>
                        Three generations on the same 200 acres. We grow what the land wants to grow, pick it at the right moment, and get it to you the same day.
                    </p>
                    <div style={{ display: "flex", gap: 14 }}>
                        <button className="btn" style={{ background: "#3d2e10", color: "#f5f0e8", padding: "14px 36px", borderRadius: 3 }}>Shop the Stand</button>
                        <button className="btn" style={{ background: "transparent", color: "#3d2e10", border: "1px solid #3d2e10", padding: "14px 36px", borderRadius: 3 }}>Join our CSA</button>
                    </div>
                </div>

                {/* Illustrated field */}
                <div style={{ background: "#c8b88a", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
                    <svg viewBox="0 0 560 640" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                        <rect width="560" height="640" fill="#d4c49a" />
                        <ellipse cx="280" cy="700" rx="480" ry="300" fill="#8fa85a" />
                        <ellipse cx="560" cy="680" rx="320" ry="260" fill="#7a9448" />
                        <ellipse cx="0" cy="700" rx="280" ry="250" fill="#6e8a3e" />
                        <rect x="180" y="280" width="160" height="130" fill="#8b2e1a" />
                        <polygon points="180,280 340,280 260,200" fill="#6e2214" />
                        <rect x="225" y="340" width="60" height="70" fill="#4a1e0a" />
                        <rect x="195" y="295" width="44" height="36" fill="#f5e6c8" opacity="0.6" />
                        <rect x="285" y="295" width="44" height="36" fill="#f5e6c8" opacity="0.6" />
                        <rect x="256" y="208" width="10" height="24" fill="#9aab72" />
                        <rect x="254" y="204" width="14" height="7" fill="#c8a830" />
                        <rect x="345" y="290" width="44" height="120" fill="#b8aa8a" />
                        <ellipse cx="367" cy="290" rx="22" ry="9" fill="#a09880" />
                        {[80, 120, 410, 455, 490].map((x, i) => (
                            <g key={i}>
                                <rect x={x + 9} y={310 + (i % 2) * 10} width={10} height={50} fill="#6b4f2a" />
                                <ellipse cx={x + 14} cy={295 + (i % 2) * 10} rx={26} ry={32} fill={i % 2 === 0 ? "#4a7a2a" : "#3d6824"} />
                            </g>
                        ))}
                        {[30,58,86,114,142].map(x => (
                            <g key={x}>
                                <rect x={x} y={400} width={6} height={28} fill="#b89a6a" rx={1} />
                                <rect x={x-6} y={406} width={34} height={5} rx={2} fill="#d4b880" />
                                <rect x={x-6} y={415} width={34} height={5} rx={2} fill="#d4b880" />
                            </g>
                        ))}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <g key={i}>
                                <line x1={50 + i * 48} y1="490" x2={50 + i * 48} y2="460" stroke="#5a8030" strokeWidth="2.5" />
                                <ellipse cx={50 + i * 48} cy={458} rx={9} ry={13} fill="#6a9838" />
                            </g>
                        ))}
                        <rect x="0" y="490" width="560" height="150" fill="#8fa85a" />
                        <circle cx="460" cy="90" r="48" fill="#e8c840" opacity="0.7" />
                        <circle cx="460" cy="90" r="36" fill="#f0d048" opacity="0.9" />
                        {([[80,60,0.5],[200,45,0.35],[380,80,0.4]] as [number,number,number][]).map(([cx,cy,op],i) => (
                            <g key={i} opacity={op}>
                                <ellipse cx={cx} cy={cy} rx="55" ry="22" fill="white" />
                                <ellipse cx={cx-20} cy={cy-10} rx="32" ry="22" fill="white" />
                                <ellipse cx={cx+22} cy={cy-8} rx="28" ry="18" fill="white" />
                            </g>
                        ))}
                    </svg>
                    <div style={{ position: "relative", zIndex: 2, padding: "20px 28px", background: "rgba(42,34,24,0.5)", backdropFilter: "blur(6px)", width: "100%" }}>
                        <p className="body" style={{ fontSize: 12, fontWeight: 300, color: "rgba(245,240,232,0.8)", letterSpacing: "0.05em" }}>
                            The north field — May 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section style={{ background: "#3d2e10", padding: "52px 56px" }}>
                <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                    {[["200","Acres farmed"],["73","Years in family"],["12","CSA drop points"],["400+","Members this year"]].map(([val,lbl],i) => (
                        <div key={i} style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(245,240,232,0.12)" : "none", padding: "0 28px" }}>
                            <div className="display" style={{ fontSize: 50, color: "#e8c840", lineHeight: 1 }}>{val}</div>
                            <div className="body" style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,240,232,0.45)", marginTop: 8 }}>{lbl}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUCTS */}
            <section style={{ padding: "80px 56px", maxWidth: 1160, margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 40 }}>
                    <div>
                        <p className="section-label" style={{ marginBottom: 10 }}>What's in season</p>
                        <h2 className="display" style={{ fontSize: 40, lineHeight: 1 }}>This week's harvest</h2>
                    </div>
                    <a href="#" className="nav-link">View all →</a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 18 }}>
                    {[
                        { name: "Heirloom Tomatoes", price: "$4.50 / lb", bg: "#e8c8b0", emoji: "🍅", note: "3 varieties" },
                        { name: "Sweet Corn",        price: "$1.00 / ear", bg: "#f0e0a0", emoji: "🌽", note: "Picked at dawn" },
                        { name: "Raw Honey",         price: "$12 / jar",  bg: "#e8d48a", emoji: "🍯", note: "Single-source" },
                        { name: "Pasture Eggs",      price: "$6 / dozen", bg: "#ddd0b8", emoji: "🥚", note: "Daily fresh" },
                        { name: "Mixed Greens",      price: "$3 / bag",   bg: "#c8d8a8", emoji: "🥬", note: "Cut morning" },
                        { name: "Butternut Squash",  price: "$3 / each",  bg: "#e0c898", emoji: "🎃", note: "Cure-dried" },
                    ].map((p, i) => (
                        <div key={i} className="product-card">
                            <div style={{ background: p.bg, height: 130, display: "flex", alignItems: "flex-end", padding: "14px 18px" }}>
                                <span style={{ fontSize: 40 }}>{p.emoji}</span>
                            </div>
                            <div style={{ padding: "14px 18px 16px" }}>
                                <p className="body" style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b6d3f", marginBottom: 4 }}>{p.note}</p>
                                <p className="display" style={{ fontSize: 17, marginBottom: 10, color: "#2a2218" }}>{p.name}</p>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <span className="body" style={{ fontSize: 14, color: "#3d2e10" }}>{p.price}</span>
                                    <button className="btn" style={{ background: "#3d2e10", color: "#f5f0e8", padding: "7px 14px", borderRadius: 3, fontSize: 10 }}>Add</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* VALUES */}
            <section style={{ background: "#2a2218", padding: "80px 56px" }}>
                <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
                    <div>
                        <p className="section-label" style={{ color: "#8b6d3f", marginBottom: 16 }}>How we farm</p>
                        <h2 className="display" style={{ fontSize: 40, color: "#f5f0e8", lineHeight: 1.1, marginBottom: 28 }}>
                            The same way<br />we always have.
                        </h2>
                        <p className="body" style={{ fontSize: 15, fontWeight: 300, color: "rgba(245,240,232,0.5)", lineHeight: 1.9 }}>
                            No shortcuts. No synthetic inputs. We've been certified organic since 1988 — before it was a marketing term. The land feeds us, so we feed the land.
                        </p>
                    </div>
                    <div>
                        {[
                            ["🌱","No synthetics","Cover crops, compost, and rotation — the old way, still the best way."],
                            ["🐄","Animals on pasture","Chickens and cows rotate through the fields. They're part of the whole system."],
                            ["♻️","Nothing wasted","Imperfect veg goes into soup kits. Scraps return to compost. The loop is the point."],
                        ].map(([icon,title,body],i) => (
                            <div key={i} className="value-row">
                                <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                                <div>
                                    <p className="display" style={{ fontSize: 19, color: "#f5f0e8", marginBottom: 6 }}>{title}</p>
                                    <p className="body" style={{ fontSize: 14, fontWeight: 300, color: "rgba(245,240,232,0.5)", lineHeight: 1.75 }}>{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VISIT */}
            <section style={{ padding: "80px 56px", maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
                <div>
                    <p className="section-label" style={{ marginBottom: 16 }}>Come out</p>
                    <h2 className="display" style={{ fontSize: 42, lineHeight: 1.05, marginBottom: 24 }}>The farm stand<br />is open all week.</h2>
                    <p className="body" style={{ fontSize: 15, fontWeight: 300, color: "#5c4a2a", lineHeight: 1.85, marginBottom: 36 }}>
                        Walk the rows, meet the animals, pick up your order. Open Tuesday–Sunday, 7am–6pm. Dogs welcome. Kids especially welcome.
                    </p>
                    <div style={{ display: "flex", gap: 12 }}>
                        <button className="btn" style={{ background: "#3d2e10", color: "#f5f0e8", padding: "13px 32px", borderRadius: 3 }}>Get Directions</button>
                        <button className="btn" style={{ background: "transparent", color: "#3d2e10", border: "1px solid #3d2e10", padding: "13px 32px", borderRadius: 3 }}>Book a Tour</button>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                        { bg:"#c8b88a", label:"The barn",       h:200 },
                        { bg:"#a8c090", label:"Herb garden",    h:200 },
                        { bg:"#b8a870", label:"Morning harvest", h:140 },
                        { bg:"#d0c0a0", label:"Farm stand",     h:140 },
                    ].map((g,i) => (
                        <div key={i} style={{ background: g.bg, borderRadius: 4, height: g.h, display: "flex", alignItems: "flex-end", padding: "10px 14px" }}>
                            <span className="body" style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(42,34,24,0.55)" }}>{g.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* NEWSLETTER */}
            <section style={{ background: "#e8c840", padding: "60px 56px" }}>
                <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
                    <h2 className="display" style={{ fontSize: 36, color: "#2a2218", marginBottom: 12 }}>Know what's ready before it's gone.</h2>
                    <p className="body" style={{ fontSize: 15, fontWeight: 300, color: "#4a3818", marginBottom: 32, lineHeight: 1.7 }}>Weekly harvest notes, straight to your inbox. No filler.</p>
                    <div style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto" }}>
                        <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: "13px 18px", border: "1.5px solid #3d2e10", borderRadius: 3, background: "transparent", fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300, color: "#2a2218", outline: "none" }} />
                        <button className="btn" style={{ background: "#3d2e10", color: "#f5f0e8", padding: "13px 28px", borderRadius: 3, whiteSpace: "nowrap" }}>Sign up</button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ background: "#2a2218", padding: "32px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <span className="display" style={{ fontSize: 18, color: "#f5f0e8" }}>Stonemill Farm</span>
                <div style={{ display: "flex", gap: 32 }}>
                    {["Privacy","Terms","Instagram","Contact"].map(l => (
                        <a key={l} href="#" className="nav-link" style={{ color: "rgba(245,240,232,0.35)" }}>{l}</a>
                    ))}
                </div>
                <span className="body" style={{ fontSize: 11, fontWeight: 300, color: "rgba(245,240,232,0.22)", letterSpacing: "0.05em" }}>© 2026 Stonemill Farm</span>
            </footer>
        </div>
    );
}
