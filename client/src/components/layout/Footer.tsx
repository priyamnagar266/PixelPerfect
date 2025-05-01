import React from 'react';
import { Link } from 'wouter';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-[Outfit] font-bold text-xl">P</span>
              </div>
              <span className="font-[Outfit] font-bold text-2xl text-black">PixelHeights</span>
            </Link>
            <p className="text-black mb-6 max-w-md">
              We create beautiful digital experiences that help businesses grow and connect with their audience.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook-f" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="linkedin-in" />
            </div>
          </div>
          <div>
            <h3 className="font-[Outfit] font-bold text-xl mb-6 text-black">Our Location</h3>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14007.306163454135!2d77.04416818001366!3d28.634960395970374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1746087848472!5m2!1sen!2sau"
              width="600 px"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PixelHeights Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
r            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
  // Map each icon name to its corresponding React Icon component
  const socialIcons: { [key: string]: JSX.Element } = {
    "facebook-f": <FaFacebookF className="text-blue-600" />,
    twitter: <FaTwitter className="text-blue-400" />,
    instagram: <FaInstagram className="text-pink-500" />,
    "linkedin-in": <FaLinkedinIn className="text-blue-700" />,
  };

  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
      aria-label={`Follow us on ${icon}`}
    >
      {socialIcons[icon]}
    </a>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-black transition-colors">
      {text}
    </a>
  </li>
);

export default Footer;
