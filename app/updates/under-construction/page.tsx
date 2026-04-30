
import { motion } from "framer-motion";
import { Hammer, Sparkles, Clock, Wrench } from "lucide-react";

const floatingItems = [
    { icon: Sparkles, className: "left-8 top-10", delay: 0 },
    { icon: Wrench, className: "right-10 top-20", delay: 0.4 },
    { icon: Clock, className: "bottom-16 left-16", delay: 0.8 },
    { icon: Hammer, className: "bottom-10 right-20", delay: 1.2 },
];

const cardItems = [
    { icon: Clock, label: "Coming soon" },
    { icon: Sparkles, label: "New content" },
    { icon: Hammer, label: "In progress" },
];

export default function UnderConstructionPage() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12 text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]"
            />

            {floatingItems.map(({ icon: Icon, className, delay }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 0.22, scale: 1, y: [0, -18, 0] }}
                    transition={{
                        opacity: { duration: 0.6, delay },
                        scale: { duration: 0.6, delay },
                        y: {
                            duration: 4,
                            delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    className={`pointer-events-none absolute hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur md:block ${className}`}
                >
                    <Icon className="h-8 w-8" />
                </motion.div>
            ))}

            <section className="relative z-10 w-full max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 32, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-2xl backdrop-blur md:px-12"
                >
                    <motion.div
                        initial={{ rotate: -12, scale: 0.8 }}
                        animate={{ rotate: [0, -8, 8, 0], scale: 1 }}
                        transition={{
                            rotate: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.5 },
                        }}
                        className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 shadow-lg"
                    >
                        <Hammer className="h-10 w-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
                    >
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="h-4 w-4" />
                        </motion.span>
                        Something new is on the way
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-4xl font-bold tracking-tight md:text-6xl"
                    >
                        This page is under construction
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg"
                    >
                        We are currently working on this page and it will be available soon.
                        We are preparing something useful, polished, and worth the wait.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,
                                    delayChildren: 0.5,
                                },
                            },
                        }}
                        className="mx-auto mt-10 grid max-w-xl gap-4 md:grid-cols-3"
                    >
                        {cardItems.map(({ icon: Icon, label }) => (
                            <motion.div
                                key={label}
                                variants={{
                                    hidden: { opacity: 0, y: 24, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1 },
                                }}
                                whileHover={{ y: -6, scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.12, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Icon className="mx-auto mb-3 h-6 w-6 text-white/80" />
                                </motion.div>
                                <p className="text-sm font-medium text-white/90">{label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.85 }}
                        className="mt-10 text-sm text-white/50"
                    >
                        Thank you for your patience. Please check back soon.
                    </motion.p>
                </motion.div>
            </section>
        </main>
    );
}
