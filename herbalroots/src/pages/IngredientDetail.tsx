import { assetPath, imageFallback } from '../site';
import { NotFound } from './NotFound';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Leaf, AlertTriangle, BookOpen, ShoppingBag, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { INGREDIENTS } from '../data/ingredients';
import { ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';

export const IngredientDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ingredient = INGREDIENTS.find((i) => i.slug === slug);

  if (!ingredient) {
    return <NotFound />;
  }

  const relatedArticles = ARTICLES.filter((a) => ingredient.relatedArticleSlugs.includes(a.slug));
  const relatedProducts = PRODUCTS.filter((p) => ingredient.relatedProductSlugs.includes(p.slug));

  return (
    <>
      <SEOHead
        title={`${ingredient.name} (${ingredient.sanskritName}) in Ayurvedic Hair Care | HerbalRoots`}
        description={`${ingredient.name} (${ingredient.botanicalName}): Discover classical Ayurvedic uses, modern pharmacological insights, practical at-home preparations, and precautions.`}
        path={`/ingredients/${ingredient.slug}/`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs
          items={[
            { label: 'Botanical Library', url: '/ingredients/' },
            { label: ingredient.name }
          ]}
        />
        <p className="mt-4 rounded-xl bg-cream p-4 text-sm text-charcoal/80">Academic demonstration: health claims and references have not been independently verified or clinically reviewed. This content is not medical advice.</p>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 items-center">
          <div className="md:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage/40 rounded-full text-xs font-semibold text-forest">
              <Leaf className="w-3.5 h-3.5" />
              <span>{ingredient.sanskritName} • {ingredient.hindiName}</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
              {ingredient.name}
            </h1>

            <p className="font-serif italic text-lg text-muted">
              {ingredient.botanicalName}
            </p>

            <p className="text-base text-charcoal/80 leading-relaxed pt-2">
              {ingredient.overview}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-sage/50 bg-cream">
              <img
                width={800}
                height={600}
                src={assetPath(ingredient.image)}
                onError={imageFallback('/images/ing-amla.svg')}
                alt={ingredient.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Two Pillars: Tradition vs Science */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          
          <div className="bg-white rounded-2xl p-8 border border-sage/50 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sage/50 text-forest flex items-center justify-center font-serif font-bold text-lg">
              ॐ
            </div>
            <h2 className="font-serif text-2xl font-bold text-forest">
              Classical Ayurvedic Role
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {ingredient.traditionalRole}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-sage/50 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sage/50 text-forest flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-forest">
              Modern Pharmacological Perspective
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {ingredient.scientificPerspective}
            </p>
          </div>

        </div>

        {/* Practical Application Methods */}
        <div className="bg-cream/60 rounded-3xl p-8 sm:p-10 border border-sage/50 my-12 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
            Practical Ways to Use {ingredient.name} at Home
          </h2>
          <ul className="space-y-4">
            {ingredient.practicalUse.map((method, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-charcoal">
                <span className="w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{method}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety & Precautions */}
        <div className="p-6 bg-white rounded-2xl border-l-4 border-terracotta border-y border-r border-sage/50 shadow-sm flex items-start gap-4 my-12 text-xs text-charcoal/85 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-forest text-sm mb-1">
              Safety, Tolerability & Patch Testing
            </h3>
            <p>{ingredient.precautionNotes}</p>
          </div>
        </div>

        {/* Related Articles & Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14 pt-8 border-t border-sage/40">
          
          {/* Related Articles */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-forest">
              <BookOpen className="w-5 h-5 text-botanical" />
              <h2 className="font-serif text-xl font-bold">Related Educational Guides</h2>
            </div>
            <div className="space-y-3">
              {relatedArticles.map((art) => (
                <Link
                  key={art.id}
                  to={art.path}
                  className="block p-4 rounded-xl bg-white border border-sage/40 hover:border-forest/40 hover:shadow-sm transition-all"
                >
                  <p className="text-xs uppercase text-terracotta font-semibold">{art.category}</p>
                  <p className="text-sm font-serif font-bold text-forest mt-1">{art.title}</p>
                  <p className="text-xs text-muted mt-1 line-clamp-2">{art.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-forest">
              <ShoppingBag className="w-5 h-5 text-botanical" />
              <h2 className="font-serif text-xl font-bold">Formulations Featuring {ingredient.name}</h2>
            </div>
            <div className="space-y-3">
              {relatedProducts.map((prod) => (
                <Link
                  key={prod.id}
                  to={`/shop/${prod.slug}/`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white border border-sage/40 hover:border-forest/40 hover:shadow-sm transition-all"
                >
                  <img
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    src={assetPath(prod.image)}
                    alt={prod.name}
                    className="w-16 h-16 rounded-lg object-cover border border-sage/30"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted">{prod.categoryLabel} • {prod.volume}</p>
                    <p className="text-sm font-serif font-bold text-forest truncate">{prod.name}</p>
                    <p className="text-xs font-semibold text-charcoal mt-1">₹{prod.price}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-forest mr-2" />
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
