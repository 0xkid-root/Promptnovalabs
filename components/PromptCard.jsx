"use client";

import Link from "next/link";

export default function PromptCard({ prompt }) {
    function truncateText(text, maxLength = 120) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
  return (
    <Link href={`/prompts/${prompt.slug}`} className="group block">
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#444] transition-all duration-200 cursor-pointer">

        {/* Image — full width, no padding, taller */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={prompt.image}
            alt={prompt.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* Body */}
        <div className="px-5 py-4">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {prompt.tag.split(",").map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold tracking-wide text-[#cccccc] border border-[#3a3a3a] px-3 py-1 rounded-full uppercase"
              >
                {tag.trim()}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-[0.85rem] font-bold text-white uppercase tracking-wide mb-2">
            {prompt.title}
          </h2>

          {/* Prompt text */}
          <p className="text-[0.82rem] text-[#999] leading-relaxed line-clamp-3">
           {truncateText(prompt.prompt, 120)}
          </p>
        </div>
      </div>
    </Link>
  );
}