import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';

const clients = [
  { icon: 'fab fa-spotify', name: 'Spotify' },
  { icon: 'fab fa-airbnb', name: 'Airbnb' },
  { icon: 'fab fa-slack', name: 'Slack' },
  { icon: 'fab fa-amazon', name: 'Amazon' },
  { icon: 'fab fa-dropbox', name: 'Dropbox' },
  { icon: 'fab fa-microsoft', name: 'Microsoft' },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-gray-500 mb-10 uppercase tracking-wider font-medium">
            Trusted by industry leaders
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          {clients.map((client, index) => (
            <ScrollReveal key={client.name} delay={index * 0.1}>
              <motion.div 
                className="h-12 flex items-center"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`${client.icon} text-4xl text-gray-700`} aria-label={client.name}></i>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
