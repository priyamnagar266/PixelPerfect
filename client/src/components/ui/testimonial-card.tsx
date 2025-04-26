import React from 'react';
import { motion } from 'framer-motion';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company,
  image,
  rating,
  isActive
}) => {
  return (
    <motion.div 
      className={`testimonial-slide bg-white p-8 md:p-12 rounded-2xl shadow-lg ${isActive ? '' : 'hidden'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/3">
          <img 
            src={image}
            alt={`${name}, ${position} at ${company}`}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto md:mx-0"
            loading="lazy"
          />
        </div>
        <div className="md:w-2/3">
          <div className="flex text-accent mb-4">
            {[...Array(rating)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
          <blockquote className="text-lg md:text-xl text-gray-700 mb-6">"{quote}"</blockquote>
          <div>
            <p className="font-[Outfit] font-bold text-xl">{name}</p>
            <p className="text-gray-600">{position}, {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
