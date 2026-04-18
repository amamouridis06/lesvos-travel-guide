export const metadata = {
  title: "Molivos | Lesvos Travel Guide",
  description:
    "Explore Molivos: castle, beaches, restaurants and cafes",
};

export default function MolyvosPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">
      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/molivos1.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-6xl px-6 pb-12 w-full">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Molivos
            </h1>
            <p className="mt-2 text-gray-200">
              Medieval picturesque village of Lesvos
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* MAIN CONTENT */}
          <div className="space-y-10">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">Why visit Molivos?</h2>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>
                  A magical old village that feels like it belongs to another
                  era, with picturesque alleyways inviting you to wander through
                  them. The locals are exceptionally warm and welcoming, while
                  the small shops offer authentic tastes of traditional Greek
                  culture and local products.
                </p>

                <p>
                  Don’t forget to visit the castle, ideally in the afternoon, so
                  you can enjoy the stunning sunset. There, you can relax with a
                  coffee or a drink at the charming spot located nearby.
                </p>

                <p>
                  And if you’re not ready to end your stroll, continue exploring
                  the village, where you’ll find wonderful restaurants serving
                  fresh seafood and fish caught daily. Of course, no visit is
                  complete without tasting a glass of fine Greek ouzo.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">Activities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>The Castle of Molivos</li>
                <li>The picturesque alleys of the village</li>
                <li>The port and cafés by the harbor</li>
                <li>The beach of Molivos & Eftalou</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold">Ideal for</h2>
              <p className="text-gray-700 leading-relaxed">
                Couples, romantic escapes, relaxed holidays, and travelers who
                love history, sea views, and authentic architecture.
              </p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6522.369986093671!2d26.1698681803955!3d39.36822513650014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba84d0ca43c0c7%3A0x400bd2ce2b9b550!2sMithymna!5e1!3m2!1sen!2sgr!4v1776508666514!5m2!1sen!2sgr"
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
                <li>📍 Northern Lesvos</li>
                <li>🏰 Famous for its medieval castle</li>
                <li>🌅 Best visited in the afternoon</li>
                <li>🍽 Great for food and harbor walks</li>
              </ul>
            </div>

            {/* TIPS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🚗 Easy access by car</li>
                <li>☀️ Ideal for afternoon walks</li>
                <li>🍽 Try mezes with ouzo</li>
                <li>📸 Stay until sunset for the best views</li>
              </ul>
            </div>

            {/* NEARBY */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-semibold">Nearby Villages</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Vafeios</li>
                <li>Petra</li>
                <li>Petri</li>
                <li>Eftalou</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
