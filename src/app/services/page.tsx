import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  "Verrières d'intérieur, vitrail contemporain, restauration de patrimoine, peinture sur verre, fusing, Tiffany : tout le savoir-faire de l'atelier."

const services = [
  { title: "Verrières d'intérieur", desc: "Cloisons vitrées, séparations de pièces, claustras sur-mesure pour faire entrer la lumière sans sacrifier l'intimité." },
  { title: 'Vitraux contemporains', desc: 'Pièces uniques, figuratives ou abstraites, pensées comme des tableaux de lumière.' },
  { title: 'Restauration de patrimoine', desc: "Reprise de vitraux anciens, haussmannien, Art Nouveau, Art Déco, liturgique, dans le respect des techniques d'origine." },
  { title: 'Peinture sur verre', desc: 'Grisaille, jaune d\'argent, émaux cuits au four, pour portraits et motifs figuratifs.' },
  { title: 'Fusing & thermoformage', desc: 'Fusion de verres colorés au four, bombages, sculptures plates pour pièces contemporaines.' },
  { title: 'Tiffany & petites pièces', desc: 'Lampes, suspensions, objets décoratifs et bijoux au ruban de cuivre.' },
]

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Services', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
