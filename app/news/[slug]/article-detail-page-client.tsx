'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { articles } from '@/data/newsArticles'

interface Props {
  slug: string
}

export default function ArticleDetailPageClient({ slug }: Props) {
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto max-w-3xl py-12 px-4">
          <p className="text-foreground/60">Article not found</p>
        </main>
        <Footer />
      </div>
    )
  }

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

              {article.sections && article.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="my-8"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-foreground/80 mb-4">{section.content}</p>
                  {section.points && (
                    <ul className="space-y-3">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
                  {article.codeSnippet.description && (
                    <p className="text-foreground/70 mb-4">{article.codeSnippet.description}</p>
                  )}
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
                {article.relatedArticles.map((relatedArticle) => {
                  // Find the actual article to get the slug
                  const fullArticle = articles.find(a => a.id === relatedArticle.id)
                  const linkSlug = fullArticle?.slug || relatedArticle.slug || `#${relatedArticle.id}`
                  
                  return (
                    <Link key={relatedArticle.id} href={`/news/${linkSlug}`}>
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
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
