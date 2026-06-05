import React, { useState } from "react";

/**
 * TransfersAndToursCompany.tsx
 * A ready-to-use React + TypeScript landing page for a transfers and tours company.
 *
 * Usage:
 * 1. Copy this file into your React/Vite/Next project.
 * 2. Import it where needed:
 *    import TransfersAndToursCompany from "./TransfersAndToursCompany";
 * 3. Render <TransfersAndToursCompany />.
 */

type Service = {
    title: string;
    description: string;
    icon: string;
};

type Tour = {
    title: string;
    duration: string;
    description: string;
    price: string;
};

type BookingForm = {
    fullName: string;
    email: string;
    phone: string;
    serviceType: "transfer" | "tour";
    pickupLocation: string;
    destination: string;
    date: string;
    passengers: string;
    message: string;
};

const services: Service[] = [
    {
        title: "Airport Transfers",
        description:
            "Άνετες και αξιόπιστες μεταφορές από και προς αεροδρόμια, λιμάνια και ξενοδοχεία.",
        icon: "✈️",
    },
    {
        title: "Private Transfers",
        description:
            "Ιδιωτικές μετακινήσεις για ζευγάρια, οικογένειες, εταιρικούς πελάτες και VIP επισκέπτες.",
        icon: "🚘",
    },
    {
        title: "Tours & Excursions",
        description:
            "Επιλεγμένες εκδρομές σε αξιοθέατα, παραλίες, χωριά, γαστρονομικούς προορισμούς και ιστορικά σημεία.",
        icon: "🗺️",
    },
];

const tours: Tour[] = [
    {
        title: "City Highlights Tour",
        duration: "4 ώρες",
        description:
            "Ανακαλύψτε τα πιο σημαντικά αξιοθέατα της πόλης με άνεση και ευελιξία.",
        price: "Από €120",
    },
    {
        title: "Beach Escape",
        duration: "6 ώρες",
        description:
            "Ημερήσια απόδραση σε μοναδικές παραλίες με ιδιωτική μεταφορά και στάσεις για φωτογραφίες.",
        price: "Από €180",
    },
    {
        title: "Custom Private Tour",
        duration: "Κατόπιν επιλογής",
        description:
            "Σχεδιάζουμε τη διαδρομή σύμφωνα με τις ανάγκες, τον χρόνο και τα ενδιαφέροντά σας.",
        price: "Κατόπιν αιτήματος",
    },
];

const initialForm: BookingForm = {
    fullName: "",
    email: "",
    phone: "",
    serviceType: "transfer",
    pickupLocation: "",
    destination: "",
    date: "",
    passengers: "1",
    message: "",
};

export default function TransfersAndToursCompany() {
    const [form, setForm] = useState<BookingForm>(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const updateField = <K extends keyof BookingForm>(field: K, value: BookingForm[K]) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        // Replace this with your preferred API call, email service, or CRM integration.
        console.log("Booking request:", form);
    };

    return (
        <main style={styles.page}>
            <section style={styles.hero}>
                <nav style={styles.navbar}>
                    <div style={styles.logo}>Aegean Transfers & Tours</div>
                    <div style={styles.navLinks}>
                        <a href="#services" style={styles.navLink}>Services</a>
                        <a href="#tours" style={styles.navLink}>Tours</a>
                        <a href="#booking" style={styles.navLink}>Booking</a>
                    </div>
                </nav>

                <div style={styles.heroContent}>
                    <p style={styles.eyebrow}>Private Transfers • Tours • Excursions</p>
                    <h1 style={styles.title}>Premium transfers and tailor-made tours</h1>
                    <p style={styles.subtitle}>
                        Αξιόπιστες μεταφορές και ιδιωτικές εκδρομές με επαγγελματίες οδηγούς,
                        άνετα οχήματα και εξυπηρέτηση υψηλού επιπέδου.
                    </p>
                    <div style={styles.heroActions}>
                        <a href="#booking" style={styles.primaryButton}>Request a Booking</a>
                        <a href="#services" style={styles.secondaryButton}>View Services</a>
                    </div>
                </div>
            </section>

            <section id="services" style={styles.section}>
                <p style={styles.sectionLabel}>What we offer</p>
                <h2 style={styles.sectionTitle}>Transfers and travel experiences</h2>
                <div style={styles.cardGrid}>
                    {services.map((service) => (
                        <article key={service.title} style={styles.card}>
                            <div style={styles.icon}>{service.icon}</div>
                            <h3 style={styles.cardTitle}>{service.title}</h3>
                            <p style={styles.cardText}>{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section style={styles.statsSection}>
                <div style={styles.statItem}>
                    <strong style={styles.statNumber}>24/7</strong>
                    <span style={styles.statLabel}>Availability</span>
                </div>
                <div style={styles.statItem}>
                    <strong style={styles.statNumber}>100%</strong>
                    <span style={styles.statLabel}>Private service</span>
                </div>
                <div style={styles.statItem}>
                    <strong style={styles.statNumber}>5★</strong>
                    <span style={styles.statLabel}>Guest experience</span>
                </div>
            </section>

            <section id="tours" style={styles.sectionAlt}>
                <p style={styles.sectionLabel}>Popular tours</p>
                <h2 style={styles.sectionTitle}>Explore more with a local driver</h2>
                <div style={styles.tourList}>
                    {tours.map((tour) => (
                        <article key={tour.title} style={styles.tourCard}>
                            <div>
                                <h3 style={styles.cardTitle}>{tour.title}</h3>
                                <p style={styles.cardText}>{tour.description}</p>
                            </div>
                            <div style={styles.tourMeta}>
                                <span>{tour.duration}</span>
                                <strong>{tour.price}</strong>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="booking" style={styles.bookingSection}>
                <div style={styles.bookingInfo}>
                    <p style={styles.sectionLabel}>Booking request</p>
                    <h2 style={styles.sectionTitle}>Plan your transfer or tour</h2>
                    <p style={styles.cardText}>
                        Συμπληρώστε τα στοιχεία σας και η ομάδα μας θα επικοινωνήσει μαζί σας
                        για επιβεβαίωση διαθεσιμότητας και τελικής τιμής.
                    </p>
                    <ul style={styles.checkList}>
                        <li>✔ Επαγγελματίες οδηγοί</li>
                        <li>✔ Καθαρά και άνετα οχήματα</li>
                        <li>✔ Ευέλικτα δρομολόγια και στάσεις</li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.twoColumns}>
                        <label style={styles.label}>
                            Full name
                            <input
                                required
                                value={form.fullName}
                                onChange={(event) => updateField("fullName", event.target.value)}
                                style={styles.input}
                                placeholder="Your name"
                            />
                        </label>
                        <label style={styles.label}>
                            Email
                            <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(event) => updateField("email", event.target.value)}
                                style={styles.input}
                                placeholder="name@example.com"
                            />
                        </label>
                    </div>

                    <div style={styles.twoColumns}>
                        <label style={styles.label}>
                            Phone
                            <input
                                required
                                value={form.phone}
                                onChange={(event) => updateField("phone", event.target.value)}
                                style={styles.input}
                                placeholder="+30 690 000 0000"
                            />
                        </label>
                        <label style={styles.label}>
                            Service type
                            <select
                                value={form.serviceType}
                                onChange={(event) => updateField("serviceType", event.target.value as BookingForm["serviceType"])}
                                style={styles.input}
                            >
                                <option value="transfer">Transfer</option>
                                <option value="tour">Tour</option>
                            </select>
                        </label>
                    </div>

                    <label style={styles.label}>
                        Pickup location
                        <input
                            required
                            value={form.pickupLocation}
                            onChange={(event) => updateField("pickupLocation", event.target.value)}
                            style={styles.input}
                            placeholder="Airport, hotel, port, address"
                        />
                    </label>

                    <label style={styles.label}>
                        Destination / Tour
                        <input
                            required
                            value={form.destination}
                            onChange={(event) => updateField("destination", event.target.value)}
                            style={styles.input}
                            placeholder="Destination or tour name"
                        />
                    </label>

                    <div style={styles.twoColumns}>
                        <label style={styles.label}>
                            Date
                            <input
                                required
                                type="date"
                                value={form.date}
                                onChange={(event) => updateField("date", event.target.value)}
                                style={styles.input}
                            />
                        </label>
                        <label style={styles.label}>
                            Passengers
                            <input
                                required
                                min="1"
                                type="number"
                                value={form.passengers}
                                onChange={(event) => updateField("passengers", event.target.value)}
                                style={styles.input}
                            />
                        </label>
                    </div>

                    <label style={styles.label}>
                        Message
                        <textarea
                            value={form.message}
                            onChange={(event) => updateField("message", event.target.value)}
                            style={{ ...styles.input, minHeight: 110, resize: "vertical" }}
                            placeholder="Tell us any special request, arrival time, flight number, or preferred stops."
                        />
                    </label>

                    <button type="submit" style={styles.submitButton}>Send Request</button>

                    {submitted && (
                        <p style={styles.successMessage}>
                            Ευχαριστούμε! Το αίτημά σας καταχωρήθηκε τοπικά. Συνδέστε τη φόρμα με API ή email service για αποστολή.
                        </p>
                    )}
                </form>
            </section>
        </main>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        margin: 0,
        minHeight: "100vh",
        background: "#f7f5f0",
        color: "#17202a",
        fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    hero: {
        minHeight: "720px",
        padding: "28px clamp(20px, 5vw, 80px)",
        background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(15, 82, 100, 0.86)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80') center/cover",
        color: "#fff",
    },
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
    },
    logo: {
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: "-0.03em",
    },
    navLinks: {
        display: "flex",
        gap: 18,
        flexWrap: "wrap",
    },
    navLink: {
        color: "#fff",
        textDecoration: "none",
        fontWeight: 600,
        opacity: 0.88,
    },
    heroContent: {
        maxWidth: 760,
        paddingTop: 150,
    },
    eyebrow: {
        marginBottom: 16,
        color: "#facc15",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
    },
    title: {
        margin: 0,
        fontSize: "clamp(44px, 7vw, 86px)",
        lineHeight: 0.94,
        letterSpacing: "-0.06em",
    },
    subtitle: {
        maxWidth: 620,
        marginTop: 24,
        fontSize: 20,
        lineHeight: 1.65,
        color: "rgba(255,255,255,0.86)",
    },
    heroActions: {
        display: "flex",
        gap: 14,
        marginTop: 34,
        flexWrap: "wrap",
    },
    primaryButton: {
        padding: "15px 24px",
        borderRadius: 999,
        background: "#facc15",
        color: "#111827",
        fontWeight: 800,
        textDecoration: "none",
    },
    secondaryButton: {
        padding: "15px 24px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.45)",
        color: "#fff",
        fontWeight: 800,
        textDecoration: "none",
    },
    section: {
        padding: "90px clamp(20px, 5vw, 80px)",
    },
    sectionAlt: {
        padding: "90px clamp(20px, 5vw, 80px)",
        background: "#fff",
    },
    sectionLabel: {
        margin: 0,
        color: "#0f766e",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
    },
    sectionTitle: {
        margin: "10px 0 32px",
        fontSize: "clamp(32px, 5vw, 52px)",
        lineHeight: 1.02,
        letterSpacing: "-0.05em",
    },
    cardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 22,
    },
    card: {
        padding: 28,
        background: "#fff",
        borderRadius: 28,
        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
    },
    icon: {
        fontSize: 38,
        marginBottom: 16,
    },
    cardTitle: {
        margin: "0 0 10px",
        fontSize: 24,
        letterSpacing: "-0.03em",
    },
    cardText: {
        margin: 0,
        color: "#5b6472",
        fontSize: 16,
        lineHeight: 1.7,
    },
    statsSection: {
        margin: "0 clamp(20px, 5vw, 80px) 90px",
        padding: 34,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 20,
        borderRadius: 32,
        background: "#0f172a",
        color: "#fff",
    },
    statItem: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        textAlign: "center",
    },
    statNumber: {
        fontSize: 42,
    },
    statLabel: {
        color: "rgba(255,255,255,0.72)",
    },
    tourList: {
        display: "grid",
        gap: 18,
    },
    tourCard: {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 24,
        alignItems: "center",
        padding: 28,
        border: "1px solid #e5e7eb",
        borderRadius: 26,
        background: "#fbfaf7",
    },
    tourMeta: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-end",
        whiteSpace: "nowrap",
        color: "#0f766e",
    },
    bookingSection: {
        padding: "90px clamp(20px, 5vw, 80px)",
        display: "grid",
        gridTemplateColumns: "minmax(260px, 0.8fr) minmax(280px, 1.2fr)",
        gap: 42,
        alignItems: "start",
    },
    bookingInfo: {
        position: "sticky",
        top: 24,
    },
    checkList: {
        marginTop: 24,
        paddingLeft: 0,
        listStyle: "none",
        color: "#17202a",
        lineHeight: 2,
        fontWeight: 700,
    },
    form: {
        padding: 28,
        background: "#fff",
        borderRadius: 28,
        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
    },
    twoColumns: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
    },
    label: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginBottom: 16,
        fontWeight: 800,
        color: "#263241",
    },
    input: {
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid #d7dce3",
        borderRadius: 16,
        padding: "14px 15px",
        fontSize: 16,
        outline: "none",
        fontFamily: "inherit",
        background: "#fbfaf7",
    },
    submitButton: {
        width: "100%",
        border: 0,
        borderRadius: 18,
        padding: "16px 20px",
        background: "#0f766e",
        color: "#fff",
        fontSize: 17,
        fontWeight: 900,
        cursor: "pointer",
    },
    successMessage: {
        marginTop: 16,
        padding: 14,
        borderRadius: 16,
        background: "#ecfdf5",
        color: "#047857",
        fontWeight: 700,
    },
};
