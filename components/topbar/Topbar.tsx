import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background/70 px-8 backdrop-blur-xl">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-2">
        <Search size={18} className="text-muted-foreground" />

        <span className="text-sm text-muted-foreground">
          Search repositories...
        </span>
      </div>

      <button className="rounded-xl border border-border p-2 transition hover:bg-accent">
        <Bell size={18} />
      </button>
    </header>
  );
}