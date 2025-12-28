---
publishDate: 2025-11-25T00:00:00Z
title: 'Guide de configuration du mode pont modem Fizz'
excerpt: 'Guide étape par étape pour activer le mode pont sur votre modem Fizz. Connectez votre propre routeur, Eero ou système mesh. Inclut connexion cusadmin et instructions CODA-4680.'
image: ~/assets/images/blog/fizz-modem-bridge-mode-setup.png
category: Internet Résidentiel
tags:
  - fizz mode pont
  - configuration modem fizz
  - coda-4680 mode pont
  - routeur internet fizz
  - mot de passe cusadmin
author: Sarah Rodriguez
---

## Pourquoi Mettre Votre Modem Fizz en Mode Pont?

Le modem fourni par Fizz—habituellement un CODA-4680 ou CODA-5610Q—est correct. Il fonctionne. Il fait le travail.

Mais « correct » n'est pas la raison pour laquelle vous êtes ici.

Peut-être que le Wi-Fi ne se rend pas à votre chambre. Peut-être que vous avez un système mesh Eero qui ramasse la poussière. Peut-être que vous voulez juste le contrôle total. Je comprends.

Le **mode pont** transforme votre modem Fizz en simple passerelle transparente. Il gère la connexion internet, mais VOTRE routeur prend le contrôle de tout le reste—Wi-Fi, gestion du réseau, tout. Voici comment faire, étape par étape.

---

## Ce Dont Vous Aurez Besoin

Avant de plonger, assurez-vous d'avoir :

- ✅ Votre service internet Fizz activé et fonctionnel
- ✅ Un ordinateur ou téléphone connecté au réseau du modem Fizz
- ✅ Votre propre routeur (Eero, Google Nest, TP-Link, ASUS, etc.)
- ✅ Un câble Ethernet pour connecter votre routeur au modem Fizz
- ✅ Environ 15 minutes de patience

> **Vous configurez un nouvel internet?** Utilisez le code de parrainage **HN9SM** pour obtenir un **bonus de 40 $** sur votre compte.

---

## Étape 1 : Connectez-Vous à Votre Modem Fizz

D'abord, vous devez accéder à l'interface d'administration du modem.

### Trouvez la Page de Connexion

1. Connectez-vous à votre Wi-Fi Fizz ou branchez un câble Ethernet directement dans le modem
2. Ouvrez un navigateur web
3. Allez à **192.168.0.1** (ou parfois **10.0.0.1**)
4. Vous devriez voir la page de connexion Hitron

### La Confusion des Identifiants

Ok, c'est là que tout le monde bloque. Moi inclus, la première fois.

Il y a DEUX ensembles d'identifiants :

| Type de Connexion     | Nom d'utilisateur | Mot de passe                                               |
| --------------------- | ----------------- | ---------------------------------------------------------- |
| **Connexion Admin**   | cusadmin          | Votre mot de passe Wi-Fi (vérifiez l'autocollant du modem) |
| **Connexion Basique** | cususer           | (varie)                                                    |

**Utilisez cusadmin.** C'est celui avec l'accès complet. Le mot de passe est ce qui est imprimé sur l'autocollant du modem—à moins que vous l'ayez changé.

> **Vous ne pouvez pas entrer?** Essayez d'abord le mot de passe de l'autocollant par défaut. Si ça échoue, la réinitialisation d'usine est votre option nucléaire (maintenez le bouton reset 30 secondes). Attention : ça efface tous vos paramètres.

---

## Étape 2 : Accédez aux paramètres de la passerelle (Gateway)

Une fois connecté :

1. Cherchez **Général** dans le menu de gauche
2. Cliquez sur **Gateway** ou **Fonction Gateway**
3. Vous verrez les options pour le mode passerelle résidentielle

Différentes versions du micrologiciel (firmware) peuvent avoir des dispositions légèrement différentes, mais le chemin est habituellement :

```
Général → Gateway → Fonction Passerelle Résidentielle
```

---

## Étape 3 : Désactivez la Fonction Passerelle Résidentielle

Voici le moment magique :

1. Trouvez **Fonction Passerelle Résidentielle** (ou **Residential Gateway Function** si l'interface est en anglais)
2. Changez de **Activé** à **Désactivé**
3. Cliquez sur **Appliquer** ou **Sauvegarder**

Le modem va redémarrer de lui-même. Ça prend 2-3 minutes. Les lumières vont clignoter. L'internet disparaît. Ne paniquez pas. C'est normal.

> **Ce qui se passe réellement :**
>
> - Wi-Fi intégré du modem : ÉTEINT
> - Serveur DHCP du modem : ÉTEINT
> - Pare-feu/NAT du modem : ÉTEINT
> - Seul le port Ethernet 1 passe l'internet à votre routeur

Le modem est maintenant une simple passerelle transparente. Magnifique.

---

## Étape 4 : Connectez Votre Propre Routeur

Maintenant branchez votre routeur personnel :

1. **Débranchez votre routeur** (s'il est actuellement connecté à quelque chose)
2. Connectez un câble Ethernet du **port Ethernet 1 du modem Fizz** au port **WAN/Internet** de votre routeur
3. Allumez votre routeur
4. Attendez 2-3 minutes pour que tout établisse une connexion

Votre routeur devrait maintenant obtenir une adresse IP publique directement de Fizz (ou presque), et VOUS contrôlez le réseau.

---

## Conseils de Configuration pour Routeurs Spécifiques

### Connecter Eero au Modem Fizz

1. Mettez le modem Fizz en mode pont (étapes ci-dessus)
2. Connectez la passerelle Eero au port Ethernet 1 du modem Fizz
3. Ouvrez l'application Eero et passez à travers la configuration
4. Eero détectera la connexion internet automatiquement

### Connecter Google Nest WiFi

1. Mettez le modem Fizz en mode pont
2. Connectez le routeur Nest au modem Fizz
3. L'application Google Home s'occupera du reste

### Connecter les Routeurs ASUS/TP-Link/Netgear

1. Mettez le modem Fizz en mode pont
2. Connectez le port WAN au modem Fizz
3. Accédez à la page admin de votre routeur (habituellement 192.168.1.1)
4. Réglez le type de connexion WAN sur **DHCP** ou **Automatique**

---

## Dépannage des Problèmes Courants

### Impossible d'accéder à 192.168.0.1

- Assurez-vous d'être connecté au réseau Fizz (pas votre propre routeur)
- Essayez **http://192.168.0.1** (avec le http://)
- Désactivez le VPN si en marche
- Essayez un autre navigateur

### Mot de passe cusadmin ne fonctionne pas

Le mot de passe est sensible à la casse. Essayez :

1. Le mot de passe sur l'autocollant de votre modem exactement comme imprimé
2. "password" (certains modems ont ça par défaut)
3. Réinitialisation d'usine si tout échoue (maintenez le bouton reset 30 secondes)

### Pas d'internet après le mode pont

1. Confirmez qu'un câble Ethernet connecte le modem au port WAN de votre routeur
2. Redémarrez le modem et le routeur (modem d'abord, attendez 2 min, puis routeur)
3. Vérifiez que votre routeur est réglé pour obtenir l'IP automatiquement (DHCP)

### Vitesse plus lente après le mode pont

Ça ne devrait pas arriver. Si c'est le cas, voici des solutions :

- **Piège Double-NAT :** Avez-vous connecté au port LAN au lieu du port WAN? Erreur classique.
- **Goulot d'étranglement routeur :** Les vieux routeurs pourraient ne pas gérer les vitesses Fizz. Vérifiez les spécifications de votre routeur.
- **Problème de câblage :** Faites un test de vitesse avec un appareil directement connecté au modem (avant votre routeur). Si c'est lent, vérifiez vos [paramètres APN et réseau](/fr/blogue/parametres-apn-mms-fizz) ou contactez le support.

---

## CODA-4680 vs CODA-5610Q : Des Différences?

Les deux modems suivent le même processus de mode pont :

| Modèle     | Vitesse Max | Mode Pont                 |
| ---------- | ----------- | ------------------------- |
| CODA-4680  | ~1 Gbps     | Même processus que dessus |
| CODA-5610Q | 2.5 Gbps    | Même processus que dessus |

Le 5610Q est plus récent et supporte les connexions multi-gig si vous avez un forfait Fizz compatible. Le mode pont fonctionne identiquement sur les deux.

---

## Revenir au Mode Normal

Changé d'avis? Voici comment annuler le mode pont :

1. Connectez-vous directement au modem Fizz via Ethernet
2. Allez à **192.168.0.1**
3. Connectez-vous avec **cusadmin**
4. Accédez à Général → Gateway (Passerelle)
5. **Activez** la Fonction Passerelle Résidentielle
6. Sauvegardez et redémarrez

Le modem redémarrera avec son Wi-Fi intégré et DHCP réactivés.

---

## Installation VIP Fizz vs Auto-Installation : Ça Vaut 60 $?

Avant même d'arriver au mode pont, vous avez besoin que l'internet soit installé. Fizz offre deux options :

### Auto-Installation (Gratuite)

- Fizz expédie le modem à votre adresse
- Vous le connectez vous-même à une prise coaxiale existante
- Activez en ligne via votre compte Fizz
- **Meilleur pour :** Maisons avec infrastructure Vidéotron/câble existante

### Installation VIP (60 $)

Un technicien vient chez vous et :

- Connecte le modem
- Vérifie la qualité du signal
- Passe un nouveau coaxial si nécessaire
- Dépanne tout problème sur place

**L'installation VIP Fizz vaut-elle le coup?** Voici quand payer les 60 $ :

| Situation                            | Auto-Install OK?        | VIP Vaut le Coup? |
| ------------------------------------ | ----------------------- | ----------------- |
| Prise Vidéotron active existe        | ✅ Oui                  | ❌ Non            |
| Internet câble marchait ici avant    | ✅ Oui                  | ❌ Non            |
| Nouvelle construction, pas de coax   | ❌ Non                  | ✅ Oui            |
| Vieux bâtiment, câblage inconnu      | ⚠️ Peut-être            | ✅ Probablement   |
| Prise coax existe mais jamais testée | ⚠️ Essayez auto d'abord | ✅ Si ça échoue   |

### Exigence relative au câble coaxial Fizz

L'internet Fizz nécessite une **connexion par câble coaxial** (le même type utilisé pour la télé câble). Si votre maison a seulement de la fibre ou infrastructure DSL, Fizz ne fonctionnera pas sans nouveau câblage.

**Comment vérifier :**

1. Cherchez des prises coax rondes sur vos murs (similaire au câble TV)
2. Vérifiez si vous aviez le service Vidéotron, Cogeco ou télé câble avant
3. Le modem ne s'activera pas sans signal coax approprié

---

## Déménager avec Internet Fizz : Coûts de Relocalisation

Vous déménagez à une nouvelle adresse? Voici à quoi vous attendre :

### Frais de déménagement internet Fizz

- **Auto-installation au nouvel endroit :** Gratuit (si vous gardez le même modem)
- **Installation VIP à la nouvelle adresse :** 60 $
- **Frais de changement d'adresse :** Gratuit

### Processus de relocalisation internet Fizz

1. Connectez-vous sur [fizz.ca](https://fizz.ca)
2. Allez à **Mon Compte** → **Déménager**
3. Entrez votre nouvelle adresse
4. Fizz vérifie si le service est disponible
5. Choisissez auto-installation ou VIP pour le nouvel endroit
6. Apportez votre modem avec vous (ne le renvoyez pas!)

**Astuce pro :** Planifiez votre date de déménagement à l'avance. Fizz a besoin de quelques jours pour mettre à jour votre adresse de service et assurer l'activation au nouvel endroit.

### Et si Fizz n'est pas disponible à ma nouvelle adresse?

- Annulez sans pénalité (pas de contrat)
- Retournez le modem pour éviter les frais d'équipement
- Vous perdrez votre progression Mes Récompenses accumulée

## FAQ : Mode Pont Modem Fizz

### Qu'est-ce que le mode pont?

Le mode pont transforme votre modem en simple passerelle transparente. Il arrête de gérer le Wi-Fi, DHCP et NAT, laissant votre propre routeur prendre ces fonctions.

### Comment me connecter au modem après avoir activé le mode pont?

Une fois en mode pont, l'adresse standard 192.168.0.1 arrête souvent de fonctionner car la fonction routeur est éteinte. Vous devez habituellement utiliser **192.168.100.1** pour accéder à l'interface admin. Si ça ne marche pas, vous devrez réinitialiser le modem en usine pour regagner l'accès.

### Pourquoi les ports Ethernet 2, 3 et 4 ne fonctionnent pas?

En mode pont, seul le **Port LAN 1** reste actif pour passer l'IP publique à votre routeur personnel. Les ports 2, 3 et 4 sont désactivés. Vous devez brancher tous vos appareils filaires (PC, consoles, switches) dans votre routeur personnel, pas le modem Fizz.

### L'application Wi-Fi Fizz fonctionnera-t-elle encore en mode pont?

Non. L'application Wi-Fi Fizz compte sur le routeur interne du modem pour gérer les appareils et mettre l'usage en pause. Une fois le mode pont activé, l'application affichera une erreur ou ne se connectera pas. Vous devez utiliser l'application de votre propre routeur (ex. Eero, Asus, Google Home) pour gérer votre réseau.

### Comment désactiver le mode pont si je ne peux pas accéder aux paramètres?

Si vous êtes bloqué, faites une **Réinitialisation d'Usine Matérielle**. Trouvez le trou de réinitialisation à l'arrière (CODA-4680) ou en dessous (CODA-5610Q) du modem. Maintenez le bouton enfoncé **10-15 secondes** avec un trombone jusqu'à ce que les lumières clignotent. Ça restaure le modem à son état original avec Wi-Fi activé.

### Le mode pont règle-t-il le « Double NAT » pour le gaming?

Oui. Si vous utilisez votre propre routeur sans mode pont, vous créez un « Double NAT » (Traduction d'Adresse Réseau) qui cause du lag et des problèmes de connexion dans les jeux (Xbox/PlayStation). Activer le mode pont donne à votre routeur l'IP publique, résolvant le Double NAT instantanément.

### Le mode pont affectera-t-il ma facture Fizz?

Non. C'est un changement de configuration gratuit qui n'affecte pas les prix.

---

## Économisez sur Votre Internet Fizz

Vous configurez une nouvelle connexion internet résidentielle Fizz? Utilisez le code de parrainage **HN9SM** à l'inscription pour économiser jusqu'à **40 $** sur vos premiers mois!

---

## Articles Connexes

- [Paramètres APN Fizz Ne Fonctionnent Pas?](/fr/blogue/parametres-apn-mms-fizz) - Corrigez les problèmes de données mobiles et MMS
- [Comparaison Fizz vs Public Mobile](/fr/blogue/comparaison-fizz-public-mobile) - Comparer les fournisseurs économiques
- [Guide Mes Récompenses Fizz](/fr/blogue/guide-recompenses-fizz) - Maximisez vos avantages
