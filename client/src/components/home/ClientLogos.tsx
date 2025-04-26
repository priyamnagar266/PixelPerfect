import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';

// First row of clients
const clientsRow1 = [
  { icon: 'fab fa-spotify', name: 'Spotify' },
  { icon: 'fab fa-airbnb', name: 'Airbnb' },
  { icon: 'fab fa-slack', name: 'Slack' },
  { icon: 'fab fa-amazon', name: 'Amazon' },
  { icon: 'fab fa-dropbox', name: 'Dropbox' },
  { icon: 'fab fa-microsoft', name: 'Microsoft' },
  { icon: 'fab fa-google', name: 'Google' },
  { icon: 'fab fa-apple', name: 'Apple' },
];

// Second row of clients (in reverse direction)
const clientsRow2 = [
  { icon: 'fab fa-figma', name: 'Figma' },
  { icon: 'fab fa-shopify', name: 'Shopify' },
  { icon: 'fab fa-stripe', name: 'Stripe' },
  { icon: 'fab fa-wordpress', name: 'WordPress' },
  { icon: 'fab fa-pinterest', name: 'Pinterest' },
  { icon: 'fab fa-twitter', name: 'Twitter' },
  { icon: 'fab fa-facebook', name: 'Facebook' },
  { icon: 'fab fa-linkedin', name: 'LinkedIn' },
];

const ClientLogos = () => {
  const row1Controls = useAnimationControls();
  const row2Controls = useAnimationControls();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startMarqueeAnimation = () => {
      // First row animation - left to right
      row1Controls.start({
        x: ['-100%', '0%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        },
      });

      // Second row animation - right to left (opposite direction)
      row2Controls.start({
        x: ['0%', '-100%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20, // Slightly faster for visual interest
            ease: 'linear',
          },
        },
      });
    };

    startMarqueeAnimation();

    // Handle pause and resume on hover
    const handleMouseEnter = () => {
      row1Controls.stop();
      row2Controls.stop();
    };

    const handleMouseLeave = () => {
      startMarqueeAnimation();
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('mouseenter', handleMouseEnter);
      sectionElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('mouseenter', handleMouseEnter);
        sectionElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [row1Controls, row2Controls]);

  return (
    <section className="py-16 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-gray-500 mb-10 uppercase tracking-wider font-medium">
            Trusted by industry leaders
          </p>
        </ScrollReveal>
        
        {/* First row - marquee effect */}
        <div className="mb-10 relative">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div 
            className="flex space-x-16 items-center justify-around"
            animate={row1Controls}
          >
            {/* Double the logos for seamless loop */}
            {[...clientsRow1, ...clientsRow1].map((client, index) => (
              <motion.div 
                key={`${client.name}-${index}`}
                className="h-14 flex items-center justify-center flex-shrink-0 opacity-70"
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`${client.icon} text-4xl text-gray-700`} aria-label={client.name}></i>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Second row - opposite direction */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div 
            className="flex space-x-16 items-center justify-around"
            animate={row2Controls}
          >
            {/* Double the logos for seamless loop */}
            {[...clientsRow2, ...clientsRow2].map((client, index) => (
              <motion.div 
                key={`${client.name}-${index}`}
                className="h-14 flex items-center justify-center flex-shrink-0 opacity-70"
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`${client.icon} text-4xl text-gray-700`} aria-label={client.name}></i>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
