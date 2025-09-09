'use client';

import { motion } from 'framer-motion';

interface BackgroundDecorationsProps {
  variant?: 'default' | 'minimal' | 'dense';
}

export default function BackgroundDecorations({ variant = 'default' }: BackgroundDecorationsProps) {
  const decorations = {
    default: [
      { emoji: '✨', top: '10%', left: '15%', size: 'text-xl', opacity: 'opacity-15', duration: 4, delay: 0 },
      { emoji: '⭐', top: '25%', right: '20%', size: 'text-lg', opacity: 'opacity-12', duration: 5, delay: 1 },
      { emoji: '🌟', bottom: '30%', left: '10%', size: 'text-sm', opacity: 'opacity-10', duration: 6, delay: 2 },
      { emoji: '💫', bottom: '15%', right: '25%', size: 'text-lg', opacity: 'opacity-8', duration: 4.5, delay: 0.5 },
      { emoji: '✨', top: '60%', left: '80%', size: 'text-sm', opacity: 'opacity-12', duration: 7, delay: 3 },
    ],
    minimal: [
      { emoji: '✨', top: '20%', right: '15%', size: 'text-lg', opacity: 'opacity-10', duration: 5, delay: 0 },
      { emoji: '⭐', bottom: '25%', left: '20%', size: 'text-sm', opacity: 'opacity-8', duration: 6, delay: 2 },
      { emoji: '🌟', top: '70%', right: '30%', size: 'text-xs', opacity: 'opacity-6', duration: 8, delay: 1 },
    ],
    dense: [
      { emoji: '✨', top: '8%', left: '12%', size: 'text-2xl', opacity: 'opacity-20', duration: 3, delay: 0 },
      { emoji: '⭐', top: '15%', right: '18%', size: 'text-xl', opacity: 'opacity-15', duration: 4, delay: 1 },
      { emoji: '🌟', top: '35%', left: '8%', size: 'text-lg', opacity: 'opacity-12', duration: 5, delay: 2 },
      { emoji: '💫', top: '55%', right: '15%', size: 'text-lg', opacity: 'opacity-10', duration: 6, delay: 0.5 },
      { emoji: '✨', bottom: '25%', left: '20%', size: 'text-xl', opacity: 'opacity-18', duration: 3.5, delay: 1.5 },
      { emoji: '⭐', bottom: '15%', right: '30%', size: 'text-sm', opacity: 'opacity-8', duration: 7, delay: 3 },
      { emoji: '🎨', top: '45%', left: '70%', size: 'text-lg', opacity: 'opacity-12', duration: 4.5, delay: 2.5 },
      { emoji: '💫', bottom: '40%', right: '10%', size: 'text-sm', opacity: 'opacity-10', duration: 8, delay: 4 },
    ]
  };

  const currentDecorations = decorations[variant];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {currentDecorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute ${decoration.size} ${decoration.opacity}`}
          style={{
            top: decoration.top,
            left: decoration.left,
            right: decoration.right,
            bottom: decoration.bottom,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: decoration.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: decoration.delay
          }}
        >
          {decoration.emoji}
        </motion.div>
      ))}
    </div>
  );
}
