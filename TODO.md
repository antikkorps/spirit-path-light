# TODO - Spirit Path Light

## 📊 État d'avancement global

**Progression générale : ~85% complété** ✨

### ✅ Réalisations majeures :
- **Design & UX** : Refonte complète avec identité visuelle professionnelle
- **CMS/CRM** : Configuration complète de Sanity avec tous les schémas
- **Formulaires** : Formulaire de contact fonctionnel avec Netlify
- **RGPD** : Politique de confidentialité complète et bannière cookies
- **Blog** : Système complet avec design responsive
- **Avis clients** : Intégration DiceBear, interface CRM et cartes optimisées
- **SEO** : Configuration complète, sitemap XML, Twitter Cards et données structurées
- **Newsletter** : Système d'inscription fonctionnel
- **FAQ** : Section avec schéma Sanity
- **Témoignages** : Système de filtrage interactif et modal "lire plus"

### 🔄 En cours :
- Tests en production du formulaire de contact
- Nettoyage automatique des données (6 mois)

### 📋 À venir (priorité haute) :
- Configuration Google Search Console et Bing Webmaster Tools
- Optimisation des Core Web Vitals et performance SEO

### 📋 À venir (priorité moyenne) :
- Animations au scroll
- Galerie photos
- Système de rendez-vous
- Multilingue

---

## 🎨 Design & UX

- [x] Améliorer le visuel général du site
  - [x] Créer une identité visuelle professionnelle tout en gardant l'aspect "ressenti"
  - [x] Harmoniser les couleurs et typographies
  - [x] Améliorer l'espacement et la hiérarchie visuelle
  - [x] Assurer la cohérence des composants

- [x] Refondre le bouton du Hero
  - [x] Remplacer le gradient actuel (manque de lisibilité)
  - [x] Améliorer le contraste texte/fond
  - [x] Tester différentes variantes (couleur unie, ombre portée, animation subtile)

## 📝 CMS/CRM (Sanity)

- [x] Configurer la gestion de la page d'accueil
  - [x] Créer un schéma Sanity pour les sections modifiables
  - [x] Permettre l'édition du Hero
  - [x] Permettre l'édition des sections principales
  - [ ] Ajouter un aperçu en temps réel (preview)

- [x] Configurer le système de blog
  - [x] Créer le schéma d'articles de blog
  - [x] Ajouter les champs : titre, contenu (rich text), image, date, catégories, tags
  - [x] Configurer l'éditeur Portable Text
  - [x] Ajouter un système de brouillons/publication

- [x] Configurer la gestion des avis clients
  - [x] Créer le schéma pour les témoignages
  - [x] Intégrer la sélection d'avatars DiceBear
  - [x] Champs : nom/pseudonyme, avis, note, avatar choisi, date
  - [x] Système de validation/modération

## 📧 Formulaires & Intégrations

- [x] Implémenter le formulaire de contact avec Netlify Forms
  - [x] Créer le composant de formulaire
  - [x] Configurer l'attribut `netlify` sur le form
  - [x] Ajouter la validation côté client
  - [x] Créer une page de confirmation
  - [ ] Tester l'envoi en production

- [x] Newsletter
  - [x] Créer le composant d'inscription
  - [x] Intégrer avec le système d'envoi
  - [x] Améliorer le design de la carte newsletter
  - [x] Ajouter une animation d'inscription réussie
  - [x] Personnaliser les messages de confirmation

## 🔒 Données & Confidentialité

- [x] Politique de confidentialité
  - [x] Rédiger la politique de données (RGPD)
  - [x] Créer une page dédiée
  - [x] Ajouter les mentions obligatoires

- [x] Gestion des cookies et consentements
  - [x] Implémenter une bannière de consentement
  - [x] Créer un schéma Sanity pour stocker les consentements de manière anonymisée
    - Données à conserver : IP (hashée), région, choix de cookies, timestamp
    - Exclure : nom, email, données personnelles
  - [ ] Implémenter un système de nettoyage automatique (tous les 6 mois)
  - [ ] Créer un script de purge des données anciennes
  - [ ] Documenter la procédure de nettoyage

## 📰 Blog

- [x] Design de la page blog
  - [x] Créer une page d'index des articles (grille/liste)
  - [x] Designer les cartes d'articles
  - [ ] Ajouter filtres par catégorie/tags
  - [ ] Implémenter la pagination

- [x] Design de l'article individuel
  - [x] Template d'article responsive
  - [x] Typographie optimisée pour la lecture
  - [ ] Partage sur réseaux sociaux
  - [ ] Navigation article précédent/suivant
  - [ ] Articles suggérés en bas de page

- [x] Mise en forme avancée des articles
  - [x] Améliorer le rendu du Portable Text (titres, listes, citations)
  - [x] Ajouter des styles pour les blocs de code
  - [x] Optimiser l'affichage des images dans les articles
  - [x] Créer un layout engageant avec sidebar
  - [x] Ajouter une table des matières automatique

## ⭐ Avis Clients

- [x] Créer la section témoignages
  - [x] Designer le composant de carte témoignage
  - [x] Intégrer DiceBear pour les avatars asexués
  - [x] Implémenter un carousel ou grille
  - [x] Connecter à Sanity pour récupérer les avis
  - [x] Ajouter des animations subtiles
  - [x] Optimiser la hauteur des cartes avec système "lire plus"
  - [x] Implémenter une modal élégante pour les témoignages longs

- [x] Interface CRM pour les avis
  - [x] Créer un sélecteur d'avatars DiceBear dans Sanity
  - [x] Prévisualisation de l'avatar choisi
  - [x] Options de tri et filtrage des avis

## 🔍 SEO (Optimisation pour les moteurs de recherche)

- [x] Configuration de base
  - [x] Configurer le fichier `robots.txt`
  - [x] Créer et soumettre le sitemap XML
  - [ ] Configurer Google Search Console
  - [ ] Configurer Bing Webmaster Tools
  - [x] Implémenter un fichier `manifest.json` pour PWA

- [x] Meta tags & OpenGraph
  - [x] Ajouter les meta descriptions sur toutes les pages (150-160 caractères)
  - [x] Configurer les balises OpenGraph (og:title, og:description, og:image, og:url)
  - [x] Ajouter les Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
  - [ ] Implémenter les meta tags dynamiques via Sanity
  - [ ] Créer des images OG par défaut et personnalisables

- [x] Structure & Données structurées (Schema.org)
  - [x] Implémenter le schema LocalBusiness
  - [x] Ajouter le schema Person (pour le professionnel)
  - [x] Schema Article pour les articles de blog
  - [x] Schema Review/AggregateRating pour les avis clients
  - [ ] Schema BreadcrumbList pour la navigation
  - [x] Tester avec Google Rich Results Test

- [ ] Contenu & Mots-clés
  - [ ] Recherche de mots-clés pertinents (bien-être, développement personnel, etc.)
  - [ ] Optimiser les balises H1, H2, H3 (hiérarchie sémantique)
  - [ ] Ajouter des textes alt descriptifs sur toutes les images
  - [ ] Créer du contenu long-form pour le blog (min 1000 mots)
  - [ ] Optimiser les URLs (slugs courts, descriptifs, sans caractères spéciaux)

- [ ] Performance SEO
  - [ ] Améliorer le temps de chargement (< 3s)
  - [ ] Optimiser le Largest Contentful Paint (LCP)
  - [ ] Optimiser le First Input Delay (FID)
  - [ ] Optimiser le Cumulative Layout Shift (CLS)
  - [ ] Implémenter le lazy loading des images
  - [ ] Minifier CSS/JS
  - [ ] Optimiser les Core Web Vitals

- [ ] SEO Local
  - [ ] Créer/optimiser la fiche Google My Business
  - [ ] Ajouter l'adresse et coordonnées en format NAP (Name, Address, Phone)
  - [ ] Implémenter une carte Google Maps (si pertinent)
  - [ ] Cibler les mots-clés locaux

- [ ] Liens & Autorité
  - [ ] Créer un maillage interne cohérent (liens entre articles de blog)
  - [ ] Ajouter des liens externes vers des sources de qualité
  - [ ] Planifier une stratégie de backlinks
  - [ ] Créer des pages ressources partageables

- [ ] Suivi & Analytics
  - [ ] Configurer Google Analytics 4 (GA4)
  - [ ] Configurer les objectifs et conversions
  - [ ] Suivre le taux de rebond et le temps sur page
  - [ ] Analyser les pages de sortie
  - [ ] Monitorer le classement des mots-clés

## 🚀 Optimisations & Performance

- [ ] Optimiser les images (formats modernes, lazy loading)
- [ ] Améliorer les Core Web Vitals
- [ ] Configurer le cache
- [ ] Tester l'accessibilité (WCAG)

## 📱 Responsive & Mobile

- [ ] Tester toutes les pages sur mobile
- [ ] Optimiser la navigation mobile
- [ ] Adapter les tailles de texte et boutons

---

## Notes

- **Priorité haute** : Bouton Hero, formulaire contact, politique RGPD
- **Design** : Privilégier la sobriété et l'élégance pour rester cohérent avec l'activité
- **Avatars** : Utiliser [DiceBear](https://dicebear.com/) avec un style neutre (ex: "initials", "shapes", "bottts-neutral")
- **Blog** : Penser SEO dès le départ (méta descriptions, OG images, sitemap)

## Améliorations futures (suggestions)

- [x] Mode sombre/clair
- [ ] Animations au scroll (subtiles)
- [x] Section FAQ avec schéma Sanity
- [x] Newsletter (intégration Mailchimp/Sendgrid)
- [ ] Galerie photos des séances (si pertinent)
- [ ] Système de prise de rendez-vous en ligne
- [ ] Multilingue (FR/EN)
