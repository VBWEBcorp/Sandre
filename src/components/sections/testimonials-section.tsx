'use client'

import { Quote, Star } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { testimonials, type Testimonial } from '@/lib/testimonials'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-[260px] w-[min(340px,85vw)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/90 px-6 py-5 shadow-[var(--shadow-xs)] ring-1 ring-foreground/[0.03] backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3">
        <Quote className="size-5 shrink-0 text-gold/60" aria-hidden />
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-3 ${
                i < testimonial.stars
                  ? 'fill-gold text-gold'
                  : 'fill-muted text-muted'
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
      <blockquote className="mt-3 min-h-0 flex-1 overflow-hidden">
        <p className="line-clamp-5 break-words text-[13.5px] leading-relaxed text-foreground/85">
          « {testimonial.text} »
        </p>
      </blockquote>
      <figcaption className="mt-3 flex items-center gap-3 border-t border-border/40 pt-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary ring-1 ring-primary/15">
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[13px] text-foreground">
            {testimonial.name}
          </p>
          <p className="truncate text-[11px] text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
        <p className="shrink-0 self-start font-display text-[11px] italic text-muted-foreground">
          {testimonial.date}
        </p>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[]
  direction: 'left' | 'right'
}) {
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="group relative flex gap-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />
      <div
        className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-dup-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const mid = Math.ceil(testimonials.length / 2)
  const topRow = testimonials.slice(0, mid)
  const bottomRow = testimonials.slice(mid)

  return (
    <section className="overflow-hidden border-y border-border/60 bg-muted/15">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <SectionTitle
          eyebrow="Ils en parlent"
          title={
            <>
              Des particuliers,{' '}
              <span className="font-display-italic text-primary">
                des architectes, des décorateurs
              </span>
            </>
          }
          description="Ces mots, je les reçois. Ils accompagnent chaque projet livré, et sont la plus belle preuve du soin mis dans chaque pièce."
        />
      </div>

      <div className="mt-10 space-y-6 pb-14 sm:pb-16 lg:pb-20">
        <MarqueeRow items={topRow} direction="left" />
        {bottomRow.length > 0 && <MarqueeRow items={bottomRow} direction="right" />}
      </div>
    </section>
  )
}
