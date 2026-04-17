'use client';

import { prompts } from "@/data/prompts";
import { claudePrompts } from "@/data/claude-prompts";
import PromptCard from "@/components/PromptCard";
import { useState, useMemo } from "react";

const CLAUDE_CATEGORIES = [
  "All",
  "Marketing",
  "Copywriting",
  "Business",
  "Social Media",
  "Email",
  "SEO",
];

const steps = [
  {
    step: "01",
    title: "Copy the Prompt",
    desc: "Select any prompt and copy it instantly.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Paste into Claude",
    desc: "Open Claude AI and paste the prompt.",
    icon: "✦",
  },
  {
    step: "03",
    title: "Generate Results",
    desc: "Click send and customize results.",
    icon: "⚡",
  },
];

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

const useCases = [
  "Email marketing campaigns",
  "Social media content",
  "Product descriptions",
  "Blog post outlines",
  "Sales copy & landing pages",
  "SEO content optimization",
  "Business proposals",
  "Customer service scripts",
];

export function ClaudePromptsPageClient({ allClaudePrompts }: { allClaudePrompts: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrompts = useMemo(() => {
    if (selectedCategory === "All") {
      return allClaudePrompts;
    }
    return allClaudePrompts.filter((p) => 
      p.tag.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory, allClaudePrompts]);

  const statCount = allClaudePrompts.length;

  return (
    <>
      {/* 1️⃣ HERO SECTION */}
      <section className="border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-6 text-xs text-purple-400 font-medium">
            ● Updated 2026
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Best Claude AI Prompts (2026)
          </h1>

          <p className="text-[#999] max-w-2xl mb-8 text-base leading-relaxed">
            Explore {statCount}+ high-quality Claude prompts for marketing, copywriting,
            business, and automation. Copy and use instantly — no signup required.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mb-8">
            <div className="bg-[#111] p-4 rounded-lg border border-[#222]">
              <div className="text-2xl font-bold text-purple-400">🔥 {statCount}+</div>
              <div className="text-xs text-[#666] mt-1">Prompts</div>
            </div>
            <div className="bg-[#111] p-4 rounded-lg border border-[#222]">
              <div className="text-2xl font-bold text-purple-400">📂 {CLAUDE_CATEGORIES.length - 1}</div>
              <div className="text-xs text-[#666] mt-1">Categories</div>
            </div>
            <div className="bg-[#111] p-4 rounded-lg border border-[#222]">
              <div className="text-2xl font-bold text-purple-400">⚡ 100%</div>
              <div className="text-xs text-[#666] mt-1">Free</div>
            </div>
          </div>

          <a
            href="#prompts"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Explore Prompts →
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 2️⃣ SEARCH + FILTER BAR */}
        <section className="mb-12" id="prompts">
          <h2 className="text-lg text-[#d1d1d1] mb-6 font-semibold">Filter by Category</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {CLAUDE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white border border-purple-600"
                    : "bg-[#111] text-[#999] border border-[#222] hover:border-purple-500 hover:text-purple-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-xs text-[#666]">
            Showing {filteredPrompts.length} of {allClaudePrompts.length} prompts
          </p>
        </section>

        {/* 3️⃣ PROMPTS GRID */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredPrompts.length > 0 ? (
              filteredPrompts.map((prompt) => (
                <div key={prompt.id} className="group">
                  <PromptCard prompt={prompt} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-[#666] text-sm">No prompts found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* 4️⃣ FEATURED / TRENDING SECTION */}
        <section className="mb-16 py-8 border-t border-[#1f1f1f]">
          <h2 className="text-lg text-[#d1d1d1] mb-6 font-semibold">
            🔥 Trending Claude Prompts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {allClaudePrompts.slice(0, 6).map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* 5️⃣ SEO CONTENT SECTION */}
        <section className="mb-16 py-8 border-t border-[#1f1f1f] max-w-3xl">
          <h2 className="text-lg text-[#d1d1d1] mb-4 font-semibold">
            What are Claude AI Prompts?
          </h2>

          <p className="text-[#777] text-sm leading-relaxed mb-4">
            Claude AI prompts are structured instructions designed to help Anthropic's Claude AI
            generate high-quality content such as marketing copy, emails, blog posts, and business strategies.
          </p>

          <p className="text-[#777] text-sm leading-relaxed">
            A well-written prompt improves accuracy, tone, and creativity,
            allowing users to get better results instantly. Whether you're a marketer, entrepreneur, or content creator,
            these Claude prompts save hours of work and dramatically improve output quality.
          </p>
        </section>

        {/* 6️⃣ HOW TO USE SECTION */}
        <section className="mb-16 py-8 border-t border-[#1f1f1f]">
          <h2 className="text-lg text-[#d1d1d1] mb-6 font-semibold">
            How to Use Claude Prompts
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.step} className="bg-[#111] p-6 rounded-xl border border-[#222] hover:border-purple-500 transition-colors">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-purple-400 text-sm font-semibold mb-2">{s.step}</div>
                <h3 className="text-white text-sm font-semibold mb-2">{s.title}</h3>
                <p className="text-[#666] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7️⃣ USE CASE SECTION */}
        <section className="mb-16 py-8 border-t border-[#1f1f1f]">
          <h2 className="text-lg text-[#d1d1d1] mb-6 font-semibold">
            Best Use Cases of Claude Prompts
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#111] p-4 rounded-lg border border-[#222]">
                <span className="text-purple-400 font-bold">✓</span>
                <span className="text-[#ddd] text-sm">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8️⃣ INTERNAL LINKING (SEO BOOST) */}
        <section className="mb-16 py-8 border-t border-[#1f1f1f]">
          <h2 className="text-lg text-[#d1d1d1] mb-6 font-semibold">
            Explore More AI Tools & Prompts
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="/gemini-prompts"
              className="bg-[#111] p-6 rounded-lg border border-[#222] hover:border-purple-500 transition-colors group"
            >
              <div className="text-2xl mb-2">✨</div>
              <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                Gemini Prompts
              </h3>
              <p className="text-[#666] text-xs mt-2">100+ image generation prompts</p>
            </a>

            <a
              href="/chatgpt-prompts"
              className="bg-[#111] p-6 rounded-lg border border-[#222] hover:border-purple-500 transition-colors group"
            >
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                ChatGPT Prompts
              </h3>
              <p className="text-[#666] text-xs mt-2">200+ prompts for all uses</p>
            </a>

            <a
              href="/tools"
              className="bg-[#111] p-6 rounded-lg border border-[#222] hover:border-purple-500 transition-colors group"
            >
              <div className="text-2xl mb-2">🛠️</div>
              <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                AI Tools
              </h3>
              <p className="text-[#666] text-xs mt-2">Discover the best AI tools</p>
            </a>
          </div>
        </section>

        {/* 9️⃣ FAQ SECTION */}
        <section className="mb-20 py-8 border-t border-[#1f1f1f]">
          <h2 className="text-lg text-[#d1d1d1] mb-6 font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-[#111] p-5 rounded-lg border border-[#222]">
                <h3 className="text-white text-sm font-semibold mb-2">{f.q}</h3>
                <p className="text-[#777] text-xs leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Keywords Section */}
        <section className="max-w-3xl py-8 border-t border-[#1f1f1f]">
          <h2 className="text-lg text-[#d1d1d1] mb-4 font-semibold">
            Claude AI Prompts for Every Use Case (2026)
          </h2>

          <p className="text-[#777] text-sm leading-relaxed mb-4">
            Explore the best Claude AI prompts for marketing, copywriting, business, email campaigns, and SEO content.
            These high-quality prompts are perfect for entrepreneurs, marketers, creators, and journalists looking for
            structured instructions to get better results from Claude AI instantly.
          </p>

          <p className="text-[#777] text-sm leading-relaxed">
            Whether you need prompts for social media posts, email marketing, product descriptions, or blog content,
            AINovaLab provides 120+ free Claude prompts that work immediately. All prompts are tested and optimized
            to help you generate high-quality content with Claude AI in 2026. Copy any prompt and start creating now!
          </p>
        </section>
      </div>
    </>
  );
}
