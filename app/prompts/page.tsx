"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart, Copy, Star, ChevronRight, Check } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { prompts } from "@/data/prompts";

const CATEGORIES = ["All", "Portrait", "Cinematic", "Architecture", "Abstract", "Nature", "Fantasy"];

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
        ${copied
          ? "bg-green-500/10 border-green-500/30 text-green-400"
          : "bg-[#1e1e1e] border-[#333] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
        }`}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = prompts.filter((p) => {
    const matchCat = activeCategory === "All" || p.tag === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(q) ||
      p.prompt.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Header />

      {/* ── Hero ── */}
      <div className="text-center py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Featured AI <span className="text-purple-500">Prompts</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Browse and copy the best AI prompts shared by the community. Use them in your favourite AI tools.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* ── Search ── */}
        <div className="relative mb-5">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search prompts, authors, tags…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
          />
        </div>

        {/* ── Category pills ── */}
        <div className="flex gap-2 flex-wrap mb-7">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                ${activeCategory === cat
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "bg-transparent border-[#333] text-gray-400 hover:border-purple-600 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Count ── */}
        <p className="text-gray-500 text-sm mb-5">
          {filtered.length} prompt{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg font-medium">No prompts found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link key={p.id} href={`/prompts/${p.slug}`} className="group block">
                <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#2a2a2a] transition-all duration-300 flex flex-col">

                  {/* Image */}
                  <div className="relative overflow-hidden flex-shrink-0 bg-[#0a0a0a]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Tag + Author Row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-purple-400">
                        {p.tag}
                      </span>
                      <span className="text-[11px] text-gray-500">by {p.author}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 mb-4 flex-1">
                      {p.prompt}
                    </p>

                    {/* Footer - Copy + Arrow */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1a]">
                      <CopyButton text={p.prompt} />
                      <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] hover:bg-purple-600/20 hover:border-purple-600/50 border border-[#2a2a2a] flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
                        <ChevronRight size={14} className="text-gray-500 group-hover:text-purple-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
