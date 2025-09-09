'use client';

import PageLayout from '@/components/PageLayout';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer, { staggerItemVariants } from '@/components/StaggerContainer';
import { motion } from 'framer-motion';

export default function Services() {
  const serviceCategories = [
    {
      title: 'Brand Identity',
      services: [
        'Logo Design',
        'Brand Guidelines',
        'Visual Identity',
        'Color Palettes',
        'Typography Systems'
      ]
    },
    {
      title: 'Digital Content',
      services: [
        'Social Media Graphics',
        'Instagram Stories',
        'TikTok Content',
        'YouTube Thumbnails',
        'Facebook Posts'
      ]
    },
    {
      title: 'Video & Motion',
      services: [
        'Video Editing (CapCut)',
        'Motion Graphics',
        'Social Media Videos',
        'Product Demos',
        'Content Creation'
      ]
    }
  ];

  return (
    <PageLayout>
      <main className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Page Title */}
          <AnimatedSection>
            <div>
              <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black mb-8">
                Services ⭐
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Creative design services that bring your brand to life across all digital platforms.
              </p>
            </div>
          </AnimatedSection>

          {/* Services Overview */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-black">What I Do</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    My services go beyond traditional design. I create comprehensive 
                    visual experiences that resonate with your audience and drive real 
                    engagement across all digital platforms.
                  </p>
                  <p>
                    From initial concept to final execution, I&apos;m your creative partner in 
                    building something extraordinary that truly represents your brand.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-black">My Approach</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Every project begins with understanding your unique story and goals. 
                    I then craft visual solutions that not only solve problems but 
                    elevate your entire brand presence.
                  </p>
                  <p>
                    Quality, creativity, and attention to detail are at the heart of 
                    everything I deliver for my clients.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Service Categories */}
          <AnimatedSection>
            <section>
              <h2 className="text-3xl font-light mb-12 text-black">Service Categories</h2>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {serviceCategories.map((category, index) => (
                  <motion.div key={index} className="space-y-6" variants={staggerItemVariants}>
                    <h3 className="text-xl font-medium text-black">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <motion.li 
                          key={serviceIndex}
                          className="text-gray-600 hover:text-black transition-colors cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          {service}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </StaggerContainer>
            </section>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection>
            <section className="text-center py-16">
              <motion.h2 
                className="text-3xl font-light mb-6 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to start your project?
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let&apos;s discuss how I can help you create something extraordinary.
              </motion.p>
              <motion.a 
                href="/inquiries"
                className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </section>
          </AnimatedSection>
        </div>
      </main>
    </PageLayout>
  );
}
