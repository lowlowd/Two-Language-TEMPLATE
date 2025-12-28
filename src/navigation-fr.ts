import { getPermalink } from './utils/permalinks';
import type { CallToAction } from './types';

interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

interface MenuLink extends Link {
  links?: Array<MenuLink>;
}

interface HeaderProps {
  id?: string;
  links?: Array<MenuLink>;
  actions?: Array<CallToAction>;
  isSticky?: boolean;
  isDark?: boolean;
  isFullWidth?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: string;
}

// French Header Navigation
export const headerDataFr: HeaderProps = {
  isSticky: true,
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/fr/'),
    },
    {
      text: 'Fonctionnement',
      href: getPermalink('/fr/comment-ca-fonctionne'),
    },
    {
      text: 'Blogue',
      href: getPermalink('/fr/blogue'),
    },
    {
      text: 'À propos',
      href: getPermalink('/fr/a-propos'),
    },
    {
      text: 'Contact',
      href: getPermalink('/fr/contact'),
    },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Code Promo Fizz',
      href: 'https://fizz.ca/?ref=HN9SM',
      target: '_blank',
      showArrow: true,
    },
  ],
};

// French Footer Navigation
export const footerDataFr = {
  links: [
    {
      title: 'Liens rapides',
      links: [
        { text: 'Accueil', href: getPermalink('/fr/') },
        { text: 'Comment ça fonctionne', href: getPermalink('/fr/comment-ca-fonctionne') },
        { text: 'À propos', href: getPermalink('/fr/a-propos') },
        { text: 'Contact', href: getPermalink('/fr/contact') },
      ],
    },
    {
      title: 'Mentions légales',
      links: [
        { text: 'Politique de confidentialité', href: getPermalink('/fr/confidentialite') },
        { text: "Conditions d'utilisation", href: getPermalink('/fr/conditions') },
        { text: 'Site officiel de Fizz', href: 'https://fizz.ca/?ref=HN9SM', target: '_blank' },
      ],
    },
  ],
  socialLinks: [],
  secondaryLinks: [
    {
      text: "<strong>Avis de non-responsabilité :</strong> Ce site web est une page de parrainage indépendante et n'est pas officiellement affilié à Fizz ou Vidéotron, ni approuvé ou commandité par ceux-ci. Tous les noms de produits, logos et marques de commerce sont la propriété de leurs détenteurs respectifs. Les bonus de parrainage et les conditions sont sujets à changement sans préavis et sont régis par les termes et conditions officiels de Fizz.",
      href: '#',
    },
  ],
  footNote: `
    <div class="text-sm text-gray-700 dark:text-gray-300 mb-3">
      Obtenez 40 $ de crédit sur votre forfait Fizz avec notre code promo. Forfaits mobiles et internet abordables sans contrat.
    </div>
    <div class="text-xs text-gray-600 dark:text-gray-400 mb-4">
       2025 Code Promo Fizz. Page de parrainage indépendante, non affiliée à Fizz ou Vidéotron.
    </div>
  `,
};
