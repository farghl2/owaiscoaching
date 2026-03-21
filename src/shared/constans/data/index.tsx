export type NavLink = {
  id: string;
  href: string;
  labelKey: string;
};

export const NAV_LINKS_MOCK: NavLink[] = [
  {
    id: 'home',
    href: '#hero',
    labelKey: 'navigation.home',
  },
  {
    id: 'transformations',
    href: '#transformations',
    labelKey: 'navigation.transformations',
  },
  {
    id: 'coach',
    href: '#coach',
    labelKey: 'navigation.coach',
  },
  {
    id: 'plans',
    href: '#pricing',
    labelKey: 'navigation.plans',
  },
  {
    id: 'ready-programs',
    href: '#ready-programs',
    labelKey: 'navigation.ready_programs',
  },
  {
    id: 'faq',
    href: '#faq',
    labelKey: 'navigation.faq',
  },
];

export type Transformation = {
  id: string;
  clientName: string;
  beforeImage: string;
  afterImage: string;
  beforeValue: number;
  afterValue: number;
  metric: string;
  durationWeeks: number;
};

export const TRANSFORMATIONS_MOCK: Transformation[] = [
  {
    id: 't1',
    clientName: 'Omar H.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c1.jpeg',
    beforeValue: 62,
    afterValue: 79,
    metric: 'kg',
    durationWeeks: 8,
  },
  {
    id: 't2',
    clientName: 'Ahmed K.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c2.jpg',
    beforeValue: 65,
    afterValue: 71,
    metric: 'kg',
    durationWeeks: 1,
  },
  {
    id: 't3',
    clientName: 'Ahmed K.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c3.jpg',
    beforeValue: 101,
    afterValue: 83,
    metric: 'kg',
    durationWeeks: 3,
  },
  {
    id: 't4',
    clientName: 'Ahmed K.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c4.jpg',
    beforeValue: 52,
    afterValue: 78,
    metric: 'kg',
    durationWeeks: 12,
  },
  {
    id: 't5',
    clientName: 'Ahmed K.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c5.jpg',
    beforeValue: 67,
    afterValue: 82,
    metric: 'kg',
    durationWeeks: 3,
  },
  {
    id: 't6',
    clientName: 'Ahmed K.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c6.jpg',
    beforeValue: 108,
    afterValue: 80,
    metric: 'kg',
    durationWeeks: 3,
  },
  {
    id: 't7',
    clientName: 'Ahmed K.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c7.jpg',
    beforeValue: 62,
    afterValue: 79,
    metric: 'kg',
    durationWeeks: 8,
  },
  {
    id: 't8',
    clientName: 'Ahmed K.',
    beforeImage: '/transformations/c1.jpeg',
    afterImage: '/transformations/c8.jpg',
    beforeValue: 97,
    afterValue: 82,
    metric: 'kg',
    durationWeeks: 4,
  },
  

];

export type ProgramFeature = {
  id: string;
  iconName: string;
  titleKey: string;
  descriptionKey: string;
};

export const PROGRAM_FEATURES_MOCK: ProgramFeature[] = [
  {
    id: 'training',
    iconName: 'Dumbbell',
    titleKey: 'home.features.training.title',
    descriptionKey: 'home.features.training.description',
  },
  {
    id: 'diet',
    iconName: 'Utensils',
    titleKey: 'home.features.diet.title',
    descriptionKey: 'home.features.diet.description',
  },
  {
    id: 'followup',
    iconName: 'MessageCircle',
    titleKey: 'home.features.followup.title',
    descriptionKey: 'home.features.followup.description',
  },
];

export type PlanFeatureKey = string;

export type PricingOption = {
  durationKey: string;
  price: string;
  billingKey: string;
};

export type Plan = {
  id: string;
  tierKey: string;
  pricingOptions: PricingOption[];
  isPopular?: boolean;
  featureKeys: PlanFeatureKey[];
};

export const PLANS_MOCK: Plan[] = [
  {
    id: 'training',
    tierKey: 'home.pricing.training.title',
    isPopular: true,
    pricingOptions: [
      { durationKey: 'home.pricing.durations.3_months', price: '750', billingKey: 'home.pricing.billing.egp' },
      { durationKey: 'home.pricing.durations.6_months', price: '1250', billingKey: 'home.pricing.billing.egp' },
      { durationKey: 'home.pricing.durations.yearly', price: '2000', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.pricing.training.features.f1',
      'home.pricing.training.features.f2',
      'home.pricing.training.features.f3',
      'home.pricing.training.features.f4',
      'home.pricing.training.features.f5',
      'home.pricing.training.features.f6',
    ],
  },
  {
    id: 'medical',
    tierKey: 'home.pricing.medical.title',
    pricingOptions: [
      { durationKey: 'home.pricing.durations.2_months', price: '2000', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.pricing.medical.features.f1',
      'home.pricing.medical.features.f2',
      'home.pricing.medical.features.f3',
      'home.pricing.medical.features.f4',
      'home.pricing.medical.features.f5',
      'home.pricing.medical.features.f6',
      'home.pricing.medical.features.f7',
    ],
  },
  {
    id: 'book',
    tierKey: 'home.pricing.book.title',
    pricingOptions: [
      { durationKey: 'home.pricing.durations.one_time', price: '199', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.pricing.book.features.f1',
      'home.pricing.book.features.f2',
      'home.pricing.book.features.f3',
      'home.pricing.book.features.f4',
      'home.pricing.book.features.f5',
    ],
  },
];

export const READY_PROGRAMS_MOCK: Plan[] = [
  {
    id: 'arnold_5_days',
    tierKey: 'home.ready_programs.plans.arnold_5_days',
    pricingOptions: [
      { durationKey: 'home.pricing.durations.one_time', price: '249', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.ready_programs.features.f1',
      'home.ready_programs.features.f2',
      'home.ready_programs.features.f3',
      'home.ready_programs.features.f4',
    ],
  },
  {
    id: 'ppl_6_days',
    tierKey: 'home.ready_programs.plans.ppl_6_days',
    pricingOptions: [
      { durationKey: 'home.pricing.durations.one_time', price: '249', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.ready_programs.features.f1',
      'home.ready_programs.features.f2',
      'home.ready_programs.features.f3',
      'home.ready_programs.features.f4',
    ],
  },
  {
    id: 'upper_lower_4_days',
    tierKey: 'home.ready_programs.plans.upper_lower_4_days',
    pricingOptions: [
      { durationKey: 'home.pricing.durations.one_time', price: '249', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.ready_programs.features.f1',
      'home.ready_programs.features.f2',
      'home.ready_programs.features.f3',
      'home.ready_programs.features.f4',
    ],
  },
  {
    id: 'full_body_3_days',
    tierKey: 'home.ready_programs.plans.full_body_3_days',
    pricingOptions: [
      { durationKey: 'home.pricing.durations.one_time', price: '249', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.ready_programs.features.f1',
      'home.ready_programs.features.f2',
      'home.ready_programs.features.f3',
      'home.ready_programs.features.f4',
    ],
  },
  {
    id: 'arnold_upper_lower_5_days',
    tierKey: 'home.ready_programs.plans.arnold_upper_lower_5_days',
    pricingOptions: [
      { durationKey: 'home.pricing.durations.one_time', price: '249', billingKey: 'home.pricing.billing.egp' },
    ],
    featureKeys: [
      'home.ready_programs.features.f1',
      'home.ready_programs.features.f2',
      'home.ready_programs.features.f3',
      'home.ready_programs.features.f4',
    ],
  },
];

export type NutritionPlan = {
  id: string;
  labelKey: string;
  descriptionKey: string;
};

export const NUTRITION_PLANS_MOCK: NutritionPlan[] = [
  {
    id: 'plan-1',
    labelKey: 'home.nutrition.plan1.title',
    descriptionKey: 'home.nutrition.plan1.description',
  },
  {
    id: 'plan-2',
    labelKey: 'home.nutrition.plan2.title',
    descriptionKey: 'home.nutrition.plan2.description',
  },
  {
    id: 'plan-3',
    labelKey: 'home.nutrition.plan3.title',
    descriptionKey: 'home.nutrition.plan3.description',
  },
];

export type CoachProfile = {
  nameKey: string;
  titleKey: string;
  bioKey: string;
  photo: string;
  signature: string;
};

export const COACH_PROFILE_MOCK: CoachProfile = {
  nameKey: 'home.coach.name',
  titleKey: 'home.coach.title',
  bioKey: 'home.coach.bio',
  photo: '/about.jpg',
  signature: '',
};

export type FaqItem = {
  id: string;
  questionKey: string;
  answerKey: string;
};

export const FAQ_ITEMS_MOCK: FaqItem[] = [
  {
    id: 'faq1',
    questionKey: 'home.faq.q1.question',
    answerKey: 'home.faq.q1.answer',
  },
  {
    id: 'faq2',
    questionKey: 'home.faq.q2.question',
    answerKey: 'home.faq.q2.answer',
  },
  {
    id: 'faq3',
    questionKey: 'home.faq.q3.question',
    answerKey: 'home.faq.q3.answer',
  },
  {
    id: 'faq4',
    questionKey: 'home.faq.q4.question',
    answerKey: 'home.faq.q4.answer',
  },
];

export type Review = {
  id: string;
  image: string;
};

export const REVIEWS_MOCK: Review[] = [
  { id: 'r1', image: '/rev/c1.jpg' },
  { id: 'r2', image: '/rev/c2.jpg' },
  { id: 'r3', image: '/rev/c3.jpg' },
  { id: 'r4', image: '/rev/c4.jpg' },
  
];

export type FooterLink = {
  id: string;
  href: string;
  labelKey: string;
};

export const FOOTER_LINKS_MOCK: FooterLink[] = [
  {
    id: 'legal',
    href: '#legal',
    labelKey: 'home.footer.legal',
  },
  {
    id: 'policies',
    href: '#policies',
    labelKey: 'home.footer.policies',
  },
  {
    id: 'news',
    href: '#news',
    labelKey: 'home.footer.news',
  },
  {
    id: 'links',
    href: '#links',
    labelKey: 'home.footer.links',
  },
];
