import { Language, TranslationData } from './types';
import { enTranslations } from './translations/en';
import { esTranslations } from './translations/es';
import { quTranslations } from './translations/qu';

export * from './assets';

export const TRANSLATIONS: Record<Language, TranslationData> = {
    [Language.EN]: enTranslations,
    [Language.ES]: esTranslations,
    [Language.QU]: quTranslations
};
