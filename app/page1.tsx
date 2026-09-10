import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const signatureDishes = [
  {
    name: "Χτένια Αιγαίου",
    description: "Κουνουπίδι, λεμόνι κονφί, beurre noisette, χαβιάρι",
    price: "€28",
  },
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
    name: "Valrhona",
    description: "Καραμέλα miso, φουντούκι, βανίλια Μαδαγασκάρης",
    price: "€16",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="eyebrow">Athens · Fine Dining</p>
            <h1>
              Η γεύση γίνεται <em>εμπειρία.</em>
            </h1>
            <p className="hero-copy">
              Σύγχρονη μεσογειακή κουζίνα, εποχικά υλικά και μία βραδιά
              σχεδιασμένη μέχρι την τελευταία λεπτομέρεια.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/#reservation">
                Κάντε κράτηση
              </Link>
              <Link className="button button-ghost" href="/menu">
                Ανακαλύψτε το menu
              </Link>
            </div>
          </div>
        </section>

        <section className="section light-section" id="story">
          <div className="container story-grid">
            <div className="story-photo">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=88"
                alt="Κομψός χώρος εστιατορίου"
              />
            </div>

            <div className="story-copy">
              <p className="eyebrow dark-eyebrow">Η φιλοσοφία μας</p>
              <h2>Κομψότητα χωρίς υπερβολή.</h2>
              <p>
                Στο L'Orée η ελληνική πρώτη ύλη συναντά τη σύγχρονη ευρωπαϊκή
                τεχνική. Το menu αλλάζει με τις εποχές και κάθε πιάτο
                σχεδιάζεται με καθαρή γεύση, ισορροπία και λεπτομέρεια.
              </p>
              <p>
                Ο χώρος, το service και η wine list λειτουργούν ως μία ενιαία
                εμπειρία — διακριτική, ήρεμη και ουσιαστική.
              </p>

              <div className="story-meta">
                <span>Tasting Menu · 8 στάδια</span>
                <span>Wine Pairing διαθέσιμο</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section signature-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Chef's Selection</p>
                <h2>Μία πρώτη γεύση.</h2>
              </div>
              <div className="section-heading-copy">
                <p>
                  Στην αρχική κρατάμε μόνο μερικά signature πιάτα. Το πλήρες
                  menu βρίσκεται στη δική του σελίδα, οργανωμένο ανά κατηγορία.
                </p>
                <Link href="/menu" className="text-link">
                  Δείτε ολόκληρο το menu <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="signature-grid">
              {signatureDishes.map((dish) => (
                <article className="dish-card" key={dish.name}>
                  <div>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                  </div>
                  <span>{dish.price}</span>
                </article>
              ))}
            </div>

            <div className="center-action">
              <Link className="button" href="/menu">
                Πλήρες Menu
              </Link>
            </div>
          </div>
        </section>

        <section className="section light-section" id="gallery">
          <div className="container">
            <div className="section-heading gallery-heading">
              <div>
                <p className="eyebrow dark-eyebrow">Atmosphere</p>
                <h2>Μία βραδιά στο L'Orée.</h2>
              </div>
              <p>
                Χαμηλός φωτισμός, φυσικά υλικά και διακριτική πολυτέλεια για
                δείπνα που αξίζει να θυμάσαι.
              </p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-card gallery-main">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1500&q=88"
                  alt="Fine dining τραπέζι"
                />
              </div>
              <div className="gallery-card">
                <img
                  src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1100&q=88"
                  alt="Πιάτο υψηλής γαστρονομίας"
                />
              </div>
              <div className="gallery-card">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=88"
                  alt="Luxury restaurant interior"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section reservation-section" id="reservation">
          <div className="container reservation-grid">
            <div>
              <p className="eyebrow">Reservations</p>
              <h2>Το τραπέζι σας περιμένει.</h2>
              <p className="reservation-text">
                Για private dining, ειδικές περιστάσεις ή διατροφικές
                απαιτήσεις, ενημερώστε μας κατά την κράτηση.
              </p>

              <div className="contact-details">
                <span>+30 210 000 0000</span>
                <span>reservations@loree.gr</span>
                <span>Κολωνάκι, Αθήνα</span>
              </div>
            </div>

            <form className="booking-form">
              <div className="form-grid">
                <label>
                  <span>Ονοματεπώνυμο</span>
                  <input type="text" name="name" required />
                </label>

                <label>
                  <span>Τηλέφωνο</span>
                  <input type="tel" name="phone" required />
                </label>

                <label>
                  <span>Ημερομηνία</span>
                  <input type="date" name="date" required />
                </label>

                <label>
                  <span>Ώρα</span>
                  <select name="time" defaultValue="20:30">
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                    <option>21:30</option>
                    <option>22:00</option>
                  </select>
                </label>

                <label>
                  <span>Άτομα</span>
                  <select name="guests" defaultValue="2">
                    <option value="1">1 άτομο</option>
                    <option value="2">2 άτομα</option>
                    <option value="3">3 άτομα</option>
                    <option value="4">4 άτομα</option>
                    <option value="5">5 άτομα</option>
                    <option value="6">6 άτομα</option>
                  </select>
                </label>

                <label>
                  <span>Email</span>
                  <input type="email" name="email" required />
                </label>
              </div>

              <label className="form-note">
                <span>Σημειώσεις</span>
                <textarea
                  name="notes"
                  placeholder="Αλλεργίες, επέτειος, ειδικό αίτημα..."
                />
              </label>

              <button className="button form-button" type="submit">
                Αποστολή αιτήματος
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact">
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
            <p>Δευτέρα κλειστά</p>
          </div>

          <div>
            <h4>Επικοινωνία</h4>
            <p>Κολωνάκι, Αθήνα</p>
            <p>+30 210 000 0000</p>
            <p>reservations@loree.gr</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 L'Orée Restaurant</span>
          <Link href="/menu">Menu</Link>
        </div>
      </footer>
    </>
  );
}
