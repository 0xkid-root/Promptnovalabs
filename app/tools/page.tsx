'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, Star } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const aiTools = [
  {
    id: 1,
    name: 'ChatGPT (GPT-4o)',
    description: 'OpenAI\'s most advanced multimodal model with superior reasoning capabilities.',
    category: 'LLM',
    tags: ['Text', 'Vision', 'Reasoning'],
    rating: 4.9,
    users: '2.5M+',
    icon: '🤖',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 2,
    name: 'Midjourney v6',
    description: 'State-of-the-art AI image generation with artistic control and high quality output.',
    category: 'Image Generation',
    tags: ['Generative', 'Art', 'Design'],
    rating: 4.8,
    users: '1.2M+',
    icon: '🎨',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer. Suggests code and helps you code faster and better.',
    category: 'Coding',
    tags: ['IDE', 'DevTools', 'Code'],
    rating: 4.7,
    users: '1.8M+',
    icon: '⚙️',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 4,
    name: 'Claude (Anthropic)',
    description: 'Constitutional AI model focused on safety and helpfulness with extended context.',
    category: 'LLM',
    tags: ['Text', 'Conversational', 'Safe'],
    rating: 4.8,
    users: '800K+',
    icon: '💡',
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 5,
    name: 'DALL-E 3',
    description: 'Generate images from text descriptions with improved quality and prompt adherence.',
    category: 'Image Generation',
    tags: ['Generative', 'OpenAI', 'Vision'],
    rating: 4.6,
    users: '600K+',
    icon: '🖼️',
    color: 'from-pink-400 to-pink-600',
  },
  {
    id: 6,
    name: 'Runway ML',
    description: 'AI-powered video generation, editing, and creative tools for content creators.',
    category: 'Video',
    tags: ['Video', 'Editing', 'Creative'],
    rating: 4.5,
    users: '450K+',
    icon: '🎬',
    color: 'from-red-400 to-red-600',
  },
  {
    id: 7,
    name: 'Perplexity AI',
    description: 'Ask anything with real-time web access and verified sources.',
    category: 'Search',
    tags: ['Research', 'Web', 'Sources'],
    rating: 4.7,
    users: '500K+',
    icon: '🔍',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    id: 8,
    name: 'NotebookLM',
    description: 'Create interactive notebooks with AI-powered insights from your documents.',
    category: 'Research',
    tags: ['Notebooks', 'Research', 'Notes'],
    rating: 4.4,
    users: '300K+',
    icon: '📓',
    color: 'from-yellow-400 to-yellow-600',
  },
]

const categories = ['All Tools', 'LLM', 'Image Generation', 'Coding', 'Video', 'Search', 'Research']

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const filteredTools = aiTools
    .filter(
      (tool) =>
        (selectedCategory === 'All Tools' || tool.category === selectedCategory) &&
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      return b.users.localeCompare(a.users)
    })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16 px-4">
        <div className="container mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured AI <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore our curated collection of the most powerful and innovative AI tools available today.
            </p>
          </motion.div>

          {/* Search and Sort */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex flex-col gap-4"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/50" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-secondary px-12 py-3 text-foreground placeholder:text-foreground/50 border border-primary/20 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-foreground'
                        : 'bg-secondary text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground border border-primary/20 focus:border-primary/50 focus:outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredTools.map((tool) => (
              <motion.div key={tool.id} variants={itemVariants}>
                <Card className="border-primary/10 bg-card hover:border-primary/30 h-full flex flex-col transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg text-2xl`}>
                        {tool.icon}
                      </div>
                      <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                    </div>
                    <CardTitle className="text-foreground text-lg">{tool.name}</CardTitle>
                    <CardDescription className="text-foreground/70 line-clamp-2">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4 flex-1">
                      <div className="flex gap-2 flex-wrap">
                        {tool.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary text-foreground/80 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-border pt-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-semibold text-foreground">{tool.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">Users</span>
                        <span className="font-semibold text-foreground">{tool.users}</span>
                      </div>
                    </div>
                  </CardContent>

                  <div className="p-4 border-t border-border">
                    <Link href={`/tool?id=${tool.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full border-primary/50 text-foreground hover:bg-primary/10"
                      >
                        Explore
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-foreground/60">No tools found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
