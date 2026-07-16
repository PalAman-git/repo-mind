import {
  Brain,
  GitBranch,
  GraduationCap,
  LineChart,
  Network,
  ShieldCheck,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal } from './reveal'

const features = [
  {
    icon: Brain,
    title: 'AI Repository Understanding',
    desc: 'Point RepoMind at any repo and get a clear, plain-English summary of what it does, how it is structured, and where to start.',
  },
  {
    icon: Network,
    title: 'Interactive Architecture Graph',
    desc: 'Explore modules, services, and data flow in a live graph you can pan, zoom, and drill into — no more guessing.',
  },
  {
    icon: ShieldCheck,
    title: 'AI Architecture Review',
    desc: 'Surface anti-patterns, risky coupling, and security concerns with actionable, context-aware recommendations.',
  },
  {
    icon: GitBranch,
    title: 'Code Relationships',
    desc: 'Trace how functions, files, and packages depend on each other. Understand the blast radius before you refactor.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Mode',
    desc: 'Guided walkthroughs that teach you a codebase step by step, from entry points to the tricky edge cases.',
  },
  {
    icon: LineChart,
    title: 'Repository Insights',
    desc: 'Track complexity, hotspots, ownership, and health over time so your team always knows where debt is hiding.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Features</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to master a codebase
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From first clone to production review, RepoMind gives you a complete
            picture of any repository.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <Card className="group h-full rounded-2xl border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-inset ring-primary/20 transition-colors group-hover:bg-primary/20">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
