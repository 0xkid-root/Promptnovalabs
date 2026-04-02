import { Metadata } from 'next'
import { aiTools, categories } from '@/data/tools'
import ToolsPageClient from './tools-page-client'

export const metadata: Metadata = {
  title: 'Best AI Tools Directory 2024 | AINovaLab',
  description: 'Explore the best AI tools for developers, creators, and businesses. Discover ChatGPT, Midjourney, Claude AI, GitHub Copilot & more. Updated daily with latest AI tools.',
  keywords: ['AI tools', 'artificial intelligence', 'AI software', 'ChatGPT', 'Midjourney', 'Claude AI', 'AI platforms', 'productivity tools', 'AI writing', 'image generation'],
  authors: [{ name: 'AINovaLab' }],
  openGraph: {
    title: 'Best AI Tools Directory | AINovaLab',
    description: 'Discover the best AI tools for developers, creators, and businesses',
    type: 'website',
    locale: 'en_US',
    siteName: 'AINovaLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Tools Directory | AINovaLab',
    description: 'Explore the best AI tools for developers, creators, and businesses',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Generate static params for all tools
export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }))
}

export default function ToolsPage() {
  return <ToolsPageClient />
}
