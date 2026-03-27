'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, ArrowLeft, ExternalLink, Check } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { FAQ } from '@/components/faq'
import { aiTools } from '@/data/tools'

function ToolDetailContent() {
  const searchParams = useSearchParams()
  const toolId = searchParams.get('id')
  const [tool, setTool] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (toolId) {
      const foundTool = aiTools.find((t) => t.id === parseInt(toolId))
      setTool(foundTool)
    }
    setIsLoading(false)
  }, [toolId])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex items-center justify-center py-20">
          <p className="text-foreground/60">Loading tool information...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-20">
          <Link href="/tools">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
          </Link>
          <p className="text-foreground/60">Tool not found</p>
        </main>
        <Footer />
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        {/* Back Button */}
        <Link href="/tools">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
          </motion.div>
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="text-6xl">{tool.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold text-foreground">{tool.name}</h1>
                <Badge className="bg-primary text-foreground">{tool.category}</Badge>
              </div>
              <p className="text-lg text-foreground/70 mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-foreground/80">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <Card className="border-primary/10 bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="text-sm text-foreground/60">Rating</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{tool.rating}</p>
              </CardContent>
            </Card>
            <Card className="border-primary/10 bg-card">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60 mb-2">Users</p>
                <p className="text-2xl font-bold text-foreground">{tool.users}</p>
              </CardContent>
            </Card>
            <Card className="border-primary/10 bg-card">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60 mb-2">Pricing</p>
                <p className="text-lg font-bold text-foreground">{tool.pricing}</p>
              </CardContent>
            </Card>
          </div>

          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Visit Official Website
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 mb-12"
        >
          {/* Features */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Use Cases */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Best For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{useCase}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pros */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card border-green-500/20">
              <CardHeader>
                <CardTitle className="text-foreground text-green-400">Pros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.pros.map((pro, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{pro}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cons */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-foreground text-red-400">Cons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.cons.map((con, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-red-500 font-bold mt-0.5">×</span>
                      <p className="text-foreground/80">{con}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <Card className="border-primary/10 bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(tool.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-sm text-foreground/60 mb-1">{key}</span>
                    <span className="text-foreground font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            {tool.name} is ready to help you achieve your goals. Visit the official website to create an account and start using the tool today.
          </p>
          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
              Get Started Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
        

        <FAQ />

        
      </main>


      <Footer />
    </div>
  )
}

export default function ToolDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"><Header /><div className="container mx-auto max-w-7xl py-12 px-4">Loading tool...</div></div>}>
      <ToolDetailContent />
      
    </Suspense>
  )
}
