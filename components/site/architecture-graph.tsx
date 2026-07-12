'use client'

import { motion } from 'motion/react'
import { Boxes, Database, GitBranch, Layers, Network, Workflow } from 'lucide-react'

type Node = {
  id: string
  label: string
  sub: string
  icon: typeof Boxes
  x: number
  y: number
  accent?: boolean
}

const nodes: Node[] = [
  { id: 'api', label: 'api/', sub: 'Route handlers', icon: Network, x: 8, y: 10, accent: true },
  { id: 'core', label: 'core/engine', sub: 'AI parser', icon: Workflow, x: 52, y: 4 },
  { id: 'db', label: 'lib/db', sub: 'Postgres', icon: Database, x: 60, y: 58 },
  { id: 'ui', label: 'components/', sub: '42 modules', icon: Layers, x: 4, y: 62 },
  { id: 'graph', label: 'graph/', sub: 'Relations', icon: GitBranch, x: 30, y: 34, accent: true },
]

const edges: [string, string][] = [
  ['api', 'graph'],
  ['core', 'graph'],
  ['graph', 'db'],
  ['graph', 'ui'],
  ['api', 'core'],
]

function center(n: Node) {
  return { x: n.x + 13, y: n.y + 8 }
}

export function ArchitectureGraph() {
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]))

  return (
    <div className="relative aspect-square w-full max-w-lg">
      {/* glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
      />
      <div className="glass relative h-full w-full overflow-hidden rounded-3xl p-4">
        <div className="mb-3 flex items-center gap-1.5 px-1">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-chart-4/80" />
          <span className="size-2.5 rounded-full bg-chart-3/80" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">
            repomind · architecture.map
          </span>
        </div>

        <div className="relative h-[calc(100%-1.75rem)] w-full grid-bg rounded-2xl">
          {/* edges */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {edges.map(([a, b], i) => {
              const from = center(map[a])
              const to = center(map[b])
              return (
                <motion.line
                  key={`${a}-${b}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--primary)"
                  strokeWidth={0.4}
                  strokeOpacity={0.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                />
              )
            })}
          </svg>

          {/* nodes */}
          {nodes.map((n, i) => {
            const Icon = n.icon
            return (
              <motion.div
                key={n.id}
                className="absolute"
                style={{ left: `${n.x}%`, top: `${n.y}%`, width: '26%' }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className={`flex items-center gap-2 rounded-xl border p-2 backdrop-blur-sm ${
                    n.accent
                      ? 'border-primary/40 bg-primary/15'
                      : 'border-border bg-card/80'
                  }`}
                >
                  <div
                    className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${
                      n.accent ? 'bg-primary/25 text-primary' : 'bg-muted text-foreground'
                    }`}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-mono text-[11px] font-medium text-foreground">
                      {n.label}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">{n.sub}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}

          {/* floating stat chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass absolute bottom-3 right-3 flex items-center gap-2 rounded-xl px-3 py-2"
          >
            <Boxes className="size-4 text-accent" />
            <span className="font-mono text-[11px] text-foreground">
              1,284 files mapped
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
