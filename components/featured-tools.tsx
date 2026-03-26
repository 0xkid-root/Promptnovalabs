'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Image, Code, ArrowUpRight, Sparkles } from 'lucide-react'

const tools = [
  {
    id: 1,
    name: 'ChatGPT (GPT-4o)',
    description: "OpenAI's most advanced multimodal model with superior reasoning and vision capabilities.",
    category: 'LLM',
    tags: ['Text', 'Vision'],
    icon: MessageSquare,
    color: 'from-emerald-400 to-teal-600',
    glow: 'rgba(52,211,153,0.15)',
    accent: '#34d399',
    stat: '4o',
    statLabel: 'Model',
  },
  {
    id: 2,
    name: 'Midjourney v6',
    description: 'State-of-the-art AI image generation with unrivaled artistic control and photorealism.',
    category: 'Image',
    tags: ['Generative', 'AI Art'],
    icon: Image,
    color: 'from-violet-400 to-purple-600',
    glow: 'rgba(167,139,250,0.15)',
    accent: '#a78bfa',
    stat: 'v6',
    statLabel: 'Version',
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer. Suggests code completions and accelerates your entire workflow.',
    category: 'Coding',
    tags: ['IDE', 'DevTools'],
    icon: Code,
    color: 'from-sky-400 to-blue-600',
    glow: 'rgba(56,189,248,0.15)',
    accent: '#38bdf8',
    stat: 'X',
    statLabel: 'Edition',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function FeaturedTools() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Curated Collection
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Featured AI Tools
            </h2>
            <p className="text-sm text-foreground/50 max-w-xs">
              Hand-picked tools powering the next generation of work.
            </p>
          </div>
          <a
            href="#"
            className="group hidden md:flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            View All Tools
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 grid-cols-1 md:grid-cols-3"
        >
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <motion.div key={tool.id} variants={itemVariants}>
                <Card
                  className="relative overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm
                    hover:border-border/80 transition-all duration-300 cursor-pointer group
                    hover:shadow-xl hover:-translate-y-1"
                  style={{
                    // Per-card glow on hover — done via CSS custom property trick
                    '--card-glow': tool.glow,
                  } as React.CSSProperties}
                >
                  {/* Top gradient bar */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${tool.color} opacity-70 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Background glow blob */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: tool.glow }}
                  />

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-5">
                      {/* Icon */}
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${tool.color} shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      {/* Stat pill */}
                      <div className="text-right">
                        <div
                          className="text-xl font-bold tracking-tight"
                          style={{ color: tool.accent }}
                        >
                          {tool.stat}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-medium">
                          {tool.statLabel}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <CardTitle className="text-base font-semibold text-foreground">
                        {tool.name}
                      </CardTitle>
                      <ArrowUpRight
                        className="h-4 w-4 text-foreground/20 group-hover:text-foreground/60 transition-colors shrink-0"
                      />
                    </div>
                    <CardDescription className="text-foreground/55 text-sm leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Divider */}
                    <div className="h-px bg-border/40 mb-4" />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {tool.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[11px] font-medium px-2.5 py-0.5 bg-secondary/60 text-foreground/70 border border-border/40"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[11px] shrink-0"
                        style={{ borderColor: tool.accent + '60', color: tool.accent }}
                      >
                        {tool.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile "View All" */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            View All Tools <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}