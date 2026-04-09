export type Prompt = {
  id: string;
  slug: string;
  title: string;
  tag: string;
  date: string;
  likes: number;
  model: string;
  isPremium: boolean;
  image: string;
  prompt: string;
  website:string;
};

export const prompts: Prompt[] = [
  {
    id: "1",
    slug: "submerged",
    title: "Submerged",
    tag: "Realistic,Modern",
    date: "October 12, 2025",
    likes: 743,
    model: "Gemini",
    isPremium: false,
    image: '/images/prompts/submerged.png',
    website: "https://gemini.google.com/app",
    prompt:
    "Hyper-realistic, ultra-detailed close-up portrait showing only the left half of my face submerged in water, one eye in sharp focus, positioned on the far left of the frame, light rays creating caustic patterns on the skin, suspended water droplets and bubbles adding depth, cinematic lighting with soft shadows and sharp highlights, photorealistic textures including skin pores, wet lips, eyelashes, and subtle subsurface scattering, surreal and dreamlike atmosphere, shallow depth of field, underwater macro perspective. 3:4 aspect ratio"
  },
  {
    id: "2",
    slug: "gini",
    title: "Gini",
    tag: "Portrait,Realistic,Photography,Fashion,Minimalist,Elegant",
    date: "October 8, 2025",
    likes: 837,
    model: "Gemini",
    isPremium: false,
    image: '/images/prompts/gini.png',
    website: "https://gemini.google.com/app",
    prompt:
    "Maintain the same face and person (use attached photo for accurate face‎Hyper-realistic cinematic Create an 8k photorealistic image using the attached photo. A close-up portrait of a woman with long, jet-black, slightly wind-swept hair falling across her face. Her striking, light-colored eyes gaze upwards and to the right, catching a sharp, diagonal beam of natural light that illuminates the high points of her cheekbone, nose, and plump, glossy, mauve-toned lips a slightly light weight silk"
  },
  {
    id: "3",
    slug: "propt-moto-esportiva",
    title: "Propt moto esportiva",
    tag: "Realistic,Photography",
    date: "October 5, 2025",
    likes: 573,
    model: "Gemini",
    isPremium: false,
    image: '/images/prompts/propt-moto.png',
    website: "https://gemini.google.com/app",
    prompt:
    "An ultra-realistic, 8k cinematic portrait based on the reference image. The woman is seated confidently on a powerful, modern, glossy black sport motorcycle in a natural outdoor setting with a background of lush green trees and soft, dappled natural light. She maintains direct eye contact with the camera with a calm and confident expression. Her natural dark hair falls around her shoulders. She is dressed in a loose-fitting black crewneck t-shirt and dark, loose-fit jeans with visible cuffs at the bottom. On her feet are classic black and white Nike Dunk Low sneakers. A black tactical-style watch is visible on her left wrist. Her left hand rests casually on her left thigh. Her right hand rests on the motorcycle's fuel tank, holding a glossy black full-face helmet with a clear, reflective visor. The motorcycle itself is highly detailed, showcasing a large engine, a sturdy visible frame, and various brightly polished chrome components that gleam in the soft daylight, emphasizing its robust and modern build. The background is composed of tall trees creating a deep, natural backdrop with balanced shadow and light, adding to the cinematic depth. The image has an editorial fotorrealista style with rich colors and sharp focus on the user and the bike's textures."
  },
  {
    id: "4",
    slug: "blue-dreams-morocco",
    title: "Blue Dreams of Morocco",
    tag: "Architecture",
    date: "October 1, 2025",
    likes: 563,
    model: "Stable Diffusion",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=90",
        website: "https://stablediffusionweb.com/",

    prompt:
      "A woman in a white off-shoulder top and black skirt walks through a narrow blue-painted alley in Chefchaouen, Morocco. Colorful flower pots on walls, morning golden light, travel photography, dreamy atmosphere, wide angle, vibrant colors, ultra detailed.",
  },
  {
    id: "5",
    slug: "cinematic-urban-portrait",
    title: "Cinematic Urban Portrait",
    tag: "Cinematic",
    date: "September 28, 2025",
    likes: 501,
    model: "Gemini",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=90",
    website: "https://gemini.google.com/app",
    prompt:
      "A cinematic urban portrait of me, keeping my real face unchanged. I am sitting casually on outdoor stone steps in front of a building entrance, leaning slightly forward, hand raised to temple in a thoughtful pose. Wearing a dark jacket, bokeh city lights background, golden hour lighting, 8K photorealistic, shallow depth of field.",
  },
  {
    id: "6",
    slug: "ethereal-forest",
    title: "Ethereal Forest Goddess",
    tag: "Fantasy",
    date: "September 20, 2025",
    likes: 412,
    model: "Midjourney",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=90",
    website: "https://www.midjourney.com/app/feed/all/",
    prompt:
      "A mystical woman standing in an ancient forest, surrounded by glowing fireflies and soft morning mist. She wears a flowing emerald dress that blends into the moss-covered ground. Dappled sunlight breaks through the canopy above, photorealistic, fantasy art, magical atmosphere, ultra detailed, 8K resolution.",
  },
  {
    id: "7",
    slug: "gini-portrait",
    title: "Gini",
    tag: "Portrait",
    date: "September 15, 2025",
    likes: 677,
    model: "Gemini",
    isPremium: false,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=90",
    website: "https://gemini.google.com/app",
    prompt:
      "Maintain the same face and person (use attached photo for accurate face). Hyper-realistic cinematic 8k photorealistic image using the attached reference. Soft studio lighting, clean neutral background, high-end fashion editorial look, ultra sharp details, skin texture visible, professional retouching.",
  },
  {
    id: "8",
    slug: "abstract-geometry",
    title: "Sacred Geometry",
    tag: "Abstract",
    date: "September 10, 2025",
    likes: 389,
    model: "DALL-E 3",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=90",
    website: "https://openai.com/dall-e-3",
    prompt:
      "Ultra-detailed sacred geometry mandala floating in deep space, intricate golden ratio spirals, glowing neon lines on dark cosmic background, symmetrical fractal patterns, holographic iridescent colors, 3D depth illusion, 8K render, mathematically perfect composition.",
  },
  {
    id: "9",
    slug: "instinct-and-spirit",
    title: "Instinct and Spirit",
    tag: "Abstract",
    date: "September 10, 2025",
    likes: 389,
    model: "nanobanana",
    isPremium: false,
    image: "images/prompts/Instinct-Spirit.png",
    website: "https://gemini.google.com/app",
    prompt:
    "An intimate, ultra-realistic portrait of the man from image_0.png, with eyes closed in a moment of calm, and a wild male lion face-to-face. The lion gently rests its forehead and muzzle against the man's, conveying trust and a profound bond. They are standing on ground covered in light snow, with snowflakes gently falling around them. The man wears a dark winter coat, and his hair is slightly tousled by the wind. The lion displays a majestic, thick mane. In the background, a cold, misty natural landscape with blurred mountains reinforces the calm and powerful atmosphere. Soft, diffuse natural lighting highlights the intricate textures of skin, fur, and the man's coat. Shot on Sony A1 with 85mm lens."
  },

  {
    id: "10",
    slug: "black-tie-photo",
    title: "Black tie photo",
    tag: "Abstract,Realistic,Cinematic,Portrait,Minimalist",
    date: "September 10, 2025",
    likes: 389,
    model: "Gemini",
    isPremium: true,
    image: "images/prompts/Black-tie-photo.png",
    website: "https://gemini.google.com/app",
    prompt:
    "A monochromatic (black and white) hyper-realistic portrait of a confident, mature man with styled dark hair and a well-kept beard, dressed in a formal black suit, white shirt, and a neatly tied black tie. He is looking directly at the camera with an intense, focused gaze. The background is a modern, slightly industrial architectural space with exposed concrete pillars and walls, and large glass partitions, softly blurred. The lighting is high-contrast, dramatic chiaroscuro, highlighting his features and the texture of his suit. This is a central, medium close-up shot."
  },


  
];
