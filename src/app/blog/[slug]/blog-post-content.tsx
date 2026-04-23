'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from 'lucide-react'
import Link from 'next/link'

import { blogPosts, type BlogPost } from '@/lib/blog-posts'

const ease = [0.22, 1, 0.36, 1] as const

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover animate-slow-pan"
          />
          <div className="absolute inset-0 bg-[oklch(0.14_0.03_150/0.7)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-20 lg:pb-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-display text-[12px] tracking-[0.08em] text-white/85 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-3.5" />
            Retour au journal
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mt-8 text-center"
          >
            <p className="font-display text-[11px] tracking-[0.3em] uppercase text-gold">
              {post.category}
            </p>
            <h1 className="mt-5 font-display text-balance text-4xl font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-[3.25rem]">
              {post.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-[13px] text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-3.5 text-gold" />
                {post.author}
              </span>
              <span aria-hidden className="text-white/30">·</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-gold" />
                {post.date}
              </span>
              <span aria-hidden className="text-white/30">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5 text-gold" />
                {post.readMin} min de lecture
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="space-y-7"
        >
          <p className="font-display text-[1.15rem] italic leading-relaxed text-foreground/85">
            {post.excerpt}
          </p>
          <p className="text-[16px] leading-[1.75] text-foreground/85">
            Cet article est ici présenté comme démonstration. Dans sa version
            finale, il accueillerait un texte long richement illustré, des
            citations, des photos des étapes de création et des renvois vers
            d&apos;autres articles du carnet.
          </p>
          <blockquote className="border-l-2 border-gold/70 bg-muted/30 px-6 py-5 font-display text-[1.2rem] italic leading-relaxed text-foreground">
            « Une démo éditoriale n&apos;a de sens que si le contenu qu&apos;elle
            promet peut y prendre place sans rupture, le jour où il sera écrit. »
          </blockquote>
          <p className="text-[16px] leading-[1.75] text-foreground/85">
            Chaque billet est l&apos;occasion d&apos;ouvrir une porte : sur un
            chantier en cours, sur un geste technique rare, sur une rencontre
            des Journées Européennes des Métiers d&apos;Art, ou sur une
            anecdote amusante tirée de la vie de l&apos;atelier.
          </p>
        </motion.div>
      </section>

      <section className="border-t border-border/60 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
            À lire aussi
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r, i) => (
              <motion.article
                key={r.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              >
                <Link
                  href={`/blog/${r.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="font-display text-[11px] tracking-[0.2em] uppercase text-primary">
                      {r.category}
                    </p>
                    <h3 className="font-display text-[1.1rem] font-medium leading-snug tracking-tight text-foreground">
                      {r.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 font-display text-[13px] text-primary transition-colors group-hover:text-gold">
                      Lire
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
