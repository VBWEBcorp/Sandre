'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Link from 'next/link'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { testimonials, type Testimonial } from '@/lib/testimonials'

const ease = [0.22, 1, 0.36, 1] as const

const hero = {
  eyebrow: 'Témoignages clients',
  title: 'Quelques-uns de leurs mots.',
  description:
    "Des retours de particuliers, d'architectes, de décorateurs et d'entreprises, simples, sincères. Merci à chacun et chacune d'entre vous.",
  image:
    'https://i.ibb.co/b5DDRY7W/Un-Salon-Cosy-scaled.webp',
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-[280px] w-[min(380px,85vw)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/90 px-6 py-6 shadow-[var(--shadow-xs)] ring-1 ring-foreground/[0.03] backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3">
        <Quote className="size-5 shrink-0 text-gold/60" aria-hidden />
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-3 ${
                i < t.stars ? 'fill-gold text-gold' : 'fill-muted text-muted'
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 min-h-0 flex-1 overflow-hidden">
        <p className="line-clamp-6 break-words text-[14px] leading-relaxed text-foreground/85">
          « {t.text} »
        </p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-border/40 pt-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-gold/15 font-display text-[12px] font-semibold text-primary ring-1 ring-primary/15">
          {t.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[13.5px] text-foreground">
            {t.name}
            {t.pro && (
              <span className="ml-1.5 rounded-full border border-primary/20 bg-primary/5 px-1.5 py-0.5 align-middle font-sans text-[9px] tracking-[0.14em] uppercase text-primary">
                Pro
              </span>
            )}
          </p>
          <p className="truncate text-[11.5px] text-muted-foreground">
            {t.role}
          </p>
        </div>
        <p className="shrink-0 self-start font-display text-[11px] italic text-muted-foreground">
          {t.date}
        </p>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: Testimonial[]
  direction: 'left' | 'right'
  duration: number
}) {
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="group relative flex gap-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      <div
        className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((t, i) => (
          <Card key={`${t.name}-dup-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export function TemoignagesContent() {
  const mid = Math.ceil(testimonials.length / 2)
  const topRow = testimonials.slice(0, mid)
  const bottomRow = testimonials.slice(mid)

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Témoignages"
      />

      {/* Grand marquee des témoignages */}
      <section className="overflow-hidden border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <SectionTitle
            eyebrow="Tous les retours"
            title={
              <>
                Des histoires,{' '}
                <span className="font-display-italic text-primary">
                  pas des scores.
                </span>
              </>
            }
            description="Chaque témoignage vient avec un prénom, une date et un projet. Aucun avis anonyme, tout est vérifiable."
          />
        </div>

        <div className="mt-14 space-y-6 pb-16 sm:pb-20 lg:pb-24">
          <MarqueeRow items={topRow} direction="left" duration={65} />
          {bottomRow.length > 0 && (
            <MarqueeRow items={bottomRow} direction="right" duration={75} />
          )}
        </div>

        {/* CTA envoi témoignage */}
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
            className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border/70 bg-card/60 p-8 text-center sm:flex-row sm:text-left sm:p-10"
          >
            <div className="flex-1">
              <p className="font-display text-xl font-light tracking-tight text-foreground sm:text-2xl">
                Vous avez travaillé avec l&apos;atelier ?
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Partagez votre expérience, chaque témoignage est lu et nourrit
                mon travail au quotidien.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">Envoyer un témoignage</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
