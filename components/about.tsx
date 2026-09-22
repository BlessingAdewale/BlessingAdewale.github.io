"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary">About</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Mobile engineering, end to end.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <p>
            I&apos;m a Senior Mobile Engineer with 6+ years of experience shipping React
            Native applications end to end &mdash; from architecture and app store
            submission down to the native modules that make an app feel fast. I&apos;ve
            been the sole mobile engineer on multiple products, which means I own
            everything: design decisions, state management, CI/CD, and performance.
          </p>
          <p>
            Currently I build fintech features for an investment platform and lead mobile
            architecture for a logistics and delivery platform, alongside earlier work
            across e-commerce, real-time chat, community management, and estate
            administration apps. Beyond React Native and TypeScript, I work comfortably in
            Kotlin, SwiftUI, and Flutter, and I&apos;m equally at home defining the API
            contracts my apps consume with NestJS and PostgreSQL.
          </p>
          <p>
            I care about shipping fast without breaking things &mdash; tight CI/CD
            pipelines, meaningful test coverage, and a codebase the next engineer can
            actually read.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
