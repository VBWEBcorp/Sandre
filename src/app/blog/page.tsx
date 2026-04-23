import type { Metadata } from 'next'

import BlogPageContent from './blog-page-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { blogPosts } from '@/lib/blog-posts'
import { siteConfig } from '@/lib/seo'

const description =
  "Carnets, chroniques et coulisses de l'atelier Énergie des Couleurs, évènements, savoir-faire, historiettes et styles de vitraux."

export const metadata: Metadata = {
  title: 'Blog',
  description,
  alternates: { canonical: '/blog' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Blog', description, '/blog'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Blog',
      description,
      url: `${siteConfig.url}/blog`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: blogPosts.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${siteConfig.url}/blog/${p.slug}`,
          name: p.title,
        })),
      },
    },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageContent />
    </>
  )
}
