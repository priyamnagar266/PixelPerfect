import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';
import TestimonialCard from '@/components/ui/testimonial-card';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  interface Testimonial {
    id: string;
    quote: string;
    name: string;
    position: string;
    company: string;
    image: string;
    rating: number;
  }

  const API_URL = import.meta.env.VITE_API_URL;
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
    queryFn: () => fetch(`${API_URL ? API_URL : ''}/api/testimonials`).then(res => res.json()),
  });

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium">Testimonials</span>
            <h2 className="font-[Outfit] font-bold text-3xl md:text-5xl mt-3 mb-6">
              What our clients say
            </h2>
            <p className="text-gray-700 text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="testimonial-slider relative max-w-5xl mx-auto overflow-visible">
          {isLoading ? (
            // Loading skeleton
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg animate-pulse">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 mx-auto md:mx-0"></div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    ))}
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-4/6"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6 w-3/6"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2 w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="testimonial-slides">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id || index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  isActive={index === currentSlide}
                />
              ))}
            </div>
          )}
          
          <div className="flex justify-center items-center space-x-3 mt-8">
            {!isLoading && testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {!isLoading && testimonials.length > 0 && (
            <>
              <motion.button
                className="testimonial-prev absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 flex items-center justify-center focus:outline-none z-50"
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                aria-label="Previous testimonial"
              >
                <i className="fas fa-chevron-left text-black text-2xl"></i> {/* Arrow icon */}
              </motion.button>
              
              <motion.button
                className="testimonial-next absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 flex items-center justify-center focus:outline-none z-50"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                aria-label="Next testimonial"
              >
                <i className="fas fa-chevron-right text-black text-2xl"></i> {/* Arrow icon */}
              </motion.button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
