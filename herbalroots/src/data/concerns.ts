export interface HairConcernDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  doshaAffinity: string;
  description: string;
  keyBotanicals: string[];
  recommendedArticleSlug: string;
  recommendedProductSlug: string;
  tips: string[];
}

export const HAIR_CONCERNS: HairConcernDetail[] = [
  {
    id: 'concern-hair-fall',
    slug: 'hair-fall',
    title: 'Hair Fall & Excessive Shedding',
    subtitle: 'Nourishing fragile roots and pacifying elevated Pitta-Vata stress.',
    doshaAffinity: 'Pitta & Vata Imbalance',
    description: 'Whether triggered by urban pollution, postpartum transitions, or seasonal shifts, addressing hair shedding requires calming the scalp and eliminating aggressive physical tugging.',
    keyBotanicals: ['Bhringraj (Keshraja)', 'Amla', 'Brahmi', 'Cold-Pressed Sesame'],
    recommendedArticleSlug: 'hair-fall-treatment-at-home',
    recommendedProductSlug: 'bhringraj-hair-oil',
    tips: [
      'Avoid vigorously towel-drying wet hair.',
      'Check dietary ferritin and serum iron levels.',
      'Apply warmed herbal oil twice weekly before washing.'
    ]
  },
  {
    id: 'concern-dandruff',
    slug: 'dandruff',
    title: 'Dandruff & Flaky Scalp',
    subtitle: 'Clarifying excess sebum and pacifying Malassezia yeast overgrowth.',
    doshaAffinity: 'Kapha & Pitta Congestion',
    description: 'Dandruff is frequently caused by microscopic yeast metabolizing sebum rather than dry skin. Clarifying botanical rinses and anti-microbial oils help restore scalp harmony.',
    keyBotanicals: ['Neem (Nimba)', 'Karanja', 'Tea Tree', 'Aloe Vera'],
    recommendedArticleSlug: 'dandruff-home-remedies',
    recommendedProductSlug: 'neem-scalp-care',
    tips: [
      'Do not coat a flaky scalp in heavy coconut oil overnight.',
      'Wash hair at least 2–3 times a week with a gentle cleanser.',
      'Use boiled neem water as a cooling post-wash scalp rinse.'
    ]
  },
  {
    id: 'concern-hair-growth',
    slug: 'hair-growth',
    title: 'Hair Growth & Density',
    subtitle: 'Energizing follicle microcirculation and prolonging the anagen growth cycle.',
    doshaAffinity: 'Asthi & Majja Dhatu Nourishment',
    description: 'Supporting healthy follicle density involves optimizing cellular nutrition, protecting emerging hair fibers from oxidative damage, and regular scalp kneading.',
    keyBotanicals: ['Bhringraj', 'Amla', 'Rosemary', 'Fenugreek'],
    recommendedArticleSlug: 'amla-for-hair-growth',
    recommendedProductSlug: 'bhringraj-hair-oil',
    tips: [
      'Incorporate 10 minutes of daily fingertip scalp massage.',
      'Ensure adequate daily protein and bioavailable Vitamin C.',
      'Protect hair from harsh noon ultraviolet exposure.'
    ]
  },
  {
    id: 'concern-dry-damaged',
    slug: 'dry-damaged',
    title: 'Dry & Damaged Strands',
    subtitle: 'Smoothing lifted cuticles and locking in natural botanical lipids.',
    doshaAffinity: 'Vata Excess (Ruksha / Dryness)',
    description: 'Frequent heat styling, hard water mineral deposits, and synthetic sulphates strip the protective cuticle. Deep herbal masks provide essential lipid replenishment.',
    keyBotanicals: ['Hibiscus (Japa)', 'Fenugreek Mucilage', 'Kokum Butter', 'Almond Oil'],
    recommendedArticleSlug: 'foods-for-healthy-hair',
    recommendedProductSlug: 'hibiscus-hair-mask',
    tips: [
      'Rinse with cool or lukewarm water to close cuticle scales.',
      'Use a botanical leave-in mask or drop of oil on damp ends.',
      'Detangle with a wide-toothed neem wood comb from tips upward.'
    ]
  },
  {
    id: 'concern-scalp-care',
    slug: 'scalp-care',
    title: 'Scalp Care & Microbiome',
    subtitle: 'Maintaining an optimal pH 5.5 acidic mantle for healthy follicle respiration.',
    doshaAffinity: 'Tridoshic Balance',
    description: 'The scalp is an extension of facial skin. Cleansing without stripping, preventing build-up, and nourishing the dermal environment is the key to thriving hair.',
    keyBotanicals: ['Shikakai', 'Reetha', 'Aloe Vera', 'Triphala'],
    recommendedArticleSlug: 'how-to-use-bhringraj-oil',
    recommendedProductSlug: 'herbal-shampoo',
    tips: [
      'Dilute shampoo in water before applying to avoid localized concentration.',
      'Gently exfoliate build-up once weekly.',
      'Never sleep with damp, tied-up hair.'
    ]
  }
];
