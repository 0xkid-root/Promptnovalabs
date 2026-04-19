"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Copy, ChevronRight, Check } from "lucide-react";
import { prompts, CATEGORIES } from "@/data/prompts";

const getPromptTags = (tagString: string) =>
  tagString
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200
        ${
          copied
            ? "bg-green-500/10 border-green-500/30 text-green-400"
            : "bg-[#1e1e1e] border-[#333] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
        }`}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function PromptsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = prompts.filter((p) => {
    const tags = getPromptTags(p.tag);
    const matchCat = activeCategory === "All" || tags.includes(activeCategory);
    const q = search.toLowerCase();

    // Get the prompt text - use root prompt or first variation's prompt
    const promptText = p.prompt || (p.variations && p.variations.length > 0 ? p.variations[0].prompt : '');

    const matchSearch =
      p.title.toLowerCase().includes(q) ||
      promptText.toLowerCase().includes(q) ||
      tags.some((tag) => tag.toLowerCase().includes(q));

    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#111] text-white">

      {/* ── Hero ── */}
      <div className="text-center py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Explore AI <span className="text-purple-500">Prompts</span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Discover, explore, and copy powerful AI prompts created by the community.
          Stay inspired with trending ideas and cinematic visuals to create stunning AI-generated content.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    {/* ── Search ── */}
        


        {/* Search */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 relative"
          >
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/50" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full bg-secondary px-12 py-3 text-foreground placeholder:text-foreground/50 border border-primary/20 focus:border-primary/50 focus:outline-none transition-colors"
            />
          </motion.div>

        {/* ── Categories ── */}
        <div className="flex gap-2 flex-wrap mb-7">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 mb-5 rounded-full text-sm font-medium border transition-all duration-200
                ${
                  activeCategory === cat
                    ? "bg-purple-600 border-purple-600 text-white"
                    : "bg-transparent border-[#333] text-gray-400 hover:border-purple-600 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg font-medium">No prompts found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {filtered.map((p) => (
              <Link
                key={p.id}
                href={`/prompts/${encodeURIComponent(p.slug)}`}
                className="group block"
              >
                <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden flex-shrink-0 bg-[#0a0a0a]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {getPromptTags(p.tag).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest bg-purple-600/10 border border-purple-600/20 text-purple-200 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-white">
                        {p.title}
                      </span>
                    </div>

                    {/* Prompt */}
                    <p
                      className="text-gray-300 text-sm leading-relaxed mb-4 flex-1 overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {p.prompt || (p.variations && p.variations.length > 0 ? p.variations[0].prompt : 'No prompt available')}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1a]">
                      <CopyButton text={p.prompt || (p.variations && p.variations.length > 0 ? p.variations[0].prompt : '')} />

                      <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] hover:bg-purple-600/20 hover:border-purple-600/50 border border-[#2a2a2a] flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
                        <ChevronRight
                          size={14}
                          className="text-gray-500 group-hover:text-purple-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
