/**
 * Category and Tag Translations (English -> French)
 *
 * Template-ready: Update these mappings for your site
 */

// Category translations (English slug -> French slug + name)
export const CATEGORY_TRANSLATIONS: Record<string, { slug: string; name: string }> = {
  deals: { slug: 'offres', name: 'Offres' },
  features: { slug: 'fonctionnalites', name: 'Fonctionnalités' },
  troubleshooting: { slug: 'depannage', name: 'Dépannage' },
  comparison: { slug: 'comparaison', name: 'Comparaison' },
  coverage: { slug: 'couverture', name: 'Couverture' },
  'home-internet': { slug: 'internet-residentiel', name: 'Internet Résidentiel' },
};

// Tag translations (English slug -> French slug + name)
export const TAG_TRANSLATIONS: Record<string, { slug: string; name: string }> = {
  // Beta & Coverage
  'fizz-beta': { slug: 'fizz-beta', name: 'Fizz Bêta' },
  'fizz-bc-coverage': { slug: 'fizz-couverture-cb', name: 'Fizz Couverture CB' },
  'fizz-alberta': { slug: 'fizz-alberta', name: 'Fizz Alberta' },
  'fizz-calgary': { slug: 'fizz-calgary', name: 'Fizz Calgary' },
  'fizz-vancouver': { slug: 'fizz-vancouver', name: 'Fizz Vancouver' },
  'western-canada-mobile': { slug: 'mobile-ouest-canada', name: 'Mobile Ouest Canada' },
  'ottawa-mobile-coverage': { slug: 'couverture-mobile-ottawa', name: 'Couverture Mobile Ottawa' },

  // Carrier Info
  'quebecor-carriers': { slug: 'operateurs-quebecor', name: 'Opérateurs Quebecor' },
  'videotron-network': { slug: 'reseau-videotron', name: 'Réseau Vidéotron' },

  // Comparisons
  'fizz-vs-freedom-mobile': { slug: 'fizz-vs-freedom-mobile', name: 'Fizz vs Freedom Mobile' },
  'fizz-vs-public-mobile': { slug: 'fizz-vs-public-mobile', name: 'Fizz vs Public Mobile' },
  'freedom-mobile-comparison': { slug: 'comparaison-freedom-mobile', name: 'Comparaison Freedom Mobile' },
  'public-mobile-rewards': { slug: 'recompenses-public-mobile', name: 'Récompenses Public Mobile' },
  'budget-carrier-comparison': {
    slug: 'comparaison-operateurs-economiques',
    name: 'Comparaison Opérateurs Économiques',
  },

  // VoLTE & Emergency
  'fizz-emergency-calls-only': { slug: 'fizz-appels-urgence-seulement', name: 'Fizz Appels Urgence Seulement' },
  'fizz-volte': { slug: 'fizz-volte', name: 'Fizz VoLTE' },
  '3g-shutdown-canada': { slug: 'fermeture-3g-canada', name: 'Fermeture 3G Canada' },
  'fizz-compatible-phones': { slug: 'telephones-compatibles-fizz', name: 'Téléphones Compatibles Fizz' },
  'volte-whitelist': { slug: 'liste-blanche-volte', name: 'Liste Blanche VoLTE' },

  // Bridge Mode
  'fizz-bridge-mode': { slug: 'fizz-mode-pont', name: 'Fizz Mode Pont' },
  'fizz-modem-setup': { slug: 'configuration-modem-fizz', name: 'Configuration Modem Fizz' },
  'coda-4680-bridge-mode': { slug: 'coda-4680-mode-pont', name: 'Coda 4680 Mode Pont' },
  'fizz-internet-router': { slug: 'routeur-internet-fizz', name: 'Routeur Internet Fizz' },
  'cusadmin-password': { slug: 'mot-de-passe-cusadmin', name: 'Mot de Passe cusadmin' },

  // APN & MMS
  'fizz-apn-settings': { slug: 'parametres-apn-fizz', name: 'Paramètres APN Fizz' },
  'fizz-mms-not-working': { slug: 'mms-fizz-ne-fonctionne-pas', name: 'MMS Fizz Ne Fonctionne Pas' },
  'fizz-mobile-data-fix': { slug: 'correction-donnees-mobiles-fizz', name: 'Correction Données Mobiles Fizz' },
  'android-configuration': { slug: 'configuration-android', name: 'Configuration Android' },
  'pixel-mms-fix': { slug: 'correction-mms-pixel', name: 'Correction MMS Pixel' },

  // Data Features
  'fizz-data-gifting': { slug: 'don-donnees-fizz', name: 'Don Données Fizz' },
  'fizz-data-exchange': { slug: 'echange-donnees-fizz', name: 'Échange Données Fizz' },
  'share-data-fizz': { slug: 'partager-donnees-fizz', name: 'Partager Données Fizz' },
  'fizz-rollover-data': { slug: 'donnees-reportees-fizz', name: 'Données Reportées Fizz' },
  'fizz-data-gift-rules': { slug: 'regles-don-donnees-fizz', name: 'Règles Don Données Fizz' },

  // My Rewards
  'fizz-my-rewards': { slug: 'mes-recompenses-fizz', name: 'Mes Récompenses Fizz' },
  'fizz-level-up': { slug: 'monter-de-niveau-fizz', name: 'Monter de Niveau Fizz' },
  'fizz-rewards-points': { slug: 'points-recompenses-fizz', name: 'Points Récompenses Fizz' },
  'fizz-badges': { slug: 'badges-fizz', name: 'Badges Fizz' },
  'fizz-upgrade-slots': { slug: 'cases-amelioration-fizz', name: 'Cases Amélioration Fizz' },
  'fizz-rewards': { slug: 'recompenses-fizz', name: 'Récompenses Fizz' },

  // Roaming
  'us-roaming-canada': { slug: 'itinerance-etats-unis-canada', name: 'Itinérance États-Unis Canada' },

  // Referral & Promos
  'fizz-referral-code': { slug: 'code-parrainage-fizz', name: 'Code Parrainage Fizz' },
  'fizz-promo-code': { slug: 'code-promo-fizz', name: 'Code Promo Fizz' },
  'fizz-discount': { slug: 'rabais-fizz', name: 'Rabais Fizz' },
  'fizz-signup-bonus': { slug: 'bonus-inscription-fizz', name: 'Bonus Inscription Fizz' },
  'fizz-referral-2025': { slug: 'parrainage-fizz-2025', name: 'Parrainage Fizz 2025' },
};
