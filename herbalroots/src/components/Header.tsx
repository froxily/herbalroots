import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [concernsDropdownOpen, setConcernsDropdownOpen] = useState(false);
  const [ingredientsDropdownOpen, setIngredientsDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const { totalItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchBarOpen(false);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-botanical py-2 ${
      isActive ? 'text-forest font-semibold border-b-2 border-forest' : 'text-charcoal'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-sage/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal hover:text-forest hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-forest"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest rounded-lg p-1">
            <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-sage group-hover:bg-botanical transition-colors shadow-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M12 2C12 2 16 6 16 11C16 14 14 16 12 17C10 16 8 14 8 11C8 6 12 2 12 2Z" fill="#DCE7D6" stroke="#183D2B"/>
                <path d="M12 11V22" stroke="#FAF7EF" strokeLinecap="round"/>
                <path d="M12 16C10 17 8 18 6 19" stroke="#FAF7EF" strokeLinecap="round"/>
                <path d="M12 17C14 18 16 19 18 19" stroke="#FAF7EF" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-forest group-hover:text-botanical transition-colors">
                HerbalRoots
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted font-medium -mt-1">
                Ayurvedic Hair Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <NavLink 
                to="/shop/" 
                className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-botanical py-2"
              >
                <span>Shop</span>
                <ChevronDown className="w-4 h-4 text-muted" />
              </NavLink>
              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-sage/40 py-2 animate-fadeIn z-50">
                  <Link to="/shop/" className="block px-4 py-2 text-xs font-semibold text-forest uppercase tracking-wider bg-cream/30">
                    All Formulations
                  </Link>
                  <Link to="/shop/hair-oils/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Ayurvedic Hair Oils
                  </Link>
                  <Link to="/shop/shampoos/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Herbal Cleansers
                  </Link>
                  <Link to="/shop/hair-masks/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Botanical Hair Masks
                  </Link>
                </div>
              )}
            </div>

            {/* Hair Concerns Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setConcernsDropdownOpen(true)}
              onMouseLeave={() => setConcernsDropdownOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-botanical py-2 focus:outline-none"
                aria-expanded={concernsDropdownOpen}
              >
                <span>Hair Concerns</span>
                <ChevronDown className="w-4 h-4 text-muted" />
              </button>
              {concernsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-sage/40 py-2 animate-fadeIn z-50">
                  <div className="px-4 py-1.5 text-xs font-semibold text-forest uppercase tracking-wider bg-cream/30">
                    Targeted Routines
                  </div>
                  <Link to="/hair-fall-treatment-at-home/" className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    <span className="font-medium">Hair Fall Guide (Pillar)</span>
                    <span className="block text-xs text-muted">Excessive shedding & thinning</span>
                  </Link>
                  <Link to="/blog/dandruff-home-remedies/" className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    <span className="font-medium">Dandruff & Flakes</span>
                    <span className="block text-xs text-muted">Scalp clarifying solutions</span>
                  </Link>
                  <Link to="/blog/amla-for-hair-growth/" className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    <span className="font-medium">Hair Growth & Density</span>
                    <span className="block text-xs text-muted">Nutritional root support</span>
                  </Link>
                  <Link to="/blog/hair-fall-after-delivery/" className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    <span className="font-medium">Postpartum Hair Changes</span>
                    <span className="block text-xs text-muted">Hormonal shedding recovery</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Ingredients Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIngredientsDropdownOpen(true)}
              onMouseLeave={() => setIngredientsDropdownOpen(false)}
            >
              <NavLink 
                to="/ingredients/" 
                className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-botanical py-2"
              >
                <span>Ingredients</span>
                <ChevronDown className="w-4 h-4 text-muted" />
              </NavLink>
              {ingredientsDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-sage/40 py-2 animate-fadeIn z-50">
                  <Link to="/ingredients/" className="block px-4 py-2 text-xs font-semibold text-forest uppercase tracking-wider bg-cream/30">
                    Botanical Materia Medica
                  </Link>
                  <Link to="/ingredients/bhringraj/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Bhringraj (King of Hair)
                  </Link>
                  <Link to="/ingredients/amla/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Amla (Indian Gooseberry)
                  </Link>
                  <Link to="/ingredients/neem/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Neem (Clarifying Nimba)
                  </Link>
                  <Link to="/ingredients/shikakai/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Shikakai (Natural Pod Wash)
                  </Link>
                  <Link to="/ingredients/hibiscus/" className="block px-4 py-2.5 text-sm text-charcoal hover:bg-cream hover:text-forest">
                    Hibiscus (Japa Pushpa)
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/blog/" className={navLinkClass}>
              Journal
            </NavLink>

            <NavLink to="/about/" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact/" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right utility actions (Search, Cart) */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <button
              type="button"
              onClick={() => setSearchBarOpen(!searchBarOpen)}
              className="p-2 text-charcoal hover:text-forest hover:bg-cream rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-forest"
              aria-label="Search HerbalRoots"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-charcoal hover:text-forest hover:bg-cream rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-forest"
              aria-label={`View cart containing ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-terracotta rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <Link
              to="/shop/"
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-forest hover:bg-forest-light rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest"
            >
              Shop Catalogue
            </Link>
          </div>
        </div>

        {/* Collapsible Search Bar */}
        {searchBarOpen && (
          <div className="py-3 px-2 border-t border-sage/40 animate-fadeIn">
            <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-2xl mx-auto">
              <input
                type="search"
                aria-label="Search articles, ingredients, and products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, ingredients, or formulations (e.g. bhringraj, hair fall, neem)..."
                className="flex-1 min-w-0 px-4 py-2 text-sm bg-white border border-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-forest text-charcoal placeholder:text-muted"
                autoFocus
              />
              <button
                type="submit"
                className="px-5 py-2 text-sm font-medium bg-forest text-white rounded-lg hover:bg-forest-light transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="lg:hidden border-t border-sage/60 bg-ivory px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
            <input
              type="search"
              aria-label="Search HerbalRoots"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 min-w-0 px-3 py-2 text-sm bg-white border border-sage rounded-md text-charcoal"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-forest text-white rounded-md font-medium"
            >
              Go
            </button>
          </form>

          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-forest hover:text-botanical"
          >
            Home
          </Link>
          <Link
            to="/shop/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-charcoal hover:text-forest"
          >
            All Products & Catalogue
          </Link>
          <Link
            to="/shop/hair-oils/"
            onClick={() => setMobileMenuOpen(false)}
            className="block pl-4 py-1 text-sm text-muted hover:text-forest"
          >
            • Ayurvedic Hair Oils
          </Link>
          <Link
            to="/shop/shampoos/"
            onClick={() => setMobileMenuOpen(false)}
            className="block pl-4 py-1 text-sm text-muted hover:text-forest"
          >
            • Herbal Shampoos
          </Link>
          <Link
            to="/shop/hair-masks/"
            onClick={() => setMobileMenuOpen(false)}
            className="block pl-4 py-1 text-sm text-muted hover:text-forest"
          >
            • Conditioning Hair Masks
          </Link>

          <div className="pt-2 border-t border-sage/40">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Hair Concerns</span>
            <Link
              to="/hair-fall-treatment-at-home/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-charcoal font-medium hover:text-forest"
            >
              Hair Fall Treatment at Home (Pillar)
            </Link>
            <Link
              to="/blog/dandruff-home-remedies/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-charcoal hover:text-forest"
            >
              Dandruff & Scalp Remedies
            </Link>
            <Link
              to="/blog/amla-for-hair-growth/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-charcoal hover:text-forest"
            >
              Amla & Hair Growth
            </Link>
            <Link
              to="/blog/hair-fall-after-delivery/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-charcoal hover:text-forest"
            >
              Postpartum Hair Fall
            </Link>
          </div>

          <div className="pt-2 border-t border-sage/40">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Ingredients</span>
            <Link
              to="/ingredients/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-charcoal font-medium hover:text-forest"
            >
              View All Botanical Ingredients
            </Link>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link to="/ingredients/bhringraj/" onClick={() => setMobileMenuOpen(false)} className="text-xs text-muted hover:text-forest py-1">Bhringraj</Link>
              <Link to="/ingredients/amla/" onClick={() => setMobileMenuOpen(false)} className="text-xs text-muted hover:text-forest py-1">Amla</Link>
              <Link to="/ingredients/neem/" onClick={() => setMobileMenuOpen(false)} className="text-xs text-muted hover:text-forest py-1">Neem</Link>
              <Link to="/ingredients/shikakai/" onClick={() => setMobileMenuOpen(false)} className="text-xs text-muted hover:text-forest py-1">Shikakai</Link>
            </div>
          </div>

          <div className="pt-2 border-t border-sage/40 space-y-1">
            <Link
              to="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-charcoal hover:text-forest"
            >
              Hair Care Journal
            </Link>
            <Link
              to="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-charcoal hover:text-forest"
            >
              About HerbalRoots
            </Link>
            <Link
              to="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-charcoal hover:text-forest"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
