'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Brush,
  GraduationCap,
  Maximize2,
  Palette,
  Play,
  Quote,
  Sparkles,
  Volume2,
} from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

const hero = {
  eyebrow: "L'Artisan",
  title: 'Mon parcours',
  description:
    "Avant d'être artisan d'art, j'ai été manager en ressources humaines pendant 28 ans. Aujourd'hui, je mets toute cette énergie dans la lumière et la couleur.",
  image:
    'https://i.ibb.co/YBcv55YJ/Vitrail-fusion-ancien-et-modernite-scaled.webp',
}

const timeline = [
  {
    icon: Sparkles,
    year: "Jusqu'en 2018",
    title: '28 ans en direction des ressources humaines',
    description:
      "Grands Groupes de services, hypermarchés, banques, assurances. Mon énergie et mes tenues colorées ont, pendant toutes ces années, marqué les équipes que j'ai managées.",
  },
  {
    icon: Palette,
    year: "Parallèlement",
    title: 'La passion pour la couleur et la lumière',
    description:
      "Qui n'est pas attiré par la lumière, par le bien-être qu'elle procure ? J'ai étudié la chromothérapie et les médecines énergétiques. Ma mère, peintre, m'a ouvert à l'art et aux techniques de retranscription de la lumière.",
  },
  {
    icon: Brush,
    year: 'Une filiation familiale',
    title: 'Les vitraux de mon père',
    description:
      "Le vitrail était présent grâce à mon père, qui avait décoré la maison familiale de nombreuses pièces. Il les réalisait en suivant les préceptes de maîtres verriers tels que Bruno Tosi ou Sante & Diego Pizzol.",
  },
  {
    icon: GraduationCap,
    year: '2018',
    title: 'Rencontre avec Nolwenn Chassin de Kergommeau',
    description:
      "Aux Journées Européennes des Métiers d'Art, une rencontre déterminante. J'ai fait la connaissance de Nolwenn Chassin de Kergommeau, maître verrier de renom à Paris.",
  },
  {
    icon: Award,
    year: '2019 – 2020',
    title: 'CAP Art et Techniques du verre, option vitrailliste',
    description:
      "Après un cursus de formation professionnelle pour adultes, je passe mon CAP avec succès et j'ouvre mon propre atelier. Le vitrail réunit enfin tout ce que j'aime : couleur, lumière, création et verre.",
  },
]

const values = [
  {
    title: 'Rigueur',
    description:
      "Chaque pièce passe par les étapes méticuleuses du dessin, du découpage, du sertissage et de la soudure. Rien n'est laissé au hasard.",
  },
  {
    title: 'Perfection du geste',
    description:
      'La main, et rien que la main. Vingt ans d\'apprentissage tiennent dans un coup de diamant juste et dans une soudure nette.',
  },
  {
    title: 'Qualité',
    description:
      "Verres français et européens, plombs patinés à l'ancienne, finitions irréprochables. Chaque pièce est signée et datée.",
  },
  {
    title: 'Beauté',
    description:
      "Un vitrail est un objet utile autant qu'un objet d'émotion. Il doit d'abord être beau, longtemps.",
  },
]

export function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="L'Artisan"
      />

      {/* Intro + vidéo */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          {/* Faux lecteur vidéo, format paysage */}
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="group relative mx-auto w-full max-w-4xl cursor-pointer overflow-hidden rounded-3xl border border-border/70 bg-black shadow-[var(--shadow-lg)]"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://i.ibb.co/B5d8bn2x/Gouttes-d-Or-et-d-Ambres-couloir-1152x1536.webp"
                alt="Aperçu vidéo — Sandre Casse dans son atelier"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
              />
              {/* Voile sombre cinématique */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.12_0.02_150/0.7)_100%)]"
              />
              {/* Grain subtle / lueur chaude */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.14_82/0.15),transparent_60%)]"
              />

              {/* Badge "en lecture" en haut à gauche */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 font-display text-[11px] tracking-[0.22em] uppercase text-white/85 backdrop-blur-md">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
                </span>
                Vidéo
              </div>

              {/* Titre + sous-titre */}
              <figcaption className="absolute inset-x-6 bottom-16 text-white sm:inset-x-10 sm:bottom-24">
                <p className="font-display text-[11px] tracking-[0.3em] uppercase text-gold/90">
                  À l&apos;atelier
                </p>
                <p className="mt-2 font-display text-xl font-light leading-tight sm:text-2xl">
                  Sandre Casse, maître verrier
                </p>
                <p className="mt-1 font-display text-xs italic text-white/60">
                  Portrait filmé, 1 min 07
                </p>
              </figcaption>

              {/* Bouton Play central */}
              <button
                type="button"
                aria-label="Lire la vidéo"
                className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/25 sm:size-24"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 animate-ping rounded-full bg-white/10"
                  style={{ animationDuration: '2.8s' }}
                />
                <span className="relative flex size-14 items-center justify-center rounded-full bg-gold text-[oklch(0.22_0.04_60)] shadow-[0_10px_30px_-6px_oklch(0.72_0.14_82/0.6)] sm:size-16">
                  <Play
                    className="size-6 translate-x-0.5 fill-current"
                    strokeWidth={0}
                    aria-hidden
                  />
                </span>
              </button>

              {/* Contrôles bas — faux lecteur */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6">
                {/* Barre de progression */}
                <div className="flex items-center gap-3">
                  <span className="font-display text-[11px] tabular-nums text-white/85">
                    00:24
                  </span>
                  <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
                    <div className="absolute inset-y-0 left-0 w-[36%] rounded-full bg-gradient-to-r from-gold/80 to-gold" />
                    <span
                      aria-hidden
                      className="absolute top-1/2 left-[36%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_4px_oklch(0.72_0.14_82/0.25)]"
                    />
                  </div>
                  <span className="font-display text-[11px] tabular-nums text-white/60">
                    01:07
                  </span>
                  <span className="mx-1 hidden h-4 w-px bg-white/20 sm:block" />
                  <Volume2
                    className="hidden size-4 text-white/80 sm:block"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                  <Maximize2
                    className="hidden size-4 text-white/80 sm:block"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </motion.figure>

          {/* Texte dessous */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="mx-auto mt-14 max-w-3xl space-y-6"
          >
              <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
                <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
                Une reconversion choisie
              </p>
              <h2 className="font-display text-4xl font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
                De la gestion d&apos;équipes{' '}
                <span className="font-display-italic text-primary">
                  à la main sur le verre.
                </span>
              </h2>
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Avant d&apos;être artisan d&apos;art, j&apos;ai travaillé 28 ans
                en direction des ressources humaines de grands Groupes de
                services, hypermarchés, banques, assurances. Mon énergie et
                mes tenues colorées ont, pendant toutes ces années, marqué les
                différentes équipes que j&apos;ai managées.
              </p>
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Qui n&apos;est pas attiré par la lumière, par le bien-être
                qu&apos;elle procure ? Sa déclinaison en couleurs améliore notre
                vie et notre psychisme, en tant qu&apos;anti-stress, elle
                apporte joie, calme et « feel good ». J&apos;ai cherché à la
                comprendre : j&apos;ai étudié la chromothérapie et d&apos;autres
                médecines énergétiques.
              </p>
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Ma mère, peintre et passionnée de peinture, m&apos;a accompagnée
                à la découverte des peintres. J&apos;ai pu m&apos;initier à
                leurs techniques de retranscription de la lumière et des
                couleurs. J&apos;ai continué ces recherches dans tous les arts
                visuels, puis dans la création de bijoux et d&apos;objets de
                décoration.
              </p>
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Le vitrail, lui, était présent grâce à mon père, qui avait
                décoré la maison familiale de nombreuses pièces, réalisées
                selon les préceptes de maîtres verriers tels que Bruno Tosi ou
                Sante &amp; Diego Pizzol. C&apos;est ainsi qu&apos;aujourd&apos;hui
                je me tourne naturellement vers un métier qui allie couleur,
                lumière, création et verre.
              </p>
              <p className="font-display text-lg italic text-primary">
                Sandre Casse
              </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-border/60 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionTitle
            eyebrow="Une vocation construite"
            title={
              <>
                Cinq étapes clés{' '}
                <span className="font-display-italic text-primary">
                  d&apos;une reconversion
                </span>
              </>
            }
          />
          <ol className="relative mt-16 space-y-6 before:absolute before:left-8 before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-gold/60 before:via-primary/40 before:to-transparent">
            {timeline.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="relative flex gap-6 rounded-3xl border border-border/70 bg-card/85 p-7 pl-20 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 sm:p-8 sm:pl-24"
              >
                <span className="absolute left-3 top-7 flex size-11 items-center justify-center rounded-full border border-gold/40 bg-background text-primary">
                  <t.icon className="size-5" strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <p className="font-display text-[11px] tracking-[0.3em] text-gold uppercase">
                    {t.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Citation philosophie */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.blockquote
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <Quote className="mx-auto mb-6 size-8 text-gold/70" aria-hidden />
            <p className="font-display text-[1.4rem] font-light italic leading-[1.35] tracking-[-0.01em] text-foreground sm:text-[1.75rem]">
              Ce métier passionnant, qui permet de créer de mes mains, véhicule
              les valeurs simples de l&apos;artisanat d&apos;art : rigueur,
              perfection du geste, qualité et beauté.
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Valeurs */}
      <section className="border-b border-border/60 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionTitle
            eyebrow="Mes valeurs"
            title={
              <>
                Quatre principes,{' '}
                <span className="font-display-italic text-primary">
                  tenus obstinément.
                </span>
              </>
            }
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="rounded-2xl border border-border/70 bg-card/70 p-7 ring-1 ring-foreground/5"
              >
                <p className="font-display text-xl font-medium tracking-tight text-foreground">
                  {v.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
