'use client'

import { motion } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold"
        >
          <span className="gradient-text text-2xl font-bold">AINovaLab</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden gap-8 md:flex">
          {[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Prompts', href: '/prompts' },
            { label: 'News', href: '/news' },
          ].map((item) => (
            <Link key={item.label} href={item.href}>
              <span className="text-sm text-foreground/70 transition-colors hover:text-primary cursor-pointer">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Search and Sign In */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
            <input
              type="text"
              placeholder="Search tools, prompts..."
              className="rounded-full bg-secondary px-10 py-2 text-sm text-foreground placeholder:text-foreground/50"
            />
          </div>
          {/* <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90">
            Sign In
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-secondary md:hidden"
        >
          <div className="flex flex-col gap-4 px-4 py-4">
            {[
              { label: 'Home', href: '/' },
              { label: 'Tools', href: '/tools' },
              { label: 'Prompts', href: '/#prompts' },
              { label: 'News', href: '/news' },
            ].map((item) => (
              <Link key={item.label} href={item.href}>
                <span className="text-sm text-foreground/70 cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
            <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 w-full">
              Sign In
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
