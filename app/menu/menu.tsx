
const categories = [
  {
    id: "starters",
    label: "Ορεκτικά",
    items: [
      {
        name: "Amuse Bouche",
        description: "Εποχικό καλωσόρισμα του chef",
        price: "€12",
      },
      {
        name: "Χτένια Αιγαίου",
        description: "Κουνουπίδι, λεμόνι κονφί, beurre noisette, χαβιάρι",
        price: "€28",
      },
      {
        name: "Τατάκι τόνου",
        description: "Ponzu, αγγούρι, shiso, jalapeño",
        price: "€26",
      },
      {
        name: "Παντζάρι",
        description: "Κατσικίσιο τυρί, φιστίκι Αιγίνης, περγαμόντο",
        price: "€21",
      },
    ],
  },
  {
    id: "mains",
    label: "Κυρίως",
    items: [
      {
        name: "Λαβράκι ημέρας",
        description: "Αγκινάρα Ιερουσαλήμ, άγρια χόρτα, σάλτσα σαμπάνιας",
        price: "€34",
      },
      {
        name: "Black Angus",
        description: "Καπνιστή σελινόριζα, μαύρη τρούφα, jus κόκκινου κρασιού",
        price: "€42",
      },
      {
        name: "Πάπια",
        description: "Κυδώνι, καμένο κρεμμύδι, μπαχαρικά, σάλτσα porto",
        price: "€39",
      },
      {
        name: "Κουνουπίδι",
        description: "Αμύγδαλο, κάρυ Madras, σταφίδα, λάδι άνηθου",
        price: "€29",
      },
    ],
  },
  {
    id: "desserts",
    label: "Επιδόρπια",
    items: [
      {
        name: "Valrhona",
        description: "Καραμέλα miso, φουντούκι, βανίλια Μαδαγασκάρης",
        price: "€16",
      },
      {
        name: "Λεμόνι",
        description: "Yuzu, λευκή σοκολάτα, βασιλικός",
        price: "€15",
      },
      {
        name: "Τυριά",
        description: "Επιλογή ελληνικών και ευρωπαϊκών τυριών",
        price: "€19",
      },
    ],
  },
  {
    id: "tasting",
    label: "Tasting Menu",
    items: [
      {
        name: "L'Orée Experience",
        description: "8 στάδια · εποχική διαδρομή του chef",
        price: "€110",
      },
      {
        name: "Wine Pairing",
        description: "Επιλεγμένες ετικέτες για κάθε στάδιο",
        price: "€55",
      },
      {
        name: "Premium Wine Pairing",
        description: "Σπάνιες και παλαιωμένες ετικέτες",
        price: "€95",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <SiteHeader />

      <main className="menu-page">
        <section className="menu-hero">
          <div className="menu-hero-overlay" />
          <div className="container menu-hero-content">
            <p className="eyebrow">Seasonal Menu</p>
            <h1>Το menu μας.</h1>
            <p>
              Μία εποχική έκφραση της σύγχρονης μεσογειακής κουζίνας, με
              ελληνικές πρώτες ύλες και καθαρές γεύσεις.
            </p>
          </div>
        </section>

        <section className="menu-nav-section">
          <div className="container menu-category-nav">
            {categories.map((category) => (
              <a href={`#${category.id}`} key={category.id}>
                {category.label}
              </a>
            ))}
          </div>
        </section>

        <section className="full-menu section">
          <div className="container">
            {categories.map((category, index) => (
              <section
                className="menu-category"
                id={category.id}
                key={category.id}
              >
                <div className="category-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="category-content">
                  <div className="category-heading">
                    <p className="eyebrow">{category.label}</p>
                    <h2>{category.label}</h2>
                  </div>

                  <div className="full-menu-list">
                    {category.items.map((item) => (
                      <article className="full-menu-item" key={item.name}>
                        <div>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </div>
                        <span>{item.price}</span>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            <div className="menu-note-box">
              <div>
                <p className="eyebrow">Good to know</p>
                <h3>Το menu εξελίσσεται μαζί με την εποχή.</h3>
              </div>
              <p>
                Ενημερώστε μας για αλλεργίες ή διατροφικές απαιτήσεις κατά την
                κράτηση. Ορισμένα πιάτα ενδέχεται να αλλάζουν ανάλογα με τη
                διαθεσιμότητα της ημέρας.
              </p>
            </div>

            <div className="menu-page-actions">
              <Link href="/#reservation" className="button">
                Κάντε κράτηση
              </Link>
              <Link href="/" className="button button-ghost">
                Επιστροφή στην αρχική
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              L<span>'</span>ORÉE
            </div>
            <p>
              Contemporary fine dining in Athens. Εποχική κουζίνα, κομψότητα
              και φιλοξενία υψηλού επιπέδου.
            </p>
          </div>

          <div>
            <h4>Ώρες λειτουργίας</h4>
            <p>Τρίτη – Κυριακή</p>
            <p>19:00 – 00:30</p>
          </div>

          <div>
            <h4>Reservations</h4>
            <p>+30 210 000 0000</p>
            <p>reservations@loree.gr</p>
          </div>
        </div>
      </footer>
    </>
  );
}
