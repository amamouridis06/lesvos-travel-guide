import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100 text-neutral-900">
      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[85vh] md:h-screen bg-[url('/plomari2.jpg')] bg-cover bg-center">
        <div className="relative z-10 flex min-h-[85vh] md:h-full items-center">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
            <div className="max-w-xl bg-black/35 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-xl shadow-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Discover Lesvos <br /> with the ultimate travel guide
              </h1>

              <p className="mt-3 sm:mt-4 FFtext-base sm:text-lg text-gray-200">
                Villages, beaches and authentiFc flavors — selected places that
                really deserve
              </p>

              <Link
                href="/planner"
                className="inline-block mt-5 sm:mt-6 px-5 sm:px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
              >
                Explore the island
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK CATEGORIES ================= */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {[
            {
              title: "Beaches",
              desc: "The best beaches on the island",
              img: "/beach.jpg",
              href: "/beaches",
            },
            {
              title: "Villages",
              desc: "The most picturesque villages of Lesvos",
              img: "/village.jpg",
              href: "/villages",
            },
            {
              title: "Food",
              desc: "Taverns and local flavors",
              img: "/food.jpg",
              href: "/food",
            },
            {
              title: "Nature",
              desc: "Paths and natural landscapes",
              img: "/nature.jpg",
              href: "/nature",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-44 sm:h-48 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= TRIP PLANNER CTA ================= */}
      <section className="w-full bg-white py-14 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Make your vacation program
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
              Tell us where to stay and how many days you have available and we
              will suggest you a realistic program, tailored to your time and
              area.
            </p>

            <Link
              href="/planner"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-neutral-900 text-white font-semibold text-base sm:text-lg hover:bg-neutral-800 transition"
            >
              Start planning →
            </Link>
          </div>

          <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/map-lesvos.jpg"
              alt="The Map"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/15" />
          </div>
        </div>
      </section>

      {/* ================= FEATURED DESTINATIONS ================= */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:pb-24">
        <h2 className="text-2xl font-semibold mb-6 sm:mb-8">
          Top Destinations in Lesvos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {[
            {
              title: "Molivos",
              subtitle: "Medieval picturesque village",
              img: "/molivos.jpg",
              href: "/villages/molivos",
            },
            {
              title: "Skala Kallonis",
              subtitle: "Where Tranquility Meets the Aegean",
              img: "/skala-kallonis.jpeg",
              href: "/villages/skala-kallonis",
            },
            {
              title: "Plomari",
              subtitle: "Ouzo, sea & tradition",
              img: "/plomari2.jpg",
              href: "/villages/plomari",
            },
          ].map((place) => (
            <Link
              key={place.title}
              href={place.href}
              className="relative rounded-xl overflow-hidden group block"
            >
              <img
                src={place.img}
                alt={place.title}
                className="h-56 sm:h-60 md:h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0  flex flex-col justify-end p-4 pointer-events-none">
                <h3 className="text-white text-lg font-semibold">
                  {place.title}
                </h3>
                <p className="text-gray-200 text-sm">{place.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
