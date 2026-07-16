/* ═══════════════════════════════════════════════════════════════════════════
   HORIZON par alaïa café — fiche d'identité de l'établissement.
   SOURCE DE VÉRITÉ. Toute correction se reporte aux endroits listés dans
   `emplacements` ci-dessous (le contenu des pages est écrit en dur, exprès :
   il reste lisible sans JavaScript et indexable sans exécution).

   Légende :
     verifie: 'registre'  → contrôlé sur recherche-entreprises.api.gouv.fr (16/07/2026)
     verifie: 'presse'    → deux sources concordantes, à faire confirmer par la maison
     verifie: 'photo'     → constaté sur les photos fournies
     verifie: false       → À FOURNIR PAR LE CLIENT. Voir LEGAL-TODO.md
   ═══════════════════════════════════════════════════════════════════════════ */

export const businessConfig = {
  /* ── Identité ────────────────────────────────────────────────────────── */
  businessName: 'AEFC HORIZON',                       // verifie: 'registre'
  tradeName: 'Horizon par alaïa café',                // verifie: 'registre' (enseigne déclarée : « HORIZON PAR ALAIA CAFE »)
  legalForm: 'SAS (société par actions simplifiée)',  // verifie: 'registre'
  description:
    'Coffee shop et cave à café à Nantes, ouvert en septembre 2023 par Adeline et ' +
    'Florian dans une ancienne galerie d’art de la rue Léon-Jamin. Six cafés au ' +
    'comptoir, une trentaine de références à emporter, et trois ateliers.',

  /* ── Coordonnées ─────────────────────────────────────────────────────── */
  address: {
    street: '38 rue Léon Jamin',                      // verifie: 'registre'
    postalCode: '44000',
    city: 'Nantes',
    country: 'FR',
    /* Repère : la rue relie la rue Edmond-Prieur à la place Saint-Similien.
       Source : Wikipédia, « Rue Léon-Jamin ». */
    latitude: '[À COMPLÉTER]',                        // verifie: false — relever sur Google Business
    longitude: '[À COMPLÉTER]',                       // verifie: false
  },
  phone: '[À COMPLÉTER]',                             // verifie: false
  email: '[À COMPLÉTER]',                             // verifie: false

  /* ── Ouverture ───────────────────────────────────────────────────────── */
  openingHours: [                                     // verifie: 'presse' (2 sources concordantes)
    { jours: ['Tu', 'We', 'Th', 'Fr'], de: '09:30', a: '18:30' },
    { jours: ['Sa'], de: '11:00', a: '18:30' },
  ],
  closedDays: ['Su', 'Mo'],                           // verifie: 'presse'
  reservation: false,                                 // verifie: 'presse' — aucune réservation
  openedOn: '2023-09-15',                             // verifie: 'registre'

  /* ── Administratif ───────────────────────────────────────────────────── */
  siren: '979008794',                                 // verifie: 'registre'
  siret: '97900879400013',                            // verifie: 'registre' (siège)
  vatNumber: 'FR60979008794',                         // verifie: 'registre'
  apeCode: '56.30Z',                                  // verifie: 'registre'
  apeLabel: 'Restauration de type café',              // verifie: 'registre'
  president: 'AEFC HOLDING',                          // verifie: 'registre'
  shareCapital: '[À COMPLÉTER]',                      // verifie: false — obligatoire en mentions légales pour une SAS
  rcs: '[À COMPLÉTER — RCS Nantes 979 008 794 à confirmer]', // verifie: false
  publicationDirector: '[À COMPLÉTER]',               // verifie: false
  mediateur: '[À COMPLÉTER]',                         // verifie: false — non requis si aucune vente à distance

  /* ── Réseaux ─────────────────────────────────────────────────────────── */
  socialLinks: {
    instagram: 'https://www.instagram.com/horizoncafe.nantes/',  // verifie: 'presse'
    facebook: '[À CONFIRMER]',   // une page « Horizon café » existe — propriété à confirmer
    linkedin: null,              // pas de page connue : ne pas inventer de lien
  },

  /* ── Maison mère ─────────────────────────────────────────────────────── */
  maisonMere: {
    nom: 'Alaïa café & boutique',
    societe: 'SAS ALAIA CAFE ET BOUTIQUE',            // verifie: 'registre'
    siren: '883171472',                               // verifie: 'registre'
    adresse: '4 rue de Budapest, 44000 Nantes',       // verifie: 'registre'
    depuis: '2020-04-29',                             // verifie: 'registre' (immatriculation)
    gerants: 'Adeline et Florian',                    // verifie: 'presse'
  },

  /* ── Hébergement (bloc obligatoire en mentions légales) ──────────────── */
  hostingProvider: {
    name: '[À COMPLÉTER]',                            // verifie: false
    address: '[À COMPLÉTER]',
    phone: '[À COMPLÉTER]',
    website: '[À COMPLÉTER]',
  },

  /* ── Nom de domaine ──────────────────────────────────────────────────── */
  canonical: '[À COMPLÉTER — ex. https://horizon-cafe.fr]',  // verifie: false

  /* ── Ce que le site fait, et ne fait pas ─────────────────────────────── */
  siteProfile: {
    vitrine: true,
    venteEnLigne: false,      // → aucune CGV nécessaire
    compteUtilisateur: false, // → aucune CGU nécessaire
    formulaire: false,        // → aucune collecte de données via le site
    reservationEnLigne: false,
    newsletter: false,
    analytics: false,         // → aucun cookie non essentiel
    policesAutoHebergees: true,
    iframeTierce: false,      // itinéraire = lien sortant, pas de carte intégrée
    cookies: 'aucun',         // → aucune bannière de consentement (voir LEGAL-TODO.md)
  },
};

/* ── Où chaque valeur apparaît dans les pages (à tenir à jour) ──────────
   phone / email ......... index.html §07, ateliers.html, mentions-legales.html,
                           confidentialite.html, pied de page (toutes les pages)
   openingHours .......... index.html (bandeau du hero + §07), carte.html,
                           JSON-LD de index.html, pied de page
   siren/siret/vat ....... mentions-legales.html, JSON-LD de index.html
   hostingProvider ....... mentions-legales.html
   canonical ............. <link rel="canonical"> + og:url de chaque page,
                           sitemap.xml, robots.txt
   ─────────────────────────────────────────────────────────────────────── */
