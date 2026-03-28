'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: 'AINovaLab',
      links: [
        'Home',
        'About Us',
        'Technology',
        'Blog',
        'Contact',
      ],
    },
    {
      title: 'Platform',
      links: [
        'AI Tools Directory',
        'Advertise with us',
        'Prompt Library',
        'Community',
        
      ],
    },
    {
      title: 'Resources',
      links: [
        'Blog',
        'Tag',
        'Guides',
        'Amazing Newsletters',
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text text-lg font-bold mb-4">AINovaLab</h3>
            <p className="text-sm text-foreground/60">
              The premier destination for AI tools, prompts, and resources. Elevate your productivity with next-generation artificial intelligence.
            </p>
          </motion.div>

          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © 2024 AINovaLab Inc. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
