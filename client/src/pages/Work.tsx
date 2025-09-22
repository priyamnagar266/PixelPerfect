import React from 'react';

const projects = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Nature Project' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'City Project' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Video Project' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', alt: 'Tech Project' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80', alt: 'Design Project' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', alt: 'Startup Project' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Mobile Project' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Art Project' },
  { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', alt: 'Showcase Video' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Nature 2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', alt: 'Tech 2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80', alt: 'Design 2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', alt: 'Startup 2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Mobile 2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Art 2' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Showcase Video 2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Nature 3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', alt: 'Tech 3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80', alt: 'Design 3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', alt: 'Startup 3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Mobile 3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Art 3' },
];

const Work: React.FC = () => {
  return (
  <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-2 md:px-8 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-center tracking-tight bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
        Our Work
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center mb-12">
        Explore our portfolio of projects, case studies, and creative solutions delivered for clients across industries.
      </p>
      {/* Pinterest-style Masonry Grid */}
  <div className="w-full max-w-[1600px] columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-8 space-y-8">
        {projects.map((item, idx) => (
          <div key={idx} className="mb-6 break-inside-avoid rounded-2xl shadow-lg overflow-hidden bg-white">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full object-cover" />
            ) : (
              <video src={item.src} controls className="w-full object-cover" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
