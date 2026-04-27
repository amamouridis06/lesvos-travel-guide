import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Μονή Αγίου Ραφαήλ",
  description:
    "Η Μονή Αγίου Ραφαήλ στη Λέσβο: ένα από τα σημαντικότερα προσκυνήματα του νησιού, με μεγάλη ιστορία και πνευματική σημασία.",
};

export default function AgiosRafailPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/agios-rafail.jpg"
          alt="Μονή Αγίου Ραφαήλ Λέσβος"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Saint Rafael Monastery
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            One of the most important pilgrimage sites in Lesvos.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Monastery of Saint Rafael is located near Thermi and is one of the
              most visited religious sites in Lesvos. It is dedicated to Saint Rafael,
              Saint Nikolaos and Saint Irene, attracting thousands of pilgrims every year.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Important Orthodox pilgrimage</li>
              <li>Peaceful and spiritual environment</li>
              <li>Beautiful monastery complex</li>
              <li>Religious celebrations and events</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Useful Information</h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Location:</strong> Thermi, Lesvos</li>
              <li><strong>Type:</strong> Monastery</li>
              <li><strong>Access:</strong> Easy by car</li>
              <li><strong>Ideal for:</strong> Pilgrimage, cultural visit</li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Agios+Rafail+Lesvos&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Nearby</h3>
            <ul className="space-y-2 text-sm">
              <li>
                🏘{" "}
                <Link href="/villages/thermi" className="text-blue-600 hover:underline">
                  Thermi
                </Link>
              </li>
              <li>⛪ Other churches & monasteries</li>
              <li>🌿 Nature & peaceful surroundings</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Δείτε κι άλλες εκκλησίες & μοναστήρια
        </h2>
        <Link
          href="/churches"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Όλα τα προσκυνήματα
        </Link>
      </section>

    </main>
  );
}