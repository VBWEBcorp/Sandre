'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { blogPosts } from '@/lib/blog-posts'

const ease = [0.22, 1, 0.36, 1] as const

export function LatestPosts() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section className="border-b border-border/60 bg-muted/15">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl space-y-4">
            <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
              <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
              Le journal de l&apos;atelier
            </p>
            <h2 className="font-display text-balance text-4xl font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
              Carnets,{' '}
              <span className="font-display-italic text-primary">
                chroniques & coulisses
              </span>
            </h2>
          </div>
          <Button variant="outline" className="group" asChild>
            <Link href="/blog">
              Tous les articles
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${p.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <p className="font-display text-[11px] tracking-[0.22em] uppercase text-primary">
                    {p.category}
                  </p>
                  <h3 className="font-display text-[1.25rem] font-medium leading-snug tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted-foreground line-clamp-3">
                    {p.excerpt}
                  </p>
                  <div className="flex items-center gap-4 border-t border-border/60 pt-4 text-[12px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5 text-gold" />
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-gold" />
                      {p.readMin} min
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
