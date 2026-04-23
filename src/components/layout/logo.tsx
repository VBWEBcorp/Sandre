import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/seo'

type LogoProps = {
  className?: string
  variant?: 'default' | 'light'
}

function StainedGlassMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="edc-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.72 0.14 82)" />
          <stop offset="1" stopColor="oklch(0.55 0.16 35)" />
        </linearGradient>
        <linearGradient id="edc-g2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.55 0.12 155)" />
          <stop offset="1" stopColor="oklch(0.42 0.09 155)" />
        </linearGradient>
        <linearGradient id="edc-g3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.58 0.14 210)" />
          <stop offset="1" stopColor="oklch(0.45 0.16 270)" />
        </linearGradient>
      </defs>
      {/* Cercle de plomb */}
      <circle cx="20" cy="20" r="17.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {/* Pétales */}
      <path d="M20 4 L27 20 L20 36 L13 20 Z" fill="url(#edc-g1)" opacity="0.92" />
      <path d="M4 20 L20 13 L36 20 L20 27 Z" fill="url(#edc-g2)" opacity="0.78" />
      <circle cx="20" cy="20" r="4.5" fill="url(#edc-g3)" />
      {/* Traits de plomb */}
      <path d="M20 4 V36 M4 20 H36" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="20" cy="20" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  )
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const textClass =
    variant === 'light' ? 'text-white' : 'text-foreground'
  const markClass =
    variant === 'light' ? 'text-white/70' : 'text-foreground/70'

  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-3 transition-opacity hover:opacity-90',
        textClass,
        className
      )}
      aria-label={`${siteConfig.name}, accueil`}
    >
      <span className={cn('shrink-0 transition-transform duration-500 group-hover:rotate-[12deg]', markClass)}>
        <StainedGlassMark className="size-9" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-medium tracking-[-0.01em]">
          Énergie des Couleurs
        </span>
        <span className={cn('mt-1 font-display text-[10px] italic tracking-[0.22em] uppercase', variant === 'light' ? 'text-white/50' : 'text-muted-foreground')}>
          Atelier de vitrail
        </span>
      </span>
    </Link>
  )
}
