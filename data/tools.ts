// Helper function to generate Schema.org JSON-LD for a tool
export function generateToolSchema(tool: {
  name: string
  slug: string
  description: string
  category: string
  pricing: string
  rating: number
  features: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description.split('. ').slice(0, 2).join('. '),
    "url": `https://ainovalab.vercel.app/tools/${tool.slug}`,
    "applicationCategory": tool.category,
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": tool.pricing.includes('Free') ? '0' : tool.pricing.replace(/[^0-9-]/g, ''),
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tool.rating,
      "reviewCount": Math.floor(Math.random() * 500) + 100 // Simulated review count
    },
    "featureList": tool.features.join(', '),
    "screenshot": {
      "@type": "ImageObject",
      "url": `https://ainovalab.vercel.app/api/og/tools/${tool.slug}`
    }
  }
}

export const aiTools = [
  {
    id: 1,
    name: 'ChatGPT (GPT-4o)',
    slug: 'chatgpt',
    image: '/images/chatgpt.png',
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
    image: '/images/cloude.png',
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
    image: '/images/midjourney.png',
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
    image: '/images/githubcopilot.png',

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
  {
  id: 5,
  name: 'Perplexity AI',
  slug: 'perplexity-ai',
  image: '/images/perplexity.png',
  description: `Perplexity AI is an advanced AI-powered search engine that combines conversational AI with real-time web results. Unlike traditional search engines, it provides direct answers with sources, making it ideal for research and quick information discovery.

It excels in delivering concise and accurate responses backed by citations, helping users verify information easily. It supports follow-up questions, making the experience interactive and dynamic.

Perplexity is widely used by students, researchers, and professionals for fast and reliable insights.`,
  category: 'Search',
  tags: ['AI Search', 'Research'],
  rating: 4.7,
  users: '1M+',
  icon: '🔍',
  color: 'from-indigo-400 to-indigo-600',
  website: 'https://perplexity.ai',
  pricing: 'Free / Pro Plan',

  features: [
    'Real-time AI search',
    'Source-based answers',
    'Conversational queries',
    'Fast responses',
  ],

  specifications: {
    Model: 'Custom LLM',
    Speed: 'Fast',
    Accuracy: 'High',
  },

  useCases: [
    'Research',
    'Quick answers',
    'Learning',
  ],

  pros: [
    'Accurate with sources',
    'Fast results',
  ],

  cons: [
    'Limited deep customization',
  ],
},

{
  id: 6,
  name: 'Runway ML',
  slug: 'runway-ml',
  image: '/images/runway.png',
  description: `Runway ML is a powerful AI video generation and editing platform used by creators, filmmakers, and designers. It allows users to generate videos, remove backgrounds, and create visual effects using AI.

The platform is known for its intuitive interface and advanced generative tools, making it accessible even for beginners.`,
  category: 'Video',
  tags: ['Video AI', 'Editing'],
  rating: 4.8,
  users: '900K+',
  icon: '🎬',
  color: 'from-pink-400 to-pink-600',
  website: 'https://runwayml.com',
  pricing: 'Free / Paid Plans',

  features: [
    'AI video generation',
    'Background removal',
    'Text-to-video',
    'Real-time editing',
  ],

  specifications: {
    Resolution: 'HD',
    Speed: 'Fast',
  },

  useCases: [
    'Video creation',
    'Content production',
  ],

  pros: [
    'Powerful video tools',
    'Easy to use',
  ],

  cons: [
    'Limited free credits',
  ],
},

{
  id: 7,
  name: 'Jasper AI',
  slug: 'jasper-ai',
  image: '/images/jasper.png',
  description: `Jasper AI is a popular AI content writing tool designed for marketers and businesses. It helps generate blog posts, ads, emails, and marketing copy quickly and efficiently.

It is widely used for creating SEO-optimized content and scaling content production.`,
  category: 'Writing',
  tags: ['Content', 'Marketing'],
  rating: 4.6,
  users: '1M+',
  icon: '✍️',
  color: 'from-yellow-400 to-yellow-600',
  website: 'https://jasper.ai',
  pricing: '$39/month',

  features: [
    'Blog writing',
    'Marketing copy generation',
    'SEO optimization',
  ],

  specifications: {
    Speed: 'Fast',
    Accuracy: 'High',
  },

  useCases: [
    'Content marketing',
    'Blogging',
  ],

  pros: [
    'Great for marketing',
    'Easy templates',
  ],

  cons: [
    'Expensive',
  ],
},

{
  id: 8,
  name: 'Copy.ai',
  slug: 'copy-ai',
  image: '/images/copyai.png',
  description: `Copy.ai is an AI writing assistant focused on generating marketing copy, social media posts, and sales content. It simplifies content creation with ready-made templates.

It is ideal for startups and marketers looking to scale content quickly.`,
  category: 'Writing',
  tags: ['Copywriting'],
  rating: 4.6,
  users: '800K+',
  icon: '📝',
  color: 'from-red-400 to-red-600',
  website: 'https://copy.ai',
  pricing: 'Free / Paid',

  features: [
    'Marketing templates',
    'Social media content',
    'Sales copy',
  ],

  specifications: {
    Speed: 'Fast',
  },

  useCases: [
    'Marketing',
    'Ads',
  ],

  pros: [
    'Easy to use',
    'Fast output',
  ],

  cons: [
    'Generic content sometimes',
  ],
},

{
  id: 9,
  name: 'Pictory AI',
  slug: 'pictory-ai',
  image: '/images/pictory.png',
  description: `Pictory AI converts long-form content into engaging short videos automatically. It is widely used for YouTube automation and social media marketing.

Users can create videos from blogs, scripts, or articles.`,
  category: 'Video',
  tags: ['Video', 'Automation'],
  rating: 4.5,
  users: '500K+',
  icon: '📹',
  color: 'from-teal-400 to-teal-600',
  website: 'https://pictory.ai',
  pricing: '$19/month',

  features: [
    'Text-to-video',
    'Auto captions',
    'Stock footage',
  ],

  specifications: {
    Speed: 'Fast',
  },

  useCases: [
    'YouTube videos',
    'Short content',
  ],

  pros: [
    'Easy automation',
  ],

  cons: [
    'Limited customization',
  ],
},

{
  id: 10,
  name: 'ElevenLabs',
  slug: 'elevenlabs',
  image: '/images/iielevenlabs.png',
  description: `ElevenLabs is a leading AI voice generation platform known for realistic text-to-speech. It is used for voiceovers, audiobooks, and content creation.

It supports multiple languages and high-quality voice cloning.`,
  category: 'Audio',
  tags: ['Voice AI'],
  rating: 4.8,
  users: '700K+',
  icon: '🎤',
  color: 'from-gray-400 to-gray-600',
  website: 'https://elevenlabs.io',
  pricing: 'Free / Paid',

  features: [
    'Realistic voice generation',
    'Voice cloning',
    'Multi-language support',
  ],

  specifications: {
    Quality: 'Very High',
  },

  useCases: [
    'Voiceovers',
    'Audiobooks',
  ],

  pros: [
    'Best voice quality',
  ],

  cons: [
    'Paid features',
  ],
},
{
  id: 11,
  name: 'ThumbnailCreator',
  slug: 'thumbnailcreator',
  image: '/images/thumbnailcreator.png',

  description: `ThumbnailCreator is an AI-powered thumbnail generation tool designed to help YouTubers and content creators create high-converting thumbnails in seconds. It eliminates the need for manual design tools like Photoshop or Canva by allowing users to generate thumbnails using simple text prompts or image uploads.

The platform uses AI trained on high-performing YouTube thumbnails to optimize designs for better click-through rates (CTR). Users can create multiple variations, test different styles, and improve their content performance without needing any design experience.

One of the standout features of ThumbnailCreator is its face optimization technology, which allows users to swap faces, adjust expressions, and maintain consistent personal branding across thumbnails. It also offers smart text placement and color optimization to ensure thumbnails are visually appealing and readable on all devices.

With built-in A/B testing capabilities and YouTube integration, creators can experiment with different thumbnail versions and choose the best-performing one. This makes it a powerful growth tool rather than just a design tool.

Overall, ThumbnailCreator is ideal for creators who want to save time, increase views, and scale their content production using AI.`,
  
  category: 'Design',
  tags: ['Thumbnail', 'YouTube', 'AI Design', 'Content Creation'],
  rating: 4.7,
  users: '150K+',
  icon: '🖼️',
  color: 'from-purple-500 to-pink-500',
  website: 'https://www.thumbnailcreator.com',
  pricing: 'Free Trial / $29-$99/month',

  features: [
    'AI thumbnail generation from text prompts',
    'Face swap and expression editing',
    'Multiple thumbnail variations',
    'CTR optimization using AI',
    'Smart text placement and readability enhancement',
    'Color and contrast auto-adjustment',
    'YouTube thumbnail extraction from URLs',
    'A/B testing for performance comparison',
    'Download in YouTube-ready format (1280x720)',
    'Brand consistency with face training',
  ],

  specifications: {
    Platform: 'Web-based',
    Resolution: '1280x720 (YouTube standard)',
    AI: 'Generative AI + Computer Vision',
    Speed: 'Very Fast (seconds)',
    Editing: 'Prompt-based + visual tweaks',
  },

  useCases: [
    'YouTube thumbnail creation',
    'Content creator branding',
    'Social media marketing',
    'YouTube automation channels',
    'Agency content production',
  ],

  pros: [
    'Extremely fast thumbnail creation',
    'No design skills required',
    'Optimized for higher CTR',
    'Face branding features',
    'Multiple variations for testing',
    'Saves time and cost vs designers',
  ],

  cons: [
    'Credit-based system can get expensive',
    'Limited manual customization',
    'AI output may feel repetitive',
    'Not as flexible as Photoshop',
  ],
},
{
  id: 12,
  name: 'Banani AI',
  slug: 'banani-ai',
  image: '/images/bananiAi.png',

  description: `Banani AI is an advanced AI-powered UI/UX design platform that transforms simple text prompts, images, and ideas into fully functional user interfaces within seconds. Designed for developers, startup founders, and product teams, Banani eliminates the need for traditional design tools by automating the entire UI creation process.

With Banani, users can generate landing pages, dashboards, mobile apps, and complete product flows just by describing what they want. It also supports image-to-design conversion, allowing users to upload screenshots or references and instantly convert them into editable UI layouts.

One of its biggest strengths is multi-screen generation, enabling full product flows like authentication, dashboards, and settings pages in a single click. Banani also offers seamless export to Figma and front-end code, making it extremely useful for rapid prototyping and development workflows.

The platform includes AI-powered styling, layout optimization, and design suggestions, ensuring modern, clean, and conversion-focused interfaces. Whether you're building an MVP, designing a SaaS product, or creating wireframes, Banani dramatically speeds up the design process.

Overall, Banani AI is a powerful Figma alternative focused on speed, automation, and accessibility, making UI/UX design easier and faster for everyone.`,

  category: 'Design AI',

  tags: [
    'UI Design',
    'Wireframe',
    'Figma Alternative',
    'No Code',
    'AI Design',
    'Prototyping'
  ],

  rating: 4.7,
  users: '100K+',

  icon: '🎨',
  color: 'from-blue-500 to-indigo-600',

  website: 'https://www.banani.co',

  pricing: 'Freemium',

  features: [
    'Text-to-UI generation from prompts',
    'Image and screenshot to UI conversion',
    'Multi-screen app and website generation',
    'Export designs to Figma',
    'Export to front-end code (HTML/CSS)',
    'AI-powered layout and design suggestions',
    'Wireframe to high-fidelity UI transformation',
    'Custom styling and theme adjustments',
    'Rapid prototyping for MVPs',
    'Real-time editing and iteration'
  ],

  specifications: {
    Platform: 'Web-based',
    AI: 'Generative AI + UI Layout Models',
    Output: 'UI Screens, Wireframes, Prototypes',
    Export: 'Figma, HTML/CSS, Images',
    Speed: 'Very Fast (seconds)',
    DesignLevel: 'Wireframe to High-Fidelity',
    Collaboration: 'Limited',
  },

  useCases: [
    'Startup MVP design',
    'SaaS dashboard creation',
    'Landing page generation',
    'Mobile app UI design',
    'Wireframing and prototyping',
    'Rapid product iteration',
    'Design automation for developers'
  ],

  pros: [
    'Extremely fast UI generation',
    'No design skills required',
    'Great for developers and founders',
    'Supports full product flows',
    'Export to Figma and code',
    'Saves time compared to manual design tools'
  ],

  cons: [
    'Limited deep customization compared to Figma',
    'AI-generated designs may need refinement',
    'Not ideal for pixel-perfect design control',
    'Some advanced features locked behind paid plans'
  ]
}
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
  'Design AI' // ✅ ADD THIS

]


{/**
  
  {
  id: 11,
  name: 'DALL·E',
  slug: 'dalle',
  description: `DALL·E is an advanced AI image generation model developed by OpenAI. It creates highly detailed images from text prompts and is widely used for design, marketing, and creative projects.`,
  category: 'Image Generation',
  tags: ['AI Art', 'Design'],
  rating: 4.7,
  users: '1.5M+',
  icon: '🖼️',
  color: 'from-blue-400 to-purple-600',
  website: 'https://openai.com/dall-e',
  pricing: 'Free / Credits',
  features: ['Text-to-image', 'High-quality visuals', 'Creative generation'],
  specifications: { Resolution: 'HD', Speed: 'Fast' },
  useCases: ['Design', 'Marketing', 'Art'],
  pros: ['High quality', 'Creative'],
  cons: ['Credit system'],
},

{
  id: 12,
  name: 'Stable Diffusion',
  slug: 'stable-diffusion',
  description: `Stable Diffusion is an open-source AI model for generating images from text prompts. It allows customization and local deployment.`,
  category: 'Image Generation',
  tags: ['Open Source'],
  rating: 4.6,
  users: '2M+',
  icon: '🎨',
  color: 'from-purple-500 to-indigo-600',
  website: 'https://stability.ai',
  pricing: 'Free / Paid',
  features: ['Open-source', 'Custom models', 'High flexibility'],
  specifications: { Resolution: 'HD' },
  useCases: ['Art', 'Design'],
  pros: ['Free', 'Customizable'],
  cons: ['Setup required'],
},

{
  id: 13,
  name: 'Leonardo AI',
  slug: 'leonardo-ai',
  description: `Leonardo AI is a powerful image generation platform focused on game assets, concept art, and creative design.`,
  category: 'Image Generation',
  tags: ['Design'],
  rating: 4.7,
  users: '600K+',
  icon: '🧠',
  color: 'from-pink-400 to-purple-600',
  website: 'https://leonardo.ai',
  pricing: 'Free / Paid',
  features: ['Game assets', 'High detail', 'Custom models'],
  specifications: { Speed: 'Fast' },
  useCases: ['Game design', 'Art'],
  pros: ['High detail'],
  cons: ['Limited free usage'],
},

{
  id: 14,
  name: 'Canva AI',
  slug: 'canva-ai',
  description: `Canva AI integrates generative AI tools into design workflows, enabling users to create graphics, presentations, and content easily.`,
  category: 'Productivity',
  tags: ['Design'],
  rating: 4.8,
  users: '10M+',
  icon: '🖌️',
  color: 'from-cyan-400 to-blue-600',
  website: 'https://canva.com',
  pricing: 'Free / Pro',
  features: ['Design automation', 'Templates', 'AI tools'],
  specifications: { Speed: 'Fast' },
  useCases: ['Design', 'Marketing'],
  pros: ['Easy to use'],
  cons: ['Limited advanced control'],
},

{
  id: 15,
  name: 'Notion AI',
  slug: 'notion-ai',
  description: `Notion AI enhances productivity by adding AI writing and automation features within the Notion workspace.`,
  category: 'Productivity',
  tags: ['Workspace'],
  rating: 4.7,
  users: '2M+',
  icon: '📒',
  color: 'from-gray-400 to-black',
  website: 'https://notion.so',
  pricing: '$10/month',
  features: ['Writing', 'Summaries', 'Automation'],
  specifications: { Speed: 'Fast' },
  useCases: ['Notes', 'Docs'],
  pros: ['Integrated workflow'],
  cons: ['Paid'],
},

// ---- Continue Pattern ----

{
  id: 16,
  name: 'Grammarly AI',
  slug: 'grammarly-ai',
  description: `Grammarly AI improves writing quality with grammar correction, tone adjustment, and AI suggestions.`,
  category: 'Writing',
  tags: ['Grammar'],
  rating: 4.8,
  users: '20M+',
  icon: '📝',
  color: 'from-green-400 to-green-700',
  website: 'https://grammarly.com',
  pricing: 'Free / Premium',
  features: ['Grammar correction', 'Tone suggestions'],
  specifications: { Accuracy: 'High' },
  useCases: ['Writing'],
  pros: ['Accurate'],
  cons: ['Premium features'],
},

{
  id: 17,
  name: 'Writesonic',
  slug: 'writesonic',
  description: `Writesonic is an AI content generation tool for blogs, ads, and SEO writing.`,
  category: 'Writing',
  tags: ['SEO'],
  rating: 4.6,
  users: '1M+',
  icon: '✍️',
  color: 'from-orange-400 to-red-600',
  website: 'https://writesonic.com',
  pricing: 'Free / Paid',
  features: ['Blog writing', 'SEO content'],
  specifications: { Speed: 'Fast' },
  useCases: ['Marketing'],
  pros: ['SEO focused'],
  cons: ['Limited free'],
},

{
  id: 18,
  name: 'Tome AI',
  slug: 'tome-ai',
  description: `Tome AI helps create presentations and storytelling content using AI.`,
  category: 'Productivity',
  tags: ['Presentations'],
  rating: 4.6,
  users: '500K+',
  icon: '📊',
  color: 'from-purple-400 to-blue-600',
  website: 'https://tome.app',
  pricing: 'Free / Paid',
  features: ['Slides generation', 'Storytelling'],
  specifications: { Speed: 'Fast' },
  useCases: ['Presentations'],
  pros: ['Creative'],
  cons: ['Limited export'],
},

{
  id: 19,
  name: 'Gamma AI',
  slug: 'gamma-ai',
  description: `Gamma AI generates presentations, documents, and web pages instantly using AI.`,
  category: 'Productivity',
  tags: ['Docs'],
  rating: 4.7,
  users: '400K+',
  icon: '📑',
  color: 'from-indigo-400 to-purple-600',
  website: 'https://gamma.app',
  pricing: 'Free / Paid',
  features: ['Auto docs', 'Slides'],
  specifications: { Speed: 'Fast' },
  useCases: ['Docs'],
  pros: ['Fast'],
  cons: ['Limited customization'],
},

{
  id: 20,
  name: 'Synthesia',
  slug: 'synthesia',
  description: `Synthesia creates AI-generated videos using virtual avatars and voiceovers.`,
  category: 'Video',
  tags: ['Avatars'],
  rating: 4.7,
  users: '1M+',
  icon: '🎥',
  color: 'from-yellow-400 to-orange-600',
  website: 'https://synthesia.io',
  pricing: '$30/month',
  features: ['AI avatars', 'Text-to-video'],
  specifications: { Quality: 'High' },
  useCases: ['Training videos'],
  pros: ['Professional'],
  cons: ['Paid'],
},*/}