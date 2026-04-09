export type Prompt = {
  id: string;
  slug: string;
  title: string;
  tag: string;
  author: string;
  date: string;
  likes: number;
  model: string;
  isPremium: boolean;
  image: string;
  prompt: string;
};

export const prompts: Prompt[] = [
  {
    id: "1",
    slug: "submerged",
    title: "Submerged",
    tag: "Portrait",
    author: "@_raffanascimento",
    date: "October 12, 2025",
    likes: 743,
    model: "Gemini",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=90",
    prompt:
      "Hyper-realistic, ultra-detailed close-up portrait showing only the left half of my face submerged in water, one eye in sharp focus, positioned on the far left of the frame, light rays creating caustic patterns on the skin, suspended water droplets and bubbles adding depth, cinematic lighting with soft shadows and sharp highlights, photorealistic textures including skin pores, wet lips, eyelashes, and subtle subsurface scattering, surreal and dreamlike atmosphere, shallow depth of field, underwater macro perspective. 3:4 aspect ratio",
  },
  {
    id: "2",
    slug: "retrato-editorial",
    title: "Retrato Editorial",
    tag: "Portrait",
    author: "@edferreirajr",
    date: "October 8, 2025",
    likes: 837,
    model: "Midjourney",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
    prompt:
      "Studio portrait of a confident man sitting on a modern beige armchair with wooden legs, leaning slightly forward with his hands together. He wears a navy blue button-up shirt, editorial lighting, soft shadows, minimal background, professional photography, 4K quality, photorealistic.",
  },
  {
    id: "3",
    slug: "monochrome-strength",
    title: "Monochrome Strength",
    tag: "Cinematic",
    author: "BKD",
    date: "October 5, 2025",
    likes: 573,
    model: "DALL-E 3",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=90",
    prompt:
      "Full body portrait of a tall confident man in a dark green suit, sitting in a matching wingback chair against a solid deep green background. White t-shirt underneath, clean monochrome setup, dramatic studio lighting, luxury editorial fashion photography, sharp focus, 8K.",
  },
  {
    id: "4",
    slug: "blue-dreams-morocco",
    title: "Blue Dreams of Morocco",
    tag: "Architecture",
    author: "BKD",
    date: "October 1, 2025",
    likes: 563,
    model: "Stable Diffusion",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=90",
    prompt:
      "A woman in a white off-shoulder top and black skirt walks through a narrow blue-painted alley in Chefchaouen, Morocco. Colorful flower pots on walls, morning golden light, travel photography, dreamy atmosphere, wide angle, vibrant colors, ultra detailed.",
  },
  {
    id: "5",
    slug: "cinematic-urban-portrait",
    title: "Cinematic Urban Portrait",
    tag: "Cinematic",
    author: "@hahibomarov",
    date: "September 28, 2025",
    likes: 501,
    model: "Gemini",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=90",
    prompt:
      "A cinematic urban portrait of me, keeping my real face unchanged. I am sitting casually on outdoor stone steps in front of a building entrance, leaning slightly forward, hand raised to temple in a thoughtful pose. Wearing a dark jacket, bokeh city lights background, golden hour lighting, 8K photorealistic, shallow depth of field.",
  },
  {
    id: "6",
    slug: "ethereal-forest",
    title: "Ethereal Forest Goddess",
    tag: "Fantasy",
    author: "@natureart",
    date: "September 20, 2025",
    likes: 412,
    model: "Midjourney",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=90",
    prompt:
      "A mystical woman standing in an ancient forest, surrounded by glowing fireflies and soft morning mist. She wears a flowing emerald dress that blends into the moss-covered ground. Dappled sunlight breaks through the canopy above, photorealistic, fantasy art, magical atmosphere, ultra detailed, 8K resolution.",
  },
  {
    id: "7",
    slug: "gini-portrait",
    title: "Gini",
    tag: "Portrait",
    author: "Gemini",
    date: "September 15, 2025",
    likes: 677,
    model: "Gemini",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=90",
    prompt:
      "Maintain the same face and person (use attached photo for accurate face). Hyper-realistic cinematic 8k photorealistic image using the attached reference. Soft studio lighting, clean neutral background, high-end fashion editorial look, ultra sharp details, skin texture visible, professional retouching.",
  },
  {
    id: "8",
    slug: "abstract-geometry",
    title: "Sacred Geometry",
    tag: "Abstract",
    author: "@designmind",
    date: "September 10, 2025",
    likes: 389,
    model: "DALL-E 3",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=90",
    prompt:
      "Ultra-detailed sacred geometry mandala floating in deep space, intricate golden ratio spirals, glowing neon lines on dark cosmic background, symmetrical fractal patterns, holographic iridescent colors, 3D depth illusion, 8K render, mathematically perfect composition.",
  },
];
