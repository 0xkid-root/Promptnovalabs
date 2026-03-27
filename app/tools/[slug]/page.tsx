'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, ArrowLeft, ExternalLink, Check } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FAQ } from '@/components/faq'
import { aiTools } from '@/data/tools'

type ToolType = {
  id: number
  name: string
  description: string
  category: string
  tags: string[]
  rating: number
  users: string
  icon: string
  color: string
  website: string
  pricing: string
  features: string[]
  specifications: Record<string, string | undefined> // FIXED
  useCases: string[]
  pros: string[]
  cons: string[]
}
export default function ToolDetailPage() {
  const params = useParams() as { slug: string }
const slug = params.slug

 const [tool, setTool] = useState<ToolType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
    if (slug) {
      const foundTool = aiTools.find((t) => t.slug === slug) || null
      setTool(foundTool)
      setIsLoading(false)
    }
  }, [slug])

  // 🔄 Loading State
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

  // ❌ Not Found
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">

        {/* Back Button */}
        <Link href="/tools">
          <Button variant="outline" className="mb-8 rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Button>
        </Link>

        {/* Header Section */}
        <div className="mb-12">
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
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60">Rating</p>
                <p className="text-2xl font-bold">{tool.rating}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60">Users</p>
                <p className="text-2xl font-bold">{tool.users}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60">Pricing</p>
                <p className="text-lg font-bold">{tool.pricing}</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <Button>
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              {tool.features.map((f, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{f}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              {tool.useCases.map((u, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>{u}</span>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>

        {/* Pros / Cons */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">

          <Card>
            <CardHeader>
              <CardTitle className="text-green-500">Pros</CardTitle>
            </CardHeader>
            <CardContent>
              {tool.pros.map((p, i) => (
                <p key={i}>✔ {p}</p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-500">Cons</CardTitle>
            </CardHeader>
            <CardContent>
              {tool.cons.map((c, i) => (
                <p key={i}>✖ {c}</p>
              ))}
            </CardContent>
          </Card>

        </div>

        {/* Specifications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(tool.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b py-2">
                <span>{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <FAQ />

      </main>

      <Footer />
    </div>
  )
}