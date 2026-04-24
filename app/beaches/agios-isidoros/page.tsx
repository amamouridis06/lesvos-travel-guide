import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Beach of Agios Isidoros",
  description:
    "Agios Isidoros beach in Lesvos is one of the most famous and beautiful beaches of the island, near Plomari.",
};

export default function AgiosIsidorosPage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[65vh] w-full">
        <Image
          src="/agios-isidoros1.jpeg"
          alt="Agios Isidoros Beach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Agios Isidoros Beach
          </h1>
          <p className="mt-3 text-lg text-neutral-200">
            Crystal waters & relaxed seaside atmosphere near Plomari
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* MAIN */}
        <div className="lg:col-span-2 space-y-12">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-neutral-700 leading-relaxed">
              Agios Isidoros is one of the most popular beaches in Lesvos,
              known for its long coastline, clean waters, and relaxed
              atmosphere. It is ideal for both families and couples looking
              for a comfortable seaside experience close to Plomari.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>

            <div className="grid sm:grid-cols-2 gap-3 text-neutral-700">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                Long sandy & pebbly shoreline
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                Clear, swimmable waters
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                Beach bars & tavernas nearby
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                Beautiful sunset views
              </div>
            </div>
          </div>

          {/* PRACTICAL INFO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Practical Information</h2>

            <div className="bg-white rounded-xl shadow-sm p-6 space-y-3 text-neutral-700">
              <p><strong>Type:</strong> Sand & fine pebbles</p>
              <p><strong>Access:</strong> Easy access by car</p>
              <p><strong>Ideal for:</strong> Families, couples, relaxation</p>
              <p><strong>Facilities:</strong> Sunbeds, umbrellas, beach bars, showers, lifeguards (seasonal)</p>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5848.771269722645!2d26.39389675!3d38.96713955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baf78b3ca36ae3%3A0x11ec44cd23d9097!2sAgios%20Isidoros%20812%2000!5e1!3m2!1sen!2sgr!4v1776163983586!5m2!1sen!2sgr"
              width="100%"
              height="220"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* NEARBY */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="font-semibold mb-4">Nearby Places</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                🏘{" "}
                <Link href="/villages/plomari" className="text-blue-600 hover:underline">
                  Plomari Town
                </Link>
              </li>
              <li>🍽 Seafront tavernas</li>
              <li>🏖 Quiet hidden beaches nearby</li>
            </ul>
          </div>
        </aside>
      </section>

      

    </main>
  );
}
