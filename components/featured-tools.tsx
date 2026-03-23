'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Image, Code } from 'lucide-react'

const tools = [
  {
    id: 1,
    name: 'ChatGPT (GPT-4o)',
    description: 'OpenAI\'s most advanced multimodal model with superior reasoning.',
    category: 'LLM',
    tags: ['Text', 'Vision'],
    icon: MessageSquare,
    color: 'from-green-400 to-green-600',
  },
  {
    id: 2,
    name: 'Midjourney v6',
    description: 'State-of-the-art AI image generation with artistic control.',
    category: 'Image',
    tags: ['Generative', 'AI'],
    icon: Image,
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer. Suggests code and helps you code faster.',
    category: 'Coding',
    tags: ['IDE', 'DevTools'],
    icon: Code,
    color: 'from-blue-400 to-blue-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturedTools() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Featured AI Tools</h2>
          <a href="#" className="text-primary hover:underline text-sm">
            View All Tools →
          </a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-1 md:grid-cols-3"
        >
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <motion.div key={tool.id} variants={itemVariants}>
                <Card className="border-primary/20 bg-card hover:border-primary/40 transition-colors cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                    </div>
                    <CardTitle className="text-foreground">{tool.name}</CardTitle>
                    <CardDescription className="text-foreground/70">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 flex-wrap">
                      {tool.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary text-foreground/80 hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
