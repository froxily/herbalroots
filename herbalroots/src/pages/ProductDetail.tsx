import { assetPath, imageFallback } from '../site';
import { NotFound } from './NotFound';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, AlertCircle, Plus, Minus, Check, ArrowRight, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';
import { useCart } from '../context/CartContext';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).concat(
    PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category)
  ).slice(0, 3);

  const relatedArticles = ARTICLES.filter((a) =>
    a.relatedProductSlugs.includes(product.slug) ||
    a.concerns.some(c => product.concerns.includes(c))
  ).slice(0, 2);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleEnquiry = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  return (
    <>
      <SEOHead
        title={product.seoTitle}
        description={product.metaDescription}
        path={`/shop/${product.slug}/`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        <Breadcrumbs
          items={[
            { label: 'Shop Formulations', url: '/shop/' },
            { label: product.categoryLabel, url: `/shop/${product.category}/` },
            { label: product.name }
          ]}
        />

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-8">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-cream/40 border-2 border-sage/50 shadow-md relative">
              <img
                width={800}
                height={800}
                src={assetPath(product.image)}
                onError={imageFallback('/images/prod-bhringraj-oil.svg')}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="bg-forest text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {product.categoryLabel}
                </span>
                <span className="bg-terracotta text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                  Demonstration Prototype
                </span>
              </div>
            </div>

            {/* Botanical Assurance Pills */}
            <div className="p-4 bg-white rounded-2xl border border-sage/50 grid grid-cols-3 gap-2 text-center text-xs text-charcoal">
              <div className="p-2 bg-cream/40 rounded-xl">
                <p className="font-bold text-forest">Classical Base</p>
                <p className="text-[10px] text-muted">Sesame & Coconut</p>
              </div>
              <div className="p-2 bg-cream/40 rounded-xl">
                <p className="font-bold text-forest">Cruelty-Free</p>
                <p className="text-[10px] text-muted">Never Animal Tested</p>
              </div>
              <div className="p-2 bg-cream/40 rounded-xl">
                <p className="font-bold text-forest">Zero Mineral Oil</p>
                <p className="text-[10px] text-muted">Zero Liquid Paraffin</p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs text-muted mb-2">
                <span>SKU: {product.sku}</span>
                <span>•</span>
                <span className="font-medium text-forest">{product.volume}</span>
                <span>•</span>
                <span className="text-botanical font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-botanical inline-block" />
                  Catalogue Active
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest leading-tight">
                {product.name}
              </h1>

              {/* Price Area */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-forest">₹{product.price}</span>
                {product.comparisonPrice && (
                  <span className="text-base text-muted line-through">₹{product.comparisonPrice}</span>
                )}
                <span className="text-xs text-muted font-medium">(Incl. of sample taxes)</span>
              </div>
            </div>

            {/* Short Excerpt */}
            <p className="text-sm text-charcoal/85 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Key Botanicals Taglets */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Key Botanical Constituents:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.keyBotanicals.map((botanical, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-sage/40 text-forest text-xs font-medium rounded-lg"
                  >
                    🌿 {botanical}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Quantity + Add + Enquire */}
            <div className="pt-4 border-t border-sage/40 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-sage rounded-xl bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-charcoal hover:bg-cream rounded-l-xl transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-bold text-sm text-charcoal min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-charcoal hover:bg-cream rounded-r-xl transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-botanical text-white'
                      : 'bg-forest hover:bg-forest-light text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handleEnquiry}
                className="w-full py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider border border-forest text-forest hover:bg-cream transition-colors text-center block"
              >
                Enquire or Request Sample Order
              </button>
            </div>

            {/* Demonstration Disclosure Banner */}
            <div className="p-4 bg-cream/70 rounded-2xl border border-sage/50 text-xs text-muted flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <p>
                <strong>Academic Demonstration Notice:</strong> HerbalRoots is an educational search engine optimization project. Displayed products, prices, and stock statuses represent prototype data. No monetary transactions are processed.
              </p>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Description, Ingredients, Usage, Warnings */}
        <div className="my-16 bg-white rounded-3xl p-8 sm:p-12 border border-sage/50 shadow-sm space-y-10">
          
          {/* Full Description */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-forest">
              The Formulation Story
            </h2>
            <p className="text-sm text-charcoal/85 leading-relaxed max-w-4xl">
              {product.fullDescription}
            </p>
          </div>

          {/* Full Ingredients List */}
          <div className="pt-8 border-t border-sage/40 space-y-3">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Complete Ingredients (INCI)
            </h2>
            <p className="text-xs text-muted mb-3">
              We list 100% of the ingredients on every bottle. No hidden silicones or undisclosed artificial perfumes.
            </p>
            <div className="bg-cream/40 p-5 rounded-2xl border border-sage/40">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-botanical shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to Use */}
          <div className="pt-8 border-t border-sage/40 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Suggested Application Ritual
            </h2>
            <ol className="space-y-3">
              {product.usageInstructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Warnings and Cautions */}
          {product.warnings && product.warnings.length > 0 && (
            <div className="pt-8 border-t border-sage/40 space-y-3">
              <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-terracotta" />
                <span>Precautions & Safety Guidelines</span>
              </h2>
              <ul className="space-y-2 text-xs text-charcoal/80">
                {product.warnings.map((warn, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-terracotta font-bold">•</span>
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Related Educational Articles */}
        {relatedArticles.length > 0 && (
          <div className="my-16 space-y-6">
            <div className="flex items-center gap-2 text-forest">
              <BookOpen className="w-5 h-5 text-botanical" />
              <h2 className="font-serif text-2xl font-bold">Related Educational Guides</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((art) => (
                <Link
                  key={art.id}
                  to={art.path}
                  className="p-6 bg-white rounded-2xl border border-sage/40 hover:border-forest/50 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-terracotta tracking-wider">{art.category}</span>
                    <h3 className="font-serif text-xl font-bold text-forest group-hover:text-botanical transition-colors mt-1">
                      {art.title}
                    </h3>
                    <p className="text-xs text-charcoal/80 mt-2 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sage/30 flex items-center gap-1 text-xs font-semibold text-forest group-hover:text-botanical">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Sibling Products */}
        <div className="my-16 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-forest">You May Also Appreciate</h2>
            <Link to="/shop/" className="text-xs font-semibold text-forest hover:text-botanical underline">
              View All Formulations →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl border border-sage/40 p-4 flex gap-4 items-center">
                <img
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  src={assetPath(p.image)}
                  onError={imageFallback('/images/prod-bhringraj-oil.svg')}
                  alt={p.name}
                  className="w-20 h-20 rounded-xl object-cover border border-sage/40 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-muted">{p.categoryLabel}</p>
                  <Link to={`/shop/${p.slug}/`} className="font-serif text-sm font-bold text-forest hover:text-botanical truncate block">
                    {p.name}
                  </Link>
                  <p className="text-xs font-semibold text-charcoal mt-1">₹{p.price}</p>
                  <Link to={`/shop/${p.slug}/`} className="text-[11px] text-forest font-semibold underline mt-1 block">
                    View Formula →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};
