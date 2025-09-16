import React from 'react';
import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  variant = 'primary', 
  children, 
  className = '' 
}) => {
  const gradientVariants = {
    primary: 'bg-gradient-to-br from-primary/10 via-blue-500/5 to-purple-500/10',
    secondary: 'bg-gradient-to-br from-gray-50 via-white to-blue-50/50',
    accent: 'bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-orange-100/50'
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base Gradient */}
      <div className={`absolute inset-0 ${gradientVariants[variant]}`} />
      
      {/* Animated Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-white/40" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;