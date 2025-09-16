import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';

const Services = () => {
  const showcaseItems = [
    {
      id: 1,
      title: 'Web & App Development',
      client: 'Custom Digital Solutions',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Development',
      accent: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      description: 'Modern websites and mobile applications built with cutting-edge technology'
    },
    {
      id: 2,
      title: 'Video Editing',
      client: 'Professional Post-Production',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Video Production',
      accent: 'from-blue-600 to-blue-900',
      bgColor: 'bg-blue-50',
      description: 'Cinematic video editing for commercials, social media, and brand storytelling'
    },
    {
      id: 3,
      title: 'Branding & Graphic Design',
      client: 'Visual Identity Solutions',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      accent: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-50',
      description: 'Complete brand identity packages from logo design to marketing materials'
    },
    {
      id: 4,
      title: 'Instagram Management',
      client: 'Social Media Strategy',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Social Media',
      accent: 'from-yellow-500 to-yellow-700',
      bgColor: 'bg-yellow-50',
      description: 'Full Instagram account management, content creation, and growth strategies'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-blue-900/10 backdrop-blur-sm border border-yellow-400/20 rounded-full text-blue-900 font-semibold text-lg mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></span>
              We nurture your brands like we treat our people: with creativity and compassion.
            </motion.div>
            
            <h2 className="font-[Outfit] font-bold text-4xl md:text-6xl lg:text-7xl mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Our bread
              </span>
              <span className="text-gray-600"> and </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                butter
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We craft digital experiences that resonate with your audience and drive meaningful connections through innovative design and strategic thinking.
            </p>
          </ScrollReveal>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <motion.div
                className={`group relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 cursor-pointer ${item.bgColor}`}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Background Glow */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${item.accent} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                  
                  {/* Category Badge */}
                  <motion.div
                    className={`absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-xs font-semibold text-gray-800">{item.category}</span>
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5 
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="font-[Outfit] font-bold text-lg md:text-xl mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-600 transition-all duration-300 leading-tight"
                  >
                    {item.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 text-sm mb-2 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                    {item.client}
                  </p>
                  
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  
                  <motion.div 
                    className={`inline-flex items-center font-semibold text-sm bg-gradient-to-r ${item.accent} bg-clip-text text-transparent group/link`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="group-hover/link:mr-1 transition-all duration-300">Learn More</span>
                    <motion.svg
                      className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </div>
                
                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Call to Action */}
        <ScrollReveal>
          <div className="text-center mt-20">
            <motion.div
              className="inline-flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-900 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
              
              <motion.button
                className="bg-white/80 backdrop-blur-sm border-2 border-yellow-400/40 text-blue-900 hover:bg-yellow-50 hover:border-yellow-500/60 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
