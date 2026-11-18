import { assetPath } from '../site';
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, ShoppingBag, Leaf, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';
import { INGREDIENTS } from '../data/ingredients';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryParam);

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    } else {
      setSearchParams({});
    }
  };

  const cleanQuery = queryParam.trim().toLowerCase();

  const matchingArticles = cleanQuery
    ? ARTICLES.filter(a =>
        a.title.toLowerCase().includes(cleanQuery) ||
        a.excerpt.toLowerCase().includes(cleanQuery) ||
        a.category.toLowerCase().includes(cleanQuery) ||
        a.sections.some(s => s.content.some(c => c.toLowerCase().includes(cleanQuery)))
      )
    : [];

  const matchingProducts = cleanQuery
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(cleanQuery) ||
        p.shortDescription.toLowerCase().includes(cleanQuery) ||
        p.categoryLabel.toLowerCase().includes(cleanQuery) ||
        p.keyBotanicals.some(b => b.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchingIngredients = cleanQuery
    ? INGREDIENTS.filter(i =>
        i.name.toLowerCase().includes(cleanQuery) ||
        i.botanicalName.toLowerCase().includes(cleanQuery) ||
        i.sanskritName.toLowerCase().includes(cleanQuery) ||
        i.hindiName.toLowerCase().includes(cleanQuery) ||
        i.overview.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults =
    matchingArticles.length +
    matchingProducts.length +
    matchingIngredients.length;

  const popularSearches = [
    'Hair fall treatment at home',
    'Bhringraj oil',
    'Amla for hair growth',
    'Dandruff home remedies',
    'Onion juice',
    'Neem scalp care',
    'Shikakai shampoo'
  ];

  return (
    <>
      <SEOHead
        title={queryParam ? `Search Results for "${queryParam}" | HerbalRoots` : 'Search HerbalRoots'}
        description="Search across authentic Ayurvedic hair formulations, botanical encyclopedia entries, and clinical educational guides."
        noindex={true}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'Search Results' }]} />

        {/* Search Header */}
        <div className="mt-4 mb-10 text-center max-w-2xl mx-auto space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Search HerbalRoots
          </h1>
          <p className="text-sm text-charcoal/80">
            Query our educational articles, botanical encyclopedia, and formulations.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto pt-2">
            <div className="relative flex-1">
              <input
                type="search"
                aria-label="Search articles, ingredients, and products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search herbs, hair concerns, formulations..."
                className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal shadow-sm"
                autoFocus
              />
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-forest hover:bg-forest-light text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Area */}
        {!cleanQuery ? (
          <div className="bg-cream/40 p-8 rounded-3xl border border-sage/40 text-center space-y-4 max-w-xl mx-auto">
            <HelpCircle className="w-8 h-8 text-botanical mx-auto" />
            <h2 className="font-serif text-lg font-bold text-forest">Popular Hair Inquiries</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchParams({ q: term })}
                  className="px-3.5 py-1.5 text-xs bg-white hover:bg-cream border border-sage rounded-full text-charcoal transition-colors shadow-2xs"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-sage/50 space-y-4">
            <p className="font-serif text-2xl font-bold text-forest">No matches found for “{queryParam}”</p>
            <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
              We couldn't find any guides, ingredients, or formulations matching your query. Try searching for broader terms like "oil", "amla", "dandruff", or "shampoo".
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSearchParams({})}
                className="px-5 py-2 text-xs font-semibold bg-forest text-white rounded-xl hover:bg-forest-light"
              >
                Clear Search
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-xs text-muted">
              Found <strong className="text-forest">{totalResults}</strong> result{totalResults > 1 ? 's' : ''} for “<strong className="text-forest">{queryParam}</strong>”
            </div>

            {/* Articles Results */}
            {matchingArticles.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-forest pb-2 border-b border-sage/40">
                  <BookOpen className="w-5 h-5 text-botanical" />
                  <h2 className="font-serif text-xl font-bold">
                    Educational Guides ({matchingArticles.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchingArticles.map(art => (
                    <Link
                      key={art.id}
                      to={art.path}
                      className="p-5 bg-white rounded-2xl border border-sage/40 hover:border-forest/50 hover:shadow-sm transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">{art.category}</span>
                        <h3 className="font-serif text-lg font-bold text-forest group-hover:text-botanical mt-1">
                          {art.title}
                        </h3>
                        <p className="text-xs text-charcoal/80 mt-1.5 line-clamp-2 leading-relaxed">
                          {art.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-sage/30 flex items-center justify-between text-xs text-muted">
                        <span>{art.readingTimeMinutes} min read</span>
                        <span className="text-forest group-hover:text-botanical font-semibold flex items-center gap-1">
                          Read Guide <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Products Results */}
            {matchingProducts.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-forest pb-2 border-b border-sage/40">
                  <ShoppingBag className="w-5 h-5 text-botanical" />
                  <h2 className="font-serif text-xl font-bold">
                    Formulations ({matchingProducts.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matchingProducts.map(prod => (
                    <Link
                      key={prod.id}
                      to={`/shop/${prod.slug}/`}
                      className="p-4 bg-white rounded-2xl border border-sage/40 hover:border-forest/50 hover:shadow-sm transition-all group flex gap-3 items-center"
                    >
                      <img
                        width={800}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        src={assetPath(prod.image)}
                        alt={prod.name}
                        className="w-16 h-16 rounded-xl object-cover border border-sage/40 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] text-muted">{prod.categoryLabel}</span>
                        <h3 className="font-serif text-sm font-bold text-forest group-hover:text-botanical truncate">
                          {prod.name}
                        </h3>
                        <p className="text-xs font-semibold text-charcoal mt-1">₹{prod.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients Results */}
            {matchingIngredients.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-forest pb-2 border-b border-sage/40">
                  <Leaf className="w-5 h-5 text-botanical" />
                  <h2 className="font-serif text-xl font-bold">
                    Botanical Materia Medica ({matchingIngredients.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {matchingIngredients.map(ing => (
                    <Link
                      key={ing.id}
                      to={`/ingredients/${ing.slug}/`}
                      className="p-4 bg-white rounded-2xl border border-sage/40 hover:border-forest/50 hover:shadow-sm transition-all group flex gap-4 items-center"
                    >
                      <img
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        src={assetPath(ing.image)}
                        alt={ing.name}
                        className="w-16 h-16 rounded-xl object-cover border border-sage/40 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] text-terracotta font-medium">{ing.sanskritName}</span>
                        <h3 className="font-serif text-base font-bold text-forest group-hover:text-botanical">
                          {ing.name}
                        </h3>
                        <p className="text-[11px] text-muted italic">{ing.botanicalName}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </>
  );
};
