import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';

const FeaturedProject = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="text-primary font-medium">Featured Project</span>
              <h2 className="font-[Outfit] font-bold text-3xl md:text-4xl mt-3 mb-6">
                Reimagining online commerce for StyleHouse
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We developed a custom e-commerce platform that increased conversions by 34% and provided a seamless shopping experience across all devices.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Custom product filtering and recommendation engine',
                  'Streamlined checkout process reducing abandonment by 28%',
                  'Integrated inventory management and analytics dashboard'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-check-circle text-[#4CAF50] mt-1 mr-3"></i>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.a 
                href="#" 
                className="inline-flex items-center text-primary font-medium hover:underline text-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View case study <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce website design for StyleHouse" 
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">StyleHouse E-Commerce</span>
                    <div className="flex space-x-2">
                      <span className="bg-white text-dark text-xs px-3 py-1 rounded-full">E-Commerce</span>
                      <span className="bg-white text-dark text-xs px-3 py-1 rounded-full">UX Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
