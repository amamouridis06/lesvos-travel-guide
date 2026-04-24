import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Πλωμάρι",
  description:
    "Πλωμάρι Λέσβος: παραθαλάσσιο χωριό με παράδοση στο ούζο, αυθεντικές ταβέρνες και όμορφες παραλίες.",
};

export default function PlomariPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/plomari2.jpg"
          alt="Πλωμάρι Λέσβος"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Πλωμάρι
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            Ούζο, θάλασσα & παράδοση
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
              Το Πλωμάρι είναι ένα ζωντανό παραθαλάσσιο χωριό στη νότια Λέσβο,
              γνωστό σε όλη την Ελλάδα για την παράδοση στο ούζο.
              Συνδυάζει όμορφο λιμάνι, αυθεντική καθημερινότητα,
              καλό φαγητό και εύκολη πρόσβαση σε εξαιρετικές παραλίες.
            </p>
          </div>

          {/* What to see */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Τι να δείτε</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Το γραφικό λιμάνι του Πλωμαρίου</li>
              <li>Μουσεία Ούζου (Βαρβαγιάννη, Πλωμαρίου)</li>
              <li>Παραδοσιακά στενά και καφενεία</li>
            </ul>
          </div>

          {/* What to do */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Τι να κάνετε</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Βόλτα στο λιμάνι το απόγευμα</li>
              <li>Δοκιμή τοπικού ούζου και μεζέδων</li>
              <li>Εκδρομές σε κοντινές παραλίες</li>
            </ul>
          </div>

          {/* Beaches */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Κοντινές παραλίες</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                🏖{" "}
                <Link href="/beaches/vatera" className="text-blue-600 hover:underline">
                  Βατερά
                </Link>
              </li>
              <li>🏖 Μελίντα</li>
              <li>🏖 Άγιος Ισίδωρος</li>
            </ul>
          </div>

          {/* Food */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Πού να φάτε</h2>
            <p className="text-gray-700">
              Στο Πλωμάρι θα βρείτε παραδοσιακές ταβέρνες δίπλα στο κύμα,
              ιδανικές για ψάρι, μεζέδες και φυσικά ούζο.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Τοποθεσία</h3>
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

            <p className="mt-2 text-xs text-gray-500">
              <a
                href="https://www.google.com/maps/place/Πλωμάρι,+Ελλάδα"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Άνοιγμα στο Google Maps →
              </a>
            </p>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Tips</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>🚗 Εύκολη πρόσβαση με αυτοκίνητο</li>
              <li>☀️ Ιδανικό για απογευματινές βόλτες</li>
              <li>🍽 Δοκιμάστε μεζέδες με ούζο</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ανακαλύψτε κι άλλα χωριά της Λέσβου
        </h2>
        <Link
          href="/villages"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Όλα τα χωριά
        </Link>
      </section>

    </main>
  );
}
