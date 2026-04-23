import type { MetadataRoute } from 'next'

import { blogPosts } from '@/lib/blog-posts'
import { siteConfig } from '@/lib/seo'

const baseUrl = siteConfig.url

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/a-propos`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/temoignages`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/rse`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  ].map((p) => ({ ...p, lastModified: new Date() }))

  const postPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.isoDate),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...postPages]
}
