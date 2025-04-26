import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <ScrollReveal>
            <h2 className="font-[Outfit] font-bold text-3xl md:text-5xl mb-6">
              Ready to transform your digital presence?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's create something amazing together. Our team of experts is ready to help you achieve your business goals with cutting-edge digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 rounded-full font-medium text-lg shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <a href="#contact">Start a project</a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-medium text-lg w-full sm:w-auto"
                >
                  <a href="#">Schedule a call</a>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
