export const aiTools = [
  {
    id: 1,
    name: 'ChatGPT (GPT-4o)',
    slug: 'chatgpt',
    description: `ChatGPT powered by GPT-4o is one of the most advanced AI platforms available today, designed to assist users across a wide range of domains including software development, content creation, research, and business automation. Developed by OpenAI, it combines cutting-edge natural language processing with multimodal capabilities, allowing users to interact using text, images, documents, and structured data.

One of the standout strengths of ChatGPT is its ability to understand complex queries and provide highly contextual responses. Whether you're debugging code, writing long-form content, or analyzing data, it delivers fast and reliable outputs. Developers benefit from its ability to generate full applications, fix bugs, and explain logic step-by-step.

Its multimodal functionality allows users to upload screenshots, PDFs, and images for analysis, making it incredibly useful for real-world workflows. From marketing teams generating campaigns to students learning new concepts, ChatGPT adapts to multiple use cases.

The platform also supports custom GPT creation, enabling users to build specialized AI assistants tailored to their needs. With strong API support, it integrates seamlessly into modern applications and business systems.

Overall, ChatGPT is a powerful all-in-one AI tool that boosts productivity, reduces manual effort, and enhances creativity across industries.`,
    category: 'LLM',
    tags: ['AI Chat', 'Multimodal', 'Productivity'],
    rating: 4.9,
    users: '2.5M+',
    icon: '🤖',
    color: 'from-green-400 to-green-600',
    website: 'https://openai.com/chatgpt',
    pricing: 'Free / $20/month',

    features: [
      'Advanced reasoning and problem solving',
      'Multimodal input (text, images, documents)',
      'Code generation and debugging',
      'Custom GPT creation',
      'Real-time conversational memory',
      'Content generation for blogs, emails, ads',
      'Data analysis and summarization',
      'API integration support',
    ],

    specifications: {
      Model: 'GPT-4o',
      'Context Window': '128K tokens',
      Speed: 'Ultra-fast',
      Accuracy: 'Very High',
      Multimodal: 'Yes',
    },

    useCases: [
      'Content writing',
      'Software development',
      'Education and learning',
      'Customer support automation',
      'Business productivity',
    ],

    pros: [
      'Highly versatile and powerful',
      'Supports multimodal inputs',
      'Fast and accurate responses',
      'Easy for beginners',
      'Custom GPT flexibility',
    ],

    cons: [
      'Paid features locked behind subscription',
      'Occasional hallucinations',
      'Rate limits in free plan',
    ],
  },

  {
    id: 2,
    name: 'Claude AI',
    slug: 'claude',
    description: `Claude AI, developed by Anthropic, is a powerful large language model focused on safety, long-context understanding, and enterprise use cases. It is particularly known for handling extremely large documents and maintaining context over extended conversations, making it ideal for research, legal analysis, and documentation tasks.

Claude excels in producing human-like, well-structured responses with a strong emphasis on safety and alignment. It is widely used by businesses that require reliable AI outputs without harmful or misleading content. Its ability to process long documents makes it superior for use cases such as contract review, report generation, and summarization.

Another key advantage of Claude is its conversational quality. It maintains a natural tone while delivering detailed and thoughtful responses. This makes it suitable for writing, brainstorming, and collaborative work.

While it may not be as fast as some competitors, its depth of understanding and contextual accuracy make it a preferred choice for professional environments.

Overall, Claude is a strong alternative to ChatGPT, especially for users who prioritize safety, long-form content handling, and high-quality reasoning.`,
    category: 'LLM',
    tags: ['Safe AI', 'Long Context'],
    rating: 4.8,
    users: '800K+',
    icon: '💡',
    color: 'from-orange-400 to-orange-600',
    website: 'https://claude.ai',
    pricing: 'Free / $20/month',

    features: [
      'Long context processing (200K+ tokens)',
      'Safe and aligned AI responses',
      'Document analysis and summarization',
      'Natural conversational style',
      'High-quality writing assistance',
    ],

    specifications: {
      Model: 'Claude 3',
      Context: '200K tokens',
      Speed: 'Moderate',
      Safety: 'High',
    },

    useCases: [
      'Legal document analysis',
      'Research',
      'Content writing',
      'Business reports',
    ],

    pros: [
      'Excellent for long documents',
      'Safer outputs',
      'High-quality writing',
    ],

    cons: [
      'Slower than competitors',
      'Limited integrations',
    ],
  },

  {
    id: 3,
    name: 'Midjourney',
    slug: 'midjourney',
    description: `Midjourney is one of the most advanced AI image generation tools, widely known for producing highly artistic and visually stunning images. It is primarily used by designers, artists, and creators who want to generate unique visuals from text prompts.

The platform operates through Discord, which may feel unconventional at first, but provides a collaborative environment where users can explore and refine prompts together. Midjourney excels in generating detailed, cinematic, and stylized images that often surpass competitors in artistic quality.

Users can control style, lighting, composition, and creativity levels through prompt engineering. This makes it a favorite among professionals in design and marketing industries.

Despite its strengths, it lacks a traditional UI and requires a subscription, which can be a barrier for some users.

Overall, Midjourney is the best choice for high-quality AI art and creative visual generation.`,
    category: 'Image Generation',
    tags: ['Art', 'Design'],
    rating: 4.8,
    users: '1.2M+',
    icon: '🎨',
    color: 'from-purple-400 to-purple-600',
    website: 'https://midjourney.com',
    pricing: '$10-$120/month',

    features: [
      'High-quality artistic image generation',
      'Prompt-based customization',
      'Stylized and cinematic outputs',
      'Fast rendering',
    ],

    specifications: {
      Resolution: 'Up to 2K',
      Speed: 'Fast',
    },

    useCases: [
      'Graphic design',
      'Marketing creatives',
      'Digital art',
    ],

    pros: [
      'Best artistic quality',
      'Highly creative outputs',
    ],

    cons: [
      'No traditional UI',
      'Paid only',
    ],
  },

  {
    id: 4,
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description: `GitHub Copilot is an AI-powered coding assistant that helps developers write code faster and more efficiently. Integrated directly into popular IDEs like VS Code, it provides real-time code suggestions, auto-completions, and even generates entire functions based on context.

It is powered by advanced AI models and trained on large datasets of code, enabling it to understand programming patterns and best practices. Developers use Copilot to speed up repetitive tasks, learn new frameworks, and improve productivity.

Copilot supports multiple programming languages and works seamlessly within existing workflows. It is especially useful for beginners who need guidance, as well as experienced developers who want to optimize their coding process.

However, it requires careful validation since AI-generated code may not always be perfect.

Overall, GitHub Copilot is a must-have tool for modern developers.`,
    category: 'Coding',
    tags: ['Developer', 'AI Code'],
    rating: 4.7,
    users: '1.8M+',
    icon: '⚙️',
    color: 'from-blue-400 to-blue-600',
    website: 'https://github.com/features/copilot',
    pricing: '$10/month',

    features: [
      'Real-time code suggestions',
      'Full function generation',
      'Multi-language support',
      'IDE integration',
    ],

    specifications: {
      Languages: '90+',
      Speed: '<200ms',
    },

    useCases: [
      'Software development',
      'Learning coding',
      'Debugging',
    ],

    pros: [
      'Boosts productivity',
      'Easy integration',
    ],

    cons: [
      'Needs validation',
      'Subscription required',
    ],
  },
]

export const categories = [
  'All Tools',
  'LLM',
  'Image Generation',
  'Coding',
  'Video',
  'Search',
  'Productivity',
  'Writing',
  'Audio',
]