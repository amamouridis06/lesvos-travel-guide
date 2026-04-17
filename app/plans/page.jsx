"use client";

import { useMemo, useState } from "react";

export default function LesvosSubscriptionPlans() {
  const plans = [
    {
      id: "starter",
      name: "Starter Listing",
      price: 15,
      period: "/month",
      description:
        "Για μικρές επιχειρήσεις που θέλουν μια καθαρή και αξιόπιστη παρουσία στον ταξιδιωτικό οδηγό.",
      features: [
        "Καταχώριση στον οδηγό επιχειρήσεων",
        "1 κύρια φωτογραφία",
        "Βασικά στοιχεία επικοινωνίας",
        "Σύνδεσμος προς website ή social media",
        "Περιγραφή μικρής έκτασης",
      ],
      cta: "Επιλογή πακέτου",
      highlighted: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: 20,
      period: "/month",
      description:
        "Η ιδανική επιλογή για ξενοδοχεία, εστιατόρια και καταστήματα που θέλουν αυξημένη προβολή.",
      features: [
        "Όλα όσα περιλαμβάνει το Starter",
        "Έως 10 φωτογραφίες",
        "Αναλυτική επαγγελματική παρουσίαση",
        "Προτεραιότητα στα αποτελέσματα αναζήτησης",
        "Προβολή ως προτεινόμενη επιχείρηση",
        "1 promotional story ή post τον μήνα",
      ],
      cta: "Ξεκίνα με το Professional",
      highlighted: true,
    },
    {
      id: "featured",
      name: "Featured Partner",
      price: 35,
      period: "/month",
      description:
        "Για επιχειρήσεις που επιθυμούν premium τοποθέτηση, ενισχυμένη προβολή και σταθερή προώθηση.",
      features: [
        "Όλα όσα περιλαμβάνει το Professional",
        "Featured badge στην καταχώριση",
        "Προτεραιότητα στην αρχική σελίδα",
        "2 promotional posts ή reels τον μήνα",
        "Extra προβολή μέσω stories",
        "Προτεραιότητα σε ειδικά αφιερώματα και καμπάνιες",
      ],
      cta: "Γίνε Featured Partner",
      highlighted: false,
    },
  ];

  const extras = [
    {
      id: "extraPhotos",
      name: "Επιπλέον φωτογραφίες",
      description: "Προσθήκη περισσότερου φωτογραφικού υλικού στην καταχώριση.",
      price: 5,
    },
    {
      id: "homepagePriority",
      name: "Προτεραιότητα στην αρχική",
      description: "Καλύτερη τοποθέτηση στην homepage για μεγαλύτερη ορατότητα.",
      price: 10,
    },
    {
      id: "instagramStory",
      name: "Instagram story",
      description: "1 επιπλέον story προβολής στα social media.",
      price: 8,
    },
    {
      id: "instagramPost",
      name: "Instagram post",
      description: "1 επιπλέον post για ενίσχυση της επιχείρησής σας.",
      price: 15,
    },
    {
      id: "featuredBadge",
      name: "Featured badge",
      description: "Ειδική σήμανση για πιο premium παρουσίαση.",
      price: 7,
    },
    {
      id: "seoPage",
      name: "Αναλυτική SEO σελίδα",
      description: "Ξεχωριστή πιο αναλυτική σελίδα για καλύτερη online παρουσία.",
      price: 20,
    },
  ];

  const categories = [
    "Ξενοδοχεία & ενοικιαζόμενα δωμάτια",
    "Εστιατόρια & ταβέρνες",
    "Καφέ, bars & beach bars",
    "Τοπικά καταστήματα",
    "Δραστηριότητες & εμπειρίες",
    "Μεταφορές, tours & services",
  ];

  const [selectedPlanId, setSelectedPlanId] = useState("professional");
  const [selectedExtras, setSelectedExtras] = useState([]);

  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) || plans[1];

  const toggleExtra = (extraId) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const extrasTotal = useMemo(() => {
    return extras
      .filter((extra) => selectedExtras.includes(extra.id))
      .reduce((sum, extra) => sum + extra.price, 0);
  }, [selectedExtras]);

  const totalPrice = selectedPlan.price + extrasTotal;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <section className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            Lesvos Travel Guide • Business Partnerships
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Επαγγελματικά πακέτα προβολής
            <span className="block text-blue-700">για επιχειρήσεις στη Λέσβο</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Παρουσιάστε το ξενοδοχείο, το κατάστημα ή την επιχείρησή σας μέσα από έναν
            σύγχρονο ταξιδιωτικό οδηγό, σχεδιασμένο να αναδεικνύει τις καλύτερες εμπειρίες
            του νησιού σε επισκέπτες και ταξιδιώτες.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.name}
                className={`relative rounded-[28px] border bg-white p-8 shadow-sm flex flex-col transition ${
                  plan.highlighted
                    ? "border-blue-500 ring-2 ring-blue-100 shadow-md"
                    : "border-slate-200"
                } ${isSelected ? "ring-2 ring-slate-900/10 border-slate-400" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-8 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight">{plan.name}</h2>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-bold">€{plan.price}</span>
                    <span className="text-slate-500 pb-1">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-700 leading-relaxed"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`w-full rounded-2xl px-5 py-3.5 font-semibold transition ${
                    isSelected
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {isSelected ? "Επιλεγμένο πακέτο" : plan.cta}
                </button>
              </div>
            );
          })}
        </section>

        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-16">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-3">
                Custom Plan Builder
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Διαμορφώστε το δικό σας πακέτο
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Επιλέξτε πρώτα το βασικό πακέτο που σας ταιριάζει και στη συνέχεια
                προσθέστε extra δυνατότητες ανάλογα με τις ανάγκες της επιχείρησής σας.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mb-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Επιλεγμένο πακέτο</p>
                  <h4 className="text-xl font-bold">{selectedPlan.name}</h4>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 mb-1">Βασική τιμή</p>
                  <div className="text-2xl font-bold">€{selectedPlan.price}/month</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {extras.map((extra) => {
                const isChecked = selectedExtras.includes(extra.id);

                return (
                  <label
                    key={extra.id}
                    className={`flex cursor-pointer items-start justify-between gap-4 rounded-2xl border p-4 transition ${
                      isChecked
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleExtra(extra.id)}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">{extra.name}</div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {extra.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div className="font-bold text-slate-900">+€{extra.price}</div>
                      <div className="text-xs text-slate-500">/month</div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm h-fit sticky top-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-3">
              Summary
            </p>
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              Η προσφορά σας
            </h3>

            <div className="space-y-4 border-b border-slate-200 pb-6 mb-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">{selectedPlan.name}</div>
                  <div className="text-sm text-slate-500">Βασικό πακέτο</div>
                </div>
                <div className="font-semibold">€{selectedPlan.price}</div>
              </div>

              {selectedExtras.length > 0 ? (
                extras
                  .filter((extra) => selectedExtras.includes(extra.id))
                  .map((extra) => (
                    <div
                      key={extra.id}
                      className="flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="font-medium text-slate-800">{extra.name}</div>
                        <div className="text-sm text-slate-500">Προαιρετική προσθήκη</div>
                      </div>
                      <div className="font-medium">+€{extra.price}</div>
                    </div>
                  ))
              ) : (
                <p className="text-sm text-slate-500">
                  Δεν έχουν επιλεγεί επιπλέον υπηρεσίες.
                </p>
              )}
            </div>

            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-slate-500">Συνολικό ποσό</p>
                <h4 className="text-4xl font-bold tracking-tight">€{totalPrice}</h4>
              </div>
              <p className="text-slate-500 font-medium">/month</p>
            </div>

            <a
              href={`/contact?plan=${selectedPlan.id}&total=${totalPrice}&extras=${selectedExtras.join(",")}`}
              className="block w-full rounded-2xl bg-blue-600 px-5 py-3.5 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Ζητήστε συνεργασία
            </a>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Για ειδικές ανάγκες ή custom καμπάνιες μπορούμε να διαμορφώσουμε
              ξεχωριστή πρόταση συνεργασίας.
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Σε ποιους απευθύνεται</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Τα πακέτα έχουν σχεδιαστεί για επιχειρήσεις που θέλουν να ενισχύσουν την
              online παρουσία τους και να προσεγγίσουν κοινό που αναζητά διαμονή,
              φαγητό, εμπειρίες και υπηρεσίες στη Λέσβο.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {categories.map((category) => (
                <div
                  key={category}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Τι περιλαμβάνει η συνεργασία</h3>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold mb-1">Επαγγελματική παρουσίαση</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Προσεγμένη προβολή της επιχείρησής σας με καθαρή δομή, περιγραφή και
                  φωτογραφικό υλικό.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold mb-1">Στοχευμένη ορατότητα</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Προβολή σε κοινό που ενδιαφέρεται για διακοπές, τοπικές εμπειρίες και
                  υπηρεσίες στη Λέσβο.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold mb-1">Social media promotion</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Δυνατότητα υποστήριξης της καταχώρισης με stories, posts ή reels
                  ανάλογα με το πακέτο.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold mb-1">Custom συνεργασίες</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Παρέχονται προσαρμοσμένες λύσεις για ειδικές καμπάνιες, θεματικά
                  αφιερώματα και seasonal προώθηση.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-gradient-to-r from-blue-700 to-sky-600 text-white px-8 py-12 md:px-12 md:py-14 shadow-lg">
          <div className="max-w-4xl">
            <p className="text-blue-100 text-sm font-medium uppercase tracking-[0.2em]">
              Partnership Opportunity
            </p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Προβάλετε την επιχείρησή σας στο Lesvos Travel Guide
            </h3>
            <p className="mt-4 text-blue-50 text-lg leading-relaxed max-w-2xl">
              Επικοινωνήστε μαζί μας για να διαμορφώσουμε το κατάλληλο πακέτο συνεργασίας
              για το ξενοδοχείο, το κατάστημα ή την επιχείρησή σας.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex rounded-2xl bg-white px-6 py-3.5 font-semibold text-blue-700 hover:bg-blue-50 transition"
              >
                Επικοινωνία
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
