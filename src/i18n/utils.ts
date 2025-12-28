/**
 * i18n Utility Functions
 * Helpers for language detection and translation
 */

import { ui, defaultLang, type UiKey } from './ui';
import { CATEGORY_TRANSLATIONS, TAG_TRANSLATIONS } from '~/utils/category-tag-translations';

export type Lang = keyof typeof ui;

/**
 * Route mapping between English and French pages
 */
const routeMap: Record<string, string> = {
  // English -> French slug mapping
  '/': '/fr',
  '/how-it-works': '/fr/comment-ca-fonctionne',
  '/about': '/fr/a-propos',
  '/contact': '/fr/contact',
  '/privacy': '/fr/confidentialite',
  '/terms': '/fr/conditions',
  '/blog': '/fr/blogue',
};

// Blog post slug mapping (English -> French)
const blogPostMap: Record<string, string> = {
  'fizz-referral-code-guide': 'code-parrainage-fizz',
  'fizz-apn-mms-settings-guide': 'parametres-apn-mms-fizz',
  'fizz-beta-western-canada-coverage': 'couverture-fizz-beta-ouest-canada',
  'fizz-data-gifting-complete-guide': 'guide-don-donnees-fizz',
  'fizz-modem-bridge-mode-setup': 'configuration-mode-pont-modem-fizz',
  'fizz-my-rewards-level-up-guide': 'guide-recompenses-fizz',
  'fizz-volte-emergency-calls-fix': 'correction-appels-urgence-volte-fizz',
  'fizz-vs-freedom-mobile-comparison': 'comparaison-fizz-freedom-mobile',
  'fizz-vs-public-mobile-comparison': 'comparaison-fizz-public-mobile',
};

// Create reverse blog mapping (French slug -> English slug)
const reverseBlogPostMap: Record<string, string> = {};
Object.entries(blogPostMap).forEach(([en, fr]) => {
  reverseBlogPostMap[fr] = en;
});

// Category slug mapping (English -> French)
const categoryMap: Record<string, string> = {};
const reverseCategoryMap: Record<string, string> = {};
Object.entries(CATEGORY_TRANSLATIONS).forEach(([enSlug, { slug: frSlug }]) => {
  categoryMap[enSlug] = frSlug;
  reverseCategoryMap[frSlug] = enSlug;
});

// Tag slug mapping (English -> French)
const tagMap: Record<string, string> = {};
const reverseTagMap: Record<string, string> = {};
Object.entries(TAG_TRANSLATIONS).forEach(([enSlug, { slug: frSlug }]) => {
  tagMap[enSlug] = frSlug;
  reverseTagMap[frSlug] = enSlug;
});

// Create reverse mapping (French -> English)
const reverseRouteMap: Record<string, string> = {};
Object.entries(routeMap).forEach(([en, fr]) => {
  reverseRouteMap[fr] = en;
});

/**
 * Get the current language from the URL
 * Returns 'fr' if URL starts with /fr/, otherwise 'en'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr') return 'fr';
  return defaultLang;
}

/**
 * Get a translation function for the given language
 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Get the alternate language URL (for language switcher)
 */
export function getAlternateUrl(url: URL): string {
  const currentLang = getLangFromUrl(url);
  const pathname = url.pathname;

  if (currentLang === 'en') {
    // Switch to French: check route map first, else add /fr prefix
    if (routeMap[pathname]) {
      return routeMap[pathname];
    }
    // Handle paginated blog routes: /blog/2 -> /fr/blogue/2
    const blogPageMatch = pathname.match(/^\/blog\/(\d+)$/);
    if (blogPageMatch) {
      return `/fr/blogue/${blogPageMatch[1]}`;
    }
    // Handle English blog posts: /blog/slug -> /fr/blogue/french-slug
    const enBlogPostMatch = pathname.match(/^\/blog\/(.+)$/);
    if (enBlogPostMatch) {
      const enSlug = enBlogPostMatch[1];
      const frSlug = blogPostMap[enSlug];
      if (frSlug) {
        return `/fr/blogue/${frSlug}`;
      }
      // No French equivalent exists - return self-referencing URL
      return pathname;
    }
    // Handle English category pages: /category/slug -> /fr/categorie/french-slug
    const enCategoryMatch = pathname.match(/^\/category\/(.+)$/);
    if (enCategoryMatch) {
      const enSlug = enCategoryMatch[1];
      const frSlug = categoryMap[enSlug];
      if (frSlug) {
        return `/fr/categorie/${frSlug}`;
      }
      // No French equivalent - self-reference
      return pathname;
    }
    // Handle English tag pages: /tag/slug -> /fr/etiquette/french-slug
    const enTagMatch = pathname.match(/^\/tag\/(.+)$/);
    if (enTagMatch) {
      const enSlug = enTagMatch[1];
      const frSlug = tagMap[enSlug];
      if (frSlug) {
        return `/fr/etiquette/${frSlug}`;
      }
      // No French equivalent - self-reference
      return pathname;
    }
    // For other unmapped routes, just add /fr prefix
    if (pathname === '/') {
      return '/fr';
    }
    return `/fr${pathname}`;
  } else {
    // Switch to English: check reverse route map first, else remove /fr prefix
    if (reverseRouteMap[pathname]) {
      return reverseRouteMap[pathname];
    }
    // Handle paginated French blog routes: /fr/blogue/2 -> /blog/2
    const frBlogPageMatch = pathname.match(/^\/fr\/blogue\/(\d+)$/);
    if (frBlogPageMatch) {
      return `/blog/${frBlogPageMatch[1]}`;
    }
    // Handle French blog posts: /fr/blogue/french-slug -> /blog/english-slug
    const frBlogPostMatch = pathname.match(/^\/fr\/blogue\/(.+)$/);
    if (frBlogPostMatch) {
      const frSlug = frBlogPostMatch[1];
      const enSlug = reverseBlogPostMap[frSlug];
      if (enSlug) {
        return `/blog/${enSlug}`;
      }
      // No English equivalent exists - return self-referencing URL
      return pathname;
    }
    // Handle French category pages: /fr/categorie/slug -> /category/english-slug
    const frCategoryMatch = pathname.match(/^\/fr\/categorie\/(.+)$/);
    if (frCategoryMatch) {
      const frSlug = frCategoryMatch[1];
      const enSlug = reverseCategoryMap[frSlug];
      if (enSlug) {
        return `/category/${enSlug}`;
      }
      // No English equivalent - self-reference
      return pathname;
    }
    // Handle French tag pages: /fr/etiquette/slug -> /tag/english-slug
    const frTagMatch = pathname.match(/^\/fr\/etiquette\/(.+)$/);
    if (frTagMatch) {
      const frSlug = frTagMatch[1];
      const enSlug = reverseTagMap[frSlug];
      if (enSlug) {
        return `/tag/${enSlug}`;
      }
      // No English equivalent - self-reference
      return pathname;
    }
    // Otherwise just remove /fr prefix
    return pathname.replace(/^\/fr/, '') || '/';
  }
}

/**
 * Get the alternate language code
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}
