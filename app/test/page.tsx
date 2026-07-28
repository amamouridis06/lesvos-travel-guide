"use client";

import { FormEvent, useState } from "react";

type TravelFormData = {
    fullName: string;
    email: string;
    phone: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    travelers: number;
    children: number;
    budget: string;
    travelStyle: string;
    accommodation: string;
    transportation: string;
    interests: string[];
    notes: string;
};

const interestOptions = [
    "Παραλίες",
    "Φύση",
    "Πολιτισμός",
    "Ιστορία",
    "Γαστρονομία",
    "Νυχτερινή ζωή",
    "Περιπέτεια",
    "Αγορές",
    "Χαλάρωση",
];

const initialFormData: TravelFormData = {
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: 1,
    children: 0,
    budget: "",
    travelStyle: "",
    accommodation: "",
    transportation: "",
    interests: [],
    notes: "",
};

export default function TravelGuidePage() {
    const [formData, setFormData] =
        useState<TravelFormData>(initialFormData);

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const updateField = <K extends keyof TravelFormData>(
        field: K,
        value: TravelFormData[K]
    ) => {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const toggleInterest = (interest: string) => {
        setFormData((current) => ({
            ...current,
            interests: current.interests.includes(interest)
                ? current.interests.filter((item) => item !== interest)
                : [...current.interests, interest],
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        if (
            !formData.fullName ||
            !formData.email ||
            !formData.destination ||
            !formData.departureDate ||
            !formData.returnDate
        ) {
            setError("Παρακαλώ συμπλήρωσε όλα τα υποχρεωτικά πεδία.");
            return;
        }

        if (
            new Date(formData.returnDate) <
            new Date(formData.departureDate)
        ) {
            setError(
                "Η ημερομηνία επιστροφής πρέπει να είναι μετά την αναχώρηση."
            );
            return;
        }

        // Εδώ μπορείς να στείλεις τα δεδομένα σε API ή βάση δεδομένων.
        console.log("Travel request:", formData);

        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const resetForm = () => {
        setFormData(initialFormData);
        setSubmitted(false);
        setError("");
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
                <div className="mx-auto max-w-3xl">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-3xl">
                            ✓
                        </div>

                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                            Το αίτημα καταχωρήθηκε
                        </p>

                        <h1 className="text-3xl font-bold md:text-4xl">
                            Ευχαριστούμε, {formData.fullName}!
                        </h1>

                        <p className="mt-4 leading-7 text-slate-300">
                            Λάβαμε τις πληροφορίες σου και μπορούμε τώρα να
                            δημιουργήσουμε ένα προσωποποιημένο πλάνο διακοπών για τον
                            προορισμό{" "}
                            <strong className="text-white">
                                {formData.destination}
                            </strong>
                            .
                        </p>

                        <div className="mt-8 grid gap-4 rounded-2xl bg-black/20 p-5 sm:grid-cols-2">
                            <SummaryItem
                                label="Ημερομηνίες"
                                value={`${formData.departureDate} – ${formData.returnDate}`}
                            />
                            <SummaryItem
                                label="Ταξιδιώτες"
                                value={`${formData.travelers} ενήλικες${
                                    formData.children
                                        ? `, ${formData.children} παιδιά`
                                        : ""
                                }`}
                            />
                            <SummaryItem
                                label="Budget"
                                value={formData.budget || "Δεν δηλώθηκε"}
                            />
                            <SummaryItem
                                label="Στυλ ταξιδιού"
                                value={formData.travelStyle || "Δεν δηλώθηκε"}
                            />
                            <SummaryItem
                                label="Ενδιαφέροντα"
                                value={
                                    formData.interests.length
                                        ? formData.interests.join(", ")
                                        : "Δεν δηλώθηκαν"
                                }
                            />
                            <SummaryItem
                                label="Επικοινωνία"
                                value={formData.email}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={resetForm}
                            className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                            Νέο αίτημα
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="relative overflow-hidden px-4 pb-16 pt-20">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Personal Travel Guide
            </span>

                        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                            Ας σχεδιάσουμε μαζί τις ιδανικές σου διακοπές
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            Συμπλήρωσε μερικές πληροφορίες για το ταξίδι σου και θα
                            δημιουργήσουμε ένα πλάνο προσαρμοσμένο στις ανάγκες, το
                            budget και τα ενδιαφέροντά σου.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10"
                    >
                        <FormSection
                            number="01"
                            title="Στοιχεία επικοινωνίας"
                            description="Για να μπορέσουμε να σου στείλουμε το ταξιδιωτικό πλάνο."
                        >
                            <div className="grid gap-5 md:grid-cols-2">
                                <InputField
                                    label="Ονοματεπώνυμο"
                                    required
                                    value={formData.fullName}
                                    onChange={(value) =>
                                        updateField("fullName", value)
                                    }
                                    placeholder="π.χ. Μαρία Παπαδοπούλου"
                                />

                                <InputField
                                    label="Email"
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(value) => updateField("email", value)}
                                    placeholder="maria@example.com"
                                />

                                <InputField
                                    label="Τηλέφωνο"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(value) => updateField("phone", value)}
                                    placeholder="+30 69..."
                                />
                            </div>
                        </FormSection>

                        <FormSection
                            number="02"
                            title="Πληροφορίες ταξιδιού"
                            description="Πού θέλεις να πας και ποιοι θα ταξιδέψουν μαζί σου;"
                        >
                            <div className="grid gap-5 md:grid-cols-2">
                                <InputField
                                    label="Προορισμός"
                                    required
                                    value={formData.destination}
                                    onChange={(value) =>
                                        updateField("destination", value)
                                    }
                                    placeholder="π.χ. Ιαπωνία, Κρήτη ή Ρώμη"
                                />

                                <InputField
                                    label="Ημερομηνία αναχώρησης"
                                    required
                                    type="date"
                                    value={formData.departureDate}
                                    onChange={(value) =>
                                        updateField("departureDate", value)
                                    }
                                />

                                <InputField
                                    label="Ημερομηνία επιστροφής"
                                    required
                                    type="date"
                                    min={formData.departureDate}
                                    value={formData.returnDate}
                                    onChange={(value) =>
                                        updateField("returnDate", value)
                                    }
                                />

                                <NumberField
                                    label="Αριθμός ενηλίκων"
                                    min={1}
                                    value={formData.travelers}
                                    onChange={(value) =>
                                        updateField("travelers", value)
                                    }
                                />

                                <NumberField
                                    label="Αριθμός παιδιών"
                                    min={0}
                                    value={formData.children}
                                    onChange={(value) =>
                                        updateField("children", value)
                                    }
                                />
                            </div>
                        </FormSection>

                        <FormSection
                            number="03"
                            title="Προτιμήσεις"
                            description="Μοιράσου μαζί μας τον τρόπο που σου αρέσει να ταξιδεύεις."
                        >
                            <div className="grid gap-5 md:grid-cols-2">
                                <SelectField
                                    label="Συνολικό budget"
                                    value={formData.budget}
                                    onChange={(value) => updateField("budget", value)}
                                    options={[
                                        "Έως €1.000",
                                        "€1.000 – €2.500",
                                        "€2.500 – €5.000",
                                        "Πάνω από €5.000",
                                        "Δεν έχω αποφασίσει",
                                    ]}
                                />

                                <SelectField
                                    label="Στυλ ταξιδιού"
                                    value={formData.travelStyle}
                                    onChange={(value) =>
                                        updateField("travelStyle", value)
                                    }
                                    options={[
                                        "Οικονομικό",
                                        "Άνετο",
                                        "Premium",
                                        "Πολυτελείας",
                                        "Backpacking",
                                    ]}
                                />

                                <SelectField
                                    label="Τύπος διαμονής"
                                    value={formData.accommodation}
                                    onChange={(value) =>
                                        updateField("accommodation", value)
                                    }
                                    options={[
                                        "Ξενοδοχείο",
                                        "Διαμέρισμα",
                                        "Resort",
                                        "Hostel",
                                        "Villa",
                                        "Δεν έχω προτίμηση",
                                    ]}
                                />

                                <SelectField
                                    label="Τρόπος μετακίνησης"
                                    value={formData.transportation}
                                    onChange={(value) =>
                                        updateField("transportation", value)
                                    }
                                    options={[
                                        "Ενοικιαζόμενο αυτοκίνητο",
                                        "Δημόσιες συγκοινωνίες",
                                        "Ταξί / Ιδιωτικές μεταφορές",
                                        "Περπάτημα / Ποδήλατο",
                                        "Συνδυασμός",
                                    ]}
                                />
                            </div>

                            <div className="mt-8">
                                <label className="mb-4 block text-sm font-semibold text-slate-200">
                                    Τι σε ενδιαφέρει περισσότερο;
                                </label>

                                <div className="flex flex-wrap gap-3">
                                    {interestOptions.map((interest) => {
                                        const selected =
                                            formData.interests.includes(interest);

                                        return (
                                            <button
                                                key={interest}
                                                type="button"
                                                aria-pressed={selected}
                                                onClick={() => toggleInterest(interest)}
                                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                                                    selected
                                                        ? "border-cyan-300 bg-cyan-300 text-slate-950"
                                                        : "border-white/15 bg-white/5 text-slate-200 hover:border-cyan-300/60 hover:bg-cyan-300/10"
                                                }`}
                                            >
                                                {interest}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </FormSection>

                        <FormSection
                            number="04"
                            title="Επιπλέον πληροφορίες"
                            description="Ανάφερε οτιδήποτε πρέπει να γνωρίζουμε για να οργανώσουμε καλύτερα το ταξίδι."
                        >
                            <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  Σχόλια ή ειδικές απαιτήσεις
                </span>

                                <textarea
                                    rows={6}
                                    value={formData.notes}
                                    onChange={(event) =>
                                        updateField("notes", event.target.value)
                                    }
                                    placeholder="π.χ. Διατροφικές προτιμήσεις, περιορισμένη κινητικότητα, επέτειος, δραστηριότητες που θέλεις οπωσδήποτε..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                                />
                            </label>
                        </FormSection>

                        {error && (
                            <div
                                role="alert"
                                className="mb-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                            >
                                {error}
                            </div>
                        )}

                        <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
                            <p className="max-w-xl text-sm leading-6 text-slate-400">
                                Με την υποβολή της φόρμας συμφωνείς να
                                χρησιμοποιηθούν τα στοιχεία σου αποκλειστικά για τη
                                δημιουργία του ταξιδιωτικού σου πλάνου.
                            </p>

                            <button
                                type="submit"
                                className="w-full shrink-0 rounded-xl bg-cyan-300 px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-4 focus:ring-cyan-300/30 sm:w-auto"
                            >
                                Δημιουργία πλάνου
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

type FormSectionProps = {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
};

function FormSection({
                         number,
                         title,
                         description,
                         children,
                     }: FormSectionProps) {
    return (
        <section className="mb-10 border-b border-white/10 pb-10 last:border-0">
            <div className="mb-6 flex gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-950">
          {number}
        </span>

                <div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                        {description}
                    </p>
                </div>
            </div>

            {children}
        </section>
    );
}

type InputFieldProps = {
    label: string;
    value: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    min?: string;
    onChange: (value: string) => void;
};

function InputField({
                        label,
                        value,
                        placeholder,
                        type = "text",
                        required = false,
                        min,
                        onChange,
                    }: InputFieldProps) {
    return (
        <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
          {required && <span className="ml-1 text-cyan-300">*</span>}
      </span>

            <input
                type={type}
                value={value}
                min={min}
                required={required}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
            />
        </label>
    );
}

type NumberFieldProps = {
    label: string;
    value: number;
    min: number;
    onChange: (value: number) => void;
};

function NumberField({
                         label,
                         value,
                         min,
                         onChange,
                     }: NumberFieldProps) {
    return (
        <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </span>

            <input
                type="number"
                min={min}
                value={value}
                onChange={(event) =>
                    onChange(Math.max(min, Number(event.target.value)))
                }
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
            />
        </label>
    );
}

type SelectFieldProps = {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
};

function SelectField({
                         label,
                         value,
                         options,
                         onChange,
                     }: SelectFieldProps) {
    return (
        <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </span>

            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
            >
                <option value="">Επίλεξε</option>

                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

type SummaryItemProps = {
    label: string;
    value: string;
};

function SummaryItem({ label, value }: SummaryItemProps) {
    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {label}
            </p>
            <p className="mt-1 text-sm text-slate-200">{value}</p>
        </div>
    );
}