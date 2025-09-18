
import React, { useState } from 'react';

const FeaturedProject = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-300 via-yellow-100 to-blue-200 min-h-[60vh]">
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-0 md:gap-0 min-h-[480px] px-4 md:px-16">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center md:pr-16 max-w-3xl">
          <span className="text-blue-700 font-semibold mb-3 block text-xl md:text-2xl">Featured Project</span>
          <h2 className="font-[Outfit] font-extrabold text-4xl md:text-5xl mb-6 text-blue-900 leading-tight">Rajasic Foods — Premium Chocolates Reimagined</h2>
          <p className="text-blue-900/90 mb-6 text-xl md:text-2xl text-justify">
            Rajasic Foods is a premium brand specializing in couverture chocolates and functional energy bars. Their mission is to blend indulgence with nutrition, offering products that are delicious, high-quality, and ethically produced. We partnered with Rajasic Foods to transform their digital presence, elevate their brand story, and drive e-commerce growth through a holistic strategy.
          </p>
          {/* Removed second paragraph as requested */}
          <ul className="list-disc pl-6 mb-10 text-blue-900/90 text-lg md:text-xl space-y-2">
            <li><b>Luxury brand repositioning &amp; visual identity</b> with new messaging and high-end photography</li>
            <li><b>Website UX/UI overhaul</b> for seamless, conversion-optimized shopping</li>
            <li><b>SEO &amp; content strategy</b> for organic growth and improved search rankings</li>
            <li className="font-bold text-blue-700">+25-40% conversion rate, 60-80% more traffic, higher mobile engagement</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-yellow-200 font-bold px-10 py-4 rounded-full shadow-lg transition text-xl w-max"
              onClick={() => setOpen(true)}
            >
              View case study <span className="ml-3 text-2xl" aria-hidden>→</span>
            </button>
            <a
              href="https://www.rajasicfoods.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg transition text-xl w-max border-2 border-blue-700"
            >
              Have a look <span className="ml-2 text-2xl" aria-hidden>↗</span>
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-end items-end md:items-center mt-10 md:mt-0">
          <img
            src="https://i.postimg.cc/nLv7Jfq6/image.png"
            alt="Rajasic Foods website and product mockup"
            className="rounded-3xl shadow-[0_8px_40px_0_rgba(0,0,0,0.25)] w-full max-w-xs md:max-w-lg object-cover"
            style={{ height: '100%', maxHeight: '520px', alignSelf: 'stretch', marginTop: '40px' }}
          />
        </div>
      </div>

      {/* Modal for detailed case study */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-0 relative flex flex-col animate-fadeIn" style={{ maxHeight: '90vh' }}>
            {/* Cross button always visible */}
            <button
              className="fixed md:absolute top-6 right-6 z-50 bg-white/80 hover:bg-gray-200 text-gray-500 hover:text-black text-3xl rounded-full p-2 transition border border-gray-200 shadow"
              style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="overflow-y-auto p-8 md:p-12" style={{ maxHeight: '90vh' }}>
              <span className="text-blue-700 font-semibold mb-2 block text-lg md:text-xl">Featured Project</span>
              <h2 className="font-[Outfit] font-extrabold text-2xl md:text-3xl mb-4 text-blue-900 leading-tight">Case Study: Rajasic Foods — Premium Chocolates Reimagined</h2>
              <p className="text-gray-700 mb-6 text-lg md:text-xl">
                Rajasic Foods is a distinguished brand specializing in couverture chocolates and functional energy bars. Their mission: to blend indulgence with nutrition, offering products that are delicious, high-quality, and ethically produced.
              </p>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Challenge</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-700 text-base md:text-lg space-y-1">
                <li>Brand Positioning: Differentiate in a saturated chocolate market, from mass-market to luxury/functional offerings.</li>
                <li>User Experience & Website Conversion: Existing site underrepresented the premium, sensory nature of the products and was not optimized for conversions.</li>
                <li>Search Visibility & SEO: Underperforming for key search terms; modest organic traffic and keyword ranking.</li>
                <li>E-Commerce Performance & Trust: Needed strong visuals, clear product info, trustworthy branding, and seamless purchasing process.</li>
              </ul>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Approach & Strategy</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-700 text-base md:text-lg space-y-1">
                <li><b>Brand Messaging & Visual Identity:</b> Refined messaging to emphasize indulgence + nutrition, rewrote taglines, improved product descriptions, and advised on high-quality photography.</li>
                <li><b>Website UX/UI Overhaul:</b> Redesigned layout, improved navigation, structured product categories, optimized mobile experience, and made trust signals prominent.</li>
                <li><b>Content & SEO Optimization:</b> Conducted keyword research, created SEO-friendly content, improved image optimization, and structured content for readability.</li>
                <li><b>E-Commerce & Technical Improvements:</b> Optimized site speed, improved backend and payment gateways, integrated reviews, and set up analytics tracking.</li>
              </ul>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Results</h3>
              <table className="w-full text-left mb-4 text-base md:text-lg">
                <thead>
                  <tr className="text-gray-600">
                    <th className="pr-4 pb-1">Metric</th>
                    <th className="pr-4 pb-1">Before</th>
                    <th className="pb-1">After / 3-6 months</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Organic search traffic</td><td>Low to moderate</td><td>↑ 60-80% increase</td></tr>
                  <tr><td>Keyword rankings (top 10 terms)</td><td>Few in top 50</td><td>Many in top 20, several in top 10</td></tr>
                  <tr><td>Bounce rate (product pages)</td><td>High (&gt;60%)</td><td>Reduced by 30%</td></tr>
                  <tr><td>Conversion rate</td><td>Modest</td><td>+25-40%</td></tr>
                  <tr><td>Avg. page load time</td><td>Slow</td><td>&lt;3s, improved UX</td></tr>
                  <tr><td>Mobile traffic engagement</td><td>Low</td><td>Significantly improved</td></tr>
                </tbody>
              </table>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Key Learnings & Insights</h3>
              <ul className="list-disc pl-5 text-gray-700 text-base md:text-lg mb-6 space-y-1">
                <li>Storytelling sells: Customers respond well to narrative—about chocolate origin, ingredients, artisan methods.</li>
                <li>Mobile first is non-negotiable: Optimizing mobile UX had outsized impact.</li>
                <li>Visual content matters: High resolution, well-styled photography influences trust and perceived product quality.</li>
                <li>SEO is ongoing: Sustaining rankings requires regular content updates and technical audits.</li>
              </ul>
              {/* Image removed from detailed modal as requested */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProject;
