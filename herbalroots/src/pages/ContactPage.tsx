import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Hair Concern Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem('herbalroots_messages') || '[]');
        saved.push({
          id: 'MSG-' + Date.now(),
          date: new Date().toISOString(),
          ...formData
        });
        localStorage.setItem('herbalroots_messages', JSON.stringify(saved));
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setErrorMsg('Unable to submit inquiry at this moment. Please try again.');
      }
    }, 600);
  };

  return (
    <>
      <SEOHead
        title="Contact Us — Hair Care Inquiries & Botanical Questions | HerbalRoots"
        description="Have questions about our Ayurvedic hair care guides or botanical formulations? Try the academic project’s demonstration contact form."
        path="/contact/"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Hero */}
        <div className="mt-4 mb-14 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/50 text-forest text-xs font-semibold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>We Are Here to Assist</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            Connect with HerbalRoots
          </h1>

          <p className="text-base text-charcoal/80 leading-relaxed">
            Have questions about adapting an Ayurvedic hair ritual to your scalp? Or inquiries regarding our organic SEO research project? We welcome your thoughts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-sage/50 shadow-sm">
            <p className="text-sm text-muted mb-4">Demo only: messages stay in this browser and are not sent.</p>
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              Send a Message
            </h2>

            {status === 'success' ? (
              <div className="p-8 text-center space-y-4 bg-cream/40 rounded-2xl border border-sage/50 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-botanical mx-auto" />
                <h2 className="font-serif text-xl font-bold text-forest">Demo Message Saved</h2>
                <p className="text-xs text-charcoal/80 max-w-md mx-auto leading-relaxed">
                  This test message was saved only in this browser. It was not sent to anyone and will not receive a response.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'Hair Concern Inquiry',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-forest-light"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-charcoal mb-1">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-4 py-2.5 text-xs bg-cream/20 border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-charcoal mb-1">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-2.5 text-xs bg-cream/20 border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-charcoal mb-1">Phone Number (Optional)</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 text-xs bg-cream/20 border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-charcoal mb-1">Inquiry Subject</label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-cream/20 border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                    >
                      <option value="Hair Concern Inquiry">Scalp / Hair Concern</option>
                      <option value="Product Formulation Query">Botanical Formulations</option>
                      <option value="Academic SEO Collaboration">Academic SEO Project Inquiry</option>
                      <option value="Wholesale / Prototype">Prototype / Sourcing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-charcoal mb-1">Your Message or Scalp Questions *</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your hair type, current shedding level, or specific formulation question..."
                    className="w-full px-4 py-3 text-xs bg-cream/20 border border-sage rounded-xl focus:outline-none focus:ring-2 focus:ring-forest text-charcoal"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3.5 bg-forest hover:bg-forest-light text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Medical Note */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-cream/60 p-8 rounded-3xl border border-sage/50 space-y-6">
              <h2 className="font-serif text-xl font-bold text-forest">
                About the Demo Form
              </h2>
              
              <div className="space-y-4 text-xs text-charcoal/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-forest">HerbalRoots Project Team</p>
                    <p>CSET489 Search Engine Optimization</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-forest shrink-0" />
                  <div>
                    <p className="font-bold text-forest">Message Storage</p>
                    <p>Sample messages stay in this browser.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-forest shrink-0" />
                  <div>
                    <p className="font-bold text-forest">Demo Availability</p>
                    <p>Use the form any time to try the submission flow.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Caution Notice */}
            <div className="p-6 bg-white rounded-3xl border-l-4 border-terracotta border-y border-r border-sage/50 shadow-sm flex items-start gap-3.5 text-xs text-charcoal/85 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-forest mb-1">Urgent Clinical Situations</h2>
                <p>
                  HerbalRoots does not provide emergency medical advice. If you are experiencing sudden round bald patches, severe scalp burns, oozing lesions, or intense pain, please visit a certified dermatologist or healthcare provider without delay.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};
