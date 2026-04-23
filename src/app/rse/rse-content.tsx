'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  Leaf,
  Recycle,
  Sprout,
  TreePine,
} from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

const hero = {
  eyebrow: 'RSE & Partenaires',
  title: 'Notre engagement RSE',
  description:
    "Chez L'Énergie des Couleurs, nous pensons que le savoir-faire des vitraux et la responsabilité sociétale peuvent se conjuguer, concrètement, pas en déclarations.",
  image:
    'https://i.ibb.co/jZD5w6g7/Iris-bleu-de-mediterranee-scaled-1200x1600.jpg',
}

const axes = [
  {
    n: '01',
    icon: Sprout,
    title: 'Une économie durable',
    description:
      "Participer au développement d'une économie qui ne sacrifie ni la matière, ni les gens. Faire travailler des artisans, choisir des matières premières françaises et européennes, privilégier la filière courte.",
  },
  {
    n: '02',
    icon: GraduationCap,
    title: 'Transmettre le savoir',
    description:
      "Former, accueillir, démontrer. Les stages à l'atelier, les Journées Européennes des Métiers d'Art, l'ouverture aux CAP, aux reconvertis, aux curieux, pour que le métier de vitrailliste vive dans dix, vingt, cinquante ans.",
  },
  {
    n: '03',
    icon: Recycle,
    title: 'Réduire les émissions CO₂',
    description:
      "Intégrer dans chaque projet une vigilance sur le bilan carbone : choix des matériaux, transport, fin de vie, et participation active à des initiatives de neutralité carbone comme Team for the Planet.",
  },
]

const tftpLevers = [
  {
    title: 'Zéro émission',
    text: "Développer des sources d'énergie et des matériaux qui n'émettent pas de gaz à effet de serre.",
  },
  {
    title: 'Efficacité énergétique',
    text: "Améliorer les rendements énergétiques et diminuer la consommation de ressources.",
  },
  {
    title: 'Sobriété',
    text: "Réduire nos besoins pour limiter les émissions tout au long de la chaîne de production.",
  },
  {
    title: 'Captation',
    text: "Capturer et piéger les gaz à effet de serre afin de réduire leur concentration.",
  },
]

const partners = [
  {
    name: 'Team for the Planet',
    role: 'Actionnaire depuis 2022',
    description:
      "L'atelier est actionnaire de Team for the Planet, coopérative mondiale qui finance des innovations à impact climatique.",
    link: 'https://www.team-for-the-planet.com',
  },
  {
    name: 'INMA',
    role: "Institut National des Métiers d'Art",
    description:
      "Inscrite à l'Annuaire officiel des Métiers d'Art de France, Domaine de l'Architecture, spécialité Maître verrier (Vitrailliste).",
    link: 'https://www.institut-metiersdart.org',
  },
  {
    name: 'ECCO',
    role: 'European Confederation of Conservator-Restorers',
    description:
      "Les restaurations sont réalisées dans le respect du code déontologique défini par les Règles Professionnelles de l'ECCO.",
    link: 'https://www.ecco-eu.org',
  },
]

export function RseContent() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="RSE & Partenaires"
      />

      {/* 3 axes */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionTitle
            eyebrow="3 axes de priorité"
            title={
              <>
                Un artisanat qui prend sa part{' '}
                <span className="font-display-italic text-primary">
                  dans la transition.
                </span>
              </>
            }
            description="Les engagements se traduisent par des actions concrètes, intégrées au quotidien de l'atelier."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {axes.map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5"
              >
                <p className="font-display text-5xl font-light text-gold/80">
                  {a.n}
                </p>
                <span className="mt-6 flex size-11 items-center justify-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/15">
                  <a.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-foreground">
                  {a.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Team for the Planet */}
      <section className="border-b border-border/60 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
              className="space-y-6"
            >
              <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
                <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
                Team for the Planet
              </p>
              <h2 className="font-display text-4xl font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
                Actionnaire depuis 2022 {' '}
                <span className="font-display-italic text-primary">
                  personnellement et comme entreprise.
                </span>
              </h2>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground sm:text-[17px]">
                En 2022, je me suis engagée en tant qu&apos;actionnaire de Team
                for the Planet, à titre personnel et sociétal :
              </p>
              <ul className="space-y-3">
                {[
                  'Pour pouvoir contribuer à un nouveau modèle pour nos générations actuelles et futures.',
                  "Pour que mon entreprise participe à l'effort collectif et minimise son impact sur la planète.",
                  "Pour que ma fille puisse vivre sa vie pleinement, dans d'aussi bonnes conditions que j'ai pu vivre la mienne.",
                ].map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85"
                  >
                    <TreePine
                      className="mt-0.5 size-4 shrink-0 text-gold"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.team-for-the-planet.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-display text-[14px] text-primary transition-colors hover:text-gold"
              >
                Découvrir Team for the Planet
                <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="rounded-3xl border border-border/70 bg-card/85 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 sm:p-10"
            >
              <p className="font-display text-[11px] tracking-[0.3em] uppercase text-gold">
                4 leviers TFTP
              </p>
              <p className="mt-3 font-display text-[1.5rem] font-light leading-tight tracking-tight text-foreground">
                Vingt problèmes majeurs, quatre leviers.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                Team for the Planet finance des innovations qui réduisent
                drastiquement les émissions de gaz à effet de serre, pour
                atteindre la neutralité carbone au plus vite.
              </p>
              <dl className="mt-7 space-y-5 border-t border-border/60 pt-7">
                {tftpLevers.map((l, idx) => (
                  <div
                    key={l.title}
                    className="flex gap-4"
                  >
                    <span className="font-display text-sm tabular-nums text-gold">
                      0{idx + 1}
                    </span>
                    <div>
                      <dt className="font-display text-[15px] font-medium text-foreground">
                        {l.title}
                      </dt>
                      <dd className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                        {l.text}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vitraux sans plomb */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Leaf className="size-6" strokeWidth={1.5} aria-hidden />
            </span>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
              Vers un vitrail{' '}
              <span className="font-display-italic text-primary">
                sans plomb ?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground sm:text-[17px]">
              L&apos;atelier participe activement à la recherche d&apos;alternatives
              au plomb traditionnel, baguettes H sans plomb, pistes
              d&apos;alliages moins toxiques, optimisation des procédés Tiffany.
              Un dossier tenu à jour dans le journal de l&apos;atelier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="border-b border-border/60 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionTitle
            eyebrow="Les partenaires"
            title={
              <>
                Les institutions et coopératives{' '}
                <span className="font-display-italic text-primary">
                  qui accompagnent l&apos;atelier
                </span>
              </>
            }
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {partners.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="group flex flex-col rounded-3xl border border-border/70 bg-card/80 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/25"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-xl font-medium tracking-tight text-foreground">
                      {p.name}
                    </p>
                    <p className="mt-1 font-display text-[12.5px] italic text-muted-foreground">
                      {p.role}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-gold" />
                </div>
                <p className="mt-5 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
