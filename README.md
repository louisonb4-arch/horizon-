# Horizon par alaïa café — site

Site vitrine de **Horizon par alaïa café**, coffee shop et cave à café,
38 rue Léon Jamin, 44000 Nantes. Créé de zéro en juillet 2026 (aucun site n'existait).

HTML / CSS / JS écrits à la main. **Zéro dépendance, zéro build, zéro requête tierce,
zéro cookie.** On ouvre `index.html`, ça marche.

```bash
python3 -m http.server 4331
# → http://localhost:4331
```

---

## La direction artistique — « La ligne »

> La direction artistique repose sur **le tube de néon plié en boucles sous le plafond
> bleu nuit de la salle** — traduit par un trait rose unique qui traverse le site de bout
> en bout : il boucle où c'est important, s'aplatit où l'on lit, découpe les photos, et
> sépare le bleu nuit (le plafond) du crème (les murs).

Tout vient du lieu, rien n'est plaqué :

| Sur place | Sur le site |
|---|---|
| Le néon plié en deux boucles au plafond | `.boucle` — une **cycloïde allongée** (`x = at − b·sin t`, `y = a − b·cos t`, `b > a`), c'est-à-dire la courbe que décrit un tube qu'on plie. Elle se trace au chargement. |
| La découpe blanche en vague du faux-plafond | `.bord` — chaque changement de section est une vague, jamais un filet droit. Le trait rose court dessus. |
| Les étagères courbes, le comptoir arrondi | `.photo--vague` / `.photo--creux` — les images sont coupées par la même courbe. **Jamais d'arche.** |
| Le « café » entouré dans l'enseigne | `.ovale` — tous les badges, boutons et états actifs sont des **ellipses**. Jamais de pilule, jamais de coin arrondi. |
| L'enseigne : lettres roses sur bleu nuit | **Le rose n'existe que sur le bleu.** Sur le crème, tout passe en bleu nuit. Règle tenue partout. |

### Trois principes

1. **Un seul trait, jamais coupé** — la ligne rose passe de section en section.
2. **Deux ciels, jamais trois** — bleu nuit ou crème. Ils alternent d'une section à
   l'autre. Aucun troisième fond.
3. **L'ovale de l'enseigne** — la seule forme fermée du site.

### Palette — relevée au pixel sur le logo et les photos

| | | |
|---|---|---|
| `--nuit` | `#20325A` | Fond du logo, échantillonné sur `logo-source.jpg` |
| `--rose` | `#F5A9A9` | Lettrage de l'enseigne, échantillonné sur le même fichier |
| `--creme` | `#F2EDE3` | Les murs de la salle |
| `--neon` | `#FFE7BE` | La lumière du tube |
| `--encre` | `#101B33` | Texte sur crème |

Les 8 couples de contraste utilisés passent **WCAG AA** (le plus juste : méta mono sur
crème, 4,96:1).

### Typographies — auto-hébergées (SIL OFL 1.1)

- **Gluten** (variable 400–900) — display. Choisie pour rimer avec le lettrage groovy et
  gonflé de l'enseigne, sans le copier.
- **Schibsted Grotesk** (variable 400–900) — texte courant.
- **DM Mono** — chiffres, horaires, légendes, numéros de section.

Aucune n'a servi sur les projets précédents (Fraunces, Bricolage, Clash Display, Bodoni,
Cormorant, Young Serif, Zodiak… sont écartées volontairement).

---

## Le lettrage

Le logo n'existait qu'en **JPEG 447 px**, trop petit pour un hero.
Il a été **vectorisé** : extraction d'un masque alpha par distance colorimétrique au fond,
nettoyage du bruit JPEG (suréchantillonnage ×6 + flou gaussien + seuillage), puis
`potrace`. Résultat : `logo-horizon.svg`, net à n'importe quelle taille, ~20 Ko.

```
assets/img/logo-horizon.svg      lockup complet, fill="currentColor" (masque teintable)
assets/img/logo-rose.svg         lockup, rose — utilisé en <img> dans le hero
assets/img/logo-nuit.svg         lockup, bleu nuit
assets/img/logo-creme.svg        lockup, crème
assets/img/wordmark-horizon.svg  « HORIZON » seul
assets/img/signature-alaia.svg   « par alaïa café » seul
```

L'enseigne et le pied utilisent `.marque`, un masque CSS teinté par `currentColor` —
c'est ce qui permet le survol.

> **À demander au client : le fichier vectoriel d'origine.** Le tracé actuel est fidèle
> mais reconstruit à partir d'un petit JPEG.

---

## Arborescence

```
index.html              Accueil — hero + 7 sections
carte.html              La carte (familles + fourchettes de prix, avec avertissement)
ateliers.html           Les 3 ateliers — la page qui doit convertir
mentions-legales.html
confidentialite.html    Confidentialité + cookies (ancre #cookies)
404.html
robots.txt · sitemap.xml
business.config.js      Fiche d'identité de l'établissement — source de vérité
LEGAL-TODO.md           Tout ce qui manque, tout ce qui a été vérifié. À lire.
assets/css/horizon.css  Feuille unique
assets/js/horizon.js    Script unique
assets/font/            10 woff2 (latin + latin-ext)
assets/img/             32 photos + logos + icônes
```

`business.config.js` centralise les données de l'établissement et indique, en fin de
fichier, **où chaque valeur apparaît dans les pages**. Le contenu des pages est écrit en
dur volontairement : il reste lisible sans JavaScript et indexable sans exécution.
Le JSON-LD est statique pour la même raison.

---

## Règles de production tenues

- **Aucune image agrandie.** Les sources font 1440 px de large au maximum ; les devantures
  descendent à 768 et 547 px et ne sont jamais servies plus grand que leur taille native.
  *Sur un écran de plus de 1440 px, les bandeaux pleine largeur s'étirent légèrement
  (~1,3×) — demander des photos en haute définition.*
- **Aucun zoom, aucune mise à l'échelle sur les photos.** Elles se découvrent par un
  masque qui remonte (`.revele`) — la ligne d'horizon qui monte. `mask-position`
  uniquement, jamais `transform: scale`.
- **Aucune découpe en arche.** Uniquement la vague.
- **Le mouvement est une couche en plus.** L'état par défaut est *visible* : les états
  masqués sont conditionnés à `html.js`, posée avant le premier rendu et **retirée
  automatiquement si `horizon.js` ne répond pas en 2,6 s**. Si le script tombe, la page
  reste entièrement lisible.
- `prefers-reduced-motion: reduce` coupe tout : animations, masques, tracés.
- Navigation clavier complète, piège à tabulation dans le tiroir mobile, `Échap` ferme.
- Le mobile est repensé, pas empilé : le tiroir remplace la nav, la 3ᵉ photo de la bande
  du lieu est **retirée** plutôt que tassée, les défilements horizontaux passent en
  74 vw, les listes en une colonne.

## Points de vigilance connus

- Les prix affichés viennent de la presse locale (janvier 2024) et **les deux sources se
  contredisent**. Le site n'affiche que des fourchettes, en italique, avec un
  avertissement explicite en bas de `carte.html`. → `LEGAL-TODO.md` §2.
- Tout ce qui manque apparaît **en surbrillance rose sur le site** (`.manque`), exprès :
  un trou doit se voir. → `grep -rn "à fournir" *.html`
- `example.invalid` est partout où le vrai domaine doit aller. Rien ne se publie tant
  qu'il en reste une occurrence. → `grep -rn "example.invalid" .`

---

Création **[Vokum](https://vokumagency.com)**.
