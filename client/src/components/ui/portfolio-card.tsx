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
        className="portfolio-item group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500"
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div className="overflow-hidden">
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-80 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            loading="lazy"
          />
        </div>
        
        <motion.div 
          className="portfolio-overlay absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500"
          style={{ backgroundColor: overlayColor }}
          whileHover={{ opacity: 1 }}
        >
          <h3 className="font-[Outfit] font-bold text-2xl text-white mb-2">{title}</h3>
          <p className="text-white/80 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
};

export default PortfolioCard;
