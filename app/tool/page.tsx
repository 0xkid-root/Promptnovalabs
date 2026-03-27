'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, ArrowLeft, ExternalLink, Check } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { FAQ } from '@/components/faq'

// Tool data - same as tools page
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
    website: 'https://openai.com/chatgpt',
    pricing: 'Free / $20/month',
    features: [
      'Advanced reasoning and problem-solving',
      'Multimodal input (text, images, files)',
      'Code generation and debugging',
      'Real-time web browsing',
      'Custom GPTs creation',
      'API access with flexible pricing',
    ],
    specifications: {
      'Model': 'GPT-4o',
      'Context Window': '128K tokens',
      'Training Data': 'Up to April 2024',
      'Speed': 'Ultra-fast responses',
      'Accuracy': '92% on standard benchmarks',
    },
    useCases: [
      'Content creation and writing',
      'Code development and debugging',
      'Research and analysis',
      'Business automation',
      'Learning and education',
      'Creative projects',
    ],
    pros: [
      'Best-in-class reasoning capabilities',
      'Multimodal support',
      'Large context window',
      'Custom GPT functionality',
      'Reliable and fast',
    ],
    cons: [
      'Rate limits on free tier',
      'Requires subscription for advanced features',
      'Occasional hallucinations',
    ],
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
    website: 'https://midjourney.com',
    pricing: '$10-120/month',
    features: [
      'High-quality photorealistic image generation',
      'Artistic style control and customization',
      'Fast generation with GPU priority',
      'Upscaling and variation tools',
      'Remix and blend features',
      'Commercial use rights included',
    ],
    specifications: {
      'Resolution': 'Up to 2K native',
      'Generation Time': '20-60 seconds',
      'Monthly Credits': '900-3600 per plan',
      'Upscaling': '2x, 4x available',
      'API Access': 'Coming soon',
    },
    useCases: [
      'Concept art and design',
      'Marketing and advertising',
      'Game asset creation',
      'Interior design visualization',
      'Product mockups',
      'Artistic exploration',
    ],
    pros: [
      'Highest quality image generation',
      'Excellent artistic control',
      'Commercial rights included',
      'Fast generation speeds',
      'Active community',
    ],
    cons: [
      'Subscription-based only',
      'Limited free trial',
      'Discord-dependent interface',
      'Learning curve for prompting',
    ],
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
    website: 'https://github.com/features/copilot',
    pricing: '$10/month or $100/year',
    features: [
      'AI-powered code suggestions',
      'Multi-line function generation',
      'Test case generation',
      'Documentation writing',
      'Code explanations',
      'Integrated in VS Code and JetBrains',
    ],
    specifications: {
      'IDEs Supported': 'VS Code, JetBrains, Neovim, etc.',
      'Languages': '90+ programming languages',
      'Model': 'Codex-based',
      'Response Time': '<200ms',
      'Accuracy': '80%+ on standard coding tasks',
    },
    useCases: [
      'Accelerate development',
      'Learn new programming languages',
      'Generate boilerplate code',
      'Write documentation',
      'Code refactoring',
      'Bug fixing assistance',
    ],
    pros: [
      'Seamless IDE integration',
      'Fast and accurate',
      'Supports many languages',
      'Great for learning',
      'Affordable pricing',
    ],
    cons: [
      'Occasionally generates buggy code',
      'Requires verification',
      'Limited context understanding',
      'Privacy considerations',
    ],
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
    website: 'https://claude.ai',
    pricing: 'Free / $20/month',
    features: [
      'Long context window (100K+ tokens)',
      'Document and code analysis',
      'JSON mode for structured outputs',
      'Constitutional AI safety training',
      'Extended thinking capabilities',
      'Reliable reasoning',
    ],
    specifications: {
      'Model': 'Claude 3.5 Sonnet',
      'Context Window': '200K tokens',
      'Training Data': 'Early 2024',
      'Output Limit': '4K tokens',
      'Accuracy': '94% on reasoning tasks',
    },
    useCases: [
      'Document analysis and summarization',
      'Code review and optimization',
      'Complex reasoning tasks',
      'Content research',
      'Data extraction',
      'Safe AI interactions',
    ],
    pros: [
      'Extremely long context window',
      'Excellent safety practices',
      'Strong reasoning abilities',
      'Good at analyzing documents',
      'Reliable and consistent',
    ],
    cons: [
      'Slower response times',
      'Limited real-time web access',
      'Smaller model ecosystem',
    ],
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
    website: 'https://openai.com/dall-e-3',
    pricing: '$15/month minimum',
    features: [
      'Natural language image generation',
      'High quality photo-realistic images',
      'Content policy adherence',
      'Iteration and variation tools',
      'Style consistency',
      'Commercial usage rights',
    ],
    specifications: {
      'Resolution': '1024x1024, 1024x1792, 1792x1024',
      'Generation Time': '10-30 seconds',
      'API Credits': 'Based on resolution',
      'Style Control': 'Natural language based',
      'Model': 'Latest DALL-E 3',
    },
    useCases: [
      'UI/UX design mockups',
      'Marketing materials',
      'Product visualization',
      'Blog illustrations',
      'Social media content',
      'Creative experimentation',
    ],
    pros: [
      'Easy natural language prompts',
      'High quality output',
      'Commercial rights',
      'Good prompt adherence',
      'Integrated in ChatGPT',
    ],
    cons: [
      'Expensive per image',
      'Limited free credits',
      'Content restrictions',
      'Slower generation than competitors',
    ],
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
    website: 'https://runwayml.com',
    pricing: '$7-30/month',
    features: [
      'AI video generation and editing',
      'Motion tracking and stabilization',
      'Green screen removal',
      'Frame interpolation',
      'Object removal and inpainting',
      'Collaboration tools',
    ],
    specifications: {
      'Video Length': 'Up to 30 seconds',
      'Resolution': '1080p (Pro), 4K (Premium)',
      'Export Formats': 'MP4, WebM, ProRes',
      'Processing Time': '1-5 minutes',
      'Monthly Credits': 'Based on plan',
    },
    useCases: [
      'Video editing and post-production',
      'Content creation',
      'Motion graphics',
      'Visual effects',
      'Game asset creation',
      'Professional video production',
    ],
    pros: [
      'Professional video quality',
      'Versatile toolset',
      'Good collaboration features',
      'Regular updates',
      'Affordable plans',
    ],
    cons: [
      'Learning curve required',
      'Processing time can be long',
      'Limited video length',
      'Subscription model',
    ],
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
    website: 'https://perplexity.ai',
    pricing: 'Free / $20/month',
    features: [
      'Real-time web search integration',
      'Source citation and verification',
      'Academic paper research',
      'Multi-search capabilities',
      'Summarization features',
      'Conversation history',
    ],
    specifications: {
      'Search Sources': 'Real-time web index',
      'Citation': 'Full source attribution',
      'Academic Access': 'arXiv, Google Scholar',
      'Response Speed': '<3 seconds avg',
      'Accuracy': '92% citation accuracy',
    },
    useCases: [
      'Research and fact-checking',
      'News and trend analysis',
      'Academic research',
      'Product research',
      'Market intelligence',
      'Current events summary',
    ],
    pros: [
      'Real-time web access',
      'Excellent source attribution',
      'Research-focused features',
      'Fast responses',
      'Free and premium options',
    ],
    cons: [
      'Less creative than ChatGPT',
      'Limited without subscription',
      'Web dependency',
    ],
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
    website: 'https://notebooklm.google.com',
    pricing: 'Free',
    features: [
      'Document and PDF upload',
      'AI-powered note generation',
      'Source-based answers',
      'Study guide generation',
      'Interactive Q&A',
      'Export capabilities',
    ],
    specifications: {
      'Supported Formats': 'PDF, Text, Google Docs',
      'Upload Limit': '100MB per file',
      'Sources': 'Up to 10 documents',
      'Output Formats': 'Text, PDF, Audio',
      'Processing Time': '<1 minute avg',
    },
    useCases: [
      'Academic research management',
      'Note-taking and organization',
      'Study guide creation',
      'Research synthesis',
      'Document summarization',
      'Learning assistance',
    ],
    pros: [
      'Completely free',
      'Google integration',
      'Document-focused design',
      'Study guide generation',
      'Easy to use',
    ],
    cons: [
      'Limited to document context',
      'No real-time web access',
      'Smaller feature set',
      'Early stage product',
    ],
  },
]

function ToolDetailContent() {
  const searchParams = useSearchParams()
  const toolId = searchParams.get('id')
  const [tool, setTool] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (toolId) {
      const foundTool = aiTools.find((t) => t.id === parseInt(toolId))
      setTool(foundTool)
    }
    setIsLoading(false)
  }, [toolId])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        {/* Back Button */}
        <Link href="/tools">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
          </motion.div>
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
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
                  <Badge key={tag} variant="secondary" className="text-foreground/80">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <Card className="border-primary/10 bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="text-sm text-foreground/60">Rating</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{tool.rating}</p>
              </CardContent>
            </Card>
            <Card className="border-primary/10 bg-card">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60 mb-2">Users</p>
                <p className="text-2xl font-bold text-foreground">{tool.users}</p>
              </CardContent>
            </Card>
            <Card className="border-primary/10 bg-card">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60 mb-2">Pricing</p>
                <p className="text-lg font-bold text-foreground">{tool.pricing}</p>
              </CardContent>
            </Card>
          </div>

          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Visit Official Website
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 mb-12"
        >
          {/* Features */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Use Cases */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Best For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{useCase}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pros */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card border-green-500/20">
              <CardHeader>
                <CardTitle className="text-foreground text-green-400">Pros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.pros.map((pro, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80">{pro}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cons */}
          <motion.div variants={itemVariants}>
            <Card className="border-primary/10 bg-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-foreground text-red-400">Cons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.cons.map((con, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-red-500 font-bold mt-0.5">×</span>
                      <p className="text-foreground/80">{con}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <Card className="border-primary/10 bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(tool.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-sm text-foreground/60 mb-1">{key}</span>
                    <span className="text-foreground font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            {tool.name} is ready to help you achieve your goals. Visit the official website to create an account and start using the tool today.
          </p>
          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
              Get Started Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
        
      </main>

      <Footer />
      <FAQ/>
    </div>
  )
}

export default function ToolDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"><Header /><div className="container mx-auto max-w-7xl py-12 px-4">Loading tool...</div></div>}>
      <ToolDetailContent />
      
    </Suspense>
  )
}
