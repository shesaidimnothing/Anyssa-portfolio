'use client';

import AnimatedSection from './AnimatedSection';
import StaggerContainer, { staggerItemVariants } from './StaggerContainer';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    'Product Marketing Design',
    'Luxury Brand Identity',
    'Infographic Design',
    'Social Media Graphics',
    'Educational Content',
    'Campaign Development',
    'Brand Guidelines',
    'Marketing Materials',
    'Content Creation',
    'Visual Storytelling'
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 right-12 text-lg opacity-12"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-20 text-xl opacity-15"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 text-sm opacity-8"
          animate={{
            y: [0, -6, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🌟
        </motion.div>
      </div>

      {/* Section Number */}
      <AnimatedSection delay={0.1}>
        <div className="text-sm text-gray-400 mb-8">(01)</div>
      </AnimatedSection>
      
      {/* Section Title */}
      <AnimatedSection delay={0.2}>
        <h2 className="text-3xl lg:text-4xl font-light mb-12 text-black">
          ✨ Creative Services ✨
        </h2>
      </AnimatedSection>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Description */}
        <AnimatedSection delay={0.3}>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-700">
              I specialize in creating visually compelling designs that connect with your audience. 
              Whether you need a complete brand identity, engaging social media content, or dynamic 
              video productions, I bring creativity and strategic thinking to every project. Using 
              industry-leading tools like Illustrator, CapCut, and Canva, I transform ideas into 
              impactful visual stories that drive results.
            </p>
          </div>
        </AnimatedSection>

        {/* Right Column - Services List */}
        <AnimatedSection delay={0.5}>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-400">(Creative & Strategic)</div>
            </div>
            
            <StaggerContainer className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="text-sm text-gray-700 hover:text-black transition-colors cursor-pointer py-1"
                  variants={staggerItemVariants}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {service}
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
