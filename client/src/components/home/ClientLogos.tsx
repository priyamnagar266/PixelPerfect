import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';

const clients = [
  { icon: 'fab fa-spotify', name: 'Spotify', color: '#1DB954' },
  { icon: 'fab fa-airbnb', name: 'Airbnb', color: '#FF5A5F' },
  { icon: 'fab fa-slack', name: 'Slack', color: '#611f69' },
  { icon: 'fab fa-amazon', name: 'Amazon', color: '#FF9900' },
  { icon: 'fab fa-dropbox', name: 'Dropbox', color: '#0061FF' },
  { icon: 'fab fa-microsoft', name: 'Microsoft', color: '#F25022' }, // Orange from MS logo
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
                className="h-12 flex items-center group"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <i
                  className={`${client.icon} text-4xl text-gray-700 transition-colors duration-300`}
                  aria-label={client.name}
                  style={{
                    color: undefined,
                  }}
                  // Use a data attribute for targeting in CSS
                  data-logo-color={client.color}
                ></i>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>
        {`
          .group:hover [data-logo-color="#1DB954"] { color: #1DB954 !important; }
          .group:hover [data-logo-color="#FF5A5F"] { color: #FF5A5F !important; }
          .group:hover [data-logo-color="#611f69"] { color: #611f69 !important; }
          .group:hover [data-logo-color="#FF9900"] { color: #FF9900 !important; }
          .group:hover [data-logo-color="#0061FF"] { color: #0061FF !important; }
          .group:hover [data-logo-color="#F25022"] { color: #F25022 !important; }
        `}
      </style>
    </section>
  );
};

export default ClientLogos;
