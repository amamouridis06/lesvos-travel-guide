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