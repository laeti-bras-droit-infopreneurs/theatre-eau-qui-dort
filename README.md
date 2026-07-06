# Site — Théâtre de l'eau qui dort

Site vitrine statique (HTML/CSS/JS, sans outil de build) pour la diffusion du spectacle **« Le Premier Homme »**, d'après Albert Camus, de la Cie l'eau qui dort. Conçu pour les **programmateurs** (centres culturels, festivals, direction de programmation), avec **SEO** et **GEO** (optimisation pour les moteurs génératifs type ChatGPT/Perplexity) travaillés.

Site en ligne : https://laeti-bras-droit-infopreneurs.github.io/theatre-eau-qui-dort/

---

## 1. Ouvrir le site
Double-cliquez sur **`index.html`** — il s'ouvre dans votre navigateur. Aucune installation nécessaire.

---

## 2. Ce qu'il reste à personnaliser

Tout ce qui est à personnaliser est balisé dans le code par le commentaire **`À REMPLACER`**.
Ouvrez les fichiers `.html` dans un éditeur de texte et cherchez `À REMPLACER` (Ctrl+F).

### Textes
| Info | Fichier(s) |
|---|---|
| Présentation de la troupe + son histoire (actuellement lorem ipsum) | `index.html` |
| Durée du spectacle, fiche technique | `spectacle.html` |
| Compléments sur Oleanna / La Solitude (années, distribution) | `autres-spectacles.html` |
| Email réel de la compagnie (placeholder `diffusion@theatredeleauquidort.fr`) | tous les pieds de page + `contact.html` |
| Mentions légales (forme juridique, siège, SIRET) | `mentions-legales.html` |

### Photos
Déposez vos images dans **`assets/img/`** :
- `hero-le-premier-homme.jpg` → visuel d'accueil (déjà en place : portrait Camus © IZIS/Roger-Viollet)
- `affiche-le-premier-homme.jpg` → affiche du spectacle (déjà en place)
- `oleanna-1.jpg`, `oleanna-2.jpg` → photos de scène d'Oleanna (déjà en place, basse définition — à remplacer par des HD si possible)
- `gal-1.svg`, `gal-3.svg` → à remplacer par les photos de La Solitude des champs de coton (`autres-spectacles.html`)
- `team-1.svg` … `team-5.svg` → portraits de l'équipe (Seigneur, Roldez, Maurel, Dujardin, Georgelin)

> Formats conseillés : **JPG** ou **WebP**, optimisés (< 400 Ko).

### Documents téléchargeables
Le dossier de presse réel est en place : `assets/downloads/dossier-presse-le-premier-homme.pdf`.
Les autres PDF placeholder (`fiche-technique.pdf`, etc.) ne sont plus liés depuis les pages — remplacez-les ou supprimez-les.

---

## 3. Le logo
Le logo (`assets/img/logo.svg`) et le favicon (`assets/img/favicon.svg`) sont des motifs « goutte + ondulations » en cuivre. Remplacez-les par votre vrai logo si vous en avez un.

---

## 4. Faire fonctionner le formulaire de contact
Par défaut, le bouton « Envoyer » **ouvre le logiciel mail** du visiteur avec un message pré-rempli (aucun serveur requis).

Pour recevoir les demandes automatiquement par email, créez un compte gratuit sur **[Formspree](https://formspree.io)**, puis dans `contact.html` :
1. Remplacez `action="mailto:..."` par l'URL Formspree (`action="https://formspree.io/f/VOTRE_ID"` + `method="POST"`).
2. Supprimez l'attribut `data-mailto` du `<form>`.

---

## 5. Hébergement & déploiement
Le site est hébergé sur **GitHub Pages** : chaque `git push` sur la branche `main` redéploie automatiquement le site (~1 min) via GitHub Actions (`.github/workflows/deploy-pages.yml`).

---

## 6. SEO & GEO — à faire
1. **Remplacer le domaine** `https://theatredeleauquidort.fr` par le vrai domaine — partout (chercher-remplacer global dans tous les `.html`, `sitemap.xml`, `robots.txt`, `llms.txt`).
2. Déclarer le site sur **[Google Search Console](https://search.google.com/search-console)** et y soumettre `sitemap.xml`.
3. Mettre à jour le bloc **JSON-LD** de `spectacle.html` à chaque nouvelle série de dates.
4. Vérifier les données structurées avec le **[test des résultats enrichis Google](https://search.google.com/test/rich-results)**.
5. Renseigner les réseaux sociaux dans le JSON-LD de `index.html` (champ `sameAs`).
6. **GEO** : le fichier `llms.txt` et la FAQ de l'accueil aident ChatGPT/Perplexity à citer la compagnie. Gardez-y des infos factuelles à jour.

---

## 7. Structure des fichiers
```
index.html               Accueil (hero, présentation troupe, histoire, dates, presse, FAQ)
spectacle.html           « Le Premier Homme » — intentions, distribution, Avignon 2026
autres-spectacles.html   Oleanna & La Solitude des champs de coton + revue de presse
equipe.html              Les artistes (bios du dossier de presse)
presse.html              Contact presse (La Strada & Cies) + dossier de presse PDF
contact.html             Formulaire + coordonnées (Patrick Roldez)
mentions-legales.html    Mentions légales
assets/css/style.css     Design (couleurs, typo) — tout est centralisé ici
assets/js/main.js        Menu mobile, galerie, formulaire
assets/img/              Images (affiche, photos, logo)
assets/downloads/        Dossier de presse PDF
sitemap.xml, robots.txt, llms.txt, site.webmanifest   Fichiers SEO/GEO
```

## 8. Changer les couleurs / la typo
Tout est en haut de `assets/css/style.css`, section `:root` (variables `--gold`, `--ink`, etc.). Modifiez une valeur, elle se répercute sur tout le site.
