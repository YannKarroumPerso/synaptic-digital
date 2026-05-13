# Phase 2 — Direction artistique

> ✅ **Palette A retenue** : Bleu nuit `#1A2840` + Orange chaleur `#FF7B47` + Crème `#FAF7F2`
> ✅ **Typo retenue** : Sora (titres) + Inter (body)
> Référence visuelle : **bitstack-app.com**

---

## 1. Ce qu'on garde de bitstack-app.com

Codes visuels et structurels du site de référence qu'on transpose à Synaptic :

| Élément | Bitstack | Adaptation Synaptic |
|---|---|---|
| **Hero** | Grosse promesse + sous-titre court + CTA download | Tagline + sous-titre + CTA "Démarrer mon projet" + mockup d'un site livré à droite |
| **Stats sociales** | "+300 000 utilisateurs / 300M €" | "X projets livrés / X semaines en moyenne / 100% mis en ligne" |
| **Sections alternées** | Texte ↔ mockup iPhone | Texte ↔ mockup d'écran de site livré |
| **Cards services** | "Acheter / Vendre / Envoyer / Recevoir" | "Site vitrine / E-commerce / Refonte / SEO" |
| **Carousel témoignages** | Étoiles + nom court + verbatim | Idem, avec photo client en bonus |
| **Logos clients** | "Ils parlent de nous" | "Ils nous ont fait confiance" |
| **FAQ accordéon** | En bas de page, fond clair | Idem |
| **Footer riche** | 3-4 colonnes thématiques | 3 colonnes : Services / Agence / Aide |
| **Border-radius** | Généreux (16-24px) | Idem |
| **Animations** | Scroll-reveal subtil, mockups animés | Idem mais plus discret |

## 2. Ce qu'on n'imite PAS

- ❌ Le **palette financière bleu nuit + orange Bitcoin** — trop fintech, pas notre cible
- ❌ Les **mockups iPhone omniprésents** — on est une agence web, pas une app mobile
- ❌ Le ton **investissement / DCA / volatilité** — on est business pragmatique
- ❌ Les **logos partenaires institutionnels** (AMF, ACPR) — on n'a pas ce besoin de réassurance régulatoire

---

## 3. Palettes proposées

3 directions colorimétriques. À comparer visuellement dans le mockup interactif (voir §6).

### Palette A — "Confiance & Chaleur" 🟠 ✅ RETENUE (validée par Yann)

| Rôle | Couleur | Hex | Usage |
|---|---|---|---|
| Primaire | Bleu nuit | `#1A2840` | Texte, headers, sections sombres |
| Accent | Orange chaleur | `#FF7B47` | CTAs, accents, highlights |
| Background clair | Ivoire/crème | `#FAF7F2` | Fond général |
| Background sombre | Bleu nuit profond | `#0F1828` | Sections de contraste |
| Texte sombre | Anthracite | `#1F1F1F` | Body text sur fond clair |
| Texte clair | Blanc cassé | `#F5F2EC` | Body text sur fond sombre |
| Gris UI | Gris doux | `#6B7280` | Texte secondaire, bordures |
| Succès | Vert | `#16A34A` | États positifs |

**Pourquoi A est recommandée** : le mix bleu + orange est éprouvé pour signaler "sérieux mais chaleureux". L'orange `#FF7B47` est plus terreux/chaleureux qu'orange vif — il évoque l'accessibilité et l'humain. Le fond crème adoucit considérablement l'ensemble par rapport à un blanc froid — c'est le signal "pas une grosse agence intimidante" sans le dire.

### Palette B — "Vert & Lumière" 🟢

| Rôle | Couleur | Hex |
|---|---|---|
| Primaire | Vert forêt | `#1F4435` |
| Accent | Jaune doré | `#F4C95D` |
| Background clair | Crème | `#F8F6F2` |
| Background sombre | Vert profond | `#142E22` |
| Texte sombre | Anthracite | `#1A1A1A` |

**Caractère** : croissance + lumière. Distinctif, sort des palettes "agence digitale" classiques. Signal subliminal "growth + confiance". Risque : un peu moins consensuel, peut paraître "écolo" pour certains.

### Palette C — "Bleu doux & Corail" 🔵

| Rôle | Couleur | Hex |
|---|---|---|
| Primaire | Bleu cobalt doux | `#3B5BDB` |
| Accent | Corail | `#FF6B6B` |
| Background clair | Off-white | `#FBFBFD` |
| Background sombre | Bleu profond | `#14213D` |
| Texte sombre | Anthracite | `#14213D` |

**Caractère** : très "consumer-friendly", proche des codes Notion / Linear / Calendly. Très moderne. Risque : palette "tech moderne" générique, ressemble à 100 autres SaaS.

---

## 4. Typographie

### Recommandation

- **Titres (H1, H2, H3)** : **Sora** (Google Fonts) — sans-serif géométrique moderne, beaucoup de personnalité dans les graisses lourdes, lisible en gros caractères
- **Body** : **Inter** (Google Fonts) — référence absolue pour lisibilité écran, neutre, hyper-optimisé
- **Code/Mono (rare)** : **JetBrains Mono** si besoin

### Échelle typographique

| Élément | Taille | Graisse | Line-height |
|---|---|---|---|
| H1 (hero) | 64-80px | Sora 700 | 1.1 |
| H2 (sections) | 40-48px | Sora 700 | 1.15 |
| H3 (sous-sections) | 24-32px | Sora 600 | 1.3 |
| Body L (intros) | 20px | Inter 400 | 1.5 |
| Body M (courant) | 16-17px | Inter 400 | 1.6 |
| Small | 14px | Inter 500 | 1.4 |
| Button | 16px | Inter 600 | 1 |

---

## 5. Composants UI clés

### Boutons

- **Primaire** : fond accent (orange A / jaune B / corail C), texte blanc, border-radius 12px, padding 14×28, font-weight 600
- **Secondaire** : fond transparent, bordure primaire 1.5px, texte primaire
- **Tertiaire / lien** : juste du texte avec underline subtle au hover

### Cards services / contenu

- Fond : blanc ou crème selon contexte
- Border-radius : 24px
- Padding interne : 32-40px
- Icône en haut (outlined, ~40×40)
- Titre H3 + 2-3 lignes de texte
- Ombre douce ou pas d'ombre selon section

### Stats blocks

- Très grosse typo (Sora 700, 56-72px) pour le chiffre
- Label en dessous (Inter 500, 14-16px, gris)

### FAQ accordion

- Question : Inter 500, 18-20px
- Bordure inférieure subtile entre les items
- Icône `+` qui devient `−` au hover/open
- Animation slide-down de la réponse

### Témoignages cards

- Fond clair (crème ou blanc)
- 5 étoiles en haut (en accent)
- Verbatim en italique
- Nom + (optionnel) photo + (optionnel) entreprise

### Equipe (4 personnes)

- Avatars circulaires (~120px diamètre)
- Nom + Rôle + 1 ligne de description
- Layout : grille 4 colonnes desktop, 2×2 mobile
- Effet hover doux (légère élévation)

---

## 6. Mockup interactif

Le fichier **`mockups/home-hero.html`** présente un mockup de l'accueil avec :
- Hero (titre, sous-titre, CTAs, mockup illustratif)
- Bandeau stats
- Section "Pour qui" (4 cards services)
- Section "Pourquoi nous" (3 piliers Design + Perf + SEO)
- Footer minimal

**Switcher de palette en haut** : 3 boutons (Palette A / B / C) permettent de comparer les 3 palettes en direct sans recharger.

**Comment l'ouvrir** :
- En local : ouvrir `refonte-v2/mockups/home-hero.html` depuis votre OneDrive Synaptic
- En ligne via Vercel preview : sur la branche `refonte/v2`, l'URL sera de la forme `https://synaptic-digital-git-refonte-v2-yannkarroum-5122s-projects.vercel.app/mockups/home-hero` (visible aussi dans le PR si on en crée une, ou dans le dashboard Vercel)

---

## 7. À valider par Yann

Une fois le mockup ouvert :

1. **Palette retenue** : A, B, ou C ? Ou un mix ?
2. **Typo** : Sora + Inter OK, ou autre piste ?
3. **Density** : assez d'air ? Trop d'air ? Trop dense ?
4. **Ton général** : on est dans la bonne direction "chaleureux mais pro" ?

Une fois la palette validée → Phase 3 (rédaction des textes pour toutes les pages) puis Phase 4 (mockups détaillés de chaque page).
