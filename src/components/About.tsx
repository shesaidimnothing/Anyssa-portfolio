'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-8 right-8 text-xl opacity-15"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎨
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-8 text-lg opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-sm opacity-8"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          💫
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left Column - Description */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-800">
              Hi, I&apos;m Anyssa! I&apos;m a creative designer passionate about bringing ideas to life 
              through stunning visuals and engaging content. From brand identities to social media 
              campaigns, I create designs that capture attention and tell your story authentically.
            </p>
          </div>
        </AnimatedSection>

        {/* Right Column - Scroll Indicator */}
        <AnimatedSection delay={0.3}>
          <div className="flex justify-end">
            <div className="text-sm text-gray-400">
              (Scroll ↓)
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Services Introduction */}
      <div className="mt-24 space-y-8">
        <AnimatedSection delay={0.2}>
          <div className="text-sm text-gray-400 uppercase tracking-wider">
            • Creative tools: CapCut • Canva • Illustrator • iMovie • Notion
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <AnimatedSection delay={0.3}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-light leading-tight text-black">
                From concept to creation, my 
                designs are crafted to make you stand out.
              </h2>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <div className="flex justify-end">
              <Link 
                href="/inquiries"
                className="text-sm text-black hover:text-gray-600 transition-colors underline underline-offset-4"
              >
                Let&apos;s work together →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
