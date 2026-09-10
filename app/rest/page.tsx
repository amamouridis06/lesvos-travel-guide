import React, { useState } from "react";
import type { FormEvent } from "react";

export default function LuxuryRestaurantSite() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const handleReservation = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const menuItems = [
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
            name: "Μοσχάρι Black Angus",
            description: "Καπνιστή σελινόριζα, μαύρη τρούφα, jus κόκκινου κρασιού",
            price: "€42",
        },
        {
            name: "Σοκολάτα Valrhona",
            description: "Καραμέλα miso, φουντούκι, παγωτό βανίλιας Μαδαγασκάρης",
            price: "€16",
        },
    ];

    const gallery = [
        {
            src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
            alt: "Fine dining restaurant table",
        },
        {
            src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=85",
            alt: "Elegant plated dish",
        },
        {
            src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
            alt: "Luxury restaurant interior",
        },
    ];

    return (
        <div className="site-shell">
            <style>{`
        :root {
          --ink: #0f100d;
          --ink-soft: #171813;
          --ivory: #f5f0e6;
          --cream: #e8dfcf;
          --gold: #b5965d;
          --gold-light: #d5c39e;
          --muted: #aaa294;
          --line: rgba(181, 150, 93, 0.28);
          --shadow: 0 28px 80px rgba(0, 0, 0, 0.3);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--ink);
        }

        body,
        button,
        input,
        select,
        textarea {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          cursor: pointer;
        }

        .site-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 80% 10%, rgba(181, 150, 93, 0.08), transparent 28%),
            var(--ink);
          color: var(--ivory);
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .navbar {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          background: rgba(15, 16, 13, 0.8);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(18px);
        }

        .nav-inner {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          letter-spacing: 0.08em;
        }

        .brand span {
          color: var(--gold);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ddd6ca;
        }

        .nav-links a {
          transition: color .2s ease;
        }

        .nav-links a:hover {
          color: var(--gold-light);
        }

        .nav-cta {
          border: 1px solid var(--gold);
          padding: 12px 18px;
        }

        .menu-toggle {
          display: none;
          border: 0;
          background: transparent;
          color: var(--ivory);
          font-size: 28px;
        }

        .hero {
          min-height: 100vh;
          display: grid;
          align-items: end;
          position: relative;
          overflow: hidden;
          padding-top: 82px;
        }

        .hero-media {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(8,8,6,.86) 0%, rgba(8,8,6,.58) 45%, rgba(8,8,6,.28) 70%, rgba(8,8,6,.45) 100%),
            linear-gradient(0deg, rgba(15,16,13,.94) 0%, transparent 40%),
            url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=88")
            center/cover no-repeat;
          transform: scale(1.01);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          padding: 150px 0 90px;
          max-width: 760px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--gold-light);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .eyebrow::before {
          content: "";
          width: 42px;
          height: 1px;
          background: var(--gold);
        }

        h1, h2, h3, p {
          margin-top: 0;
        }

        .hero h1 {
          margin-bottom: 22px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(54px, 8vw, 108px);
          line-height: .91;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .hero h1 em {
          color: var(--gold-light);
          font-weight: 400;
        }

        .hero-copy {
          max-width: 620px;
          color: #d8d1c5;
          line-height: 1.85;
          font-size: 17px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border: 1px solid var(--gold);
          background: var(--gold);
          color: #11120f;
          text-transform: uppercase;
          letter-spacing: .1em;
          font-size: 12px;
          font-weight: 700;
          transition: .2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
          background: var(--gold-light);
          border-color: var(--gold-light);
        }

        .button.ghost {
          background: transparent;
          color: var(--ivory);
          border-color: rgba(255,255,255,.3);
        }

        .button.ghost:hover {
          border-color: var(--gold);
          color: var(--gold-light);
          background: transparent;
        }

        .section {
          padding: 115px 0;
        }

        .section-light {
          background: var(--ivory);
          color: #1a1a16;
        }

        .section-heading {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          gap: 48px;
          margin-bottom: 56px;
        }

        .section-heading h2,
        .story-copy h2,
        .reservation-copy h2 {
          margin-bottom: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 5vw, 72px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .section-heading p,
        .story-copy p,
        .reservation-copy p {
          color: #777064;
          line-height: 1.8;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          gap: 72px;
          align-items: center;
        }

        .story-image {
          min-height: 630px;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .story-image img {
          width: 100%;
          height: 100%;
          min-height: 630px;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .story-image:hover img {
          transform: scale(1.03);
        }

        .story-copy .eyebrow {
          color: #8f7440;
        }

        .story-copy p {
          margin: 26px 0 0;
          font-size: 16px;
        }

        .story-note {
          margin-top: 32px;
          padding-top: 26px;
          border-top: 1px solid #d7cbb8;
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #4e4a43;
          font-size: 13px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .menu-section {
          position: relative;
          overflow: hidden;
        }

        .menu-section::before {
          content: "L'ORÉE";
          position: absolute;
          right: -30px;
          top: 60px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(90px, 15vw, 230px);
          color: rgba(255,255,255,.025);
          pointer-events: none;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid var(--line);
        }

        .menu-item {
          padding: 34px 0;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          border-bottom: 1px solid var(--line);
        }

        .menu-item:nth-child(odd) {
          padding-right: 38px;
          border-right: 1px solid var(--line);
        }

        .menu-item:nth-child(even) {
          padding-left: 38px;
        }

        .menu-item h3 {
          margin-bottom: 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 400;
        }

        .menu-item p {
          margin-bottom: 0;
          max-width: 430px;
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        .menu-price {
          color: var(--gold-light);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
        }

        .menu-footer {
          margin-top: 38px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          color: var(--muted);
          font-size: 13px;
        }

        .gallery {
          display: grid;
          grid-template-columns: 1.05fr .75fr .75fr;
          gap: 14px;
          min-height: 610px;
        }

        .gallery-card {
          position: relative;
          overflow: hidden;
          min-height: 400px;
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.045);
        }

        .gallery-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,16,13,.36), transparent 50%);
          pointer-events: none;
        }

        .reservation {
          background:
            linear-gradient(90deg, rgba(14,15,12,.94), rgba(14,15,12,.78)),
            url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85")
            center/cover no-repeat;
        }

        .reservation-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 78px;
          align-items: start;
        }

        .reservation-copy p {
          margin-top: 25px;
          color: #c7c0b4;
        }

        .contact-lines {
          margin-top: 38px;
          color: var(--gold-light);
          line-height: 2;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
        }

        .booking-form {
          background: rgba(245,240,230,.96);
          color: #1b1b17;
          padding: 38px;
          box-shadow: var(--shadow);
        }

        .booking-form h3 {
          margin-bottom: 26px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          font-weight: 400;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        .field.full {
          grid-column: 1 / -1;
        }

        .field label {
          color: #5d584f;
          font-size: 11px;
          letter-spacing: .1em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          border: 1px solid #cdc1ae;
          border-radius: 0;
          background: #fffdf8;
          color: #171713;
          padding: 14px 15px;
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .field textarea {
          min-height: 110px;
          resize: vertical;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(181,150,93,.12);
        }

        .form-submit {
          margin-top: 20px;
          width: 100%;
        }

        .success {
          margin-top: 18px;
          padding: 14px 16px;
          border: 1px solid rgba(78,119,80,.25);
          background: rgba(78,119,80,.08);
          color: #365e39;
          font-size: 14px;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,.08);
          padding: 55px 0 28px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 50px;
        }

        .footer-brand p {
          max-width: 430px;
          margin-top: 18px;
          color: #928b7f;
          line-height: 1.7;
          font-size: 14px;
        }

        .footer-col h4 {
          margin: 4px 0 18px;
          color: var(--gold-light);
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 11px;
        }

        .footer-col p,
        .footer-col a {
          color: #9c9589;
          font-size: 14px;
          line-height: 1.9;
        }

        .footer-bottom {
          margin-top: 48px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.06);
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #6f695f;
          font-size: 12px;
        }

        @media (max-width: 900px) {
          .nav-links {
            position: fixed;
            top: 82px;
            left: 0;
            right: 0;
            padding: 30px 24px 36px;
            flex-direction: column;
            align-items: stretch;
            background: rgba(15,16,13,.98);
            border-bottom: 1px solid var(--line);
            transform: translateY(-130%);
            opacity: 0;
            pointer-events: none;
            transition: .3s ease;
          }

          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .menu-toggle {
            display: block;
          }

          .section-heading,
          .story-grid,
          .reservation-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .story-grid {
            gap: 42px;
          }

          .section-heading {
            gap: 22px;
          }

          .menu-grid {
            grid-template-columns: 1fr;
          }

          .menu-item:nth-child(odd),
          .menu-item:nth-child(even) {
            padding-left: 0;
            padding-right: 0;
            border-right: 0;
          }

          .gallery {
            grid-template-columns: 1fr 1fr;
            min-height: auto;
          }

          .gallery-card:first-child {
            grid-column: 1 / -1;
            min-height: 500px;
          }
        }

        @media (max-width: 620px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .nav-inner {
            height: 72px;
          }

          .hero {
            padding-top: 72px;
          }

          .nav-links {
            top: 72px;
          }

          .hero-content {
            padding: 130px 0 62px;
          }

          .section {
            padding: 82px 0;
          }

          .hero h1 {
            font-size: clamp(52px, 17vw, 78px);
          }

          .section-heading h2,
          .story-copy h2,
          .reservation-copy h2 {
            font-size: 46px;
          }

          .story-image,
          .story-image img {
            min-height: 460px;
          }

          .story-note,
          .menu-footer,
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .gallery {
            grid-template-columns: 1fr;
          }

          .gallery-card:first-child {
            grid-column: auto;
            min-height: 420px;
          }

          .gallery-card {
            min-height: 360px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .field.full {
            grid-column: auto;
          }

          .booking-form {
            padding: 26px 20px;
          }
        }
      `}</style>

            <header className="navbar">
                <div className="container nav-inner">
                    <a className="brand" href="#home" onClick={closeMenu}>
                        L<span>'</span>ORÉE
                    </a>

                    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <a href="#story" onClick={closeMenu}>Η φιλοσοφία μας</a>
                        <a href="#menu" onClick={closeMenu}>Menu</a>
                        <a href="#gallery" onClick={closeMenu}>Gallery</a>
                        <a href="#contact" onClick={closeMenu}>Επικοινωνία</a>
                        <a className="nav-cta" href="#reservation" onClick={closeMenu}>
                            Κράτηση
                        </a>
                    </nav>

                    <button
                        className="menu-toggle"
                        aria-label="Άνοιγμα μενού"
                        onClick={() => setMenuOpen((current) => !current)}
                    >
                        {menuOpen ? "×" : "☰"}
                    </button>
                </div>
            </header>

            <main>
                <section className="hero" id="home">
                    <div className="hero-media" />
                    <div className="container hero-content">
                        <div className="eyebrow">Athens · Fine Dining</div>
                        <h1>
                            Η γεύση γίνεται <em>εμπειρία.</em>
                        </h1>
                        <p className="hero-copy">
                            Σύγχρονη μεσογειακή κουζίνα, εποχικά υλικά και μία βραδιά σχεδιασμένη
                            μέχρι την τελευταία λεπτομέρεια.
                        </p>

                        <div className="hero-actions">
                            <a className="button" href="#reservation">Κάντε κράτηση</a>
                            <a className="button ghost" href="#menu">Ανακαλύψτε το menu</a>
                        </div>
                    </div>
                </section>

                <section className="section section-light" id="story">
                    <div className="container story-grid">
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=86"
                                alt="Elegant restaurant interior"
                            />
                        </div>

                        <div className="story-copy">
                            <div className="eyebrow">Η φιλοσοφία μας</div>
                            <h2>Κομψότητα χωρίς υπερβολή.</h2>
                            <p>
                                Στο L'Orée, η ελληνική πρώτη ύλη συναντά τη σύγχρονη ευρωπαϊκή τεχνική.
                                Το menu αλλάζει με τις εποχές και κάθε πιάτο έχει σχεδιαστεί ώστε να
                                είναι καθαρό, ισορροπημένο και αξέχαστο.
                            </p>
                            <p>
                                Από το φως και τη μουσική, μέχρι το service και την επιλογή της wine
                                list, κάθε λεπτομέρεια λειτουργεί ως μέρος της ίδιας εμπειρίας.
                            </p>

                            <div className="story-note">
                                <span>Tasting Menu · 8 Στάδια</span>
                                <span>Wine Pairing διαθέσιμο</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section menu-section" id="menu">
                    <div className="container">
                        <div className="section-heading">
                            <div>
                                <div className="eyebrow">À la carte</div>
                                <h2>Υπογραφή του Chef</h2>
                            </div>
                            <p>
                                Ένα επιλεγμένο δείγμα από το εποχικό μας menu. Τα πιάτα προσαρμόζονται
                                ανάλογα με τη διαθεσιμότητα των καλύτερων υλικών της ημέρας.
                            </p>
                        </div>

                        <div className="menu-grid">
                            {menuItems.map((item) => (
                                <article className="menu-item" key={item.name}>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="menu-price">{item.price}</div>
                                </article>
                            ))}
                        </div>

                        <div className="menu-footer">
                            <span>Tasting Menu — €110 / άτομο</span>
                            <span>Wine Pairing — €55 / άτομο</span>
                        </div>
                    </div>
                </section>

                <section className="section section-light" id="gallery">
                    <div className="container">
                        <div className="section-heading">
                            <div>
                                <div className="eyebrow">Atmosphere</div>
                                <h2>Μία βραδιά στο L'Orée.</h2>
                            </div>
                            <p>
                                Ατμόσφαιρα με χαμηλό φωτισμό, φυσικά υλικά και διακριτική πολυτέλεια
                                για δείπνα που αξίζει να θυμάσαι.
                            </p>
                        </div>

                        <div className="gallery">
                            {gallery.map((image) => (
                                <div className="gallery-card" key={image.src}>
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section reservation" id="reservation">
                    <div className="container reservation-grid">
                        <div className="reservation-copy">
                            <div className="eyebrow">Reservations</div>
                            <h2>Το τραπέζι σας περιμένει.</h2>
                            <p>
                                Για ειδικές περιστάσεις, private dining ή διατροφικές απαιτήσεις,
                                ενημερώστε μας κατά την κράτηση.
                            </p>

                            <div className="contact-lines">
                                <div>+30 210 000 0000</div>
                                <div>reservations@loree.gr</div>
                                <div>Κολωνάκι, Αθήνα</div>
                            </div>
                        </div>

                        <form className="booking-form" onSubmit={handleReservation}>
                            <h3>Αίτημα κράτησης</h3>

                            <div className="form-grid">
                                <div className="field">
                                    <label htmlFor="name">Ονοματεπώνυμο</label>
                                    <input id="name" name="name" type="text" required />
                                </div>

                                <div className="field">
                                    <label htmlFor="phone">Τηλέφωνο</label>
                                    <input id="phone" name="phone" type="tel" required />
                                </div>

                                <div className="field">
                                    <label htmlFor="date">Ημερομηνία</label>
                                    <input id="date" name="date" type="date" required />
                                </div>

                                <div className="field">
                                    <label htmlFor="time">Ώρα</label>
                                    <select id="time" name="time" defaultValue="20:30" required>
                                        <option value="19:30">19:30</option>
                                        <option value="20:00">20:00</option>
                                        <option value="20:30">20:30</option>
                                        <option value="21:00">21:00</option>
                                        <option value="21:30">21:30</option>
                                        <option value="22:00">22:00</option>
                                    </select>
                                </div>

                                <div className="field">
                                    <label htmlFor="guests">Άτομα</label>
                                    <select id="guests" name="guests" defaultValue="2" required>
                                        <option value="1">1 άτομο</option>
                                        <option value="2">2 άτομα</option>
                                        <option value="3">3 άτομα</option>
                                        <option value="4">4 άτομα</option>
                                        <option value="5">5 άτομα</option>
                                        <option value="6">6 άτομα</option>
                                    </select>
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" required />
                                </div>

                                <div className="field full">
                                    <label htmlFor="notes">Σημειώσεις</label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        placeholder="Αλλεργίες, επέτειος, ειδικό αίτημα..."
                                    />
                                </div>
                            </div>

                            <button className="button form-submit" type="submit">
                                Αποστολή αιτήματος
                            </button>

                            {submitted && (
                                <div className="success">
                                    Ευχαριστούμε. Το αίτημά σας καταχωρήθηκε και θα επικοινωνήσουμε μαζί σας
                                    για επιβεβαίωση.
                                </div>
                            )}
                        </form>
                    </div>
                </section>
            </main>

            <footer id="contact">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="brand">
                                L<span>'</span>ORÉE
                            </div>
                            <p>
                                Contemporary fine dining in Athens. Εποχική κουζίνα, διακριτική πολυτέλεια
                                και φιλοξενία υψηλού επιπέδου.
                            </p>
                        </div>

                        <div className="footer-col">
                            <h4>Ώρες λειτουργίας</h4>
                            <p>Τρίτη – Κυριακή</p>
                            <p>19:00 – 00:30</p>
                            <p>Δευτέρα κλειστά</p>
                        </div>

                        <div className="footer-col">
                            <h4>Επικοινωνία</h4>
                            <p>Κολωνάκι, Αθήνα</p>
                            <a href="tel:+302100000000">+30 210 000 0000</a>
                            <br />
                            <a href="mailto:reservations@loree.gr">reservations@loree.gr</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>© {new Date().getFullYear()} L'Orée Restaurant.</span>
                        <span>Fine Dining · Athens</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
