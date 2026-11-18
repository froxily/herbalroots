import { assetPath, imageFallback } from '../site';
import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, subtotal, isCartOpen, setIsCartOpen } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'enquiry' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    notes: '',
  });
  const [orderRef, setOrderRef] = useState('');
  const [formError, setFormError] = useState('');

  if (!isCartOpen) return null;

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in your name, email, and phone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    const generatedRef = 'HR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(generatedRef);

    // Save demonstration enquiry to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('herbalroots_enquiries') || '[]');
      existing.push({
        ref: generatedRef,
        date: new Date().toISOString(),
        customer: formData,
        items,
        subtotal
      });
      localStorage.setItem('herbalroots_enquiries', JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not save enquiry', e);
    }

    clearCart();
    setCheckoutStep('success');
    setFormError('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity" 
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutStep('cart');
        }}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-6 py-5 bg-cream/50 border-b border-sage/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-forest" />
              <h2 className="text-lg font-serif font-bold text-forest" id="slide-over-title">
                {checkoutStep === 'cart' ? 'Your Hair Care Bag' : checkoutStep === 'enquiry' ? 'Demo Product Enquiry' : 'Demo Enquiry Saved'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutStep('cart');
              }}
              className="p-1.5 rounded-full text-muted hover:text-charcoal hover:bg-cream transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            
            {checkoutStep === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-cream flex items-center justify-center text-botanical">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-base font-serif text-forest">Your bag is currently empty.</p>
                    <p className="text-sm text-muted max-w-xs mx-auto">
                      Explore our authentic Ayurvedic formulations, tailored for hair fall, dandruff, and strand resilience.
                    </p>
                    <Link
                      to="/shop/"
                      onClick={() => setIsCartOpen(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-forest-light transition-all"
                    >
                      Browse Formulations
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-3 bg-sage/20 rounded-lg text-xs text-forest flex items-start gap-2 border border-sage/40">
                      <span>🌿</span>
                      <p>
                        <strong>Demonstration Catalogue:</strong> All products are shown with sample INR pricing. Real payment card processing is disabled for this academic prototype.
                      </p>
                    </div>

                    <ul className="divide-y divide-sage/30">
                      {items.map(({ product, quantity }) => (
                        <li key={product.id} className="py-4 flex gap-4">
                          <img
                            width={800}
                            height={800}
                            loading="lazy"
                            decoding="async"
                            src={assetPath(product.image)}
                            onError={imageFallback('/images/prod-bhringraj-oil.svg')}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-lg border border-sage/40 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-forest truncate">{product.name}</h3>
                            <p className="text-xs text-muted mt-0.5">{product.volume} • ₹{product.price}</p>
                            
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center border border-sage rounded-md">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(product.id, quantity - 1)}
                                  className="p-1 hover:bg-cream text-charcoal"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="px-2.5 py-0.5 text-xs font-medium text-charcoal">{quantity}</span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(product.id, quantity + 1)}
                                  className="p-1 hover:bg-cream text-charcoal"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="text-xs font-semibold text-charcoal">₹{product.price * quantity}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(product.id)}
                                  className="text-muted hover:text-terracotta transition-colors"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'enquiry' && (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <p className="text-sm text-muted">Demo only: this enquiry stays in this browser and is not sent. No payment is taken.</p>
                <div className="bg-cream/40 p-3.5 rounded-lg border border-sage/30 text-xs text-forest">
                  <p className="font-semibold">Sample Order Request Summary</p>
                  <p className="text-muted mt-0.5">Total items: {totalItems} • Estimated Subtotal: ₹{subtotal}</p>
                </div>

                {formError && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                    {formError}
                  </div>
                )}

                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-medium text-charcoal mb-1">Full Name *</label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Verma"
                    className="w-full px-3 py-2 text-sm border border-sage rounded-md focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-medium text-charcoal mb-1">Email Address *</label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="radhika@example.com"
                    className="w-full px-3 py-2 text-sm border border-sage rounded-md focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-medium text-charcoal mb-1">Phone Number *</label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm border border-sage rounded-md focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-city" className="block text-xs font-medium text-charcoal mb-1">City / State</label>
                  <input
                    id="enquiry-city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full px-3 py-2 text-sm border border-sage rounded-md focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-notes" className="block text-xs font-medium text-charcoal mb-1">Specific Hair Concern or Message</label>
                  <textarea
                    id="enquiry-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Let us know your scalp condition or any questions..."
                    className="w-full px-3 py-2 text-sm border border-sage rounded-md focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="flex-1 px-4 py-2 text-xs font-medium text-charcoal border border-sage rounded-lg hover:bg-cream"
                  >
                    Back to Bag
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-forest hover:bg-forest-light rounded-lg transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-botanical mx-auto" />
                <h3 className="font-serif text-xl font-bold text-forest">Enquiry Received</h3>
                <p className="text-xs text-charcoal font-medium">Reference Code: <span className="font-mono text-terracotta">{orderRef}</span></p>
                <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
                  Your simulated enquiry was saved only in this browser. It was not sent to anyone, and no payment was processed.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep('cart');
                  }}
                  className="mt-4 px-6 py-2.5 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-forest-light"
                >
                  Continue Exploring
                </button>
              </div>
            )}

          </div>

          {/* Footer Subtotal and Actions */}
          {checkoutStep === 'cart' && items.length > 0 && (
            <div className="border-t border-sage/40 bg-cream/30 px-6 py-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Estimated Subtotal</span>
                <span className="font-serif text-lg font-bold text-forest">₹{subtotal}</span>
              </div>
              <p className="text-[11px] text-muted">Applicable taxes and shipping simulated in demo mode.</p>
              
              <button
                type="button"
                onClick={() => setCheckoutStep('enquiry')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-forest-light transition-all shadow-sm"
              >
                Proceed to Order Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={clearCart}
                className="w-full py-1 text-center text-[11px] text-muted hover:text-terracotta transition-colors"
              >
                Clear Bag
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
