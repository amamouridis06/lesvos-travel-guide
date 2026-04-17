export default function LesvosSubscriptionPlans() {
  const plans = [
    {
      name: "Starter Listing",
      price: "€15",
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
      name: "Professional",
      price: "€20",
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
      name: "Featured Partner",
      price: "€35",
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

  const categories = [
    "Ξενοδοχεία & ενοικιαζόμενα δωμάτια",
    "Εστιατόρια & ταβέρνες",
    "Καφέ, bars & beach bars",
    "Τοπικά καταστήματα",
    "Δραστηριότητες & εμπειρίες",
    "Μεταφορές, tours & services",
  ];

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
            Παρουσιάστε το ξενοδοχείο, το κατάστημα ή την επιχείρησή σας μέσα από έναν σύγχρονο ταξιδιωτικό οδηγό,
            σχεδιασμένο να αναδεικνύει τις καλύτερες εμπειρίες του νησιού σε επισκέπτες και ταξιδιώτες.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[28px] border bg-white p-8 shadow-sm flex flex-col ${
                plan.highlighted
                  ? "border-blue-500 ring-2 ring-blue-100 shadow-md"
                  : "border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-8 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">{plan.name}</h2>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-500 pb-1">{plan.period}</span>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-2xl px-5 py-3.5 font-semibold transition ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Σε ποιους απευθύνεται</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Τα πακέτα έχουν σχεδιαστεί για επιχειρήσεις που θέλουν να ενισχύσουν την online παρουσία τους και να
              προσεγγίσουν κοινό που αναζητά διαμονή, φαγητό, εμπειρίες και υπηρεσίες στη Λέσβο.
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
                  Προσεγμένη προβολή της επιχείρησής σας με καθαρή δομή, περιγραφή και φωτογραφικό υλικό.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold mb-1">Στοχευμένη ορατότητα</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Προβολή σε κοινό που ενδιαφέρεται για διακοπές, τοπικές εμπειρίες και υπηρεσίες στη Λέσβο.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold mb-1">Social media promotion</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Δυνατότητα υποστήριξης της καταχώρισης με stories, posts ή reels ανάλογα με το πακέτο.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold mb-1">Custom συνεργασίες</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Παρέχονται προσαρμοσμένες λύσεις για ειδικές καμπάνιες, θεματικά αφιερώματα και seasonal προώθηση.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-gradient-to-r from-blue-700 to-sky-600 text-white px-8 py-12 md:px-12 md:py-14 shadow-lg">
          <div className="max-w-4xl">
            <p className="text-blue-100 text-sm font-medium uppercase tracking-[0.2em]">Partnership Opportunity</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Προβάλετε την επιχείρησή σας στο Lesvos Travel Guide
            </h3>
            <p className="mt-4 text-blue-50 text-lg leading-relaxed max-w-2xl">
              Επικοινωνήστε μαζί μας για να διαμορφώσουμε το κατάλληλο πακέτο συνεργασίας για το ξενοδοχείο, το
              κατάστημα ή την επιχείρησή σας.
            </p>
           <a
              href="/contact"
              className="rounded-2xl bg-white px-6 py-3.5 font-semibold text-blue-700 hover:bg-blue-50 transition"
              >
              Επικοινωνία
            </a>

          {/* <a
          href="/offer"
          className="rounded-2xl border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition"
          >
  Ζητήστε προσφορά
</a> */}
          </div>
        </section>
      </div>
    </div>
  );
}
