"use client";

import { motion } from "framer-motion";

const categoryPlans = {
  hotels: {
    title: "Ξενοδοχεία & Διαμονή",
    plans: [
      {
        id: "hotel-basic",
        name: "Hotel Presence",
        price: 79,
        period: "/month",
        description:
            "Για ξενοδοχεία και καταλύματα που θέλουν επαγγελματική online παρουσία.",
        features: [
          "Καταχώριση στον hotel οδηγό",
          "Έως 15 φωτογραφίες",
          "Περιγραφή δωματίων & παροχών",
          "Σύνδεσμος προς booking engine",
          "Instagram, website & Google Maps",
        ],
        cta: "Επιλογή πακέτου",
        highlighted: false,
      },
      {
        id: "hotel-pro",
        name: "Luxury Hotel Partner",
        price: 149,
        period: "/month",
        description:
            "Για ξενοδοχεία που θέλουν αυξημένη προβολή και περισσότερες κρατήσεις.",
        features: [
          "Όλα όσα περιλαμβάνει το Hotel Presence",
          "Έως 40 φωτογραφίες & video reel",
          "Προτεραιότητα στα αποτελέσματα",
          "2 promotional posts/reels",
          "Luxury guide συμμετοχή",
        ],
        cta: "Ξεκίνα τώρα",
        highlighted: true,
      },
      {
        id: "hotel-featured",
        name: "Elite Resort Featured",
        price: 299,
        period: "/month",
        description:
            "Για luxury resorts και premium ξενοδοχεία.",
        features: [
          "Homepage featured προβολή",
          "4 promotional reels/posts",
          "VIP support 24/7",
          "Travel άρθρο προβολής",
          "Premium campaigns",
        ],
        cta: "Γίνε Elite Partner",
        highlighted: false,
      },
    ],
  },

  restaurants: {
    title: "Εστιατόρια & Ταβέρνες",
    plans: [
      {
        id: "food-basic",
        name: "Food Listing",
        price: 29,
        period: "/month",
        description:
            "Για restaurants, cafés και taverns.",
        features: [
          "Καταχώριση στον food guide",
          "Menu link",
          "10 φωτογραφίες",
          "Social media links",
          "Google Maps",
        ],
        cta: "Επιλογή πακέτου",
        highlighted: false,
      },
      {
        id: "food-pro",
        name: "Recommended Restaurant",
        price: 69,
        period: "/month",
        description:
            "Για επιχειρήσεις που θέλουν μεγαλύτερη προβολή.",
        features: [
          "Priority εμφάνιση",
          "2 stories/posts",
          "Food guide συμμετοχή",
          "Analytics",
          "Recommended badge",
        ],
        cta: "Ξεκίνα τώρα",
        highlighted: true,
      },
      {
        id: "food-featured",
        name: "Featured Dining Partner",
        price: 129,
        period: "/month",
        description:
            "Για premium dining εμπειρίες.",
        features: [
          "Featured homepage",
          "4 reels/posts",
          "Chef παρουσίαση",
          "VIP support",
          "Campaign συμμετοχές",
        ],
        cta: "Γίνε Featured",
        highlighted: false,
      },
    ],
  },
};

export default function PlansPage() {
  return (
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

          <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-black">
              Premium Business Plans
            </h1>

            <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
              Επιλέξτε το κατάλληλο πακέτο προβολής για την επιχείρησή σας
              και αποκτήστε μεγαλύτερη ορατότητα στο Lesvos Travel Guide.
            </p>
          </motion.div>

          {Object.values(categoryPlans).map((category, categoryIndex) => (
              <section key={category.title}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="mb-10"
                >
                  <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
                    {category.title}
                  </h2>

                  <div className="mt-3 h-1 w-28 rounded-full bg-blue-600" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                  {category.plans.map((plan, index) => (
                      <motion.div
                          key={plan.id}
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{
                            y: -10,
                            scale: 1.02,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.45,
                            delay: index * 0.1,
                          }}
                          className={`relative overflow-hidden rounded-[32px] border bg-white p-8 transition-all ${
                              plan.highlighted
                                  ? "border-blue-500 shadow-2xl shadow-blue-100"
                                  : "border-neutral-200 shadow-lg"
                          }`}
                      >
                        {plan.highlighted && (
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  duration: 1.5,
                                }}
                                className="absolute top-5 right-5 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white"
                            >
                              Most Popular
                            </motion.div>
                        )}

                        <div className="mb-8">
                          <h3 className="text-3xl font-black text-black">
                            {plan.name}
                          </h3>

                          <div className="mt-5 flex items-end gap-2">
                      <span className="text-6xl font-black text-black">
                        €{plan.price}
                      </span>

                            <span className="pb-2 text-neutral-500 font-medium">
                        {plan.period}
                      </span>
                          </div>

                          <p className="mt-5 text-neutral-700 leading-relaxed text-lg">
                            {plan.description}
                          </p>
                        </div>

                        <ul className="space-y-4 mb-10">
                          {plan.features.map((feature) => (
                              <li
                                  key={feature}
                                  className="flex items-start gap-3 text-neutral-800"
                              >
                                <span className="mt-2.5 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" />

                                <span className="leading-relaxed">
                          {feature}
                        </span>
                              </li>
                          ))}
                        </ul>

                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            whileHover={{ scale: 1.02 }}
                            className={`w-full rounded-2xl px-5 py-4 text-lg font-bold transition-all ${
                                plan.highlighted
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-black text-white hover:bg-neutral-800"
                            }`}
                        >
                          {plan.cta}
                        </motion.button>

                        <div className="absolute inset-0 pointer-events-none rounded-[32px] border border-white/40" />
                      </motion.div>
                  ))}
                </div>
              </section>
          ))}
        </div>
      </div>
  );
}