import Link from "next/link";

export const metadata = {
  title: "Mantamados | Lesvos  Travel Guide",
  description:
    "Mantamados Lesvos: Religion, peace and delicius food",
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
              Mantamados
            </h1>
            <p className="mt-2 text-gray-200 text-lg">
              Religion, peace and delicius food
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
                Why Visit Mantamados?
              </h2>
              <p className="leading-relaxed text-gray-700">
                Mantamados is a village that connects religion and trandition. It is located in the northeastern part of the island. Mantamados is a destination for all types of tourists as it has many churches and also has cheese factories. Delicious food is available in every cafeneio from the excellent cooks.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">
                What to see
              </h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-gray-700">
                <li>Holy Monastery of Taxiarchis of Mantamados</li>
                <li>Mantamados pottery workshops</li>
                <li>Beaches with clear blue waters (Tsonia Beach,Golden Sand Beach)</li>
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
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6834.371858735436!2d26.335085291781773!3d39.3107226990791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba8669ac32bde3%3A0x400bd2ce2b9b540!2sMantamados%20811%2004!5e1!3m2!1sen!2sgr!4v1776772597654!5m2!1sen!2sgr" 
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
                <li>📍 Nnortheast Lesvos</li>
                <li>🏖 Beautiful beaches nearby</li>
                <li>🍽 Great seafood and local taverns</li>
                <li>   Ceramics</li>
              </ul>
            </div>

            {/* TIPS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>☀️ Ideal for  sunset walks</li>
                <li>🍽 Try Famous Mantamados yogurt, local cheeses and honey, homemade spoon sweets (traditional fruit preserves)  </li>
              </ul>
            </div>

            {/* NEARBY */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-semibold">Nearby Beaches</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  🏖{" "}
                  <Link href="/beaches/tsonia" className="text-blue-600 hover:underline">
                    Tsonia Beach
                  </Link>
                </li>
                <li>
                  🏖{" "}
                  <Link href="/beaches/golden-sand" className="text-blue-600 hover:underline">
                    
                    Golden Sand Beach
                  </Link>
                </li>
                <li>
                  🏖{" "}
                  <Link href="/beaches/aspropotamos" className="text-blue-600 hover:underline">
                    Yalo - Yalo Aspropotamos
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOOD */}
           <div className="rounded-2xl bg-white p-5 shadow-sm">
             <h2 className="mb-3 font-semibold">Where to eat</h2>
              <p className="text-gray-700">
                In Mantmados you will find traditional seaside taverns, ideal for fresh fish, local meze, and of course ouzo.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}