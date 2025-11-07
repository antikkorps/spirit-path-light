# Changelog - Spirit Path Light

## [2.0.0] - 2025-01-07

### ✨ Nouvelles fonctionnalités majeures

#### 🌙 Mode sombre/clair
- **Theme switcher** élégant dans le header
- **Variables CSS** pour tous les composants
- **Persistance** avec localStorage
- **Détection automatique** des préférences système
- **Transitions douces** entre les thèmes
- **Support complet** sur toutes les pages

#### 📧 Newsletter Brevo (Sendinblue)
- **Intégration complète** avec l'API Brevo
- **3 variantes** de composant newsletter : default, inline, centered
- **Validation** côté client et serveur
- **Gestion des doublons** intelligente
- **Messages de succès/erreur** personnalisés
- **API endpoint** `/api/newsletter`

#### 📱 Optimisation mobile complète
- **Menu mobile** fonctionnel avec animation
- **Hero responsive** avec tailles adaptatives
- **Touch targets** optimisés (min 44px)
- **Espacement mobile** amélioré
- **Textes lisibles** sur tous les appareils
- **Theme switcher** visible sur mobile

### 🎨 Améliorations de design

- Classes `dark:` ajoutées sur tous les composants
- Transitions fluides entre thèmes
- Meilleure lisibilité en mode sombre
- Boutons et liens optimisés pour le touch
- Grilles responsive sur toutes les pages

### 📂 Nouveaux fichiers

```
src/components/
├── ThemeSwitch.astro          # Switcher de thème
└── Newsletter.astro            # Composant newsletter réutilisable

src/pages/api/
└── newsletter.ts               # API endpoint Brevo

.env.example                    # Configuration Brevo
CHANGELOG.md                    # Ce fichier
```

### 🔧 Configuration

#### Variables d'environnement (.env)
```env
BREVO_API_KEY=your-api-key
BREVO_LIST_ID=1
SITE_URL=https://spiritpathlight.com
```

#### Installation des dépendances
```bash
npm install @getbrevo/brevo
```

### 📝 Utilisation

#### Mode sombre
Le mode sombre s'active automatiquement selon les préférences système ou via le bouton dans le header.

#### Newsletter
```astro
<Newsletter variant="default" />      <!-- Version complète -->
<Newsletter variant="inline" showNames={true} />  <!-- Version compacte avec prénom/nom -->
<Newsletter variant="centered" />     <!-- Version centrée -->
```

#### API Newsletter
```javascript
POST /api/newsletter
{
  "email": "user@example.com",
  "firstName": "John",  // optionnel
  "lastName": "Doe"     // optionnel
}
```

### 🐛 Corrections

- Menu mobile non fonctionnel → **Résolu**
- Hero trop grand sur mobile → **Optimisé**
- Textes illisibles en mode sombre → **Corrigé**
- Boutons trop petits sur mobile → **Agrandis**

### 🔄 Changements techniques

- Ajout du script inline pour éviter le flash de thème
- Utilisation de `localStorage` pour la persistance
- API Brevo avec gestion d'erreurs complète
- Responsive breakpoints : sm (640px), md (768px), lg (1024px)

### 📊 Performance

- ✅ Mode sombre sans re-render complet
- ✅ Theme switcher léger (~3KB)
- ✅ Newsletter avec validation optimisée
- ✅ Menu mobile avec transitions CSS

### 🚀 Prochaines étapes recommandées

1. Configurer la clé API Brevo dans `.env`
2. Créer une liste dans Brevo et noter l'ID
3. Tester l'inscription newsletter
4. Personnaliser les couleurs du dark mode si nécessaire
5. Ajouter des double opt-in si requis légalement

---

## [1.0.0] - Version précédente

Voir TODO.md pour la liste complète des fonctionnalités de la v1.0.
