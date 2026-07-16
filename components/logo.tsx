import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        aria-hidden
        className="relative flex size-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-inset ring-primary/30"
      >
        <div className="grid grid-cols-2 gap-[3px]">
          <span className="size-1.5 rounded-[2px] bg-primary" />
          <span className="size-1.5 rounded-[2px] bg-accent" />
          <span className="size-1.5 rounded-[2px] bg-accent" />
          <span className="size-1.5 rounded-[2px] bg-primary" />
        </div>
      </div>
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        RepoMind
      </span>
    </div>
  )
}
