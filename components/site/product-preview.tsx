import {
  Bot,
  FileCode2,
  Folder,
  MessageSquare,
  Network,
  Search,
  Sparkles,
} from 'lucide-react'
import { Reveal } from './reveal'

const files = [
  { name: 'app', depth: 0, folder: true },
  { name: 'layout.tsx', depth: 1 },
  { name: 'page.tsx', depth: 1, active: true },
  { name: 'components', depth: 0, folder: true },
  { name: 'lib', depth: 0, folder: true },
  { name: 'engine.ts', depth: 1 },
]

export function ProductPreview() {
  return (
    <section id="docs" className="relative py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/5">
            {/* top bar */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-destructive/70" />
                <span className="size-3 rounded-full bg-chart-4/80" />
                <span className="size-3 rounded-full bg-chart-3/80" />
              </div>
              <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-lg bg-muted/60 px-3 py-1.5 text-xs text-muted-foreground">
                <Search className="size-3.5" />
                github.com/repomind/next-commerce
              </div>
            </div>

            <div className="grid grid-cols-12">
              {/* file tree */}
              <aside className="col-span-3 hidden border-r border-border p-3 md:block">
                <p className="px-2 pb-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Explorer
                </p>
                {files.map((f) => (
                  <div
                    key={f.name}
                    style={{ paddingLeft: `${f.depth * 14 + 8}px` }}
                    className={`flex items-center gap-1.5 rounded-md py-1.5 pr-2 font-mono text-[12px] ${
                      f.active
                        ? 'bg-primary/15 text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {f.folder ? (
                      <Folder className="size-3.5" />
                    ) : (
                      <FileCode2 className="size-3.5" />
                    )}
                    {f.name}
                  </div>
                ))}
              </aside>

              {/* main insight panel */}
              <div className="col-span-12 p-5 md:col-span-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Network className="size-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Architecture Overview
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="h-3 w-4/5 rounded-full bg-muted" />
                  <div className="h-3 w-full rounded-full bg-muted/70" />
                  <div className="h-3 w-3/5 rounded-full bg-muted/50" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: 'Modules', v: '42' },
                    { k: 'Coverage', v: '87%' },
                    { k: 'Health', v: 'A-' },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-xl border border-border bg-card/60 p-3"
                    >
                      <p className="text-lg font-semibold text-foreground">{s.v}</p>
                      <p className="text-[11px] text-muted-foreground">{s.k}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Next.js', 'Drizzle', 'Postgres', 'Stripe'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI chat panel */}
              <aside className="col-span-12 border-t border-border p-5 md:col-span-3 md:border-l md:border-t-0">
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Bot className="size-4 text-accent" />
                  Ask RepoMind
                </div>

                <div className="space-y-3">
                  <div className="ml-auto w-fit max-w-full rounded-2xl rounded-tr-sm bg-primary/15 px-3 py-2 text-[12px] text-foreground">
                    How does checkout work?
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-1 size-3.5 shrink-0 text-accent" />
                    <div className="space-y-2">
                      <div className="h-2.5 w-32 rounded-full bg-muted" />
                      <div className="h-2.5 w-24 rounded-full bg-muted/70" />
                      <div className="h-2.5 w-28 rounded-full bg-muted/50" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2 text-[12px] text-muted-foreground">
                  <MessageSquare className="size-3.5" />
                  Ask a question…
                </div>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
