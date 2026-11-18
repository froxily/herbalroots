import { assetPath, imageFallback } from '../site';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  headingLevel?: 2 | 3;
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, headingLevel = 3 }) => {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-2xl border border-sage/40 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
      
      {/* Product Image Area */}
      <Link to={`/shop/${product.slug}/`} className="relative aspect-square overflow-hidden bg-cream/40 block">
        <img
          width={800}
          height={800}
          decoding="async"
          src={assetPath(product.image)}
          onError={imageFallback('/images/prod-bhringraj-oil.svg')}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="bg-forest/90 backdrop-blur-sm text-ivory text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {product.categoryLabel}
          </span>
          {product.isDemo && (
            <span className="bg-terracotta/90 backdrop-blur-sm text-white text-[9px] font-medium tracking-wide px-2 py-0.5 rounded-full">
              Demo Formula
            </span>
          )}
        </div>
      </Link>

      {/* Details Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] text-muted uppercase tracking-wider mb-1 font-medium">
            {product.volume}
          </div>
          <Link to={`/shop/${product.slug}/`}>
            <Heading className="font-serif text-lg font-bold text-forest group-hover:text-botanical transition-colors line-clamp-1">
              {product.name}
            </Heading>
          </Link>
          <p className="text-xs text-charcoal/80 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Botanicals Taglets */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.keyBotanicals.slice(0, 2).map((botanical, idx) => (
              <span key={idx} className="text-[10px] bg-sage/30 text-forest px-2 py-0.5 rounded-md">
                {botanical}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="mt-5 pt-3 border-t border-sage/30 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl font-bold text-forest">₹{product.price}</span>
            {product.comparisonPrice && (
              <span className="text-xs text-muted line-through">₹{product.comparisonPrice}</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-forest ${
              added
                ? 'bg-botanical text-white'
                : 'bg-forest hover:bg-forest-light text-white shadow-sm'
            }`}
            aria-label={`Add ${product.name} to bag`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
