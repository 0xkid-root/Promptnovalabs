'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Copy, Eye, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export function PromptOfTheDay() {
  const [copied, setCopied] = useState(false)

  const promptCode = `import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(promptCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Prompt of the Day</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-card p-8 glow-effect-sm"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1 text-sm text-primary mb-4">
              Frontend Development
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-2">React Component Generator</h3>
            <p className="text-foreground/70 text-sm">
              Generate a React component that creates accessible forms with error handling and loading states.
            </p>
          </div>

          <div className="rounded-lg bg-secondary p-4 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-primary/80">
              <code>{promptCode}</code>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4 text-sm text-foreground/60">
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" /> 1,234 Uses
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" /> 456 Comments
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-full bg-primary text-foreground px-6 py-2 hover:bg-primary/90 transition-colors"
            >
              <Copy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy Prompt'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
