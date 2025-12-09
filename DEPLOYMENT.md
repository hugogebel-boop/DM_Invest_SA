# Guide de Déploiement - DM Invest SA

Ce guide vous explique comment déployer le site DM Invest SA pour le montrer à votre client.

## Option 1 : Vercel (Recommandé - Gratuit et Optimisé)

Vercel est la plateforme recommandée pour Next.js. Elle offre :
- ✅ Déploiement automatique à chaque push
- ✅ URL gratuite et personnalisable
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Preview des pull requests

### Étapes de configuration

#### 1. Créer le projet sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New..." > "Project"
4. Importez votre dépôt GitHub `8 DM Invest`
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

**Vercel va créer une URL automatique** (ex: `dm-invest-xyz.vercel.app`)

#### 2. Configurer le domaine personnalisé (optionnel)

Si vous voulez un nom de domaine personnalisé :

1. Dans Vercel, allez dans Settings > Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS

#### 3. Activer le déploiement automatique via GitHub Actions

Pour que chaque push déclenche un déploiement automatique :

1. **Générer un token Vercel** :
   - Vercel Dashboard > Settings > Tokens
   - Créez un nouveau token (nom: "GitHub Actions")
   - Copiez le token

2. **Récupérer les IDs du projet** :
   - Dans Vercel, allez dans votre projet
   - Settings > General
   - Copiez :
     - **Project ID**
     - **Organization ID** (visible dans l'URL ou Settings)

3. **Ajouter les secrets GitHub** :
   - Sur GitHub, allez dans votre dépôt
   - Settings > Secrets and variables > Actions
   - Cliquez sur "New repository secret"
   - Ajoutez :
     - `VERCEL_TOKEN` : votre token Vercel
     - `VERCEL_ORG_ID` : l'ID de votre organisation
     - `VERCEL_PROJECT_ID` : l'ID de votre projet

4. **Tester le déploiement** :
   - Faites un push sur la branche `main`
   - Le workflow GitHub Actions va déployer automatiquement

### Partager avec le client

Une fois déployé, vous pouvez partager l'URL Vercel avec votre client :
- URL de production : `https://votre-projet.vercel.app`
- Les mises à jour seront automatiques à chaque push

---

## Option 2 : Netlify (Alternative)

Netlify est aussi une excellente option pour Next.js.

### Configuration

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre compte GitHub
3. "Add new site" > "Import an existing project"
4. Sélectionnez votre dépôt
5. Configuration :
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Déployez

---

## Option 3 : Déploiement manuel

### Build local

```bash
npm install
npm run build
```

Le dossier `.next` contiendra votre build de production.

### Hébergement sur un serveur

Vous pouvez héberger le build sur n'importe quel serveur Node.js :

```bash
npm start
```

Le site sera accessible sur le port 3000 par défaut.

---

## Vérification du déploiement

Après déploiement, vérifiez :

- ✅ Le site se charge correctement
- ✅ Toutes les images s'affichent
- ✅ Les liens fonctionnent
- ✅ Le responsive fonctionne sur mobile
- ✅ Les formulaires fonctionnent (si applicable)

---

## Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs dans Vercel/Netlify
2. Vérifiez les workflows GitHub Actions
3. Testez le build localement avec `npm run build`

