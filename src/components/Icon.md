# Composant Icon

Composant réutilisable pour les icônes dans l'application Spirit Path Light, inspiré par https://icones.js.org/.

## Utilisation

```astro
---
import Icon from '../components/Icon.astro';
---

<!-- Icône de base -->
<Icon name="calendar" size="sm" className="text-primary" />

<!-- Icône avec taille personnalisée -->
<Icon name="clock" size="lg" className="w-8 h-8 text-secondary" />

<!-- Icône avec classes CSS custom -->
<Icon name="heart" className="text-accent hover:scale-110 transition-transform" />
```

## Props

| Prop | Type | Valeur par défaut | Description |
|------|------|-------------------|-------------|
| `name` | `string` | - | Nom de l'icône (obligatoire) |
| `className` | `string` | `''` | Classes CSS additionnelles |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Taille prédéfinie de l'icône |

## Icônes disponibles

| Nom | Description | Usage recommandé |
|-----|-------------|------------------|
| `calendar` | 📅 Icône de calendrier | Boutons de réservation |
| `clock` | 🕐 Icône d'horloge | Modalités, durée |
| `euro` | 💶 Icône euro | Prix, tarifs |
| `file-text` | 📄 Icône de document | Livrable, documents |
| `users` | 👥 Icône d'utilisateurs | Public visé |
| `list` | 📋 Icône de liste | Préparation, éléments à faire |
| `check` | ✅ Icône de validation | Éléments validés, succès |
| `sparkles` | ✨ Icône d'étincelles | Éléments spirituels, magiques |
| `heart` | ❤️ Icône de cœur | Amour, bienveillance |

## Tailles disponibles

- `xs` : `w-3 h-3` (12px)
- `sm` : `w-4 h-4` (16px) 
- `md` : `w-5 h-5` (20px) - *Défaut*
- `lg` : `w-6 h-6` (24px)
- `xl` : `w-8 h-8` (32px)

## Exemples d'utilisation

### Dans ServiceCard.astro

```astro
<!-- Icône pour le bouton de réservation -->
<Icon name="calendar" size="sm" className="flex-shrink-0 text-current" />

<!-- Icônes pour les détails du service -->
<Icon name="clock" size="md" className="text-primary" />
<Icon name="euro" size="md" className="text-secondary" />
<Icon name="users" size="md" className="text-accent" />
```

### Dans d'autres composants

```astro
<!-- Icône avec effet de survol -->
<Icon name="heart" className="text-red-500 hover:scale-110 transition-transform" />

<!-- Icône avec couleur dynamique -->
<Icon name="sparkles" className={`text-${colorScheme}`} />
```

## Avantages

- ✅ **Réutilisable** : Un seul composant pour toutes les icônes
- ✅ **Type-safe** : Props typées avec TypeScript
- ✅ **Flexible** : Support des classes CSS personnalisées
- ✅ **Cohérent** : Design system unifié
- ✅ **Performant** : SVG inline optimisé