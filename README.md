# Synaptic Digital — Site Web

Landing page de l'agence Synaptic Digital. Stack : HTML statique + Tailwind CDN.

---

## 🚀 Déploiement GitHub → Vercel

### Étape 1 — Créer le repo GitHub

```bash
# Initialiser git dans ce dossier
git init
git add .
git commit -m "feat: initial landing page Synaptic Digital"

# Créer la branche dédiée
git checkout -b feature/landing-page

# Créer le repo sur GitHub (via GitHub CLI)
gh repo create synaptic-digital --public --source=. --remote=origin --push

# OU manuellement sur github.com, puis :
git remote add origin https://github.com/TON_USERNAME/synaptic-digital.git
git push -u origin feature/landing-page
```

### Étape 2 — Connecter à Vercel

**Option A — Via interface Vercel (recommandé)**
1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Cliquer **"Import Git Repository"**
3. Sélectionner `synaptic-digital`
4. Framework preset : **Other** (site statique)
5. Root directory : `.`
6. Cliquer **Deploy**

**Option B — Via Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Étape 3 — Preview par branche (auto)

Vercel crée automatiquement une **Preview URL** pour chaque branche/PR.
- `main` → production : `synaptic-digital.vercel.app`
- `feature/landing-page` → preview : `synaptic-digital-git-feature-landing-page-xxx.vercel.app`

---

## 📁 Structure

```
synaptic-digital/
├── index.html       # Landing page principale
├── vercel.json      # Config déploiement Vercel
├── .gitignore
└── README.md
```

## 🔧 Développement local

```bash
# Serveur local simple
npx serve .
# ou
python3 -m http.server 3000
```

Ouvrir [http://localhost:3000](http://localhost:3000)
