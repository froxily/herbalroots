import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-bhringraj-oil',
    name: 'Keshya Bhringraj Intensive Hair Oil',
    slug: 'bhringraj-hair-oil',
    category: 'hair-oils',
    categoryLabel: 'Hair Oils',
    price: 549,
    comparisonPrice: 649,
    shortDescription: 'Traditional Kshirapak vidhi cold-infused Bhringraj and Brahmi oil in virgin black sesame base for scalp nourishment.',
    fullDescription: 'Our Keshya Bhringraj Intensive Hair Oil is crafted according to classical Ayurvedic Taila Paka principles. False daisy (Eclipta alba) leaves are simmered slowly in goat milk and pure cold-pressed black sesame oil to extract lipid-soluble botanicals. Regular scalp massage helps calm scalp tension, soften dry strands, and maintain scalp microbiome balance without mineral oils or synthetic fragrance.',
    ingredients: [
      'Sesamum Indicum (Black Sesame) Seed Oil',
      'Eclipta Prostrata (Bhringraj) Leaf Extract',
      'Bacopa Monnieri (Brahmi) Extract',
      'Emblica Officinalis (Amla) Fruit Extract',
      'Goat Milk (Kshirapak Vidhi)',
      'Rosmarinus Officinalis (Rosemary) Leaf Oil',
      'Tocopherol (Natural Vitamin E)'
    ],
    keyBotanicals: ['Bhringraj (Eclipta alba)', 'Brahmi (Bacopa monnieri)', 'Amla', 'Pure Black Sesame'],
    usageInstructions: [
      'Part hair into 4 sections using your fingertips or a wide-toothed neem comb.',
      'Take 10–15 ml of oil in a small bowl and warm gently in a warm water bath (do not overheat).',
      'Apply directly to the scalp with gentle circular motions using the pads of your fingers for 7–10 minutes.',
      'Leave on for at least 45 minutes, or overnight if your scalp tolerates overnight oils well.',
      'Rinse thoroughly with a mild, sulphate-free cleanser.'
    ],
    warnings: [
      'For external scalp and hair use only.',
      'Perform an inner-arm patch test 24 hours prior to first use.',
      'Avoid contact with eyes. In case of contact, rinse immediately with clean water.',
      'Do not apply on inflamed, broken, or weeping skin without consulting a physician.'
    ],
    image: '/images/prod-bhringraj-oil.svg',
    inStock: true,
    sku: 'HR-OIL-BHR-100',
    volume: '100 ml / 3.38 fl. oz.',
    concerns: ['hair-fall', 'hair-growth', 'scalp-care'],
    isDemo: true,
    seoTitle: 'Ayurvedic Bhringraj Hair Oil for Scalp & Roots | HerbalRoots',
    metaDescription: 'Classical Kshirapak Bhringraj hair oil infused in cold-pressed sesame oil. Formulated to soothe the scalp and nourish hair roots naturally.'
  },
  {
    id: 'prod-amla-oil',
    name: 'Triphala & Amla Vitalizing Scalp Oil',
    slug: 'amla-hair-oil',
    category: 'hair-oils',
    categoryLabel: 'Hair Oils',
    price: 499,
    comparisonPrice: 599,
    shortDescription: 'Fresh Indian gooseberry slow-cooked in cold-pressed coconut and almond oil for strand resilience and shine.',
    fullDescription: 'Formulated with ripe forest-harvested Amla (Emblica officinalis) alongside Haritaki and Bibhitaki, this lightweight botanical oil delivers bioavailable polyphenols and fatty acids to the hair shaft. Designed for normal to dry scalps prone to seasonal dullness, rough cuticles, and environmental oxidative stress.',
    ingredients: [
      'Cocos Nucifera (Virgin Coconut) Oil',
      'Prunus Amygdalus Dulcis (Sweet Almond) Oil',
      'Emblica Officinalis (Amla) Fruit Extract',
      'Terminalia Chebula (Haritaki) Extract',
      'Terminalia Bellerica (Bibhitaki) Extract',
      'Cymbopogon Flexuosus (Lemongrass) Leaf Oil',
      'Tocopherol'
    ],
    keyBotanicals: ['Indian Gooseberry (Amla)', 'Haritaki', 'Sweet Almond', 'Virgin Coconut'],
    usageInstructions: [
      'Dispense a small coin-sized amount into palms.',
      'Work through mid-lengths to ends first to seal in hydration.',
      'Lightly pat remaining oil onto the crown and temples.',
      'Can be used as a pre-shampoo deep conditioning treatment or a post-wash drop on damp ends.'
    ],
    warnings: [
      'Patch test recommended before first application.',
      'Store in a cool, dark place away from direct sunlight.',
      'Natural coconut oil may solidify below 24°C; warm bottle gently in warm water.'
    ],
    image: '/images/prod-amla-oil.svg',
    inStock: true,
    sku: 'HR-OIL-AML-100',
    volume: '100 ml / 3.38 fl. oz.',
    concerns: ['dry-damaged', 'hair-growth'],
    isDemo: true,
    seoTitle: 'Pure Amla Hair Oil for Stronger Hair Strands | HerbalRoots',
    metaDescription: 'Cold-pressed Amla and coconut hair oil enriched with Triphala. Delivers botanical shine, cuticle softness, and antioxidant scalp care.'
  },
  {
    id: 'prod-herbal-shampoo',
    name: 'Shikakai & Reetha Gentle Scalp Cleanser',
    slug: 'herbal-shampoo',
    category: 'shampoos',
    categoryLabel: 'Herbal Shampoos',
    price: 449,
    comparisonPrice: 529,
    shortDescription: 'Soapnut-derived gentle foam cleanser with soothing Aloe Vera and Bhringraj. Zero SLS, SLES, or parabens.',
    fullDescription: 'A truly gentle daily or bi-weekly cleanser that respects the delicate acid mantle of the human scalp (pH 5.2–5.5). Instead of harsh synthetic sulphate surfactants that strip protective lipids, our formula relies on naturally saponifying Reetha (Sapindus mukorossi) and Shikakai (Acacia concinna), coupled with soothing Aloe vera juice and hydrolyzed pea protein.',
    ingredients: [
      'Aqua (Purified Water)',
      'Sapindus Mukorossi (Reetha) Fruit Extract',
      'Acacia Concinna (Shikakai) Fruit Extract',
      'Coco-Glucoside (Plant-derived surfactant)',
      'Aloe Barbadensis (Aloe Vera) Leaf Juice',
      'Glycerin (Vegetable derived)',
      'Eclipta Prostrata Extract',
      'Hydrolyzed Pea Protein',
      'Potassium Sorbate',
      'Sodium Benzoate',
      'Citric Acid'
    ],
    keyBotanicals: ['Reetha (Soapnut)', 'Shikakai', 'Aloe Vera Juice', 'Hydrolyzed Pea Protein'],
    usageInstructions: [
      'Thoroughly wet hair with lukewarm (never scalding hot) water.',
      'Dilute 10–15 ml cleanser with an equal amount of water in your palm or mug.',
      'Massage gently into roots and scalp for 60–90 seconds to create a mild botanical lather.',
      'Allow foam to run naturally through lengths while rinsing cleanly with water.'
    ],
    warnings: [
      'Avoid contact with eyes. If lather enters eyes, rinse with copious cold water.',
      'Contains natural saponins which may cause mild transient eye stinging.'
    ],
    image: '/images/prod-herbal-shampoo.svg',
    inStock: true,
    sku: 'HR-SHM-SHK-200',
    volume: '200 ml / 6.76 fl. oz.',
    concerns: ['hair-fall', 'dandruff', 'scalp-care'],
    isDemo: true,
    seoTitle: 'Sulphate-Free Shikakai & Reetha Herbal Cleanser | HerbalRoots',
    metaDescription: 'Gentle pH-balanced Ayurvedic herbal shampoo with saponin-rich soapnut, shikakai, and aloe vera. Cleanses without stripping essential lipids.'
  },
  {
    id: 'prod-hibiscus-mask',
    name: 'Japa Pushpa Deep Moisture Hair Mask',
    slug: 'hibiscus-hair-mask',
    category: 'hair-masks',
    categoryLabel: 'Hair Masks',
    price: 599,
    comparisonPrice: 699,
    shortDescription: 'Rich mucilage-packed Hibiscus petal and Fenugreek intensive conditioning crème for frizzy and brittle hair.',
    fullDescription: 'Sun-dried Hibiscus (Japa Pushpa) petals are naturally rich in plant mucilage and amino acids that coat coarse, vulnerable hair shafts to seal moisture. Blended with sprouted Fenugreek (Methi) seed paste and raw kokum butter, this weekly intensive treatment softens brittle textures, improves combability, and reduces friction-induced breakage.',
    ingredients: [
      'Aqua',
      'Garcinia Indica (Kokum) Seed Butter',
      'Cetearyl Alcohol (Plant derived)',
      'Hibiscus Rosa-Sinensis (Hibiscus) Flower Extract',
      'Trigonella Foenum-Graecum (Fenugreek) Seed Extract',
      'Glyceryl Stearate',
      'Behentrimonium Chloride',
      'Panthenol (Pro-Vitamin B5)',
      'Lavender Angustifolia Oil',
      'Ethylhexylglycerin'
    ],
    keyBotanicals: ['Hibiscus Flower', 'Fenugreek Seed', 'Kokum Butter', 'Pro-Vitamin B5'],
    usageInstructions: [
      'After cleansing, gently squeeze excess moisture from hair strands with a microfiber towel.',
      'Scoop a generous dollop and distribute evenly from mid-lengths to tips.',
      'Use a wide-tooth comb to gently detangle.',
      'Leave on for 15–20 minutes. For deeper penetration, wrap head in a warm damp towel.',
      'Rinse thoroughly with cool water to seal hair cuticles.'
    ],
    warnings: [
      'Formulated for hair strands; minimize direct contact with roots on oily scalps.',
      'Do a patch test before first application.'
    ],
    image: '/images/prod-hibiscus-mask.svg',
    inStock: true,
    sku: 'HR-MSK-HIB-150',
    volume: '150 g / 5.29 oz.',
    concerns: ['dry-damaged', 'hair-fall'],
    isDemo: true,
    seoTitle: 'Hibiscus Deep Moisture Conditioning Hair Mask | HerbalRoots',
    metaDescription: 'Hydrating Ayurvedic hair mask with red hibiscus mucilage, sprouted methi, and kokum butter to replenish dry, brittle hair fibers.'
  },
  {
    id: 'prod-neem-scalp',
    name: 'Nimba Clarifying Scalp Purifying Elixir',
    slug: 'neem-scalp-care',
    category: 'hair-oils',
    categoryLabel: 'Hair Oils',
    price: 479,
    comparisonPrice: 549,
    shortDescription: 'Targeted scalp oil with fresh Neem, Tea Tree, and Karanja to soothe itchy, flaky, and congested scalps.',
    fullDescription: 'Formulated specifically for scalps experiencing stubborn seasonal flakes, itching, or product build-up. Neem (Azadirachta indica) possesses documented anti-microbial constituents including nimbidin and azadirachtin. Paired with Karanja oil and micro-dosed Australian tea tree oil, this soothing elixir helps calm scalp discomfort without aggravating natural sebum production.',
    ingredients: [
      'Pongamia Pinnata (Karanja) Seed Oil',
      'Azadirachta Indica (Neem) Leaf Extract',
      'Brassica Alba (Mustard) Seed Oil',
      'Melaleuca Alternifolia (Tea Tree) Leaf Oil',
      'Eucalyptus Globulus Leaf Oil',
      'Curcuma Longa (Turmeric) Root Extract',
      'Tocopherol'
    ],
    keyBotanicals: ['Neem (Nimba)', 'Karanja Seed Oil', 'Cold-Pressed Mustard Oil', 'Wild Turmeric'],
    usageInstructions: [
      'Use dropper to apply 5–8 drops directly to areas of visible scalp flaking or itchiness.',
      'Gently massage into the scalp using circular fingertip motions.',
      'Leave on for 30–45 minutes prior to washing.',
      'Use 2 times weekly during flare-ups, and once weekly for maintenance.'
    ],
    warnings: [
      'Neem has a distinct, earthy herbal scent that is completely natural.',
      'Do not apply to open cuts, scratches, or severely excoriated skin.',
      'If irritation develops, discontinue use immediately.'
    ],
    image: '/images/prod-neem-scalp.svg',
    inStock: true,
    sku: 'HR-OIL-NEM-50',
    volume: '50 ml / 1.69 fl. oz.',
    concerns: ['dandruff', 'scalp-care'],
    isDemo: true,
    seoTitle: 'Neem Clarifying Scalp Oil for Dandruff & Itch Relief | HerbalRoots',
    metaDescription: 'Clarifying Ayurvedic scalp elixir with neem, karanja, and tea tree oils. Designed to soothe flakes, ease itch, and clarify congested roots.'
  },
  {
    id: 'prod-shikakai-powder',
    name: 'Kesh Sudha Pure Shikakai Herbal Pod Cleanser',
    slug: 'shikakai-hair-cleanser',
    category: 'shampoos',
    categoryLabel: 'Herbal Shampoos',
    price: 389,
    comparisonPrice: 449,
    shortDescription: 'Micro-milled organic Shikakai and Methi powder for a zero-waste, gentle traditional hair wash ritual.',
    fullDescription: 'The quintessential ancient Indian hair cleanser in its purest form. Wild-harvested Acacia concinna pods are sun-dried and stone-ground into an ultra-fine powder. When whisked with warm water or herbal decoction, it forms a low-lather clarifying paste that gently lifts excess sebum while keeping hair strands conditioned and soft.',
    ingredients: [
      '100% Pure Organic Acacia Concinna (Shikakai) Fruit Pod Powder',
      'Trigonella Foenum-Graecum (Fenugreek) Powder (5%)',
      'Emblica Officinalis (Amla) Fruit Powder (5%)'
    ],
    keyBotanicals: ['Raw Shikakai Pods', 'Organic Methi Seeds', 'Wild Forest Amla'],
    usageInstructions: [
      'Mix 2–3 tablespoons of powder with 1 cup of warm water into a smooth, lump-free paste.',
      'Let sit for 10 minutes to allow natural saponins to activate.',
      'Apply to wet scalp and hair like a hair pack.',
      'Gently massage scalp for 2–3 minutes.',
      'Rinse out thoroughly with plenty of lukewarm water until water runs clear.'
    ],
    warnings: [
      'Keep eyes closed tightly during application and rinsing. Shikakai powder can sting sensitive eyes.',
      'Always store in a dry, airtight container to prevent moisture clumps.'
    ],
    image: '/images/prod-shikakai-powder.svg',
    inStock: true,
    sku: 'HR-PWD-SHK-100',
    volume: '100 g / 3.52 oz.',
    concerns: ['hair-fall', 'scalp-care'],
    isDemo: true,
    seoTitle: 'Organic Shikakai Pod Hair Cleanser Powder | HerbalRoots',
    metaDescription: '100% pure stone-milled Shikakai powder for natural, low-foaming hair washes. Preserves hair cuticle health without synthetic surfactants.'
  }
];
