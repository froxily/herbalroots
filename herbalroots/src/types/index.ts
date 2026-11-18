export type HairConcernType = 'hair-fall' | 'dandruff' | 'hair-growth' | 'dry-damaged' | 'scalp-care';

export type ProductCategory = 'hair-oils' | 'shampoos' | 'hair-masks';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  comparisonPrice?: number;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
  keyBotanicals: string[];
  usageInstructions: string[];
  warnings?: string[];
  image: string;
  inStock: boolean;
  sku: string;
  volume: string;
  concerns: HairConcernType[];
  isDemo: boolean;
  seoTitle: string;
  metaDescription: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string[];
  links?: { label: string; href: string }[];
  subsections?: {
    heading: string;
    content: string[];
  }[];
}

export interface Article {
  id: string;
  slug: string; // e.g. "onion-juice-for-hair-fall" or "hair-fall-treatment-at-home"
  isPillar?: boolean;
  path: string; // e.g. "/hair-fall-treatment-at-home/" or "/blog/onion-juice-for-hair-fall/"
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  concerns: HairConcernType[];
  excerpt: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  publishedDate: string;
  updatedDate?: string;
  readingTimeMinutes: number;
  featuredImage: string;
  imageAlt: string;
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  relatedArticleSlugs: string[];
  relatedProductSlugs: string[];
  evidenceDisclaimer: string;
}

export interface Ingredient {
  id: string;
  slug: string;
  name: string;
  botanicalName: string;
  sanskritName: string;
  hindiName: string;
  overview: string;
  traditionalRole: string;
  scientificPerspective: string;
  practicalUse: string[];
  precautionNotes: string;
  image: string;
  imageAlt: string;
  relatedArticleSlugs: string[];
  relatedProductSlugs: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
