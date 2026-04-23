'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { works } from '@/lib/works'

const ease = [0.22, 1, 0.36, 1] as const
const INTERVAL = 6200

const slides = works.slice(0, 6)

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  const active = slides[current]

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease }}
            className="absolute inset-0"
          >
            <img
              src={active.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover animate-slow-pan"
            />
          </motion.div>
        </AnimatePresence>
        {/* Voile plus sobre : simple overlay sombre + légère vignette */}
        <div className="absolute inset-0 bg-[oklch(0.14_0.03_150/0.6)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.14_0.03_150/0.3)_0%,transparent_40%,oklch(0.14_0.03_150/0.4)_100%)]" />
      </div>

      {/* Filigrane très discret */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-display text-[11px] font-medium tracking-[0.24em] uppercase text-white/85 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-gold" />
            Atelier d&apos;artisanat d&apos;art · Maître verrier
          </p>
          <h1 className="mt-8 font-display text-balance text-5xl font-light leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
            Lumière et couleurs,{' '}
            <span className="font-display-italic text-gold">
              au service du bien-être.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Création et rénovation de vitraux et d&apos;objets verriers, au
            plomb, en Tiffany et en fusing. Entièrement réalisés à la main,
            dans mon atelier parisien.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group bg-gold text-[oklch(0.22_0.04_60)] shadow-[0_10px_30px_-10px_oklch(0.72_0.14_82/0.55)] hover:bg-gold hover:brightness-105"
              asChild
            >
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/gallery">
                <Phone className="size-4" />
                Découvrir les réalisations
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Cartouche de l'œuvre en cours */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.45, ease }}
              className="text-center"
            >
              <p className="font-display text-[11px] tracking-[0.32em] uppercase text-gold/90">
                Œuvre présentée
              </p>
              <p className="mt-2 font-display text-lg italic text-white/95">
                « {active.title} »
              </p>
              <p className="mt-1 text-xs text-white/55">{active.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Œuvre ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === current
                    ? 'w-10 bg-gold'
                    : 'w-4 bg-white/30 hover:bg-white/55'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
