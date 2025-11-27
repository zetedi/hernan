export enum Language {
  EN = 'EN',
  ES = 'ES',
  QU = 'QU'
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
  about: SectionContent;
  services: {
    title: string;
    items: ServiceItem[];
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