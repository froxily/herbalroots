import React from 'react';
import { AlertTriangle, ShieldAlert, HeartPulse } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Disclaimer: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Health & Medical Disclaimer — Botanical Care Clarity | HerbalRoots"
        description="Important health, medical, and cosmetic disclaimer for HerbalRoots. Distinguishing traditional Ayurveda from clinical medical diagnoses."
        path="/disclaimer/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'Medical & Product Disclaimer' }]} />

        <div className="mt-4 mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Essential Health Notice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Health & Botanical Product Disclaimer
          </h1>
          <p className="text-xs text-muted">
            Please read this information carefully before following any at-home recommendations.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sage/50 shadow-sm space-y-8 text-sm text-charcoal leading-relaxed">
          
          {/* Main Warning Box */}
          <div className="p-6 bg-cream/70 rounded-2xl border-l-4 border-terracotta border-y border-r border-sage/40 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-terracotta shrink-0 mt-0.5" />
            <div>
              <h2 className="font-serif text-lg font-bold text-forest mb-1">
                Not Medical Advice
              </h2>
              <p className="text-xs text-charcoal/85 leading-relaxed">
                The content provided on HerbalRoots—including articles, ingredient breakdowns, weekly routines, product descriptions, and community responses—is intended exclusively for educational, general wellness, and academic study purposes. It is <strong>not</strong> a substitute for professional medical advice, clinical trichological examination, diagnosis, or treatment.
              </p>
            </div>
          </div>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-forest">
              1. Distinction Between Tradition and Clinical Evidence
            </h3>
            <p>
              Ayurveda is a traditional system of healthcare native to the Indian subcontinent with centuries of historical observation. On HerbalRoots, we explicitly distinguish between:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-charcoal/85">
              <li>
                <strong>Classical Doshic Observations:</strong> Traditional concepts documented in ancient Samhitas regarding Pitta pacification, cooling herbs, and tissue nourishment (Dhatus).
              </li>
              <li>
                <strong>Modern Pharmacological Inquiries:</strong> In vitro, animal model, or preliminary human studies on active botanicals (e.g. wedelolactone, ellagitannins, azadirachtin).
              </li>
              <li>
                <strong>No Guaranteed Claims:</strong> We never state that any herb, oil, mask, or ritual will "100% cure hair loss", reverse genetic male or female pattern baldness, or instantly regenerate follicles.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-forest">
              2. Cutaneous Allergies & Mandatory Patch Testing
            </h3>
            <p>
              Natural and botanical ingredients can trigger allergic contact dermatitis, irritation, redness, or burning in sensitized individuals. Potent extracts such as raw onion juice, unrefined mustard oil, pure neem seed oil, and essential oils carry known contact sensitization risks.
            </p>
            <p className="font-semibold text-xs text-forest">
              Always perform a 24-hour patch test on the inner forearm before applying any new herbal preparation to your scalp or hair.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-forest">
              3. Pregnancy, Postpartum & Lactation Caution
            </h3>
            <p>
              Hormonal shifts during and after pregnancy require specialized medical guidance. New and expecting mothers should never begin oral botanical supplements, concentrated essential oil applications, or aggressive home treatments without prior consultation and explicit clearance from their obstetrician, pediatrician, or healthcare provider.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-terracotta" />
              <span>4. When to Consult a Physician Immediately</span>
            </h3>
            <p>
              Do not rely on at-home remedies or herbal oils if you experience any of the following clinical signs:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal/85">
              <li>Sudden round or oval patches of complete baldness (suspected Alopecia Areata).</li>
              <li>Visible scaling, intense pain, bleeding, oozing crusts, or pustules on the scalp.</li>
              <li>Rapid loss of eyebrows, eyelashes, or body hair.</li>
              <li>Excessive shedding accompanied by persistent fatigue, unexplained weight changes, or irregular menstrual cycles.</li>
            </ul>
          </section>

        </div>

      </div>
    </>
  );
};
