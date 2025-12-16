# OpenBot

Bot Discord pour gérer vos parties **OpenFront** directement depuis Discord. Communication en temps réel via API et WebSocket.

[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com) [![Next.js](https://img.shields.io/badge/Next.js_14+-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com) [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion)

## Description

OpenBot est un bot Discord innovant qui permet aux joueurs de créer, configurer et gérer leurs parties OpenFront sans quitter Discord. Grâce à une architecture moderne basée sur des API et des WebSockets, le bot offre une expérience fluide et réactive.

## Fonctionnalités

- **Création de parties** - Lancez des parties OpenFront en quelques commandes
- **Configuration avancée** - Paramétrez vos parties directement depuis Discord
- **Communication temps réel** - WebSocket pour des mises à jour instantanées
- **Gestion des joueurs** - Invitations, rôles et suivi des participants
- **Notifications** - Alertes automatiques sur l'état des parties
- **Commandes intuitives** - Interface Discord simple et ergonomique

## Architecture

```
OpenBot/
├── Website/          # Site web Next.js 14+ (vitrine + dashboard)
├── bot/             # Bot Discord (à venir)
├── api/             # API REST (à venir)
└── websocket/       # Serveur WebSocket (à venir)
```

## Site Web

Le site web du projet est développé avec :
- **Next.js 14+** avec App Router
- **TypeScript** pour la fiabilité
- **Tailwind CSS** pour le design
- **Framer Motion** pour les animations

### Installation du site

```bash
cd Website
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Roadmap

### Phase 1 - Site Web (En cours)
- [x] Configuration Next.js 14+
- [x] Design landing page
- [x] Composants de base
- [ ] Page de documentation
- [ ] Dashboard d'administration

### Phase 2 - Bot Discord (À venir)
- [ ] Configuration Discord.js
- [ ] Commandes de base
- [ ] Système de permissions
- [ ] Intégration API

## Stack Technique

### Frontend (Website) ✅
- **Next.js 14.2+** - Framework React avec App Router (SSR, SSG, RSC)
- **TypeScript 5+** - Typage statique pour la robustesse du code
- **Tailwind CSS 3.4+** - Framework CSS utility-first
  - Configuration personnalisée avec thème Discord
  - Support dark mode natif
  - Animations personnalisées
- **Framer Motion 11+** - Bibliothèque d'animations React
  - Animations de page
  - Transitions fluides
  - Effets hover interactifs
- **React 18.3+** - Bibliothèque UI avec Server Components
- **ESLint** - Linter avec configuration Next.js
- **PostCSS + Autoprefixer** - Traitement CSS

### DevOps & Outils
- Git (branche `website`)
- Déploiement à définir

## Installation

### Prérequis
- Node.js 18+
- npm ou yarn
- Un serveur Discord (pour les tests)

### Clonage du projet

```bash
git clone <url-repo>
cd OpenBot
```

### Installation des dépendances

```bash
# Pour le site web
cd Website
npm install
```



## Contribution

Projet en phase de développement actif. Les contributions seront les bienvenues une fois le projet stabilisé.

## Licence

[À définir]

## Équipe

Projet MyDigitalSchool - Développement API/WebSocket

## Contact

- Discord: [À venir]
- GitHub: [Ce repo]

---

**Status**: En développement actif
**Version**: 0.1.0 (Phase de recherche et développement)