"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    title: "Languages & Frameworks",
    items: ["JavaScript/TypeScript", "React", "React Native", "Swift", "SwiftUI", "Kotlin", "Java", "Dart", "Flutter"],
  },
  {
    title: "State Management",
    items: ["Redux", "Redux Toolkit", "Zustand", "React Context", "Recoil"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express.js", "GraphQL", "REST API", "MongoDB", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    title: "Tooling & Testing",
    items: ["Git", "CI/CD (EAS Build, CodePipeline)", "Maestro E2E", "Detox", "Appium", "Nitro Modules"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-sm font-medium text-primary">Skills</span>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">What I work with</h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Card className="group h-full transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-base transition-colors duration-200 group-hover:text-primary">
                  {g.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal">
                    {item}
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
