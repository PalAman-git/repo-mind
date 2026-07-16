'use client'

import { ArrowRight, Play, Sparkles, Star } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArchitectureGraph } from './architecture-graph'

const logos = ['Vercel', 'Linear', 'Stripe', 'Figma', 'Raycast']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-40 -z-10 size-[30rem] rounded-full bg-accent/10 blur-[120px]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 grid-bg opacity-40" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <motion.a
            href="#features"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 text-sm"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
              <Sparkles className="size-3" /> New
            </span>
            <span className="text-muted-foreground">AI Architecture Review is live</span>
            <ArrowRight className="size-3.5 text-muted-foreground" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Understand any{' '}
            <span className="text-gradient">codebase</span> in minutes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            RepoMind reads any GitHub repository and turns it into interactive
            architecture maps, plain-English explanations, and AI-powered reviews —
            so you ship with confidence from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button className="h-12 gap-2 px-6 text-[15px] shadow-xl shadow-primary/25 [a]:hover:bg-primary/85">
              Analyze Repository
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              className="h-12 gap-2 px-6 text-[15px] backdrop-blur-sm"
            >
              <Play className="size-4" />
              View Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              Loved by 12,000+ engineers
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {logos.map((l) => (
                <span
                  key={l}
                  className="text-sm font-medium tracking-tight text-muted-foreground/70"
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <ArchitectureGraph />
        </motion.div>
      </div>
    </section>
  )
}
