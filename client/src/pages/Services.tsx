import React, { useState } from 'react';
// Modal component for detailed info
function ServiceDetailModal({ open, onClose, service }: { open: boolean; onClose: () => void; service: any }) {
  if (!open || !service) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
        <h2 className="text-3xl font-extrabold mb-2 text-blue-700">{service.title}</h2>
        <h3 className="text-lg font-semibold mb-2 text-gray-700">{service.subtitle}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-base">{service.description}</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-base mb-4">
          {service.features.map((feature: string) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {/* Unique extra details, not repeating features */}
        <div className="mt-4 text-gray-700 text-base">
          {service.title === 'Web & App Development' && (
            <p>
              Our web and app development service focuses on delivering robust, scalable, and visually appealing digital solutions. We emphasize seamless user experience, security, and performance. From initial planning to deployment, we collaborate closely with you to ensure your project aligns with your business goals and stands out in a competitive digital landscape. We also provide guidance on technology choices, architecture, and long-term digital strategy.
            </p>
          )}
          {service.title === 'Video Editing' && (
            <p>
              Our video editing team brings your raw footage to life with creative storytelling, professional transitions, and a keen eye for detail. We work with you to understand your brand voice and message, ensuring every video resonates with your target audience. Whether it's for social media, advertising, or internal use, we deliver polished, engaging content that elevates your brand.
            </p>
          )}
          {service.title === 'Branding & Graphic Design' && (
            <p>
              We help you build a cohesive and memorable brand identity that reflects your values and vision. Our designers craft everything from logos to full brand systems, ensuring consistency across all touchpoints. We also offer creative consultation to help you position your brand effectively in the market and connect emotionally with your audience.
            </p>
          )}
          {service.title === 'Instagram Management' && (
            <p>
              Our Instagram management service is designed to grow your presence organically and authentically. We handle everything from content planning to community engagement, freeing you to focus on your business. With a data-driven approach, we continuously optimize your strategy for maximum reach and impact, helping you build a loyal and active following.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: 'Web & App Development',
    subtitle: 'Custom Digital Solutions',
    description: 'Modern websites and mobile applications built with cutting-edge technology',
    features: [
      'Custom website & web app development',
      'Mobile app development (iOS & Android)',
      'API & backend integration',
      'E-commerce solutions',
      'Performance optimization',
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    color: 'from-blue-500 to-blue-700',
    tag: 'Development',
    cta: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Video Editing',
    subtitle: 'Professional Post-Production',
    description: 'Cinematic video editing for commercials, social media, and brand storytelling',
    features: [
      'Commercial & social media video editing',
      'Color grading & sound design',
      'Motion graphics & effects',
      'YouTube & Instagram reels',
      'Fast turnaround',
    ],
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    color: 'from-indigo-500 to-blue-700',
    tag: 'Video Production',
    cta: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Branding & Graphic Design',
    subtitle: 'Visual Identity Solutions',
    description: 'Complete brand identity packages from logo design to marketing materials',
    features: [
      'Logo & brand identity',
      'Business cards & stationery',
      'Social media graphics',
      'Brochures & flyers',
      'Brand guidelines',
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    color: 'from-yellow-400 to-yellow-600',
    tag: 'Design',
    cta: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Instagram Management',
    subtitle: 'Social Media Strategy',
    description: 'Full Instagram account management, content creation, and growth strategies',
    features: [
      'Content planning & scheduling',
      'Hashtag & engagement strategy',
      'Story & reel creation',
      'Analytics & reporting',
      'Community management',
    ],
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    color: 'from-pink-500 to-red-600',
    tag: 'Social Media',
    cta: 'Learn More',
    ctaLink: '#',
  },
];

function Blob({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`absolute -z-10 blur-2xl opacity-60 ${className}`}
      width="340"
      height="340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M44.8,-77.2C56.7,-68.2,63.7,-56.1,70.2,-43.6C76.7,-31.1,82.7,-18.2,83.2,-5.1C83.7,8,78.7,21.2,71.2,33.2C63.7,45.2,53.7,56,41.7,63.7C29.7,71.4,14.8,76,-0.7,77C-16.2,78,-32.4,75.4,-45.7,67.2C-59,59,-69.4,45.2,-75.2,29.6C-81,14,-82.2,-3.3,-77.2,-18.7C-72.2,-34.1,-61,-47.6,-48.1,-56.7C-35.2,-65.8,-20.6,-70.5,-5.1,-67.1C10.4,-63.7,20.8,-52.2,44.8,-77.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}


const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      <div className="w-full px-0 md:px-8 mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">Our Services</h1>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">We offer a full suite of digital services to help you build, launch, and grow your business with confidence and creativity.</p>
        <ServiceDetailModal open={modalOpen} onClose={() => setModalOpen(false)} service={selectedService} />
        <div className="flex flex-col gap-16 w-full">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`relative flex flex-col md:flex-row items-stretch rounded-3xl bg-white shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group w-full`}
              style={{ minHeight: 340 }}
            >
              {/* Image Side */}
              <div className={`w-full md:w-1/2 h-56 md:h-[380px] ${idx % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'} flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 p-0`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ borderRadius: 0 }}
                />
                <span className="absolute top-4 left-4 bg-white/90 text-gray-800 text-xs font-semibold px-4 py-1 rounded-xl shadow-md">{service.tag}</span>
              </div>
              {/* Content Side */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 ${idx % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-blue-700">{service.title}</h2>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-700">{service.subtitle}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg">{service.description}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-base md:text-lg mb-4">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="mt-2 text-blue-600 font-semibold hover:underline text-base md:text-lg text-left w-fit"
                  onClick={() => { setSelectedService(service); setModalOpen(true); }}
                >
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
