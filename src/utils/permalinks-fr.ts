import { SITE } from 'astrowind:config';
import { cleanSlug, trimSlash } from './permalinks';

/**
 * French-specific permalink utilities
 * Generates URLs with French path patterns (/fr/blogue, /fr/categorie, /fr/etiquette)
 */

const FRENCH_BLOG_BASE = 'fr/blogue';
const FRENCH_CATEGORY_BASE = 'fr/categorie';
const FRENCH_TAG_BASE = 'fr/etiquette';

const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

/**
 * Get permalink for French content
 */
export const getPermalinkFr = (slug = '', type = 'page'): string => {
  let permalink: string;

  if (
    slug.startsWith('https://') ||
    slug.startsWith('http://') ||
    slug.startsWith('://') ||
    slug.startsWith('#') ||
    slug.startsWith('javascript:')
  ) {
    return slug;
  }

  switch (type) {
    case 'home':
      permalink = '/fr';
      break;

    case 'blog':
      permalink = createPath(FRENCH_BLOG_BASE);
      break;

    case 'category':
      permalink = createPath(FRENCH_CATEGORY_BASE, cleanSlug(slug));
      break;

    case 'tag':
      permalink = createPath(FRENCH_TAG_BASE, cleanSlug(slug));
      break;

    case 'post': {
      // Strip 'blog/' prefix if present (from English permalink pattern)
      const cleanedSlug = trimSlash(slug).replace(/^blog\//, '');
      permalink = createPath(FRENCH_BLOG_BASE, cleanedSlug);
      break;
    }

    case 'page':
    default:
      permalink = createPath('fr', slug);
      break;
  }

  return permalink;
};

/**
 * Get French blog base permalink
 */
export const getBlogPermalinkFr = (): string => getPermalinkFr(FRENCH_BLOG_BASE);
