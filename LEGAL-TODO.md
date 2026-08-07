# LEGAL-TODO — Horizon par alaïa café

> **Ne pas mettre en ligne avant d'avoir traité la section 1.**
> État au 16 juillet 2026. Aucune donnée n'a été inventée : tout ce qui n'a pas pu
> être vérifié à une source est marqué `[à fournir]` et apparaît **en surbrillance
> rose sur le site lui-même**, exprès — pour qu'un trou se voie au lieu de se combler
> avec une supposition.

---

## 1. Bloquant avant la mise en ligne

### 1.1 Identité de l'éditeur (mentions légales)

| Donnée | État | Où ça apparaît |
|---|---|---|
| Capital social | **manquant** — obligatoire pour une SAS | `mentions-legales.html` |
| RCS | **à confirmer** — probablement « RCS Nantes 979 008 794 », non vérifié | `mentions-legales.html` |
| Directeur de la publication | **manquant** — nom + prénom de la personne physique | `mentions-legales.html` |
| Téléphone professionnel | **manquant** | `index.html` §07, pieds de page, ateliers, pages légales |
| E-mail | **manquant** | idem |

### 1.2 Hébergeur (article 6 III-1 LCEN — obligatoire)

Nom, adresse, téléphone et site de l'hébergeur. **Aucun hébergeur n'est encore choisi**,
donc les quatre champs sont vides dans `mentions-legales.html`, et la durée de conservation
des journaux de connexion est vide dans `confidentialite.html`.

Une fois l'hébergeur retenu, vérifier aussi s'il implique un **transfert hors UE**
(section correspondante de `confidentialite.html`).

### 1.3 Nom de domaine

`example.invalid` est un domaine volontairement invalide, présent partout où le domaine
réel doit aller. **Rien ne doit être publié tant qu'il reste une occurrence.**

Pour vérifier : `grep -rn "example.invalid" .`

À remplacer dans : `<link rel="canonical">` et `og:url` des 5 pages indexées,
`og:image` de `index.html`/`carte.html`/`ateliers.html`, `robots.txt`, `sitemap.xml`.

### 1.4 Photographies

- **Auteur non identifié.** Les 32 photos proviennent des réseaux de la maison. Le crédit
  photo et l'étendue de la cession de droits doivent être confirmés avant publication.
  Un bloc est prévu dans `mentions-legales.html` § Propriété intellectuelle.
- **Droit à l'image.** Cinq photos montrent des personnes reconnaissables
  (`barista-tableau`, `barista-latte`, `barista-v60`, `coupes-poche`, `trois-v60`,
  `devanture-terrasse` — un client attablé en terrasse). Leur autorisation doit être
  obtenue, en particulier pour le client de `devanture-terrasse`, qui n'est pas salarié.
- **Marques de tiers.** Les photos montrent des produits POMA, mazelab, Hydrangea,
  La Cabra, PPP Coffee. Mention prévue dans `mentions-legales.html`.

---

## 2. Contenu à faire confirmer par la maison

| Sujet | Ce que dit le site | Source | À faire |
|---|---|---|---|
| **Horaires** | Mar→ven 9:30–18:30 · Sam 11:00–18:30 · Dim/lun fermé | 2 sources presse concordantes | Confirmer. Préciser les fermetures annuelles. |
| **Prix du café** | Fourchettes 2–5 € / 6–9 € / +0,50 € végétal | Presse locale, janv. 2024 | **Les deux sources se contredisent** (espresso « dès 2 € » vs « dès 2,50 € »). Le site n'affiche que des fourchettes, en italique, avec un avertissement visible en bas de `carte.html`. Remplacer par les vrais tarifs. |
| **Prix cuisine** | 2,50–4,50 € et 8–10 € | Presse locale, janv. 2024 | Idem. |
| **Ateliers** | 3 ateliers : méthodes douces, analyse sensorielle, latte art | 2 sources presse | Durée, tarif, nombre de places, fréquence, calendrier : **tout manque**. |
| **Ateliers — annulation** | Non traité | — | **Définir les conditions d'annulation et de report** avant de les vendre. Voir §4. |
| **Ateliers — ce qu'on emporte** | Marqué « à confirmer » sur la page | — | Préciser si un paquet ou une fiche est inclus. |
| **Ateliers — privatisation** | Marqué « à confirmer » sur la page | — | Préciser si groupes privés / entreprises. |
| **Boissons hors café** | Cold brew, matcha, golden latte, chocolat chaud, thé | Relevées **sur la photo** du tableau de lettres | Confirmer les intitulés et les prix. |
| **Torréfacteurs** | POMA, mazelab, Hydrangea, La Cabra, Kawa, People Possession | Kawa et People Possession : presse. Les autres : **relevés sur les photos fournies**. | Confirmer. Le site précise déjà que la sélection tourne. |
| **« Une trentaine de références »** | Affirmé | 1 source presse | Confirmer l'ordre de grandeur. |
| **« Six cafés au comptoir »** | Affirmé | 1 source presse | Confirmer. |
| **« Ancienne galerie d'art »** | Affirmé | 2 sources presse | Confirmer. |
| **Terrasse** | « Quelques tables, à la belle saison » | Constaté sur `devanture-terrasse.jpg` | Confirmer (nombre de places, saison). |
| **Coordonnées GPS** | Absentes du JSON-LD | — | Relever sur Google Business et compléter `business.config.js`. |
| **Facebook** | Non lié | Une page « Horizon café » existe, propriété non vérifiée | Confirmer avant de lier. |

### Points volontairement écartés

- **Rue piétonne.** Wikipédia décrit la rue Léon-Jamin comme une « voie piétonnière ».
  Les photos de la devanture montrent des voitures garées et un marquage au sol.
  Contradiction non tranchée → **le site ne dit rien sur ce point**. À vérifier si l'on
  veut ajouter un paragraphe accès/stationnement.
- **Nom du chef / de l'équipe.** Aucun nom n'est cité, faute de source fiable.
- **Avis clients.** Aucun avis n'est reproduit : pas de source vérifiable ni d'autorisation.
- **Nombre de places assises, wifi, accessibilité PMR.** Non documentés → non affirmés.

---

## 3. Ce qui a été vérifié (et n'est donc pas à redemander)

Relevé le **16 juillet 2026** au registre national des entreprises via l'API publique
`recherche-entreprises.api.gouv.fr` :

- Dénomination : **AEFC HORIZON**
- Enseigne déclarée : **HORIZON PAR ALAIA CAFE**
- Forme : **SAS**
- Siège : **38 rue Léon Jamin, 44000 Nantes**
- SIREN : **979 008 794** · SIRET siège : **979 008 794 00013**
- TVA : **FR60979008794**
- APE : **56.30Z — Restauration de type café**
- Immatriculation : **15 septembre 2023**
- Président : **AEFC HOLDING**
- Effectif : 1 à 4 salariés (2023)

Maison mère, même source : **SAS ALAIA CAFE ET BOUTIQUE**, SIREN 883 171 472,
4 rue de Budapest, 44000 Nantes, immatriculée le 29/04/2020.

Autre : la rue Léon-Jamin porte le nom du peintre belge **Léon Jamin (1872–1944)**,
dénomination votée le 14 novembre 1922 ; elle relie la rue Edmond-Prieur à la place
Saint-Similien (source : Wikipédia). Ce fait est utilisé en §01 de la page d'accueil.

---

## 4. Pages légales : ce qui a été créé, et ce qui ne l'a pas été

### Créées

| Page | Pourquoi |
|---|---|
| `mentions-legales.html` | Obligatoire (art. 6 III LCEN) pour tout site édité par une société. |
| `confidentialite.html` | Transparence RGPD sur les journaux de l'hébergeur + les liens sortants, même en l'absence de collecte. Inclut la section cookies (ancre `#cookies`). |

### Volontairement non créées

| Page | Pourquoi pas |
|---|---|
| **CGV** | Le site ne vend rien, n'encaisse rien, ne conclut aucun contrat à distance. Une CGV serait un document sans objet. **À créer le jour où les ateliers se vendent en ligne.** |
| **CGU** | Aucun compte, aucun contenu déposé par l'utilisateur, aucun service interactif. Sans objet. |
| **Politique d'annulation / de remboursement** | Rien n'est réservable ni payable via le site. Voir §2 : les conditions d'annulation des ateliers doivent exister **côté maison**, mais ne relèvent pas d'une page légale du site tant qu'il n'y a pas de vente en ligne. |
| **Droit de rétractation / formulaire de rétractation** | Pas de vente à distance → l'article L221-18 du code de la consommation ne s'applique pas. |
| **Informations de livraison** | Aucune livraison. |
| **Bannière de consentement cookies** | Voir §5. |
| **Médiateur de la consommation** | Obligatoire pour un professionnel vendant à des consommateurs. **À trancher** : l'obligation vise l'activité du café (vente sur place), pas le site. À vérifier avec le comptable — si un médiateur est déjà désigné, ajouter ses coordonnées aux mentions légales. |

---

## 5. Cookies, traceurs, données

### Ce que le site fait réellement

| | |
|---|---|
| Cookies déposés | **aucun** — vérifiable : `document.cookie` renvoie une chaîne vide |
| Stockage local | **aucun** — pas de `localStorage`, pas de `sessionStorage` |
| Mesure d'audience | **aucune** |
| Requêtes vers des tiers | **aucune** — voir ci-dessous |
| Formulaires | **aucun** |
| Comptes utilisateurs | **aucun** |
| Newsletter | **aucune** |
| Paiement | **aucun** |

### Pourquoi il n'y a pas de bannière

L'article 82 de la loi Informatique et Libertés impose le consentement **avant tout dépôt
de cookie non strictement nécessaire**. Aucun cookie n'étant déposé, il n'y a rien à
consentir. Une bannière serait une gêne sans objet. C'est un choix argumenté, pas un oubli.

**Ce qui déclencherait l'obligation d'en poser une :**

- ajouter Google Analytics, Matomo (en mode non exempté), un pixel Meta ou tout traceur ;
- **intégrer une carte Google Maps en `<iframe>`** (aujourd'hui l'itinéraire est un simple
  lien sortant, exprès) ;
- intégrer une vidéo YouTube/Vimeo, un widget Instagram, un module de réservation tiers ;
- charger les polices depuis Google Fonts (elles sont **auto-hébergées**, exprès).

Dans ces cas : dispositif Refuser / Accepter / Personnaliser, refus aussi simple que
l'acceptation, aucun dépôt avant consentement, lien permanent de modification du choix
dans le pied de page.

### Zéro requête tierce — comment c'est tenu

- **Polices** : Gluten, Schibsted Grotesk et DM Mono sont servies depuis `assets/font/`
  (licence SIL OFL 1.1). Aucun appel à `fonts.googleapis.com` ni `fonts.gstatic.com`.
- **Carte** : lien sortant vers Google Maps, pas d'`<iframe>`.
- **Instagram** : lien sortant, pas de widget.
- **Images, CSS, JS, icônes** : tout est local.

**Test de non-régression :** ouvrir l'onglet Réseau, filtrer sur « third-party ».
Le compte doit rester à zéro.

---

## 6. À vérifier après la mise en ligne

- [x] `grep -rn "example.invalid" .` ne renvoie plus rien
      (remplacé le 2026-08-07 par https://horizon-site-one.vercel.app — **domaine temporaire Vercel**,
       à rebasculer sur le domaine définitif dès qu'il est acheté)
- [ ] `grep -rn "à fournir" *.html` ne renvoie plus rien
- [ ] La page 404 est bien servie par l'hébergeur en HTTP 404 (et non en 200)
- [ ] `robots.txt` et `sitemap.xml` pointent le vrai domaine
- [ ] Le site est déclaré dans Google Search Console
- [ ] La fiche Google Business est cohérente avec les horaires du site
- [ ] Aucune requête tierce dans l'onglet Réseau
- [ ] `document.cookie` est vide
