import React from 'react';
import { FileText } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions — Website Terms of Use | HerbalRoots"
        description="Review the terms and conditions governing access to the HerbalRoots educational portal and demonstration product catalogue."
        path="/terms/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <div className="mt-4 mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/40 text-forest text-xs font-semibold uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Usage Agreement</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Terms & Conditions
          </h1>
          <p className="text-xs text-muted">
            Last updated: October 2026 • Effective immediately
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sage/50 shadow-sm space-y-8 text-sm text-charcoal leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using HerbalRoots (the "Site"), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              2. Educational & Research Nature of the Website
            </h2>
            <p>
              HerbalRoots is an academic and educational web project created to demonstrate organic search engine optimization, topical authority architecture, and WordPress deployment for Ayurvedic hair care topics. Information published here is synthesized from classical Ayurvedic literature and peer-reviewed scientific journals for intellectual enrichment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              3. Demonstration Product Catalogue
            </h2>
            <p>
              The product formulations, prices, and volumes displayed on the Site represent realistic prototype specifications. Placing items in the shopping bag or submitting an order enquiry generates an internal demonstration record and does not constitute a legally binding commercial contract of sale or shipment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              4. Intellectual Property & Fair Use
            </h2>
            <p>
              All original written educational guides, branding marks, and layout compositions are protected under applicable copyright and intellectual property standards. Educational citation with clear attribution and hyperlink back to HerbalRoots is welcomed under fair use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              5. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with the Site shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </section>

        </div>

      </div>
    </>
  );
};
