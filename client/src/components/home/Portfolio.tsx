import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';
import PortfolioCard from '@/components/ui/portfolio-card';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Design' },
  { id: 'app', name: 'Apps' },
  { id: 'branding', name: 'Branding' },
  { id: 'marketing', name: 'Marketing' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const { data: portfolioItems = [], isLoading } = useQuery({
    queryKey: ['/api/portfolio'],
  });

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium">Our Work</span>
            <h2 className="font-[Outfit] font-bold text-3xl md:text-5xl mt-3 mb-6">
              Selected projects
            </h2>
            <p className="text-gray-700 text-lg">
              Explore our portfolio of award-winning websites, apps, and digital experiences that deliver real business results.
            </p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white hover:bg-primary hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </ScrollReveal>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-grid"
          layout
        >
          {isLoading ? (
            // Loading skeleton
            [...Array(6)].map((_, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg animate-pulse">
                <div className="bg-gray-200 h-80 w-full"></div>
              </div>
            ))
          ) : (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id || index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  tags={item.tags}
                  overlayColor={item.overlayColor}
                />
              </motion.div>
            ))
          )}
        </motion.div>
        
        <div className="text-center mt-12">
          <ScrollReveal>
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-medium text-lg transition-all duration-300"
              asChild
            >
              <a href="#">
                View all projects <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
