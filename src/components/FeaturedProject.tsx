import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import StaggerContainer, { staggerItemVariants } from './StaggerContainer';
import { motion } from 'framer-motion';

interface FeaturedProjectProps {
  title: string;
  category: string;
  description: string;
  tools: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

export default function FeaturedProject({ title, category, description, tools, images }: FeaturedProjectProps) {
  return (
    <div className="space-y-8">
      {/* Project Info Above */}
      <AnimatedSection delay={0.1}>
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.div 
            className="flex justify-center items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {category}
            </span>
            <div className="flex gap-2">
              {tools.map((tool, index) => (
                <motion.span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.h3 
            className="text-3xl lg:text-4xl font-light text-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {description}
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Images in Single Row */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            variants={staggerItemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
}
