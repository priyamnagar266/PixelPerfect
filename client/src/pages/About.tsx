import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-2 min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-x-hidden">
      <div className="flex flex-col items-center mb-10 p-6 bg-white/80 rounded-3xl shadow-2xl border border-blue-100 max-w-2xl w-full backdrop-blur-lg">
        <img
          src="https://i.postimg.cc/pTYCTHVN/image.png"
          alt="PixelHeights Logo"
          className="h-20 w-20 rounded-2xl shadow-xl mb-4 object-contain bg-white border-4 border-blue-100"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-transparent bg-clip-text drop-shadow-lg text-center">
          About Us
        </h1>
                <hr className="my-2 border-gray-200" />
                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 text-center">What We Do</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <li className="bg-gray-50 rounded-xl p-5 shadow-sm text-center">
                      <h3 className="font-bold text-blue-700 mb-1">Web & App Development</h3>
                      <p className="text-gray-600 text-sm">Custom websites and mobile apps that are fast, secure, and designed to impress.</p>
                    </li>
                    <li className="bg-gray-50 rounded-xl p-5 shadow-sm text-center">
                      <h3 className="font-bold text-blue-700 mb-1">Social Media Management</h3>
                      <p className="text-gray-600 text-sm">Engaging content, community building, and data-driven strategies to grow your online presence.</p>
                    </li>
                    <li className="bg-gray-50 rounded-xl p-5 shadow-sm text-center">
                      <h3 className="font-bold text-blue-700 mb-1">Video Editing</h3>
                      <p className="text-gray-600 text-sm">Professional video editing that tells your story and captivates your audience.</p>
                    </li>
                    <li className="bg-gray-50 rounded-xl p-5 shadow-sm text-center">
                      <h3 className="font-bold text-blue-700 mb-1">Branding</h3>
                      <p className="text-gray-600 text-sm">Distinctive branding and design that set you apart in a crowded market.</p>
                    </li>
                  </ul>
                </section>
                <hr className="my-2 border-gray-200" />
                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 text-center">Our Approach</h2>
                  <p className="text-base md:text-lg text-gray-700 text-center">
                    We believe every client is unique. Our approach is collaborative, transparent, and results-driven. We listen, strategize, and execute with precision—delivering digital solutions that exceed expectations. Choose PixelHeights for creativity, professionalism, and a partner invested in your growth.
                  </p>
                </section>
                <hr className="my-2 border-gray-200" />
                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 text-center">Our Team</h2>
                  <p className="text-base md:text-lg text-gray-700 text-center">
                    Our team is a blend of creative minds, tech experts, and digital strategists. We work together to turn ideas into reality and deliver outstanding results for our clients.
                  </p>
                </section>
                <hr className="my-2 border-gray-200" />
                <section>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-800 text-center">Ready to Elevate Your Brand?</h2>
                  <p className="text-base md:text-lg text-gray-700 text-center mb-4">
                    Let’s build something amazing together. Contact PixelHeights today to start your digital journey with a team that cares about your success.
                  </p>
                  <a href="#contact" className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    Contact Us
                  </a>
                </section>
              </div>
            </section>
          );
        };

export default About;
