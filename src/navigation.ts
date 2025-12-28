import { getPermalink, getBlogPermalink } from './utils/permalinks';
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

// This is for the Header
export const headerData: HeaderProps = {
  isSticky: true,
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'How It Works',
      href: getPermalink('/how-it-works'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Fizz Promo Code',
      href: 'https://fizz.ca/en?ref=HN9SM',
      target: '_blank',
      showArrow: true,
    },
  ],
};

// This is for the Footer
export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'How It Works', href: getPermalink('/how-it-works') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Official Fizz Site', href: 'https://fizz.ca/en?ref=HN9SM', target: '_blank' },
      ],
    },
  ],
  socialLinks: [],
  secondaryLinks: [
    {
      text: "<strong>Disclaimer:</strong> This website is an independent referral page and is not officially affiliated with, endorsed by, or sponsored by Fizz or Videotron. All product names, logos, and trademarks are property of their respective owners. Referral bonuses and terms are subject to change without notice and are governed by Fizz's official terms and conditions.",
      href: '#',
    },
  ],
  footNote: `
    <div class="text-sm text-gray-700 dark:text-gray-300 mb-3">
      Get $40 credit on your Fizz plan using our promo code. Affordable mobile and internet plans with no contracts.
    </div>
    <div class="text-xs text-gray-600 dark:text-gray-400 mb-4">
       2025 Fizz Promo Code. This is an independent referral page, not affiliated with Fizz or Videotron.
    </div>
  `,
};
