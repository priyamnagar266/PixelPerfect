import React from 'react';
import { Link } from 'wouter';

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
              <span className="font-[Outfit] font-bold text-2xl text-white">PixelPerfect</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
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
            <h3 className="font-[Outfit] font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="#" text="Web Development" />
              <FooterLink href="#" text="App Development" />
              <FooterLink href="#" text="UI/UX Design" />
              <FooterLink href="#" text="SEO Optimization" />
              <FooterLink href="#" text="Digital Marketing" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-[Outfit] font-bold text-xl mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Our Work" />
              <FooterLink href="#" text="Team" />
              <FooterLink href="#" text="Blog" />
              <FooterLink href="#" text="Careers" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-[Outfit] font-bold text-xl mb-6">Support</h3>
            <ul className="space-y-4">
              <FooterLink href="#" text="Contact Us" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Service" />
              <FooterLink href="#" text="FAQ" />
              <FooterLink href="#" text="Sitemap" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PixelPerfect Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
    aria-label={`Follow us on ${icon}`}
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {text}
    </a>
  </li>
);

export default Footer;
