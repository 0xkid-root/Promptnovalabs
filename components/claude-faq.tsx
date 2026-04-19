"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Are these prompts free to use?",
    a: "Yes, all prompts on AINovaLab are completely free to browse and copy. No account required. We believe in providing open access to high-quality AI prompts."
  },
  {
    q: "Do these prompts work with Claude 3.5 Sonnet?",
    a: "Yes, these prompts are optimized for Claude 3.5 Sonnet and Claude Opus. They are designed to produce high-quality results for writing, marketing, coding, and business tasks."
  },
  {
    q: "Can beginners use Claude AI prompts easily?",
    a: "Absolutely. Our prompts are beginner-friendly. You just need to copy and paste them into Claude AI to get instant results without any prior experience."
  },
  {
    q: "What can I create using Claude AI prompts?",
    a: "You can create blog posts, marketing copy, email sequences, social media content, business strategies, coding solutions, and more using Claude AI prompts."
  },
  {
    q: "Can I use these prompts in ChatGPT or other AI tools?",
    a: "Yes, most prompts can also be used in ChatGPT, Gemini, and other AI tools. However, results may vary slightly depending on the model."
  },
  {
    q: "Are these the best Claude AI prompts for 2026?",
    a: "Yes, our prompt library is regularly updated with the latest and most effective prompts based on current AI trends and real-world use cases in 2026."
  },
  {
    q: "Do I need an account to use these prompts?",
    a: "No, you don’t need to sign up. You can instantly copy and use any prompt without creating an account."
  },
  {
    q: "Can I customize these prompts?",
    a: "Yes, you can modify tone, audience, and purpose to match your needs. Customizing prompts often gives even better and more personalized results."
  },
  {
    q: "Which Claude prompts are best for marketing and copywriting?",
    a: "Marketing and copywriting prompts like ad copy generators, email funnels, SEO blog prompts, and sales scripts are highly effective for business growth and conversions."
  },
  {
    q: "How often are new prompts added?",
    a: "We update our database regularly and add new prompts every week to keep up with the latest AI capabilities and trends."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-500 text-base">Everything you need to know about AINovaLab prompts.</p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-violet-500/40 bg-violet-500/5"
                  : "border-white/8 bg-white/[0.02] hover:border-white/15"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 text-zinc-400 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
