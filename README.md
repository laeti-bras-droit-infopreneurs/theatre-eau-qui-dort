# Site — Théâtre de l'eau qui dort

Site vitrine statique (HTML/CSS/JS, sans outil de build) pour la diffusion du spectacle de la compagnie. Conçu pour les **programmateurs** (centres culturels, festivals, direction de programmation), avec **SEO** et **GEO** (optimisation pour les moteurs génératifs type ChatGPT/Perplexity) travaillés.

---

## 1. Ouvrir le site
Double-cliquez sur **`index.html`** — il s'ouvre dans votre navigateur. Aucune installation nécessaire.

> Astuce : pour naviguer entre les pages sans accroc, mieux vaut le servir localement (voir §5) ou le mettre en ligne.

---

## 2. Où mettre VOTRE contenu

Tout ce qui est à personnaliser est balisé dans le code par le commentaire **`À REMPLACER`**.
Ouvrez les fichiers `.html` dans un éditeur de texte (Bloc-notes, VS Code, TextEdit…) et cherchez `À REMPLACER` (Ctrl+F).

### Textes
| Info | Fichier(s) |
|---|---|
| Nom du spectacle « Le Titre du Spectacle » | Tous les fichiers (chercher `Le Titre du Spectacle`) |
| Accroche / pitch | `index.html`, `spectacle.html` |
| Synopsis, note d'intention, distribution, fiche technique | `spectacle.html` |
| Dates de tournée | `agenda.html` (+ le bloc `JSON-LD` en haut) |
| Citations & articles presse | `presse.html`, `index.html` |
| Actualités | `actualite.html` |
| Membres de l'équipe & partenaires | `equipe.html` |
| Coordonnées (email, téléphone, adresse) | **tous** les pieds de page + `contact.html` + `mentions-legales.html` |
| Mentions légales (SIRET, licences, hébergeur) | `mentions-legales.html` |

### Photos
Déposez vos images dans **`assets/img/`** puis remplacez les fichiers `.svg` d'exemple :
- `hero.svg` → grande photo de scène d'accueil (paysage, ~1600 px de large)
- `poster.svg` → affiche du spectacle (portrait)
- `gal-1.svg` … `gal-6.svg` → galerie photos (`photos.html`)
- `team-1.svg` … `team-4.svg` → portraits de l'équipe
- `actu-1.svg` … `actu-3.svg` → visuels d'actualités
- `og-image.svg` → image d'aperçu quand on partage le lien sur les réseaux (1200×630 px)

> Le plus simple : nommez vos images exactement pareil (ex. `hero.jpg`) et changez l'extension dans le code (`hero.svg` → `hero.jpg`). Formats conseillés : **JPG** ou **WebP**, optimisés (< 400 Ko).

### Documents téléchargeables (dossier de presse, etc.)
Remplacez les PDF placeholder dans **`assets/downloads/`** en gardant **les mêmes noms** :
`dossier-de-presse.pdf`, `dossier-artistique.pdf`, `fiche-technique.pdf`, `fiche-de-diffusion.pdf`, `communique-de-presse.pdf`, `visuels-hd.zip`.

---

## 3. Le logo
Le logo (`assets/img/logo.svg`) et le favicon (`assets/img/favicon.svg`) sont des motifs « goutte + ondulations » en cuivre. Remplacez-les par votre vrai logo si vous en avez un.

---

## 4. Faire fonctionner le formulaire de contact
Par défaut, le bouton « Envoyer » **ouvre le logiciel mail** du visiteur avec un message pré-rempli (aucun serveur requis).

Pour recevoir les demandes automatiquement par email, créez un compte gratuit sur **[Formspree](https://formspree.io)** (ou utilisez **Netlify Forms** si vous hébergez sur Netlify), puis dans `contact.html` :
1. Remplacez `action="mailto:..."` par l'URL Formspree (`action="https://formspree.io/f/VOTRE_ID"` + `method="POST"`).
2. Supprimez l'attribut `data-mailto` du `<form>` (il désactive le comportement mailto).

---

## 5. Mettre le site en ligne (hébergement)
Le site étant statique, l'hébergement est **simple et souvent gratuit** :
- **Netlify** ou **Vercel** : glissez-déposez le dossier → site en ligne en 1 min.
- **OVH / Infomaniak / o2switch** : envoyez les fichiers par FTP dans le dossier `www`.

Aperçu en local (si Node.js est installé) :
```
npx serve .
```

---

## 6. SEO & GEO — à faire après la mise en ligne
Le site est déjà optimisé (balises `<title>`/`description` uniques, Open Graph, données structurées **JSON-LD** Schema.org, `sitemap.xml`, `robots.txt`, `llms.txt`, HTML sémantique, FAQ). Il reste à :

1. **Remplacer le domaine** `https://theatredeleauquidort.fr` par votre vrai domaine — partout (chercher-remplacer global dans tous les `.html`, `sitemap.xml`, `robots.txt`, `llms.txt`).
2. Déclarer le site sur **[Google Search Console](https://search.google.com/search-console)** et y soumettre `sitemap.xml`.
3. Mettre à jour le bloc **JSON-LD** de `agenda.html` à chaque nouvelle date (les moteurs affichent les événements).
4. Vérifier les données structurées avec le **[test des résultats enrichis Google](https://search.google.com/test/rich-results)**.
5. Renseigner vos réseaux sociaux dans le JSON-LD de `index.html` (champ `sameAs`).
6. **GEO** : le fichier `llms.txt` et la FAQ de l'accueil aident ChatGPT/Perplexity à citer la compagnie. Gardez-y des infos factuelles à jour (jauge, durée, disponibilités, contact).

---

## 7. Structure des fichiers
```
index.html            Accueil (hero, pitch, presse, dates, espace pro, FAQ)
spectacle.html        Synopsis, note d'intention, distribution, fiche technique
agenda.html           Dates de tournée (filtrable)
photos.html           Galerie (avec agrandissement)
actualite.html        Actualités de la compagnie
presse.html           Revue de presse + dossier de presse
equipe.html           La compagnie et les artistes
contact.html          Formulaire + coordonnées diffusion
diffusion.html        ESPACE PRO — tous les téléchargements + conditions
mentions-legales.html Mentions légales
assets/css/style.css  Design (couleurs, typo) — tout est centralisé ici
assets/js/main.js     Menu mobile, galerie, filtres, formulaire
assets/img/           Images (logo, photos)
assets/downloads/     Documents PDF/ZIP téléchargeables
sitemap.xml, robots.txt, llms.txt, site.webmanifest   Fichiers SEO/GEO
```

## 8. Changer les couleurs / la typo
Tout est en haut de `assets/css/style.css`, section `:root` (variables `--gold`, `--ink`, etc.). Modifiez une valeur, elle se répercute sur tout le site.
