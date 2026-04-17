"use client";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center px-6 py-16 md:py-20 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-700/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-900/20 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-indigo-800/15 blur-[80px]" />
      </div>

      {/* Badge */}
      <div className="relative mb-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        Updated for 2026
      </div>

      {/* Headline */}
      <h1 className="relative max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
        Best Claude AI Prompts{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
          (2026)
        </span>
      </h1>

      {/* Subheadline */}
      <p className="relative max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
        A curated collection of highly effective, free prompts optimized for Claude 3.5 Sonnet and Opus.
        Level up your writing, marketing, coding, and business workflows.
      </p>

      {/* CTAs */}
      <div className="relative flex flex-col sm:flex-row items-center gap-3 mt-4">
        <a
          href="#prompts"
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 hover:-translate-y-0.5"
        >
          Explore Prompts
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
          </svg>
          Submit Prompt
        </a>
      </div>
    </section>
  );
}
