import Link from "next/link";

export const metadata = {
  title: "Skala Eresou | Lesvos Travel Guide",
  description:
    "Skala Eresou Lesvos: Ouzo, sea & water sports",
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
              Skala Eresou
            </h1>
            <p className="mt-2 text-gray-200 text-lg">
             Ouzo, sea & water sports
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
                Why Visit Skala Eresou?
              </h2>
              <p className="leading-relaxed text-gray-700">
                Skala Eressou is a place in the west of our island with the sea being in the Aegean Sea. The activities you can do vary depending on the interests of each person.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">
                What to see
              </h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-gray-700">
                <li>TThe main beach of Skala Eressos</li>
                <li>Sunset by the sea</li>
                <li>Local food</li>
                <li>Water sports</li>
                <li>Walk to Eressos village</li>
                <li>Surrounding nature</li>
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
                  A great option in Skala Eresou is{" "}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.4189840079266!2d25.930871374334682!3d39.13653893442646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bac40dced0e191%3A0x94c1f7242a3c49c2!2sSkala%20Eresou%20811%2005!5e1!3m2!1sen!2sgr!4v1776779263225!5m2!1sen!2sgr" 
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
                <li>📍 West Lesvos</li>
                <li>Beautiful sunset</li>
                <li>Great seafood and local taverns</li>
                <li>Fantastic hospitality</li>
              </ul>
            </div>

            {/* TIPS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Go early morning in beach because of many people</li>
                <li>Βring umbrellas and chairs</li>
                <li>Fantastic hospitality</li>
              </ul>
            </div>

            {/* NEARBY */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-semibold">Nearby Beaches</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  🏖{" "}
                  <Link href="/beaches/tavari" className="text-blue-600 hover:underline">
                    Tavari
                  </Link>
                </li>
                <li>
                  🏖{" "}
                  <Link href="/beaches/sigri" className="text-blue-600 hover:underline">
                    Sigri
                  </Link>
                </li>
                <li>
                  🏖{" "}
                  <Link href="/beaches/xrousos" className="text-blue-600 hover:underline">
                    Xrousos
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOOD */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">Where to eat</h2>
              <p className="space-y-2 text-sm text-gray-700">
                In Skala Eressou you will find traditional seaside taverns, ideal for fresh fish, local meze, and of course ouzo.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
