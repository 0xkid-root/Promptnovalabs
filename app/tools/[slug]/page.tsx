import { Metadata } from 'next'
import { aiTools, generateToolSchema } from '@/data/tools'
import { SchemaMarkup } from '@/components/schema-markup'
import ToolDetailPageClient from './tool-detail-page-client'

// Generate metadata for each tool page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = aiTools.find((t) => t.slug === params.slug)
  
  if (!tool) {
    return {
      title: 'Tool Not Found | AINovaLab',
      description: 'The requested AI tool could not be found.',
    }
  }

  const title = `${tool.name} - Review, Features & Pricing | AINovaLab`
  const description = `${tool.description.split('. ').slice(0, 2).join('. ')}. Discover features, use cases, pros & cons of ${tool.name}.`
  const canonicalUrl = `https://ainovalab.vercel.app/tools/${tool.slug}`
  
  // Extract keywords from tags and content
  const keywords = [
    tool.name,
    tool.category,
    ...tool.tags,
    'AI tool',
    'review',
    'pricing',
    'features',
    tool.category.toLowerCase(),
    `${tool.name.toLowerCase()} review`,
    `${tool.name.toLowerCase()} pricing`,
  ]

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'AINovaLab' }],
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'en_US',
      siteName: 'AINovaLab',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Generate static params for all tools
export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }))
}

export default function ToolDetailPage() {
  return <ToolDetailPageClient />
}