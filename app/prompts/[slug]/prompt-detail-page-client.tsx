"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'
import { useParams } from "next/navigation";
import { prompts } from "@/data/prompts";
import type { PromptVariation } from "@/data/prompts";
import {
  ArrowLeft,
  Heart,
  Copy,
  Check,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
}

function GhostBtn({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'transparent', border: '1px solid rgba(255,255,255,0.08)',
      color: 'rgba(255,255,255,0.5)', borderRadius: 999, padding: '8px 16px',
      fontSize: 13, cursor: 'pointer'
    }}>
      {children}
    </span>
  )
}

export default function PromptDetailPageClient({ slug }: { slug: string }) {
  const prompt = prompts.find((p) => p.slug === slug);
  const promptTags = prompt?.tag.split(",").map((tag) => tag.trim()).filter(Boolean) ?? [];
  const related = prompts
    .filter((p) => {
      if (p.slug === slug) return false;
      const tags = p.tag.split(",").map((tag) => tag.trim());
      return promptTags.some((tag) => tags.includes(tag));
    })
    .slice(0, 3);

  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(prompt?.likes ?? 0);
  const [currentVariationIndex, setCurrentVariationIndex] = useState(0);

  // Determine if this prompt has variations
  const hasVariations = !!(prompt?.variations && prompt.variations.length > 0);
  const currentVariation = hasVariations && prompt?.variations ? prompt.variations[currentVariationIndex] : null;
  
  // Display image and prompt - use variation if available, otherwise use main prompt
  const displayImage = currentVariation?.image || prompt?.image;
  const displayPrompt = currentVariation?.prompt || prompt?.prompt;
  const displayTitle = currentVariation?.title || prompt?.title;

  /* ── Not found ── */
  if (!prompt) {
    return (
      <div className="min-h-screen bg-[#111] flex flex-col text-white">
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <p className="text-xl font-semibold">Prompt not found</p>
          <Link
            href="/prompts"
            className="text-purple-400 hover:underline text-sm flex items-center gap-1"
          >
            <ArrowLeft size={14} /> Back to prompts
          </Link>
        </div>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(displayPrompt || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">

      {/* ── Main content ── */}
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0} style={{ marginBottom: 24 }}>
            <Link href="/prompts">
              <GhostBtn><ArrowLeft style={{ width: 14, height: 14 }} /> Back to prompts</GhostBtn>
            </Link>
          </motion.div>

          {/* Hero section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

            {/* Left - Image */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] w-full">
                <img
                  src={displayImage || "/images/placeholder.png"}
                  alt={displayTitle || prompt?.title}
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Variations Tabs */}
              {hasVariations && prompt.variations && (
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Variations ({prompt.variations.length})</p>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {prompt.variations.map((variation, idx) => (
                      <button
                        key={variation.id}
                        onClick={() => setCurrentVariationIndex(idx)}
                        className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                          idx === currentVariationIndex
                            ? "bg-purple-600 text-white border border-purple-500"
                            : "bg-white/5 text-gray-400 border border-white/10 hover:border-purple-500"
                        }`}
                      >
                        {variation.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right - Content */}
            <div className="flex flex-col justify-center gap-6 ml-4">
              {/* Badge */}
              <div className="inline-block w-fit">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-black px-3.5 py-2 rounded-lg">
                  Prompt Detail
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {prompt.title}
                </h1>
                {hasVariations && currentVariation && (
                  <p className="text-sm text-purple-400">{currentVariation.title}</p>
                )}
              </div>

              {/* Prompt description */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-3">Prompt</p>
                <p className="text-gray-300 text-sm leading-relaxed">{displayPrompt}</p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all
                    ${copied
                      ? "bg-green-600/20 text-green-400 border border-green-600/50"
                      : "bg-black text-white border border-white/20 hover:bg-white/10"
                    }`}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy"}
                </button>

                <a 
                  href={prompt.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 font-medium text-sm transition-all"
                >
                  <ExternalLink size={16} />
                  Try this
                </a>
              </div>
            </div>
          </div>

          {/* Metadata section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

            {/* Model card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-purple-500 cursor-pointer">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-3">Model or Tool</p>
              <p className="text-lg font-semibold text-white">{prompt.model}</p>
            </div>

            {/* Tags card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-purple-500 cursor-pointer">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {promptTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-purple-600/20 border border-purple-600/50 px-3 py-1.5 rounded-lg text-purple-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Likes card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-purple-500 cursor-pointer">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-2">Engagement</p>
              <button
                onClick={handleLike}
                className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
              >
                <Heart size={18} fill={liked ? "currentColor" : "none"} className={liked ? "text-pink-400" : ""} />
                <span className="text-lg font-semibold">{likeCount} Likes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
