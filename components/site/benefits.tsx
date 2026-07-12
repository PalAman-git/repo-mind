import { Building2, GitPullRequest, Rocket, Users } from 'lucide-react'
import { Reveal } from './reveal'

const benefits = [
  {
    icon: Rocket,
    audience: 'New developers',
    desc: 'Onboard to unfamiliar code in hours, not weeks. Guided tours and plain-English explanations replace tribal knowledge.',
    points: ['Guided onboarding', 'Instant context', 'Zero setup'],
  },
  {
    icon: Users,
    audience: 'Engineering teams',
    desc: 'Keep everyone aligned on architecture with living maps that update as the code evolves.',
    points: ['Shared understanding', 'Faster reviews', 'Less bus factor'],
  },
  {
    icon: GitPullRequest,
    audience: 'Open source contributors',
    desc: 'Understand any project fast so your first pull request lands with confidence and context.',
    points: ['Find good first issues', 'Trace dependencies', 'Cite sources'],
  },
  {
    icon: Building2,
    audience: 'Tech leads',
    desc: 'Spot risk, debt, and complexity early with AI reviews that scale across every repository you own.',
    points: ['Risk detection', 'Health tracking', 'Portfolio view'],
  },
]

export function Benefits() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Why RepoMind</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for everyone who touches code
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Whatever your role, RepoMind turns complex repositories into something
            you can actually reason about.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <Reveal key={b.audience} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-sm transition-colors hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent ring-1 ring-inset ring-accent/20">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">
                      {b.audience}
                    </h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {b.points.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
