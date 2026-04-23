'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  {
    eyebrow: 'La Création',
    tagline: 'Optez pour le sur-mesure.',
    title: (
      <>
        Un projet qui vous{' '}
        <span className="font-display-italic text-primary">
          ressemble, durable.
        </span>
      </>
    ),
    description:
      "Pour les particuliers et les prescripteurs, architectes, décorateurs, scénographes. De l'idée à la pose, je vous accompagne à chaque étape clé : maquette, colorisation, choix des verres, visites d'atelier.",
    bullets: [
      'Tous supports : fenêtres, claustras, paravents, portes, chapelles…',
      'Tous styles : classique, Art déco, Art nouveau, abstrait',
      "Photos d'avancement + visites d'atelier pour valider le rendu",
    ],
    image:
      'https://i.ibb.co/YBcv55YJ/Vitrail-fusion-ancien-et-modernite-scaled.webp',
    link: '/services#creation',
    linkLabel: 'Voir la prestation Création',
  },
  {
    eyebrow: 'La Rénovation',
    tagline: "Dans le respect de l'œuvre originale.",
    title: (
      <>
        Rénover un vitrail ancien,{' '}
        <span className="font-display-italic text-primary">
          à l&apos;identique ou mieux.
        </span>
      </>
    ),
    description:
      "Pour les syndics, municipalités, associations, paroisses et entreprises de restauration. Étude préalable, devis adapté au budget, et intervention dans le respect du code déontologique ECCO.",
    bullets: [
      'Diagnostic détaillé avec photos avant / après',
      "Techniques et esprit du maître verrier d'origine préservés",
      'Patine reproduite à la main, impossible à distinguer',
    ],
    image:
      'https://i.ibb.co/zhSGv7y9/Chemin-de-Lumiere-de-nuit-1-scaled.webp',
    link: '/services#renovation',
    linkLabel: 'Voir la prestation Rénovation',
  },
]

export function ServicesPreview() {
  return (
    <section className="relative border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
            <span className="inline-block align-middle mr-2 h-px w-6 bg-gold/70" />
            Vitraux & objets verriers
            <span className="inline-block align-middle ml-2 h-px w-6 bg-gold/70" />
          </p>
          <h2 className="font-display text-balance text-[2rem] font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
            Entièrement conçus et réalisés{' '}
            <span className="font-display-italic text-primary">
              dans l&apos;atelier parisien.
            </span>
          </h2>
        </div>

        <div className="mt-12 space-y-14 sm:space-y-16">
          {items.map((it, i) => {
            const imageFirst = true // image toujours à gauche
            return (
              <article
                key={it.eyebrow}
                className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                  className="relative"
                >
                  <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-md)] lg:mx-0 lg:h-full lg:max-w-none">
                    <div className="aspect-[4/5] lg:absolute lg:inset-0 lg:aspect-auto">
                      <img
                        src={it.image}
                        alt={it.tagline}
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                      />
                    </div>
                    <p className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1 font-display text-[11px] tracking-[0.28em] text-white uppercase backdrop-blur-md">
                      {it.eyebrow}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.05 }}
                  className="flex flex-col justify-center space-y-5"
                >
                  <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
                    <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
                    {it.tagline}
                  </p>
                  <h3 className="font-display text-[1.75rem] font-light leading-[1.1] tracking-tight text-foreground sm:text-[2.125rem]">
                    {it.title}
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-muted-foreground sm:text-[16.5px]">
                    {it.description}
                  </p>
                  <ul className="space-y-2.5 border-t border-border/60 pt-5">
                    {it.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[14.5px] text-foreground/85"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-px w-3 shrink-0 bg-gold"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={it.link}
                    className="group/link inline-flex items-center gap-2 font-display text-[14px] text-primary transition-colors hover:text-gold"
                  >
                    {it.linkLabel}
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </motion.div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
