import React from 'react';
import { Leaf } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IngredientCard } from '../components/IngredientCard';
import { INGREDIENTS } from '../data/ingredients';

export const IngredientsIndex: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Botanical Ingredients Library — Classical Ayurvedic Herbs | HerbalRoots"
        description="Explore the Materia Medica of Ayurvedic hair care: Bhringraj, Amla, Neem, Shikakai, and Hibiscus. Learn traditional doshic actions and modern pharmacological research."
        path="/ingredients/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Botanical Library' }]} />

        {/* Hero */}
        <div className="mt-4 mb-14 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/50 text-forest text-xs font-semibold tracking-widest uppercase">
            <Leaf className="w-3.5 h-3.5" />
            <span>Ayurvedic Materia Medica</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            Botanical Ingredients Library
          </h1>

          <p className="text-base text-charcoal/80 leading-relaxed">
            Understanding the herbs that touch your scalp. We examine traditional classical uses alongside published pharmacological research so you can choose hair rituals with confidence.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INGREDIENTS.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>

        {/* Science vs Tradition Clarification Callout */}
        <div className="mt-16 bg-cream/70 rounded-3xl p-8 sm:p-10 border border-sage/50 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-forest">
            Our Botanical Transparency Philosophy
          </h2>
          <p className="text-sm text-charcoal/80 leading-relaxed">
            In Ayurvedic tradition (Dravyaguna Vijnana), botanicals are classified by their taste (Rasa), post-digestive effect (Vipaka), potency (Virya), and specific hair affinity (Keshya Prabhava). While modern analytical chemistry isolates specific flavones, triterpenoids, and ellagic acids, we believe in honoring both perspectives without confusing historical tradition with clinical drug efficacy.
          </p>
        </div>

      </div>
    </>
  );
};
