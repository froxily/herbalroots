import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArticleCard } from '../components/ArticleCard';
import { ARTICLES } from '../data/articles';

export const BlogIndex: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    'All',
    'Hair Fall',
    'Dandruff',
    'Hair Growth',
    'Ingredients',
    'Hair Care Routines',
    'Nutrition'
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        categoryParam === 'All' ||
        article.category.toLowerCase() === categoryParam.toLowerCase();

      const matchesSearch =
        searchTerm.trim() === '' ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.sections.some(s => s.heading.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [categoryParam, searchTerm]);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const pillarArticle = ARTICLES.find(a => a.isPillar) || ARTICLES[0];
  const regularArticles = filteredArticles.filter(a => a.id !== pillarArticle.id);

  return (
    <>
      <SEOHead
        title="Hair Care Journal — Evidence-Informed Ayurvedic Insights | HerbalRoots"
        description="Explore educational articles on hair fall treatments at home, onion juice evidence, amla for hair growth, and dandruff home remedies tailored for Indian hair."
        path="/blog/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'Hair Care Journal' }]} />

        {/* Hero Section */}
        <div className="mt-4 mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/50 text-forest text-xs font-semibold tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Ayurvedic Trichology Repository</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            The Hair Care Journal
          </h1>

          <p className="text-base text-charcoal/80 leading-relaxed">
            Honest, evidence-informed guides exploring shedding mechanisms, classical Ayurvedic pharmacology, and mindful at-home rituals for healthier roots.
          </p>
        </div>

        {/* Featured Pillar Resource Banner */}
        {categoryParam === 'All' && !searchTerm && (
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-terracotta mb-3">
              Core Educational Resource
            </div>
            <ArticleCard headingLevel={2} article={pillarArticle} featured={true} />
          </div>
        )}

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs text-muted flex items-center gap-1 mr-1 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                <span>Topic:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    categoryParam.toLowerCase() === cat.toLowerCase()
                      ? 'bg-forest text-white shadow-sm'
                      : 'bg-white text-charcoal hover:bg-cream border border-sage/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* In-Blog Search */}
            <div className="w-full md:w-72 relative shrink-0">
              <input
                type="search"
                aria-label="Search articles"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
              />
              <Search className="w-4 h-4 text-muted absolute left-3 top-2.5" />
            </div>
          </div>

        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-sage/50 space-y-3">
            <p className="font-serif text-xl font-bold text-forest">No articles matched your criteria.</p>
            <p className="text-xs text-muted">Try adjusting your keyword or clearing the selected category.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                handleCategoryChange('All');
              }}
              className="px-4 py-2 text-xs font-semibold bg-forest text-white rounded-lg hover:bg-forest-light"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(categoryParam === 'All' && !searchTerm ? regularArticles : filteredArticles)
              .slice(0, visibleCount)
              .map((article) => (
                <ArticleCard headingLevel={2} key={article.id} article={article} />
              ))}
          </div>
        )}

        {/* Load More Control */}
        {visibleCount < filteredArticles.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-6 py-3 bg-white hover:bg-cream text-forest border border-forest/30 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              Load More Guides ({filteredArticles.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>
    </>
  );
};
