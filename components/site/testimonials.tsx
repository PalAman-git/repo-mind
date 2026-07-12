import { Reveal } from './reveal'

const testimonials = [
  {
    quote:
      'RepoMind cut our onboarding time from three weeks to two days. New hires open a PR on day one and actually understand what they are changing.',
    name: 'Ava Chen',
    role: 'VP Engineering, Northwind',
    initials: 'AC',
  },
  {
    quote:
      'The architecture graph is the first tool that made our legacy monolith feel approachable. It is now open on a second monitor all day.',
    name: 'Marcus Reid',
    role: 'Staff Engineer, Latch',
    initials: 'MR',
  },
  {
    quote:
      'AI Architecture Review caught a circular dependency our team had argued about for months — with a concrete fix. Genuinely impressive.',
    name: 'Priya Nair',
    role: 'Tech Lead, Fathom',
    initials: 'PN',
  },
  {
    quote:
      'As an open source maintainer, RepoMind helps contributors ramp themselves. My review queue has never been cleaner.',
    name: 'Diego Alvarez',
    role: 'Maintainer, OpenBase',
    initials: 'DA',
  },
  {
    quote:
      'We evaluated four tools. Nothing else came close to the clarity of RepoMind’s explanations and relationship mapping.',
    name: 'Sofia Larsson',
    role: 'Platform Lead, Tempo',
    initials: 'SL',
  },
  {
    quote:
      'It feels like having a senior engineer who has memorized the entire repo and is happy to answer every question.',
    name: 'Kenji Watanabe',
    role: 'Founder, Shipfast',
    initials: 'KW',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Testimonials</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted by engineers everywhere
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
              <figure className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/30">
                <blockquote className="text-pretty leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary ring-1 ring-inset ring-primary/25">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
