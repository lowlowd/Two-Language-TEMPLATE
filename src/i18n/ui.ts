/**
 * UI Translation Dictionary
 * Contains all user-facing strings for English and French
 */

export const languages = {
  en: 'EN',
  fr: 'FR',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.howItWorks': 'How It Works',

    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',

    // CTAs
    'cta.getCode': 'Get Your Code',
    'cta.signUp': 'Sign Up Now',
    'cta.learnMore': 'Learn More',
    'cta.readMore': 'Read More',

    // Blog
    'blog.relatedPosts': 'Related Articles',
    'blog.postedOn': 'Posted on',
    'blog.by': 'by',
    'blog.minRead': 'min read',
    'blog.categories': 'Categories',
    'blog.tags': 'Tags',

    // Common
    'common.lastUpdated': 'Last Updated',
    'common.shareOn': 'Share on',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.blog': 'Blogue',
    'nav.howItWorks': 'Comment ça marche',

    // Footer
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': "Conditions d'utilisation",
    'footer.about': 'À propos de nous',
    'footer.contact': 'Contact',

    // CTAs
    'cta.getCode': 'Obtenir votre code',
    'cta.signUp': "S'inscrire maintenant",
    'cta.learnMore': 'En savoir plus',
    'cta.readMore': 'Lire la suite',

    // Blog
    'blog.relatedPosts': 'Articles connexes',
    'blog.postedOn': 'Publié le',
    'blog.by': 'par',
    'blog.minRead': 'min de lecture',
    'blog.categories': 'Catégories',
    'blog.tags': 'Étiquettes',

    // Common
    'common.lastUpdated': 'Dernière mise à jour',
    'common.shareOn': 'Partager sur',
  },
} as const;

export type UiKey = keyof typeof ui.en;
