const companies = [
  "I-Invest",
  "Runway",
  "Nowpost",
  "ClickNSchedule",
  "HomeWise",
  "Smartract",
  "DreamLabs",
  "Rise",
];

export function Marquee() {
  const items = [...companies, ...companies];

  return (
    <section className="border-y border-border/60 bg-muted/30 py-8">
      <div className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Apps shipped for
      </div>
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={name + i}
              className="shrink-0 text-xl font-semibold tracking-tight text-muted-foreground/50 transition-colors duration-200 hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
