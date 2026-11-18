import { Ingredient } from '../types';

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'ing-amla',
    slug: 'amla',
    name: 'Amla',
    botanicalName: 'Phyllanthus emblica / Emblica officinalis',
    sanskritName: 'Amalaki (धात्री)',
    hindiName: 'Amla (आंवला)',
    overview: 'Amla, also known as Indian Gooseberry, is revered in classical Ayurvedic texts as "Dhatri" — the divine foster mother and universal Rasayana. It is one of nature’s richest botanical sources of ascorbic acid, gallic acid, and ellagitannins.',
    traditionalRole: 'In Charaka Samhita and Sushruta Samhita, Amalaki is celebrated for balancing all three doshas (Vata, Pitta, Kapha), with a special affinity for pacifying excess Pitta heat in the scalp that is traditionally associated with premature graying and follicle shedding.',
    scientificPerspective: 'Modern pharmacological investigations reveal that Amla extracts display robust free-radical scavenging capacity. In vitro and rodent model studies suggest Amla phytochemicals can inhibit 5-alpha reductase activity (the enzyme responsible for converting testosterone to dihydrotestosterone / DHT) and stimulate dermal papilla cell proliferation, though large-scale human double-blind clinical trials are ongoing.',
    practicalUse: [
      'Infused into cold-pressed oils (sesame or coconut) as a pre-shampoo deep conditioning ritual.',
      'Mixed as a fine fruit powder with curd, aloe vera, or water for a bi-weekly rejuvenating scalp pack.',
      'Consumed as fresh juice or Chyawanprash to provide bioavailable dietary Vitamin C and iron co-factors.'
    ],
    precautionNotes: 'Amla is acidic in raw juice form; when applied directly without dilution, it may cause mild dryness or tingling on sensitive scalps. Always conduct an elbow patch test.',
    image: '/images/ing-amla.svg',
    imageAlt: 'Fresh green amla gooseberries with traditional mortar and pestle',
    relatedArticleSlugs: ['amla-for-hair-growth', 'hair-fall-treatment-at-home', 'foods-for-healthy-hair'],
    relatedProductSlugs: ['amla-hair-oil', 'shikakai-hair-cleanser']
  },
  {
    id: 'ing-bhringraj',
    slug: 'bhringraj',
    name: 'Bhringraj',
    botanicalName: 'Eclipta prostrata / Eclipta alba',
    sanskritName: 'Keshraja (केशराज)',
    hindiName: 'Bhringraj (भृंगराज / भांगरा)',
    overview: 'Revered as "Keshraja" or the "King of Hair", Bhringraj is a modest creeping herb with small daisy-like blossoms found along moist banks across India. It forms the backbone of traditional Ayurvedic trichology.',
    traditionalRole: 'Charaka categorized Bhringraj among Rasayana herbs that nourish the deepest bodily tissues (Asthi and Majja Dhatus). Its cooling, bitter, and pungent attributes are believed to dispel stagnant heat from the crown, soothe restless mental tension, and encourage robust follicle anchoring.',
    scientificPerspective: 'Bhringraj is studied for its plant compounds, but this demonstration does not establish that it treats hair loss. Research findings should be checked against original sources and are not a substitute for clinical advice.',
    practicalUse: [
      'Warm Kshirapak infused sesame oil massaged gently into the crown and temple points for 10 minutes.',
      'Fresh leaf paste applied to the scalp roots as a clarifying botanical pack for 30 minutes before washing.',
      'Combined with Brahmi and Amla in hair cleansers to preserve hair length resilience.'
    ],
    precautionNotes: 'Botanical products can irritate skin. Patch test before use, stop if irritation occurs, and consult a clinician about persistent scalp symptoms.',
    image: '/images/ing-bhringraj.svg',
    imageAlt: 'Bhringraj botanical leaves and amber glass herbal oil dropper bottle',
    relatedArticleSlugs: ['how-to-use-bhringraj-oil', 'hair-fall-treatment-at-home', 'hair-fall-after-delivery'],
    relatedProductSlugs: ['bhringraj-hair-oil', 'herbal-shampoo']
  },
  {
    id: 'ing-neem',
    slug: 'neem',
    name: 'Neem',
    botanicalName: 'Azadirachta indica',
    sanskritName: 'Arishta (अरिष्ट)',
    hindiName: 'Neem (नीम)',
    overview: 'Neem is known as "Arishta" in Sanskrit, meaning "reliever of sickness" or "the imperishable." A cornerstone of village medicine and tropical ethnobotany, virtually every part of the neem tree contains potent bioactive limonoids.',
    traditionalRole: 'Ayurveda uses bitter, astringent Neem to pacify aggravated Kapha and Pitta doshas. It is the premier herb for cleansing impurities from the skin (Kushthaghna) and clearing the scalp of micro-organisms, excess oiliness, and stubborn dandruff flakes.',
    scientificPerspective: 'Neem leaves and seed oil contain active triterpenoids including azadirachtin, nimbin, and nimbidol. In vitro microbiological evaluations have confirmed strong fungistatic activity against Malassezia furfur and Malassezia globosa — the yeast species centrally implicated in seborrheic dermatitis and common scalp dandruff.',
    practicalUse: [
      'Boiled neem leaf water used as a final cooling scalp rinse after shampooing.',
      'Diluted neem seed oil (5–10% in sesame or jojoba oil) applied specifically to flaking scalp areas.',
      'Neem powder mixed with clay (Multani mitti) or curd as a clarifying scalp detox pack.'
    ],
    precautionNotes: 'Undiluted pure neem seed oil is extremely concentrated, pungent, and can cause cutaneous contact dermatitis on sensitive or broken skin. Always dilute properly and never apply to open wounds.',
    image: '/images/ing-neem.svg',
    imageAlt: 'Fresh green neem leaves on wooden board',
    relatedArticleSlugs: ['dandruff-home-remedies', 'hair-fall-treatment-at-home'],
    relatedProductSlugs: ['neem-scalp-care', 'herbal-shampoo']
  },
  {
    id: 'ing-shikakai',
    slug: 'shikakai',
    name: 'Shikakai',
    botanicalName: 'Senegalia rugata / Acacia concinna',
    sanskritName: 'Shikha-kaaya (शिखाकाय)',
    hindiName: 'Shikakai (शिककाई)',
    overview: 'Shikakai translates directly to "fruit for the hair." The woody pods of this climbing Asian shrub have served as the traditional, natural shampoo of the Indian subcontinent for over two millennia.',
    traditionalRole: 'Valued for its mild cleaning action that removes dirt and excess grease without disrupting the scalp’s protective hydrolipidic barrier. It leaves hair silky and manageable without requiring synthetic chemical conditioners.',
    scientificPerspective: 'Shikakai pods are packed with natural triterpenoid saponins that produce a gentle, low-lather foam with an acidic pH of 4.5–5.5. Because this mirrors the natural acidic mantle of healthy hair cuticles, it minimizes the swelling and lifting of cuticle scales associated with alkaline conventional soaps.',
    practicalUse: [
      'Boiled alongside Reetha pods to create an all-natural liquid shampoo decoction.',
      'Finely ground pod powder used as an exfoliating, gentle wash paste.',
      'Blended with hibiscus flower powder to add detangling slip and shine.'
    ],
    precautionNotes: 'Shikakai contains active saponins that cause immediate stinging when brought into contact with ocular mucous membranes. Close eyes tightly when rinsing.',
    image: '/images/ing-shikakai.svg',
    imageAlt: 'Dried shikakai pods with natural clay wash bowl',
    relatedArticleSlugs: ['hair-fall-treatment-at-home', 'dandruff-home-remedies'],
    relatedProductSlugs: ['herbal-shampoo', 'shikakai-hair-cleanser']
  },
  {
    id: 'ing-hibiscus',
    slug: 'hibiscus',
    name: 'Hibiscus',
    botanicalName: 'Hibiscus rosa-sinensis',
    sanskritName: 'Japa Pushpa (जपा पुष्प)',
    hindiName: 'Gudhal (गुड़हल)',
    overview: 'The vibrant crimson blossoms and velvety leaves of Hibiscus have long decorated temple courtyards and Ayurvedic apothecaries across southern and eastern India as an indispensable conditioning remedy.',
    traditionalRole: 'Ayurveda views Japa as a cooling, moisture-replenishing botanical (Snigdha and Sheeta) ideal for taming unruly frizz, split ends, and dry heat damage caused by harsh weather.',
    scientificPerspective: 'Biochemical assays show hibiscus flowers and leaves are extraordinarily rich in polysaccharides and mucilage. These long-chain sugar molecules bind water and form a micro-fine protective polymeric film over individual hair fibers, enhancing strand tensile strength, elasticity, and light reflection.',
    practicalUse: [
      'Fresh petals and leaves crushed into a slippery green paste and applied as a deep hair conditioning mask.',
      'Dried flower petals infused in warm coconut oil until it turns deep mahogany red.',
      'Used as an herbal tea rinse to impart luster to dark hair shades.'
    ],
    precautionNotes: 'Generally safe and gentle for all hair types. Hypoallergenic patch test is still sensible for persons with pollen allergies.',
    image: '/images/ing-hibiscus.svg',
    imageAlt: 'Vibrant red hibiscus flower with fresh petals on cream stone',
    relatedArticleSlugs: ['hair-fall-treatment-at-home', 'amla-for-hair-growth'],
    relatedProductSlugs: ['hibiscus-hair-mask', 'amla-hair-oil']
  },
  {
    id: 'ing-fenugreek',
    slug: 'fenugreek',
    name: 'Fenugreek',
    botanicalName: 'Trigonella foenum-graecum',
    sanskritName: 'Methika (मेथिका)',
    hindiName: 'Methi (मेथी)',
    overview: 'A staple in Indian kitchens and Ayurvedic medicine alike, tiny amber fenugreek seeds are nutritional powerhouses loaded with dietary protein, nicotinic acid, and mucilage.',
    traditionalRole: 'Classified as Ushna (warming) and pacifying to Vata and Kapha, Methi is traditionally used to improve scalp circulation, fortify weak roots, and detangle knotted dry hair.',
    scientificPerspective: 'Fenugreek contains substantial amounts of lecithin, a phospholipid that lubricates and coats vulnerable hair fibers. Clinical dermatological research on fenugreek seed extracts has documented positive effects on hair volume and cuticle smoothness, in part due to its amino acid profile which supports keratin synthesis.',
    practicalUse: [
      'Soaked overnight in water, ground into a smooth paste, and applied to roots for 20 minutes.',
      'Methi water used as a pre-wash spray to soften stubborn product buildup and soothe dryness.',
      'Sprouted seeds consumed as part of balanced hair-friendly nutrition.'
    ],
    precautionNotes: 'Must be rinsed out very thoroughly with plenty of water. If allowed to dry rock-hard on hair strands, the paste can be difficult to remove without causing friction.',
    image: '/images/ing-fenugreek.svg',
    imageAlt: 'Golden aromatic fenugreek seeds in brass spoon',
    relatedArticleSlugs: ['hair-fall-treatment-at-home', 'foods-for-healthy-hair', 'onion-juice-for-hair-fall'],
    relatedProductSlugs: ['hibiscus-hair-mask', 'shikakai-hair-cleanser']
  }
];
