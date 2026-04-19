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
},
{
  id: 13,
  name: 'Recraft AI',
  slug: 'recraft-ai',
  image: '/images/recraft.png',

  description: `Recraft AI is an advanced AI-powered design tool that specializes in generating high-quality vector graphics, icons, illustrations, and brand assets. Unlike traditional image generators, Recraft focuses on structured design output, making it ideal for UI designers, startups, and marketers.

With Recraft AI, users can create scalable vector illustrations, logos, and icons from simple text prompts. It provides precise control over style, color palettes, and composition, ensuring consistent brand identity across projects.

One of its standout features is its ability to generate editable vector assets instead of static images, allowing designers to directly use outputs in design tools like Figma and Adobe Illustrator.

The platform also includes tools for mockups, brand kits, and design systems, making it a complete AI-powered design solution for modern workflows.

Overall, Recraft AI is perfect for teams and creators who need fast, scalable, and production-ready design assets.`,

  category: 'Design AI',
  tags: ['AI Design', 'Vector', 'Icons', 'Branding', 'UI/UX'],

  rating: 4.7,
  users: '250K+',

  icon: '🎨',
  color: 'from-indigo-400 to-purple-600',

  website: 'https://www.recraft.ai',
  pricing: 'Free / Paid Plans',

  features: [
    'Text-to-vector generation',
    'AI icon and logo creation',
    'Editable vector output (SVG)',
    'Brand style consistency',
    'Color palette control',
    'Design system generation',
    'Mockup creation',
    'Export to Figma & Illustrator',
  ],

  specifications: {
    Output: 'Vector (SVG) + Raster',
    Platform: 'Web-based',
    Speed: 'Fast',
    AI: 'Generative Design Model',
    Editing: 'Fully editable vectors',
  },

  useCases: [
    'Logo design',
    'UI/UX design',
    'Brand identity creation',
    'Marketing assets',
    'Startup design systems',
  ],

  pros: [
    'Generates editable vector graphics',
    'Great for branding and UI design',
    'Fast and scalable outputs',
    'Better than image-only AI tools',
  ],

  cons: [
    'Limited free credits',
    'Less known than competitors',
    'Learning curve for advanced features',
  ],
},
{
  id: 14,
  name: 'Topaz Labs',
  slug: 'topaz-labs',
  image: '/images/topazlabs.png',

  description: `Topaz Labs is a premium AI-powered photo and video enhancement platform designed for professionals who demand the highest visual quality. It leverages advanced deep learning models to upscale images, reduce noise, sharpen details, and stabilize video footage with exceptional precision.

Unlike many cloud-based tools, Topaz Labs processes all files locally on your machine, ensuring faster performance and complete data privacy. Its suite includes specialized tools like Photo AI, Video AI, and Gigapixel AI, each optimized for specific enhancement tasks.

Whether you're a photographer restoring old images, a videographer fixing shaky footage, or a content creator improving visual quality, Topaz Labs delivers studio-grade results with minimal manual effort.`,

  category: 'Photo & Video Editing',
  tags: ['AI Editing', 'Upscaling', 'Video Stabilization', 'Enhancement', 'Professional Tools'],

  rating: 4.6,
  users: '500K+',

  icon: '🎥',
  color: 'from-blue-500 to-indigo-600',

  website: 'https://www.topazlabs.com',
  pricing: 'Paid (One-time purchase)',

  features: [
    'AI-powered image and video enhancement',
    'Advanced video stabilization',
    'High-quality image upscaling (Gigapixel AI)',
    'Noise reduction and sharpening',
    'Batch processing support',
    'Local processing for privacy and speed',
    'Face recovery and detail enhancement',
    'Optimized for high-end GPUs'
  ],

  specifications: {
    Platform: 'Windows / macOS',
    Processing: 'Local (Offline)',
    GPU: 'Nvidia / AMD / Apple Silicon optimized',
    Speed: 'Very Fast (hardware dependent)',
    Output: 'High-resolution images & videos'
  },

  useCases: [
    'Professional photo editing',
    'Video stabilization and enhancement',
    'Restoring old or low-quality images',
    'YouTube and content creation',
    'Film and production workflows',
    'Real estate image enhancement'
  ],

  pros: [
    'Industry-leading AI enhancement quality',
    'Works offline (100% privacy)',
    'Excellent for both photo and video',
    'Batch processing saves time',
    'High-end professional output'
  ],

  cons: [
    'Requires powerful hardware',
    'Expensive for beginners',
    'Some features have a learning curve'
  ],

  pricingDetails: {
    PhotoAI: '$199 (one-time)',
    VideoAI: '$299 (one-time)',
    GigapixelAI: '$99 (one-time)'
  },

  integrations: [
    'Adobe Photoshop',
    'After Effects',
    'DaVinci Resolve'
  ],

  compatibility: [
    'Windows',
    'macOS',
    'Apple Silicon',
    'Nvidia GPU',
    'AMD GPU'
  ],

  ratingsBreakdown: {
    accuracy: 4.8,
    easeOfUse: 4.2,
    features: 4.7,
    performance: 4.9,
    customization: 4.3,
    security: 5.0,
    support: 4.5,
    costEfficiency: 4.0,
    integrations: 4.6
  },

  overallScore: 4.6,

  conclusion: `Topaz Labs is one of the best AI tools for high-quality image and video enhancement. It is especially suited for professionals and serious creators who need powerful, reliable, and privacy-focused editing tools.`
},
{
  id: 15,
  name: 'Wan 2.7 AI Video Generator',
  slug: 'wan-2-7-ai-video-generator',
  image: '/images/wan-ai-video.png',

  description: `Wan 2.7 AI Video Generator is an advanced AI-powered platform that converts images and prompts into high-quality 1080P videos with realistic motion and cinematic effects.

The platform supports multiple AI models including Wan 2.7, Kling AI, Sora AI, Veo 3.1, Seedance, and Flux 2, allowing users to experiment with different video generation styles and outputs.

Users can upload images or write prompts, then control motion, style, and storytelling using advanced features like frame control, subject cloning, and voice reference integration. The 3x3 grid multi-image system enables complex video creation with smooth transitions.

Designed for creators, marketers, and businesses, Wan 2.7 delivers fast, professional-grade videos optimized for social media, advertising, storytelling, and content creation.`,

  category: 'AI Video Generation',
 tags: [
  'AI Video Generator',
  'Wan 2.7',
  'Kling AI',
  'Sora AI',
  'Veo AI',
  'Image to Video AI',
  'AI Video Tools',
  'Cinematic AI Video',
  'Content Creation AI',
  'Marketing Video AI'
],
  rating: 4.7,
  users: '200K+',

  icon: '🎬',
  color: 'from-purple-500 to-pink-600',

  website: 'https://vidflux.ai/', // change if actual URL differs
  pricing: 'Freemium (Credit-based)',

  features: [
    'Convert images into realistic 1080P videos',
    'Upload photos or use text prompts for generation',
    'Custom video duration (2–15 seconds)',
    'Frame-level motion control (start & end frames)',
    'Subject cloning for consistent characters',
    'Voice reference integration for narration',
    '3x3 grid multi-image video generation',
    'Aspect ratio customization (social media ready)',
    'Fast AI rendering with high realism',
    'MP4 export ready for sharing'
  ],

  specifications: {
    Platform: 'Web-based',
    Processing: 'Cloud AI Generation',
    Resolution: '1080P Full HD',
    Duration: '2–15 seconds',
    Output: 'MP4 Video',
    Input: 'JPG / PNG / WEBP / Text Prompt'
  },

  useCases: [
    'Social media content creation',
    'E-commerce product videos',
    'Marketing and advertising campaigns',
    'AI storytelling and short films',
    'Personal creative projects',
    'Brand promotion videos'
  ],

  pros: [
    'High-quality 1080P video output',
    'Realistic motion and temporal consistency',
    'Advanced controls (frame, duration, aspect ratio)',
    'Supports voice reference and subject cloning',
    'Fast video generation process',
    'Beginner-friendly interface'
  ],

  cons: [
    'Maximum video length limited to 15 seconds',
    'Credit-based pricing can be expensive for heavy users',
    'Requires internet connection (cloud-based)'
  ],

  pricingDetails: {
    Free: 'Limited credits available',
    Starter: 'Credit-based usage',
    Pro: 'Higher credits for frequent creators'
  },

  integrations: [
    'Social Media Platforms',
    'Content Creation Workflows',
    'Marketing Tools'
  ],

  compatibility: [
    'Web Browser',
    'Desktop',
    'Mobile'
  ],

  ratingsBreakdown: {
    accuracy: 4.7,
    easeOfUse: 4.8,
    features: 4.6,
    performance: 4.7,
    customization: 4.8,
    security: 4.5,
    support: 4.4,
    costEfficiency: 4.2,
    integrations: 4.3
  },

  overallScore: 4.7,

  faqs: [
    {
      q: 'Can I upload any photo format to create videos?',
      a: 'Yes, Wan 2.7 supports JPG, PNG, and WEBP image formats.'
    },
    {
      q: 'What is the maximum video length?',
      a: 'You can create videos between 2 and 15 seconds.'
    },
    {
      q: 'Does it support 1080P resolution?',
      a: 'Yes, all videos are generated in high-quality 1080P.'
    },
    {
      q: 'Can I control motion in videos?',
      a: 'Yes, you can define start and end frames for precise motion control.'
    },
    {
      q: 'Does it support subject cloning?',
      a: 'Yes, Wan 2.7 allows subject cloning and voice reference for consistency.'
    },
    {
      q: 'Do I need editing skills?',
      a: 'No, the platform is beginner-friendly and requires no technical skills.'
    }
  ],

  conclusion: `Wan 2.7 AI Video Generator is one of the most advanced tools for converting images into cinematic videos. With its powerful AI features, realistic motion, and user-friendly interface, it is an excellent choice for creators, marketers, and businesses looking to produce high-quality video content quickly and efficiently.`
},

{
  id: 16,
  name: 'Promptizy',
  slug: 'promptizy-ai-prompt-generator',
  image: '/images/promptizy.png',

  description: `Promptizy is an advanced AI prompt optimization tool designed to help users create high-quality, expert-level prompts for platforms like ChatGPT, Claude, Gemini, and more. It eliminates the need for manual prompt engineering by using proven frameworks and professional thinking models.

The platform features 44 expert personas based on real-world methodologies such as IRAC for legal analysis and Porter’s Five Forces for business strategy. These personas guide AI systems to generate more structured, accurate, and context-aware responses.

Promptizy also supports custom prompt formatting for over 11 AI tools, ensuring that each prompt is optimized for the specific model you are using. Whether you are writing marketing copy, analyzing data, or building products, Promptizy improves output quality instantly.

With built-in prompt scoring, users can evaluate and refine their prompts using detailed feedback and expert rewrites. The platform also includes a large library of 250+ curated prompts and templates, helping beginners and professionals get started quickly.

Additional features like Arena Mode allow users to compare AI responses side-by-side, while the Chrome extension enables prompt optimization directly on any website.

Promptizy is ideal for creators, marketers, developers, and business professionals who want faster, smarter, and more reliable AI results without learning complex prompt engineering techniques.`,

  category: 'AI Productivity Tools',

  tags: [
    'AI prompt generator',
    'prompt engineering tool',
    'ChatGPT prompts',
    'Claude prompts',
    'Gemini prompts',
    'AI optimization',
    'prompt templates',
    'AI productivity',
    'AI tools',
    'prompt improvement'
  ],

  rating: 4.7,
  users: '100K+',

  icon: '🧠',
  color: 'from-purple-500 to-indigo-600',

  website: 'https://promptizy.com',
  pricing: 'Freemium',

  features: [
    '44 expert personas based on real professional frameworks',
    'Custom prompt formatting for 11+ AI tools',
    'AI prompt scoring with detailed feedback',
    'Automatic expert-level prompt rewrites',
    '250+ curated prompts and 130+ templates',
    'Arena Mode for comparing AI responses',
    'Chrome extension for instant prompt optimization',
    'Smart Tool Router to recommend best AI model',
    'Supports ChatGPT, Claude, Gemini, Grok, Perplexity'
  ],

  specifications: {
    Platform: 'Web + Chrome Extension',
    AISupport: 'ChatGPT, Claude, Gemini, Grok, Perplexity',
    Personas: '44 Expert Personas',
    Templates: '250+ Prompts & 130+ Templates',
    Mode: 'Prompt Optimization + Comparison',
    Output: 'Optimized AI prompts'
  },

  useCases: [
    'Writing high-converting marketing copy',
    'Improving ChatGPT and Claude responses',
    'Business strategy and analysis',
    'Content creation and blogging',
    'Email writing and outreach',
    'Prompt engineering for beginners',
    'AI research and comparison'
  ],

  pros: [
    'No prompt engineering knowledge required',
    'Uses real-world professional frameworks',
    'Supports multiple AI platforms',
    'Large library of prompts and templates',
    'Improves prompt quality instantly',
    'Arena Mode helps compare AI outputs'
  ],

  cons: [
    'Free plan has limited daily usage',
    'Advanced features require subscription',
    'Too many options may confuse beginners initially'
  ],

  pricingDetails: {
    Free: 'Limited to 5 prompts/day',
    Pro: 'Advanced features, unlimited prompts (pricing varies)',
    Enterprise: 'Custom pricing for teams'
  },

  integrations: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Perplexity',
    'Grok',
    'Chrome Browser'
  ],
  faqs: [
  {
    q: "Is Promptizy worth using for AI prompts?",
    a: "Yes, Promptizy is worth using if you want better AI responses without learning prompt engineering. It helps create structured, high-quality prompts for ChatGPT, Claude, and Gemini using expert personas and proven frameworks."
  },
  {
    q: "Is Promptizy free or paid?",
    a: "Promptizy offers a free plan with limited daily usage. Paid plans unlock advanced features like unlimited prompts, expert personas, and deeper prompt optimization tools."
  },
  {
    q: "Can Promptizy improve ChatGPT and Claude results?",
    a: "Yes, Promptizy significantly improves results by optimizing prompts for different AI models. It formats prompts specifically for ChatGPT, Claude, and other tools to get more accurate and useful outputs."
  },
  {
    q: "Who should use Promptizy?",
    a: "Promptizy is ideal for marketers, developers, content creators, and business professionals who want high-quality AI outputs without spending time on prompt engineering."
  },
  {
    q: "Is Promptizy better than writing prompts manually?",
    a: "For most users, yes. Promptizy uses expert frameworks and structured formats, which usually produce better and more consistent results compared to manually written prompts."
  },
  {
    q: "Does Promptizy work for beginners?",
    a: "Yes, Promptizy is beginner-friendly. You don’t need any technical knowledge to use it. The tool guides you with templates and expert personas to create effective prompts easily."
  }
],

  compatibility: [
    'Web Browser',
    'Chrome Extension',
    'Desktop',
    'Mobile (browser-based)'
  ],

  ratingsBreakdown: {
    accuracy: 4.8,
    easeOfUse: 4.5,
    features: 4.7,
    performance: 4.6,
    customization: 4.6,
    security: 4.5,
    support: 4.4,
    costEfficiency: 4.3,
    integrations: 4.7
  },

  overallScore: 4.7,

  conclusion: `Promptizy is one of the best AI prompt optimization tools available today. It is perfect for users who want expert-level AI responses without learning prompt engineering. With powerful features like personas, prompt scoring, and multi-AI support, it significantly improves productivity and output quality.`
},
{
  id: 17,
  name: 'SciSpace',
  slug: 'scispace-ai-research-platform',
  image: '/images/scispace.webp',

  description: `SciSpace is an AI-powered research platform designed to help students, researchers, and professionals explore, understand, and publish scientific papers more efficiently. It provides access to a massive database of over 270 million research papers, journals, authors, and conference publications.

The platform simplifies complex academic content using its AI Copilot, which can explain research papers in simple language, summarize key insights, and answer questions instantly. This makes it especially useful for students and beginners who struggle to understand technical papers.

SciSpace also includes advanced tools such as a plagiarism checker, journal submission support, XML converters, and access to over 40,000 journal templates. These features streamline the entire research and publishing workflow from writing to submission.

Users can discover trending topics, get personalized research recommendations, and explore academic content across multiple domains. Whether you are writing a thesis, publishing a paper, or conducting research, SciSpace helps you save time and improve productivity with AI-powered assistance.`,

  category: 'AI Research Tools',

  tags: [
    'AI research tool',
    'research paper finder',
    'AI paper summarizer',
    'academic research',
    'plagiarism checker',
    'journal submission',
    'research assistant',
    'AI copilot',
    'scientific papers',
    'research platform'
  ],

  rating: 4.7,
  users: '1M+',

  icon: '📚',
  color: 'from-indigo-500 to-purple-600',

  website: 'https://scispace.com',
  pricing: 'Freemium',

  features: [
    'Access to 270M+ research papers and journals',
    'AI Copilot for explaining and summarizing papers',
    'Plagiarism checker for academic writing',
    'Journal submission support and formatting',
    '40,000+ journal and paper templates',
    'XML and LaTeX conversion tools',
    'Personalized research recommendations',
    'Search across authors, topics, and conferences',
    'Simplifies complex research papers instantly'
  ],

  specifications: {
    Platform: 'Web-based',
    Database: '270M+ research papers',
    AIFeature: 'Paper explanation & summarization',
    Templates: '40,000+ journal templates',
    Tools: 'Plagiarism checker, XML converter',
    Output: 'Summaries, insights, formatted papers'
  },

  useCases: [
    'Understanding complex research papers',
    'Writing academic papers and thesis',
    'Publishing research in journals',
    'Checking plagiarism in documents',
    'Exploring scientific topics and trends',
    'Summarizing academic content quickly',
    'Student research and assignments'
  ],

  pros: [
    'Massive research database (270M+ papers)',
    'AI simplifies complex academic content',
    'Helpful for students and researchers',
    'All-in-one research and publishing tool',
    'Large template library for journals',
    'Saves time in research and writing'
  ],

  cons: [
    'Some features locked behind paid plans',
    'Advanced tools may require learning',
    'Not all papers are free to access'
  ],

  pricingDetails: {
    Free: 'Basic access with limited features',
    Premium: 'Advanced AI tools and full access (pricing varies)',
    Enterprise: 'Custom plans for institutions'
  },

  integrations: [
    'LaTeX',
    'Overleaf',
    'Academic journals',
    'Research databases'
  ],

  compatibility: [
    'Web Browser',
    'Desktop',
    'Mobile browser'
  ],

  ratingsBreakdown: {
    accuracy: 4.8,
    easeOfUse: 4.6,
    features: 4.7,
    performance: 4.6,
    customization: 4.3,
    security: 4.5,
    support: 4.4,
    costEfficiency: 4.5,
    integrations: 4.6
  },

  overallScore: 4.7,

  conclusion: `SciSpace is one of the best AI research tools for students, academics, and professionals. With its powerful AI Copilot, massive research database, and publishing tools, it simplifies the entire research workflow and improves productivity significantly.`
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

