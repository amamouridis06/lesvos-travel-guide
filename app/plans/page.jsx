"use client";

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
          "Βασική υποστήριξη συνεργατών",
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
          "2 promotional posts/reels τον μήνα",
          "Συμμετοχή σε luxury & summer guides",
          "Featured προβολή στην περιοχή",
          "Analytics επισκεψιμότητας",
        ],
        cta: "Ξεκίνα με το Luxury",
        highlighted: true,
      },
      {
        id: "hotel-featured",
        name: "Elite Resort Featured",
        price: 299,
        period: "/month",
        description:
            "Για luxury resorts και premium ξενοδοχεία με ανάγκη κορυφαίας προβολής.",
        features: [
          "Όλα όσα περιλαμβάνει το Luxury",
          "Προβολή στην αρχική σελίδα",
          "4 promotional reels/posts",
          "Extra stories & newsletter προβολή",
          "Dedicated travel άρθρο",
          "VIP support 24/7",
          "Premium campaign συμμετοχές",
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
            "Για restaurants, taverns και cafés που θέλουν online παρουσία.",
        features: [
          "Καταχώριση στον food guide",
          "Έως 10 φωτογραφίες",
          "Menu link & στοιχεία επικοινωνίας",
          "Google Maps & social media links",
          "Βασική υποστήριξη",
          "Εμφάνιση ανά κουζίνα & περιοχή",
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
            "Για επιχειρήσεις εστίασης που θέλουν μεγαλύτερη προβολή.",
        features: [
          "Όλα όσα περιλαμβάνει το Food Listing",
          "Προτεραιότητα στα αποτελέσματα",
          "2 stories ή posts τον μήνα",
          "Προβολή ως recommended restaurant",
          "Συμμετοχή σε food & nightlife guides",
          "Analytics επισκεψιμότητας",
        ],
        cta: "Ξεκίνα με το Recommended",
        highlighted: true,
      },
      {
        id: "food-featured",
        name: "Featured Dining Partner",
        price: 129,
        period: "/month",
        description:
            "Για premium restaurants, rooftop bars και fine dining εμπειρίες.",
        features: [
          "Όλα όσα περιλαμβάνει το Recommended",
          "Featured προβολή στην αρχική",
          "4 reels/posts τον μήνα",
          "Extra social media promotion",
          "Chef ή concept παρουσίαση",
          "VIP support & campaigns",
        ],
        cta: "Γίνε Featured Dining",
        highlighted: false,
      },
    ],
  },

  nightlife: {
    title: "Καφέ, Bars & Beach Bars",
    plans: [
      {
        id: "bar-basic",
        name: "Nightlife Listing",
        price: 35,
        period: "/month",
        description:
            "Για cafés, cocktail bars και beach bars.",
        features: [
          "Καταχώριση στον nightlife guide",
          "Έως 12 φωτογραφίες",
          "Instagram & Google Maps",
          "Βασικά στοιχεία επικοινωνίας",
          "Προβολή ανά περιοχή",
        ],
        cta: "Επιλογή πακέτου",
        highlighted: false,
      },
      {
        id: "bar-pro",
        name: "Popular Nightlife Spot",
        price: 79,
        period: "/month",
        description:
            "Για nightlife spots που θέλουν δυνατή social προβολή.",
        features: [
          "Όλα όσα περιλαμβάνει το Nightlife Listing",
          "2 promotional stories/reels",
          "Προβολή ως trending επιλογή",
          "Προτεραιότητα στα nightlife αποτελέσματα",
          "Συμμετοχή σε summer & nightlife guides",
        ],
        cta: "Ξεκίνα με το Popular",
        highlighted: true,
      },
      {
        id: "bar-featured",
        name: "VIP Beach & Club Partner",
        price: 159,
        period: "/month",
        description:
            "Για premium beach bars και clubs με υψηλή επισκεψιμότητα.",
        features: [
          "Όλα όσα περιλαμβάνει το Popular",
          "Featured homepage placement",
          "4 reels/posts τον μήνα",
          "VIP προβολή μέσω social campaigns",
          "Event promotion",
          "24/7 partner support",
        ],
        cta: "Γίνε VIP Partner",
        highlighted: false,
      },
    ],
  },

  shops: {
    title: "Καταστήματα & Shopping",
    plans: [
      {
        id: "shop-basic",
        name: "Local Shop Listing",
        price: 25,
        period: "/month",
        description:
            "Για τοπικά καταστήματα και boutiques.",
        features: [
          "Καταχώριση στον shopping guide",
          "Έως 8 φωτογραφίες",
          "Instagram & website links",
          "Προβολή ανά κατηγορία",
        ],
        cta: "Επιλογή πακέτου",
        highlighted: false,
      },
      {
        id: "shop-pro",
        name: "Recommended Store",
        price: 59,
        period: "/month",
        description:
            "Για καταστήματα που θέλουν αυξημένη προβολή.",
        features: [
          "Όλα όσα περιλαμβάνει το Local Shop",
          "Προβολή ως recommended store",
          "2 stories/posts τον μήνα",
          "Προτεραιότητα στα αποτελέσματα",
          "Συμμετοχή σε shopping guides",
        ],
        cta: "Ξεκίνα με το Recommended",
        highlighted: true,
      },
      {
        id: "shop-featured",
        name: "Featured Boutique Partner",
        price: 119,
        period: "/month",
        description:
            "Για premium boutiques και luxury stores.",
        features: [
          "Όλα όσα περιλαμβάνει το Recommended",
          "Homepage featured placement",
          "4 promotional reels/posts",
          "Extra social campaigns",
          "VIP support",
        ],
        cta: "Γίνε Featured Boutique",
        highlighted: false,
      },
    ],
  },

  experiences: {
    title: "Δραστηριότητες & Εμπειρίες",
    plans: [
      {
        id: "exp-basic",
        name: "Experience Listing",
        price: 39,
        period: "/month",
        description:
            "Για tours, activities και experiences.",
        features: [
          "Καταχώριση στον experiences guide",
          "Έως 10 φωτογραφίες",
          "Στοιχεία κράτησης",
          "Google Maps & social links",
        ],
        cta: "Επιλογή πακέτου",
        highlighted: false,
      },
      {
        id: "exp-pro",
        name: "Recommended Experience",
        price: 89,
        period: "/month",
        description:
            "Για δραστηριότητες που θέλουν μεγαλύτερη προβολή.",
        features: [
          "Όλα όσα περιλαμβάνει το Experience Listing",
          "Προβολή ως recommended activity",
          "2 stories/reels τον μήνα",
          "Προτεραιότητα στα αποτελέσματα",
          "Συμμετοχή σε travel guides",
        ],
        cta: "Ξεκίνα με το Recommended",
        highlighted: true,
      },
      {
        id: "exp-featured",
        name: "Featured Experience Partner",
        price: 169,
        period: "/month",
        description:
            "Για premium experiences και luxury tours.",
        features: [
          "Όλα όσα περιλαμβάνει το Recommended",
          "Homepage placement",
          "4 reels/posts",
          "Campaign participation",
          "VIP support & collaborations",
        ],
        cta: "Γίνε Featured Partner",
        highlighted: false,
      },
    ],
  },

  services: {
    title: "Μεταφορές, Tours & Services",
    plans: [
      {
        id: "service-basic",
        name: "Service Listing",
        price: 29,
        period: "/month",
        description:
            "Για rentals, μεταφορές και τουριστικές υπηρεσίες.",
        features: [
          "Καταχώριση στον services guide",
          "Έως 8 φωτογραφίες",
          "Website & contact links",
          "Google Maps προβολή",
        ],
        cta: "Επιλογή πακέτου",
        highlighted: false,
      },
      {
        id: "service-pro",
        name: "Recommended Service",
        price: 69,
        period: "/month",
        description:
            "Για υπηρεσίες που θέλουν επαγγελματική προβολή.",
        features: [
          "Όλα όσα περιλαμβάνει το Service Listing",
          "Προτεραιότητα στα αποτελέσματα",
          "2 stories/posts τον μήνα",
          "Featured εμφάνιση στην κατηγορία",
          "Analytics & insights",
        ],
        cta: "Ξεκίνα με το Recommended",
        highlighted: true,
      },
      {
        id: "service-featured",
        name: "Premium Service Partner",
        price: 139,
        period: "/month",
        description:
            "Για premium services και μεγάλες τουριστικές επιχειρήσεις.",
        features: [
          "Όλα όσα περιλαμβάνει το Recommended",
          "Homepage featured placement",
          "4 reels/posts",
          "Priority support",
          "Extra campaign promotion",
        ],
        cta: "Γίνε Premium Partner",
        highlighted: false,
      },
    ],
  },
};

export default function PlansPage() {
  return (
      <div className="min-h-screen bg-slate-50 p-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {Object.values(categoryPlans).map((category) => (
              <section key={category.title}>
                <h2 className="text-4xl font-bold mb-10">
                  {category.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.plans.map((plan) => (
                      <div
                          key={plan.id}
                          className={`rounded-3xl border bg-white p-8 shadow-sm ${
                              plan.highlighted
                                  ? "border-blue-500 ring-2 ring-blue-100"
                                  : "border-slate-200"
                          }`}
                      >
                        {plan.highlighted && (
                            <div className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                              Most Popular
                            </div>
                        )}

                        <h3 className="text-2xl font-bold mb-4">
                          {plan.name}
                        </h3>

                        <div className="flex items-end gap-1 mb-4">
                    <span className="text-5xl font-bold">
                      €{plan.price}
                    </span>
                          <span className="text-slate-500 pb-1">
                      {plan.period}
                    </span>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {plan.description}
                        </p>

                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature) => (
                              <li
                                  key={feature}
                                  className="flex items-start gap-3 text-slate-700"
                              >
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
                </div>
              </section>
          ))}
        </div>
      </div>
  );
}