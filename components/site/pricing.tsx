import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

const plans = [
  {
    name: 'Hobby',
    price: '$0',
    period: '/mo',
    desc: 'For solo developers exploring public repositories.',
    features: [
      '5 public repositories',
      'Architecture graph',
      'AI explanations',
      'Community support',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$24',
    period: '/mo',
    desc: 'For professional developers and small teams.',
    features: [
      'Unlimited repositories',
      'Private repo support',
      'AI Architecture Review',
      'Learning Mode',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For organizations with advanced security needs.',
    features: [
      'SSO & SAML',
      'Self-hosted option',
      'Audit logs',
      'Dedicated support',
      'Custom integrations',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Pricing</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Start free. Upgrade when your team is ready. Cancel anytime.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border p-7 backdrop-blur-sm transition-all',
                  plan.highlighted
                    ? 'border-primary/50 bg-primary/[0.07] shadow-xl shadow-primary/10'
                    : 'border-border bg-card/50 hover:border-primary/30',
                )}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-7 bg-primary text-primary-foreground">
                    Most popular
                  </Badge>
                )}
                <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/90">
                      <span
                        className={cn(
                          'flex size-4.5 items-center justify-center rounded-full',
                          plan.highlighted
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground',
                        )}
                      >
                        <Check className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? 'default' : 'outline'}
                  className={cn(
                    'mt-8 h-11 w-full',
                    plan.highlighted && 'shadow-lg shadow-primary/20 [a]:hover:bg-primary/85',
                  )}
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
