const { format: formatDate } = require('date-fns');
const numeral = require('numeral');
const NextI18Next = require('next-i18next').default;

const options = {
  appendNamespaceToCIMode: true,
  browserLanguageDetection: true,
  // serverLanguageDetection: false,
  lowerCaseLng: true,
  load: 'all',
  defaultLanguage: 'en',
  fallbackLng: 'en',
  otherLanguages: ['de', 'fr'],
  interpolation: {
    format(value, format) {
      if (value instanceof Date) return formatDate(value, format);
      if (typeof value === 'number') return numeral(value).format(format);
      return value;
    },
  },
  localeSubpaths: {
    fr: 'fr',
    de: 'german',
    en: 'eng',
  }
};

const NextI18NextInstance = new NextI18Next(options);

global.i18n = NextI18NextInstance;

module.exports = NextI18NextInstance;
