"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { icon: Mail, label: "adelekeblessingadewale@gmail.com", href: "mailto:adelekeblessingadewale@gmail.com" },
  { icon: Phone, label: "+234 816 903 6632", href: "tel:+2348169036632" },
  { icon: Linkedin, label: "linkedin.com/in/adewalebbdc", href: "https://linkedin.com/in/adewalebbdc" },
  { icon: Github, label: "github.com/blessingadewale", href: "https://github.com/blessingadewale" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-card px-8 py-16 text-center sm:px-16"
      >
        <span className="text-sm font-medium text-primary">Contact</span>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something together.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Open to new mobile engineering roles and freelance React Native work. Based in
          Lagos, Nigeria, working remote-first.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          Lagos, Nigeria
        </div>

        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild endIcon="arrow">
            <a href="mailto:adelekeblessingadewale@gmail.com">Say hello</a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <l.icon className="size-4" />
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
