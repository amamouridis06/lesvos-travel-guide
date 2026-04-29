import Link from "next/link";

export default function Home() {
  return (
      <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#faf9f7", color: "#1a1a1a" }}>

        {/* HERO */}
        <section className="relative" style={{ height: "72vh" }}>
          <img
              src="/plomari2.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Lesvos"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,15,0.8) 0%, rgba(10,20,15,0.2) 60%, transparent 100%)" }} />

          <div className="absolute bottom-0 left-0 right-0" style={{ padding: "28px 24px 40px" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>
              Aegean Islands · Greece
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(40px, 11vw, 52px)", lineHeight: 1.1, color: "#fff", marginBottom: 8 }}>
              Discover<br /><em>Lesvos</em>
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", letterSpacing: "0.04em", marginBottom: 24 }}>
              Beaches, villages & authentic flavours
            </p>
            <Link
                href="/beaches"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#1a1a1a", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 22px", borderRadius: 2 }}
            >
              Explore →
            </Link>
          </div>
        </section>

        {/* CATEGORIES */}
        <section style={{ padding: "32px 24px" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>
            Explore by category
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { title: "Beaches", sub: "32 spots", img: "/beach.jpg", href: "/beaches", tall: true },
              { title: "Villages", sub: "18 spots", img: "/village.jpg", href: "/villages" },
              { title: "Food", sub: "Local cuisine", img: "/food.jpg", href: "/food" },
              { title: "Nature", sub: "Wild trails", img: "/nature.jpg", href: "/nature" },
            ].map((item) => (
                <Link
                    key={item.title}
                    href={item.href}
                    style={{ gridRow: item.tall ? "span 2" : undefined, borderRadius: 4, overflow: "hidden", position: "relative", display: "block" }}
                >
                  <img src={item.img} style={{ width: "100%", height: item.tall ? 240 : 113, objectFit: "cover", display: "block" }} alt={item.title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", bottom: 12, left: 12 }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: "#fff" }}>{item.title}</h3>
                    <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>{item.sub}</span>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        <div style={{ margin: "0 24px", height: 1, background: "#e8e4de" }} />

        {/* TOP PLACES */}
        <section style={{ padding: "32px 24px" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>
            Top places
          </p>
          <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 4 }}>
            {[
              { title: "Molyvos", sub: "Medieval village", img: "/molivos.jpg", href: "/villages/molivos" },
              { title: "Vatera", sub: "Blue flag beach", img: "/vatera.jpg", href: "/beaches/vatera" },
              { title: "Plomari", sub: "Ouzo capital", img: "/plomari2.jpg", href: "/villages/plomari" },
            ].map((place) => (
                <Link key={place.title} href={place.href} style={{ minWidth: 160, borderRadius: 4, overflow: "hidden", background: "#fff", border: "0.5px solid #e8e4de", display: "block" }}>
                  <img src={place.img} style={{ width: "100%", height: 110, objectFit: "cover", display: "block" }} alt={place.title} />
                  <div style={{ padding: "11px 12px 13px" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 400, marginBottom: 2 }}>{place.title}</h3>
                    <span style={{ fontSize: 11, color: "#999", letterSpacing: "0.06em" }}>{place.sub}</span>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        {/* TRIP PLANNER */}
        <section style={{ padding: "0 24px 40px" }}>
          <div style={{ background: "#1a2a1e", borderRadius: 4, padding: "28px 24px", position: "relative", overflow: "hidden" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: "#fff", marginBottom: 8, lineHeight: 1.2 }}>
              Plan your<br /><em>perfect trip</em>
            </h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 22, lineHeight: 1.6 }}>
              Tell us how long you're staying and we'll craft a bespoke itinerary just for you.
            </p>
            <Link
                href="/planner"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "0.5px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", padding: "11px 20px", borderRadius: 2 }}
            >
              Start planning →
            </Link>
          </div>
        </section>

      </main>
  );
}

//
// import Link from "next/link";
//
// export default function Home() {
//   return (
//     <main className="bg-white text-neutral-900">
//
//       {/* HERO */}
//       <section className="relative h-[75vh] w-full">
//         <img
//           src="/plomari2.jpg"
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Lesvos"
//         />
//         <div className="absolute inset-0 bg-black/30" />
//
//         <div className="relative z-10 h-full flex items-end">
//           <div className="p-5 sm:p-8 text-white max-w-xl">
//             <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
//               Discover Lesvos
//             </h1>
//
//             <p className="mt-2 text-sm sm:text-lg text-gray-200">
//               Beaches, villages & authentic food
//             </p>
//
//             <Link
//               href="/beaches"
//               className="inline-block mt-4 px-5 py-3 bg-yellow-500 text-black font-semibold rounded-lg"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </section>
//
//       {/* CATEGORIES */}
//       <section className="px-4 py-10">
//         <div className="grid grid-cols-2 gap-4">
//           {[
//             { title: "Beaches", img: "/beach.jpg", href: "/beaches" },
//             { title: "Villages", img: "/village.jpg", href: "/villages" },
//             { title: "Food", img: "/food.jpg", href: "/food" },
//             { title: "Nature", img: "/nature.jpg", href: "/nature" },
//           ].map((item) => (
//             <Link key={item.title} href={item.href} className="block">
//               <div className="relative rounded-xl overflow-hidden">
//                 <img src={item.img} className="h-32 w-full object-cover" />
//                 <div className="absolute inset-0 bg-black/30 flex items-end p-3">
//                   <h3 className="text-white font-semibold text-sm">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//
//       {/* FEATURED */}
//       <section className="px-4 pb-10">
//         <h2 className="text-lg font-semibold mb-4">
//           Top places
//         </h2>
//
//         <div className="flex gap-4 overflow-x-auto pb-2">
//           {[
//             { title: "Molyvos", img: "/molivos.jpg", href: "/villages/molivos" },
//             { title: "Vatera", img: "/vatera.jpg", href: "/beaches/vatera" },
//             { title: "Plomari", img: "/plomari2.jpg", href: "/villages/plomari" },
//           ].map((place) => (
//             <Link key={place.title} href={place.href} className="min-w-[70%]">
//               <div className="rounded-xl overflow-hidden shadow">
//                 <img src={place.img} className="h-40 w-full object-cover" />
//                 <div className="p-3">
//                   <h3 className="font-semibold">{place.title}</h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//
//       {/* TRIP PLANNER */}
//       <section className="px-4 pb-12">
//         <div className="bg-neutral-100 rounded-xl p-5">
//           <h2 className="text-lg font-semibold">
//             Plan your trip
//           </h2>
//
//           <p className="text-sm text-gray-600 mt-2">
//             Get a custom itinerary based on your stay
//           </p>
//
//           <Link
//             href="/planner"
//             className="inline-block mt-4 px-5 py-3 bg-black text-white rounded-lg text-sm"
//           >
//             Start planning
//           </Link>
//         </div>
//       </section>
//
//     </main>
//   );
// }
