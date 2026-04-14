import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Beach of Agios Isidoros",
  description:
    "The beach of Vatera in Lesvos: the largest beach of the island, ideal for relaxation, families and good food next to the sea.",
};

export default function VateraPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/agios-isidoros.jpg"
          alt="Beach of Agios Isidoros Lesvos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Beach of Agios Isidoros
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            The largest beach in Lesvos, perfect for relaxation and family holidays.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why you should go</h2>
            <p className="text-gray-700 leading-relaxed">
              Agios Isidoros beach in Lesvos is one of the most famous and beautiful beaches of the island, especially near Ploma
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li> Very large in length, ideal for walking </li>
              <li> Dry waters – suitable for children </li>
              <li> Taverns and coffee literally on the wave </li>
              <li> Beautiful sunsets </li>
            </ul>
          </div>

          {/* Practical info */}
        <div>
  <h2 className="text-2xl font-semibold mb-4">Useful Informations</h2>

  <ul className="text-gray-700 space-y-4">
    
    <li>
      <strong>Type:</strong>
      <p className="mt-1">Medium to thick pebbles</p>
    </li>

    <li>
      <strong>Organization:</strong>
      <ul className="list-disc ml-5 mt-1 space-y-1">
        <li>Umbrellas & sunbeds (usually via beach bar consumption)</li>
        <li>Beach bars with music (some relaxed, some more lively)</li>
        <li>Coffee spots & taverns along the beach</li>
        <li>Showers and locker rooms</li>
        <li>Lifeguard (seasonal)</li>
        <li>Small beach volleyball area</li>
      </ul>
    </li>

    <li>
      <strong>Access:</strong>
      <p className="mt-1">Easy by car</p>
    </li>

    <li>
      <strong>Ideal for:</strong>
      <p className="mt-1">All types of visitors, especially for relaxation</p>
    </li>

  </ul>
</div>
        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52442.62385052624!2d26.179372848547395!3d39.014022754774174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baeff2a84e3b1f%3A0x12a7105ca3e69a0a!2sVatera%20Beach!5e1!3m2!1sen!2sgr!4v1776159751071!5m2!1sen!2sgr"
             width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>


          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Nearby Vatera</h3>
            <ul className="space-y-2 text-sm">
              <li>
                🏘{" "}
                <Link href="/villages/plomari" className="text-blue-600 hover:underline">
                  Plomari
                </Link>
              </li>
              <li>🍽 Seafront taverns</li>
              <li>🏖 Smaller quieter beaches in the area</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          See other beaches in Lesvos
        </h2>
        <Link
          href="/beaches"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          All beaches
        </Link>
      </section>

    </main>
  );
}
