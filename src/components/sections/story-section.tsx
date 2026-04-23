'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

export function StorySection() {
  return (
    <section className="relative border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 hidden rounded-[1.75rem] border border-gold/25 lg:block"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 bg-muted/40 shadow-[var(--shadow-md)]">
                <img
                  src="https://i.ibb.co/B5d8bn2x/Gouttes-d-Or-et-d-Ambres-couloir-1152x1536.webp"
                  alt="Vitrail Gouttes d'Or et d'Ambre"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="space-y-5"
          >
            <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
              <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
              L&apos;énergie d&apos;une vie
            </p>
            <h2 className="font-display text-balance text-[2rem] font-light leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
              D&apos;un métier de manager en RH au{' '}
              <span className="font-display-italic text-primary">
                métier de vitrailliste.
              </span>
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
              Après 28 années passées en direction des ressources humaines, j&apos;ai choisi de consacrer mon énergie à la lumière et aux couleurs. CAP Art et Techniques du verre, formation auprès de Nolwenn Chassin de Kergommeau, et ouverture de mon propre atelier.
            </p>
            <p className="font-display text-base italic text-primary sm:text-lg">
              Sandre Casse, maître verrier
            </p>
            <div className="pt-2">
              <Button variant="outline" className="group" asChild>
                <Link href="/a-propos">
                  Lire mon parcours
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
