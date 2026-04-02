import { Metadata } from 'next'
import NewsPageClient from './news-page-client'
import { articles } from '@/data/newsArticles'

export const metadata: Metadata = {
  title: 'AI News & Updates 2024 | AINovaLab',
  description: 'Stay updated with the latest AI breakthroughs, product launches, and industry insights. Daily news about ChatGPT, Claude, Midjourney, and more.',
  keywords: ['AI news', 'artificial intelligence', 'AI updates', 'machine learning', 'LLM', 'generative AI', 'AI tools'],
  authors: [{ name: 'AINovaLab' }],
  openGraph: {
    title: 'AI News & Updates | AINovaLab',
    description: 'Latest AI breakthroughs and product launches',
    type: 'website',
    locale: 'en_US',
    siteName: 'AINovaLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI News & Updates | AINovaLab',
    description: 'Stay updated with the latest AI breakthroughs',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Generate static params for all article slugs
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function NewsPage() {
  return <NewsPageClient />
}
