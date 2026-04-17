import { prompts } from "@/data/prompts";
import { claudePrompts } from "@/data/claude-prompts";
import type { Metadata } from "next";
import Script from "next/script";
import { generateFAQSchema, generateCollectionSchema } from "@/lib/schema";
import { ClaudePromptsPageClient } from "./claude-prompts-page-client";

export const metadata: Metadata = {
  title: "Best Claude AI Prompts (2026) — 120+ Free Prompts for Marketing & Business",
  description:
    "Explore 120+ best Claude AI prompts for marketing, copywriting, business, email, and automation. Copy and use instantly — no signup required. Updated 2026.",
  keywords: [
    "claude ai prompts",
    "best claude prompts 2026",
    "claude marketing prompts",
    "claude copywriting prompts",
    "claude business prompts",
    "free claude prompts",
    "anthropic claude prompts",
    "claude email prompts",
    "claude seo prompts",
  ],
  alternates: {
    canonical: "https://ainovalab.vercel.app/claude-prompts",
  },
  openGraph: {
    title: "Best Claude AI Prompts (2026) — Free & Ready to Use",
    description:
      "Browse 120+ best Claude AI prompts for marketing, copywriting, business, and content creation.",
    url: "https://ainovalab.vercel.app/claude-prompts",
    siteName: "AINovaLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Claude AI Prompts (2026)",
    description:
      "120+ free Claude AI prompts for marketing, copywriting, and business.",
  },
};

const faqs = [
  {
    q: "Are Claude prompts free?",
    a: "Yes, all prompts are 100% free to use and copy.",
  },
  {
    q: "Can beginners use Claude prompts?",
    a: "Absolutely! Just copy and paste — no experience needed. These prompts work for everyone.",
  },
  {
    q: "What is the best Claude prompt for marketing?",
    a: "It depends on your goal. We have prompts for email marketing, social media, ads, and SEO — choose based on your needs.",
  },
  {
    q: "Do Claude prompts work for business?",
    a: "Yes! Claude is excellent for business tasks like copywriting, email campaigns, business plans, and customer messaging.",
  },
  {
    q: "Can I use these prompts in other AI tools?",
    a: "Most prompts are Claude-optimized, but many also work with ChatGPT, Gemini, and other AI tools.",
  },
];

export default function ClaudePromptsPage() {
  const allClaudePrompts = [
    ...claudePrompts,
    ...prompts.filter((p) => p.model.toLowerCase() === "claude"),
  ];

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <ClaudePromptsPageClient allClaudePrompts={allClaudePrompts} />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <Script
        id="collection-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionSchema(allClaudePrompts)),
        }}
      />
    </main>
  );
}