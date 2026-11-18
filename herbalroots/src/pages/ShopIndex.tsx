import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ArrowUpDown, Search, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';

export const ShopIndex: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = (searchParams.get('category') as ProductCategory | 'all') || 'all';
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Formulations' },
    { id: 'hair-oils', label: 'Ayurvedic Hair Oils' },
    { id: 'shampoos', label: 'Herbal Shampoos' },
    { id: 'hair-masks', label: 'Hair Masks' }
  ];

  const handleCategorySelect = (catId: string) => {
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchCat = selectedCategory === 'all' || prod.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.keyBotanicals.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <>
      <SEOHead
        title="Shop Authentic Ayurvedic Hair Care Formulations | HerbalRoots"
        description="Browse our curated catalogue of Kshirapak Bhringraj oil, cold-pressed Amla oil, sulphate-free Shikakai cleanser, and Hibiscus masks. Transparent Indian botany."
        path="/shop/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'Shop Formulations' }]} />

        {/* Hero Header */}
        <div className="mt-4 mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/50 text-forest text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-botanical" />
            <span>Classical Botanical Apothecary</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            HerbalRoots Formulations
          </h1>

          <p className="text-base text-charcoal/80 leading-relaxed">
            Explore sample formulations inspired by traditional botanical hair care. These products, ingredients, and prices are illustrative examples for this academic prototype.
          </p>

          <div className="inline-block px-4 py-1.5 bg-cream/80 border border-sage/60 rounded-xl text-xs text-muted">
            🌿 <strong>Catalogue Demonstration:</strong> Showing sample prototype formulations with representative INR pricing.
          </div>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-sage/50 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs text-muted flex items-center gap-1 shrink-0 font-medium mr-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Category:</span>
              </span>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleCategorySelect(c.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === c.id
                      ? 'bg-forest text-white shadow-sm'
                      : 'bg-cream/40 text-charcoal hover:bg-cream border border-sage/40'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Right: Search & Sort Controls */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
              
              {/* Catalogue Search */}
              <div className="relative w-full sm:w-56">
                <input
                  type="search"
                  aria-label="Filter products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter products..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-cream/30 border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                />
                <Search className="w-3.5 h-3.5 text-muted absolute left-2.5 top-2.5" />
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0">
                <ArrowUpDown className="w-3.5 h-3.5 text-muted shrink-0" />
                <select
                  aria-label="Sort products"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="w-full sm:w-auto px-3 py-1.5 text-xs bg-cream/30 border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Alphabetical: A to Z</option>
                  <option value="name-desc">Alphabetical: Z to A</option>
                </select>
              </div>

            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-sage/50 space-y-4">
            <p className="font-serif text-2xl font-bold text-forest">No formulations found.</p>
            <p className="text-sm text-muted max-w-sm mx-auto">
              We couldn't find any products matching your current filters or search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategorySelect('all');
                setSortOption('featured');
              }}
              className="px-5 py-2.5 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-forest-light transition-all"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard headingLevel={2} key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </>
  );
};
