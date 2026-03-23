'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Mail, Palette } from 'lucide-react'

const workflows = [
  {
    id: 1,
    title: 'Software Engineering',
    description: 'Generate integrations, debug complex issues, and write tests interactively with specialized coding experts.',
    icon: Code2,
    color: 'text-blue-400',
  },
  {
    id: 2,
    title: 'Marketing & Copywriting',
    description: 'Create high-converting email sequences, social media posts, and SEO-optimized blog articles.',
    icon: Mail,
    color: 'text-pink-400',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Visualize your flows, generate component structures, and discover new layout inspirations.',
    icon: Palette,
    color: 'text-purple-400',
  },
]

export function TailoredWorkflow() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Tailored for your workflow</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Whether you're writing code, crafting copy, or designing interfaces, find prompts and tools tailored for your exact needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow) => {
            const Icon = workflow.icon
            return (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-primary/10 bg-card hover:border-primary/30 h-full">
                  <CardHeader>
                    <div className="mb-4">
                      <Icon className={`h-8 w-8 ${workflow.color}`} />
                    </div>
                    <CardTitle className="text-foreground">{workflow.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {workflow.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
