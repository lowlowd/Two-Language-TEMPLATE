---
publishDate: 2025-11-21T00:00:00Z
title: 'Guide de dépannage des paramètres APN et MMS Fizz 2025'
excerpt: "Corrigez les paramètres APN Fizz, les échecs d'envoi MMS et les problèmes de données mobiles sur Android et iPhone. Dépannage étape par étape pour la configuration mobile.bm."
image: ~/assets/images/fizz-apn-settings-guide.png
category: Dépannage
tags:
  - paramètres apn fizz
  - mms fizz ne fonctionne pas
  - correction données mobiles fizz
  - configuration android
  - correction mms pixel
author: Sarah Rodriguez
---

## Paramètres APN Fizz ne fonctionnent pas? Vous n'êtes pas seul

Votre carte SIM Fizz est installée, mais quelque chose cloche.

Peut-être que les données ne se connectent pas. Peut-être voyez-vous le message « Échec d'envoi MMS » chaque fois que vous essayez de partager une photo. Ou peut-être que ça fonctionnait hier et que soudainement... plus rien.

Frustrant? Absolument. Mais je suis passée par là moi-même. Le coupable est presque toujours une erreur dans les paramètres APN. Une fois que vous savez quoi vérifier, la réparation prend à peine 5 minutes.

Allons-y.

---

## Solution rapide : Paramètres APN Fizz (Prêts à copier-coller)

Avant de plonger dans le dépannage, voici les paramètres APN Fizz officiels. Ils fonctionnent pour les données mobiles et les MMS :

| Paramètre     | Valeur                 |
| ------------- | ---------------------- |
| **Nom**       | Fizz                   |
| **APN**       | `mobile.bm`            |
| **MMSC**      | `http://mms.mobile.bm` |
| **Proxy MMS** | `mmsproxy.mobile.bm`   |
| **Port MMS**  | `80`                   |
| **Type APN**  | `default,mms,supl`     |
| **MCC**       | `302`                  |
| **MNC**       | `720`                  |

> **Conseil de pro :** On demande souvent s'il faut utiliser le port 80 ou 8080 pour le proxy MMS. Utilisez toujours le **port 80**. Le port 8080 causera des échecs d'envoi.

> **Nouveau chez Fizz?** Utilisez le code de parrainage **HN9SM** pour obtenir un **bonus de 40 $** après votre deuxième facture.

---

## Comment configurer manuellement l'APN Fizz sur Android

Fizz est censé envoyer la configuration automatiquement par SMS, mais cela ne fonctionne pas toujours. Voici comment configurer votre appareil manuellement :

### Étape 1 : Accéder aux paramètres APN

1. Ouvrez les **Paramètres** de votre téléphone Android
2. Allez dans **Réseau et Internet** → **Réseau mobile** → **Noms des points d'accès**
   - Sur Samsung : **Paramètres** → **Connexions** → **Réseaux mobiles** → **Noms des points d'accès**
3. Appuyez sur l'icône **+** pour créer un nouvel APN

### Étape 2 : Entrer les paramètres Fizz

Remplissez ces champs exactement comme indiqué ci-dessous :

- **Nom :** Fizz
- **APN :** mobile.bm
- **MMSC :** http://mms.mobile.bm
- **Proxy MMS :** mmsproxy.mobile.bm
- **Port MMS :** 80
- **Type APN :** default,mms,supl

Laissez tous les autres champs vides ou avec leurs valeurs par défaut.

### Étape 3 : Sauvegarder et sélectionner

1. Appuyez sur le menu (trois points) → **Enregistrer**
2. Sélectionnez le nouvel APN **Fizz** comme point d'accès par défaut
3. **Redémarrez complètement votre téléphone**

Cette dernière étape est cruciale. Je sais que cela semble anodin, mais beaucoup de gens entrent les bons paramètres et se demandent pourquoi rien ne change... simplement parce qu'ils n'ont pas redémarré. _Redémarrez le téléphone._

---

## Comment corriger l'échec d'envoi MMS Fizz sur Pixel

Les téléphones Google Pixel et les problèmes de MMS avec Fizz... une histoire sans fin. C'est un problème très fréquent.

Si vous rencontrez un **échec d'envoi MMS sur Pixel**, voici la liste de vérification :

### Solution 1 : Vérifier le type d'APN

Assurez-vous que votre « Type APN » inclut bien `mms`. La valeur exacte doit être :

```
default,mms,supl
```

### Solution 2 : Activer les données mobiles

Les MMS nécessitent une connexion de données active, même si vous êtes en Wi-Fi. Allez dans :

**Paramètres** → **Réseau et Internet** → **SIM** → Activez **Données mobiles**

### Solution 3 : Réinitialiser l'APN par défaut

1. Allez dans **Noms des points d'accès**
2. Appuyez sur le menu (trois points) → **Rétablir les paramètres par défaut**
3. Attendez 30 secondes, puis entrez à nouveau les paramètres Fizz manuellement

### Solution 4 : Vider le cache de l'application Messages

1. Allez dans **Paramètres** → **Applications** → **Messages**
2. Appuyez sur **Espace de stockage et cache** → **Vider le cache**
3. Redémarrez votre téléphone

---

## Impossible d'envoyer des photos sur Fizz? Vérifiez ceci

Si vous ne pouvez pas envoyer de photos alors que les données mobiles sont activées, le problème vient généralement de l'un de ces points :

### 1. Les données mobiles sont réellement désactivées

Vérifiez que les données sont bien actives :

1. Tirez le volet de notification vers le bas
2. Cherchez l'icône des données mobiles (deux flèches)
3. Assurez-vous qu'elles sont bien activées (ON)

### 2. Messagerie de groupe désactivée

Pour que les MMS de groupe fonctionnent :

1. Ouvrez votre application **Messages**
2. Allez dans **Paramètres** → **Avancé**
3. Activez **Messagerie de groupe** (si l'option est disponible)
4. Sélectionnez **Envoyer une réponse MMS à tous les destinataires**

### 3. Taille du message trop grande

Fizz limite les MMS à environ 1 Mo. Si vous envoyez une photo trop lourde, l'envoi échouera silencieusement (sans message d'erreur).

- Réduisez la qualité de l'image dans les paramètres de votre appareil photo
- Ou plus simplement : utilisez WhatsApp ou Signal. Les MMS sont une technologie vieillissante.

---

## Comment renvoyer le SMS de configuration réseau Fizz

Vous avez perdu le SMS de configuration original? Voici comment demander un nouvel envoi de la configuration réseau :

### Méthode 1 : Via votre compte Fizz

1. Connectez-vous sur [fizz.ca](https://fizz.ca)
2. Allez dans **Mon compte** → **Mon forfait**
3. Cherchez l'option **Renvoyer les paramètres réseau** ou **Envoyer la configuration**
4. Vérifiez vos SMS dans les 5 minutes suivantes

### Méthode 2 : Retirer et réinsérer la SIM

1. Éteignez votre téléphone
2. Retirez la carte SIM Fizz
3. Attendez 30 secondes
4. Réinsérez la SIM
5. Allumez votre téléphone

Le SMS de configuration devrait arriver automatiquement.

### Méthode 3 : Contacter le support Fizz par clavardage

Si les méthodes ci-dessus échouent :

1. Allez sur [fizz.ca](https://fizz.ca) et ouvrez la bulle de clavardage
2. Demandez à l'agent d'envoyer la configuration réseau vers votre appareil
3. Ils peuvent déclencher l'envoi d'un nouveau SMS de configuration depuis leur système

---

## Erreurs fréquentes (et comment les éviter)

Voici les fautes de frappe et erreurs les plus courantes :

| Erreur fréquente           | Paramètre correct      |
| -------------------------- | ---------------------- |
| mobilebm (sans point)      | mobile.bm              |
| mms.bm                     | mms.mobile.bm          |
| Port 8080                  | Port 80                |
| Type APN default seulement | default,mms,supl       |
| http:// manquant dans MMSC | Inclure l'URL complète |

> **Attention :** Si vos paramètres APN sont grisés et non modifiables, votre téléphone est peut-être verrouillé par un autre opérateur. Contactez votre ancien fournisseur pour le faire déverrouiller.

---

## Ça ne fonctionne toujours pas? Dépannage avancé

### Vérifier la compatibilité VoLTE

Si ni les données ni les appels ne fonctionnent, votre téléphone n'est peut-être pas compatible avec la VoLTE de Fizz. Dès le 31 juillet 2025, Fizz fermera son réseau 3G; tous les appels devront passer par la VoLTE.

Pour tester la compatibilité :

1. Composez **#8378** (ou **#TEST**) depuis votre téléphone
2. Écoutez le message
3. S'il confirme « réseau LTE-4G », tout est beau
4. Sinon, consultez notre [guide de dépannage VoLTE](/fr/blogue/correction-appels-urgence-volte-fizz)

### Réinitialiser les paramètres réseau (Solution radicale)

Cette action efface tous les mots de passe Wi-Fi enregistrés et les jumelages Bluetooth, mais elle règle souvent les problèmes tenaces :

**Android :** Paramètres → Système → Options de réinitialisation → Réinitialiser Wi-Fi, mobile et Bluetooth

**iPhone :** Réglages → Général → Transférer ou réinitialiser l'iPhone → Réinitialiser → Réinitialiser les réglages réseau

---

## Paramètres APN Fizz pour iPhone

Bonne nouvelle : les iPhone se configurent généralement tout seuls. Si ce n'est pas le cas :

1. Allez dans **Réglages** → **Cellulaire** → **Réseau de données cellulaires**
2. Sous **Données cellulaires**, entrez :
   - **APN :** mobile.bm
3. Sous **MMS**, entrez :
   - **APN :** mobile.bm
   - **MMSC :** http://mms.mobile.bm
   - **Proxy MMS :** mmsproxy.mobile.bm
   - **Taille max. des MMS :** 1048576
4. Redémarrez votre iPhone

---

## FAQ : Dépannage APN et MMS

### Pourquoi mon APN Fizz se réinitialise-t-il tout seul?

Certains téléphones Android réinitialisent les APN après une mise à jour système. Après chaque mise à jour Android, vérifiez que l'APN Fizz est toujours sélectionné par défaut.

### Puis-je utiliser Fizz sans paramètres APN?

Non. Les paramètres APN sont requis pour l'internet mobile et les MMS. Les appels et les SMS (texte simple) peuvent fonctionner sans, mais vous n'aurez pas de données.

### Et si mon téléphone n'a pas de menu APN?

Les iPhone masquent souvent les paramètres APN par défaut. Insérez votre carte SIM Fizz, redémarrez et attendez la configuration automatique. Si rien ne se passe après 10 minutes, contactez le support Fizz.

### Fizz fonctionne-t-il sur tous les téléphones déverrouillés?

La plupart fonctionnent, mais la compatibilité VoLTE est essentielle. Vérifiez la liste des appareils certifiés ou composez le #8378 pour tester.

### Pourquoi les MMS fonctionnent-ils, mais pas internet?

C'est rare, mais cela arrive si le Type d'APN est réglé sur `mms` uniquement. Changez-le pour `default,mms,supl`.

### Pourquoi mes paramètres APN sont-ils grisés?

Si vous ne pouvez pas modifier vos APN, voici les causes probables :

**Cause 1 : Verrouillage opérateur**
Votre téléphone est verrouillé par votre ancien fournisseur (Rogers, Bell, Telus, etc.).
**Solution :** Contactez l'ancien fournisseur pour obtenir le code de déverrouillage.

**Cause 2 : Profil MDM (Téléphone de travail)**
Les téléphones d'entreprise ont souvent une gestion à distance qui bloque les réglages.
**Solution :** Contactez votre service TI ou supprimez le profil de gestion (Réglages → Général → VPN et gestion de l'appareil sur iPhone).

**Cause 3 : Bug Android**
Certaines versions d'Android ont un bogue d'affichage.
**Solution :**

1. Allez dans Paramètres → Applications → Afficher les processus système
2. Trouvez « Services de l'opérateur » (Carrier Services) ou « SIM Toolkit »
3. Videz le cache et les données
4. Redémarrez

### Pourquoi mes paramètres ont-ils disparu?

Si vos données ont cessé de fonctionner soudainement :

- **Mise à jour OS :** Android/iOS peuvent réinitialiser les réglages
- **Changement de SIM :** Réinsérer la SIM peut forcer une auto-configuration erronée
- **Mise à jour opérateur :** Fizz envoie parfois des mises à jour qui écrasent vos APN manuels

**Prévention :** Faites une capture d'écran de vos paramètres fonctionnels pour pouvoir les rétablir rapidement.

### Dois-je vraiment redémarrer mon téléphone après la configuration?

Oui. C'est une étape critique souvent négligée. Le modem du téléphone doit se réinitialiser pour prendre en compte la nouvelle configuration. Éteignez complètement, attendez 30 secondes, et rallumez.

### Pourquoi mon partage de connexion (Hotspot) ne fonctionne pas?

C'est souvent lié au Type d'APN. Ajoutez `,dun` à la fin du champ Type APN : `default,mms,supl,dun`. Si votre téléphone bloque cette modification, essayez d'écrire `dun` en majuscules ou créez un tout nouveau profil APN.

### Pourquoi je ne reçois pas les codes de vérification (2FA) des banques?

Assurez-vous d'abord que le numéro du centre de messagerie (SMSC) est correct. Sinon, essayez d'ajouter un petit montant (ex: 5 $) dans votre Portefeuille Fizz. Certains systèmes automatisés voient les textos 2FA comme des messages « premium » et bloquent l'envoi si votre solde est à 0,00 $, même avec les textos illimités.

### Que signifie « Fizz EXT »? Vais-je payer des frais?

Fizz EXT signifie que vous êtes sur un réseau partenaire (Rogers/Bell/Telus) car le signal Fizz est faible. Vous ne paierez pas de frais supplémentaires si votre zone de couverture (ex: Québec ou Canada) inclut l'endroit où vous êtes. C'est fait pour le dépannage occasionnel, pas pour une utilisation permanente.

### Dois-je changer l'APN pour l'itinérance aux États-Unis?

Non, utilisez les mêmes réglages `mobile.bm`. Si les données ne fonctionnent pas aux USA :

1. Activez l'**Itinérance des données** dans les réglages du téléphone
2. Assurez-vous d'avoir un forfait Canada + É.-U. ou un Ajout de voyage actif

### Comment configurer la Messagerie Vocale Visuelle?

Sur iPhone, c'est intégré dans l'app Téléphone. Sur Android, vous devez télécharger l'application **Fizz | Messagerie Vocale Visuelle** sur le Google Play Store. L'option native des téléphones Samsung ou Pixel ne fonctionnera pas.

---

## Économisez sur votre forfait Fizz

Vous configurez votre nouveau forfait? N'oubliez pas d'utiliser le code de parrainage **HN9SM** lors de l'abonnement pour économiser **40 $** (le montant peut varier selon les promotions en cours). Vous et la personne qui vous a référé obtenez la prime—tout le monde y gagne.

La prime est appliquée après votre deuxième paiement. Restez avec nous et profitez des économies!

---

## Articles connexes

- [Problème d'appels d'urgence et VoLTE Fizz](/fr/blogue/correction-appels-urgence-volte-fizz) - Votre téléphone affiche « Appels d'urgence seulement »?
- [Comparatif Fizz vs Public Mobile](/fr/blogue/comparaison-fizz-public-mobile) - Vous songez à changer?
- [Guide du programme Mes Récompenses Fizz](/fr/blogue/guide-recompenses-fizz) - Maximisez vos avantages
