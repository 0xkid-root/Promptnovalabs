'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, Star } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { TOOLFAQ } from '@/components/toolfaq'
import { aiTools, categories } from '@/data/tools'

export default function ToolsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('latest')

  const filteredTools = aiTools
    .filter(
      (tool) =>
        (selectedCategory === 'All Tools' || tool.category === selectedCategory) &&
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
  if (sortBy === 'rating') return b.rating - a.rating

  if (sortBy === 'latest') return b.id - a.id  // ✅ NEW

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

      <main className="py-16 px-4">
        <div className="container mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
  Best AI Tools Directory <span className="gradient-text">for 2026</span>
</h1>

<p className="text-foreground/70 max-w-2xl mx-auto">
  Discover the best AI tools for content creation, image generation, video editing, and productivity. 
  Explore free and paid AI tools like ChatGPT, Claude, Gemini, and more — all in one place.
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
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category
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
                  <option value="latest">Latest</option> {/* ✅ ADD THIS */}
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
                <Link href={`/tools/${tool.slug}`}>
                  <Card className="border-primary/10 bg-card hover:border-purple-500 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer group overflow-hidden">

                    {/* 🔥 IMAGE SECTION */}
                    <div className="relative w-full h-40 overflow-hidden">
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* ✅ CATEGORY ON IMAGE */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/60 backdrop-blur text-white text-xs border-none">
                          {tool.category}
                        </Badge>
                      </div>

                      {/* ✅ GRADIENT OVERLAY (VERY IMPORTANT) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* 🔥 CONTENT */}
                    <CardHeader>
                      <CardTitle className="text-foreground text-lg">
                        {tool.name}
                      </CardTitle>

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
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full border-primary/50 text-foreground hover:bg-primary/10"
                      >
                        Explore
                      </Button>
                    </div>
                  </Card>
                </Link>


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

        <section className="max-w-5xl mx-auto mt-20 pt-12 px-6">
  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur">

    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-purple-500/10 rounded-2xl pointer-events-none" />

    {/* Heading */}
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Explore the Best AI Tools for Every Use Case
      </h2>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Discover top AI tools for content creation, automation, and productivity. 
        AINovaLab helps you compare features, find trending tools, and choose the right AI platform faster.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

      {[
        "Browse AI tools by category",
        "Compare features & pricing easily",
        "Discover trending AI platforms",
        "Find tools for creators & businesses",
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/[0.03] hover:border-violet-500/30 transition"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-violet-500/10 text-violet-400 text-sm">
            ✓
          </div>
          <p className="text-sm text-zinc-300">{item}</p>
        </div>
      ))}

    </div>

    {/* Bottom SEO line */}
    <p className="text-center text-xs text-zinc-500 mt-8 max-w-2xl mx-auto">
      Explore popular AI tools like ChatGPT, Claude, Gemini, and advanced AI video generators — all in one place.
    </p>

  </div>
</section>
        <TOOLFAQ />
      </main>

    </div>
  )
}
