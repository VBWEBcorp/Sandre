import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BlogPostContent from './blog-post-content'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { blogPosts } from '@/lib/blog-posts'
import { siteConfig } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Article introuvable' }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      webPageJsonLd(post.title, post.excerpt, `/blog/${post.slug}`),
      breadcrumbJsonLd([
        { name: 'Accueil', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.isoDate,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: siteConfig.name },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  )
}
