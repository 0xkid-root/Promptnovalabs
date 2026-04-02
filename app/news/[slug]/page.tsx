import { Metadata } from 'next'
import ArticleDetailPageClient from './article-detail-page-client'
import { articles } from '@/data/newsArticles'

interface Props {
  params: { slug: string }
}

// Generate metadata for each article
export async function generateMetadata({ params }: Props): Promise<Metadata> {
      const { slug } = await params   // ✅ FIX

  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found | AINovaLab',
      description: 'The requested article could not be found.',
    }
  }

  const title = `${article.title} | AINovaLab`
  const description = article.description || article.subtitle
  const canonicalUrl = `https://ainovalab.vercel.app/news/${article.slug}`
  
  return {
    title,
    description,
    keywords: [article.category, 'AI news', article.title, article.author],
    authors: [{ name: article.author }],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      locale: 'en_US',
      siteName: 'AINovaLab',
      url: canonicalUrl,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [article.image],
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

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}


export default async function ArticleDetailPage({ params }: any) {
  const { slug } = await params   

  return <ArticleDetailPageClient slug={slug} />
}
