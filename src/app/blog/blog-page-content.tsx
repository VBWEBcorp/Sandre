'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Clock, Search, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import { PageHero } from '@/components/sections/page-hero'
import { blogCategories, blogPosts, type BlogCategory } from '@/lib/blog-posts'

const ease = [0.22, 1, 0.36, 1] as const

type Filter = 'Tous' | BlogCategory

const hero = {
  eyebrow: 'Journal',
  title: "Le carnet de l'atelier",
  description:
    "Événements, gestes, anecdotes, styles de vitraux, ce qui se raconte quand je quitte la table lumineuse.",
  image:
    'https://i.ibb.co/zhSGv7y9/Chemin-de-Lumiere-de-nuit-1-scaled.webp',
}

export default function BlogPageContent() {
  const [active, setActive] = useState<Filter>('Tous')

  const filters = useMemo<Filter[]>(() => {
    return ['Tous', ...blogCategories]
  }, [])

  const filtered = useMemo(() => {
    if (active === 'Tous') return blogPosts
    return blogPosts.filter((p) => p.category === active)
  }, [active])

  const featured = filtered[0]
  const rest = filtered.slice(1)

  const countFor = (f: Filter) =>
    f === 'Tous'
      ? blogPosts.length
      : blogPosts.filter((p) => p.category === f).length

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Blog"
      />

      {/* Filtres sticky, style éditorial */}
      <div className="sticky top-[72px] z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-6 overflow-x-auto py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="hidden shrink-0 items-center gap-2 font-display text-[11px] tracking-[0.28em] uppercase text-muted-foreground sm:inline-flex">
              <Sparkles className="size-3 text-gold" aria-hidden />
              Rubriques
            </span>
            <div className="hidden h-4 w-px shrink-0 bg-border sm:block" />

            {filters.map((f) => {
              const isActive = active === f
              const count = countFor(f)
              const disabled = f !== 'Tous' && count === 0

              return (
                <button
                  key={f}
                  onClick={() => !disabled && setActive(f)}
                  disabled={disabled}
                  className={`group relative shrink-0 pb-2 font-display text-[13.5px] tracking-[-0.005em] transition-colors duration-300 ${
                    isActive
                      ? 'text-foreground'
                      : disabled
                      ? 'cursor-not-allowed text-muted-foreground/35'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative inline-flex items-baseline gap-1.5">
                    <span>{f}</span>
                    <span
                      className={`font-sans text-[10px] tabular-nums transition-colors ${
                        isActive
                          ? 'text-gold'
                          : 'text-muted-foreground/60 group-hover:text-muted-foreground'
                      }`}
                    >
                      {count.toString().padStart(2, '0')}
                    </span>
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="blog-filter-underline"
                      aria-hidden
                      className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto max-w-xl rounded-3xl border border-dashed border-border/80 bg-card/60 p-12 text-center"
            >
              <Search className="mx-auto mb-4 size-8 text-muted-foreground/60" />
              <p className="font-display text-xl text-foreground">
                Pas d&apos;article dans cette catégorie, pour l&apos;instant.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Revenez bientôt, le carnet s&apos;enrichit chaque mois.
              </p>
            </motion.div>
          ) : (
            <>
              {featured && (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="mb-12"
                >
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group grid gap-0 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:shadow-[var(--shadow-md)] md:grid-cols-2"
                  >
                    <div className="aspect-[16/11] overflow-hidden md:aspect-auto">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
                      <div className="flex items-center gap-3 text-[12px]">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-display tracking-[0.14em] uppercase text-primary">
                          {featured.category}
                        </span>
                        <span className="font-display text-muted-foreground">
                          À la une
                        </span>
                      </div>
                      <h2 className="font-display text-[1.8rem] font-light leading-[1.1] tracking-tight text-foreground sm:text-[2.2rem]">
                        {featured.title}
                      </h2>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-[12.5px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="size-3.5 text-gold" />
                          {featured.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5 text-gold" />
                          {featured.readMin} min de lecture
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-display text-[14px] text-primary transition-colors group-hover:text-gold">
                        Lire l&apos;article
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              )}

              <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((p, i) => (
                  <motion.article
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease, delay: i * 0.05 }}
                  >
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group block h-full overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                        />
                      </div>
                      <div className="space-y-4 p-6">
                        <p className="font-display text-[11px] tracking-[0.2em] uppercase text-primary">
                          {p.category}
                        </p>
                        <h3 className="font-display text-[1.2rem] font-medium leading-snug tracking-tight text-foreground">
                          {p.title}
                        </h3>
                        <p className="text-[13.5px] leading-relaxed text-muted-foreground line-clamp-3">
                          {p.excerpt}
                        </p>
                        <div className="flex items-center gap-3 border-t border-border/60 pt-4 text-[11.5px] text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <CalendarDays className="size-3 text-gold" />
                            {p.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3 text-gold" />
                            {p.readMin} min
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}
