import Image from "next/image";
import Link from "next/link";
import { MapPin, Waves, Sunset, Car, Umbrella, Trees } from "lucide-react";

export const metadata = {
  title: "Vatera Beach | Lesvos",
  description:
      "Discover Vatera Beach in Lesvos — a breathtaking 8km sandy coastline with crystal-clear waters, seaside taverns, sunsets, and relaxing summer vibes.",
};

export default function VateraPage() {
  return (
      <main className="bg-white text-neutral-900 overflow-hidden">
        {/* HERO */}
        <section className="relative h-screen w-full">
          <Image
              src="/vatera.jpg"
              alt="Vatera Beach Lesvos"
              fill
              priority
              className="object-cover scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          {/* Floating content */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT CONTENT */}
              <div className="text-white text-center lg:text-left">
                <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 mb-4">
                  Lesvos Island • Greece
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
                  Vatera Beach
                </h1>

                <p className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Endless golden sand, crystal-clear waters, unforgettable sunsets,
                  and authentic Greek summer vibes.
                </p>

                <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link
                      href="/beaches"
                      className="px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-2xl"
                  >
                    Explore Beaches
                  </Link>

                  <a
                      href="#discover"
                      className="px-8 py-4 rounded-full border border-white/50 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    Discover More
                  </a>
                </div>
              </div>

              {/* RIGHT IMAGE CARD */}
              <div className="hidden lg:flex justify-center">
                <div className="relative w-[420px] h-[520px] rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-md">

                  <Image
                      src="/wetlands.jpg"
                      alt="Vatera Beach"
                      fill
                      className="object-cover hover:scale-105 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                      Southern Lesvos
                    </p>

                    <h3 className="text-3xl font-bold mt-2">
                      Pure Summer Escape
                    </h3>

                    <p className="mt-3 text-gray-200 leading-relaxed">
                      Relax on one of the longest and most beautiful beaches in Greece.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* DISCOVER */}
        <section
            id="discover"
            className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Text */}
          <div>
            <p className="text-yellow-600 font-semibold uppercase tracking-widest mb-3">
              Why Visit Vatera
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              The longest beach in Lesvos with authentic island beauty
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Vatera is one of the most impressive coastal destinations in Lesvos.
              Stretching for almost 8 kilometers, this sandy paradise combines
              peaceful relaxation, crystal-clear shallow waters, and traditional
              Greek hospitality.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you want to swim, enjoy fresh seafood by the sea, walk
              endlessly along the coast, or simply watch the sunset with a drink
              in hand — Vatera offers the perfect summer escape.
            </p>
          </div>

          {/* Image Card */}
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
            <Image
                src="/vatera1.jpg"
                alt="Sunset at Vatera Beach"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                Southern Lesvos
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Pure Summer Energy
              </h3>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-neutral-100 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-yellow-600 font-semibold uppercase tracking-widest mb-3">
                Highlights
              </p>

              <h2 className="text-4xl font-bold mb-4">
                Everything you need for a perfect beach day
              </h2>

              <p className="text-gray-600 text-lg">
                Vatera combines natural beauty with comfort and accessibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                {
                  icon: Waves,
                  title: "Crystal Waters",
                  text: "Clean, calm and shallow sea ideal for families and relaxing swims.",
                },
                {
                  icon: Sunset,
                  title: "Epic Sunsets",
                  text: "Enjoy magical golden-hour views directly from the beach.",
                },
                {
                  icon: Umbrella,
                  title: "Beach Facilities",
                  text: "Sunbeds, umbrellas, taverns and cafes along the coast.",
                },
                {
                  icon: Trees,
                  title: "Peaceful Atmosphere",
                  text: "A huge beach with plenty of space even during summer.",
                },
              ].map((item, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <item.icon className="w-12 h-12 text-yellow-500 mb-6" />

                    <h3 className="text-2xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFO + MAP */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-12">
          {/* Info card */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-neutral-900 text-white rounded-[2rem] p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">
                Useful Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Waves className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Beach Type</h4>
                    <p className="text-gray-300">Long sandy coastline</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Umbrella className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Facilities</h4>
                    <p className="text-gray-300">
                      Sunbeds, umbrellas & taverns
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Car className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Access</h4>
                    <p className="text-gray-300">Easy access by car</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Ideal For</h4>
                    <p className="text-gray-300">
                      Families, couples & relaxation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[500px] border border-neutral-200">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16050.937127984585!2d26.19954211889825!3d39.01992357368257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baef8e3ce47107%3A0xa00bd2f74c274e0!2sVatera%20813%2000!5e1!3m2!1sen!2sgr!4v1779542490198!5m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* NEARBY */}
        <section className="bg-neutral-950 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
              Nearby Places
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-14">
              Explore around Vatera
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Link
                  href="/villages/plomari"
                  className="group bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🏘</div>

                <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition">
                  Plomari
                </h3>

                <p className="text-gray-400 mt-4">
                  Traditional seaside town famous for ouzo and local culture.
                </p>
              </Link>

              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
                <div className="text-5xl mb-6">🍽</div>

                <h3 className="text-2xl font-bold">
                  Seaside Taverns
                </h3>

                <p className="text-gray-400 mt-4">
                  Fresh seafood and authentic Greek flavors by the beach.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
                <div className="text-5xl mb-6">🏖</div>

                <h3 className="text-2xl font-bold">
                  Quiet Beaches
                </h3>

                <p className="text-gray-400 mt-4">
                  Hidden smaller beaches nearby for peaceful moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
                src="/ouzo.jpg"
                alt="Vatera background"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
            <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-4">
              Discover Lesvos
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Explore more beautiful beaches on the island
            </h2>

            <p className="mt-6 text-xl text-gray-300">
              Find hidden gems, crystal waters, and authentic summer destinations
              all around Lesvos.
            </p>

            <Link
                href="/beaches"
                className="inline-block mt-10 px-10 py-5 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-2xl"
            >
              View All Beaches
            </Link>
          </div>
        </section>
      </main>
  );
}