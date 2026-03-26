import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PromptNovaLabs - AI Tools, Prompts & Resources',
  description: 'Discover the best AI tools, copy high-converting prompts, and stay updated with the latest AI news. Built for developers and creators.',
  keywords: ['AI', 'prompts', 'tools', 'GPT-4', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'PromptNovaLabs' }],
  
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
  colorScheme: 'dark',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script suppressHydrationWarning>
          {`
            if (typeof window !== 'undefined') {
              const originalWarn = console.warn;
              console.warn = function(...args) {
                if (args[0] && typeof args[0] === 'string' && args[0].includes('oklab')) {
                  return;
                }
                originalWarn.apply(console, args);
              };
            }
          `}
        </script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
