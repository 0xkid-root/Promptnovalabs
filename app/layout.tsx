import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'AINovaLab - AI Tools, Prompts & Resources',
  description:
    'Discover the best AI tools, copy high-converting prompts, and stay updated with the latest AI news.',
  
  metadataBase: new URL("https://ainovalab.vercel.app/"),

  openGraph: {
    title: "AINovaLab",
    description: "Best AI tools & prompts platform",
    url: "https://ainovalab.vercel.app/",
    siteName: "AINovaLab",
    images: [
      {
        url: "/og-image.png", // add this in public folder
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AINovaLab",
    description: "Explore AI tools and prompts",
    images: ["/og-image.png"],
  },

  verification: {
    google: 'xL9ERgARNeG8bJ7OvR0D4eYPoLtOkCQcwNrn8YDI2Lk',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
  colorScheme: 'dark',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JXJ7GEHMXL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JXJ7GEHMXL');
          `}
        </Script>

        {/* Optional: suppress warning */}
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

      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}