'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: 'AINovaLab',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '#' },
        { label: 'Technology', href: '#' },
        { label: 'Blog', href: '/news' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { label: 'AI Tools Directory', href: '/tools' },
        { label: 'Advertise with us', href: '#' },
        { label: 'Prompt Library', href: '/prompts' },
        { label: 'Community', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Tag', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Amazing Newsletters', href: '#' },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text text-lg font-bold mb-4">
              AINovaLab
            </h3>
            <p className="text-sm text-foreground/60">
              The premier destination for AI tools, prompts, and resources. 
              Elevate your productivity with next-generation artificial intelligence.
            </p>
          </motion.div>

          {/* Dynamic Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} AINovaLab Inc. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}