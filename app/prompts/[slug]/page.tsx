import { Metadata } from 'next'
import { prompts, generatePromptSchema } from '@/data/prompts'
import { SchemaMarkup } from '@/components/schema-markup'
import PromptDetailPageClient from './prompt-detail-page-client'

// Generate metadata for each prompt page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params

  const prompt = prompts.find((p) => p.slug === slug)

  if (!prompt) {
    return {
      title: 'Prompt Not Found | AINovaLab',
      description: 'The requested AI prompt could not be found.',
    }
  }

  const title = `${prompt.title} - AI Prompt for ${prompt.model} | AINovaLab`
  
  // Handle prompts with variations by using root prompt or first variation
  let promptText = prompt.prompt || '';
  if (!promptText && prompt.variations && prompt.variations.length > 0) {
    promptText = prompt.variations[0].prompt;
  }
  const description = `${promptText.substring(0, 155)}... Perfect for ${prompt.model}. ${prompt.isPremium ? 'Premium' : 'Free'} prompt. Copy now!`
  const canonicalUrl = `https://ainovalab.vercel.app/prompts/${prompt.slug}`

  // Extract keywords from tags and content
  const keywords = [
    prompt.title,
    prompt.model,
    ...prompt.tag.split(',').map(t => t.trim()),
    'AI prompt',
    'prompt engineering',
    `${prompt.model.toLowerCase()} prompt`,
    'prompt template',
    'AI content generation',
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
      images: prompt.image ? [
        {
          url: prompt.image,
          width: 1200,
          height: 630,
          alt: prompt.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: prompt.image ? [prompt.image] : [],
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

// Generate static params for all prompts
export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }))
}

export default async function PromptDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const prompt = prompts.find((p) => p.slug === slug)

  return (
    <>
      {prompt && <SchemaMarkup jsonLd={generatePromptSchema(prompt)} />}
      <PromptDetailPageClient slug={slug} />
    </>
  )
}
