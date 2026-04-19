interface ConceptImageProps {
  category: string;
  className?: string;
}

export function ConceptImage({ category, className = "w-full h-full" }: ConceptImageProps) {
  const primaryCategory = category.split(",")[0].toLowerCase();

  // Email: Envelope with glow
  if (primaryCategory.includes("email")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className={className}
        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
      >
        <defs>
          <filter id="glow-email">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Animated background circles */}
        <circle cx="80" cy="40" r="30" fill="rgba(255,255,255,0.1)" filter="url(#glow-email)" />
        <circle cx="320" cy="180" r="50" fill="rgba(255,255,255,0.1)" filter="url(#glow-email)" />

        {/* Envelope */}
        <g filter="url(#glow-email)">
          <rect x="100" y="70" width="200" height="120" fill="none" stroke="white" strokeWidth="2" rx="4" />
          <path d="M 100 70 L 200 130 L 300 70" fill="none" stroke="white" strokeWidth="2" />
          <line x1="100" y1="70" x2="200" y2="130" stroke="white" strokeWidth="2" />
          <line x1="300" y1="70" x2="200" y2="130" stroke="white" strokeWidth="2" />
        </g>

        {/* Glow effect */}
        <circle cx="200" cy="130" r="80" fill="rgba(255,255,255,0.1)" filter="url(#glow-email)" />
      </svg>
    );
  }

  // Marketing: Analytics / Graph
  if (primaryCategory.includes("marketing")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className={className}
        style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}
      >
        <defs>
          <filter id="glow-marketing">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Grid */}
        <line x1="60" y1="160" x2="340" y2="160" stroke="white" strokeWidth="2" opacity="0.3" />
        <line x1="60" y1="160" x2="60" y2="40" stroke="white" strokeWidth="2" opacity="0.3" />

        {/* Bars */}
        <g filter="url(#glow-marketing)">
          <rect x="90" y="120" width="25" height="40" fill="white" opacity="0.9" rx="2" />
          <rect x="135" y="90" width="25" height="70" fill="white" opacity="0.9" rx="2" />
          <rect x="180" y="60" width="25" height="100" fill="white" opacity="0.9" rx="2" />
          <rect x="225" y="80" width="25" height="80" fill="white" opacity="0.9" rx="2" />
          <rect x="270" y="100" width="25" height="60" fill="white" opacity="0.9" rx="2" />
        </g>

        {/* Trend line */}
        <polyline
          points="102.5,120 147.5,90 192.5,60 237.5,80 282.5,100"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="3"
          filter="url(#glow-marketing)"
        />
      </svg>
    );
  }

  // Coding: Neon grid
  if (primaryCategory.includes("coding")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className={className}
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
      >
        <defs>
          <filter id="glow-coding">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Grid lines - cyan */}
        <g stroke="#00ff88" strokeWidth="1.5" opacity="0.6" filter="url(#glow-coding)">
          <line x1="80" y1="50" x2="320" y2="50" />
          <line x1="80" y1="90" x2="320" y2="90" />
          <line x1="80" y1="130" x2="320" y2="130" />
          <line x1="80" y1="170" x2="320" y2="170" />
          <line x1="80" y1="50" x2="80" y2="170" />
          <line x1="140" y1="50" x2="140" y2="170" />
          <line x1="200" y1="50" x2="200" y2="170" />
          <line x1="260" y1="50" x2="260" y2="170" />
          <line x1="320" y1="50" x2="320" y2="170" />
        </g>

        {/* Glowing nodes */}
        <g fill="#00ff88" filter="url(#glow-coding)">
          <circle cx="140" cy="90" r="4" opacity="0.8" />
          <circle cx="200" cy="70" r="4" opacity="0.8" />
          <circle cx="260" cy="110" r="4" opacity="0.8" />
          <circle cx="200" cy="150" r="4" opacity="0.8" />
        </g>

        {/* Accent lines - magenta */}
        <g stroke="#ff00ff" strokeWidth="2" opacity="0.4" filter="url(#glow-coding)">
          <line x1="140" y1="90" x2="200" y2="70" />
          <line x1="200" y1="70" x2="260" y2="110" />
          <line x1="260" y1="110" x2="200" y2="150" />
        </g>
      </svg>
    );
  }

  // Business: Charts
  if (primaryCategory.includes("business")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className={className}
        style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}
      >
        <defs>
          <filter id="glow-business">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Pie chart */}
        <g filter="url(#glow-business)">
          <circle cx="120" cy="110" r="50" fill="white" opacity="0.2" stroke="white" strokeWidth="2" />
          <path
            d="M 120 110 L 120 60 A 50 50 0 0 1 155 75 Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M 120 110 L 155 75 A 50 50 0 0 1 120 160 Z"
            fill="white"
            opacity="0.7"
          />
        </g>

        {/* Bar chart */}
        <g filter="url(#glow-business)">
          <rect x="240" y="130" width="20" height="40" fill="white" opacity="0.9" rx="2" />
          <rect x="270" y="100" width="20" height="70" fill="white" opacity="0.8" rx="2" />
          <rect x="300" y="110" width="20" height="60" fill="white" opacity="0.7" rx="2" />
        </g>

        {/* Connection lines */}
        <line
          x1="170"
          y1="110"
          x2="240"
          y2="110"
          stroke="white"
          strokeWidth="2"
          opacity="0.5"
          filter="url(#glow-business)"
        />
      </svg>
    );
  }

  // SEO: Search icon + graph
  if (primaryCategory.includes("seo")) {
    return (
      <svg
        viewBox="0 0 400 220"
        className={className}
        style={{ background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }}
      >
        <defs>
          <filter id="glow-seo">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Search icon */}
        <g filter="url(#glow-seo)">
          <circle cx="100" cy="80" r="30" fill="none" stroke="white" strokeWidth="3" opacity="0.9" />
          <line x1="125" y1="105" x2="145" y2="125" stroke="white" strokeWidth="3" opacity="0.9" />
          <line x1="85" y1="60" x2="115" y2="100" stroke="white" strokeWidth="2" opacity="0.6" />
        </g>

        {/* Upward graph trend */}
        <g filter="url(#glow-seo)">
          <line x1="200" y1="160" x2="320" y2="160" stroke="white" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="160" x2="200" y2="50" stroke="white" strokeWidth="2" opacity="0.4" />

          <polyline
            points="220,130 240,110 260,100 280,80 300,60"
            fill="none"
            stroke="white"
            strokeWidth="3"
            opacity="0.9"
          />

          {/* Upward arrow indicator */}
          <polygon points="290,45 300,65 280,55" fill="white" opacity="0.9" />
        </g>
      </svg>
    );
  }

  // Default: Content/Social Media
  return (
    <svg
      viewBox="0 0 400 220"
      className={className}
      style={{ background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" }}
    >
      <defs>
        <filter id="glow-default">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Frame */}
      <rect x="80" y="50" width="240" height="150" fill="none" stroke="white" strokeWidth="2" rx="8" />

      {/* Content elements */}
      <g filter="url(#glow-default)">
        <rect x="100" y="70" width="200" height="20" fill="white" opacity="0.8" rx="2" />
        <rect x="100" y="105" width="200" height="12" fill="white" opacity="0.6" rx="1" />
        <rect x="100" y="125" width="200" height="12" fill="white" opacity="0.6" rx="1" />
        <rect x="100" y="145" width="150" height="12" fill="white" opacity="0.6" rx="1" />
      </g>

      {/* Accent dots */}
      <circle cx="320" cy="75" r="5" fill="white" opacity="0.7" filter="url(#glow-default)" />
    </svg>
  );
}
