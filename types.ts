export enum Language {
  EN = 'EN',
  ES = 'ES',
  QU = 'QU',
  AR = 'AR',
  JA = 'JA'
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  description: string | string[];
  cta?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  price?: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  text: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface TranslationData {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  about: SectionContent;
  services: {
    title: string;
    items: ServiceItem[];
    ausangateCta: {
      title: string;
      description: string;
      button: string;
    };
  };
  ausangate: {
    title: string;
    subtitle: string;
    description: string;
    itinerary: ItineraryDay[];
    cta: string;
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    info: string;
  };
  footer: {
    rights: string;
  };
}