'use client';

import PageLayout from '@/components/PageLayout';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer, { staggerItemVariants } from '@/components/StaggerContainer';
import { motion } from 'framer-motion';

export default function Blog() {
  // const insights = [
  // ];

  const topics = [
    'Canva Tutorials',
    'CapCut Tips',
    'Brand Design',
    'Social Media Strategy',
    'Creative Process',
    'Tool Comparisons',
    'Client Work',
    'Design Inspiration'
  ];

  return (
    <PageLayout>
      <main className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Page Title */}
          <AnimatedSection>
            <div>
              <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black mb-8">
                Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Behind-the-scenes insights into my creative process, tool tutorials, and practical tips 
                for creating stunning designs with Canva, CapCut, and Illustrator.
              </p>
            </div>
          </AnimatedSection>

          {/* About the Blog */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-black">Why I Share</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I believe in sharing knowledge and helping other creatives grow. Through my blog, 
                    I break down complex design processes, share honest tool reviews, and give you 
                    a behind-the-scenes look at how I create campaigns like the ABSOLOGY project.
                  </p>
                  <p>
                    From Canva tricks to CapCut workflows, I share the practical insights that 
                    have helped me create successful campaigns for clients across different industries.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-black">My Approach</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I focus on practical, actionable content that you can implement immediately. 
                    No fluff, just real techniques and honest insights about what works (and what doesn&apos;t) 
                    in the world of modern design.
                  </p>
                  <p>
                    Whether I&apos;m walking through a complete campaign creation or comparing design tools, 
                    my goal is to help you create better work more efficiently.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Topics */}
          <AnimatedSection>
            <section>
              <h2 className="text-3xl font-light mb-12 text-black">What I Cover</h2>
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {topics.map((topic, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all duration-300"
                    variants={staggerItemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <span className="text-sm text-gray-700">{topic}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </section>
          </AnimatedSection>

          {/* Subscribe CTA */}
          <AnimatedSection>
            <section className="text-center py-16 bg-white rounded-lg">
              <motion.h2 
                className="text-3xl font-light mb-6 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Join the Creative Community
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Get my latest tutorials, tool reviews, and behind-the-scenes insights delivered to your inbox. 
                Join other creatives who are elevating their design game!
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
                <motion.button 
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </section>
          </AnimatedSection>
        </div>
      </main>
    </PageLayout>
  );
}
