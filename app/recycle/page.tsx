import React from "react";
import { motion } from "framer-motion";
import { Camera, ScanBarcode, MapPin, Recycle, CheckCircle2, Leaf, Smartphone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
    {
        icon: Camera,
        title: "Αναγνώριση με φωτογραφία",
        text: "Φωτογραφίζεις ένα αντικείμενο και η εφαρμογή προτείνει τον σωστό κάδο.",
    },
    {
        icon: ScanBarcode,
        title: "Σκανάρισμα barcode",
        text: "Σκανάρεις προϊόντα και βλέπεις οδηγίες για τη συσκευασία τους.",
    },
    {
        icon: MapPin,
        title: "Χάρτης ειδικών κάδων",
        text: "Βρίσκεις κοντινά σημεία για μπαταρίες, ρούχα, γυαλί και ηλεκτρικές συσκευές.",
    },
    {
        icon: CheckCircle2,
        title: "Απλές οδηγίες",
        text: "Μαθαίνεις αν πρέπει να ξεπλύνεις, να χωρίσεις ή να αφαιρέσεις μέρη της συσκευασίας.",
    },
];

const steps = [
    "Φωτογραφίζεις ή σκανάρεις το αντικείμενο.",
    "Η εφαρμογή αναγνωρίζει υλικό και τύπο συσκευασίας.",
    "Βλέπεις άμεσα σε ποιον κάδο πρέπει να πεταχτεί.",
];

export default function RecyclingLandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-lime-50 text-slate-900">
            <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <div className="flex items-center gap-2 font-bold text-emerald-700">
                    <div className="rounded-2xl bg-emerald-600 p-2 text-white shadow-sm">
                        <Recycle size={22} />
                    </div>
                    <span className="text-xl">EcoBin</span>
                </div>
                <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
                    <a href="#how" className="hover:text-emerald-700">Πώς δουλεύει</a>
                    <a href="#features" className="hover:text-emerald-700">Λειτουργίες</a>
                    <a href="#interest" className="hover:text-emerald-700">Ενδιαφέρον</a>
                </nav>
                <Button className="rounded-full bg-emerald-600 px-5 hover:bg-emerald-700">Δοκίμασέ το</Button>
            </header>

            <main>
                <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                            <Leaf size={16} />
                            Ανακύκλωση πιο εύκολη από ποτέ
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
                            Δεν ξέρεις σε ποιον κάδο πάει κάτι;
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Το EcoBin σε βοηθά να ανακυκλώνεις σωστά. Φωτογραφίζεις ή σκανάρεις ένα αντικείμενο και μαθαίνεις αμέσως σε ποιον κάδο πρέπει να πεταχτεί.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button className="rounded-full bg-emerald-600 px-7 py-6 text-base hover:bg-emerald-700">
                                Δηλώνω ενδιαφέρον <ArrowRight className="ml-2" size={18} />
                            </Button>
                            <Button variant="outline" className="rounded-full border-emerald-200 px-7 py-6 text-base text-emerald-700 hover:bg-emerald-50">
                                Μάθε περισσότερα
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative"
                    >
                        <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-lime-200 blur-3xl" />
                        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-200 blur-3xl" />
                        <Card className="relative mx-auto max-w-sm rounded-[2rem] border-0 bg-white/90 p-4 shadow-2xl backdrop-blur">
                            <CardContent className="p-0">
                                <div className="rounded-[1.5rem] bg-slate-950 p-3 text-white">
                                    <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-700" />
                                    <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-lime-400 p-6">
                                        <Smartphone className="mb-8" size={34} />
                                        <p className="text-sm opacity-90">Αναγνώριση αντικειμένου</p>
                                        <h3 className="mt-2 text-2xl font-bold">Πλαστικό μπουκάλι</h3>
                                    </div>
                                    <div className="mt-4 space-y-3 rounded-3xl bg-white p-5 text-slate-900">
                                        <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4">
                                            <span className="font-semibold">Σωστός κάδος</span>
                                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">Μπλε</span>
                                        </div>
                                        <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                                            Ξέπλυνε τη συσκευασία και συμπίεσέ την πριν την πετάξεις.
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </section>

                <section id="how" className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">Πώς δουλεύει</h2>
                        <p className="mt-4 text-slate-600">Μια απλή διαδικασία σε τρία βήματα για να μειώνεται η σύγχυση στην ανακύκλωση.</p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <Card key={step} className="rounded-3xl border-0 shadow-sm">
                                <CardContent className="p-7">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
                                        {index + 1}
                                    </div>
                                    <p className="text-lg font-semibold leading-7">{step}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="features" className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <Card key={feature.title} className="rounded-3xl border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                    <CardContent className="p-7">
                                        <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                                            <Icon size={26} />
                                        </div>
                                        <h3 className="text-lg font-bold">{feature.title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-16">
                    <div className="overflow-hidden rounded-[2rem] bg-emerald-700 px-8 py-12 text-white shadow-xl md:px-14">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-bold md:text-4xl">Γιατί έχει σημασία;</h2>
                                <p className="mt-5 text-lg leading-8 text-emerald-50">
                                    Η σωστή ανακύκλωση μειώνει τα λάθη στους κάδους, βοηθά τους δήμους και κάνει την καθημερινή οικολογική επιλογή πιο εύκολη για όλους.
                                </p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl bg-white/15 p-6 backdrop-blur">
                                    <p className="text-4xl font-extrabold">1 scan</p>
                                    <p className="mt-2 text-emerald-50">για άμεση απάντηση</p>
                                </div>
                                <div className="rounded-3xl bg-white/15 p-6 backdrop-blur">
                                    <p className="text-4xl font-extrabold">0 άγχος</p>
                                    <p className="mt-2 text-emerald-50">για τον σωστό κάδο</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="interest" className="mx-auto max-w-3xl px-6 py-16 pb-24 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Θα το χρησιμοποιούσες;</h2>
                    <p className="mt-4 text-slate-600">
                        Βοήθησέ μας να καταλάβουμε αν μια τέτοια εφαρμογή θα ήταν χρήσιμη στην καθημερινότητα.
                    </p>
                    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-lg">
                        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                            <input
                                type="email"
                                placeholder="Το email σου"
                                className="rounded-full border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
                            />
                            <Button className="rounded-full bg-emerald-600 px-7 py-6 hover:bg-emerald-700">Θέλω να το δοκιμάσω</Button>
                        </div>
                        <p className="mt-3 text-xs text-slate-500">Δεν στέλνουμε spam. Μόνο ενημέρωση για το πρώτο demo.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
