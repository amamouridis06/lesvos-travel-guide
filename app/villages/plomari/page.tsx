import Link from "next/link";

export const metadata = {
  title: "Plomari, Lesvos – Ouzo, Beaches & Travel Guide",
  description:
    "Plomari Lesvos: Ouzo, sea & tradition",
};

export default function PlomariPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">
      {/* HERO */}
      <section className="relative h-[72vh] bg-[url('/plomari2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-12">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Plomari
            </h1>
            <p className="mt-2 text-gray-200 text-lg">
              Ouzo, sea & tradition
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* MAIN CONTENT */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">
                Why Visit Plomari?
              </h2>
              <p className="leading-relaxed text-gray-700">
                Plomari is a charming seaside village in the southwest of Lesvos, known for its authentic character, traditional architecture, and relaxed atmosphere. Visitors can enjoy scenic coastal walks, taste excellent local cuisine, explore ouzo museums, and discover beautiful beaches with crystal-clear waters.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">
                What to see
              </h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-gray-700">
                <li>The picturesque port in Plomari</li>
                <li>Ouzo Museums (Varvagianni, Plomari)</li>
                <li>Traditional alleys and cafes</li>
                <li>Beaches with clear blue waters (Agios Isidoros, Melinta, Tarti)</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">Ideal For</h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-gray-700">
                <li>
                  Families with children, thanks to its calm waters, safe beaches, and laid-back environment
                </li>
                <li>
                  Relaxed swimming and sunbathing, with plenty of space to unwind by the sea
                </li>
                <li>
                  Quiet moments away from noise, ideal for rest and disconnection
                </li>
              </ul>
            </div>

            {/* WHERE TO STAY */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-1">
                <img
                  src="/plomari1.jpg"
                  alt="Plomari stay"
                  className="h-44 w-full object-cover"
                />
                <img
                  src="/plomari2.jpg"
                  alt="Accommodation in Plomari"
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Where to stay</h3>

                <p className="mb-3 leading-relaxed text-gray-700">
                  A great option in Plomari is{" "}
                  <a href="#" className="font-medium text-blue-600 hover:underline">
                    Hotel Name
                  </a>
                  , ideally located near the beach, the promenade, and local taverns.
                </p>

                <p className="text-sm leading-relaxed text-gray-600">
                  Perfect for travelers looking for a relaxed and authentic island experience.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* MAP */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="border-b border-neutral-200 px-5 py-4">
                <h3 className="font-semibold">Location</h3>
              </div>
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.198596225246!2d26.368774326425427!3d38.97504945226084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baf6e960a76133%3A0x400bd2ce2b9b5a0!2sPlomari!5e1!3m2!1sen!2sgr!4v1776769152854!5m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* QUICK INFO */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Quick Info</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>📍 South Lesvos</li>
                <li>🏖 Beautiful beaches nearby</li>
                <li>🍽 Great seafood and local taverns</li>
                <li>🚗 Ideal base for exploring the island</li>
              </ul>
            </div>

            {/* TIPS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>☀️ Ideal for slow mornings and sunset walks</li>
                <li>🍽 Try local ouzo and seafood</li>
                <li>🚘 Great starting point for road trips</li>
              </ul>
            </div>

            {/* NEARBY */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-semibold">Nearby Beaches</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  🏖{" "}
                  <Link href="/beaches/tarti" className="text-blue-600 hover:underline">
                    Tarti
                  </Link>
                </li>
                <li>
                  🏖{" "}
                  <Link href="/beaches/melinta" className="text-blue-600 hover:underline">
                    Melinta
                  </Link>
                </li>
                <li>
                  🏖{" "}
                  <Link href="/beaches/agios-isidoros" className="text-blue-600 hover:underline">
                    Agios Isidoros
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOOD */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">Where to eat</h2>
              <p className="text-gray-700">
                In Plomari you will find traditional seaside taverns, ideal for fresh fish, local meze, and of course ouzo.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}