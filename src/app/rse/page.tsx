import type { Metadata } from 'next'

import { RseContent } from './rse-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "L'engagement de l'atelier Énergie des Couleurs : économie durable, transmission du savoir, réduction des émissions CO₂, et les partenaires qui nous accompagnent."

export const metadata: Metadata = {
  title: 'RSE & Partenaires',
  description,
  alternates: { canonical: '/rse' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('RSE & Partenaires', description, '/rse'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'RSE & Partenaires', path: '/rse' },
    ]),
  ],
}

export default function RsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RseContent />
    </>
  )
}
