import { prompts } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import type { Metadata } from "next";
import Script from "next/script";
import { generateFAQSchema, generateCollectionSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best ChatGPT AI Prompts (2026) — Free & Ready to Use",
  description:
    "Browse 100+ best ChatGPT AI prompts for writing, coding, content creation, and productivity. Copy and use instantly — no signup required.",
  keywords: [
    "chatgpt prompts",
    "best chatgpt prompts 2026",
    "chatgpt writing prompts",
    "chatgpt coding prompts",
    "ai prompts",
    "chatgpt productivity prompts",
    "free chatgpt prompts",
  ],
  alternates: {
    canonical: "https://ainovalab.vercel.app/chatgpt-prompts",
  },
  openGraph: {
    title: "Best ChatGPT AI Prompts (2026) — Free & Ready to Use",
    description:
      "Browse 100+ best ChatGPT AI prompts for writing, coding, and content creation.",
    url: "https://ainovalab.vercel.app/chatgpt-prompts",
    siteName: "AINovaLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best ChatGPT AI Prompts (2026)",
    description:
      "100+ free ChatGPT AI prompts for writing and productivity.",
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
    title: "Paste into ChatGPT",
    desc: "Open ChatGPT and paste the prompt.",
    icon: "✦",
  },
  {
    step: "03",
    title: "Get Results",
    desc: "Click send and customize the response.",
    icon: "⚡",
  },
];

const faqs = [
  {
    q: "Are ChatGPT prompts free?",
    a: "Yes, all prompts are free to use.",
  },
  {
    q: "Can beginners use these prompts?",
    a: "Yes, just copy and paste — no experience needed.",
  },
  {
    q: "Do these work with other AI tools?",
    a: "Yes, most prompts work with Claude, Gemini, and other AI models.",
  },
];

export default function ChatGPTPromptsPage() {
  const chatgptPrompts = prompts.filter(
    (p) => p.model.toLowerCase() === "chatgpt"
  );

  return (
    <main className="bg-[#0d0d0d] min-h-screen">

      {/* HERO */}
      <section className="border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 py-16">

          <div className="mb-6 text-xs text-green-400">● Updated 2026</div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
            Best ChatGPT AI Prompts (2026)
          </h1>

          <p className="text-[#777] max-w-xl mb-6">
            Discover {chatgptPrompts.length}+ best ChatGPT AI prompts for writing,
            coding, content creation, and productivity. Perfect for beginners and
            professionals looking for high-quality AI prompts.
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* GRID */}
        <section className="mb-16">
          <h2 className="text-lg text-[#d1d1d1] mb-6">
            Trending ChatGPT AI Prompts (2026)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {chatgptPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-16 max-w-2xl">
          <h2 className="text-lg text-[#d1d1d1] mb-4">
            What are ChatGPT Prompts?
          </h2>
          <p className="text-[#777] text-sm leading-relaxed">
            ChatGPT prompts are structured instructions used to generate high-quality
            text responses, including writing, coding, brainstorming, and creative content.
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
        </section>
      </div>
    </main>
  );
}