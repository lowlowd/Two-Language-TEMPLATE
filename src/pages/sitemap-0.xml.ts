import type { APIRoute } from 'astro';
import { fetchPosts } from '~/utils/blog';
import { fetchFrenchPosts } from '~/utils/blog-fr';
import { CATEGORY_TRANSLATIONS, TAG_TRANSLATIONS } from '~/utils/category-tag-translations';

const SITE_URL = 'https://fizzpromocode.ca';

// Mapping between English and French blog post slugs
const POST_MAPPING: Record<string, string> = {
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

// Static page mappings (English -> French)
const STATIC_PAGES: Array<{ en: string; fr: string }> = [
  { en: '/', fr: '/fr' },
  { en: '/about', fr: '/fr/a-propos' },
  { en: '/contact', fr: '/fr/contact' },
  { en: '/how-it-works', fr: '/fr/comment-ca-fonctionne' },
  { en: '/privacy', fr: '/fr/confidentialite' },
  { en: '/terms', fr: '/fr/conditions' },
  { en: '/blog', fr: '/fr/blogue' },
];

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function generateUrlEntry(mainUrl: string, alternateUrl: string): string {
  // Determine which language is main based on URL
  const isMainFrench = mainUrl.startsWith('/fr');
  const enUrl = isMainFrench ? alternateUrl : mainUrl;
  const frUrl = isMainFrench ? mainUrl : alternateUrl;

  return `  <url>
    <loc>${escapeXml(SITE_URL + mainUrl)}</loc>
    <xhtml:link rel="alternate" hreflang="en-CA" href="${escapeXml(SITE_URL + enUrl)}"/>
    <xhtml:link rel="alternate" hreflang="fr-CA" href="${escapeXml(SITE_URL + frUrl)}"/>
  </url>`;
}

export const GET: APIRoute = async () => {
  const englishPosts = await fetchPosts();
  const frenchPosts = await fetchFrenchPosts();

  // Create a map of French posts by slug for easy lookup
  const frenchPostMap = new Map(frenchPosts.map((post) => [post.slug, post]));

  const urlEntries: string[] = [];

  // Add static pages (English as main, French as alternate)
  for (const page of STATIC_PAGES) {
    urlEntries.push(generateUrlEntry(page.en, page.fr));
  }

  // Add French static pages as separate entries (French as main, English as alternate)
  for (const page of STATIC_PAGES) {
    urlEntries.push(generateUrlEntry(page.fr, page.en));
  }

  // Add English blog posts with French alternates
  for (const enPost of englishPosts) {
    const enUrl = `/blog/${enPost.slug}`;
    const frSlug = POST_MAPPING[enPost.slug];

    if (frSlug && frenchPostMap.has(frSlug)) {
      const frUrl = `/fr/blogue/${frSlug}`;
      urlEntries.push(generateUrlEntry(enUrl, frUrl));
    } else {
      // If no French version exists, add English-only entry
      urlEntries.push(`  <url>
    <loc>${escapeXml(SITE_URL + enUrl)}</loc>
  </url>`);
    }
  }

  // Add French blog posts as separate entries with English alternates
  for (const frPost of frenchPosts) {
    const frUrl = `/fr/blogue/${frPost.slug}`;

    // Find the corresponding English post
    const enSlug = Object.entries(POST_MAPPING).find(([_en, fr]) => fr === frPost.slug)?.[0];

    if (enSlug) {
      const enUrl = `/blog/${enSlug}`;
      // Generate entry with French as main loc and English as alternate
      urlEntries.push(generateUrlEntry(frUrl, enUrl));
    } else {
      // If no English equivalent, add French-only entry
      urlEntries.push(`  <url>
    <loc>${escapeXml(SITE_URL + frUrl)}</loc>
  </url>`);
    }
  }

  // Add English category pages with French alternates
  const englishCategories = new Set<string>();
  englishPosts.forEach((post) => {
    if (post.category?.slug) {
      englishCategories.add(post.category.slug);
    }
  });

  for (const enCategorySlug of englishCategories) {
    const frTranslation = CATEGORY_TRANSLATIONS[enCategorySlug];
    if (frTranslation) {
      const enUrl = `/category/${enCategorySlug}`;
      const frUrl = `/fr/categorie/${frTranslation.slug}`;
      urlEntries.push(generateUrlEntry(enUrl, frUrl));
    } else {
      // If no French translation, add English-only entry
      urlEntries.push(`  <url>
    <loc>${escapeXml(SITE_URL + `/category/${enCategorySlug}`)}</loc>
  </url>`);
    }
  }

  // Add French category pages as separate entries
  for (const enCategorySlug of englishCategories) {
    const frTranslation = CATEGORY_TRANSLATIONS[enCategorySlug];
    if (frTranslation) {
      const enUrl = `/category/${enCategorySlug}`;
      const frUrl = `/fr/categorie/${frTranslation.slug}`;
      urlEntries.push(generateUrlEntry(frUrl, enUrl));
    }
  }

  // Add English tag pages with French alternates
  const englishTags = new Set<string>();
  englishPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      if (tag.slug) {
        englishTags.add(tag.slug);
      }
    });
  });

  for (const enTagSlug of englishTags) {
    const frTranslation = TAG_TRANSLATIONS[enTagSlug];
    if (frTranslation) {
      const enUrl = `/tag/${enTagSlug}`;
      const frUrl = `/fr/etiquette/${frTranslation.slug}`;
      urlEntries.push(generateUrlEntry(enUrl, frUrl));
    } else {
      // If no French translation, add English-only entry
      urlEntries.push(`  <url>
    <loc>${escapeXml(SITE_URL + `/tag/${enTagSlug}`)}</loc>
  </url>`);
    }
  }

  // Add French tag pages as separate entries
  for (const enTagSlug of englishTags) {
    const frTranslation = TAG_TRANSLATIONS[enTagSlug];
    if (frTranslation) {
      const enUrl = `/tag/${enTagSlug}`;
      const frUrl = `/fr/etiquette/${frTranslation.slug}`;
      urlEntries.push(generateUrlEntry(frUrl, enUrl));
    }
  }

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
