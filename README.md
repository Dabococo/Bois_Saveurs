# Site Bois-et-Saveurs

Refonte complète du site [bois-et-saveurs.fr](https://www.bois-et-saveurs.fr) avec Next.js, React, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)

## 📦 Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
├── app/
│   ├── page.tsx                    # Page d'accueil
│   ├── decouvrez-nos-planches/     # Page catalogue
│   ├── explorez-les-usages/         # Page usages
│   ├── entretenez-votre-planche/   # Page entretien
│   ├── layout.tsx                   # Layout principal
│   └── globals.css                  # Styles globaux
├── components/
│   ├── Header.tsx                   # Navigation
│   ├── Footer.tsx                   # Pied de page
│   ├── Hero.tsx                     # Section hero
│   └── Section.tsx                  # Section animée
└── public/
    └── images/                      # Images du site
```

## 🖼️ Images

Les images du site original doivent être placées dans le dossier `public/images/`. 

Voir `public/images/README.md` pour la liste complète des images nécessaires.

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation intuitive
- ✅ Optimisation des images avec Next.js Image
- ✅ Site statique (SSG)
- ✅ Palette de couleurs naturelles (bois, beige, verts)

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🎨 Palette de couleurs

- **Wood Light**: `#d4a574`
- **Wood Medium**: `#8b6f47`
- **Wood Dark**: `#5c4a2f`
- **Accent Green**: `#6b8e5a`
- **Accent Beige**: `#e8ddd4`

## 📄 Pages

1. **Accueil** (`/`) - Présentation et navigation
2. **Découvrez nos planches** (`/decouvrez-nos-planches`) - Catalogue des planches
3. **Explorez les usages** (`/explorez-les-usages`) - Guide d'utilisation
4. **Entretenez votre planche** (`/entretenez-votre-planche`) - Conseils d'entretien

## 🔧 Configuration

Le site utilise Tailwind CSS v4 avec configuration dans `app/globals.css` et `tailwind.config.ts`.