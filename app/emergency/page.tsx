import Link from "next/link";

export const metadata = {
  title: "Pharmacies & Emergency | Lesvos Travel Guide",
  description:
    "Find pharmacies, emergency numbers, hospitals and health centers in Lesvos.",
};

/* -------------------- DATA -------------------- */

const emergencyServices = [
  { name: "Police", phone: "100" },
  { name: "Fire Department", phone: "199" },
  { name: "Ambulance (EKAV)", phone: "166" },
  { name: "European Emergency Number", phone: "112" },
];

const pharmacies = [
  {
    name: "Pharmacy Mariolas O.E",
    area: "Kalloni",
    address: "Centre Square, Kalloni",
    phone: "+30 2253022022",
    hours: [
      "Mon–Wed: 08:00–14:30",
      "Tue–Thu–Fri: 08:00–14:30 & 18:00–21:00",
      "Sat-Sun: Closed",
    ],
    maps: "https://maps.app.goo.gl/QkQFu1yjxsVx9zYX6",
    emergency: false,
  },
];

const healthCenters = [
  {
    name: "Mytilene General Hospital",
    area: "Mytilene",
    address: "8th km Mytilene-Kalloni Road",
    phone: "+30 22510 57700",
    maps: "https://maps.app.goo.gl/39HZCU4Et7TGByNN7",
  },
  {
    name: "Kalloni Health Center",
    area: "Kalloni",
    address: "Kalloni, Lesvos",
    phone: "+30 22530 22222",
    maps: "https://maps.app.goo.gl/5LSv2WCmTQ9gc7bW8",
  },
  {
    name: "Plomari Health Center",
    area: "Plomari",
    address: "Plomari, Lesvos",
    phone: "+30 22523 50000",
    maps: "https://maps.app.goo.gl/GvqWvTvQb34qF27c6",
  },
   {
    name: "Polichnitos Health Center",
    area: "Polichnitos",
    address: "Polichnitos, Lesvos",
    phone: "+30 22520 41111",
    maps: "https://maps.app.goo.gl/JU1WQkRajxhN8nfW8",
  },
];

/* -------------------- PAGE -------------------- */

export default function PharmaciesPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      
      {/* HERO */}
      <section className="relative h-[40vh] bg-[url('/pharmacies.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Health & Emergency in Lesvos
            </h1>
            <p className="mt-2 text-gray-200 max-w-2xl">
              Pharmacies, emergency numbers, hospitals and useful health information.
            </p>
          </div>
        </div>
      </section>

      {/* EMERGENCY NUMBERS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Emergency Numbers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {emergencyServices.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-sm p-5 border text-center"
            >
              <h3 className="font-semibold text-lg">{service.name}</h3>
              <a
                href={`tel:${service.phone}`}
                className="block mt-3 text-blue-600 text-lg font-medium hover:underline"
              >
                {service.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PHARMACIES */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <h2 className="text-2xl font-semibold mb-6">Pharmacies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {pharmacies.map((pharmacy) => (
            <div
              key={pharmacy.name}
              className="bg-white rounded-2xl shadow-md p-5 border"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
                  <p className="text-sm text-gray-500">{pharmacy.area}</p>
                </div>

                {pharmacy.emergency && (
                  <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                    Emergency
                  </span>
                )}
              </div>

              <div className="mt-4 text-sm space-y-2">
                <p>
                  <strong>Address:</strong> {pharmacy.address}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${pharmacy.phone}`} className="text-blue-600">
                    {pharmacy.phone}
                  </a>
                </p>

                <div>
                  <strong>Opening hours:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    {pharmacy.hours.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={pharmacy.maps}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                >
                  Map
                </a>
                <a
                  href={`tel:${pharmacy.phone}`}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOSPITALS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Hospitals & Health Centers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {healthCenters.map((center) => (
            <div
              key={center.name}
              className="bg-white rounded-2xl shadow-md p-5 border"
            >
              <h3 className="text-lg font-semibold">{center.name}</h3>
              <p className="text-sm text-gray-500">{center.area}</p>

              <div className="mt-4 text-sm space-y-2">
                <p>
                  <strong>Address:</strong> {center.address}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${center.phone}`} className="text-blue-600">
                    {center.phone}
                  </a>
                </p>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={center.maps}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                >
                  Map
                </a>
                <a
                  href={`tel:${center.phone}`}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-5 py-3 bg-neutral-900 text-white rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
