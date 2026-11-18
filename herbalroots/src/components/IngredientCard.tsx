import { assetPath, imageFallback } from '../site';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Ingredient } from '../types';

interface IngredientCardProps {
  ingredient: Ingredient;
  headingLevel?: 2 | 3;
}

export const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient, headingLevel = 3 }) => {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <div className="group bg-white rounded-2xl border border-sage/40 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
      <Link to={`/ingredients/${ingredient.slug}/`} className="relative aspect-[4/3] overflow-hidden bg-cream/40 block">
        <img
          width={800}
          height={600}
          decoding="async"
          src={assetPath(ingredient.image)}
          onError={imageFallback('/images/ing-amla.svg')}
          alt={ingredient.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <p className="text-[11px] font-medium tracking-wider uppercase text-sage-light">
            {ingredient.sanskritName}
          </p>
          <Heading className="font-serif text-xl font-bold tracking-wide">
            {ingredient.name}
          </Heading>
        </div>
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-muted italic font-serif">
            {ingredient.botanicalName}
          </p>
          <p className="text-xs text-charcoal/80 mt-2 line-clamp-3 leading-relaxed">
            {ingredient.overview}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-sage/30 flex items-center justify-between">
          <span className="text-[11px] text-muted font-medium">
            Materia Medica
          </span>
          <Link
            to={`/ingredients/${ingredient.slug}/`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-forest group-hover:text-botanical transition-colors"
          >
            <span>Explore Botany</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
