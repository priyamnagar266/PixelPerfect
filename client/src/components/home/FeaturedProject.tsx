import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';

const FeaturedProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="text-primary font-medium">Featured Project</span>
              <h2 className="font-[Outfit] font-bold text-3xl md:text-4xl mt-3 mb-6">
                Reimagining online commerce for StyleHouse
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We developed a custom e-commerce platform that increased conversions by 34% and provided a seamless shopping experience across all devices.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Custom product filtering and recommendation engine',
                  'Streamlined checkout process reducing abandonment by 28%',
                  'Integrated inventory management and analytics dashboard'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-check-circle text-[#4CAF50] mt-1 mr-3"></i>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.a 
                href="#" 
                className="inline-flex items-center text-primary font-medium hover:underline text-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={e => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                View case study <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce website design for StyleHouse" 
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition"
                      onClick={() => setIsModalOpen(true)}
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
r          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">Case Study: Reimagining Online Commerce for StyleHouse</h2>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Client:</span> StyleHouse – A Premium Fashion Retail Brand
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Industry:</span> Fashion & Lifestyle
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-semibold">Services Provided:</span> Custom E-Commerce Development, UX Optimization, Data Analytics Integration
            </p>
            <h3 className="font-semibold text-primary mb-2 mt-2">The Challenge</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              <li>Low conversion rates, especially on mobile devices.</li>
              <li>A clunky and outdated user interface that led to frequent cart abandonment.</li>
              <li>Limited product discovery due to a lack of smart filtering and recommendation tools.</li>
              <li>No centralized system for inventory tracking or performance analytics.</li>
            </ul>
            <p className="mb-4 text-gray-700">
              StyleHouse needed more than just a cosmetic upgrade — they required a robust digital transformation that would scale with their growth and enhance the customer journey from first click to checkout.
            </p>
            <h3 className="font-semibold text-primary mb-2">Our Solution</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold text-green-600">Custom Product Filtering & Recommendation Engine:</span> Intelligent filtering and personalized recommendations increased engagement and product discovery.
              </li>
              <li>
                <span className="font-semibold text-green-600">Streamlined Checkout Process:</span> Redesigned checkout with one-click checkout, guest login, and progress indicators, reducing cart abandonment by 28%.
              </li>
              <li>
                <span className="font-semibold text-green-600">Mobile-Optimized User Interface:</span> Responsive, intuitive design for seamless shopping across all devices, boosting satisfaction and retention.
              </li>
              <li>
                <span className="font-semibold text-green-600">Integrated Inventory & Analytics Dashboard:</span> Real-time inventory tracking and customer analytics empowered smarter business decisions.
              </li>
            </ul>
            <h3 className="font-semibold text-primary mb-2">The Results</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              <li>📈 <span className="font-semibold">34% increase in conversions</span> within the first 3 months</li>
              <li>🛒 <span className="font-semibold">28% drop in cart abandonment</span> through a reimagined checkout process</li>
              <li>📱 Seamless omnichannel experience, resulting in longer user sessions and higher mobile engagement</li>
              <li>📊 Enhanced operational efficiency with integrated inventory and analytics tools</li>
            </ul>
            <h3 className="font-semibold text-primary mb-2">Conclusion</h3>
            <p className="text-gray-700">
              By aligning technology with user experience and business needs, we helped StyleHouse move from a static retail platform to a dynamic, data-driven e-commerce experience. Our partnership didn’t just optimize their online store — it redefined how their customers connect with fashion.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProject;
