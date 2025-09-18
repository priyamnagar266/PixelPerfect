
import React from 'react';

const CaseStudyRajasicFoods: React.FC = () => (
  <section className="py-20 bg-light min-h-screen flex items-center justify-center">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div className="max-w-xl mx-auto md:mx-0">
        <span className="text-primary font-medium mb-2 block">Featured Project</span>
        <h2 className="font-[Outfit] font-extrabold text-3xl md:text-4xl mb-4 text-gray-900">
          Case Study: Rajasic Foods — Premium Chocolates Reimagined
        </h2>
        <p className="text-gray-700 mb-6">
          Rajasic Foods is a distinguished brand specializing in couverture chocolates and functional energy bars. Their mission: to blend indulgence with nutrition, offering products that are delicious, high-quality, and ethically produced.
        </p>
        <h3 className="font-bold text-lg mb-2 text-gray-800">Challenge</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-700 text-base">
          <li>Brand Positioning: Differentiate in a saturated chocolate market, from mass-market to luxury/functional offerings.</li>
          <li>User Experience &amp; Website Conversion: Existing site underrepresented the premium, sensory nature of the products and was not optimized for conversions.</li>
          <li>Search Visibility &amp; SEO: Underperforming for key search terms; modest organic traffic and keyword ranking.</li>
          <li>E-Commerce Performance &amp; Trust: Needed strong visuals, clear product info, trustworthy branding, and seamless purchasing process.</li>
        </ul>
        <h3 className="font-bold text-lg mb-2 text-gray-800">Approach &amp; Strategy</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-700 text-base">
          <li><b>Brand Messaging &amp; Visual Identity:</b> Refined messaging to emphasize indulgence + nutrition, rewrote taglines, improved product descriptions, and advised on high-quality photography.</li>
          <li><b>Website UX/UI Overhaul:</b> Redesigned layout, improved navigation, structured product categories, optimized mobile experience, and made trust signals prominent.</li>
          <li><b>Content &amp; SEO Optimization:</b> Conducted keyword research, created SEO-friendly content, improved image optimization, and structured content for readability.</li>
          <li><b>E-Commerce &amp; Technical Improvements:</b> Optimized site speed, improved backend and payment gateways, integrated reviews, and set up analytics tracking.</li>
        </ul>
        <h3 className="font-bold text-lg mb-2 text-gray-800">Results</h3>
        <table className="w-full text-left mb-4 text-sm">
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
        <h3 className="font-bold text-lg mb-2 text-gray-800">Key Learnings &amp; Insights</h3>
        <ul className="list-disc pl-5 text-gray-700 text-base mb-6">
          <li>Storytelling sells: Customers respond well to narrative—about chocolate origin, ingredients, artisan methods.</li>
          <li>Mobile first is non-negotiable: Optimizing mobile UX had outsized impact.</li>
          <li>Visual content matters: High resolution, well-styled photography influences trust and perceived product quality.</li>
          <li>SEO is ongoing: Sustaining rankings requires regular content updates and technical audits.</li>
        </ul>
        <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-1">
          View case study <span aria-hidden>→</span>
        </a>
      </div>
      {/* Right: Image */}
      <div className="flex items-center justify-center">
        <img 
          src="https://i.postimg.cc/nLv7Jfq6/image.png" 
          alt="Rajasic Foods website and product mockup" 
          className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default CaseStudyRajasicFoods;
