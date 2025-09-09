'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8 sm:py-16">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Project Image */}
        <motion.div 
          className="flex-shrink-0 w-full sm:w-auto flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-100 rounded-lg overflow-hidden w-48 h-60 sm:w-64 sm:h-80 relative">
            {/* Background Project Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/projects/branding/by-sohna.jpg"
                alt="Latest Project - By Sohna"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 192px, 256px"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="text-white text-center p-6 sm:p-8">
                <div className="text-xs sm:text-sm mb-3 sm:mb-4 font-medium">Latest Project</div>
                <div className="w-full h-24 sm:h-32 bg-white/10 backdrop-blur-sm rounded mb-3 sm:mb-4 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/images/projects/social-media/Anyssa.jpg"
                    alt="Anyssa Portfolio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, 128px"
                  />
                </div>
                <div className="text-xs opacity-90 font-medium">Creative Design</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              creating stunning
            </motion.span>
            <br />
            <motion.span 
              className="text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              visuals and content that
            </motion.span>
            <br />
            <motion.span 
              className="text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              tell your story beautifully.
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
