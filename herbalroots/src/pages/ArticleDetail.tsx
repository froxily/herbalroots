import { assetPath, imageFallback } from '../site';
import { NotFound } from './NotFound';
import { articleSchema } from '../structured-data';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ChevronDown, ChevronUp, AlertCircle, Share2, ArrowLeft, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ArticleText } from '../components/ArticleText';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const article = ARTICLES.find(a => !a.isPillar && a.slug === slug);

  if (!article) {
    return <NotFound />;
  }

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
        path={article.path}
        jsonLd={() => articleSchema(article)}
        ogType="article"
        publishedTime={article.publishedDate}
        modifiedTime={article.updatedDate}
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Journal', url: '/blog/' },
            { label: article.category, url: `/blog/?category=${encodeURIComponent(article.category)}` },
            { label: article.title }
          ]}
        />
        <p className="mt-4 rounded-xl bg-cream p-4 text-sm text-charcoal/80">Academic demonstration: health claims and references have not been independently verified or clinically reviewed. This content is not medical advice.</p>

        {/* Back to Pillar Link */}
        <div className="mt-2 mb-4">
          <Link
            to="/hair-fall-treatment-at-home/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-botanical hover:text-forest transition-colors bg-sage/30 px-3 py-1 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Pillar Resource: Hair Fall Treatment at Home Guide</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mt-4 mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-forest text-ivory text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              {article.category}
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
                <span>Published: {article.publishedDate}</span>
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
        <div className="aspect-[16/8] rounded-3xl overflow-hidden mb-12 bg-cream border border-sage/40 shadow-sm">
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
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10 prose-botanical">
            
            {/* Sections */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest border-b border-sage/30 pb-2">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-base text-charcoal leading-relaxed">
                    <ArticleText text={paragraph} />
                  </p>
                ))}
                {section.links?.map(({ label, href }) => (
                  <p key={href} className="text-sm font-semibold text-forest underline">
                    {href.startsWith('/') ? <Link to={href}>{label}</Link> : <a href={href}>{label}</a>}
                  </p>
                ))}
              </section>
            ))}

            {/* Contextual Backlink to Pillar Guide */}
            <div className="my-8 p-6 bg-cream/70 rounded-2xl border border-sage/60 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta bg-white px-2 py-0.5 rounded">
                Holistic Hair Health Context
              </span>
              <h2 className="font-serif text-lg font-bold text-forest !mt-1">
                Looking for the Complete At-Home Hair Fall Routine?
              </h2>
              <p className="text-xs text-charcoal/80 leading-relaxed !mb-2">
                This article forms one component of our comprehensive educational repository. For an in-depth breakdown of shedding mechanisms, scalp pH, and weekly rituals, explore our core resource:
              </p>
              <Link
                to="/hair-fall-treatment-at-home/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-botanical underline"
              >
                <span>Read our complete Hair Fall Treatment at Home practical guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* FAQs Accordion */}
            {article.faqs.length > 0 && (
              <section className="pt-8 border-t border-sage/40">
                <h2 className="font-serif text-2xl font-bold text-forest mb-6">
                  Frequently Asked Questions
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
            )}

            {/* Disclaimer */}
            <div className="p-6 bg-cream rounded-2xl border border-sage flex items-start gap-3 mt-12 text-xs text-charcoal/80 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-forest mb-1">Evidence & Health Disclaimer</p>
                <p>{article.evidenceDisclaimer}</p>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 bg-white rounded-2xl p-6 border border-sage/50 shadow-sm space-y-6">
              
              <div>
                <h2 className="font-serif text-lg font-bold text-forest mb-3">
                  Article Navigation
                </h2>
                <nav aria-label="Article contents" className="space-y-2 text-xs text-charcoal/80">
                  {article.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block py-1 hover:text-botanical transition-colors"
                    >
                      • {section.heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Formulations */}
              {relatedProducts.length > 0 && (
                <div className="pt-6 border-t border-sage/40 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta">
                    Targeted Formulations
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
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="pt-6 border-t border-sage/40 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta">
                    Further Reading
                  </span>
                  <div className="space-y-2">
                    {relatedArticles.map((rel) => (
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
              )}

            </div>
          </aside>

        </div>

      </article>
    </>
  );
};
