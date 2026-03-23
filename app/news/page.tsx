'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const newsArticles = [
  {
    id: 1,
    date: 'October 24, 2024',
    title: 'OpenAI announces massive updates to GPT-4 architecture',
    description:
      'The new architecture promises 2x speed and a significantly larger context window for complex reasoning tasks, revolutionizing how developers build AI applications.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle-lBG7bQ2PmxIGFx1yBkaTluIV0J0TIb.jpeg',
    category: 'Models & APIs',
    featured: true,
  },
  {
    id: 2,
    date: 'October 22, 2024',
    title: 'Anthropic launches Claude 3.5 Sonnet',
    description:
      'A new frontier model that benchmarks higher in coding and logic tasks than previous industry leaders.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-gO3puFe7A46oedku3pj3GwAaBoTwgn.jpeg',
    category: 'Models & APIs',
  },
  {
    id: 3,
    date: 'October 20, 2024',
    title: 'The rise of local LLMs: Running AI on your laptop',
    description:
      'How tools like Ollama and Llama are democratizing access to powerful models without cloud dependencies.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIHubHomepage-8IfuXKLxl5XSdoaxH8JlvDAuC25LWS.jpeg',
    category: 'Tools & Products',
  },
  {
    id: 4,
    date: 'October 18, 2024',
    title: 'Meta open-sources Llama 3 with 70B parameters',
    description:
      'A major leap for the open-source AI community as Meta releases their most capable foundation model to date.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle-lBG7bQ2PmxIGFx1yBkaTluIV0J0TIb.jpeg',
    category: 'Open Source',
  },
  {
    id: 5,
    date: 'October 16, 2024',
    title: 'GitHub Copilot Enterprise introduces fine-tuned models',
    description:
      'Organizations can now customize Copilot code suggestions using their own codebase and internal coding guidelines.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-gO3puFe7A46oedku3pj3GwAaBoTwgn.jpeg',
    category: 'Tools & Products',
  },
  {
    id: 6,
    date: 'October 14, 2024',
    title: 'EU AI Act passes final vote, setting global standards',
    description:
      'The comprehensive framework categorizes AI systems by risk and introduces strict transparency requirements.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIHubHomepage-8IfuXKLxl5XSdoaxH8JlvDAuC25LWS.jpeg',
    category: 'Regulation',
  },
]

const categories = ['All Updates', 'Models & APIs', 'Tools & Products', 'Industry Insights', 'Research', 'Open Source']

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Updates')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = newsArticles.filter(
    (article) =>
      (selectedCategory === 'All Updates' || article.category === selectedCategory) &&
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              AI <span className="gradient-text">News & Updates</span>
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Stay updated with the rapidly evolving world of artificial intelligence. Breakthroughs, product launches, and industry insights.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 relative"
          >
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-secondary px-12 py-3 text-foreground placeholder:text-foreground/50 border border-primary/20 focus:border-primary/50 focus:outline-none transition-colors"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 flex gap-2 overflow-x-auto pb-2"
          >
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
          </motion.div>

          {/* Featured Article */}
          {selectedCategory === 'All Updates' && filteredArticles[0] && (
            <Link href={`/article?id=${filteredArticles[0].id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 rounded-2xl border border-primary/20 overflow-hidden bg-card hover:border-primary/40 transition-colors cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-primary text-foreground">Featured</Badge>
                    <p className="text-sm text-foreground/60 mb-2">{filteredArticles[0].date}</p>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{filteredArticles[0].title}</h2>
                    <p className="text-foreground/70 mb-6">{filteredArticles[0].description}</p>
                    <Button className="w-fit rounded-full bg-primary hover:bg-primary/90">
                      Read Full Article
                    </Button>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          )}

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.slice(selectedCategory === 'All Updates' ? 1 : 0).map((article, idx) => (
              <Link key={article.id} href={`/article?id=${article.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-primary/10 bg-card hover:border-primary/30 h-full overflow-hidden cursor-pointer">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-xs text-foreground/60">{article.date}</p>
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      </div>
                      <CardTitle className="text-foreground">{article.title}</CardTitle>
                      <CardDescription className="text-foreground/70 line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary text-sm font-medium hover:underline">
                        Read more →
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/50 text-foreground hover:bg-primary/10"
            >
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
