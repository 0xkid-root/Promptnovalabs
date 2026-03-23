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
    title: 'OpenAI announces massive updates to GPT-4 architecture',
    description:
      'The new architecture promises 2x speed and a significantly larger context window for complex reasoning tasks.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle-lBG7bQ2PmxIGFx1yBkaTluIV0J0TIb.jpeg',
    featured: true,
  },
  {
    id: 2,
    date: 'October 22, 2024',
    title: 'Anthropic launches Claude 3.5 Sonnet',
    description:
      'A new frontier model that benchmarks higher in coding and logic tasks than previous industry leaders.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-gO3puFe7A46oedku3pj3GwAaBoTwgn.jpeg',
  },
  {
    id: 3,
    date: 'October 20, 2024',
    title: 'The rise of local LLMs: Running AI on your laptop',
    description:
      'How tools like Ollama and Llama are democratizing access to powerful models without cloud dependencies.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIHubHomepage-8IfuXKLxl5XSdoaxH8JlvDAuC25LWS.jpeg',
  },
]

export function LatestNews() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">Latest in AI</h2>
          <a href="/news" className="text-primary hover:underline text-sm">
            Read all news →
          </a>
        </div>

        {/* Featured News */}
        {newsItems[0] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-2xl border border-primary/20 overflow-hidden bg-card hover:border-primary/40 transition-colors cursor-pointer"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary text-foreground">Featured</Badge>
                <p className="text-sm text-foreground/60 mb-2">{newsItems[0].date}</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{newsItems[0].title}</h3>
                <p className="text-foreground/70 mb-6">{newsItems[0].description}</p>
                <Button className="w-fit rounded-full bg-primary hover:bg-primary/90">
                  Read Full Article
                </Button>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.slice(1).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-primary/10 bg-card hover:border-primary/30 h-full overflow-hidden cursor-pointer">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <p className="text-xs text-foreground/60">{item.date}</p>
                  <CardTitle className="text-foreground mt-2">{item.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="#" className="text-primary text-sm font-medium hover:underline">
                    Read more →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
