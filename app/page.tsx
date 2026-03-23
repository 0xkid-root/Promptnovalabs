'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PromptOfTheDay } from '@/components/prompt-of-day'
import { FeaturedTools } from '@/components/featured-tools'
import { TailoredWorkflow } from '@/components/tailored-workflow'
import { LatestNews } from '@/components/latest-news'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <PromptOfTheDay />
        <FeaturedTools />
        <TailoredWorkflow />
        <LatestNews />
      </motion.main>
      <Footer />
    </div>
  )
}
