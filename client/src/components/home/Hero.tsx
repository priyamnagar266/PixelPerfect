
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimateElement from '@/lib/AnimateElement';
import Hyperspeed from '@/components/Hyperspeed';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden relative">
      {/* Hyperspeed Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Hyperspeed />
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 left-10 w-8 h-8 bg-primary/20 rounded-full blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-6 h-6 bg-[#FFD166]/30 rounded-full blur-sm"
        animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-4 h-4 bg-primary/30 rounded-full blur-sm"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
  <div className="container mx-auto px-4 sm:px-6">
  <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-medium text-sm mb-8">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              New: AI-Powered Web Solutions Available
            </div>
          </motion.div>
          
          <motion.h1 
            className="font-[Outfit] font-bold text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We <span className="bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent drop-shadow-md">build</span> digital <span className="bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent drop-shadow-md">experiences</span> that <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">people love</span>
          </motion.h1>
          
          {/* Removed hero description paragraph as requested */}
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white rounded-2xl font-semibold text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
            >
              <a href="#work" className="inline-flex items-center">
                <span>See our work</span>
                <motion.svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 rounded-2xl font-semibold text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <a href="#contact" className="inline-flex items-center">
                <span>Get in touch</span>
                <motion.div
                  className="ml-2 w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
