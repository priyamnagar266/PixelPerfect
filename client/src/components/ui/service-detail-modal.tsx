import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '@shared/schema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './button';

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  // Handle clicks on the backdrop to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Prevent body scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 15 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto"
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={['fas', 'times']} />
              </button>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                    style={{ backgroundColor: service.iconBg }}
                  >
                    <FontAwesomeIcon icon={['fas', service.icon as any]} size="lg" style={{ color: service.iconColor }} />
                  </div>
                  <h2 className="font-[Outfit] font-bold text-2xl md:text-3xl">{service.title}</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 font-medium text-lg">{service.description}</p>
                  
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>{service.fullDescription || service.description}</p>
                  </div>
                  
                  <h3 className="font-[Outfit] font-bold text-xl mt-6">Key Benefits</h3>
                  <ul className="space-y-2">
                    {generateBenefitsList(service.title).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">
                          <FontAwesomeIcon icon={['fas', 'check']} />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button
                      className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl"
                    >
                      Get Started with {service.title}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper function to generate benefits list based on service type
function generateBenefitsList(serviceName: string): string[] {
  const commonBenefits = [
    'Dedicated project manager throughout the process',
    'Regular progress updates and transparent communication',
    'Post-launch support and maintenance options'
  ];
  
  const serviceSpecificBenefits: Record<string, string[]> = {
    'Web Development': [
      'Responsive design for all devices and screen sizes',
      'SEO-friendly code structure and optimization',
      'Fast loading times and optimal performance',
      'Secure implementation with data protection'
    ],
    'App Development': [
      'Native performance on iOS and Android platforms',
      'Intuitive user interface and smooth user experience',
      'Offline functionality and data synchronization',
      'Integration with device features (camera, GPS, etc.)'
    ],
    'UI/UX Design': [
      'User-centered design approach based on research',
      'Wireframing and prototyping before development',
      'Accessible interfaces following WCAG guidelines',
      'Consistent visual language and design system'
    ],
    'SEO Optimization': [
      'Comprehensive keyword research and analysis',
      'On-page and technical SEO implementation',
      'Content optimization and structured data markup',
      'Regular performance tracking and reporting'
    ],
    'Digital Marketing': [
      'Multi-channel marketing strategy development',
      'Data-driven campaign optimization',
      'Audience targeting and segmentation',
      'Conversion rate optimization'
    ],
    'Analytics & Insights': [
      'Custom dashboard creation for real-time monitoring',
      'In-depth analysis of user behavior patterns',
      'Regular reporting with actionable insights',
      'A/B testing and performance optimization'
    ],
    'E-commerce Development': [
      'Secure payment gateway integration',
      'Inventory and order management systems',
      'Mobile-optimized shopping experience',
      'Customer account and wishlist functionality'
    ]
  };
  
  const specificBenefits = serviceSpecificBenefits[serviceName] || [];
  return [...specificBenefits, ...commonBenefits];
}

export default ServiceDetailModal;