import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './scroll-reveal';

export interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  overlayColor: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  description,
  tags,
  overlayColor
}) => {
  return (
    <ScrollReveal>
      <motion.div 
        className="portfolio-item group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer border border-white/10"
        whileHover={{ 
          y: -12, 
          scale: 1.03,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(59, 130, 246, 0.15)',
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        {/* Background Glow */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-700"
          initial={false}
        />
        
        <div className="relative overflow-hidden rounded-3xl">
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-80 object-cover transition-all duration-700"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            loading="lazy"
          />
          
          {/* Gradient Overlay Always Visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </div>
        
        {/* Enhanced Overlay */}
        <motion.div 
          className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ 
            background: `linear-gradient(45deg, ${overlayColor}E6, ${overlayColor}CC)`
          }}
          whileHover={{ 
            background: `linear-gradient(45deg, ${overlayColor}F2, ${overlayColor}E6)`
          }}
        >
          {/* Floating Elements */}
          <motion.div
            className="absolute top-6 right-6 w-3 h-3 bg-white/40 rounded-full blur-sm"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <motion.h3 
            className="font-[Outfit] font-bold text-3xl text-white mb-3 text-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/90 mb-6 text-lg leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {tags.map((tag, index) => (
              <motion.span 
                key={index} 
                className="bg-white/25 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20 font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.35)' }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          {/* View Project Button */}
          <motion.div 
            className="mt-6 inline-flex items-center text-white font-semibold text-lg group/button"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <span className="group-hover/button:mr-2 transition-all duration-300">View Project</span>
            <motion.svg 
              className="ml-2 w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </motion.div>
        
        {/* Quick Info Badge */}
        <motion.div
          className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gray-800 font-semibold text-sm">Featured Work</span>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
};

export default PortfolioCard;
