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
        className="team-card group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-all duration-500 ease-in-out cursor-pointer"
        whileHover={{ 
          y: -12,
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)'
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background Glow */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"
          initial={false}
        />
        
        <div className="relative overflow-hidden rounded-t-3xl">
          <motion.img 
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
