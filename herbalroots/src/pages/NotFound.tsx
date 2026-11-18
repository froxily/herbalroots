import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Home, BookOpen, ShoppingBag, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFound: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
      <SEOHead
        title="Page Not Found (404) | HerbalRoots"
        description="The page you requested could not be located. Explore our Ayurvedic hair care guides, botanical ingredients, and formulations."
        noindex={true}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        
        <div className="w-20 h-20 mx-auto rounded-full bg-cream flex items-center justify-center text-forest text-2xl font-serif font-bold shadow-inner">
          404
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
          This Page Has Wandered Off
        </h1>

        <p className="text-sm sm:text-base text-charcoal/80 max-w-md mx-auto leading-relaxed">
          The link you followed may have expired, or the botanical path was moved. Let’s guide you back to grounded hair care.
        </p>

        {/* Quick Search */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-2 pt-2">
          <input
            type="search"
            aria-label="Search HerbalRoots"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search hair fall guides, amla, bhringraj..."
            className="flex-1 min-w-0 px-4 py-2.5 text-xs bg-white border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal shadow-sm"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-forest text-white text-xs font-semibold rounded-xl hover:bg-forest-light transition-all flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>
        </form>

        {/* Helpful Shortcut Destinations */}
        <div className="pt-8 max-w-lg mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Recommended Starting Points
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link
              to="/hair-fall-treatment-at-home/"
              className="p-3.5 bg-white rounded-xl border border-sage/50 hover:border-forest/40 transition-colors flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-forest">Hair Fall Guide (Pillar)</p>
                <p className="text-[10px] text-muted">Core shedding recovery guide</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              to="/shop/"
              className="p-3.5 bg-white rounded-xl border border-sage/50 hover:border-forest/40 transition-colors flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-forest">Shop Formulations</p>
                <p className="text-[10px] text-muted">Oils, cleansers, and masks</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              to="/blog/"
              className="p-3.5 bg-white rounded-xl border border-sage/50 hover:border-forest/40 transition-colors flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-forest">Hair Care Journal</p>
                <p className="text-[10px] text-muted">Evidence & ingredient articles</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              to="/"
              className="p-3.5 bg-white rounded-xl border border-sage/50 hover:border-forest/40 transition-colors flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-forest">HerbalRoots Homepage</p>
                <p className="text-[10px] text-muted">Return to the start</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};
