# TODO - Spirit Path Light

## 🎨 Design & UX

- [ ] Améliorer le visuel général du site
  - [ ] Créer une identité visuelle professionnelle tout en gardant l'aspect "ressenti"
  - [ ] Harmoniser les couleurs et typographies
  - [ ] Améliorer l'espacement et la hiérarchie visuelle
  - [ ] Assurer la cohérence des composants

- [ ] Refondre le bouton du Hero
  - [ ] Remplacer le gradient actuel (manque de lisibilité)
  - [ ] Améliorer le contraste texte/fond
  - [ ] Tester différentes variantes (couleur unie, ombre portée, animation subtile)

## 📝 CMS/CRM (Sanity)

- [ ] Configurer la gestion de la page d'accueil
  - [ ] Créer un schéma Sanity pour les sections modifiables
  - [ ] Permettre l'édition du Hero
  - [ ] Permettre l'édition des sections principales
  - [ ] Ajouter un aperçu en temps réel (preview)

- [ ] Configurer le système de blog
  - [ ] Créer le schéma d'articles de blog
  - [ ] Ajouter les champs : titre, contenu (rich text), image, date, catégories, tags
  - [ ] Configurer l'éditeur Portable Text
  - [ ] Ajouter un système de brouillons/publication

- [ ] Configurer la gestion des avis clients
  - [ ] Créer le schéma pour les témoignages
  - [ ] Intégrer la sélection d'avatars DiceBear
  - [ ] Champs : nom/pseudonyme, avis, note, avatar choisi, date
  - [ ] Système de validation/modération

## 📧 Formulaires & Intégrations

- [ ] Implémenter le formulaire de contact avec Netlify Forms
  - [ ] Créer le composant de formulaire
  - [ ] Configurer l'attribut `netlify` sur le form
  - [ ] Ajouter la validation côté client
  - [ ] Créer une page de confirmation
  - [ ] Tester l'envoi en production

## 🔒 Données & Confidentialité

- [ ] Politique de confidentialité
  - [ ] Rédiger la politique de données (RGPD)
  - [ ] Créer une page dédiée
  - [ ] Ajouter les mentions obligatoires

- [ ] Gestion des cookies et consentements
  - [ ] Implémenter une bannière de consentement
  - [ ] Créer un schéma Sanity pour stocker les consentements de manière anonymisée
    - Données à conserver : IP (hashée), région, choix de cookies, timestamp
    - Exclure : nom, email, données personnelles
  - [ ] Implémenter un système de nettoyage automatique (tous les 6 mois)
  - [ ] Créer un script de purge des données anciennes
  - [ ] Documenter la procédure de nettoyage

## 📰 Blog

- [ ] Design de la page blog
  - [ ] Créer une page d'index des articles (grille/liste)
  - [ ] Designer les cartes d'articles
  - [ ] Ajouter filtres par catégorie/tags
  - [ ] Implémenter la pagination

- [ ] Design de l'article individuel
  - [ ] Template d'article responsive
  - [ ] Typographie optimisée pour la lecture
  - [ ] Partage sur réseaux sociaux
  - [ ] Navigation article précédent/suivant
  - [ ] Articles suggérés en bas de page

## ⭐ Avis Clients

- [ ] Créer la section témoignages
  - [ ] Designer le composant de carte témoignage
  - [ ] Intégrer DiceBear pour les avatars asexués
  - [ ] Implémenter un carousel ou grille
  - [ ] Connecter à Sanity pour récupérer les avis
  - [ ] Ajouter des animations subtiles

- [ ] Interface CRM pour les avis
  - [ ] Créer un sélecteur d'avatars DiceBear dans Sanity
  - [ ] Prévisualisation de l'avatar choisi
  - [ ] Options de tri et filtrage des avis

## 🔍 SEO (Optimisation pour les moteurs de recherche)

- [ ] Configuration de base
  - [ ] Configurer le fichier `robots.txt`
  - [ ] Créer et soumettre le sitemap XML
  - [ ] Configurer Google Search Console
  - [ ] Configurer Bing Webmaster Tools
  - [ ] Implémenter un fichier `manifest.json` pour PWA

- [ ] Meta tags & OpenGraph
  - [ ] Ajouter les meta descriptions sur toutes les pages (150-160 caractères)
  - [ ] Configurer les balises OpenGraph (og:title, og:description, og:image, og:url)
  - [ ] Ajouter les Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
  - [ ] Implémenter les meta tags dynamiques via Sanity
  - [ ] Créer des images OG par défaut et personnalisables

- [ ] Structure & Données structurées (Schema.org)
  - [ ] Implémenter le schema LocalBusiness
  - [ ] Ajouter le schema Person (pour le professionnel)
  - [ ] Schema Article pour les articles de blog
  - [ ] Schema Review/AggregateRating pour les avis clients
  - [ ] Schema BreadcrumbList pour la navigation
  - [ ] Tester avec Google Rich Results Test

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

- [ ] Mode sombre/clair
- [ ] Animations au scroll (subtiles)
- [ ] Section FAQ avec schéma Sanity
- [ ] Newsletter (intégration Mailchimp/Sendgrid)
- [ ] Galerie photos des séances (si pertinent)
- [ ] Système de prise de rendez-vous en ligne
- [ ] Multilingue (FR/EN)
