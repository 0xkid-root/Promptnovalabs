'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PromptOfTheDay } from '@/components/prompt-of-day'
import { FeaturedTools } from '@/components/featured-tools'
import { LatestNews } from '@/components/latest-news'
import { Footer } from '@/components/footer'
import { FAQ } from '@/components/faq'
import { faqs } from '../data/faqs'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* ✅ SEO FAQ Schema */}
      <Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.slice(0, 4).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
  }}
/>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <PromptOfTheDay />
        <FeaturedTools />
        <LatestNews />
        <FAQ />
      </motion.main>

    </div>
  )
}