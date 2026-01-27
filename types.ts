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

export interface ServiceDetails {
  duration: string;
  location: string;
  groupSize: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  price?: string;
  details?: ServiceDetails;
}

export interface TestimonialItem {
  name: string;
  location: string;
  text: string;
  image?: string;
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

export interface UiLabels {
    viewDetails: string;
    inquire: string;
    contribution: string;
    bookRetreat: string;
    bookCeremony: string;
    accommodation: string;
    note: string;
    eventDetails: string;
    location: string;
    capacity: string;
    theme: string;
    email: string;
    whatsapp: string;
    connectWithUs: string;
    featuredExperience: string;
    viewFlyer: string;
    duration: string;
    service: string;
}

export interface FlyerLabels {
  highlights: string;
  scan: string;
  reserve: string;
  limited: string;
  flexibleDates: string;
  print: string;
  oneDayPossible: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleItem {
  title: string;
  content: string[];
}

export interface FAQData {
  title: string;
  subtitle: string;
  articles: ArticleItem[];
  questionsTitle: string;
  questions: FAQItem[];
}

export interface TranslationData {
  ui: UiLabels;
  flyer: FlyerLabels;
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    retreatTeaser: {
      label: string;
      title: string;
      location: string;
    };
    ausangateTeaser: {
      label: string;
      title: string;
      date: string;
    };
    costaRicaTeaser: {
        label: string;
        title: string;
        date: string;
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
  ausangate3Day: {
    title: string;
    subtitle: string;
    description: string | string[];
    details: {
        dates: string;
        price: string;
        bonus: string;
    };
    itinerary: ItineraryDay[];
    cta: string;
  };
  costaRica: {
      title: string;
      subtitle: string;
      intro: string;
      description: string | string[];
      details: {
          location: string;
          capacity: string;
          dates: string;
      };
      cta: string;
      oneDayPrice?: string;
      visionTitle: string;
      visionText: string;
      themeValue: string;
      itinerary: ItineraryDay[];
      packages?: {
          title: string;
          items: string[];
      };
  };
  retreat2Day: {
      title: string;
      subtitle: string;
      intro: string;
      days: RetreatDay[];
      conclusion: string;
  };
  juchuy: {
      title: string;
      subtitle: string;
      intro: string;
      days: RetreatDay[];
      conclusion: string;
  };
  retreat1Day: {
      title: string;
      subtitle: string;
      intro: string;
      days: RetreatDay[];
      conclusion: string;
      details: {
          durationLabel: string;
          durationValue: string;
          locationLabel: string;
          locationValue: string;
          focusLabel: string;
          focusValue: string;
      };
  };
  preparation: PreparationData;
  faq: FAQData;
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