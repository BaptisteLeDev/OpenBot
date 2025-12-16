# OpenBot Website

Site web pour le bot Discord OpenBot - Gestion de parties OpenFront via Discord.

## Stack Technique

- **Next.js 14+** avec App Router
- **TypeScript** pour la robustesse du code
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations fluides

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Structure du projet

```
Website/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
├── components/
│   ├── Hero.tsx         # Section hero
│   ├── Features.tsx     # Section fonctionnalités
│   └── Footer.tsx       # Footer
├── public/              # Assets statiques
└── package.json
```

## Fonctionnalités à venir

- [ ] Page de documentation
- [ ] Dashboard d'administration
- [ ] Intégration API OpenFront
- [ ] Système d'authentification Discord OAuth2
- [ ] Tableau de bord des serveurs
