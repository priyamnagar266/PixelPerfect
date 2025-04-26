import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import components
import Hero from '@/components/home/Hero';
import ClientLogos from '@/components/home/ClientLogos';
import Services from '@/components/home/Services';
import FeaturedProject from '@/components/home/FeaturedProject';
import Portfolio from '@/components/home/Portfolio';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Team from '@/components/home/Team';
import BlogPreview from '@/components/home/BlogPreview';
import CTA from '@/components/home/CTA';
import Contact from '@/components/home/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PixelPerfect | Web Development & Digital Marketing Agency</title>
        <meta name="description" content="PixelPerfect is a premier web development and digital marketing agency creating beautiful, high-performing websites and digital experiences." />
        <meta property="og:title" content="PixelPerfect Agency | Web Development & Digital Marketing" />
        <meta property="og:description" content="We build digital experiences that people love. Award-winning web development agency creating stunning websites, apps, and digital marketing solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelperfect.agency" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "PixelPerfect Agency",
              "description": "Web development and digital marketing agency creating beautiful, high-performing websites and digital experiences.",
              "image": "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
              "url": "https://pixelperfect.agency",
              "telephone": "+14155551234",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Creative Avenue",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94103",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.7749,
                "longitude": -122.4194
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/pixelperfectagency",
                "https://www.twitter.com/pixelperfect",
                "https://www.linkedin.com/company/pixelperfect",
                "https://www.instagram.com/pixelperfectagency"
              ]
            }
          `}
        </script>
      </Helmet>

      <div>
        <Hero />
        <ClientLogos />
        <Services />
        <FeaturedProject />
        <Portfolio />
        <About />
        <Testimonials />
        <Team />
        <BlogPreview />
        <CTA />
        <Contact />
      </div>
    </>
  );
};

export default Home;
