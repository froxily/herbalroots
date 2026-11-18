import { assetPath, siteUrl } from '../site';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Leaf, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-sage border-t border-forest pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-light/40">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-botanical flex items-center justify-center text-ivory">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory">
                HerbalRoots
              </span>
            </Link>
            <p className="text-sage/80 text-sm leading-relaxed max-w-sm">
              Rooted in Ayurveda. Made for Your Hair. Dedicated to transparent botanical formulation, evidence-informed hair rituals, and mindful scalp wellness tailored for Indian hair.
            </p>
            <div className="pt-2 text-xs text-sage/70 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-botanical-light animate-pulse"></span>
              <span>Organic SEO Research & Demonstration Website</span>
            </div>
          </div>

          {/* Shop Formulations */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-medium text-ivory">Shop Formulations</h2>
            <ul className="space-y-2 text-sm text-sage/80">
              <li>
                <Link to="/shop/" className="hover:text-ivory transition-colors">
                  Complete Catalogue
                </Link>
              </li>
              <li>
                <Link to="/shop/hair-oils/" className="hover:text-ivory transition-colors">
                  Classical Hair Oils
                </Link>
              </li>
              <li>
                <Link to="/shop/shampoos/" className="hover:text-ivory transition-colors">
                  Herbal Cleansers
                </Link>
              </li>
              <li>
                <Link to="/shop/hair-masks/" className="hover:text-ivory transition-colors">
                  Conditioning Masks
                </Link>
              </li>
              <li>
                <Link to="/shop/bhringraj-hair-oil/" className="hover:text-ivory transition-colors">
                  Bhringraj Intensive Oil
                </Link>
              </li>
              <li>
                <Link to="/shop/herbal-shampoo/" className="hover:text-ivory transition-colors">
                  Shikakai & Reetha Wash
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Guides */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-medium text-ivory">Hair Care Journal</h2>
            <ul className="space-y-2 text-sm text-sage/80">
              <li>
                <Link to="/hair-fall-treatment-at-home/" className="hover:text-ivory font-medium transition-colors">
                  Hair Fall Guide (Pillar)
                </Link>
              </li>
              <li>
                <Link to="/blog/onion-juice-for-hair-fall/" className="hover:text-ivory transition-colors">
                  Onion Juice & Hair Fall
                </Link>
              </li>
              <li>
                <Link to="/blog/amla-for-hair-growth/" className="hover:text-ivory transition-colors">
                  Amla for Hair Growth
                </Link>
              </li>
              <li>
                <Link to="/blog/dandruff-home-remedies/" className="hover:text-ivory transition-colors">
                  Dandruff & Scalp Care
                </Link>
              </li>
              <li>
                <Link to="/blog/hair-fall-after-delivery/" className="hover:text-ivory transition-colors">
                  Postpartum Shedding
                </Link>
              </li>
              <li>
                <Link to="/blog/how-to-use-bhringraj-oil/" className="hover:text-ivory transition-colors">
                  How to Use Bhringraj Oil
                </Link>
              </li>
            </ul>
          </div>

          {/* Materia Medica & Trust */}
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-medium text-ivory">Ingredients & Company</h2>
            <ul className="space-y-2 text-sm text-sage/80">
              <li>
                <Link to="/ingredients/" className="hover:text-ivory transition-colors">
                  Botanical Library
                </Link>
              </li>
              <li>
                <Link to="/ingredients/bhringraj/" className="hover:text-ivory transition-colors">
                  Bhringraj (Eclipta alba)
                </Link>
              </li>
              <li>
                <Link to="/ingredients/amla/" className="hover:text-ivory transition-colors">
                  Amla (Indian Gooseberry)
                </Link>
              </li>
              <li>
                <Link to="/ingredients/neem/" className="hover:text-ivory transition-colors">
                  Neem (Clarifying Nimba)
                </Link>
              </li>
              <li>
                <Link to="/about/" className="hover:text-ivory transition-colors">
                  About HerbalRoots
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-ivory transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Disclaimer Banner */}
        <div className="py-6 border-b border-forest-light/30 text-xs text-sage/75 space-y-2">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
            <p>
              <strong>Health & Regulatory Disclaimer:</strong> Content on HerbalRoots is for informational, educational, and academic SEO study purposes only. Traditional Ayurvedic concepts presented here are historical and botanical in nature. These statements have not been evaluated by regulatory bodies. Demonstration products shown are prototype catalogue entries. This website does not intend to diagnose, treat, cure, or prevent any clinical dermatological condition.
            </p>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sage/70 gap-4">
          <p>© <span suppressHydrationWarning>{currentYear}</span> HerbalRoots. All rights reserved. Crafted with authentic Ayurvedic principles.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy/" className="hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms/" className="hover:text-ivory transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer/" className="hover:text-ivory transition-colors">
              Medical Disclaimer
            </Link>
            {siteUrl && <a href={assetPath('/sitemap.xml')} className="hover:text-ivory transition-colors">
              XML Sitemap
            </a>}
          </div>
        </div>

      </div>
    </footer>
  );
};
