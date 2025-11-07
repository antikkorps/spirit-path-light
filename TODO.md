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
