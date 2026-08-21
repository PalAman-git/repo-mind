import type { ReactNode } from "react";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#3b82f620,transparent_55%)]" />

      {/* Secondary Glow */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      {children}
    </main>
  );
}