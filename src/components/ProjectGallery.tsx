import Image from 'next/image';
import StaggerContainer, { staggerItemVariants } from './StaggerContainer';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  tools: string[];
}

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div 
          key={project.id} 
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
          variants={staggerItemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Project Image */}
          <div className="aspect-video relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
          
          {/* Project Info */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {project.category}
              </span>
              <div className="flex gap-1">
                {project.tools.map((tool, index) => (
                  <motion.span 
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <motion.h3 
              className="text-lg font-medium text-black mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </StaggerContainer>
  );
}

// Anyssa's actual projects - based on her portfolio work
export const anyssaProjects: Project[] = [
  {
    id: 'absology-supplements-campaign',
    title: 'ABSOLOGY Supplements Campaign',
    category: 'Product Design',
    description: 'Comprehensive marketing campaign for ABSOLOGY supplements featuring product photography, infographics, and benefits highlighting.',
    imagePath: '/images/projects/branding/absology-campaign-1.jpg',
    tools: ['Canva', 'Illustrator']
  },
  {
    id: 'absology-product-showcase',
    title: 'Product Benefits Infographic',
    category: 'Infographic Design',
    description: 'Clean, informative design showcasing supplement benefits with statistical data and professional layout.',
    imagePath: '/images/projects/branding/absology-infographic.jpg',
    tools: ['Canva', 'Illustrator']
  },
  {
    id: 'absology-ingredient-breakdown',
    title: 'Ingredient Information Cards',
    category: 'Product Design',
    description: 'Educational content design breaking down product ingredients and their benefits in an accessible format.',
    imagePath: '/images/projects/social-media/absology-ingredients.jpg',
    tools: ['Canva']
  },
  {
    id: 'absology-lifestyle-content',
    title: 'By Sohna',
    category: 'Content Creation',
    description: 'Health diet and nutrition content for social media and marketing materials.',
    imagePath: '/images/projects/branding/by-sohna.jpg',
    tools: ['Canva', 'CapCut']
  },
  {
    id: 'atelier-du-diamant-emerald',
    title: 'Atelier du diamant ',
    category: 'Luxury Branding',
    description: 'Elegant jewelry marketing design featuring emerald gemstones with sophisticated French typography and layout.',
    imagePath: '/images/projects/branding/atelier-diamant-emerald.jpg',
    tools: ['Illustrator', 'Canva']
  },
  {
    id: 'atelier-du-diamant-collection',
    title: 'Padel et Foot',
    category: 'Luxury Branding',
    description: 'Sport collective and association located in Strasbourg, France.',
    imagePath: '/images/projects/branding/padel-et-foot.jpg',
    tools: ['Illustrator', 'Canva']
  }
];
