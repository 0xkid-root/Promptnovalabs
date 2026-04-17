import { Metadata } from "next";
import Hero from "@/components/claude-hero";
import ClaudePromptsGrid from "@/components/claude-PromptsGrid-enhanced";
import FAQ from "@/components/claude-faq";
import { SchemaMarkup } from "@/components/schema-markup";
import { claudePrompts } from "@/data/claude-prompts";

export const metadata: Metadata = {
  title: "Claude AI Prompts - 20+ Premium ChatGPT Prompts for Marketing, Email & Sales",
  description:
    "Discover 20+ high-converting Claude prompts for marketing, copywriting, email campaigns, social media, and business. Expert-curated prompts to boost productivity.",
  keywords: [
    "Claude prompts",
    "AI prompts",
    "marketing prompts",
    "copywriting prompts",
    "email prompts",
    "ChatGPT prompts",
    "social media prompts",
  ],
  openGraph: {
    title: "Claude AI Prompts - Marketing & Copywriting Prompts",
    description:
      "Get 20+ expert-curated Claude prompts for marketing, copywriting, email, and sales.",
    type: "website",
    url: "https://promptlabs.com/claude-ai-prompts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const claudePromptsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Claude AI Prompts Collection",
  description:
    "A comprehensive collection of premium Claude AI prompts for marketing, copywriting, and business",
  url: "https://promptlabs.com/claude-ai-prompts",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: claudePrompts.map((prompt, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: prompt.title,
        description: prompt.prompt?.substring(0, 160),
        url: `https://promptlabs.com/prompts/${prompt.slug}`,
        image: prompt.image,
        author: {
          "@type": "Organization",
          name: "Prompt Labs",
        },
      },
    })),
  },
};

export default function ClaudePromptsPage() {
  return (
    <>
      <SchemaMarkup jsonLd={claudePromptsSchema} />
      <main className="bg-[#0a0a0a] min-h-screen text-white">
        <Hero />
        <ClaudePromptsGrid />
        <FAQ />
      </main>
    </>
  );
}
