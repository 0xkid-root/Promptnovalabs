'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const newsItems = [
  {
    id: 1,
    date: 'October 24, 2024',
    category: 'Models',
    readTime: '5 min read',
    title: 'OpenAI announces massive updates to GPT-4 architecture',
    description:
      'The new architecture promises 2x speed and a significantly larger context window for complex reasoning tasks.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle-lBG7bQ2PmxIGFx1yBkaTluIV0J0TIb.jpeg',
    featured: true,
  },
  {
    id: 2,
    date: 'October 22, 2024',
    category: 'Anthropic',
    readTime: '4 min read',
    title: 'Anthropic launches Claude 3.5 Sonnet',
    description:
      'A new frontier model that benchmarks higher in coding and logic tasks than previous industry leaders.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-gO3puFe7A46oedku3pj3GwAaBoTwgn.jpeg',
  },
  {
    id: 3,
    date: 'October 20, 2024',
    category: 'Open Source',
    readTime: '6 min read',
    title: 'The rise of local LLMs: Running AI on your laptop',
    description:
      'How tools like Ollama and Llama are democratizing access to powerful models without cloud dependencies.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIHubHomepage-8IfuXKLxl5XSdoaxH8JlvDAuC25LWS.jpeg',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function LatestNews() {
  const featured = newsItems[0]
  const rest = newsItems.slice(1)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex items-end justify-between border-b border-primary/15 pb-6"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">
              What&apos;s happening
            </p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Latest in AI
            </h2>
          </div>
          <a
            href="/news"
            className="group flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors pb-1"
          >
            All news
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Featured Article */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group mb-10 grid md:grid-cols-5 rounded-2xl border border-primary/15 overflow-hidden bg-card hover:border-primary/35 transition-all duration-300 cursor-pointer"
          >
            {/* Image — takes 3 of 5 cols */}
            <div className="relative md:col-span-3 h-64 md:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-transparent to-transparent md:hidden" />
            </div>

            {/* Content — takes 2 of 5 cols */}
            <div className="md:col-span-2 flex flex-col justify-between p-8 border-l border-primary/10">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Badge className="bg-primary/15 text-primary border-0 text-xs font-medium px-2.5 py-0.5">
                    Featured
                  </Badge>
                  <span className="text-xs text-foreground/40 font-medium uppercase tracking-wide">
                    {featured.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-snug mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                  {featured.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-foreground/40">{featured.date}</span>
                  <span className="text-xs text-foreground/30">{featured.readTime}</span>
                </div>
                <Button
                  size="sm"
                  className="rounded-full bg-primary hover:bg-primary/85 text-xs px-4"
                >
                  Read Article
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2"
        >
          {rest.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="group border-primary/10 bg-card hover:border-primary/30 overflow-hidden cursor-pointer h-full transition-all duration-300 hover:shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.12)]">
                <div className="grid grid-cols-5 h-full">
                  {/* Image */}
                  <div className="col-span-2 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="col-span-3 flex flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/60">
                          {item.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-foreground/20" />
                        <span className="text-[10px] text-foreground/35">{item.readTime}</span>
                      </div>
                      <CardTitle className="text-foreground text-sm font-semibold leading-snug mb-2 line-clamp-2">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/55 text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </CardDescription>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-primary/8">
                      <span className="text-[11px] text-foreground/35">{item.date}</span>
                      <a
                        href="#"
                        className="text-[11px] text-primary font-medium hover:underline underline-offset-2 transition-opacity"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}