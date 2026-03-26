'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

const FLOATING_ORBS = [
  { size: 480, top: '-10%', left: '-8%', delay: 0, duration: 12 },
  { size: 360, top: '30%', right: '-5%', delay: 1.5, duration: 15 },
  { size: 260, bottom: '5%', left: '30%', delay: 0.8, duration: 10 },
]

const BADGE_VARIANTS = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const STAGGER_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sectionRef = useRef<HTMLElement>(null)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), { stiffness: 80, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), { stiffness: 80, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      mouseX.set(e.clientX - cx)
      mouseY.set(e.clientY - cy)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 px-4 sm:py-36 min-h-[90vh] flex items-center"
    >
      {/* Animated orbs */}
      {FLOATING_ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 blur-3xl pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: (orb as any).left,
            right: (orb as any).right,
            bottom: (orb as any).bottom,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={BADGE_VARIANTS} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              v0.2 is now live
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            className="text-balance text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl mb-6 leading-[1.08]"
          >
            Supercharge your{' '}
            <br className="hidden sm:block" />
            workflow with{' '}
            <span className="relative inline-block">
              <span className="gradient-text">AI Models</span>
              {/* Underline accent */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={FADE_UP}
            className="text-balance text-lg text-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Discover the best AI tools, copy high-converting prompts, and stay updated with the latest AI news.{' '}
            <span className="text-foreground/80 font-medium">Built for developers and creators.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={FADE_UP}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                className="group relative rounded-full bg-primary hover:bg-primary/90 text-foreground px-8 h-12 shadow-lg shadow-primary/20 overflow-hidden"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                Explore Tools
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 text-foreground/80 hover:text-foreground hover:bg-primary/10 hover:border-primary/50 h-12 px-8 backdrop-blur-sm transition-all duration-200"
              >
                View Prompt Library
              </Button>
            </motion.div>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  )
}