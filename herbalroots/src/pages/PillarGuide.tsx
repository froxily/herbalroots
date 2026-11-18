import { assetPath, imageFallback } from '../site';
import { articleSchema } from '../structured-data';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronDown, ChevronUp, AlertCircle, Share2, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ArticleText } from '../components/ArticleText';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';

export const PillarGuide: React.FC = () => {
  const article = ARTICLES.find(a => a.isPillar) || ARTICLES[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const relatedArticles = ARTICLES.filter(a => article.relatedArticleSlugs.includes(a.slug));
  const relatedProducts = PRODUCTS.filter(p => article.relatedProductSlugs.includes(p.slug));

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        path="/hair-fall-treatment-at-home/"
        jsonLd={() => articleSchema(article)}
        ogType="article"
        publishedTime={article.publishedDate}
        modifiedTime={article.updatedDate}
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Guides & Journal', url: '/blog/' },
            { label: 'Hair Fall Treatment at Home' }
          ]}
        />
        <p className="mt-4 rounded-xl bg-cream p-4 text-sm text-charcoal/80">Academic demonstration: health claims and references have not been independently verified or clinically reviewed. This content is not medical advice.</p>

        {/* Article Header */}
        <header className="mt-4 mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-forest text-ivory text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              Pillar Educational Resource
            </span>
            <span className="bg-sage/40 text-forest text-xs font-medium px-3 py-1 rounded-full">
              Category: {article.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-sage/40 text-xs text-muted">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-forest text-ivory flex items-center justify-center font-serif font-bold">
                  {article.author.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{article.author.name}</p>
                  <p className="text-[11px] text-muted">{article.author.role}</p>
                </div>
              </div>

              <span className="hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Updated: {article.updatedDate}</span>
              </div>

              <span className="hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTimeMinutes} min read</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-sage/60 text-charcoal hover:bg-cream transition-colors"
              aria-label="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-[21/9] sm:aspect-[16/8] rounded-3xl overflow-hidden mb-12 bg-cream border border-sage/40 shadow-sm">
          <img
            width={1200}
            height={675}
            src={assetPath(article.featuredImage)}
            onError={imageFallback('/images/art-hair-fall-pillar.svg')}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two-Column Grid: TOC + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-12 prose-botanical">

            {/* Quick Answer Callout */}
            <div className="bg-sage/20 border-l-4 border-botanical p-6 rounded-r-2xl">
              <h2 className="!mt-0 !text-xl font-serif text-forest">Executive Summary for Indian Consumers</h2>
              <p className="!mb-0 text-sm leading-relaxed">
                Hair shedding can have many causes, and no single oil or shampoo is a guaranteed solution. Gentle hair care may help reduce breakage. For persistent or concerning hair loss, consult a qualified clinician for an appropriate assessment.
              </p>
            </div>

            {/* Main Sections */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest border-b border-sage/30 pb-2">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-base text-charcoal leading-relaxed">
                    <ArticleText text={paragraph} />
                  </p>
                ))}
              </section>
            ))}

            {/* In-Text Contextual Recommendation Callout */}
            <div className="my-10 p-6 bg-cream/70 rounded-2xl border border-sage/60 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta bg-white px-2 py-0.5 rounded">
                Recommended Complementary Reading
              </span>
              <h2 className="font-serif text-lg font-bold text-forest !mt-1">
                Explore the Science of Popular Remedies
              </h2>
              <p className="text-xs text-charcoal/80 leading-relaxed !mb-2">
                Discover why dermatologists urge caution with raw kitchen ingredients in our related analysis:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/blog/onion-juice-for-hair-fall/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-botanical underline"
                >
                  Onion Juice for Hair Fall: Evidence & Limits →
                </Link>
                <Link
                  to="/blog/how-to-use-bhringraj-oil/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-botanical underline"
                >
                  How to Warm & Apply Bhringraj Oil →
                </Link>
              </div>
            </div>

            {/* Frequently Asked Questions Accordion */}
            <section className="pt-8 border-t border-sage/40">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-6">
                Frequently Asked Questions (FAQ)
              </h2>
              <div className="space-y-3">
                {article.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-sage/50 rounded-xl overflow-hidden bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-base font-semibold text-forest hover:bg-cream/40 transition-colors focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-botanical shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm text-charcoal/80 leading-relaxed border-t border-sage/20 bg-ivory/30">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Medical Disclaimer Banner */}
            <div className="p-6 bg-cream rounded-2xl border border-sage flex items-start gap-3 mt-12 text-xs text-charcoal/80 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-forest mb-1">Medical & Botanical Disclaimer</p>
                <p>{article.evidenceDisclaimer}</p>
              </div>
            </div>

          </div>

          {/* Sidebar Column: Table of Contents + Related Formulations */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Table of Contents Sticky Box */}
            <div className="sticky top-28 bg-white rounded-2xl p-6 border border-sage/50 shadow-sm space-y-4">
              <h2 className="font-serif text-lg font-bold text-forest">
                Table of Contents
              </h2>
              <nav aria-label="Guide contents" className="space-y-2 text-xs text-charcoal/80">
                {article.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block py-1 hover:text-botanical transition-colors hover:translate-x-1 duration-150"
                  >
                    • {section.heading}
                  </a>
                ))}
              </nav>

              {/* Related Products Widget */}
              <div className="pt-6 border-t border-sage/40 space-y-3">
                <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta">
                  Complementary Formulations
                </span>
                <div className="space-y-3">
                  {relatedProducts.slice(0, 2).map((prod) => (
                    <Link
                      key={prod.id}
                      to={`/shop/${prod.slug}/`}
                      className="group flex items-center gap-3 p-2 rounded-xl hover:bg-cream transition-colors"
                    >
                      <img
                        width={800}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        src={assetPath(prod.image)}
                        alt={prod.name}
                        className="w-12 h-12 rounded-lg object-cover border border-sage/40"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-forest group-hover:text-botanical truncate">
                          {prod.name}
                        </p>
                        <p className="text-[11px] text-muted">₹{prod.price} • {prod.categoryLabel}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Guides Widget */}
              <div className="pt-6 border-t border-sage/40 space-y-3">
                <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta">
                  Related Guides
                </span>
                <div className="space-y-2">
                  {relatedArticles.slice(0, 3).map((rel) => (
                    <Link
                      key={rel.id}
                      to={rel.path}
                      className="block text-xs font-medium text-forest hover:text-botanical transition-colors"
                    >
                      → {rel.title}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </aside>

        </div>

      </article>
    </>
  );
};
