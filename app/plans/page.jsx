export default function LesvosSubscriptionPlans() {
  const plans = [
    {
      name: "Basic Listing",
      price: "€15 / month",
      description: "Ιδανικό για μικρές επιχειρήσεις που θέλουν να αποκτήσουν online παρουσία στον ταξιδιωτικό οδηγό.",
      features: [
        "Προβολή στον ταξιδιωτικό οδηγό",
        "1 φωτογραφία επιχείρησης",
        "Βασικά στοιχεία επικοινωνίας",
        "Σύνδεσμος προς social media ή website",
      ],
      cta: "Ξεκίνα τώρα",
      highlighted: false,
    },
    {
      name: "Premium Business",
      price: "€25 / month",
      description: "Για ξενοδοχεία, εστιατόρια, καφέ και καταστήματα που θέλουν μεγαλύτερη προβολή.",
      features: [
        "Όλα του Basic Listing",
        "Έως 10 φωτογραφίες",
        "Περιγραφή επιχείρησης",
        "Εμφάνιση σε προτεινόμενα αποτελέσματα",
        "Ανάρτηση 1 promo post τον μήνα",
      ],
      cta: "Επιλογή Premium",
      highlighted: true,
    },
    {
      name: "Featured Partner",
      price: "€30/ month",
      description: "Για επιχειρήσεις που θέλουν κορυφαία προβολή και προώθηση σε όλα τα κανάλια.",
      features: [
        "Όλα του Premium Business",
        "Featured badge",
        "Προτεραιότητα στην αρχική σελίδα",
        "2 promo posts ή reels τον μήνα",
        "Story promotion στα social media",
        "Προτεραιότητα σε νέες καμπάνιες",
      ],
      cta: "Γίνε Featured Partner",
      highlighted: false,
    },
  ];

  const categories = [
    "Ξενοδοχεία & ενοικιαζόμενα δωμάτια",
    "Εστιατόρια & ταβέρνες",
    "Καφέ & bars",
    "Τοπικά καταστήματα",
    "Δραστηριότητες & εμπειρίες",
    "Tour services & μεταφορές",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-14">
          <p className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-medium mb-4">
            Lesvos Travel Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Συνδρομές για επιχειρήσεις
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Προώθησε το ξενοδοχείο, το κατάστημα ή την επιχείρησή σου μέσα από τον ταξιδιωτικό οδηγό της Λέσβου και προσέγγισε επισκέπτες που αναζητούν εμπειρίες στο νησί.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 shadow-sm border bg-white flex flex-col ${
                plan.highlighted ? "border-blue-500 ring-2 ring-blue-200" : "border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block mb-4 rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 w-fit">
                  Πιο δημοφιλές
                </span>
              )}

              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-3xl font-semibold mb-3">{plan.price}</p>
              <p className="text-slate-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-2xl px-4 py-3 font-medium transition ${
                plan.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold mb-4">Ποιους αφορά</h3>
            <p className="text-slate-600 mb-6">
              Τα πακέτα είναι σχεδιασμένα για επιχειρήσεις που θέλουν να προβληθούν σε ταξιδιώτες και επισκέπτες της Λέσβου.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {categories.map((category) => (
                <li key={category} className="rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-700">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold mb-4">Τι περιλαμβάνει η συνεργασία</h3>
            <div className="space-y-4 text-slate-700">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                Επαγγελματική παρουσίαση της επιχείρησης στον οδηγό
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                Προβολή σε κοινό που ενδιαφέρεται για διακοπές στη Λέσβο
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                Επιπλέον διαφήμιση μέσα από social media posts, reels και stories
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                Δυνατότητα για ειδικές custom συνεργασίες
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-3xl p-10 text-center shadow-sm">
          <h3 className="text-3xl font-bold mb-4">Θέλεις να προβάλεις την επιχείρησή σου;</h3>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg mb-6">
            Επικοινώνησε μαζί μας για να διαμορφώσουμε το κατάλληλο πακέτο προβολής για το ξενοδοχείο, το κατάστημα ή την επιχείρησή σου.
          </p>
          <button className="rounded-2xl bg-white text-blue-700 px-6 py-3 font-semibold hover:bg-blue-50 transition">
            Επικοινωνία
          </button>
        </section>
      </div>
    </div>
  );
}
