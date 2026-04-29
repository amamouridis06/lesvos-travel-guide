
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">

      {/* HERO */}
      <section className="relative h-[75vh] w-full">
        <img
          src="/plomari2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Lesvos"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-end">
          <div className="p-5 sm:p-8 text-white max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Discover Lesvos
            </h1>

            <p className="mt-2 text-sm sm:text-lg text-gray-200">
              Beaches, villages & authentic food
            </p>

            <Link
              href="/beaches"
              className="inline-block mt-4 px-5 py-3 bg-yellow-500 text-black font-semibold rounded-lg"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 py-10">
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Beaches", img: "/beach.jpg", href: "/beaches" },
            { title: "Villages", img: "/village.jpg", href: "/villages" },
            { title: "Food", img: "/food.jpg", href: "/food" },
            { title: "Nature", img: "/nature.jpg", href: "/nature" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="block">
              <div className="relative rounded-xl overflow-hidden">
                <img src={item.img} className="h-32 w-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                  <h3 className="text-white font-semibold text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-4 pb-10">
        <h2 className="text-lg font-semibold mb-4">
          Top places
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            { title: "Molyvos", img: "/molivos.jpg", href: "/villages/molivos" },
            { title: "Vatera", img: "/vatera.jpg", href: "/beaches/vatera" },
            { title: "Plomari", img: "/plomari2.jpg", href: "/villages/plomari" },
          ].map((place) => (
            <Link key={place.title} href={place.href} className="min-w-[70%]">
              <div className="rounded-xl overflow-hidden shadow">
                <img src={place.img} className="h-40 w-full object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold">{place.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section className="px-4 pb-12">
        <div className="bg-neutral-100 rounded-xl p-5">
          <h2 className="text-lg font-semibold">
            Plan your trip
          </h2>

          <p className="text-sm text-gray-600 mt-2">
            Get a custom itinerary based on your stay
          </p>

          <Link
            href="/planner"
            className="inline-block mt-4 px-5 py-3 bg-black text-white rounded-lg text-sm"
          >
            Start planning
          </Link>
        </div>
      </section>

    </main>
  );
}
