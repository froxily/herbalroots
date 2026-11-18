import { assetPath } from '../site';
import { websiteSchema } from '../structured-data';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, BookOpen, Droplets, Heart } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProductCard } from '../components/ProductCard';
import { ArticleCard } from '../components/ArticleCard';
import { IngredientCard } from '../components/IngredientCard';
import { HairCareRoutineSection } from '../components/HairCareRoutineSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';
import { INGREDIENTS } from '../data/ingredients';
import { HAIR_CONCERNS } from '../data/concerns';

const heroImage = '/images/hero-botanical.svg';

export const Home: React.FC = () => {
  const bestsellerProducts = PRODUCTS.slice(0, 4);
  const featuredArticles = ARTICLES.slice(0, 4);
  const spotlightIngredients = INGREDIENTS.filter(i => ['amla', 'bhringraj', 'neem', 'hibiscus'].includes(i.slug));

  return (
    <>
      <SEOHead
        title="Ayurvedic Hair Care, Herbal Oils & Guides | HerbalRoots"
        description="Explore herbal ingredients, thoughtful hair care routines, and practical guides to caring for your hair and scalp. Classical Ayurvedic hair formulations tailored for Indian hair."
        path="/"
        priorityImage={heroImage}
        jsonLd={websiteSchema}
      />

      {/* C. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream/40 via-ivory to-cream/20 pt-8 pb-16 lg:py-24 border-b border-sage/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/50 text-forest text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-botanical" />
                <span>A More Mindful Hair Care Ritual</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-forest leading-[1.15]">
                Rooted in Ayurveda. <br />
                <span className="italic font-normal text-botanical">Made for Your Hair.</span>
              </h1>

              <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
                Explore herbal ingredients, thoughtful hair care routines, and practical guides to caring for your hair and scalp. Grounded in classical Indian botany and balanced with modern trichological discernment.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/shop/"
                  className="px-7 py-3.5 bg-forest hover:bg-forest-light text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Explore Hair Care</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/blog/"
                  className="px-7 py-3.5 bg-white hover:bg-cream text-forest border border-forest/30 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
                >
                  Read the Journal
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-sage/40 grid grid-cols-3 gap-4 text-xs text-charcoal/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center text-forest">✓</div>
                  <span>100% Transparent Botany</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center text-forest">✓</div>
                  <span>Sulphate & Paraffin Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center text-forest">✓</div>
                  <span>Evidence-Informed</span>
                </div>
              </div>
            </div>

            {/* Right Botanical Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream">
                  <img
                    width={1000}
                    height={1200}
                    fetchPriority="high"
                    src={assetPath(heroImage)}
                    alt="Illustration of an amber herbal hair oil bottle surrounded by botanical leaves"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Floating botanical badge */}
                <div className="absolute -bottom-6 left-0 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-sage/50 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sage/60 flex items-center justify-center text-forest">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-forest">Classical Kshirapak Vidhi</p>
                    <p className="text-[11px] text-muted">Slow simmered in cold-pressed sesame oil</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* D. FEATURED CATEGORIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-widest text-muted font-semibold">Essential Categorization</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Explore Botanical Formulations
          </h2>
          <p className="text-sm text-charcoal/80">
            Purposeful preparations formulated for scalp harmony and hair shaft vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Hair Oils */}
          <Link
            to="/shop/hair-oils/"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-forest flex flex-col justify-end p-6 border border-sage/40 hover:shadow-xl transition-all"
          >
            <img
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              src={assetPath('/images/prod-bhringraj-oil.svg')}
              alt="Ayurvedic hair oils"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="relative z-10 text-white space-y-1">
              <span className="text-xs uppercase tracking-wider text-sage font-semibold">01. Scalp Nourishment</span>
              <h3 className="font-serif text-2xl font-bold">Hair Oils</h3>
              <p className="text-xs text-sage/90 line-clamp-2">
                Traditional cold-pressed sesame and coconut base infused with Bhringraj, Brahmi, and Amla.
              </p>
              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-ivory group-hover:underline">
                <span>View Oils</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Card 2: Shampoos */}
          <Link
            to="/shop/shampoos/"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-forest flex flex-col justify-end p-6 border border-sage/40 hover:shadow-xl transition-all"
          >
            <img
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              src={assetPath('/images/prod-herbal-shampoo.svg')}
              alt="Herbal shampoos"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="relative z-10 text-white space-y-1">
              <span className="text-xs uppercase tracking-wider text-sage font-semibold">02. Gentle Cleansing</span>
              <h3 className="font-serif text-2xl font-bold">Herbal Shampoos</h3>
              <p className="text-xs text-sage/90 line-clamp-2">
                Zero sulphates or harsh surfactants. Naturally foaming Reetha, Shikakai, and Aloe vera.
              </p>
              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-ivory group-hover:underline">
                <span>View Cleansers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Card 3: Hair Masks */}
          <Link
            to="/shop/hair-masks/"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-forest flex flex-col justify-end p-6 border border-sage/40 hover:shadow-xl transition-all"
          >
            <img
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              src={assetPath('/images/prod-hibiscus-mask.svg')}
              alt="Hair masks"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="relative z-10 text-white space-y-1">
              <span className="text-xs uppercase tracking-wider text-sage font-semibold">03. Deep Conditioning</span>
              <h3 className="font-serif text-2xl font-bold">Hair Masks</h3>
              <p className="text-xs text-sage/90 line-clamp-2">
                Mucilage-rich Hibiscus, Fenugreek, and Kokum butter to smooth dry cuticles and reduce friction.
              </p>
              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-ivory group-hover:underline">
                <span>View Masks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Card 4: Hair Care Guides */}
          <Link
            to="/blog/"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-forest flex flex-col justify-end p-6 border border-sage/40 hover:shadow-xl transition-all"
          >
            <img
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              src={assetPath('/images/art-hair-fall-pillar.svg')}
              alt="Hair care guides"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="relative z-10 text-white space-y-1">
              <span className="text-xs uppercase tracking-wider text-sage font-semibold">04. Education & Evidence</span>
              <h3 className="font-serif text-2xl font-bold">Hair Care Guides</h3>
              <p className="text-xs text-sage/90 line-clamp-2">
                In-depth articles covering shedding mechanisms, dandruff remedies, and nutrition.
              </p>
              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-ivory group-hover:underline">
                <span>Read Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* E. SHOP BESTSELLERS */}
      <section className="py-16 bg-cream/30 border-y border-sage/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted font-semibold">Curated Formulations</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                Featured Hair Care Preparations
              </h2>
              <p className="text-sm text-charcoal/80 mt-1">
                Demonstration catalogue entries highlighting authentic Indian Ayurvedic botanicals.
              </p>
            </div>
            <Link
              to="/shop/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest hover:text-botanical transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* F. SHOP BY HAIR CONCERN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-widest text-muted font-semibold">Targeted Botanical Solutions</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Care for Your Specific Hair Need
          </h2>
          <p className="text-sm text-charcoal/80">
            Discover tailored rituals that balance scalp doshas without unrealistic promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {HAIR_CONCERNS.map(concern => (
            <div
              key={concern.id}
              className="bg-white rounded-2xl p-6 border border-sage/40 flex flex-col justify-between hover:border-forest/50 hover:shadow-md transition-all group"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-terracotta-dark block mb-1">
                  {concern.doshaAffinity}
                </span>
                <h3 className="font-serif text-lg font-bold text-forest group-hover:text-botanical transition-colors mb-2">
                  {concern.title}
                </h3>
                <p className="text-xs text-charcoal/75 leading-relaxed line-clamp-3">
                  {concern.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-sage/30 space-y-1.5">
                <Link
                  to={ARTICLES.find(article => article.slug === concern.recommendedArticleSlug)?.path ?? '/blog/'}
                  className="block py-1 text-xs font-medium text-forest hover:text-botanical transition-colors"
                >
                  Read the {concern.slug === 'scalp-care' ? 'wash-day' : concern.slug.replace(/-/g, ' ')} guide →
                </Link>
                <Link
                  to={`/shop/${concern.recommendedProductSlug}/`}
                  className="block py-1 text-xs text-muted hover:text-forest transition-colors"
                >
                  View Product →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* G. INGREDIENT SPOTLIGHT */}
      <section className="py-16 bg-cream/40 border-y border-sage/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted font-semibold">Materia Medica</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                Ingredient Spotlight
              </h2>
              <p className="text-sm text-charcoal/80 mt-1">
                Distinguishing traditional Ayurvedic observations from peer-reviewed pharmacological data.
              </p>
            </div>
            <Link
              to="/ingredients/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest hover:text-botanical transition-colors"
            >
              <span>Explore All Botanicals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightIngredients.map(ingredient => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))}
          </div>
        </div>
      </section>

      {/* H. EDITORIAL JOURNAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted font-semibold">Educational Authority</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              From the Hair Care Journal
            </h2>
            <p className="text-sm text-charcoal/80 mt-1">
              Evidence-informed analysis, practical routines, and biological explanations of hair shedding.
            </p>
          </div>
          <Link
            to="/blog/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest hover:text-botanical transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* I. PRACTICAL HAIR CARE ROUTINE SECTION */}
      <HairCareRoutineSection />

      {/* J. NEWSLETTER SECTION */}
      <NewsletterSection />

      {/* K. TRUST & EDUCATION SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage/40 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sage/50 text-forest flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-forest">
              Editorial Standards
            </h2>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              These articles demonstrate an educational content structure. Health claims and references have not been independently verified or clinically reviewed.
            </p>
            <Link to="/about/" className="inline-block text-xs font-semibold text-forest hover:text-botanical underline">
              Our Editorial Process →
            </Link>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sage/50 text-forest flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-forest">
              Educational Scope
            </h2>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              This academic prototype does not offer medical advice or real product certifications. Consult a qualified professional for health concerns.
            </p>
            <Link to="/disclaimer/" className="inline-block text-xs font-semibold text-forest hover:text-botanical underline">
              Health Disclaimer →
            </Link>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sage/50 text-forest flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-forest">
              Academic SEO Demonstration
            </h2>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              HerbalRoots was created as a high-fidelity academic SEO and WordPress deployment project to test topical authority architecture in the Indian hair care niche.
            </p>
            <Link to="/contact/" className="inline-block text-xs font-semibold text-forest hover:text-botanical underline">
              Contact Researcher →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};
