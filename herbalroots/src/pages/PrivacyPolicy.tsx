import React from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AnalyticsPreference } from '../components/Analytics';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy — Transparent Data Practices | HerbalRoots"
        description="Learn what the HerbalRoots academic demo saves in your browser and how to clear sample form submissions and shopping bag data."
        path="/privacy-policy/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="mt-4 mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/40 text-forest text-xs font-semibold uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Transparency</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            HerbalRoots Privacy Policy
          </h1>
          <p className="text-xs text-muted">
            Last updated: November 2026
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sage/50 shadow-sm space-y-8 text-sm text-charcoal leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <Eye className="w-5 h-5 text-botanical" />
              <span>1. Overview & Academic Context</span>
            </h2>
            <p>
              HerbalRoots operates as a specialized educational web portal and academic Search Engine Optimization (SEO) research prototype. We are committed to complete transparency regarding what data is stored, how it is handled, and what technologies are used. We do not sell, rent, or trade your personal information to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-botanical" />
              <span>2. Information We Collect and Store</span>
            </h2>
            <p>
              Depending on how you interact with HerbalRoots, the following information may be processed:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Browser Local Storage:</strong> To provide a seamless experience without intrusive server-side session cookies, your shopping bag items (<code>herbalroots_cart_v1</code>), newsletter subscription confirmations (<code>herbalroots_subscribers</code>), and sample product inquiries are maintained directly inside your web browser’s local storage.
              </li>
              <li>
                <strong>Contact Form Data:</strong> The demo saves the name, email address, optional telephone number, subject and message in this browser. Use sample details to try the form.
              </li>
              <li>
                <strong>Hosting:</strong> Your browser requests site files from the hosting provider. The About page loads a portrait from Unsplash.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              3. Analytics & Measurement
            </h2>
            <AnalyticsPreference />
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              4. Payment & Financial Data Disclaimer
            </h2>
            <p>
              <strong>We do not collect, process, or store credit card, debit card, UPI PINs, or banking credentials.</strong> In this prototype deployment, product checkout operates strictly in demonstration catalogue mode for order enquiries. No real financial transactions are executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest">
              5. Your Rights & Data Erasure
            </h2>
            <p>
              Clear the site data for this site in your browser settings to remove locally saved bag items, sample subscriptions and demo messages.
            </p>
          </section>

        </div>

      </div>
    </>
  );
};
