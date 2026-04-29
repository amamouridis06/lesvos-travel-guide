import Link from "next/link";

export default function Home() {
  return (
      <main className="font-sans bg-white text-[#111]">

        {/* HERO */}
        <section className="relative h-[100svh] lg:h-screen">
          <img
              src="/plomari2.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Lesvos"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 lg:px-16 pt-6 lg:pt-8">
          <span className="font-syne text-[13px] lg:text-[15px] font-bold tracking-[0.14em] uppercase text-white">
            Lesvos
          </span>
            <nav className="hidden lg:flex items-center gap-10">
              {["Beaches", "Villages", "Food", "Nature", "Map"].map((item) => (
                  <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-[12px] tracking-[0.08em] uppercase text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
              ))}
            </nav>
            <Link
                href="/planner"
                className="hidden lg:inline-flex items-center gap-2 bg-white text-[#111] text-[11px] font-medium tracking-[0.08em] uppercase px-5 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Plan trip →
            </Link>
            {/* Mobile hamburger */}
            <div className="flex lg:hidden flex-col gap-[5px] cursor-pointer">
              <span className="block w-[22px] h-px bg-white" />
              <span className="block w-[22px] h-px bg-white" />
            </div>
          </div>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-10 lg:pb-20 lg:flex lg:items-end lg:justify-between">
            <div>
            <span className="block text-[10px] lg:text-[11px] tracking-[0.16em] uppercase text-white/55 mb-3 lg:mb-4">
              Greece · Aegean Islands
            </span>
              <h1 className="font-syne text-[42px] lg:text-[80px] xl:text-[96px] font-bold text-white leading-[1.02] mb-5 lg:mb-8">
                The island<br />of Lesvos
              </h1>
              <Link
                  href="/explore"
                  className="inline-flex items-center gap-2.5 bg-white text-[#111] text-[11px] lg:text-[12px] font-medium tracking-[0.08em] uppercase px-5 lg:px-6 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Explore
                <span className="w-5 h-5 bg-[#111] rounded-full flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              </Link>
            </div>
            <p className="hidden lg:block text-[13px] text-white/50 leading-relaxed max-w-[200px] text-right">
              Beaches, villages<br />& authentic food
            </p>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="px-6 lg:px-16 pt-10 lg:pt-16">
          <div className="flex items-baseline justify-between mb-5 lg:mb-6">
            <span className="font-syne text-[15px] lg:text-[18px] font-semibold">Categories</span>
            <span className="text-[11px] text-[#999] cursor-pointer hover:text-[#111] transition-colors">See all</span>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="flex lg:hidden gap-2.5 overflow-x-auto scrollbar-none pb-0.5">
            {["All", "Beaches", "Villages", "Food", "Nature"].map((cat, i) => (
                <Link
                    key={cat}
                    href={cat === "All" ? "/" : `/${cat.toLowerCase()}`}
                    className={`flex-shrink-0 px-4 py-[9px] rounded-full border text-[12px] whitespace-nowrap transition-colors
                ${i === 0 ? "bg-[#111] text-white border-[#111]" : "bg-white text-[#444] border-[#e8e8e8] hover:border-[#111]"}`}
                >
                  {cat}
                </Link>
            ))}
          </div>

          {/* Desktop: card grid */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {[
              { label: "Beaches", sub: "32 spots", img: "/beach.jpg", href: "/beaches" },
              { label: "Villages", sub: "18 spots", img: "/village.jpg", href: "/villages" },
              { label: "Food", sub: "Local cuisine", img: "/food.jpg", href: "/food" },
              { label: "Nature", sub: "Wild trails", img: "/nature.jpg", href: "/nature" },
            ].map((cat) => (
                <Link key={cat.label} href={cat.href} className="group relative h-[220px] rounded-2xl overflow-hidden block">
                  <img src={cat.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={cat.label} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-syne text-[16px] font-semibold text-white mb-0.5">{cat.label}</p>
                    <p className="text-[11px] text-white/55 tracking-[0.06em] uppercase">{cat.sub}</p>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        {/* TOP PLACES */}
        <section className="px-6 lg:px-16 pt-10 lg:pt-16 pb-2">
          <div className="flex items-baseline justify-between mb-5 lg:mb-6">
            <span className="font-syne text-[15px] lg:text-[18px] font-semibold">Top places</span>
            <Link href="/places" className="text-[11px] text-[#999] hover:text-[#111] transition-colors">View all</Link>
          </div>

          {/* Mobile: list */}
          <div className="flex lg:hidden flex-col divide-y divide-[#f0f0f0]">
            {[
              { num: "01", name: "Molyvos", sub: "Medieval village · North", tag: "Village", img: "/molivos.jpg", href: "/villages/molivos", bg: "bg-[#e0e8d8]" },
              { num: "02", name: "Vatera", sub: "Blue flag beach · South", tag: "Beach", img: "/vatera.jpg", href: "/beaches/vatera", bg: "bg-[#d8e0e8]" },
              { num: "03", name: "Plomari", sub: "Ouzo capital · South", tag: "Village", img: "/plomari2.jpg", href: "/villages/plomari", bg: "bg-[#e8dcd0]" },
            ].map((place) => (
                <Link key={place.name} href={place.href} className="flex items-center gap-3.5 py-3.5">
                  <span className="font-syne text-[11px] font-semibold text-[#ccc] w-[18px] shrink-0">{place.num}</span>
                  <div className={`w-[52px] h-[52px] rounded-[10px] shrink-0 overflow-hidden ${place.bg}`}>
                    <img src={place.img} className="w-full h-full object-cover" alt={place.name} />
                  </div>
                  <div className="flex-1">
                    <p className="font-syne text-[14px] font-semibold text-[#111] mb-0.5">{place.name}</p>
                    <p className="text-[11px] text-[#999]">{place.sub}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.08em] uppercase text-[#aaa] px-2 py-1 border border-[#eee] rounded-full">
                {place.tag}
              </span>
                </Link>
            ))}
          </div>

          {/* Desktop: horizontal cards */}
          <div className="hidden lg:grid grid-cols-3 gap-5">
            {[
              { num: "01", name: "Molyvos", sub: "Medieval village · North", tag: "Village", img: "/molivos.jpg", href: "/villages/molivos" },
              { num: "02", name: "Vatera", sub: "Blue flag beach · South", tag: "Beach", img: "/vatera.jpg", href: "/beaches/vatera" },
              { num: "03", name: "Plomari", sub: "Ouzo capital · South", tag: "Village", img: "/plomari2.jpg", href: "/villages/plomari" },
            ].map((place) => (
                <Link key={place.name} href={place.href} className="group block border border-[#f0f0f0] rounded-2xl overflow-hidden hover:border-[#ddd] transition-colors">
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={place.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={place.name} />
                    <span className="absolute top-4 left-4 text-[10px] tracking-[0.1em] uppercase text-white/70 bg-black/30 px-2.5 py-1 rounded-full">
                  {place.tag}
                </span>
                  </div>
                  <div className="p-5 flex items-start justify-between">
                    <div>
                      <p className="font-syne text-[16px] font-semibold text-[#111] mb-1">{place.name}</p>
                      <p className="text-[12px] text-[#999]">{place.sub}</p>
                    </div>
                    <span className="font-syne text-[11px] font-semibold text-[#ddd] mt-1">{place.num}</span>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        {/* PLANNER */}
        <section className="px-6 lg:px-16 pt-10 lg:pt-16 pb-10 lg:pb-20">
          <div className="bg-[#111] rounded-2xl lg:rounded-3xl px-6 lg:px-16 py-8 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
            <div>
              <p className="text-[10px] lg:text-[11px] tracking-[0.14em] uppercase text-white/35 mb-3">AI-powered</p>
              <h2 className="font-syne text-[22px] lg:text-[36px] font-bold text-white leading-tight">
                Plan your perfect trip
              </h2>
              <p className="text-[12px] lg:text-[13px] text-white/40 mt-2 lg:mt-3 leading-relaxed max-w-sm">
                Tell us how long you're staying and we'll build a custom itinerary just for you.
              </p>
            </div>
            <Link
                href="/planner"
                className="self-start lg:self-auto shrink-0 bg-white text-[#111] text-[11px] lg:text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Start planning →
            </Link>
          </div>
        </section>

        {/* BOTTOM NAV — mobile only */}
        <nav className="lg:hidden flex justify-around px-0 pt-3.5 pb-6 border-t border-[#f0f0f0] sticky bottom-0 bg-white">
          {[
            { label: "Home", active: true, href: "/", icon: <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" /> },
            { label: "Search", href: "/search", icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></> },
            { label: "Map", href: "/map", icon: <><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></> },
            { label: "Saved", href: "/saved", icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" /> },
          ].map((item) => (
              <Link
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-1.5 text-[9px] tracking-[0.06em] uppercase ${item.active ? "text-[#111]" : "text-[#bbb]"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {item.icon}
                </svg>
                {item.label}
                {item.active && <span className="w-1 h-1 rounded-full bg-[#111]" />}
              </Link>
          ))}
        </nav>

      </main>
  );
}