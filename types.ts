export enum Language {
  EN = 'EN',
  ES = 'ES',
  QU = 'QU',
  AR = 'AR',
  JA = 'JA',
  HU = 'HU',
  SA = 'SA'
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
  description: string | string[];
}

export interface RetreatDay {
    title: string;
    content: string;
    accommodation?: string;
}

export interface PreparationItem {
  label: string;
  text: string;
}

export interface PreparationSection {
  title: string;
  description?: string;
  items: PreparationItem[];
}

export interface PreparationData {
  title: string;
  subtitle: string;
  intro: string;
  diet: PreparationSection;
  packing: PreparationSection;
  suggestions: PreparationSection;
  closing: string;
  risks: {
    title: string;
    intro: string;
    sections: PreparationSection[];
  };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  description: string;
  columns: {
    links: {
      title: string;
      items: FooterLink[];
    };
    reviews: {
      title: string;
      rating: string;
    };
    follow: {
      title: string;
      facebook: string;
      instagram: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
    };
    find: {
      title: string;
      address: string;
    };
  };
  rights: string;
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
    ausangateTeaser: {
      label: string;
      title: string;
    };
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
    description: string | string[];
    itinerary: ItineraryDay[];
    cta: string;
  };
  retreat2Day: {
      title: string;
      subtitle: string;
      intro: string;
      days: RetreatDay[];
      conclusion: string;
  };
  preparation: PreparationData;
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
  footer: FooterData;
}