"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const villages = [
  { name: "Anaxos", description: "A relaxed seaside village known for its sandy beach and calm summer atmosphere.", image: "/placeholder.jpg", href: "/villages/anaxos" },
  { name: "Antissa", description: "A traditional village surrounded by history, stone houses and authentic local life.", image: "/placeholder.jpg", href: "/villages/antissa" },
  { name: "Gavathas", description: "A quiet coastal escape with open landscapes, sea views and peaceful island charm.", image: "/placeholder.jpg", href: "/villages/gavathas" },
  { name: "Molyvos", description: "One of Lesvos’ most iconic villages, with a castle, stone alleys and romantic views.", image: "/placeholder.jpg", href: "/villages/molyvos" },
  { name: "Plomari", description: "The homeland of ouzo, full of neoclassical houses, seaside tavernas and tradition.", image: "/placeholder.jpg", href: "/villages/plomari" },
  { name: "Eresos", description: "A historic village connected with poetry, culture and the wild beauty of western Lesvos.", image: "/placeholder.jpg", href: "/villages/eresos" },
  { name: "Lepetymnos", description: "A mountain village with panoramic views, quiet streets and untouched character.", image: "/placeholder.jpg", href: "/villages/lepetymnos" },
  { name: "Agiasos", description: "A colorful mountain village famous for ceramics, chestnut trees and local craftsmanship.", image: "/placeholder.jpg", href: "/villages/agiasos" },
  { name: "Petra", description: "A charming village beneath its famous rock church, close to one of Lesvos’ best beaches.", image: "/placeholder.jpg", href: "/villages/petra" },
  { name: "Sigri", description: "A remote western village known for its fossil forest, sea breeze and dramatic landscapes.", image: "/placeholder.jpg", href: "/villages/sigri" },
  { name: "Mantamados", description: "A spiritual and artistic village known for pottery, tradition and the Taxiarchis monastery.", image: "/placeholder.jpg", href: "/villages/mantamados" },
  { name: "Skala Kallonis", description: "A peaceful fishing village by the bay, loved for sunsets, seafood and birdwatching.", image: "/placeholder.jpg", href: "/villages/skala-kallonis" },
  { name: "Vatoussa", description: "A preserved traditional settlement with elegant houses and a timeless village rhythm.", image: "/placeholder.jpg", href: "/villages/vatoussa" },
  { name: "Mytilene", description: "The lively capital of Lesvos, blending history, culture, markets and waterfront energy.", image: "/placeholder.jpg", href: "/villages/mytilene" },
];

export default function VillagesPage() {
  return (
      <main className="bg-neutral-100 text-neutral-900 min-h-screen">
        <section className="relative h-[70vh] bg-[url('/agiasos.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-neutral-900/20" />

          <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative z-10 h-full flex items-end"
          >
            <div className="max-w-6xl mx-auto px-6 pb-16">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] uppercase text-gray-200">
              Lesvos Travel Guide
            </span>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Villages of Lesvos
              </h1>

              <p className="text-gray-200 mt-5 max-w-2xl text-lg leading-relaxed">
                Traditional settlements, mountain escapes, seaside villages and authentic island life waiting to be explored.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Explore the island
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Discover the character of each village
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {villages.map((village, index) => (
                <motion.div
                    key={village.name}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.04 }}
                >
                  <Link
                      href={village.href}
                      className="group block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                          src={village.image}
                          alt={village.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-2xl font-semibold text-white">
                          {village.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {village.description}
                      </p>

                      <div className="mt-5 flex items-center text-sm font-medium text-neutral-900">
                        Explore village
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
            ))}
          </div>
        </section>
      </main>
  );
}