export interface NewsSection {
  title: string
  content: string
  points?: string[]
}

export interface CodeSnippet {
  title: string
  description?: string
  code: string
}

export interface RelatedArticle {
  id: number
  slug?: string
  date: string
  title: string
  description: string
  image: string
}

export interface Article {
  id: number
  slug: string
  date: string
  title: string
  subtitle: string
  author: string
  authorRole: string
  image: string
  category: string
  featured?: boolean
  description: string
  content: string
  sections: NewsSection[]
  quote?: string
  quoteAuthor?: string
  codeSnippet?: CodeSnippet
  additionalContent?: string
  relatedArticles?: RelatedArticle[]
  relatedSlugs?: string[]
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "openai-gpt4-architecture-update",
    date: "October 24, 2024",
    title: "OpenAI announces massive updates to GPT-4 architecture",
    subtitle:
      "The new architecture promises 2x speed and a significantly larger context window.",
    author: "Elena Rodriguez",
    authorRole: "Tech Writer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle.jpeg",
    category: "Models & APIs",
    featured: true,

    description:
      "OpenAI introduces major GPT-4 improvements with faster speed and larger context window.",

    content: `In a major announcement, OpenAI revealed updates to GPT-4 architecture...`,

    sections: [
      {
        title: "What's new?",
        content: "The update focuses on performance and scalability.",
        points: [
          "2x faster responses",
          "200k context window",
          "Better multimodal support",
        ],
      },
    ],

    quote:
      "We re-engineered the system to be faster and smarter.",
    quoteAuthor: "Sam Altman",

    codeSnippet: {
      title: "Example Usage",
      code: `const res = await openai.chat.completions.create({ model: "gpt-4-turbo" })`,
    },

    relatedSlugs: [
      "anthropic-claude-3-5-launch",
      "local-llm-rise",
    ],
  },

  {
    id: 2,
    slug: "anthropic-claude-3-5-launch",
    date: "October 22, 2024",
    title: "Anthropic launches Claude 3.5 Sonnet",
    subtitle:
      "New model beats competitors in coding and reasoning.",
    author: "Marcus Chen",
    authorRole: "AI Researcher",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews.jpeg",
    category: "Models & APIs",
    featured: false,

    description:
      "Claude 3.5 Sonnet delivers better performance in coding tasks.",

    content: `Anthropic has launched Claude 3.5 Sonnet...`,

    sections: [],
    quote: "A major leap forward.",
    quoteAuthor: "Dario Amodei",

    codeSnippet: {
      title: "Quick Start",
      code: `const client = new Anthropic();`,
    },

    relatedSlugs: [],
  },

  {
    id: 3,
    slug: "anthropic-claude-3-5",
    date: "October 22, 2024",
    title: "Anthropic launches Claude 3.5 Sonnet",
    subtitle: "New model beats competitors in coding and reasoning.",
    author: "Marcus Chen",
    authorRole: "AI Researcher",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-cPUDNzIBFRZQ1W1yjvgDkrxIqJEu5R.jpeg",
    category: "Models & APIs",
    featured: false,
    description: "Claude 3.5 Sonnet delivers superior performance in coding tasks with enhanced reasoning capabilities.",
    content: `Anthropic has unveiled Claude 3.5 Sonnet, expanding its frontier model family with significant improvements in performance and efficiency. This latest iteration demonstrates superior capabilities in code generation and logical reasoning tasks, benchmarking higher than previous industry leaders.

The new model introduces advanced constitutional AI training methods, ensuring safer and more aligned outputs while maintaining exceptional performance across diverse use cases. Developers and enterprises can now leverage enhanced document processing with support for extremely long context windows.`,
    sections: [
      {
        title: "Key Improvements",
        content: "Claude 3.5 Sonnet brings major upgrades in multiple areas.",
        points: [
          "Enhanced coding and debugging capabilities",
          "Improved logical reasoning and math skills",
          "Better document understanding with 200K context",
          "Faster response times compared to Claude 3"
        ]
      }
    ],
    quote: "Claude 3.5 represents a major leap forward in capability and efficiency.",
    quoteAuthor: "Dario Amodei, CEO of Anthropic",
    codeSnippet: {
      title: "Using Claude 3.5 Sonnet",
      description: "Integration is straightforward with the Anthropic API.",
      code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function generateResponse(prompt: string) {
  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });
  
  console.log(response.content);
}`
    },
    additionalContent: `Anthropic plans to roll out fine-tuning capabilities for Claude 3.5 Sonnet in Q1 2025, enabling enterprises to customize the model for specific domains and use cases.`,
    relatedArticles: [
      {
        id: 1,
        slug: "openai-gpt4-architecture-update",
        date: 'October 24, 2024',
        title: 'OpenAI announces massive updates to GPT-4 architecture',
        description: 'The new architecture promises 2x speed and a significantly larger context window.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle-DjWB8GHeiPGOEz2QulE8hms1tLxnUa.jpeg'
      },
      {
        id: 3,
        slug: "local-llm-rise",
        date: 'October 20, 2024',
        title: 'The rise of local LLMs: Running AI on your laptop',
        description: 'How tools like Ollama and Llama are democratizing access to powerful models without cloud dependencies.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIHubHomepage-8IfuXKLxl5XSdoaxH8JlvDAuC25LWS.jpeg'
      }
    ],
    relatedSlugs: ["openai-gpt4-architecture-update", "local-llm-rise"]
  },

  {
    id: 4,
    slug: "local-llm-rise",
    date: "October 20, 2024",
    title: "The rise of local LLMs: Running AI on your laptop",
    subtitle: "How tools like Ollama and Llama are democratizing access to powerful models without cloud dependencies.",
    author: "Sarah Johnson",
    authorRole: "AI Engineer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIHubHomepage-8IfuXKLxl5XSdoaxH8JlvDAuC25LWS.jpeg",
    category: "Open Source",
    featured: false,
    description: "Local LLM deployment is becoming increasingly accessible with new tools and optimized models.",
    content: `The landscape of AI deployment is shifting dramatically towards local execution. With tools like Ollama, LM Studio, and optimized model quantizations, running powerful language models on consumer hardware is now a reality.

This democratization of AI access addresses growing concerns about privacy, cost, and dependency on cloud services. Developers can now experiment with models ranging from 7B to 70B parameters on standard laptops and desktops.`,
    sections: [
      {
        title: "Popular Local LLM Tools",
        content: "Several tools make local deployment accessible.",
        points: [
          "Ollama - One-command installation and execution",
          "LM Studio - User-friendly GUI with model management",
          "text-generation-webui - Advanced features for power users",
          "PrivateGPT - Document querying with local models"
        ]
      },
      {
        title: "Hardware Requirements",
        content: "Running local models requires specific hardware considerations.",
        points: [
          "7B-13B models: 8-16GB RAM, integrated GPU sufficient",
          "34B-70B models: 32-64GB RAM, dedicated GPU recommended",
          "SSD storage strongly recommended for faster loading",
          "Apple Silicon Macs show excellent performance with MLX framework"
        ]
      }
    ],
    quote: "Local AI isn't just about privacy—it's about making AI accessible to everyone, regardless of their internet connection or budget.",
    quoteAuthor: "Georgi Gerganov, Creator of llama.cpp",
    codeSnippet: {
      title: "Running Llama 3 with Ollama",
      description: "Get started with local LLMs in minutes.",
      code: `# Install Ollama
brew install ollama  # macOS
# or download from ollama.com

# Pull and run Llama 3
ollama pull llama3
ollama run llama3

# Or use the API
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Why is the sky blue?"
}'`
    },
    additionalContent: `The quantization revolution led by projects like llama.cpp has reduced model sizes by 60-70% while maintaining 95%+ of original performance, making local deployment increasingly practical.`,
    relatedArticles: [
      {
        id: 1,
        slug: "openai-gpt4-architecture-update",
        date: 'October 24, 2024',
        title: 'OpenAI announces massive updates to GPT-4 architecture',
        description: 'The new architecture promises 2x speed and a significantly larger context window.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NewsArticle-DjWB8GHeiPGOEz2QulE8hms1tLxnUa.jpeg'
      },
      {
        id: 2,
        slug: "anthropic-claude-3-5-launch",
        date: 'October 22, 2024',
        title: 'Anthropic launches Claude 3.5 Sonnet',
        description: 'A new frontier model that benchmarks higher in coding and logic tasks than previous industry leaders.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AINews-cPUDNzIBFRZQ1W1yjvgDkrxIqJEu5R.jpeg'
      }
    ],
    relatedSlugs: ["openai-gpt4-architecture-update", "anthropic-claude-3-5-launch"]
  }
]