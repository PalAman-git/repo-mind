import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'How does RepoMind understand my repository?',
    a: 'RepoMind parses your source, dependencies, and configuration to build a semantic model of the codebase, then layers AI reasoning on top to explain structure, relationships, and intent in plain English.',
  },
  {
    q: 'Do you support private repositories?',
    a: 'Yes. On Pro and Enterprise plans you can securely connect private GitHub repositories. Your code is processed transiently and never used to train shared models.',
  },
  {
    q: 'Which languages and frameworks are supported?',
    a: 'RepoMind supports all major languages including TypeScript, JavaScript, Python, Go, Rust, Java, and more, with framework-aware analysis for popular stacks like Next.js, Django, and Spring.',
  },
  {
    q: 'Is my code safe and private?',
    a: 'Security is foundational. We use encrypted transit and storage, scope access to exactly what you connect, and offer self-hosted deployment for organizations with strict requirements.',
  },
  {
    q: 'Can I use RepoMind with my team?',
    a: 'Absolutely. Team workspaces let everyone share architecture maps, insights, and reviews. Enterprise adds SSO, audit logs, and centralized administration.',
  },
  {
    q: 'What happens when I hit my plan limit?',
    a: 'You will be notified before reaching limits and can upgrade instantly. Existing analyses remain accessible even if you stay on the free plan.',
  },
]

export function Faq() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to know about RepoMind. Can’t find an answer?{' '}
            <a href="#" className="text-primary underline-offset-4 hover:underline">
              Talk to our team
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="glass rounded-2xl px-5 py-2">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-base text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
