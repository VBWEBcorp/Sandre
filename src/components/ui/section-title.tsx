import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionTitleProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl space-y-5',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow ? (
        <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
          <span className="inline-block align-middle mr-2 h-px w-6 bg-gold/70" />
          {eyebrow}
          <span className="inline-block align-middle ml-2 h-px w-6 bg-gold/70" />
        </p>
      ) : null}
      <h2 className="font-display text-balance text-[2rem] font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
