export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-10">

      {/* Translate */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 border-b pb-1">
          Translate
        </h3>
        <div className="bg-gray-100 p-3 rounded">
          <img src="/google-translate.png" alt="translate" className="h-6" />
        </div>
      </div>

      {/* Search */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 border-b pb-1">
          Αναζήτηση
        </h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Αναζήτηση..."
            className="flex-1 border rounded px-3 py-2"
          />
          <button className="bg-black text-white px-4 rounded">
            Search
          </button>
        </div>
      </div>

      {/* Read More */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 border-b pb-1">
          Read More
        </h3>
        <div className="overflow-hidden rounded-lg shadow">
          <img src="/vathylimos.jpg" className="w-full object-cover" />
          <p className="p-3 font-medium">Καταρράκτης Βαθύλυμος</p>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-1">
          Social Media
        </h3>

        <div className="flex gap-4">
          <a href="#">
            <img src="/instagram.png" className="h-12 w-12" />
          </a>
          <a href="#">
            <img src="/facebook.png" className="h-12 w-12" />
          </a>
        </div>
      </div>

    </aside>
  );
}
