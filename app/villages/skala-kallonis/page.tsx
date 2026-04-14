export const metadata = {
  title: "Skala Kallonis | Lesvos Travel Guide",
  description:
    "Skala Kalloni lies along the shores of Kalloni Bay, just a few minutes from the town of Kalloni. This peaceful seaside settlement blends scenic beaches with a relaxed atmosphere, while offering convenient access to the rest of the island, making it an ideal base for exploration.",
};

export default function MolyvosPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/molivos.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
             Skala Kallonis
            </h1>
            <p className="text-gray-200 mt-2">
              Where Tranquility Meets the Aegean
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Visit Skala Kalloni?</h2>
          <p className="text-gray-700 leading-relaxed">
            Skala Kalloni is perfect for those seeking a peaceful seaside escape, far from the crowds of mass tourism. Blending natural beauty with excellent local cuisine and genuine hospitality, it offers an authentic island experience—ideal for relaxation as well as a convenient base for exploring the rest of Lesvos.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">n Skala Kalloni you’ll find everything you need for a relaxed and enjoyable stay</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Traditional taverns and restaurants serving fresh fish, including the famous Kalloni sardines</li>
            <li>Seafront cafés and beach bars perfect for unwinding by the water</li>
            <li>A range of accommodation options, from hotels to rooms for rent, along with essential tourist facilities</li>
            <li>A pleasant seaside promenade, ideal for leisurely walks and quiet moments by the sea</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Ιδανικός για</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li> Families with children, thanks to its calm waters, safe beaches, and laid-back environment </li>
            <li> Relaxed swimming and sunbathing, with plenty of space to unwind by the sea at your own pace </li>
            <li> Quiet moments away from noise, offering a peaceful atmosphere ideal for rest and disconnection </li>
          </ul>
        </div>

        {/* BACK BUTTON */}
        {/* <div>
          <a
            href="/"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
          >
            ← Επιστροφή στην αρχική
          </a>
        </div> */}

      </section>
    </main>
  );
}
