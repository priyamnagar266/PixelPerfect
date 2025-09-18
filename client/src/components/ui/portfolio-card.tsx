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
          <div 
            className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <h3 className="font-[Outfit] font-bold text-2xl md:text-3xl text-white mb-3 text-shadow-lg text-center w-full break-words">{title}</h3>
            <p className="text-white/90 mb-4 text-base md:text-lg leading-relaxed text-center w-full break-words">{description}</p>
            <div className="flex flex-wrap gap-3 justify-center w-full">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-white/25 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        
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
