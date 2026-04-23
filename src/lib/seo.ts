export const siteConfig = {
  name: 'Énergie des Couleurs',
  shortName: 'Énergie des Couleurs',
  tagline: 'Atelier de vitrail d\'art',
  url: 'https://www.energiedescouleurs.com',
  locale: 'fr_FR',
  description:
    'Atelier de création et de restauration de vitraux contemporains et traditionnels. Pièces sur-mesure pour particuliers, architectes et patrimoine.',
  ogImage: 'https://www.energiedescouleurs.com/og.png',
  twitterHandle: '@energiedescouleurs',
  themeColor: '#1f5f3f',
  phone: '+33 6 12 34 56 78',
  email: 'contact@energiedescouleurs.com',
  address: {
    street: '7 rue des Artisans',
    city: 'Rennes',
    postalCode: '35000',
    country: 'FR',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page}, ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/gallery',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
