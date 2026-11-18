import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please confirm that you agree to receive educational hair care updates.');
      return;
    }

    setStatus('loading');

    // Simulate persistent local storage demo subscription
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('herbalroots_subscribers') || '[]');
        if (stored.includes(email.trim().toLowerCase())) {
          setStatus('error');
          setErrorMessage('This email is already subscribed to our educational journal.');
          return;
        }
        stored.push(email.trim().toLowerCase());
        localStorage.setItem('herbalroots_subscribers', JSON.stringify(stored));
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setErrorMessage('Unable to complete subscription at this moment. Please try again.');
      }
    }, 600);
  };

  return (
    <section className="bg-cream/70 border-y border-sage/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest text-sage shadow-sm mb-2">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
          The Ayurvedic Hair Care Dispatch
        </h2>

        <p className="text-sm sm:text-base text-charcoal/80 max-w-xl mx-auto leading-relaxed">
          Try the newsletter sign-up demonstration. Your entry stays in this browser; no emails will be sent.
        </p>

        {status === 'success' ? (
          <div className="p-6 bg-white rounded-2xl border border-sage/60 max-w-md mx-auto space-y-3 shadow-sm animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-botanical mx-auto" />
            <h3 className="font-serif text-xl font-bold text-forest">You Are Subscribed</h3>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              Thank you for joining our herbal wellness community. Your test entry was saved only in this browser. No newsletter emails will be sent.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
            {status === 'error' && errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-sm bg-white border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-forest hover:bg-forest-light text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="newsletter-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-sage text-forest focus:ring-forest"
              />
              <label htmlFor="newsletter-consent" className="text-xs text-muted leading-tight">
                I agree to receive educational emails from HerbalRoots. Read our{' '}
                <Link to="/privacy-policy/" className="underline hover:text-forest">
                  Privacy Policy
                </Link>
                . You can unsubscribe at any time.
              </label>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
