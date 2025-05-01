import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './scroll-reveal';

export interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  position,
  socialLinks
}) => {
  return (
    <ScrollReveal>
      <motion.div 
        className="team-card bg-light rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden">
          <img 
            src={image}
            alt={`${name}, ${position}`}
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <motion.div 
            className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
        </div>
        
        <div className="p-6">
          <h3 className="font-[Outfit] font-bold text-xl mb-1">{name}</h3>
          <p className="text-gray-600 mb-4">{position}</p>
          
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label={`${name}'s ${link.platform} profile`}
              >
                <i className={`fab fa-${link.platform}`}></i>
              </a>
            ))}
            <a 
              href={`mailto:contact@PixelHeights.agency?subject=Contact ${name}`}
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label={`Email ${name}`}
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default TeamCard;
