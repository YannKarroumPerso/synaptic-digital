# Automatisation du workflow de publication

Ce document explique comment publier automatiquement les contenus produits par le système d'agents éditoriaux Cowork.

## Vue d'ensemble

```
[Agents Cowork]               [Toi]                  [GitHub]                  [Vercel]
       │                        │                        │                          │
       ▼                        ▼                        ▼                          ▼
   Produisent           git add . && git push       Action déclenchée         Site déployé
   un .md dans           depuis ton dossier          au push sur main         en 90 secondes
   content/blog/         local synaptic-digital      → trigger Vercel
```

**Temps total à publier un article** : 2 minutes (git push) → 1m30 (build + deploy Vercel) = **< 4 minutes**.

## Configuration initiale (une seule fois)

### 1. Cloner le repo sur ton poste

```bash
cd ~/projets   # ou autre
git clone https://github.com/YannKarroumPerso/synaptic-digital.git
cd synaptic-digital
```

### 2. Activer l'auto-deploy (2 actions manuelles, 1 minute)

#### 2a. Créer le workflow GitHub Actions

Le fichier `scripts/github-actions-templates/deploy.yml` contient le workflow prêt à l'emploi.
Mon PAT n'a pas le scope nécessaire pour le pousser directement dans `.github/workflows/`, donc à faire manuellement :

1. Aller sur [le repo GitHub](https://github.com/YannKarroumPerso/synaptic-digital) → onglet **Actions**
2. Cliquer "New workflow" → "set up a workflow yourself"
3. Renommer le fichier `main.yml` en `deploy.yml`
4. Copier-coller le contenu de `scripts/github-actions-templates/deploy.yml` (présent dans le repo)
5. "Commit changes"

#### 2b. Ajouter le secret VERCEL_TOKEN

1. [Settings → Secrets and variables → Actions](https://github.com/YannKarroumPerso/synaptic-digital/settings/secrets/actions)
2. "New repository secret"
3. **Name** : `VERCEL_TOKEN`
4. **Secret** : le token Vercel (`vcp_5jnu...`)
5. "Add secret"

C'est tout — à partir de là, chaque `git push` sur `main` déclenche automatiquement un deploy production sur Vercel.

## Workflow hebdomadaire

### Lundi matin → Mardi matin : les agents Cowork tournent

Les 4 agents Cowork (Veille → Production → SEO → Diffusion) produisent les `.md` dans le dossier `content/blog/` du repo local (ou dans ton dossier Synaptic, à toi de les copier).

### Mardi : publication

Une fois validé :

```bash
cd ~/projets/synaptic-digital
git pull                                    # récupère les éventuels changements distants
# ... copier les .md des agents dans content/blog/ si besoin
git add content/blog/                       # stage les nouveaux articles
git commit -m "Publication semaine XX"      # commit
git push                                    # push → l'action GitHub déclenche le deploy
```

L'action GitHub Actions tourne automatiquement, déclenche le deploy Vercel, et **dans 90 secondes le nouvel article est en ligne** sur synaptic-digital.fr/blog/[slug].

### Vérifier qu'un deploy est en cours

Ouvrir https://github.com/YannKarroumPerso/synaptic-digital/actions — l'action "Deploy production" doit apparaître avec un statut en cours (jaune) ou terminé (vert).

## Format des fichiers markdown

Pour qu'un nouvel article apparaisse correctement, il doit suivre ce frontmatter :

```yaml
---
cover: "https://images.unsplash.com/photo-XXX?w=1600&q=85&auto=format&fit=crop"
coverAlt: "Description de l'image pour accessibilité"
title: "Titre complet de l'article"
slug: "slug-court-pour-l-url"
date: "2026-05-13"
type: "article"  # ou "etude" ou "decryptage"
theme: "seo-local"  # ou "creation-site-web", "ia-pme", "reseaux-sociaux", "e-commerce"
excerpt: "Phrase d'accroche pour la liste (max 2 lignes)"
metaDescription: "Meta description SEO 150-160 caractères"
keywords:
  - "mot-clé 1"
  - "mot-clé 2"
---

# Titre H1
Contenu en markdown standard…
```

## Trouver une image Unsplash gratuite

Méthode rapide pour les agents Cowork ou toi :

1. Aller sur https://unsplash.com/s/photos/[keyword]
   Exemples : `https://unsplash.com/s/photos/local-business`, `https://unsplash.com/s/photos/ai-business`
2. Cliquer sur une photo qui colle au sujet
3. Récupérer l'URL de l'image (clic droit → Copy image address sur la photo en grand)
4. L'URL doit ressembler à : `https://images.unsplash.com/photo-XXX?w=...`
5. Modifier les paramètres pour notre format : `?w=1600&q=85&auto=format&fit=crop`

## Déclencher un deploy manuellement

Si jamais le hook ne se déclenche pas, on peut forcer :

1. Sur GitHub → Actions → "Deploy production" → bouton "Run workflow" → sélectionner branche `main`
2. Ou directement sur Vercel : ouvrir un commit et cliquer "Redeploy"

## En cas de pépin

- **Le push ne déclenche pas l'action** : vérifier que `.github/workflows/deploy.yml` existe sur la branche main
- **L'action échoue** : ouvrir les logs sur GitHub Actions, le message d'erreur est explicite
- **Le secret manque** : refaire l'étape "Configuration initiale → 2"
- **Le token Vercel a expiré** : régénérer sur Vercel et mettre à jour le secret GitHub

