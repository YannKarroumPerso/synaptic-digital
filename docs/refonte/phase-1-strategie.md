# Phase 1 — Stratégie & Sitemap

> Document de travail pour la refonte du site Synaptic Digital.
> Décisions arrêtées avec Yann (mai 2026). Le détail du raisonnement est conservé plus bas.

---

## 🟢 Décisions finales (validées par Yann)

| Sujet | Décision |
|---|---|
| **Tagline** | Direction **A** — *"Des sites beaux, rapides, trouvés sur Google. Livrés en 3 semaines."* |
| **Page Tarifs** | ❌ Pas de page Tarifs dédiée. ✅ **Fourchettes indicatives** affichées sur la home/approche pour ne pas figer la grille tarifaire |
| **Équipe** | **4 personnes** présentées sur la page Notre approche, avec avatars |
| **Direction artistique** | Référence : **bitstack-app.com** (structure, modernité, ton consumer accessible) — couleurs adaptées au brief Synaptic (chaleureux, abordable suggéré, pas tech-financier) |
| **Stack** | Next.js (App Router) + Tailwind |
| **Workflow** | Branche longue durée `refonte/v2` |

### Impact sur le sitemap retenu

```
/                       (Accueil)
├── /approche           (Notre approche + équipe 4 personnes)
├── /realisations       (Cas clients)
├── /contact
└── /mentions-legales
```

5 pages. Pas de page Tarifs dédiée mais une section fourchettes intégrée à l'Accueil.

### Implications pour la rédaction (Phase 3)

- Affichage des fourchettes : sur la home, dans une section "Combien ça coûte ?" avec 3 lignes type :
  - *Site vitrine 4-6 pages : entre 3 000 € et 4 500 €*
  - *Site vitrine étoffé / e-commerce simple : entre 4 500 € et 7 500 €*
  - *Plus complexe (plateforme, e-commerce avancé) : sur devis*
  - Avec mention "Pas figé, dépend de votre projet" pour préserver la flexibilité commerciale
- Équipe 4 personnes : je rédigerai 4 profils types (rôles : Fondateur / Direction artistique / Développement / SEO & growth) que Yann remplira avec les vrais noms/photos plus tard
- Tagline : *"Des sites beaux, rapides, trouvés sur Google. Livrés en 3 semaines."* devient le H1 du hero de l'accueil

---

## 1. Nouveau positionnement

### Synthèse

**Synaptic Digital est l'agence digitale qui livre aux petites PME des sites beaux, rapides et bien référencés — en 3 à 4 semaines, pas en 3 à 4 mois.**

### Ce qu'on dit
- On livre vite (3-4 semaines, vs 3-4 mois moyens du marché).
- On ne sacrifie ni le design, ni la performance, ni le SEO — on les fait coexister.
- On parle business, pas jargon.

### Ce qu'on ne dit pas mais qu'on signale visuellement
- C'est abordable (3k-8k€) — signalé par : transparence du process, possibilité d'afficher des tarifs ou des packages, ton chaleureux et direct, design accessible (pas élitiste).
- C'est fait pour les petites structures — signalé par : témoignages de petites PME, vocabulaire simple, absence de "premium / haute couture / excellence", visuels humains plutôt que abstraits.

### Ce qu'on quitte (vs site actuel)
- ❌ Registre "Neural Identity / L'Élite du Code Créatif / WebGL / shaders"
- ❌ Vocabulaire "haute couture digitale / précision pixel-perfect / Deep Tech"
- ❌ Promesse double et contradictoire (élite tech + accessible non-tech)
- ❌ Cibles "PME ambitieuses, leaders de secteur" (trop floues, trop hautes)

---

## 2. Message clé & propositions de tagline

3 directions tonales pour la tagline principale. À choisir ou hybrider :

### Direction A — Direct & factuel
> **"Des sites beaux, rapides, trouvés sur Google. Livrés en 3 semaines."**

Avantages : la promesse complète en une phrase. SEO-friendly. Crédible parce que mesurable. Tranche avec les agences qui parlent vague.
Risques : un peu listing, peu d'émotion.

### Direction B — Posture confiante & courte
> **"L'agence qui livre."**

Sous-titre : *Design, performance, SEO. En 3 semaines, pas en 3 mois.*

Avantages : court, mémorable, légère arrogance saine ("les autres ne livrent pas"). Place le différenciateur (vitesse) au centre.
Risques : doit être démontré par des cas clients pour ne pas sonner creux.

### Direction C — Chaleureuse & rassurante
> **"Votre site web, fait sérieusement. Sans vous embêter."**

Sous-titre : *Beau, rapide, bien référencé. En quelques semaines.*

Avantages : parle directement à la cible (dirigeants de petites PME pris dans leur business, qui ne veulent pas gérer le projet). Différenciation par le ton, pas par le superlatif.
Risques : peut paraître peu ambitieux pour des prospects plus structurés.

### Recommandation
Direction **A ou B** pour la tagline principale. Direction **C** comme sous-message dans une zone "Pourquoi Synaptic" plus bas dans la page.

---

## 3. Persona cible

### Profil
**Claire, 47 ans, dirigeante d'une PME de 12 personnes** (bureau d'études, agence locale d'événementiel, cabinet conseil, restaurant multi-sites, commerce structuré, artisan haut-de-gamme avec atelier...).

### Contexte
- Son entreprise marche, mais elle veut **plus de leads / plus de visibilité**.
- Son site actuel : soit "fait par mon cousin / un stagiaire / il y a 5 ans", soit acheté pour 800€ à un freelance débordé.
- Elle a entendu parler du SEO, sait que c'est important, ne sait pas comment ça marche.
- Elle a déjà été échaudée par un projet web qui a duré 8 mois et a fini en queue de poisson.
- Elle n'a pas de DAF qui valide les budgets — elle décide elle-même.
- Elle est pragmatique : elle veut savoir **combien**, **quand**, **avec qui**, **résultat attendu**.

### Ce qui la fait cliquer
1. Un délai de livraison clair et court (3-4 semaines).
2. Un prix ou une fourchette transparente, dès la page d'accueil.
3. Voir un cas client similaire au sien.
4. Un process clair (étape 1, 2, 3) qui la rassure sur le déroulé.
5. Quelqu'un qui parle son langage, pas du Three.js.

### Ce qui la fait fuir
1. "Demandez votre devis personnalisé" sans aucune indication de prix.
2. Le formulaire de contact qui demande 12 champs.
3. Le jargon technique.
4. Les promesses vagues type "agence orientée performance".
5. Un site lent ou cassé sur mobile (effet inversion — "comment leur confier mon site si le leur ne marche pas").

---

## 4. Sitemap recommandé

### Sitemap proposé (5 pages)

```
/
├── Accueil               (one-pager riche, le cœur de la conversion)
├── Notre approche        (méthode + différenciateur + qui on est)
├── Réalisations          (cas clients détaillés)
├── Tarifs                (OPTIONNEL — à valider, voir §5)
├── Contact               (formulaire + canaux directs)
└── Mentions légales      (inchangé)
```

### Comparaison avec l'existant

| Page actuelle | Devient | Justification |
|---|---|---|
| Accueil | **Accueil** (refondu) | Densifié : pitch + preuves + cas + CTA |
| Agence | **Notre approche** (fusion partielle) | Garde la méthode, vire les redites |
| Vision | Supprimée → contenu absorbé par Notre approche | Page actuelle redondante avec Agence |
| Expertises | Supprimée → contenu absorbé par Accueil + Notre approche | Liste de services intégrée directement |
| Contact | **Contact** (refondu, formulaire allégé) | Champs réduits à l'essentiel |
| Mentions légales | **Mentions légales** | Inchangé sur le fond, restylé pour la cohérence |
| (nouveau) | **Réalisations** | Nouvelle page, cœur de la preuve sociale |

**Bilan** : on passe de 6 pages à 5 (ou 6 avec Tarifs), avec **moins de pages d'argumentaire flou** et **plus de pages de preuve** (Réalisations).

---

## 5. Décision à valider : page Tarifs ?

**Pourquoi le proposer** : afficher une fourchette ou des packages clairs est le signal le plus fort qu'on peut envoyer pour suggérer "abordable et transparent" sans le dire. C'est aussi un excellent argument SEO ("agence web prix", "tarif site internet PME").

**Format possible** :

| Package | Prix indicatif | Pour qui | Inclus |
|---|---|---|---|
| **Vitrine** | 3 000 € — 4 500 € | TPE, indépendants, professions libérales | Site 4-6 pages, SEO de base, livré en 3 semaines |
| **Vitrine +** | 4 500 € — 7 000 € | Petites PME avec ambition de croissance | Site 6-10 pages, SEO renforcé, formulaires, intégration analytics |
| **E-commerce** | À partir de 6 500 € | Commerces qui passent au digital | Boutique en ligne, paiement, gestion de stock simple |

**Pourquoi ne pas le proposer** : peut limiter la flexibilité commerciale, et certains prospects vont s'auto-disqualifier sans appeler.

**À décider par Yann.**

---

## 6. Intention par page

Pour chaque page : rôle, audience principale, sections, CTA principal, mots-clés SEO ciblés.

### 🏠 Accueil (`/`)

- **Rôle** : faire comprendre en 10 secondes ce qu'on fait, pour qui, à quel prix indicatif, et déclencher le contact.
- **Audience** : prospect qui arrive depuis Google ou bouche-à-oreille, ne nous connaît pas.
- **Sections (proposées, à raffiner en Phase 4)** :
  1. **Hero** : tagline + sous-titre + CTA principal ("Démarrer mon projet" ou "Parlons-en"). Visuel illustratif fort.
  2. **Pour qui / Ce qu'on fait** : 3-4 cartes services courtes (Site vitrine / E-commerce / Refonte / SEO).
  3. **Le différenciateur** : "Design + Perf + SEO en 3 semaines" expliqué visuellement (3 piliers + délai mis en avant).
  4. **Notre méthode en 4 étapes** (mini-version, version complète sur Notre approche).
  5. **Cas client en vedette** : 1 cas étoffé (visuel + chiffres + témoignage).
  6. **Fourchette de prix** (si page Tarifs validée) ou bandeau "À partir de 3 000 €, devis sous 48h".
  7. **CTA final** + formulaire de contact court (3 champs max).
- **CTA principal** : contact / devis.
- **SEO ciblé** : "agence digitale PME", "création site internet PME", "agence web rapide", "création site web 3 semaines".

### 🧭 Notre approche (`/approche`)

- **Rôle** : rassurer sur le sérieux de la méthode, présenter qui on est, montrer que ce n'est pas une usine à sites.
- **Audience** : prospect intéressé qui a vu l'Accueil et veut creuser avant de contacter.
- **Sections** :
  1. **Manifeste court** : 3-4 lignes sur notre conviction (un site = un outil business, pas une vitrine).
  2. **Méthode en 4 étapes détaillées** : Comprendre / Concevoir / Construire / Lancer & optimiser. Pour chaque étape : durée, ce qu'on fait, ce qu'on attend de vous.
  3. **Le mix design + perf + SEO** : explication pédagogique (qu'est-ce que la perf web et pourquoi c'est crucial, comment on intègre le SEO dès le design, etc.).
  4. **Pourquoi on livre en 3-4 semaines** : explication du procédé (templates, méthode, équipe rodée).
  5. **Qui est derrière** : Yann + équipe (photos, parcours, en 2-3 phrases). Élément de réassurance humain capital.
  6. **CTA** : "Discutons-en".
- **CTA principal** : contact.
- **SEO ciblé** : "méthode création site", "agence digitale process", "création site rapide".

### 🎯 Réalisations (`/realisations`)

- **Rôle** : preuve. Montrer concrètement ce qu'on a fait, pour qui, avec quels résultats.
- **Audience** : prospect en phase de short-list, qui veut être rassuré avant de signer.
- **Sections** :
  1. **Liste des cas clients** : 1-2 cas étoffés au démarrage, structure prête pour en ajouter plus tard.
  2. Pour chaque cas client : contexte, problématique, ce qu'on a fait, durée du projet, résultats (chiffres si possible : trafic, leads, conversion), screenshots, citation client si possible, lien vers le site.
  3. **CTA** : "Vous aussi, lancez votre projet".
- **CTA principal** : contact.
- **SEO ciblé** : "exemple site PME", "portfolio agence web", "réalisations agence digitale".
- **Note** : laisser une structure de cards/grid extensible pour ajouter facilement de nouveaux cas.

### 💶 Tarifs (`/tarifs`) — OPTIONNEL

- **Rôle** : transparence sur les prix, signal fort "abordable + sérieux".
- **Audience** : prospect en phase de qualification budgétaire.
- **Sections** :
  1. **Pitch court** : "On préfère afficher les prix. Vous gagnerez du temps, nous aussi."
  2. **3 packages** (Vitrine / Vitrine + / E-commerce) avec inclus, délai, idéal pour qui.
  3. **FAQ tarifs** : "et si je veux X ?", "que se passe-t-il après la livraison ?", "y a-t-il un coût mensuel ?".
  4. **CTA** : "Discutons de votre projet".
- **CTA principal** : contact.
- **SEO ciblé** : "prix site internet PME", "tarif création site", "combien coûte un site web".

### ✉️ Contact (`/contact`)

- **Rôle** : déclencher la prise de contact, avec le minimum de friction.
- **Audience** : prospect prêt à parler.
- **Sections** :
  1. **Pitch court** : "On répond sous 48h. Premier échange gratuit, sans engagement."
  2. **Formulaire allégé** : 4 champs max (nom, email, type de projet, message). PAS de "entreprise obligatoire", PAS de "téléphone obligatoire".
  3. **Canaux directs** : email (contact@synaptic-digital.fr), éventuellement un Calendly pour réserver un créneau direct.
  4. **Que se passe-t-il ensuite** : "Vous recevez un email sous 48h, on cale un échange de 30 min, et si on est d'accord on vous envoie une proposition sous 5 jours."
- **CTA principal** : envoi du formulaire.
- **SEO ciblé** : "contact agence digitale", "devis site internet".

### ⚖️ Mentions légales (`/mentions-legales`)

- **Rôle** : conformité légale.
- Inchangé sur le fond, juste restylé pour la cohérence visuelle.

---

## 7. Questions ouvertes à trancher avec Yann

1. **Page Tarifs** : on l'inclut au sitemap ou pas ? (recommandation : oui, c'est le levier de différenciation le plus fort sur le critère "abordable")
2. **Tagline** : direction A, B, ou C ? (recommandation : B en priorité)
3. **Section "Qui est derrière" sur Notre approche** : Yann + équipe, ou Yann seul ? (j'ai besoin de savoir si l'agence est une équipe ou un freelance)
4. **Page blog / ressources** : on l'écarte pour ce premier jet (effort de prod régulier), mais à reconsidérer pour le SEO long-terme ?
5. **Formulaire de contact** : intégration backend (Formspree, Resend, Vercel function avec envoi email...) — à décider en Phase 5.

---

*Prochaine phase une fois ce doc validé : direction artistique (2-3 moodboards avec palettes, typographies, ton visuel).*
