import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';
import CountUp from 'react-countup';

const stats = [
  { value: 250, label: 'Projects completed', suffix: '+' },
  { value: 98, label: 'Client satisfaction', suffix: '%' },
  { value: 40, label: 'Industry awards', suffix: '+' },
  { value: 12, label: 'Countries served' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577100078279-b3445eae827c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our creative agency office space" 
                className="w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="font-[Outfit] font-bold text-xl">3+ Years</p>
                <p className="text-white/80">of experience</p>
              </motion.div>
            </div>
          </ScrollReveal>
          
          <div>
            <ScrollReveal>
              <span className="text-primary font-medium">About Us</span>
              <h2 className="font-[Outfit] font-bold text-3xl md:text-4xl mt-3 mb-6">
                We're a team of creative problem-solvers
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Founded in 2022, PixelHeights has grown from a small design studio to a full-service digital agency with a team of 30+ specialists across design, development, and marketing.
              </p>
              <p className="text-gray-700 text-lg mb-8">
                We believe in creating digital experiences that not only look beautiful but drive real business results. Our collaborative approach ensures that every project meets both aesthetic and strategic goals.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-[Outfit] font-bold text-4xl text-primary">
                      <CountUp 
                        start={0} 
                        end={stat.value} 
                        duration={2} 
                        suffix={stat.suffix || ''} 
                        enableScrollSpy 
                        scrollSpyOnce // Ensures the animation runs only once
                      />
                    </p>
                    <p className="text-gray-700">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.a 
                href="#" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Learn more about us
              </motion.a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
