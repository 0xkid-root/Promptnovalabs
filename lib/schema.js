export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function generateCollectionSchema(prompts) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Best Gemini AI Prompts (2026)",
    description:
      "Browse the best Gemini AI prompts for realistic, cinematic, and creative image generation.",
    url: "https://ainovalab.vercel.app/gemini-prompts",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: prompts.slice(0, 10).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://ainovalab.vercel.app/prompts/${p.slug}`,
        name: p.title,
      })),
    },
  };
}