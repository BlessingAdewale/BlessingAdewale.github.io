"use client";

import { motion } from "framer-motion";

const roles = [
  {
    title: "Senior Mobile Engineer (React Native)",
    company: "I-Invest",
    period: "Oct 2025 — Present",
    points: [
      "Building fintech features for a large-scale investment platform: portfolio tracking, KYC/onboarding, trading flows, and asset-backed lending.",
      "Collaborating with backend teams to design API contracts across financial products.",
    ],
  },
  {
    title: "Lead Mobile Engineer (Runway) — FullStack",
    company: "LaunchQ (TixTango)",
    period: "Aug 2026 — Present",
    points: [
      "Owning end-to-end mobile architecture and performance scaling for a next-gen logistics platform.",
      "Architected real-time delivery tracking with WebSocket location syncing and custom native modules.",
    ],
  },
  {
    title: "Senior Mobile Engineer (React Native)",
    company: "Nowpost",
    period: "Aug 2025 — Present",
    points: [
      "Sole mobile engineer building the Shop Owners and Driver apps from scratch for a logistics & delivery platform.",
      "Shipped real-time order tracking, live location updates, and driver wallet/payout features.",
    ],
  },
  {
    title: "Senior Mobile Engineer (React Native & Expo)",
    company: "ClickNSchedule",
    period: "Jan 2025 — Jul 2025",
    points: [
      "Rebuilt app architecture and shipped real-time chat, custom onboarding, and calendar scheduling flows.",
    ],
  },
  {
    title: "Senior React Native & Expo Specialist",
    company: "HomeWise",
    period: "Jan 2025 — May 2025",
    points: [
      "Built an estate-management app with live polls, contribution tracking, and animated project dashboards.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-sm font-medium text-primary">Experience</span>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Where I&apos;ve worked</h2>
      </motion.div>

      <div className="relative border-l border-border pl-8">
        {roles.map((r, i) => (
          <motion.div
            key={r.company + r.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background transition-transform duration-200 group-hover:scale-125" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                {r.title}
              </h3>
              <span className="text-sm text-muted-foreground">{r.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">{r.company}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:text-base">
              {r.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
