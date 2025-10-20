# Premier Portfolio

Mon premier portfolio développé avec Vue.js 3 - Une vitrine de mes compétences et projets web - 2023.

🔗 **[Voir le portfolio en ligne](https://ubiquitous-kheer-6b6b9d.netlify.app/#/)**

## 📋 Description

Ce projet représente mon premier portfolio développé avec Vue.js. Il s'agit d'une application web moderne qui présente mes compétences, mes projets et mon parcours de développeur.

## 🚀 Technologies utilisées

- **Vue.js 3** - Framework JavaScript progressif avec Composition API
- **Vite** - Build tool moderne et rapide
- **Vue Router** - Routage officiel pour Vue.js
- **Pinia** - Store de gestion d'état (state management)
- **GitHub Pages** - Hébergement statique

## 📦 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

```bash
# Cloner le repository
git clone https://github.com/blaisebouda/first-portfolio.git

# Accéder au dossier
cd first-portfolio

# Installer les dépendances
npm install
```

## 🛠️ Commandes disponibles

```bash
# Lancer le serveur de développement avec Hot-Reload
npm run dev

# Compiler et minifier pour la production
npm run build

# Prévisualiser le build de production localement
npm run preview

# Déployer avec commit Git personnalisé
npm run git "votre message de commit"
```

## 🌐 Déploiement

Ce projet utilise un workflow de déploiement automatisé sur GitHub Pages.

### Déploiement manuel

Pour déployer une nouvelle version avec un message de commit :

```bash
npm run git "description des changements"
```

Cette commande :
1. Build l'application pour la production
2. Ajoute tous les fichiers au staging Git
3. Crée un commit avec votre message
4. Push le code vers le repository principal
5. Déploie automatiquement le dossier `dist` sur la branche `gh-pages`

### Déploiement en deux étapes

Vous pouvez aussi déployer en utilisant les commandes séparément :

```bash
# 1. Builder et commiter
npm run build
git add -A
git commit -m "votre message"

# 2. Déployer
npm run postgit
```

## 📁 Structure du projet

```
first-portfolio/
├── src/
│   ├── assets/          # Ressources statiques (images, styles)
│   ├── components/      # Composants Vue réutilisables
│   ├── router/          # Configuration Vue Router
│   ├── stores/          # Stores Pinia pour la gestion d'état
│   ├── views/           # Pages/vues de l'application
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée de l'application
├── public/              # Fichiers publics statiques
├── dist/                # Build de production (généré)
├── node_modules/        # Dépendances (généré)
├── index.html           # Template HTML principal
├── package.json         # Configuration npm et scripts
└── vite.config.js       # Configuration Vite
```

## 🔧 Configuration

### Vue Router

Le projet utilise Vue Router 4 pour la navigation entre les pages :
- Configuration dans `src/router/`
- Support du mode history
- Navigation programmatique et déclarative

### Pinia

Gestion d'état moderne pour Vue.js :
- Stores modulaires dans `src/stores/`
- API simple et intuitive
- Support TypeScript natif
- DevTools intégré

### Vite

Configuration optimisée pour Vue.js :
- Hot Module Replacement (HMR)
- Build ultra-rapide
- Optimisation automatique des assets
- Support des imports CSS et images

## 🎓 Contexte du projet

Ce portfolio représente une étape importante dans mon parcours de développeur. C'est mon premier projet utilisant :
- Vue.js 3 avec la Composition API
- Un système de gestion d'état avec Pinia
- Le routage côté client avec Vue Router
- Un workflow de déploiement automatisé

## 💡 Fonctionnalités

- ✅ Navigation fluide entre les sections
- ✅ Présentation des projets réalisés
- ✅ Section À propos / Compétences
- ✅ Formulaire de contact
- ✅ Design responsive
- ✅ Déploiement automatisé

## 📚 Ressources recommandées

### IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (désactiver Vetur) + [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### Documentation

- [Documentation Vue.js](https://vuejs.org/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Vue Router](https://router.vuejs.org/)
- [Documentation Pinia](https://pinia.vuejs.org/)
- [Configuration Vite Reference](https://vitejs.dev/config/)

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 🔄 Historique du projet

Ce projet a évolué à travers plusieurs étapes :
- Premier dépôt initial avec la structure de base Vue.js
- Mise en place du routing et de la gestion d'état
- Déploiement automatisé sur GitHub Pages
- Améliorations continues du design et des fonctionnalités

## 📝 License

Ce projet est sous licence publique. Tous droits réservés.

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter via [GitHub](https://github.com/blaisebouda).

---

Développé avec 💚 par Blaise Bouda | Apprentissage continu avec Vue.js
