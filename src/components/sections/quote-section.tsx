'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function QuoteSection() {
  return (
    <section className="relative border-b border-border/60 bg-muted/15">
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <span
          aria-hidden
          className="font-display-italic absolute left-1/2 top-2 -translate-x-1/2 select-none text-[10rem] font-light leading-none text-primary/10 sm:text-[13rem]"
        >
          “
        </span>

        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="relative"
        >
          <p className="font-display text-pretty text-[1.5rem] font-light italic leading-[1.3] tracking-[-0.01em] text-foreground sm:text-[1.85rem]">
            Un vitrail, c&apos;est une valse lente{' '}
            <span className="text-primary">d&apos;ombres et de reflets</span>{' '}
            qui a pour maître de ballet le soleil.
          </p>
          <footer className="mt-7 flex flex-col items-center gap-2">
            <span
              aria-hidden
              className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent"
            />
            <cite className="font-display text-[12px] not-italic tracking-[0.14em] uppercase text-muted-foreground">
              Bernard Henry
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
