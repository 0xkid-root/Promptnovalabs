'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary mb-4">v0.2 is now live</p>
          
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Supercharge your workflow with{' '}
            <span className="gradient-text">AI Models</span>
          </h1>

          <p className="text-balance text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Discover the best AI tools, copy high-converting prompts, and stay updated with the latest AI news. Built for developers and creators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-foreground px-8"
              >
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/50 text-foreground hover:bg-primary/10"
              >
                View Prompt Library
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
