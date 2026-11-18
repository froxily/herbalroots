import React from 'react';
import { Sun, Sparkles, Calendar, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HairCareRoutineSection: React.FC = () => {
  const steps = [
    {
      icon: Sun,
      timing: 'Daily Morning Ritual',
      title: 'Gentle Protection & Micro-Massage',
      details: [
        'Use finger pads to perform a light 2-minute dry scalp kneading exercise to relieve tension.',
        'Detangle gently from ends to roots using a wide-toothed neem wood comb.',
        'If hair ends are dry or exposed to harsh sun, press half a drop of Amla or Almond oil onto ends only.'
      ]
    },
    {
      icon: Sparkles,
      timing: 'Twice-Weekly Wash Day',
      title: 'Warm Oiling & Low-Lather Cleansing',
      details: [
        'Warm 10–15 ml of classical Bhringraj or Triphala oil in a warm water bath.',
        'Section scalp and apply with slow, circular massage. Leave for 45–60 minutes.',
        'Cleanse with lukewarm water and a sulphate-free herbal cleanser (e.g. Reetha & Shikakai) without scrubbing strands harshly.'
      ]
    },
    {
      icon: Calendar,
      timing: 'Weekly Deep Care',
      title: 'Botanical Hair Mask or Pack',
      details: [
        'Once a week, substitute oiling with a nutrient-dense botanical mask (Hibiscus or Fenugreek paste).',
        'Wrap hair in a warm damp towel for 20 minutes to help natural mucilage penetrate cuticle scales.',
        'Rinse thoroughly with cool water to seal cuticle fibers.'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-widest text-muted font-semibold bg-sage/40 px-3 py-1 rounded-full">
          Rhythmic Hair Wellness
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
          A Mindful Ayurvedic Hair Ritual
        </h2>
        <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
          Ayurvedic hair care is not a rigid prescription. Hair thrives when routines adapt dynamically to seasonal climate, personal scalp tendencies (Prakriti), and daily energy reserves.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-sage/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sage/40 text-forest flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-terracotta-dark uppercase tracking-wider block mb-1">
                  {step.timing}
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-4">
                  {step.title}
                </h3>
                <ul className="space-y-3 text-sm text-charcoal/80">
                  {step.details.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-botanical font-bold mt-1">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-sage/30 text-xs text-muted flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-botanical" />
                <span>Adjust duration based on scalp sensitivity</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/hair-fall-treatment-at-home/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-botanical underline underline-offset-4"
        >
          Read our comprehensive Hair Fall & Scalp Care Guide →
        </Link>
      </div>
    </section>
  );
};
