export const metadata = {
  title: "Skala Kallonis | Lesvos Travel Guide",
  description:
    "Skala Kalloni lies along the shores of Kalloni Bay, just a few minutes from the town of Kalloni. This peaceful seaside settlement blends scenic beaches with a relaxed atmosphere, while offering convenient access to the rest of the island, making it an ideal base for exploration.",
};

export default function SkalaKallonisPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">
      {/* HERO */}
      <section className="relative h-[90 vh] bg-[url('/skalakallonis1.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-12">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Skala Kallonis
            </h1>
            <p className="mt-2 text-gray-200 text-lg">
              Where Tranquility Meets the Aegean
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
                Why Visit Skala Kallonis?
              </h2>
              <p className="leading-relaxed text-gray-700">
                Skala Kallonis is perfect for those seeking a peaceful seaside
                escape, far from the crowds of mass tourism. Blending natural
                beauty with excellent local cuisine and genuine hospitality, it
                offers an authentic island experience — ideal for relaxation, as
                well as a convenient base for exploring the rest of Lesvos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">
                What You’ll Find in Skala Kallonis
              </h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-gray-700">
                <li>
                  Traditional taverns and restaurants serving fresh fish,
                  including the famous Kalloni sardines
                </li>
                <li>
                  Seafront cafés and beach bars perfect for unwinding by the
                  water
                </li>
                <li>
                  A range of accommodation options, from hotels to rooms for
                  rent, along with essential tourist facilities
                </li>
                <li>
                  A pleasant seaside promenade, ideal for leisurely walks and
                  quiet moments by the sea
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">Ideal For</h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-gray-700">
                <li>
                  Families with children, thanks to its calm waters, safe
                  beaches, and laid-back environment
                </li>
                <li>
                  Relaxed swimming and sunbathing, with plenty of space to
                  unwind by the sea at your own pace
                </li>
                <li>
                  Quiet moments away from noise, offering a peaceful atmosphere
                  ideal for rest and disconnection
                </li>
              </ul>
            </div>

            {/* WHERE TO STAY */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-1">
                <img
                  src="/skala-kallonis.jpeg"
                  alt="Skala Kallonis stay"
                  className="h-44 w-full object-cover"
                />
                <img
                  src="/skala-kallonis.jpeg"
                  alt="Accommodation in Skala Kallonis"
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Where to stay</h3>

                <p className="mb-3 leading-relaxed text-gray-700">
                  A great option in Skala Kalloni is{" "}
                  <a href="X" className="font-medium text-blue-600 hover:underline">
                    Hotel Name
                  </a>
                  , ideally located in the heart of the village, just a short
                  walk from the beach, the promenade, and local taverns.
                </p>

                <p className="text-sm leading-relaxed text-gray-600">
                  Perfect for travelers looking for a relaxed and authentic
                  island experience with easy access to the rest of Lesvos.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.7127752453366!2d26.207192726145344!3d39.20675477165979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba92612321ace7%3A0xa00bd2f74c26dd0!2sSkala%20Kallonis!5e1!3m2!1sen!2sgr!4v1776511137373!5m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* QUICK INFO */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Quick Info</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>📍 Kalloni Bay, central Lesvos</li>
                <li>🏖 Calm beach and relaxed atmosphere</li>
                <li>🍽 Great seafood and local taverns</li>
                <li>🚗 Convenient base for exploring the island</li>
              </ul>
            </div>

            {/* TIPS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>☀️ Ideal for slow mornings and sunset walks</li>
                <li>🍽 Try local sardines from Kalloni</li>
                <li>🚘 Great starting point for road trips around Lesvos</li>
              </ul>
            </div>

            {/* NEARBY */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Nearby Places</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Kalloni</li>
                <li>Skala Eresou</li>
                <li>Agia Paraskevi</li>
                <li>Sigri</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
