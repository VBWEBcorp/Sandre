'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'

import { categories, works, worksByCategory, type Category, type Work } from '@/lib/works'

const ease = [0.22, 1, 0.36, 1] as const

const heroImage =
  'https://i.ibb.co/6q13ykw/Des-Ronds-dans-l-Eau-Vitrail-1-scaled.webp'

type Filter = 'Tout' | Category

export default function GalleryPage() {
  const [active, setActive] = useState<Filter>('Tout')
  const [lightbox, setLightbox] = useState<Work | null>(null)

  const filters = useMemo<Filter[]>(() => {
    return ['Tout', ...categories]
  }, [])

  const filtered = useMemo(() => {
    if (active === 'Tout') return works
    return worksByCategory(active)
  }, [active])

  const countFor = (cat: Filter) =>
    cat === 'Tout' ? works.length : worksByCategory(cat).length

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover animate-slow-pan"
          />
          <div className="absolute inset-0 bg-[oklch(0.14_0.03_150/0.65)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-display text-[11px] tracking-[0.24em] uppercase text-white/85 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-gold" />
              Les Réalisations
            </p>
            <h1 className="mt-7 font-display text-balance text-5xl font-light leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl">
              Les œuvres qui ont{' '}
              <span className="font-display-italic text-gold">
                quitté l&apos;atelier
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-white/75 sm:text-lg">
              Créations contemporaines, restaurations de patrimoine, tableaux
              de lumière. Parcourez par catégorie ou tout à la fois, chaque
              œuvre a son histoire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barre de filtres sticky, épurée façon Framer */}
      <div className="sticky top-[72px] z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-6 overflow-x-auto py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="hidden shrink-0 items-center gap-2 font-display text-[11px] tracking-[0.28em] uppercase text-muted-foreground sm:inline-flex">
              <Sparkles className="size-3 text-gold" aria-hidden />
              Filtrer
            </span>
            <div className="hidden h-4 w-px shrink-0 bg-border sm:block" />

            {filters.map((f) => {
              const count = countFor(f)
              const disabled = f !== 'Tout' && count === 0
              const isActive = active === f

              return (
                <button
                  key={f}
                  type="button"
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
                      layoutId="filter-underline"
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

      {/* Grille */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((w) => (
                <motion.figure
                  key={w.slug}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.45, ease }}
                  className="group cursor-pointer"
                  onClick={() => setLightbox(w)}
                >
                  <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={w.image}
                        alt={w.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                        <p className="font-display text-[10px] tracking-[0.22em] uppercase opacity-80">
                          {w.categories[0]}
                        </p>
                        <p className="mt-1 font-display text-lg">
                          « {w.title} »
                        </p>
                      </div>
                      <span className="flex size-10 items-center justify-center rounded-full bg-gold text-[oklch(0.22_0.04_60)]">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    {w.year && (
                      <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 font-display text-[11px] tracking-wider text-white backdrop-blur-md">
                        {w.year}
                      </span>
                    )}
                  </div>
                  <figcaption className="mt-5 px-1">
                    <div className="flex flex-wrap gap-1.5">
                      {w.categories.slice(0, 2).map((c) => (
                        <span
                          key={c}
                          className="inline-flex rounded-full bg-primary/8 px-2.5 py-0.5 font-display text-[10px] tracking-[0.12em] uppercase text-primary"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2.5 font-display text-xl text-foreground">
                      « {w.title} »
                    </p>
                    <p className="text-[12.5px] text-muted-foreground">
                      {w.location}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-xl rounded-3xl border border-dashed border-border/80 bg-card/60 p-12 text-center"
            >
              <Sparkles className="mx-auto mb-4 size-8 text-gold" aria-hidden />
              <p className="font-display text-xl text-foreground">
                Pas encore d&apos;œuvre dans cette catégorie.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                N&apos;hésitez pas à me contacter pour un projet sur-mesure 
                je serai ravie d&apos;en créer une première.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.1_0.02_150/0.88)] backdrop-blur-md p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.32, ease }}
              className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-lg)] sm:grid sm:grid-cols-[1.1fr_0.9fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-black">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="h-[45vh] w-full object-cover sm:h-[80vh]"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8 sm:p-10">
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {lightbox.categories.map((c) => (
                      <span
                        key={c}
                        className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 font-display text-[10px] tracking-[0.14em] uppercase text-primary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
                    « {lightbox.title} »
                  </h2>
                  {lightbox.year && (
                    <p className="mt-2 font-display italic text-muted-foreground">
                      {lightbox.year} · {lightbox.location}
                    </p>
                  )}
                  <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                    {lightbox.description}
                  </p>
                </div>
                <p className="font-display text-xs italic text-muted-foreground">
                  Pièce unique, Atelier Énergie des Couleurs
                </p>
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/10 backdrop-blur-md transition-colors hover:bg-black/60"
                aria-label="Fermer"
              >
                <X className="size-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
