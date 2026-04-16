import Link from "next/link";

export const metadata = {
  title: "Pharmacies | Lesvos Travel Guide",
  description:
    "Find pharmacies in Lesvos for urgent needs, useful addresses, contact details, and practical information for visitors.",
};

const pharmacies = [
  {
    name: "Pharmacy Mariolas O.E",
    area: "Kalloni ",
    address: "Centre Square, Kalloni",
    phone: "+30 2253022022",
    hours: [
      "Mon–Wed–Sat: 08:00–14:30",
      "Tue–Thu–Fri: 08:00–14:30 & 18.00–21:00",
      "Sat-Sun: Closed,"
    ],
    maps: "https://maps.app.goo.gl/QkQFu1yjxsVx9zYX6",
    emergency: true,
  },
  // {
  //   name: "Kalloni Pharmacy",
  //   area: "Kalloni",
  //   address: "Kalloni Central Square",
  //   phone: "+30 22530 12345",
  //   hours: "Mon–Sat: 08:00–20:00",
  //   maps: "https://maps.google.com",
  //   emergency: false,
  // },
  // {
  //   name: "Plomari Pharmacy",
  //   area: "Plomari",
  //   address: "Main Road, Plomari",
  //   phone: "+30 22520 12345",
  //   hours: "Mon–Sat: 08:00–20:00",
  //   maps: "https://maps.google.com",
  //   emergency: false,
  // },
  // {
  //   name: "Molyvos Pharmacy",
  //   area: "Molyvos",
  //   address: "Molyvos Village Center",
  //   phone: "+30 22530 67890",
  //   hours: "Mon–Sat: 08:00–20:00",
  //   maps: "https://maps.google.com",
  //   emergency: false,
  // },
];

export default function PharmaciesPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* HERO */}
      <section className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] bg-[url('/pharmacies.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Pharmacies in Lesvos
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-2xl">
              Useful pharmacy information for urgent needs during your stay on the island.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-4">Useful Information</h2>
          <p className="text-gray-700 leading-relaxed">
            If you need medicine, first-aid products, or urgent pharmacy assistance during
            your trip, here you can find useful pharmacies across Lesvos. Always call ahead
            to confirm opening hours, especially during weekends, holidays, or night duty.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-red-50 border border-red-100 p-4">
              <h3 className="font-semibold text-red-700 mb-2">Emergency Tip</h3>
              <p className="text-sm text-gray-700">
                For serious emergencies, contact the emergency services immediately or visit
                the nearest hospital or health center.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
              <h3 className="font-semibold text-blue-700 mb-2">Good to Know</h3>
              <p className="text-sm text-gray-700">
                Some pharmacies may operate on a duty schedule. It is useful to check which
                pharmacy is on call before visiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHARMACY LIST */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <h2 className="text-2xl font-semibold mb-6">Pharmacies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {pharmacies.map((pharmacy) => (
            <div
              key={pharmacy.name}
              className="bg-white rounded-2xl shadow-md p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{pharmacy.area}</p>
                </div>

                {pharmacy.emergency && (
                  <span className="text-xs font-medium bg-red-100 text-red-700 px-3 py-1 rounded-full">
                    Emergency
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Address:</span> {pharmacy.address}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  <a href={`tel:${pharmacy.phone}`} className="text-blue-600 hover:underline">
                    {pharmacy.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Opening hours:</span> {pharmacy.hours}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={pharmacy.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  View on map
                </a>

                <a
                  href={`tel:${pharmacy.phone}`}
                  className="inline-block px-4 py-2 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50 transition"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA INFO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-4">Before You Go</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Carry the name of the medicine you need, preferably written down.</li>
            <li>Keep your passport or ID with you if necessary.</li>
            <li>Ask your accommodation host for the nearest on-duty pharmacy.</li>
            <li>Call first to confirm the pharmacy is open.</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-block px-5 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
