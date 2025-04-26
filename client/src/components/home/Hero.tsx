import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimateElement from '@/lib/AnimateElement';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#FFD166]/10 to-[#4A7BF7]/10 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="font-[Outfit] font-bold text-4xl md:text-6xl leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build digital experiences that <span className="text-primary">people love</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Award-winning web development agency creating stunning websites, apps, and digital marketing solutions that drive growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#work">See our work</a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-medium text-lg transition-all duration-300"
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </motion.div>
        </div>
        
        <AnimateElement delay={0.8}>
          <div className="mt-20 relative">
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Web development team working on a project" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 rounded-full shadow-lg flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="w-3 h-3 bg-[#4CAF50] rounded-full mr-2"></span>
              <span className="font-medium">Currently available for new projects</span>
            </motion.div>
          </div>
        </AnimateElement>
      </div>
    </section>
  );
};

export default Hero;
