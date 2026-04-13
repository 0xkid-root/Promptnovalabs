import { prompts } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import type { Metadata } from "next";
import Script from "next/script";
import { generateFAQSchema, generateCollectionSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Gemini AI Prompts (2026) — Free & Ready to Use",
  description:
    "Browse 100+ best Gemini AI prompts for realistic portraits, cinematic scenes, fantasy art, and creative designs. Copy and use instantly — no signup required.",
  keywords: [
    "gemini ai prompts",
    "best gemini prompts 2026",
    "gemini image prompts",
    "google gemini prompts",
    "ai image generation prompts",
    "gemini art prompts",
    "free gemini prompts",
  ],
  alternates: {
    canonical: "https://ainovalab.vercel.app/gemini-prompts",
  },
  openGraph: {
    title: "Best Gemini AI Prompts (2026) — Free & Ready to Use",
    description:
      "Browse 100+ best Gemini AI prompts for realistic portraits, cinematic scenes, fantasy art, and creative designs.",
    url: "https://ainovalab.vercel.app/gemini-prompts",
    siteName: "AINovaLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gemini AI Prompts (2026)",
    description:
      "100+ free Gemini AI prompts for stunning image generation.",
  },
};

const steps = [
  {
    step: "01",
    title: "Copy the Prompt",
    desc: "Select any prompt and copy it instantly.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Paste into Gemini",
    desc: "Open Gemini AI and paste the prompt.",
    icon: "✦",
  },
  {
    step: "03",
    title: "Generate",
    desc: "Click generate and customize results.",
    icon: "⚡",
  },
];

const faqs = [
  {
    q: "Are Gemini AI prompts free?",
    a: "Yes, all prompts are free to use.",
  },
  {
    q: "Can beginners use these prompts?",
    a: "Yes, just copy and paste — no experience needed.",
  },
  {
    q: "Do these work with other AI tools?",
    a: "Yes, most prompts work with Midjourney, DALL·E, etc.",
  },
];

export default function GeminiPromptsPage() {
  const geminiPrompts = prompts.filter(
    (p) => p.model.toLowerCase() === "gemini"
  );

  return (
    <main className="bg-[#0d0d0d] min-h-screen">

      {/* HERO */}
      <section className="border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 py-16">

          <div className="mb-6 text-xs text-green-400">● Updated 2026</div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
            Best Gemini AI Prompts (2026)
          </h1>

          <p className="text-[#777] max-w-xl mb-6">
            Discover {geminiPrompts.length}+ high-quality prompts for realistic,
            cinematic, and creative AI images.
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* GRID */}
        <section className="mb-16">
          <h2 className="text-lg text-[#d1d1d1] mb-6">
            Trending Prompts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {geminiPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-16 max-w-2xl">
          <h2 className="text-lg text-[#d1d1d1] mb-4">
            What are Gemini AI Prompts?
          </h2>
          <p className="text-[#777] text-sm leading-relaxed">
            Gemini prompts are structured instructions used to generate AI images
            with control over lighting, style, and realism.
          </p>
        </section>

        {/* STEPS */}
        <section className="mb-16">
          <h2 className="text-lg text-[#d1d1d1] mb-6">
            How to Use
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.step} className="bg-[#111] p-4 rounded-xl border border-[#222]">
                <div className="mb-2">{s.icon}</div>
                <h3 className="text-white text-sm mb-1">{s.title}</h3>
                <p className="text-[#666] text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg text-[#d1d1d1] mb-6">
            FAQs
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-[#111] p-4 rounded-xl border border-[#222]">
                <h3 className="text-white text-sm mb-1">{f.q}</h3>
                <p className="text-[#666] text-xs">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ✅ SCHEMA (SEO BOOST) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <Script
        id="collection-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionSchema(geminiPrompts)),
        }}
      />

    </main>
  );
}