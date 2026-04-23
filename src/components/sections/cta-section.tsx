'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { workImages } from '@/lib/works'

const ease = [0.22, 1, 0.36, 1] as const

const cta = {
  eyebrow: 'Parlons de votre projet',
  title: (
    <>
      Donnons vie à{' '}
      <span className="font-display-italic text-gold">votre lumière.</span>
    </>
  ),
  description:
    "Une création, une restauration, ou simplement une envie à raconter ? Je réponds personnellement à chaque message, sous 48 h.",
  button: 'Demander un devis gratuit',
}

// Deux listes distinctes pour les colonnes
const col1Images = [...workImages, ...workImages]
const col2Images = [
  ...workImages.slice(3),
  ...workImages.slice(0, 3),
  ...workImages,
]

function ScrollColumn({
  images,
  direction,
  speed,
}: {
  images: string[]
  direction: 'up' | 'down'
  speed: number
}) {
  const tripled = [...images, ...images, ...images]
  const from = direction === 'up' ? '0%' : '-33.333%'
  const to = direction === 'up' ? '-33.333%' : '0%'

  return (
    <div className="w-[140px] lg:w-[170px] shrink-0">
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: [from, to] }}
        transition={{
          y: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
      >
        {tripled.map((src, i) => (
          <div
            key={`${direction}-${i}`}
            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0 ring-1 ring-white/10 shadow-[var(--shadow-sm)]"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function CtaSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-[oklch(0.22_0.04_150)] to-[oklch(0.16_0.03_150)] shadow-[var(--shadow-lg)]"
        >
          <div className="relative flex items-stretch min-h-[440px] sm:min-h-[480px]">
            {/* Texte à gauche */}
            <div className="relative z-10 flex-1 flex flex-col justify-center p-10 sm:p-14 space-y-6">
              <p className="font-display text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
                <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
                {cta.eyebrow}
              </p>
              <h2 className="max-w-xl font-display text-balance text-[2.25rem] font-light leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.75rem]">
                {cta.title}
              </h2>
              <p className="max-w-lg text-[15.5px] leading-relaxed text-white/70 sm:text-[16.5px]">
                {cta.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  className="group bg-gold text-[oklch(0.22_0.04_60)] hover:bg-gold hover:brightness-105"
                  asChild
                >
                  <Link href="/contact">
                    {cta.button}
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/services">Les prestations</Link>
                </Button>
              </div>
            </div>

            {/* Colonnes d'images à droite */}
            <div className="hidden md:block relative w-[320px] lg:w-[380px] shrink-0 overflow-hidden">
              {/* Fades */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[oklch(0.19_0.03_150)] to-transparent z-20" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[oklch(0.16_0.03_150)] to-transparent z-20" />
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[oklch(0.19_0.03_150)] to-transparent z-20" />

              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="flex gap-3 -rotate-6 translate-x-[8%]"
                  style={{ height: '140%', marginTop: '-20%' }}
                >
                  <ScrollColumn images={col1Images} direction="up" speed={50} />
                  <ScrollColumn images={col2Images} direction="down" speed={58} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
