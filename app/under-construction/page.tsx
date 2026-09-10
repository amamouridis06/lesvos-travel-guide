// "use client";
// import { motion } from "framer-motion";
// import { Hammer, Sparkles, Clock, Wrench } from "lucide-react";
//
// const floatingItems = [
//     { icon: Sparkles, className: "left-8 top-10", delay: 0 },
//     { icon: Wrench, className: "right-10 top-20", delay: 0.4 },
//     { icon: Clock, className: "bottom-16 left-16", delay: 0.8 },
//     { icon: Hammer, className: "bottom-10 right-20", delay: 1.2 },
// ];
//
// const cardItems = [
//     { icon: Clock, label: "Coming soon" },
//     { icon: Sparkles, label: "New content" },
//     { icon: Hammer, label: "In progress" },
// ];
//
// export default function UnderConstructionPage() {
//     return (
//         <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12 text-white">
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//                 className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]"
//             />
//
//             {floatingItems.map(({ icon: Icon, className, delay }, index) => (
//                 <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.6, y: 20 }}
//                     animate={{ opacity: 0.22, scale: 1, y: [0, -18, 0] }}
//                     transition={{
//                         opacity: { duration: 0.6, delay },
//                         scale: { duration: 0.6, delay },
//                         y: {
//                             duration: 4,
//                             delay,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         },
//                     }}
//                     className={`pointer-events-none absolute hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur md:block ${className}`}
//                 >
//                     <Icon className="h-8 w-8" />
//                 </motion.div>
//             ))}
//
//             <section className="relative z-10 w-full max-w-3xl text-center">
//                 <motion.div
//                     initial={{ opacity: 0, y: 32, scale: 0.96 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                     className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-2xl backdrop-blur md:px-12"
//                 >
//                     <motion.div
//                         initial={{ rotate: -12, scale: 0.8 }}
//                         animate={{ rotate: [0, -8, 8, 0], scale: 1 }}
//                         transition={{
//                             rotate: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
//                             scale: { duration: 0.5 },
//                         }}
//                         className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 shadow-lg"
//                     >
//                         <Hammer className="h-10 w-10" />
//                     </motion.div>
//
//                     <motion.div
//                         initial={{ opacity: 0, y: 14 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.15 }}
//                         className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
//                     >
//                         <motion.span
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                         >
//                             <Sparkles className="h-4 w-4" />
//                         </motion.span>
//                         Something new is on the way
//                     </motion.div>
//
//                     <motion.h1
//                         initial={{ opacity: 0, y: 18 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         className="text-4xl font-bold tracking-tight md:text-6xl"
//                     >
//                         This page is under construction
//                     </motion.h1>
//
//                     <motion.p
//                         initial={{ opacity: 0, y: 18 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.35 }}
//                         className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg"
//                     >
//                         We are currently working on this page and it will be available soon.
//                         We are preparing something useful, polished, and worth the wait.
//                     </motion.p>
//
//                     <motion.div
//                         initial="hidden"
//                         animate="visible"
//                         variants={{
//                             hidden: {},
//                             visible: {
//                                 transition: {
//                                     staggerChildren: 0.12,
//                                     delayChildren: 0.5,
//                                 },
//                             },
//                         }}
//                         className="mx-auto mt-10 grid max-w-xl gap-4 md:grid-cols-3"
//                     >
//                         {cardItems.map(({ icon: Icon, label }) => (
//                             <motion.div
//                                 key={label}
//                                 variants={{
//                                     hidden: { opacity: 0, y: 24, scale: 0.95 },
//                                     visible: { opacity: 1, y: 0, scale: 1 },
//                                 }}
//                                 whileHover={{ y: -6, scale: 1.03 }}
//                                 transition={{ type: "spring", stiffness: 260, damping: 18 }}
//                                 className="rounded-2xl border border-white/10 bg-white/5 p-5"
//                             >
//                                 <motion.div
//                                     animate={{ scale: [1, 1.12, 1] }}
//                                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                                 >
//                                     <Icon className="mx-auto mb-3 h-6 w-6 text-white/80" />
//                                 </motion.div>
//                                 <p className="text-sm font-medium text-white/90">{label}</p>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.85 }}
//                         className="mt-10 text-sm text-white/50"
//                     >
//                         Thank you for your patience. Please check back soon.
//                     </motion.p>
//                 </motion.div>
//             </section>
//         </main>
//     );
// }

"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowLeft,
    Clock3,
    Compass,
    Sparkles,
} from "lucide-react";

export default function UnderConstructionPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />

                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />

                <motion.div
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                x: [0, 30, 0],
                                y: [0, -20, 0],
                            }
                    }
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl"
                />

                <motion.div
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                x: [0, -20, 0],
                                y: [0, 30, 0],
                            }
                    }
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
                />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-12">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between"
                >
                    <a
                        href="/"
                        className="group inline-flex items-center gap-3 text-white"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-sm backdrop-blur">
                            <Compass className="h-5 w-5" />
                        </div>

                        <div className="leading-tight">
                            <p className="text-sm font-semibold tracking-wide">
                                Travel Guide
                            </p>
                            <p className="text-xs text-white/40">
                                Discover your next destination
                            </p>
                        </div>
                    </a>

                    <a
                        href="/"
                        className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white sm:inline-flex"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </a>
                </motion.header>

                {/* Content */}
                <section className="flex flex-1 items-center justify-center py-16 md:py-20">
                    <div className="w-full max-w-4xl">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.985,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] shadow-[0_40px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                        >
                            {/* Top accent */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            <div className="px-6 py-10 sm:px-10 md:px-14 md:py-14 lg:px-16">
                                {/* Status */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.5 }}
                                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-300/10 bg-sky-300/[0.06] px-3.5 py-2"
                                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-300" />
                  </span>

                                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-sky-100/80">
                    Currently in development
                  </span>
                                </motion.div>

                                <div className="grid gap-10 lg:grid-cols-[1fr_240px] lg:items-end">
                                    {/* Main copy */}
                                    <div>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="mb-4 text-sm font-medium text-white/45"
                                        >
                                            Something new is coming
                                        </motion.p>

                                        <motion.h1
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.25, duration: 0.6 }}
                                            className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl md:text-6xl"
                                        >
                                            We&apos;re building something worth exploring.
                                        </motion.h1>

                                        <motion.p
                                            initial={{ opacity: 0, y: 14 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.35, duration: 0.6 }}
                                            className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg md:leading-8"
                                        >
                                            This section of our travel guide is currently being
                                            prepared. Soon, you&apos;ll be able to discover even more
                                            places, experiences and useful travel recommendations.
                                        </motion.p>
                                    </div>

                                    {/* Decorative icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="hidden lg:block"
                                    >
                                        <div className="ml-auto flex h-40 w-40 items-center justify-center rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl">
                                            <motion.div
                                                animate={
                                                    shouldReduceMotion
                                                        ? undefined
                                                        : {
                                                            y: [0, -6, 0],
                                                        }
                                                }
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]"
                                            >
                                                <Sparkles className="h-9 w-9 text-sky-200/90" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Divider */}
                                <div className="my-10 h-px bg-white/[0.08]" />

                                {/* Bottom */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                                            <Clock3 className="h-4 w-4 text-white/60" />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-white/85">
                                                Coming soon
                                            </p>
                                            <p className="mt-0.5 text-sm text-white/40">
                                                We&apos;re putting the finishing touches on this page.
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="/"
                                        className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-white/90 sm:w-auto"
                                    >
                                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                        Explore the guide
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Footer note */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="mt-6 text-center text-xs text-white/30"
                        >
                            Thank you for your patience while we prepare this experience.
                        </motion.p>
                    </div>
                </section>
            </div>
        </main>
    );
}