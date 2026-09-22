import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10">
      <Separator className="mb-6" />
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <span>
          © {new Date().getFullYear()} Blessing Adeleke. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
