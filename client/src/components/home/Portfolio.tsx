import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';
import PortfolioCard from '@/components/ui/portfolio-card';

// Mockup data for Creativity (Web Dev & Graphic Design)
const creativityProjects = [
  {
    id: 1,
    image: 'https://i.postimg.cc/wM4TZP1X/AIRMAX90.png',
    title: 'Nike Air Max 90 Custom Illustration',
    description: 'A vibrant digital illustration of the iconic Nike Air Max 90 sneaker, showcasing bold colors and modern vector art for a sneakerhead campaign.',
    category: 'graphic',
    tags: ['Illustration', 'Sneaker Art', 'Branding'],
    overlayColor: 'from-yellow-400 to-yellow-600',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/C1BRYwVv/ce28bdacce737650bac660095bfbb707.jpg',
    title: 'Grab Your Favorite Clothes',
    description: 'A vibrant e-commerce landing page for a trendy clothing brand, featuring dynamic layouts, bold typography, and engaging visuals to attract fashion-forward shoppers.',
    category: 'graphic',
    tags: ['E-commerce', 'Web Design', 'Fashion'],
    overlayColor: 'from-yellow-700 to-yellow-400',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/k5Z5TLtW/console.png',
    title: 'Retro Gaming Console UI/UX',
    description: 'UI/UX design for a retro-inspired gaming console dashboard, merging nostalgia with modern usability for a seamless player experience.',
    category: 'web',
    tags: ['UI/UX', 'Web Design', 'Gaming'],
    overlayColor: 'from-blue-400 to-blue-700',
  },
];

// Mockup data for Compassion (Video Editing)
const compassionProjects = [
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    title: 'Smash Masters Mania',
    description: 'Video editing for a sports event highlight.',
    category: 'video',
    tags: ['Video Editing', 'Sports'],
    overlayColor: 'from-red-400 to-pink-500',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    title: 'Monday Moves',
    description: 'Video editing for a corporate culture campaign.',
    category: 'video',
    tags: ['Video Editing', 'Corporate'],
    overlayColor: 'from-blue-400 to-blue-700',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'Cricket Mania',
    description: 'Video editing for a cricket event.',
    category: 'video',
    tags: ['Video Editing', 'Event'],
    overlayColor: 'from-yellow-400 to-yellow-600',
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        {/* Creativity Section */}
        <div className="mb-20">
          <h2 className="font-[Outfit] font-extrabold text-[6vw] md:text-[5vw] lg:text-[4vw] leading-none mb-4 bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent">Creativity</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-grid"
            layout
          >
            {creativityProjects.map((item, index) => (
              <motion.div
                key={item.id || index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  tags={item.tags}
                  overlayColor={item.overlayColor}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Compassion Section */}
        <div className="mb-20">
          <h2 className="font-[Outfit] font-extrabold text-[6vw] md:text-[5vw] lg:text-[4vw] leading-none mb-4 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">Compassion</h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8 portfolio-grid"
            layout
          >
            {compassionProjects.map((item, index) => (
              <motion.div
                key={item.id || index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  tags={item.tags}
                  overlayColor={item.overlayColor}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
