import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen bg-neutral-100 text-neutral-900">

        {/* ================= HERO ================= */}
        <section className="relative w-full min-h-[85vh] md:h-screen bg-[url('/plomari2.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <div className="max-w-xl bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Discover Lesvos <br /> with the ultimate travel guide
                </h1>

                <p className="mt-4 text-lg text-gray-200">
                  Villages, beaches, and authentic flavors — handpicked places that truly matter
                </p>

                <Link
                    href="/beaches"
                    className="inline-block mt-6 px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
                >
                  Explore the island
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= QUICK CATEGORIES ================= */}
        <section className="w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Beaches", desc: "The best beaches of the island", img: "/beach.jpg", href: "/beaches" },
            { title: "Villages", desc: "The most picturesque villages", img: "/village.jpg", href: "/villages" },
            { title: "Food", desc: "Local cuisine & tavernas", img: "/food.jpg", href: "/food" },
            { title: "Nature", desc: "Trails & natural landscapes", img: "/nature.jpg", href: "/nature" },
          ].map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <img src={item.img} alt={item.title} className="h-40 w-full object-cover group-hover:scale-105 transition" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </Link>
          ))}
        </section>

        {/* ================= TRIP PLANNER ================= */}
        <section className="w-full bg-white py-28">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Plan your trip
              </h2>

              <p className="text-gray-600 text-lg mb-8 max-w-xl">
                Tell us where you're staying and how many days you have,
                and we’ll suggest a realistic itinerary tailored to your time and location.
              </p>

              <Link
                  href="/planner"
                  className="inline-block px-8 py-4 rounded-xl bg-neutral-900 text-white font-semibold text-lg hover:bg-neutral-800 transition"
              >
                Start planning →
              </Link>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src="/map-lesvos.jpg" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

          </div>
        </section>

        {/* ================= FEATURED DESTINATIONS ================= */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-semibold mb-8">
            Top Destinations in Lesvos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Molyvos", subtitle: "Medieval scenic village", img: "/molivos.jpg", href: "/villages/molivos" },
              { title: "Vatera", subtitle: "Longest beach on the island", img: "/vatera.jpg", href: "/beaches/vatera" },
              { title: "Plomari", subtitle: "Ouzo, sea & tradition", img: "/plomari2.jpg", href: "/villages/plomari" },
            ].map((place) => (
                <Link key={place.title} href={place.href} className="relative rounded-xl overflow-hidden group block">
                  <img src={place.img} className="h-64 w-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold">{place.title}</h3>
                    <p className="text-gray-200 text-sm">{place.subtitle}</p>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        {/* ================= TOP HOTELS ================= */}
        <section className="w-full bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8">Top Hotels</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Theofilos Paradise", location: "Mytilene", img: "/theo-entry.jpg", href: "/hotels/theofilos" },
                { title: "Eressian Hotel", location: "Eressos", img: "/eressian.jpg", href: "/hotels/eressian" },
                { title: "Mythical Coast", location: "Thermi", img: "/mythical.jpg", href: "/hotels/mythical" },
              ].map((hotel) => (
                  <Link key={hotel.title} href={hotel.href} className="group block bg-neutral-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                    <img src={hotel.img} className="h-52 w-full object-cover group-hover:scale-105 transition" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{hotel.title}</h3>
                      <p className="text-sm text-gray-500">{hotel.location}</p>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TOP RESTAURANTS ================= */}
        <section className="w-full py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8">Top Restaurants</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Kalnterimi", location: "Molyvos", img: "/food1.jpg", href: "/food/kalnterimi" },
                { title: "Vafios Taverna", location: "Vafios", img: "/food2.jpg", href: "/food/vafios" },
                { title: "Captain’s Table", location: "Plomari", img: "/food3.jpg", href: "/food/captain" },
              ].map((place) => (
                  <Link key={place.title} href={place.href} className="group block bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                    <img src={place.img} className="h-52 w-full object-cover group-hover:scale-105 transition" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{place.title}</h3>
                      <p className="text-sm text-gray-500">{place.location}</p>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-auto py-6 text-center text-gray-500 text-sm border-t">
          <p>© 2026 Lesvos Travel Guide</p>
        </footer>

      </main>
  );
}