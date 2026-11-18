import { assetPath, imageFallback } from '../site';
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  headingLevel?: 2 | 3;
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false, headingLevel = 3 }) => {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <article className={`group bg-white rounded-2xl border border-sage/40 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 ${
      featured ? 'md:grid md:grid-cols-2 md:gap-6' : ''
    }`}>
      
      {/* Image Area */}
      <Link to={article.path} className={`relative overflow-hidden bg-cream/30 block ${
        featured ? 'aspect-[16/10] md:aspect-auto md:h-full' : 'aspect-[16/10]'
      }`}>
        <img
          width={1200}
          height={675}
          decoding="async"
          src={assetPath(article.featuredImage)}
          onError={imageFallback('/images/art-hair-fall-pillar.svg')}
          alt={article.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-forest/90 backdrop-blur-sm text-ivory text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {article.category}
          </span>
          {article.isPillar && (
            <span className="bg-terracotta text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Pillar Guide
            </span>
          )}
        </div>
      </Link>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-muted mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.publishedDate).toLocaleDateString('en-IN', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTimeMinutes} min read
            </span>
          </div>

          <Link to={article.path}>
            <Heading className={`font-serif font-bold text-forest group-hover:text-botanical transition-colors ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}>
              {article.title}
            </Heading>
          </Link>

          <p className="text-sm text-charcoal/80 mt-2.5 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Author & Read More Link */}
        <div className="mt-6 pt-4 border-t border-sage/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center text-xs font-serif font-bold text-forest">
              {article.author.name[0]}
            </div>
            <span className="text-xs font-medium text-charcoal">
              {article.author.name}
            </span>
          </div>

          <Link
            to={article.path}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-botanical transition-colors"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </article>
  );
};
