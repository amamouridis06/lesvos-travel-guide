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

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* MAIN CONTENT */}
  <div className="lg:col-span-2 space-y-8">
    {/* Practical info */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Useful Information</h2>

      <ul className="text-gray-700 space-y-4">
        <li>
          <div>
            <strong>Type:</strong>
            <p className="mt-1">Sandy</p>
          </div>
        </li>

        <li>
          <div>
            <strong>Organization:</strong>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Umbrellas & sunbeds in some areas</li>
              <li>Beach bars with relaxed atmosphere</li>
              <li>Taverns and coffee spots along the beach</li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <strong>Access:</strong>
            <p className="mt-1">Easy by car</p>
          </div>
        </li>

        <li>
          <div>
            <strong>Ideal for:</strong>
            <p className="mt-1">Families, relaxation</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  {/* SIDEBAR */}
  <aside className="space-y-8">
    {/* Map */}
    <div className="w-full h-48 rounded-lg overflow-hidden">
      <iframe
        src="X"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* Nearby */}
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-3">Nearby X</h3>
      <ul className="space-y-2 text-sm">
        <li>
          🏘{" "}
          <Link href="/villages/X" className="text-blue-600 hover:underline">
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
