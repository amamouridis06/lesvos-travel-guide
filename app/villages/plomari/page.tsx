import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Plomari",
  description:
    "Plomari Lesvos: Ouzo, sea & trandition",
};

export default function PlomariPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/plomari2.jpg"
          alt="Plomari Lesvos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Plomari 
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            Ouzo, sea & trandition
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Γιατί να επισκεφθείτε το Πλωμάρι</h2>
            <p className="text-gray-700 leading-relaxed">
              Plomari is a seaside village in the southwest of Lesvos. This village is one of the most picturesque on the island where you can walk in the afternoon after the excellent food it has. There are ouz0 museums, beaches with clear blue waters as well as a picturesque port
            </p>
          </div>

          {/* What to see */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">What to see</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>The picturesque port in Plomari</li>
              <li>Ouzo Museums (Varvagianni, Plomari)</li>
              <li>Traditional alleys and cafes</li>
              <li> Beaches with clear blue waters (Agios Isidoros, Melinta, Tarti)</li>
            </ul>
          </div>

          {/* What to do */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Τι να κάνετε</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
             <li>A stroll around the harbor in the afternoon</li>
              <li>Trying local ouzo and meze</li>
              <li>Excursions to nearby beaches</li>
            </ul>
          </div>

          {/* Beaches */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Κοντινές παραλίες</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                🏖{" "}
                <Link href="/beaches/tarti" className="text-blue-600 hover:underline">
                  Tarti
                </Link>
              </li>
              <Link href="/beaches/melinta" className="text-blue-600 hover:underline">
                  Melinta
                </Link>
              <Link href="/beaches/agios-isidoros" className="text-blue-600 hover:underline">
                  Agios Isidoros
                </Link>
            </ul>
          </div>

          {/* Food */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Πού να φάτε</h2>
            <p className="text-gray-700">
            In Plomari you will find traditional taverns by the sea, ideal for fish, appetizers and of course ouzo.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25820.01037316422!2d26.357505!3d39.000095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba5f5a7e7e1f45%3A0x400bd2ce2b98a70!2sPlomari%2C%20Greece!5e0!3m2!1sel!2sgr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Tips</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>🚗 Easy access by catr</li>
              <li>☀️ Ideal for afternoon walks</li>
              <li>🍽 Try meze with ouzo</li>
            </ul>
          </div>
        </aside>
      </section>

    </main>
  );
}
