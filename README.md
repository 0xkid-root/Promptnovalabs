# PromptNovaLabs - AI Tools & Resources Platform

A modern, feature-rich Next.js application showcasing AI tools, prompts, and news. Built with Next.js 16, Tailwind CSS, shadcn/ui, Lucide icons, and Framer Motion animations.

## 🎨 Features

### Pages
- **Home Page** (`/`) - Hero section, prompt of the day, featured AI tools, tailored workflows, and latest news
- **News Page** (`/news`) - Comprehensive AI news feed with category filtering and search
- **Article Page** (`/article`) - Detailed article view with related content recommendations

### Components
- **Header** - Sticky navigation with mobile responsiveness
- **Hero Section** - Eye-catching landing section with gradient text and CTAs
- **Prompt of the Day** - Code snippet showcase with copy functionality
- **Featured Tools** - AI tools display with categories and badges
- **Tailored Workflow** - Use case-based sections for different professions
- **Latest News** - News grid with featured article highlighting
- **Footer** - Link sections and social media integration

### Design Features
- **Dark Theme** - Sophisticated dark mode with purple/blue accent colors
- **Glassmorphism** - Modern glass effect with backdrop blur
- **Smooth Animations** - Framer Motion animations for entry, hover, and scroll effects
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Glowing Effects** - Custom CSS utilities for glow animations
- **Gradient Text** - Eye-catching gradient text elements

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Typography**: Geist & Geist Mono (Google Fonts)

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page
├── globals.css             # Global styles with theme tokens
├── news/
│   └── page.tsx           # News listing page
└── article/
    └── page.tsx           # Article detail page

components/
├── header.tsx             # Navigation header
├── hero-section.tsx       # Hero section component
├── prompt-of-day.tsx      # Prompt showcase component
├── featured-tools.tsx     # Tools grid component
├── tailored-workflow.tsx  # Workflow sections
├── latest-news.tsx        # News section
├── footer.tsx             # Footer component
└── ui/                    # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    └── badge.tsx
```

## 🎯 Color System

- **Background**: `oklch(0.08 0 0)` - Deep dark
- **Primary**: `oklch(0.55 0.28 291)` - Vibrant purple
- **Secondary**: `oklch(0.4 0 0)` - Dark gray
- **Accent**: `oklch(0.65 0.25 280)` - Light purple
- **Border**: `oklch(0.2 0 0)` - Subtle dark border

## 🔧 Customization

### Theme Colors
Edit theme tokens in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.55 0.28 291);
  --accent: oklch(0.65 0.25 280);
  /* ... other tokens ... */
}
```

### Animations
Add or modify animations in `/app/globals.css`:
```css
@layer utilities {
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
}
```

### Content
Replace placeholder content in component files with your actual data.

## 📱 Responsive Breakpoints

- **Mobile**: Default (0px)
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)

## ✨ Animation Examples

### Entry Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Scroll Animations
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Interactive Element
</motion.div>
```

## 🛠️ Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
pnpm build
pnpm start
```

## 🎓 Key Features to Explore

- **Sticky Navigation**: Header stays visible while scrolling
- **Category Filtering**: Filter news by category
- **Search Functionality**: Search articles by title
- **Copy Prompt**: One-click copy button for code snippets
- **Hover Animations**: Smooth hover effects on cards
- **Mobile Responsive**: Full mobile support with hamburger menu
- **Dark Mode**: Optimized dark theme throughout

## 🚢 Deployment

Deploy to Vercel with one click:
```bash
pnpm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## 📝 Notes

- All images use Next.js Image component for optimal performance
- Theme uses OKLch color space for better perceptual color representation
- Animations use Framer Motion for smooth, performant transitions
- Component library (shadcn/ui) provides accessible, customizable components

---

Built with ❤️ using v0
