import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import ScrollReveal from './scroll-reveal';
import { Service } from '@shared/schema';

export interface ServiceCardProps {
  service: Service;
  onClick?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onClick
}) => {
  const { 
    icon, 
    iconBg, 
    iconColor, 
    title, 
    description, 
    linkColor 
  } = service;

  const handleClick = () => {
    if (onClick) {
      onClick(service);
    }
  };

  return (
    <ScrollReveal>
      <motion.div 
        className="service-card relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden group"
        whileHover={{ 
          y: -12, 
          scale: 1.03,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(59, 130, 246, 0.1)'
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={handleClick}
      >
        {/* Background Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        
        {/* Floating Particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400/20 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
        />
       
        <motion.div 
          className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
          style={{ backgroundColor: iconBg }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"
            animate={{ 
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <FontAwesomeIcon 
            icon={['fas', icon as IconName]} 
            size="xl" 
            style={{ color: iconColor }} 
            className="relative z-10"
          />
        </motion.div>
        
        <h3 className="relative font-[Outfit] font-bold text-2xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-600 transition-all duration-300">
          {title}
        </h3>
        <p className="relative text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        <motion.div 
          className="relative inline-flex items-center font-semibold text-lg group/link"
          style={{ color: linkColor }}
          whileHover={{ x: 8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="group-hover/link:mr-2 transition-all duration-300">Learn more</span>
          <motion.div
            className="ml-2 group-hover/link:ml-3 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon 
              icon={['fas', 'arrow-right']} 
              className="group-hover/link:translate-x-1 transition-transform duration-300" 
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
};

export default ServiceCard;
