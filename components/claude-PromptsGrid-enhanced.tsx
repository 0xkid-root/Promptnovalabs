"use client";
import { useState, useMemo } from "react";
import { claudePrompts } from "@/data/claude-prompts";
import { toast } from "sonner";
import { ConceptImage } from "./concept-image";

// Extract unique categories from prompts
const CATEGORIES = [
  "All",
  "Marketing",
  "Email",
  "Copywriting",
  "Social Media",
  "Business",
  "Content",
  "Professional",
  "Sales",
  "SEO",
];

export default function ClaudePromptsGrid() {
  const [active, setActive] = useState("All");
  const [liked, setLiked] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  // Filter prompts based on active category
  const filtered = useMemo(() => {
    if (active === "All") return claudePrompts;
    return claudePrompts.filter((p) => p.tag.includes(active));
  }, [active]);

  const toggleLike = (id: string) =>
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );

  const copyPrompt = async (id: string, title: string, promptText: string) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(id);
      toast.success(`"${title}" copied to clipboard!`, {
        duration: 2000,
      });
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast.error("Failed to copy prompt", {
        duration: 2000,
      });
    }
  };

  return (
    <section id="prompts" className="max-w-7xl mx-auto px-6 pb-24">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              active === cat
                ? "bg-violet-600 text-white shadow-lg shadow-violet-900/40"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
            aria-pressed={active === cat}
            role="tab"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-zinc-400">
        Showing {filtered.length} prompt{filtered.length !== 1 ? "s" : ""}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prompt) => (
          <article
            key={prompt.id}
            className="group relative bg-[#111111] border border-white/8 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-900/20 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-violet-900 to-black">
              {prompt.image && !prompt.image.includes("unsplash") ? (
                <img
                  src={prompt.image}
                  alt={prompt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                  <ConceptImage category={prompt.tag} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

              {/* Like button */}
              <button
                onClick={() => toggleLike(prompt.id)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-violet-400/50 transition-colors"
                aria-label={`Like ${prompt.title}`}
                title="Like this prompt"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={liked.includes(prompt.id) ? "#a78bfa" : "none"}
                  stroke={liked.includes(prompt.id) ? "#a78bfa" : "currentColor"}
                  strokeWidth="2"
                  className="text-zinc-400"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-xs font-medium text-violet-400">{prompt.tag.split(",")[0]}</span>
              <h3 className="mt-1 text-base font-semibold text-white leading-snug line-clamp-2">
                {prompt.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-2">
                {prompt.prompt ? prompt.prompt.substring(0, 100) : "Premium prompt"}...
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-zinc-600">{prompt.likes} likes</span>
                <button
                  onClick={() => copyPrompt(prompt.id, prompt.title, prompt.prompt || "")}
                  disabled={!prompt.prompt}
                  className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                    copied === prompt.id
                      ? "text-violet-400"
                      : "text-zinc-400 hover:text-violet-400"
                  } ${!prompt.prompt ? "opacity-50 cursor-not-allowed" : ""}`}
                  title="Copy prompt to clipboard"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  {copied === prompt.id ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Premium Badge */}
              {prompt.isPremium && (
                <div className="mt-3 inline-block px-2 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded text-xs font-medium text-yellow-400">
                  Premium
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-400">No prompts found in this category.</p>
        </div>
      )}
    </section>
  );
}
