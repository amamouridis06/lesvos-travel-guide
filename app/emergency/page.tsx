import Link from "next/link";

export const metadata = {
  title: "Pharmacies | Lesvos Travel Guide",
  description:
    "Find pharmacies in Lesvos for urgent needs, useful addresses, contact details, and practical information for visitors.",
};

const pharmacies = [
  {
    name: "Pharmacy Labousis",
    area: "📍Mytilene 811 00",
    address: "Aeroporou Gianarelli 28, Mytilene",
    phone: "+30 22510 40001",
    hours: [
      {day:"Mon,Wed:", time:"08:00–14:00"},
      {day:"Tue,Thur,Fri:", time: "08:00–14:00 & 17:30-20:30"},
      {day:"Sat:" , time:"09:30–14:00"},
      {day:"Sun:", time: "Closed"}
    ],
    maps: "https://maps.app.goo.gl/56k9FJ4CgKcX6Qay8",
    emergency: false,
  },
  {
    name: "Pharmacy Mariolas",
    area: "📍Kalloni",
    address: "Kalloni Central Square",
    phone: "+30 22530 22022",
    hours: [
      {day:"Mon,Wed:", time:"08:00–14:30"},
      {day:"Tue,Thur,Fri:", time: "08:00–14:00 & 18:00-21:00"},
      {day:"Sat, Sun:", time: "Closed"}
    ],
    maps: "https://maps.app.goo.gl/8ArkLUv2HaAWiexWA",
    emergency: false,
  },
  {
    name: "Pharmacy Baltas Stavros",
    area: "Kalloni",
    address: "Kalloni",
    phone: "+30 22530 24119",
    hours: [
      {day:"Mon,Wed:", time:"08:00–14:00"},
      {day:"Tue,Thur,Fri:", time: "08:00–14:00 & 18:00-21:00"},
      {day:"Sat, Sun:", time: "Closed"}
    ],
    maps: "https://maps.app.goo.gl/4sfVgXz9uxsp42nm9",
    emergency: false,
  },
  {
    name: "Pharmacy Arist. Sifaki",
    area: "📍Mytilene",
    address: "14 Lesvonaktos Street, Mytilene, Greece, 81131",
    phone: "+30 698 615 4200",
    hours: [
      {day:"Mon,Wed:", time:"08:00–14:00"},
      {day:"Tue,Thur,Fri:", time: "08:00–14:00 & 18:00-21:00"},
      {day:"Sat:", time:"09:30–14:00"},
      {day:"Sun:", time: "Closed"}
    ],
    maps: "https://maps.app.goo.gl/rCih45m5DGXXoM9F7",
    emergency: false,
  },
];

export default function PharmaciesPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* HERO */}
      <section className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] bg-[url('/map-lesvos.jpg')] bg-cover bg-center">
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

                <div>
                  <p className="font-medium">Opening hours:</p>

                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    {pharmacy.hours.map((h, i) => (
                        <li key={i} className="flex justify-between">
                            <span className="font-semibold text-gray-800">
                                {h.day}
                            </span>
                            <span>
                                {h.time}
                            </span>
                        </li>
                    ))}
                  </ul>
                </div>

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