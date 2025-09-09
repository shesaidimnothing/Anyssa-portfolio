'use client';

import PageLayout from '@/components/PageLayout';
import ProjectGallery, { anyssaProjects } from '@/components/ProjectGallery';
import FeaturedProject from '@/components/FeaturedProject';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer, { staggerItemVariants } from '@/components/StaggerContainer';
import { motion } from 'framer-motion';

export default function Portfolio() {

  return (
    <PageLayout>
      <main className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Page Title */}
          <AnimatedSection>
            <div>
              <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black mb-8">
                Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                A showcase of my creative work across branding, digital content, and video production. 
                Each project tells a unique story through thoughtful design and strategic creativity.
              </p>
            </div>
          </AnimatedSection>

          {/* Portfolio Philosophy */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-black">My Creative Process</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Every project begins with understanding the story you want to tell. 
                    I dive deep into your brand&apos;s essence, audience, and goals to create 
                    designs that not only look beautiful but also drive meaningful connections.
                  </p>
                  <p>
                    From initial concept sketches to final deliverables, I ensure every 
                    element serves a purpose and contributes to your overall brand narrative.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div>
                <h2 className="text-3xl font-light mb-6 text-black">Tools & Techniques</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I leverage the power of industry-leading tools like Adobe Illustrator 
                    for precise vector work, CapCut for dynamic video content, and Canva 
                    for rapid prototyping and social media assets.
                  </p>
                  <p>
                    My approach combines traditional design principles with modern digital 
                    techniques, ensuring your brand stands out in today&apos;s competitive landscape.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Featured Project */}
          <AnimatedSection>
            <section>
              <h2 className="text-3xl font-light mb-12 text-black text-center">Featured Work</h2>
            <FeaturedProject
              title="ABSOLOGY Supplements Campaign"
              category="Product Marketing & Brand Design"
              description="A comprehensive marketing campaign for ABSOLOGY supplements featuring cohesive brand design, product photography integration, infographic design, and educational content. This project showcases the complete brand experience from product presentation to customer education, demonstrating expertise in health and wellness marketing."
              tools={['Canva', 'Illustrator', 'CapCut']}
              images={[
                {
                  src: '/images/projects/branding/absology-campaign-1.jpg',
                  alt: 'ABSOLOGY supplements product photography with torn paper design effect'
                },
                {
                  src: '/images/projects/branding/absology-infographic.jpg',
                  alt: 'ABSOLOGY product benefits infographic with statistics and data visualization'
                },
                {
                    src: '/images/projects/branding/absology-ingredients.jpg',
                    alt: 'ABSOLOGY supplements product photography with torn paper design effect'
                  },
              ]}
            />
            </section>
          </AnimatedSection>

          {/* Other Projects */}
          <AnimatedSection>
            <section>
              <h2 className="text-3xl font-light mb-12 text-black">Other Projects</h2>
              <ProjectGallery projects={anyssaProjects.slice(3)} />
            </section>
          </AnimatedSection>

          {/* Project Categories */}
          <AnimatedSection>
            <section>
              <h2 className="text-3xl font-light mb-12 text-black">What I Create</h2>
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Product Marketing', 'Luxury Branding', 'Infographic Design', 'Content Creation', 
                  'Social Media Graphics', 'Educational Content', 'Brand Campaigns', 'Visual Identity'].map((category, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300"
                    variants={staggerItemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm text-gray-700">{category}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </section>
          </AnimatedSection>
        </div>
      </main>
    </PageLayout>
  );
}
