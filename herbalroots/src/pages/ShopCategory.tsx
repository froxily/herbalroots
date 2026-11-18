import { NotFound } from './NotFound';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';

interface CategoryMeta {
  title: string;
  seoTitle: string;
  metaDescription: string;
  heading: string;
  description: string;
}

export const CATEGORY_MAP: Record<ProductCategory, CategoryMeta> = {
  'hair-oils': {
    title: 'Ayurvedic Hair Oils',
    seoTitle: 'Ayurvedic Hair Oils for Scalp Care | HerbalRoots',
    metaDescription: 'Explore classical cold-pressed Bhringraj, Amla, and Neem scalp oils. Slow-cooked with whole botanicals for deep root nourishment.',
    heading: 'Classical Ayurvedic Hair Oils',
    description: 'Traditionally prepared through Kshirapak and Sneha Paka vidhi in pure unrefined sesame and coconut oils. Formulated to calm elevated scalp Pitta and fortify hair roots.'
  },
  'shampoos': {
    title: 'Herbal Shampoos',
    seoTitle: 'Sulphate-Free Herbal Shampoos & Cleansers | HerbalRoots',
    metaDescription: 'Discover gentle pH 5.5 herbal hair cleansers made from Reetha soapnuts, Shikakai pods, and soothing Aloe vera. Free of SLS, SLES, and silicones.',
    heading: 'Sulphate-Free Herbal Cleansers',
    description: 'Gentle, low-lather cleansers utilizing plant-derived saponins to purify the scalp without stripping the natural sebum mantle.'
  },
  'hair-masks': {
    title: 'Botanical Hair Masks',
    seoTitle: 'Deep Conditioning Ayurvedic Hair Masks | HerbalRoots',
    metaDescription: 'Revitalize dry, brittle hair with mucilage-rich Hibiscus, Sprouted Fenugreek, and Kokum butter. Intense weekly cuticle hydration.',
    heading: 'Intensive Conditioning Hair Masks',
    description: 'Weekly conditioning treatments designed to restore moisture, soften frizz, and protect delicate hair fibers from friction and dry weather.'
  }
};

export const ShopCategory: React.FC = () => {
  const { slug: category } = useParams<{ slug: ProductCategory }>();

  if (!category || !Object.prototype.hasOwnProperty.call(CATEGORY_MAP, category)) {
    return <NotFound />;
  }

  const meta = CATEGORY_MAP[category];
  const products = PRODUCTS.filter((p) => p.category === category);

  return (
    <>
      <SEOHead
        title={meta.seoTitle}
        description={meta.metaDescription}
        path={`/shop/${category}/`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs
          items={[
            { label: 'Shop Formulations', url: '/shop/' },
            { label: meta.title }
          ]}
        />

        {/* Hero */}
        <div className="mt-4 mb-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-muted font-semibold bg-sage/40 px-3 py-1 rounded-full">
            Specialized Collection
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            {meta.heading}
          </h1>

          <p className="text-base text-charcoal/80 leading-relaxed">
            {meta.description}
          </p>

          {/* Sibling Category Links */}
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/shop/"
              className="px-4 py-1.5 rounded-full text-xs font-medium border border-sage hover:bg-cream transition-colors text-charcoal"
            >
              All Formulations
            </Link>
            {Object.keys(CATEGORY_MAP).map((catKey) => {
              const k = catKey as ProductCategory;
              const isCurrent = k === category;
              return (
                <Link
                  key={k}
                  to={`/shop/${k}/`}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isCurrent
                      ? 'bg-forest text-white'
                      : 'border border-sage hover:bg-cream text-charcoal'
                  }`}
                >
                  {CATEGORY_MAP[k].title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard headingLevel={2} key={product.id} product={product} />
          ))}
        </div>

      </div>
    </>
  );
};
