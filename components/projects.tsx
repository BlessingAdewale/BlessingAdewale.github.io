"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "I-Invest",
    tag: "Fintech",
    description:
      "Investment platform mobile app under Parthian Partners. Portfolio tracking across equities, bonds and mutual funds, KYC onboarding, live trading graphs, and asset-backed lending.",
    stack: ["React Native", "TypeScript", "GraphQL", "REST API"],
  },
  {
    title: "Nowpost — Shop Owners & Driver Apps",
    tag: "Logistics",
    description:
      "Built from scratch as the sole mobile engineer. Real-time order tracking, live location updates, and driver wallet/payout systems for a logistics & delivery platform.",
    stack: ["React Native", "Expo", "Redux Toolkit", "Firebase"],
  },
  {
    title: "Runway",
    tag: "Logistics",
    description:
      "Leading mobile architecture for a next-generation delivery platform: WebSocket-driven real-time tracking, monorepo governance, and custom native modules for performance-critical processing.",
    stack: ["React Native", "Socket.io", "Zustand", "Nitro Modules"],
  },
  {
    title: "HomeWise",
    tag: "PropTech",
    description:
      "Estate-management app for residents and executives: live polls & voting, contribution tracking, and animated project dashboards.",
    stack: ["React Native", "Recoil", "react-native-reanimated"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-sm font-medium text-primary">Projects</span>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Card className="group h-full transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit border-primary/40 text-primary">
                  {p.tag}
                </Badge>
                <CardTitle className="transition-colors duration-200 group-hover:text-primary">
                  {p.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-0">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="font-normal">
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
