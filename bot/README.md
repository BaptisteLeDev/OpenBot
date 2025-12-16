# OpenBot - Discord Bot Component

Bot Discord officiel pour le jeu **OpenFront**.
Ce module gère les interactions utilisateurs via Discord et communique avec l'API OpenFront pour piloter les parties.

[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.io)

## 🏗️ Architecture

Le bot est architecturé autour de 3 composants majeurs :

1.  **Discord Client** (`src/client.ts`) : Gère la connexion WebSocket et les commandes Slash.
2.  **OpenFront Service** (`src/services/openfront/`) : Client HTTP typé pour l'API du jeu.
3.  **Internal API** (`src/api/`) : Serveur Fastify pour l'observabilité (Health-check, Metrics).

## 🚀 Stack Technique

- **Runtime** : Node.js (via `ts-node` en dev)
- **Langage** : TypeScript
- **Framework Discord** : `discord.js` v14
- **API Interne** : `fastify` + `@fastify/swagger`
- **Validation** : `zod` (prévu) / Typage strict

## 📦 Installation

```bash
# Dans le dossier bot/
pnpm install
```

## ⚙️ Configuration

Créer un fichier `.env` à la racine (ou s'assurer que le `.env` global est accessible) :

```env
# Discord
DISCORD_TOKEN=votre_token_ici
DISCORD_CLIENT_ID=votre_id_client
DISCORD_GUILD_ID=votre_guild_id_pour_dev

# OpenFront API
OPENFRONT_API_URL=http://localhost:3000
OPENFRONT_API_KEY=votre_api_key

# Internal API
PORT=3001
HOST=0.0.0.0
```

## 🛠️ Commandes

### Développement

Lance le bot avec rechargement automatique (`nodemon`) :

```bash
npm run dev
```

### Production

Compile le TypeScript en JavaScript et lance le dossier `dist/` :

```bash
npm run build
npm start
```

## 📂 Structure des fichiers

```text
src/
├── api/                 # API interne (monitoring)
├── services/            # Services externes (OpenFront)
├── commands/            # Logique des commandes (à implémenter)
├── client.ts            # Client Discord.js wrapper
├── config.ts            # Configuration centralisée
└── index.ts             # Point d'entrée
```