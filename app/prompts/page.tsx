import { Metadata } from 'next'
import { prompts, CATEGORIES } from "@/data/prompts";
import PromptsPageClient from './prompts-page-client'

export const metadata: Metadata = {
  title: 'AI Prompts Library | ChatGPT, Midjourney, Gemini Prompts | AINovaLab',
  description: 'Explore thousands of high-converting AI prompts for ChatGPT, Midjourney, Gemini & DALL-E. Copy prompts for image generation, writing, content creation & more. Updated daily.',
  keywords: ['AI prompts', 'ChatGPT prompts', 'Midjourney prompts', 'Gemini prompts', 'DALL-E prompts', 'prompt engineering', 'image generation', 'writing prompts', 'AI templates', 'creative prompts'],
  authors: [{ name: 'AINovaLab' }],
  openGraph: {
    title: 'AI Prompts Library | Premium Prompts for AI Tools',
    description: 'Discover high-converting prompts for all major AI platforms. Free & premium prompts for creators, developers & businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AINovaLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompts Library | AINovaLab',
    description: 'Explore the best AI prompts for ChatGPT, Midjourney, Gemini & more',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Generate static params for all prompts
export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }))
}

export default function PromptsPage() {
  return <PromptsPageClient />
}