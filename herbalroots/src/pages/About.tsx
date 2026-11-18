import React from 'react';
import { Leaf, Award, Heart, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About HerbalRoots — Rooted in Ayurveda. Made for Your Hair."
        description="Meet the university project team behind HerbalRoots and explore its Ayurvedic hair care journal, botanical library, and sample formulations."
        path="/about/"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'About HerbalRoots' }]} />

        {/* Hero */}
        <div className="mt-4 mb-14 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/50 text-forest text-xs font-semibold tracking-widest uppercase">
            <Leaf className="w-3.5 h-3.5" />
            <span>Rooted in Ayurveda. Made for Your Hair.</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            A Mindful Return to Botanical Truth
          </h1>

          <p className="text-lg text-charcoal/80 leading-relaxed">
            In an industry crowded with exaggerated promises of “instant hair regrowth” and synthetic fillers disguised as herbs, HerbalRoots was created to offer calm, honest, evidence-informed hair care.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 my-12 items-center">
          <div className="md:col-span-6 space-y-4 text-sm text-charcoal leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              The Genesis of HerbalRoots
            </h2>
            <p>
              Hair care is part of everyday routines and traditions across India. This project gives readers a place to explore those routines and see how an educational hair-care journal is organized.
            </p>
            <p>
              HerbalRoots takes its name from botanicals such as amla, neem, and Bhringraj. The botanical library describes their traditional uses, and the demonstration catalogue shows how a formulation page can present an ingredient list and directions.
            </p>
            <p>
              The journal covers practical topics such as wash-day routines and how to read a hair oil label. The university project demonstrates how to make that information easy to find, navigate, and share.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-cream">
              <img
                width={800}
                height={600}
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=webp&fit=crop&w=800&h=600&q=79"
                alt="Portrait of a woman with dark, wavy hair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Three Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          
          <div className="bg-white rounded-2xl p-8 border border-sage/50 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sage/50 text-forest flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-forest">
              Classical Formulation
            </h2>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              The sample catalogue draws inspiration from traditional <em>Kshirapak</em> and <em>Sneha Paka</em> practices. Products and formulations are illustrative examples for this project.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-sage/50 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sage/50 text-forest flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-forest">
              Editorial Scope
            </h2>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              This demonstration explores traditional uses and hair care topics. Its health content has not been independently fact-checked or clinically reviewed.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-sage/50 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sage/50 text-forest flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-forest">
              Academic SEO Project
            </h2>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              HerbalRoots is an academic demonstration of organic search engine optimization, topical authority, and web design. The site is a university project exploring Ayurvedic hair care through a journal, an ingredient library, and a demonstration catalogue.
            </p>
          </div>

        </div>

        {/* Lead Researcher Bio */}
        <div className="bg-cream/60 rounded-3xl p-8 sm:p-10 border border-sage/50 my-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 rounded-full bg-forest text-ivory flex items-center justify-center font-serif text-3xl font-bold shrink-0">
            A
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-terracotta font-bold">Project Credits</span>
            <h2 className="font-serif text-2xl font-bold text-forest">HerbalRoots Project Team</h2>
            <p className="text-xs text-muted">University project demonstration</p>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              This website is a prototype created to demonstrate content organization, user experience, and SEO concepts. It does not represent a medical practice or a real product manufacturer.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};
