'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { GithubIcon } from './brand-icons'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3"
    >
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300',
          scrolled ? 'glass shadow-lg shadow-black/20' : 'border border-transparent',
        )}
      >
        <a href="#" className="flex items-center" aria-label="RepoMind home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="h-9 px-4 text-muted-foreground hover:text-foreground">
            Login
          </Button>
          <Button className="h-9 px-4 shadow-lg shadow-primary/20 [a]:hover:bg-primary/85">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute inset-x-4 top-[72px] flex flex-col gap-1 rounded-2xl p-3 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <GithubIcon className="size-4" /> GitHub
          </a>
          <div className="mt-1 flex flex-col gap-2 border-t border-border pt-3">
            <Button variant="outline" className="h-10 w-full">
              Login
            </Button>
            <Button className="h-10 w-full">Get Started</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
