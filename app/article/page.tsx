'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { ArrowLeft, Share2, Bookmark } from 'lucide-react'

const articleDatabase = {
  1: {
    id: 1,
    date: 'October 24, 2024',
    title: 'OpenAI announces massive updates to GPT-4 architecture',
    subtitle: 'The new architecture promises 2x speed and a significantly larger context window for complex reasoning tasks, revolutionizing how developers build AI applications and scale operations.',
    author: 'Elena Rodriguez',
    authorRole: 'Tech Writer',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle-DjWB8GHeiPGOEz2QulE8hms1tLxnUa.jpeg',
    category: 'Models & APIs',
    content: `In a scintillating keynote delivered early Tuesday morning, OpenAI revealed an extensive overhaul to the foundational architecture powering its flagship model, GPT-4. The highly anticipated update aims to unlock some of the most pressing bottlenecks users face, while simultaneously scaling context window availability for all API users scheduled for next week.

Since its original inception, GPT-4 has maintained its position at the industry benchmark for measuring, coding, and creative generation. However, an enterprise sub-class team features have maintained low velocity in speed. This latest iteration, dubbed mid-infra as GPT-4-Turbo, introduces a revolutionary degree-attention mechanism that fundamentally unifies how the model processes information.

The core of the new architecture focuses on efficiency without compromising the model's known for. According to the engineering team, the new systems were identified to be more impactful than prior versions.`,
    sections: [
      {
        title: "What's new in the architecture?",
        content: `The core of this update focuses on efficiency without compromising the emergent reasoning capabilities the model is known for. According to the engineering team, the new systems were identified to be optimal for measuring GPU resource utilization.`,
        points: [
          '2x Inference Speed: Time-to-first-token (TTFT) has been slashed by half, making real-time voice applications significantly less latent.',
          'Expanded Context Window: The model now supports up to 200k tokens natively, allowing developers to input richer context while maintaining computational efficiency and multiple books.',
          'Enhanced Multimodal Routing: A new visual-linguistic router dynamically allocates processing power depending on whether the prompt is heavily reliant on text or heavy on graphs, spatial awareness and more.'
        ]
      }
    ],
    quote: '"We didn\'t just tweak the weights; we re-engineered the plumbing. The result is a model that feels instantaneous while retaining that deep analytical rigor our developers expect."',
    quoteAuthor: 'Sam Altman, CEO',
    codeSnippet: {
      title: 'Developer Implications',
      description: 'For the streaming community, this update dramatically simplifies implementation. The newly introduced expanded allows seamless integration from existing infrastructure.',
      code: `import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse(prompt: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  
  console.log(response.choices[0].message);
}`
    },
    additionalContent: `OpenAI also indicated that fine-tuning capabilities for this new architecture will be rolled out to select enterprise partners later this quarter, opening the door for hyper-specialized use cases.`,
    relatedArticles: [
      {
        id: 2,
        date: 'October 22, 2024',
        title: 'Anthropic launches Claude 3.5 Sonnet',
        description: 'A new frontier model that benchmarks higher in coding and logic tasks than previous industry leaders.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-cPUDNzIBFRZQ1W1yjvgDkrxIqJEu5R.jpeg'
      },
      {
        id: 3,
        date: 'October 20, 2024',
        title: 'The rise of local LLMs: Running AI on your laptop',
        description: 'How tools like Ollama and Llama are democratizing access to powerful models without cloud dependencies.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIHubHomepage-8IfuXKLxl5XSdoaxH8JlvDAuC25LWS.jpeg'
      }
    ]
  },
  2: {
    id: 2,
    date: 'October 22, 2024',
    title: 'Anthropic launches Claude 3.5 Sonnet',
    subtitle: 'A new frontier model that benchmarks higher in coding and logic tasks than previous industry leaders.',
    author: 'Marcus Chen',
    authorRole: 'AI Researcher',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-cPUDNzIBFRZQ1W1yjvgDkrxIqJEu5R.jpeg',
    category: 'Models & APIs',
    content: `Anthropic has unveiled Claude 3.5 Sonnet, expanding its frontier model family with significant improvements in performance and efficiency. This latest iteration demonstrates superior capabilities in code generation and logical reasoning tasks.`,
    sections: [],
    quote: '"Claude 3.5 represents a major leap forward in capability and efficiency."',
    quoteAuthor: 'Dario Amodei, CEO of Anthropic',
    codeSnippet: {
      title: 'Using Claude 3.5 Sonnet',
      description: 'Integration is straightforward with the Anthropic API.',
      code: `import Anthropic from "@anthropic-ai/sdk";\n\nconst client = new Anthropic();`
    },
    additionalContent: `The model shows impressive performance across benchmarks.`,
    relatedArticles: []
  }
}

function ArticleContent() {
  const searchParams = useSearchParams()
  const articleId = parseInt(searchParams.get('id') || '1', 10)
  const article = articleDatabase[articleId as keyof typeof articleDatabase] || articleDatabase[1]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link href="/news">
              <Button
                variant="ghost"
                className="text-foreground/70 hover:text-foreground gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to News
              </Button>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-foreground">{article.category}</Badge>
              <p className="text-sm text-foreground/60">{article.date}</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-foreground/70 mb-6">
              {article.subtitle}
            </p>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20"></div>
                <div>
                  <p className="font-medium text-foreground">{article.author}</p>
                  <p className="text-sm text-foreground/60">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-primary/30">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/30">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 rounded-2xl overflow-hidden h-96 relative border border-primary/20"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none mb-12"
          >
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg leading-relaxed">{article.content}</p>

              {article.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="my-8"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-foreground/80 mb-4">{section.content}</p>
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {article.quote && (
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary pl-6 py-4 italic text-foreground/70 my-8 bg-primary/5 rounded"
                >
                  <p className="text-lg mb-2">{article.quote}</p>
                  <p className="text-sm text-foreground/60">— {article.quoteAuthor}</p>
                </motion.blockquote>
              )}

              {article.codeSnippet && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="my-8 bg-secondary rounded-lg p-6 border border-primary/20"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{article.codeSnippet.title}</h3>
                  <p className="text-foreground/70 mb-4">{article.codeSnippet.description}</p>
                  <pre className="bg-background rounded p-4 overflow-x-auto text-sm text-foreground/80">
                    <code>{article.codeSnippet.code}</code>
                  </pre>
                </motion.div>
              )}

              {article.additionalContent && (
                <p className="text-lg leading-relaxed text-foreground/80">{article.additionalContent}</p>
              )}
            </div>
          </motion.div>

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="my-16 pt-12 border-t border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Read Next</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {article.relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/article?id=${relatedArticle.id}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="cursor-pointer"
                    >
                      <Card className="border-primary/10 bg-card hover:border-primary/30 h-full overflow-hidden">
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                        <CardHeader>
                          <p className="text-xs text-foreground/60 mb-2">{relatedArticle.date}</p>
                          <CardTitle className="text-foreground">{relatedArticle.title}</CardTitle>
                          <CardDescription className="text-foreground/70 line-clamp-2">
                            {relatedArticle.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ArticlePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"><Header /><div className="container mx-auto max-w-3xl py-12 px-4">Loading article...</div></div>}>
      <ArticleContent />
    </Suspense>
  )
}
