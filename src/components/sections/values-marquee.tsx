import {
  Flame,
  Flower2,
  Gem,
  Hammer,
  Layers,
  Palette,
  ScrollText,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const values: { icon: LucideIcon; label: string }[] = [
  { icon: Sparkles, label: 'Verres soufflés' },
  { icon: Gem, label: 'Cabochons' },
  { icon: Hammer, label: 'Plomb patiné' },
  { icon: Flame, label: 'Fusing & thermoformage' },
  { icon: Palette, label: 'Peinture sur verre' },
  { icon: ScrollText, label: 'Restauration patrimoine' },
  { icon: Layers, label: 'Tiffany' },
  { icon: Flower2, label: 'Création sur-mesure' },
]

function ValuesTrack({
  variant,
}: {
  variant: 'light' | 'dark'
}) {
  const textClass =
    variant === 'dark' ? 'text-white/70' : 'text-foreground/70'
  const iconClass =
    variant === 'dark' ? 'text-gold/80' : 'text-primary/60'
  const separatorClass =
    variant === 'dark' ? 'text-white/20' : 'text-border'

  const items = values.map((v) => (
    <span
      key={v.label}
      className={`inline-flex shrink-0 items-center gap-2.5 text-nowrap font-display text-sm tracking-[0.08em] uppercase sm:text-[15px] ${textClass}`}
    >
      <v.icon className={`size-4 ${iconClass}`} aria-hidden />
      {v.label}
      <span className={separatorClass} aria-hidden>
        ·
      </span>
    </span>
  ))

  return (
    <div className="group flex overflow-hidden">
      <div
        className="flex shrink-0 items-center gap-6 animate-marquee-left"
        style={{ animationDuration: '48s' }}
      >
        {items}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-6 animate-marquee-left"
        style={{ animationDuration: '48s' }}
      >
        {items}
      </div>
    </div>
  )
}

export function ValuesMarquee({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const wrapperClass =
    variant === 'dark'
      ? 'border-t border-white/10 bg-black/30 backdrop-blur-md py-4 sm:py-5'
      : 'border-y border-border/60 bg-gradient-to-b from-muted/20 via-accent/10 to-muted/20 py-6 sm:py-8'

  return (
    <div className={wrapperClass}>
      <ValuesTrack variant={variant} />
    </div>
  )
}
