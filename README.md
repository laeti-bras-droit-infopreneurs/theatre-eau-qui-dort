# Site — Théâtre de l'eau qui dort

Site vitrine pour la diffusion du spectacle **« Le Premier Homme »**, d'après Albert Camus, de la Cie l'eau qui dort. Conçu pour les **programmateurs** (centres culturels, festivals, direction de programmation), avec **SEO** et **GEO** (optimisation pour les moteurs génératifs type ChatGPT/Perplexity) travaillés.

Site en ligne : https://laeti-bras-droit-infopreneurs.github.io/theatre-eau-qui-dort/

Le site est généré avec **[Eleventy](https://www.11ty.dev)** et **administrable sans toucher au code** via **[Pages CMS](https://pagescms.org)**.

---

## 1. Administrer le site (modifier textes, photos, dates)

1. Allez sur **https://app.pagescms.org** et connectez-vous **avec votre compte GitHub** (le compte doit avoir accès au dépôt — voir ci-dessous).
2. Choisissez le dépôt `theatre-eau-qui-dort`.
3. Le menu de gauche liste les contenus : *Page d'accueil, Le spectacle, Autres spectacles, L'équipe, Presse, Contact, Réglages, Mentions légales*.
4. Modifiez, puis cliquez **Save** : le site se met à jour automatiquement en ~1 minute.

**Donner accès à quelqu'un** (ex. Patrick) : il crée un compte gratuit sur github.com, puis vous l'invitez : dépôt GitHub → *Settings* → *Collaborators* → *Add people* (rôle **Write**).

**Champs « Markdown »** : ligne vide = nouveau paragraphe, `*texte*` = *italique*, `**texte**` = **gras**.

---

## 2. Ce qu'il reste à personnaliser (via l'admin)

- Présentation de la troupe + son histoire (actuellement lorem ipsum) → *Page d'accueil*
- Durée du spectacle → *Le spectacle* → Fiche technique
- Photos de l'équipe (placeholders `team-1.svg`…`team-5.svg`) → *L'équipe*
- Photos de *La Solitude des champs de coton* → *Autres spectacles*
- Email réel de la compagnie (placeholder `diffusion@theatredeleauquidort.fr`) → *Réglages* + *Page contact*
- Mentions légales (forme juridique, siège, SIRET) → *Mentions légales*

> Photos : formats conseillés **JPG** ou **WebP**, optimisés (< 400 Ko).

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
Le site est hébergé sur **GitHub Pages** : chaque `git push` sur la branche `main` (y compris les sauvegardes Pages CMS) reconstruit le site avec Eleventy et le redéploie (~1-2 min) via GitHub Actions (`.github/workflows/deploy-pages.yml`).

### Développement local (optionnel, pour les techniciens)
```
npm install
npm start        # serveur local avec rechargement auto
npm run build    # génère le site dans _site/
```

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
.pages.yml               Configuration de l'interface d'admin (Pages CMS)
.eleventy.js             Configuration du générateur Eleventy
src/_data/               ★ TOUT LE CONTENU (fichiers JSON édités par le CMS)
src/_includes/base.njk   Gabarit commun (en-tête, menu, pied de page)
src/*.njk                Les pages (accueil, spectacle, autres-spectacles, équipe, presse, contact)
src/assets/css/style.css Design (couleurs, typo) — tout est centralisé ici
src/assets/js/main.js    Menu mobile, galerie, formulaire
src/assets/img/          Images (affiche, photos, logo)
src/assets/downloads/    Dossier de presse PDF
src/sitemap.xml, robots.txt, llms.txt   Fichiers SEO/GEO
_site/                   Site généré (ne pas modifier, reconstruit à chaque build)
```

## 8. Changer les couleurs / la typo
Tout est en haut de `src/assets/css/style.css`, section `:root` (variables `--gold`, `--ink`, etc.). Modifiez une valeur, elle se répercute sur tout le site.
