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
        className="service-card relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        transition={{ duration: 0.3 }}
        onClick={handleClick}
      >
       
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: iconBg }}
        >
          <FontAwesomeIcon icon={['fas', icon as IconName]} size="lg" style={{ color: iconColor }} />
        </div>
        
        <h3 className="font-[Outfit] font-bold text-2xl mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <motion.div 
          className="inline-flex items-center font-medium hover:underline"
          style={{ color: linkColor }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn more <FontAwesomeIcon icon={['fas', 'arrow-right']} className="ml-2" />
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
};

export default ServiceCard;
