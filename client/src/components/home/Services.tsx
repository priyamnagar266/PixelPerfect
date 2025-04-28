import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ServiceCard from '@/components/ui/service-card';
import ServiceDetailModal from '@/components/ui/service-detail-modal';
import { Service } from '@shared/schema';

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { data: services = [], isLoading } = useQuery({
    queryKey: ['/api/services'],
  });

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium">Our Services</span>
            <h2 className="font-[Outfit] font-bold text-3xl md:text-5xl mt-3 mb-6">
              Transform your digital presence
            </h2>
            <p className="text-gray-700 text-lg">
              We offer comprehensive digital solutions to help your business thrive online, from stunning websites to powerful marketing strategies.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            [...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
                <div className="w-14 h-14 rounded-xl bg-gray-200 mb-6"></div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6 w-2/3"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              </div>
            ))
          ) : (
            services.map((service, index) => (
              <ServiceCard
                key={service.id || index}
                service={service}
                onClick={handleServiceClick}
              />
            ))
          )}
        </div>
      </div>
      
      <ServiceDetailModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Services;
