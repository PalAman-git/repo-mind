import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'
import { Logo } from '../../../components/logo'
import { GithubIcon, LinkedinIcon, XIcon } from './brand-icons'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Architecture Graph', 'AI Review', 'Learning Mode', 'Changelog'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Guides', 'API Reference', 'Status', 'Community'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact', 'Security'],
  },
]

export function Footer() {
  return (
    <footer className="relative">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-14 text-center md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -z-10 size-96 -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
            />
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Understand your next codebase today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              Join thousands of engineers using RepoMind to ship faster with
              complete context.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button className="h-12 gap-2 px-6 text-[15px] shadow-xl shadow-primary/25 [a]:hover:bg-primary/85">
                Get Started Free
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" className="h-12 px-6 text-[15px]">
                Book a demo
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* footer links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            <div className="col-span-2 flex flex-col gap-4">
              <Logo />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                The AI-powered software intelligence platform for understanding any
                repository.
              </p>
              <div className="flex gap-2">
                {[GithubIcon, XIcon, LinkedinIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-medium text-foreground">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} RepoMind, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
              <a href="#" className="hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
