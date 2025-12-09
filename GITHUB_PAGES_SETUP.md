# Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment déployer le site DM Invest SA sur GitHub Pages pour le montrer à votre client.

## ✅ Configuration Automatique

Le projet est maintenant configuré pour GitHub Pages :
- ✅ Export statique activé (`next.config.js`)
- ✅ Images non optimisées (compatible GitHub Pages)
- ✅ Workflow GitHub Actions prêt (`.github/workflows/deploy-pages.yml`)

## 📋 Étapes pour Activer le Déploiement

### 1. Pousser le code sur GitHub

Si vous ne l'avez pas encore fait :

```bash
git add .
git commit -m "Configuration pour GitHub Pages"
git push origin main
```

(Remplacez `main` par `master` si c'est votre branche principale)

### 2. Activer GitHub Pages dans les Réglages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (Réglages)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - **Source** : `GitHub Actions`
   - (Ne choisissez pas "Deploy from a branch")

### 3. Déclencher le Déploiement

Le déploiement se déclenchera automatiquement :

**Option A - Automatique** :
- Faites un push sur la branche `main` ou `master`
- Le workflow se lancera automatiquement

**Option B - Manuel** :
- Allez dans l'onglet **Actions** de votre dépôt
- Sélectionnez le workflow "Deploy to GitHub Pages"
- Cliquez sur **Run workflow**
- Choisissez la branche `main` ou `master`
- Cliquez sur **Run workflow**

### 4. Vérifier le Déploiement

1. Allez dans l'onglet **Actions**
2. Attendez que le workflow soit terminé (environ 2-3 minutes)
3. Une fois terminé, l'URL de votre site sera visible :
   - Dans l'onglet **Actions** (dans les logs du workflow)
   - Ou dans **Settings > Pages**

L'URL sera du type :
```
https://votre-username.github.io/nom-du-repo/
```

Si votre repo s'appelle `8-DM-Invest`, l'URL sera :
```
https://votre-username.github.io/8-DM-Invest/
```

## 🔄 Mises à Jour Automatiques

À chaque fois que vous ferez un **push** sur la branche `main` ou `master`, le site sera automatiquement reconstruit et redéployé. C'est parfait pour montrer les mises à jour au client !

## 📝 Partager avec le Client

Une fois déployé, partagez simplement l'URL GitHub Pages avec votre client. Il pourra voir le site en temps réel, et chaque mise à jour sera automatique.

## ⚠️ Note Importante

- GitHub Pages héberge uniquement des sites statiques
- Le site fonctionne comme une Single Page Application (SPA)
- Toutes les fonctionnalités de Next.js sont converties en HTML/CSS/JS statiques
- Le site est gratuit et illimité

## 🐛 Dépannage

### Le workflow ne se lance pas
- Vérifiez que GitHub Pages est activé dans Settings > Pages
- Vérifiez que la source est bien "GitHub Actions"

### Le build échoue
- Vérifiez les logs dans l'onglet Actions
- Assurez-vous que toutes les dépendances sont dans `package.json`

### Le site ne s'affiche pas correctement
- Attendez 1-2 minutes après le déploiement (propagation DNS)
- Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)
- Vérifiez que l'URL est correcte

### Besoin d'aide ?
Vérifiez les logs détaillés dans l'onglet **Actions** de votre dépôt GitHub.

