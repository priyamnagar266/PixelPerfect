import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './scroll-reveal';
import { Button } from './button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span key={index} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <Button 
              className="bg-white text-gray-800 hover:bg-white/90 w-full md:w-auto rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              View Case Study <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </motion.div>
        </motion.div>
      </ScrollReveal>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription>Case Study</DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            <div>
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Project Overview</h3>
              <p className="text-gray-700 mb-6">{description}</p>
              
              <h3 className="font-bold text-xl mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-6">
                The client needed a {tags.join(', ').toLowerCase()} solution that would help them 
                streamline their business processes and improve customer engagement. They faced 
                challenges with outdated systems, inefficient workflows, and a lack of modern 
                user experience.
              </p>
              
              <h3 className="font-bold text-xl mb-4">Our Approach</h3>
              <p className="text-gray-700 mb-6">
                We began with a comprehensive discovery phase, conducting user research and 
                competitive analysis. Our team then crafted a solution that addressed the 
                client's specific needs, employing the latest technologies and design principles 
                to create a seamless, intuitive experience.
              </p>
              
              <h3 className="font-bold text-xl mb-4">Results</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                <li>50% increase in user engagement within the first month</li>
                <li>35% reduction in customer service inquiries</li>
                <li>20% improvement in conversion rates</li>
                <li>Significant positive feedback from users and stakeholders</li>
              </ul>
              
              <Button className="rounded-full">
                Visit Live Project <i className="fas fa-external-link-alt ml-2"></i>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioCard;
