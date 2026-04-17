const STEPS = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-violet-400">
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Find a Claude Prompt",
    description: "Browse our curated collection of Claude AI prompts for marketing, writing, coding, and business use cases.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-violet-400">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
    title: "Copy & Paste into Claude",
    description: "Copy your selected prompt and paste it into Claude AI (Sonnet or Opus) to start generating content instantly.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Generate High-Quality Results",
    description: "Customize the prompt and generate high-quality outputs for emails, ads, blogs, and more using Claude AI.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-6">
      
      {/* Glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/40" />

      <div className="max-w-4xl mx-auto text-center">
        
        {/* ✅ SEO Heading */}
        <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
          How to Use Claude AI Prompts
        </h2>

        {/* ✅ SEO Paragraph */}
        <p className="text-zinc-500 text-base mb-12 max-w-2xl mx-auto">
          Learn how to use Claude AI prompts effectively to generate high-quality content.
          Follow these simple steps to copy, customize, and use prompts with Claude 3.5 Sonnet or Opus for best results.
        </p>

        {/* ✅ Semantic list for SEO */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <li
              key={i}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors duration-300">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed text-center">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}