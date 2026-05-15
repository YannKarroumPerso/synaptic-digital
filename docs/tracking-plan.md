# Plan de tracking Synaptic Digital

Document de référence pour le tracking analytics et l'acquisition.

---

## Stack analytics

| Outil | Rôle | Statut |
|---|---|---|
| **Google Tag Manager (GTM)** | Container central qui dispatche vers tous les autres tags | À configurer (besoin GTM-XXXXXX) |
| **Google Analytics 4 (GA4)** | Comportement utilisateur, audiences, attribution | Via GTM (besoin G-XXXXXXX) |
| **Google Ads Conversion** | Mesurer les conversions des campagnes Ads | Via GTM (besoin AW-XXXXXX + label) |
| **Meta Pixel (Facebook)** | Retargeting + mesure pub Meta | Optionnel (voir reco ci-dessous) |
| **Vercel Analytics** | Performance technique + Web Vitals | ✅ Déjà actif |

---

## Recommandation Meta Pixel

**À installer si** vous prévoyez de faire de la pub Facebook/Instagram dans les 6 prochains mois. Le pixel construit une audience de remarketing dès maintenant, et plus l'audience est ancienne mieux elle convertit.

**À ne PAS installer si** vous ne prévoyez aucune pub Meta. Inutile d'alourdir le site et le RGPD pour rien.

**Mon avis** : si vous hésitez, installez-le. Le pixel est gratuit, léger, et silencieux côté UX. Vous pourrez activer la pub plus tard sans avoir perdu de temps de collecte.

---

## Variables d'environnement à configurer

Sur Vercel (Project Settings → Environment Variables) :

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYY
```

Le `NEXT_PUBLIC_` est obligatoire pour que la variable soit accessible côté client.

---

## Événements trackés (poussés dans dataLayer)

### Acquisition / conversion (PRIORITÉ MAX)

| Event | Quand | Params | Usage |
|---|---|---|---|
| `lead_form_submit` | Formulaire `/devis` soumis avec succès | `source: "ads"` ou `"site"` | **Conversion principale**. Configurer comme objectif GA4 et conversion Google Ads. |
| `lead_form_start` | Premier focus sur un champ du formulaire | `source` | Mesure le taux d'engagement avec le formulaire (combien commencent / combien finissent) |
| `lead_form_error` | Erreur côté serveur lors du submit | `source` | Diagnostic : si beaucoup d'erreurs, problème backend |

### Engagement (PRIORITÉ MOYENNE)

| Event | Quand | Params |
|---|---|---|
| `cta_click` | Clic sur un CTA tagué `data-track-cta` | `cta_label`, `cta_location` |
| `phone_click` | Clic sur un lien `tel:` | `cta_label` (numéro) |
| `email_click` | Clic sur un lien `mailto:` | `cta_label` (email) |
| `scroll_depth` | Profondeur de scroll atteinte | `scroll_percent` (25, 50, 75, 100) |
| `faq_open` | Ouverture d'un accordéon FAQ | `content_id` (question) |

### Navigation (PRIORITÉ BASSE)

| Event | Quand | Params |
|---|---|---|
| `external_link_click` | Clic sur un lien externe | `cta_label` (URL) |
| `page_view` | Auto (géré par GA4 via GTM) | URL, titre |

### Contenu (à activer si on en a besoin)

| Event | Quand | Params |
|---|---|---|
| `service_view` | Vue de la section service détaillée | `content_id`, `content_category` |
| `realisation_view` | Vue d'une réalisation | `content_id` |
| `blog_article_view` | Vue d'un article blog | `content_id`, `content_category` |

---

## CTAs taggués sur le site

Chaque CTA porte un `data-track-cta` qui identifie où le visiteur a cliqué :

| Location | CTA label | Pages où on le trouve |
|---|---|---|
| Header nav | `header_cta_demarrer` | Toutes les pages |
| Hero home | (à tagger) | Page d'accueil |
| Section services home | (à tagger) | Page d'accueil |
| Cards services | (à tagger) | Page d'accueil, page services |
| CTA bas de page agence | (à tagger) | Page agence |
| CTA bas de page services | (à tagger) | Page services |
| CTA pages villes | (à tagger) | Pages /agence-web/[ville] |
| CTAs articles blog | (à tagger) | Articles blog |

→ Pour tagger un CTA, ajouter `data-track-cta="nom_identifiant"` (et optionnellement `data-track-location="zone"`).

---

## Mapping vers GA4 (à configurer dans GTM)

| Event dataLayer | Event GA4 | Conversion ? |
|---|---|---|
| `lead_form_submit` | `generate_lead` (recommandation Google) | ✅ Oui |
| `phone_click` | `phone_click` (custom) | ✅ Oui (micro-conv) |
| `email_click` | `email_click` (custom) | ✅ Oui (micro-conv) |
| `cta_click` | `cta_click` | Non, juste engagement |
| `scroll_depth` | `scroll` (custom avec params) | Non, juste engagement |
| `faq_open` | `faq_open` | Non, juste engagement |

---

## Configuration Google Ads (étapes)

### 1. Créer l'action de conversion
- Aller dans Google Ads → Tools → Conversions
- Nouvelle conversion → Site web
- Catégorie : **Submit lead form**
- Nom : `Lead form submit (/devis)`
- Valeur : Don't use a value (au début, ajustable plus tard)
- Count : One
- Click-through window : 30 days
- View-through window : 1 day
- Attribution model : Data-driven

### 2. Récupérer le snippet de conversion
- Une fois créée, Google Ads donne : `AW-XXXXXXX/YYYYYYYY`
- Le premier (AW-XXX) = `NEXT_PUBLIC_GOOGLE_ADS_ID`
- Le label après le `/` = `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`
- Configurer ces 2 variables dans Vercel env vars

### 3. Configurer dans GTM
- Nouvelle balise → Google Ads Conversion Tracking
- ID + Label
- Trigger : Custom Event = `lead_form_submit`

### 4. Tester
- Aller sur `/devis` avec `?gtm_debug=1` en query string
- Soumettre le formulaire de test
- Vérifier dans **Tag Assistant** que la conversion se déclenche
- Dans Google Ads, l'attribut de conversion passe en "Recording" sous 24h

---

## Configuration Google Analytics 4 (étapes)

### 1. Créer la propriété
- analytics.google.com → Admin → Create Property
- Nom : Synaptic Digital
- Currency : EUR, Timezone : Paris
- Récupérer l'ID `G-XXXXXXX`

### 2. Configurer le stream data
- Stream Web → URL : https://synaptic-digital.fr
- Cocher Enhanced measurement (scroll, outbound clicks, etc.)

### 3. Lier à Google Ads
- GA4 → Admin → Product Linking → Google Ads
- Lier le compte Google Ads pour mesurer les conversions de bout en bout

### 4. Configurer les conversions
- GA4 → Admin → Events → Mark as conversion :
  - `lead_form_submit` (custom event poussé par notre dataLayer)
  - Optionnel : `phone_click`, `email_click`

### 5. Audiences pour le retargeting
- GA4 → Audiences → Create
  - "A vu /devis sans soumettre" → audience pour Google Ads remarketing
  - "A vu un article blog" → audience pour campagne lead nurture

---

## Configuration GTM (étapes)

### 1. Créer le container
- tagmanager.google.com → Create Account
- Container name : Synaptic Digital
- Target platform : Web
- Récupérer l'ID `GTM-XXXXXX`

### 2. Setup minimum (3 tags)

**Tag 1 — GA4 Configuration**
- Type : Google Analytics: GA4 Configuration
- Measurement ID : votre G-XXXXXXX
- Trigger : All Pages

**Tag 2 — GA4 Event "generate_lead"**
- Type : GA4 Event
- Event name : `generate_lead`
- Trigger : Custom Event = `lead_form_submit`

**Tag 3 — Google Ads Conversion**
- Type : Google Ads Conversion Tracking
- Conversion ID + Label
- Trigger : Custom Event = `lead_form_submit`

### 3. Publier
- Bouton "Submit" en haut à droite
- Version name : "v1 initial setup"
- Publish

---

## RGPD : Consent Mode v2

Le site implémente **Google Consent Mode v2** par défaut :

1. Au premier chargement : tous les consents en `denied` (sauf `functionality_storage` et `security_storage`)
2. Bannière cookies affichée : 3 choix (Tout accepter / Refuser / Personnaliser)
3. Si "Tout accepter" : `analytics_storage` + `ad_storage` + `ad_user_data` + `ad_personalization` passent en `granted`
4. Si "Refuser" : tout reste en `denied` (mais GTM peut quand même envoyer des pings anonymes en mode "consent denied" pour les "modeled conversions")
5. Si "Personnaliser" : choix granulaire analytics / marketing

Le choix est stocké en `localStorage` (`synaptic_consent_v1`) pour 13 mois max.

---

## Checklist post-installation

Une fois les IDs récupérés et ajoutés en env vars Vercel :

- [ ] Variables d'env Vercel ajoutées (GTM_ID, GOOGLE_ADS_ID, GOOGLE_ADS_CONVERSION_LABEL)
- [ ] Redéploiement déclenché pour activer les variables
- [ ] Tester la bannière cookies en navigation privée
- [ ] Tester un submit de formulaire test → voir l'event dans GA4 Realtime
- [ ] Tester un submit → voir l'event dans Google Ads Conversions (sous 24h)
- [ ] Configurer les audiences GA4 pour remarketing
- [ ] Configurer la première campagne Google Ads avec `/devis` comme URL finale

