"use client";

import {
    useEffect,
    useMemo,
    useState,
    type CSSProperties,
    type FormEvent,
} from "react";

type Service = {
    title: string;
    description: string;
    icon: string;
};

type Tour = {
    title: string;
    duration: string;
    description: string;
    image: string;
};

type FleetItem = {
    title: string;
    passengers: string;
    luggage: string;
    image: string;
};

type BookingForm = {
    fullName: string;
    email: string;
    phone: string;
    serviceType: "airport-transfer" | "private-transfer" | "private-tour";
    pickupLocation: string;
    destination: string;
    date: string;
    time: string;
    passengers: string;
    message: string;
};

type Breakpoint = "mobile" | "tablet" | "desktop";

const services: Service[] = [
    {
        title: "Airport & Port Transfers",
        description:
            "Reliable private transfers from airports, ports, hotels and villas with meet & greet service.",
        icon: "✈️",
    },
    {
        title: "Private Chauffeur Service",
        description:
            "Discreet, comfortable and flexible transportation for couples, families and business guests.",
        icon: "🚘",
    },
    {
        title: "Tailor-Made Tours",
        description:
            "Private tours designed around your schedule, interests and preferred stops.",
        icon: "🗺️",
    },
];

const tours: Tour[] = [
    {
        title: "Signature City Tour",
        duration: "4 hours",
        description:
            "Explore the highlights, hidden corners and panoramic viewpoints with a local driver.",
        image:
            "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Coastal Escape",
        duration: "6 hours",
        description:
            "A relaxed private day trip to beaches, seaside villages and scenic photo stops.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Food & Culture Experience",
        duration: "5 hours",
        description:
            "Visit traditional villages, local markets and authentic places for food lovers.",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    },
];

const fleet: FleetItem[] = [
    {
        title: "Premium Sedan",
        passengers: "Up to 3 passengers",
        luggage: "2 large suitcases",
        image:
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Luxury Minivan",
        passengers: "Up to 7 passengers",
        luggage: "7 suitcases",
        image:
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    },
];

const initialForm: BookingForm = {
    fullName: "",
    email: "",
    phone: "",
    serviceType: "airport-transfer",
    pickupLocation: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1",
    message: "",
};

function useBreakpoint(): Breakpoint {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth;

            if (width < 720) {
                setBreakpoint("mobile");
            } else if (width < 1024) {
                setBreakpoint("tablet");
            } else {
                setBreakpoint("desktop");
            }
        };

        updateBreakpoint();
        window.addEventListener("resize", updateBreakpoint);

        return () => window.removeEventListener("resize", updateBreakpoint);
    }, []);

    return breakpoint;
}

export default function TransfersAndToursCompanyPremiumResponsive() {
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === "mobile";
    const isTablet = breakpoint === "tablet";
    const styles = useMemo(() => createStyles(breakpoint), [breakpoint]);

    const [form, setForm] = useState<BookingForm>(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const updateField = <K extends keyof BookingForm,>(
        field: K,
        value: BookingForm[K]
    ) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const closeMobileMenu = () => setMobileMenuOpen(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        console.log("Booking request:", form);
    };

    return (
        <main style={styles.page}>
            <section style={styles.hero}>
                <nav style={styles.navbar}>
                    <a href="#home" style={styles.brand} onClick={closeMobileMenu}>
                        <span style={styles.brandMark}>A</span>
                        <span>
              Aegean<span style={styles.brandAccent}>Way</span>
            </span>
                    </a>

                    {isMobile ? (
                        <button
                            type="button"
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen((open) => !open)}
                            style={styles.menuButton}
                        >
                            {mobileMenuOpen ? "✕" : "☰"}
                        </button>
                    ) : (
                        <NavLinks styles={styles} onNavigate={closeMobileMenu} />
                    )}
                </nav>

                {isMobile && mobileMenuOpen && (
                    <div style={styles.mobileMenu}>
                        <NavLinks styles={styles} onNavigate={closeMobileMenu} />
                    </div>
                )}

                <div id="home" style={styles.heroGrid}>
                    <div style={styles.heroText}>
                        <p style={styles.eyebrow}>Private transfers & curated tours</p>
                        <h1 style={styles.heroTitle}>Travel in comfort. Discover more.</h1>
                        <p style={styles.heroSubtitle}>
                            Premium airport transfers, private chauffeur services and
                            tailor-made tours with professional local drivers.
                        </p>

                        <div style={styles.heroActions}>
                            <a href="#booking" style={styles.primaryButton}>
                                Request a Quote
                            </a>
                            <a href="#tours" style={styles.secondaryButton}>
                                Explore Tours
                            </a>
                        </div>

                        <div style={styles.trustBar}>
                            <div style={styles.trustItem}>
                                <strong style={styles.trustNumber}>24/7</strong>
                                <span style={styles.trustLabel}>Availability</span>
                            </div>
                            <div style={styles.trustItem}>
                                <strong style={styles.trustNumber}>5★</strong>
                                <span style={styles.trustLabel}>Guest experience</span>
                            </div>
                            <div style={styles.trustItem}>
                                <strong style={styles.trustNumber}>100%</strong>
                                <span style={styles.trustLabel}>Private rides</span>
                            </div>
                        </div>
                    </div>

                    {!isMobile && (
                        <aside style={styles.heroCard}>
                            <div style={styles.heroCardImage} />
                            <div style={styles.heroCardContent}>
                                <p style={styles.cardOverline}>Popular request</p>
                                <h2 style={styles.heroCardTitle}>Airport to Hotel Transfer</h2>
                                <p style={styles.heroCardText}>
                                    Meet & greet, luggage assistance and direct private transfer
                                    to your accommodation.
                                </p>
                                <a href="#booking" style={styles.cardLink}>
                                    Plan your ride →
                                </a>
                            </div>
                        </aside>
                    )}
                </div>
            </section>

            <section id="services" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <p style={styles.sectionLabel}>Services</p>
                    <h2 style={styles.sectionTitle}>Everything you need for a smooth trip</h2>
                    <p style={styles.sectionDescription}>
                        From arrival to departure, we make every journey easy, punctual and
                        comfortable.
                    </p>
                </div>

                <div style={styles.serviceGrid}>
                    {services.map((service) => (
                        <article key={service.title} style={styles.serviceCard}>
                            <div style={styles.serviceIcon}>{service.icon}</div>
                            <h3 style={styles.cardTitle}>{service.title}</h3>
                            <p style={styles.cardText}>{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="tours" style={styles.darkSection}>
                <div style={styles.sectionHeaderLight}>
                    <p style={styles.sectionLabelGold}>Curated tours</p>
                    <h2 style={styles.sectionTitleLight}>Private experiences, your way</h2>
                    <p style={styles.sectionDescriptionLight}>
                        Choose a ready-made itinerary or let us design a custom route for
                        your day.
                    </p>
                </div>

                <div style={styles.tourGrid}>
                    {tours.map((tour) => (
                        <article key={tour.title} style={styles.tourCard}>
                            <div
                                style={{
                                    ...styles.tourImage,
                                    backgroundImage: `url(${tour.image})`,
                                }}
                            />
                            <div style={styles.tourContent}>
                                <span style={styles.tourDuration}>{tour.duration}</span>
                                <h3 style={styles.tourTitle}>{tour.title}</h3>
                                <p style={styles.tourText}>{tour.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="fleet" style={styles.section}>
                <div style={styles.splitHeader}>
                    <div>
                        <p style={styles.sectionLabel}>Fleet</p>
                        <h2 style={styles.sectionTitle}>Clean, comfortable vehicles</h2>
                    </div>
                    <p style={styles.sectionDescriptionNarrow}>
                        Choose the right vehicle for your group, luggage and travel style.
                    </p>
                </div>

                <div style={styles.fleetGrid}>
                    {fleet.map((vehicle) => (
                        <article key={vehicle.title} style={styles.fleetCard}>
                            <div
                                style={{
                                    ...styles.fleetImage,
                                    backgroundImage: `url(${vehicle.image})`,
                                }}
                            />
                            <div style={styles.fleetContent}>
                                <h3 style={styles.cardTitle}>{vehicle.title}</h3>
                                <div style={styles.fleetMeta}>
                                    <span style={styles.metaPill}>{vehicle.passengers}</span>
                                    <span style={styles.metaPill}>{vehicle.luggage}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section style={styles.testimonialSection}>
                <blockquote style={styles.quote}>
                    “Excellent service, professional driver and a beautiful private tour.
                    Everything was punctual, clean and perfectly organized.”
                </blockquote>
                <p style={styles.quoteAuthor}>— Guest Review</p>
            </section>

            <section id="booking" style={styles.bookingSection}>
                <div style={styles.bookingPanel}>
                    <p style={styles.sectionLabelGold}>Booking request</p>
                    <h2 style={styles.bookingTitle}>Tell us about your trip</h2>
                    <p style={styles.bookingText}>
                        Send your request and we will contact you with availability,
                        estimated duration and final price.
                    </p>

                    <div style={styles.contactBox}>
                        <span>Need fast assistance?</span>
                        <strong>WhatsApp / Phone: +30 690 000 0000</strong>
                    </div>
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
                            Service
                            <select
                                value={form.serviceType}
                                onChange={(event) =>
                                    updateField(
                                        "serviceType",
                                        event.target.value as BookingForm["serviceType"]
                                    )
                                }
                                style={styles.input}
                            >
                                <option value="airport-transfer">Airport / Port transfer</option>
                                <option value="private-transfer">Private transfer</option>
                                <option value="private-tour">Private tour</option>
                            </select>
                        </label>
                    </div>

                    <div style={styles.twoColumns}>
                        <label style={styles.label}>
                            Pickup location
                            <input
                                required
                                value={form.pickupLocation}
                                onChange={(event) =>
                                    updateField("pickupLocation", event.target.value)
                                }
                                style={styles.input}
                                placeholder="Airport, hotel, port, address"
                            />
                        </label>

                        <label style={styles.label}>
                            Destination
                            <input
                                required
                                value={form.destination}
                                onChange={(event) =>
                                    updateField("destination", event.target.value)
                                }
                                style={styles.input}
                                placeholder="Destination or tour name"
                            />
                        </label>
                    </div>

                    <div style={isTablet ? styles.twoColumns : styles.threeColumns}>
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
                            Time
                            <input
                                required
                                type="time"
                                value={form.time}
                                onChange={(event) => updateField("time", event.target.value)}
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
                                onChange={(event) =>
                                    updateField("passengers", event.target.value)
                                }
                                style={styles.input}
                            />
                        </label>
                    </div>

                    <label style={styles.label}>
                        Additional details
                        <textarea
                            value={form.message}
                            onChange={(event) => updateField("message", event.target.value)}
                            style={styles.textarea}
                            placeholder="Flight number, luggage, child seats, stops, special requests..."
                        />
                    </label>

                    <button type="submit" style={styles.submitButton}>
                        Send Booking Request
                    </button>

                    {submitted && (
                        <p style={styles.successMessage}>
                            Thank you. Your request has been recorded locally. Connect this
                            form with your API, email service or CRM to receive submissions.
                        </p>
                    )}
                </form>
            </section>
        </main>
    );
}

function NavLinks({
                      styles,
                      onNavigate,
                  }: {
    styles: Record<string, CSSProperties>;
    onNavigate: () => void;
}) {
    return (
        <div style={styles.navLinks}>
            <a href="#services" style={styles.navLink} onClick={onNavigate}>
                Services
            </a>
            <a href="#tours" style={styles.navLink} onClick={onNavigate}>
                Tours
            </a>
            <a href="#fleet" style={styles.navLink} onClick={onNavigate}>
                Fleet
            </a>
            <a href="#booking" style={styles.navButton} onClick={onNavigate}>
                Book Now
            </a>
        </div>
    );
}

function createStyles(breakpoint: Breakpoint): Record<string, CSSProperties> {
    const isMobile = breakpoint === "mobile";
    const isTablet = breakpoint === "tablet";
    const pagePadding = isMobile ? "20px" : isTablet ? "36px" : "86px";
    const sectionPadding = isMobile
        ? "64px 20px"
        : isTablet
            ? "78px 36px"
            : "96px clamp(20px, 5vw, 86px)";

    return {
        page: {
            minHeight: "100vh",
            margin: 0,
            overflowX: "hidden",
            background: "#f6f1e8",
            color: "#17202a",
            fontFamily:
                "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        hero: {
            minHeight: isMobile ? "auto" : isTablet ? "760px" : "780px",
            padding: `${isMobile ? "18px" : "28px"} ${pagePadding} ${
                isMobile ? "58px" : "80px"
            }`,
            background:
                "linear-gradient(135deg, rgba(8, 13, 25, 0.96), rgba(13, 52, 70, 0.9)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1900&q=80') center/cover",
            color: "#ffffff",
        },
        navbar: {
            position: "relative",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
        },
        brand: {
            display: "inline-flex",
            alignItems: "center",
            gap: isMobile ? 9 : 12,
            color: "#ffffff",
            textDecoration: "none",
            fontSize: isMobile ? 19 : 23,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            minWidth: 0,
        },
        brandMark: {
            width: isMobile ? 36 : 42,
            height: isMobile ? 36 : 42,
            display: "grid",
            flex: "0 0 auto",
            placeItems: "center",
            borderRadius: "50%",
            background: "#d8b46a",
            color: "#111827",
            fontWeight: 900,
        },
        brandAccent: {
            color: "#d8b46a",
        },
        menuButton: {
            width: 42,
            height: 42,
            border: "1px solid rgba(255,255,255,0.24)",
            borderRadius: 14,
            background: "rgba(255,255,255,0.1)",
            color: "#ffffff",
            fontSize: 22,
            fontWeight: 900,
            cursor: "pointer",
        },
        mobileMenu: {
            position: "relative",
            zIndex: 4,
            marginTop: 14,
            padding: 14,
            borderRadius: 22,
            background: "rgba(8, 13, 25, 0.92)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.24)",
            backdropFilter: "blur(14px)",
        },
        navLinks: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            gap: isMobile ? 8 : 20,
            flexWrap: "wrap",
        },
        navLink: {
            color: "rgba(255,255,255,0.88)",
            textDecoration: "none",
            fontWeight: 800,
            padding: isMobile ? "12px 14px" : undefined,
            borderRadius: isMobile ? 14 : undefined,
            background: isMobile ? "rgba(255,255,255,0.06)" : undefined,
        },
        navButton: {
            padding: isMobile ? "13px 14px" : "12px 18px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#111827",
            textDecoration: "none",
            fontWeight: 900,
            textAlign: "center",
        },
        heroGrid: {
            display: "grid",
            gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                    ? "minmax(0, 1fr) minmax(260px, 0.72fr)"
                    : "minmax(280px, 1.1fr) minmax(280px, 0.75fr)",
            gap: isMobile ? 30 : isTablet ? 34 : 52,
            alignItems: "center",
            paddingTop: isMobile ? 72 : isTablet ? 92 : 104,
        },
        heroText: {
            maxWidth: 820,
        },
        eyebrow: {
            margin: "0 0 16px",
            color: "#d8b46a",
            fontSize: isMobile ? 11 : 13,
            fontWeight: 900,
            letterSpacing: isMobile ? "0.12em" : "0.18em",
            textTransform: "uppercase",
        },
        heroTitle: {
            margin: 0,
            maxWidth: 780,
            fontSize: isMobile ? "46px" : isTablet ? "64px" : "clamp(58px, 7vw, 92px)",
            lineHeight: isMobile ? 0.98 : 0.94,
            letterSpacing: isMobile ? "-0.06em" : "-0.075em",
        },
        heroSubtitle: {
            maxWidth: 650,
            margin: isMobile ? "20px 0 0" : "28px 0 0",
            color: "rgba(255,255,255,0.78)",
            fontSize: isMobile ? 17 : 20,
            lineHeight: isMobile ? 1.6 : 1.75,
        },
        heroActions: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 12,
            marginTop: isMobile ? 28 : 36,
            flexWrap: "wrap",
            width: isMobile ? "100%" : undefined,
        },
        primaryButton: {
            padding: "16px 25px",
            borderRadius: 999,
            background: "#d8b46a",
            color: "#111827",
            textDecoration: "none",
            fontWeight: 900,
            textAlign: "center",
            boxShadow: "0 18px 34px rgba(216, 180, 106, 0.22)",
        },
        secondaryButton: {
            padding: "16px 25px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.24)",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 900,
            textAlign: "center",
            backdropFilter: "blur(12px)",
        },
        trustBar: {
            marginTop: isMobile ? 34 : 46,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(100px, 1fr))",
            gap: isMobile ? 10 : 16,
            maxWidth: 620,
        },
        trustItem: {
            padding: isMobile ? "14px 16px" : undefined,
            borderRadius: isMobile ? 18 : undefined,
            background: isMobile ? "rgba(255,255,255,0.08)" : undefined,
            border: isMobile ? "1px solid rgba(255,255,255,0.1)" : undefined,
        },
        trustNumber: {
            display: "block",
            fontSize: isMobile ? 24 : 30,
            color: "#ffffff",
        },
        trustLabel: {
            display: "block",
            marginTop: 5,
            color: "rgba(255,255,255,0.62)",
            fontSize: 14,
            fontWeight: 700,
        },
        heroCard: {
            overflow: "hidden",
            borderRadius: isTablet ? 28 : 34,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 34px 80px rgba(0,0,0,0.28)",
            backdropFilter: "blur(18px)",
        },
        heroCardImage: {
            height: isTablet ? 220 : 260,
            background:
                "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80') center/cover",
        },
        heroCardContent: {
            padding: isTablet ? 22 : 28,
        },
        cardOverline: {
            margin: 0,
            color: "#d8b46a",
            fontSize: 13,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
        },
        heroCardTitle: {
            margin: "10px 0",
            fontSize: isTablet ? 24 : 28,
            letterSpacing: "-0.04em",
        },
        heroCardText: {
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.65,
        },
        cardLink: {
            display: "inline-block",
            marginTop: 10,
            color: "#ffffff",
            fontWeight: 900,
            textDecoration: "none",
        },
        section: {
            padding: sectionPadding,
        },
        sectionHeader: {
            maxWidth: 760,
            marginBottom: isMobile ? 30 : 42,
        },
        sectionHeaderLight: {
            maxWidth: 760,
            marginBottom: isMobile ? 30 : 42,
            color: "#ffffff",
        },
        sectionLabel: {
            margin: 0,
            color: "#9b6b28",
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
        },
        sectionLabelGold: {
            margin: 0,
            color: "#d8b46a",
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
        },
        sectionTitle: {
            margin: "10px 0 0",
            fontSize: isMobile ? 34 : isTablet ? 44 : "clamp(34px, 5vw, 58px)",
            lineHeight: 1.02,
            letterSpacing: "-0.055em",
        },
        sectionTitleLight: {
            margin: "10px 0 0",
            fontSize: isMobile ? 34 : isTablet ? 44 : "clamp(34px, 5vw, 58px)",
            lineHeight: 1.02,
            letterSpacing: "-0.055em",
            color: "#ffffff",
        },
        sectionDescription: {
            maxWidth: 620,
            marginTop: 16,
            color: "#697386",
            fontSize: isMobile ? 16 : 18,
            lineHeight: 1.7,
        },
        sectionDescriptionLight: {
            maxWidth: 620,
            marginTop: 16,
            color: "rgba(255,255,255,0.68)",
            fontSize: isMobile ? 16 : 18,
            lineHeight: 1.7,
        },
        sectionDescriptionNarrow: {
            maxWidth: 440,
            color: "#697386",
            fontSize: isMobile ? 16 : 18,
            lineHeight: 1.7,
            margin: 0,
        },
        splitHeader: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: 20,
            alignItems: isMobile ? "stretch" : "end",
            marginBottom: isMobile ? 30 : 42,
            flexWrap: "wrap",
        },
        serviceGrid: {
            display: "grid",
            gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(250px, 1fr))",
            gap: isMobile ? 16 : 22,
        },
        serviceCard: {
            padding: isMobile ? 22 : 30,
            borderRadius: isMobile ? 24 : 30,
            background: "rgba(255,255,255,0.86)",
            border: "1px solid rgba(23, 32, 42, 0.08)",
            boxShadow: "0 18px 50px rgba(23, 32, 42, 0.08)",
        },
        serviceIcon: {
            width: isMobile ? 56 : 64,
            height: isMobile ? 56 : 64,
            display: "grid",
            placeItems: "center",
            borderRadius: 20,
            background: "#efe3ca",
            fontSize: isMobile ? 26 : 30,
            marginBottom: isMobile ? 18 : 22,
        },
        cardTitle: {
            margin: "0 0 10px",
            fontSize: isMobile ? 23 : 25,
            letterSpacing: "-0.04em",
        },
        cardText: {
            margin: 0,
            color: "#697386",
            fontSize: 16,
            lineHeight: 1.7,
        },
        darkSection: {
            padding: sectionPadding,
            background: "#101827",
        },
        tourGrid: {
            display: "grid",
            gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                    ? "repeat(2, minmax(0, 1fr))"
                    : "repeat(auto-fit, minmax(270px, 1fr))",
            gap: isMobile ? 18 : 24,
        },
        tourCard: {
            overflow: "hidden",
            borderRadius: isMobile ? 24 : 30,
            background: "#182235",
            border: "1px solid rgba(255,255,255,0.08)",
        },
        tourImage: {
            height: isMobile ? 205 : 250,
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        tourContent: {
            padding: isMobile ? 22 : 26,
        },
        tourDuration: {
            display: "inline-flex",
            marginBottom: 14,
            padding: "7px 11px",
            borderRadius: 999,
            background: "rgba(216, 180, 106, 0.14)",
            color: "#d8b46a",
            fontSize: 13,
            fontWeight: 900,
        },
        tourTitle: {
            margin: "0 0 10px",
            color: "#ffffff",
            fontSize: isMobile ? 23 : 25,
            letterSpacing: "-0.04em",
        },
        tourText: {
            margin: 0,
            color: "rgba(255,255,255,0.64)",
            lineHeight: 1.7,
        },
        fleetGrid: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: isMobile ? 18 : 24,
        },
        fleetCard: {
            overflow: "hidden",
            borderRadius: isMobile ? 26 : 32,
            background: "#ffffff",
            boxShadow: "0 20px 55px rgba(23, 32, 42, 0.08)",
        },
        fleetImage: {
            height: isMobile ? 220 : 290,
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        fleetContent: {
            padding: isMobile ? 22 : 26,
        },
        fleetMeta: {
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginTop: 16,
        },
        metaPill: {
            padding: "8px 11px",
            borderRadius: 999,
            background: "#f6f1e8",
            color: "#4b5563",
            fontSize: 13,
            fontWeight: 800,
        },
        testimonialSection: {
            margin: isMobile
                ? "0 20px 64px"
                : isTablet
                    ? "0 36px 78px"
                    : "0 clamp(20px, 5vw, 86px) 96px",
            padding: isMobile ? "34px 22px" : "54px clamp(24px, 5vw, 70px)",
            borderRadius: isMobile ? 28 : 38,
            background: "#ffffff",
            boxShadow: "0 20px 55px rgba(23, 32, 42, 0.08)",
            textAlign: "center",
        },
        quote: {
            margin: 0,
            fontSize: isMobile ? 25 : "clamp(26px, 4vw, 42px)",
            lineHeight: 1.24,
            letterSpacing: "-0.05em",
            fontWeight: 900,
        },
        quoteAuthor: {
            margin: "18px 0 0",
            color: "#9b6b28",
            fontWeight: 900,
        },
        bookingSection: {
            padding: sectionPadding,
            display: "grid",
            gridTemplateColumns: isMobile || isTablet
                ? "1fr"
                : "minmax(280px, 0.75fr) minmax(300px, 1.25fr)",
            gap: isMobile ? 20 : 32,
            background: "#0f172a",
            color: "#ffffff",
        },
        bookingPanel: {
            padding: isMobile ? 24 : 34,
            borderRadius: isMobile ? 26 : 32,
            background:
                "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.045))",
            border: "1px solid rgba(255,255,255,0.1)",
            alignSelf: "start",
            position: isMobile || isTablet ? "static" : "sticky",
            top: 22,
        },
        bookingTitle: {
            margin: "10px 0 14px",
            fontSize: isMobile ? 34 : isTablet ? 44 : "clamp(34px, 5vw, 56px)",
            lineHeight: 1.02,
            letterSpacing: "-0.06em",
        },
        bookingText: {
            color: "rgba(255,255,255,0.68)",
            lineHeight: 1.75,
            fontSize: isMobile ? 16 : 17,
        },
        contactBox: {
            marginTop: 24,
            padding: isMobile ? 18 : 20,
            borderRadius: 24,
            background: "rgba(216, 180, 106, 0.12)",
            border: "1px solid rgba(216, 180, 106, 0.24)",
            display: "grid",
            gap: 8,
            overflowWrap: "anywhere",
        },
        form: {
            padding: isMobile ? 20 : 30,
            borderRadius: isMobile ? 26 : 32,
            background: "#ffffff",
            color: "#17202a",
            minWidth: 0,
        },
        twoColumns: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
            gap: isMobile ? 0 : 16,
        },
        threeColumns: {
            display: "grid",
            gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                    ? "repeat(2, minmax(0, 1fr))"
                    : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? 0 : 16,
        },
        label: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: 16,
            color: "#273241",
            fontSize: 14,
            fontWeight: 900,
            minWidth: 0,
        },
        input: {
            width: "100%",
            minHeight: 50,
            boxSizing: "border-box",
            border: "1px solid #e0e4ea",
            borderRadius: 16,
            padding: "14px 15px",
            background: "#f8fafc",
            color: "#17202a",
            fontSize: 16,
            outline: "none",
            fontFamily: "inherit",
            appearance: "none",
        },
        textarea: {
            width: "100%",
            minHeight: isMobile ? 116 : 128,
            boxSizing: "border-box",
            border: "1px solid #e0e4ea",
            borderRadius: 16,
            padding: "14px 15px",
            background: "#f8fafc",
            color: "#17202a",
            fontSize: 16,
            outline: "none",
            fontFamily: "inherit",
            resize: "vertical",
        },
        submitButton: {
            width: "100%",
            minHeight: 54,
            border: 0,
            borderRadius: 18,
            padding: "17px 22px",
            background: "#d8b46a",
            color: "#111827",
            fontSize: 17,
            fontWeight: 950,
            cursor: "pointer",
        },
        successMessage: {
            marginTop: 16,
            padding: 14,
            borderRadius: 16,
            background: "#ecfdf5",
            color: "#047857",
            fontWeight: 800,
            lineHeight: 1.5,
        },
    };
}
