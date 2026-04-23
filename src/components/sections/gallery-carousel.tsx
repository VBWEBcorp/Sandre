'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { works } from '@/lib/works'

const GAP = 24
const CARD_WIDTH = 360

export function GalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const x = useMotionValue(0)
  const progress = useTransform(x, [0, -maxScroll || -1], [0, 1])

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      setMaxScroll(
        Math.max(0, trackRef.current.scrollWidth - trackRef.current.clientWidth)
      )
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const slide = useCallback(
    (dir: -1 | 1) => {
      const current = x.get()
      const step = CARD_WIDTH + GAP
      const next = Math.max(-maxScroll, Math.min(0, current - dir * step))
      animate(x, next, { type: 'spring', stiffness: 300, damping: 35 })
    },
    [x, maxScroll]
  )

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 -right-40 h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
              <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
              Réalisations récentes
            </p>
            <h2 className="font-display text-balance text-4xl font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.75rem]">
              Six œuvres,{' '}
              <span className="font-display-italic text-primary">
                six lumières
              </span>{' '}
              différentes.
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Glissez pour parcourir une sélection de vitraux contemporains et
              de restaurations livrés ces dernières années.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Œuvre précédente"
              onClick={() => slide(-1)}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Œuvre suivante"
              onClick={() => slide(1)}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden"
          role="region"
          aria-label="Galerie des réalisations"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.08}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {works.map((w, i) => (
              <motion.figure
                key={w.slug}
                className="group shrink-0"
                style={{
                  width: CARD_WIDTH,
                  marginRight: i < works.length - 1 ? GAP : 0,
                }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:shadow-[var(--shadow-md)]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={w.image}
                      alt={w.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  {/* Overlay doré au hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {/* Pastille année */}
                  {w.year && (
                    <span className="absolute top-4 right-4 rounded-full border border-white/30 bg-black/30 px-2.5 py-1 font-display text-[11px] tracking-wider text-white backdrop-blur-md">
                      {w.year}
                    </span>
                  )}
                </div>
                <figcaption className="mt-5 flex items-start justify-between gap-3 px-1">
                  <div>
                    <p className="font-display text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {w.category}
                    </p>
                    <p className="mt-1.5 font-display text-xl text-foreground">
                      {w.title}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors group-hover:border-gold group-hover:text-gold">
                    <ArrowUpRight className="size-4" />
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6">
          <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-border/70">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-gold to-primary/60"
              style={{ scaleX: progress, transformOrigin: 'left' }}
            />
          </div>
          <Button variant="ghost" className="group shrink-0" asChild>
            <Link href="/gallery">
              Voir toute la galerie
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
