# Résumé de la conversation — Site « Théâtre de l'eau qui dort »

## Demande initiale
Créer un site web vitrine pour la compagnie de théâtre **Théâtre de l'eau qui dort**, avec menu et onglets :
Spectacle / Agenda / Photos / Actualité / Presse / Équipe / Contact + un **espace pro** avec dossier de presse et fichiers téléchargeables.
Objectif : **vendre la diffusion du spectacle** ; cible = directeurs de centres culturels, directeurs artistiques de festivals, responsables de programmation. **SEO** et **GEO** à travailler. DA laissée à mon choix.

## Décisions validées
- **Contenu** : partiel → site construit avec contenu français réaliste + zones balisées `À REMPLACER` (38 marqueurs) + guide `README.md`.
- **Direction artistique** : éditoriale sombre & élégante (fond encre, accents cuivre/or, serif Cormorant, photos plein cadre). Codes des théâtres nationaux.
- **Langue** : français uniquement.
- **Technique** : site statique multi-pages (HTML/CSS/JS, sans build) — optimal pour SEO/GEO, hébergement simple, éditable sans outil.

## Ce qui a été livré
Dossier : `C:\Users\Laetitia\Desktop\Théatre eau qui dort`

**10 pages HTML** :
- `index.html` — accueil (hero, pitch, presse, prochaines dates, espace pro, FAQ GEO)
- `spectacle.html` — synopsis, note d'intention, distribution, fiche technique
- `agenda.html` — dates de tournée filtrables
- `photos.html` — galerie avec agrandissement (lightbox)
- `actualite.html` — actualités
- `presse.html` — revue de presse + dossier de presse
- `equipe.html` — compagnie et artistes
- `contact.html` — formulaire + coordonnées
- `diffusion.html` — **espace pro** : tous les téléchargements + conditions de diffusion
- `mentions-legales.html`

**Design & scripts** : `assets/css/style.css` (design system centralisé), `assets/js/main.js` (menu mobile, galerie, filtres agenda, formulaire mailto).

**Images placeholder SVG** : logo, favicon, hero, affiche, galerie, équipe, actus, image réseaux (`assets/img/`).

**Documents téléchargeables placeholder** (PDF/ZIP valides, `assets/downloads/`) : dossier de presse, dossier artistique, fiche technique, fiche de diffusion, communiqué, visuels HD.

**SEO / GEO** :
- Titres + descriptions uniques par page, Open Graph, HTML sémantique, favicon.
- Données structurées **JSON-LD** Schema.org (`PerformingGroup`, `TheaterEvent`, `BreadcrumbList`, `ContactPage`).
- `sitemap.xml`, `robots.txt` (autorise GPTBot, PerplexityBot, ClaudeBot…), `llms.txt`, FAQ.

## État GitHub (en cours)
- `git` disponible ; **pas de `gh` CLI**, pas de token, mais **Git Credential Manager (GCM) présent**.
- Dépôt git **initialisé + commit local effectué** (branche `main`, 43 fichiers, identité `Laetitia / laetitia@superhote.com`).
- **Bloqué sur** : création du dépôt distant + authentification GitHub (seule l'utilisatrice peut autoriser l'accès au compte `github.com/laeti-bras-droit-infopreneurs`).

## Prochaines étapes
1. **Publier sur GitHub** : créer le dépôt distant (manuellement sur GitHub, ou via `gh` à installer, ou via token), puis `git remote add origin …` + `git push -u origin main` (GCM gère la connexion).
2. **Intégrer le contenu réel** (partiel promis) : nom du spectacle (actuellement « Le Titre du Spectacle »), pitch, synopsis, dates, photos HD, bios, citations presse, PDF réels.
3. Remplacer le domaine placeholder `https://theatredeleauquidort.fr` par le vrai (dans les `.html`, `sitemap.xml`, `robots.txt`, `llms.txt`).
4. Mise en ligne (Netlify/Vercel/OVH) + Google Search Console.
