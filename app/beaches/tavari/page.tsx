import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Παραλία Βατερά",
  description:
    "Η παραλία Βατερά στη Λέσβο: η μεγαλύτερη παραλία του νησιού, ιδανική για χαλάρωση, οικογένειες και καλό φαγητό δίπλα στη θάλασσα.",
};

export default function VateraPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/vatera.jpg"
          alt="Παραλία Βατερά Λέσβος"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Beach of Vatera
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
              Vatera is an extensive sandy beach in southern Lesvos, a ideal for relaxing holidays by the sea. The combination
              floating beach, clean water and seaside taverns
              makes it a favorite choice for families and couples.
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
            <h2 className="text-2xl font-semibold mb-3">Useful Informations</h2>
            <ul className="text-gray-700 space-y-2">
              <li> <strong> Type: </strong> Sandy </li>
              <li> <strong> Organization: </strong> Umbrellas & sunbeds in places </li>
              <li> <strong> Access: </strong> Easy by car </li>
              <li> <strong> Ideal for: </strong> Families, relaxation </li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/place/%CE%92%CE%B1%CF%84%CE%B5%CF%81%CE%AC+813+00,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1/@39.0205683,26.1787428,4538m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14baef8e3ce47107:0xa00bd2f74c274e0!8m2!3d39.0195659!4d26.1978707!16zL20vMDJsOG43?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
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
          Δείτε κι άλλες παραλίες στη Λέσβο
        </h2>
        <Link
          href="/beaches"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Όλες οι παραλίες
        </Link>
      </section>

    </main>
  );
}
