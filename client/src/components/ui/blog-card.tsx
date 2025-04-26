import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './scroll-reveal';

export interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  category: string;
  categoryBg: string;
  categoryColor: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  excerpt,
  category,
  categoryBg,
  categoryColor,
  date,
  link
}) => {
  return (
    <ScrollReveal>
      <motion.div 
        className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out"
        whileHover={{ 
          y: -5, 
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="overflow-hidden">
          <motion.img 
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            loading="lazy"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <span 
              className="text-xs px-3 py-1 rounded-full"
              style={{ 
                backgroundColor: categoryBg,
                color: categoryColor
              }}
            >
              {category}
            </span>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          
          <h3 className="font-[Outfit] font-bold text-xl mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          
          <motion.a 
            href={link}
            className="inline-flex items-center text-primary font-medium hover:underline"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Read more <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default BlogCard;
