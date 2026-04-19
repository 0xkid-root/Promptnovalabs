'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toolFaqs } from '../data/faqs'




export function TOOLFAQ() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => setOpenId(openId === id ? null : id)

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-primary/60 font-medium mb-3">
            Got questions?
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/50 text-sm max-w-md mx-auto leading-relaxed">
            Everything you need to know about AINovaLab. Can&apos;t find an answer?{' '}
            <a href="/contact" className="text-primary hover:underline underline-offset-2">
              Reach out to us.
            </a>
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="space-y-3"
        >
          {toolFaqs.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <div
                  onClick={() => toggle(faq.id)}
                  className={`
                    group rounded-xl border cursor-pointer transition-all duration-300
                    ${isOpen
                      ? 'border-primary/30 bg-card shadow-[0_2px_20px_-4px_hsl(var(--primary)/0.10)]'
                      : 'border-primary/10 bg-card hover:border-primary/25'
                    }
                  `}
                >
                  {/* Question Row */}
                  <div className="flex items-center gap-4 px-6 py-4">
                    {/* Number badge */}
                    <span
                      className={`
                        shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold transition-colors duration-300
                        ${isOpen
                          ? 'bg-primary text-background'
                          : 'bg-primary/10 text-primary/70 group-hover:bg-primary/20'
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Question text */}
                    <span
                      className={`flex-1 text-sm font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-foreground' : 'text-foreground/80'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Tag — hidden on small screens */}
                    <span className="hidden md:inline-flex shrink-0 text-[10px] font-medium uppercase tracking-widest text-primary/50 bg-primary/8 px-2.5 py-1 rounded-full border border-primary/10">
                      {faq.tag}
                    </span>

                    {/* Chevron */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-base leading-none transition-colors duration-200 ${
                        isOpen
                          ? 'border-primary/40 text-primary'
                          : 'border-primary/15 text-foreground/40 group-hover:border-primary/30'
                      }`}
                    >
                      +
                    </motion.span>
                  </div>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 flex gap-4">
                          {/* Indent line */}
                          <div className="shrink-0 w-7 flex justify-center">
                            <div className="w-px bg-primary/20 rounded-full" />
                          </div>
                          <p className="text-sm text-foreground/60 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}