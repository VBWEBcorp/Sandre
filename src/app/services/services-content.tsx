'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Handshake,
  Leaf,
  Medal,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const hero = {
  eyebrow: 'Les Prestations',
  title: 'Création & Rénovation',
  description:
    "Un savoir-faire complet au service de votre projet, du dessin original à la pose, dans la plus pure tradition du vitrail au plomb, en Tiffany et en fusing.",
  image:
    'https://i.ibb.co/b5DDRY7W/Un-Salon-Cosy-scaled.webp',
}

const creationBullets = [
  'Fenêtres, bow-windows, ouvertures sans ouvrant, claustras, paravents',
  'Portes intérieures et extérieures, blasons, enseignes, chapelles…',
  'Tous styles : classique, Art déco, Art nouveau, abstrait, contemporain',
  'Verres naturels, colorés dans la masse ou peints',
  'Photos d\'avancement, visites d\'atelier, validation commune du rendu',
]

const renovationBullets = [
  'Étude préalable des options et devis adapté au budget',
  'Diagnostic avec photos, avant / après',
  "Techniques et esprit du maître verrier d'origine respectés",
  "Code déontologique défini par les Règles professionnelles de l'ECCO",
  'Partenariats avec syndics, municipalités, paroisses, entreprises de restauration',
]

const engagements = [
  {
    icon: Medal,
    title: 'Devis gratuit',
    description:
      "Des devis simples, clairs et gratuits pour toute prestation, création ou rénovation.",
  },
  {
    icon: Handshake,
    title: 'Proche de vous',
    description:
      "Une étude personnalisée et des conseils adaptés à votre lieu, votre projet et votre lumière.",
  },
  {
    icon: Clock,
    title: 'Expérience',
    description:
      "Le respect de la réalisation dans la tradition du meilleur savoir-faire, en toute transparence.",
  },
  {
    icon: Leaf,
    title: 'Local',
    description:
      'Des verres et matériaux majoritairement français, issus d\'une filière courte et responsable.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie décennale',
    description:
      "La pose de vos vitraux est couverte par une assurance décennale. L'atelier garantit soudures et plombs 10 ans.",
  },
]

export function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Les Prestations"
      />

      {/* La Création */}
      <section id="creation" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-md)]">
                <img
                  src="https://i.ibb.co/YBcv55YJ/Vitrail-fusion-ancien-et-modernite-scaled.webp"
                  alt="Création, Vitrail fusion ancien et modernité"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 rounded-full border border-border/70 bg-card/95 px-4 py-2 shadow-[var(--shadow-md)] backdrop-blur-sm">
                <p className="font-display text-[11px] tracking-[0.28em] uppercase text-primary">
                  La Création
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
                <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
                Optez pour le sur-mesure
              </p>
              <h2 className="font-display text-4xl font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
                Un projet qui vous{' '}
                <span className="font-display-italic text-primary">
                  ressemble et dure.
                </span>
              </h2>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground sm:text-[17px]">
                Les prestations s&apos;adressent aux particuliers et aux
                professionnels. Les créations prennent part à des projets
                architecturaux, à la décoration d&apos;intérieur, à la création
                artistique, à l&apos;événementiel, au spectacle…
              </p>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground sm:text-[17px]">
                De l&apos;idée du vitrail à sa pose, vous êtes acteur aux
                différentes étapes clés : définition de l&apos;objet verrier,
                choix des maquettes, colorisation, sélection des verres et des
                peintures. Des photos d&apos;avancement vous sont transmises et
                des visites à l&apos;atelier sont organisées pour valider le
                rendu final.
              </p>
              <ul className="space-y-2.5 pt-2">
                {creationBullets.map((b) => (
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
              <div className="pt-2">
                <Button asChild>
                  <Link href="/contact">
                    Télécharger le processus de création
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La Rénovation */}
      <section id="renovation" className="border-b border-border/60 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
              className="space-y-6"
            >
              <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
                <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
                Dans le respect de l&apos;œuvre originale
              </p>
              <h2 className="font-display text-4xl font-light leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
                Redonner vie à{' '}
                <span className="font-display-italic text-primary">
                  l&apos;existant, exactement.
                </span>
              </h2>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground sm:text-[17px]">
                Les prestations s&apos;inscrivent au travers de partenariats
                avec les syndicats de copropriété, les municipalités, les
                associations ou entreprises de restauration des monuments
                civils ou religieux, les paroisses…
              </p>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground sm:text-[17px]">
                Avant d&apos;engager une rénovation, il est important
                d&apos;étudier ensemble les options possibles et d&apos;établir
                un devis approprié au budget. Chacune des solutions proposées
                explique ses avantages et ses contraintes. La rénovation est
                réalisée conformément aux règles de l&apos;art, préserve au
                maximum l&apos;œuvre originale et suit les techniques et
                l&apos;esprit du maître verrier créateur, dans le respect du
                code déontologique défini par les Règles Professionnelles de
                l&apos;ECCO.
              </p>
              <ul className="space-y-2.5 pt-2">
                {renovationBullets.map((b) => (
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-md)]">
                <img
                  src="https://i.ibb.co/zhSGv7y9/Chemin-de-Lumiere-de-nuit-1-scaled.webp"
                  alt="Rénovation, Chemin de Lumière"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 rounded-full border border-border/70 bg-card/95 px-4 py-2 shadow-[var(--shadow-md)] backdrop-blur-sm">
                <p className="font-display text-[11px] tracking-[0.28em] uppercase text-primary">
                  La Rénovation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Les Engagements */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionTitle
            eyebrow="Les engagements"
            title={
              <>
                Cinq promesses,{' '}
                <span className="font-display-italic text-primary">
                  tenues sans exception.
                </span>
              </>
            }
            description="Des règles simples qui structurent chaque projet, et qui rassurent autant les particuliers que les prescripteurs."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {engagements.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="flex flex-col items-center rounded-2xl border border-border/70 bg-card/70 p-6 text-center ring-1 ring-foreground/5"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <e.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <p className="mt-4 font-display text-[15px] font-medium tracking-tight text-foreground">
                  {e.title}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {e.description}
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
