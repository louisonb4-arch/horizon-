/* ═══════════════════════════════════════════════════════════════════════════
   HORIZON — script unique. Zéro dépendance, zéro traceur, zéro cookie.
   Le mouvement est une couche en plus : si ce fichier ne se charge pas,
   la page reste entièrement lisible (voir le filet dans le <head>).
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* Le drapeau que le filet du <head> attend. Il ne peut être levé que d'ici :
     si ce fichier ne se charge pas, la classe .js tombe et tout redevient visible. */
  window.__horizon = true;

  var doux = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ── 1. Le trait : on mesure chaque tracé pour l'animer proprement ────── */
  $$('.trace').forEach(function (svg) {
    var p = svg.querySelector('path');
    if (!p || !p.getTotalLength) return;
    try {
      var l = Math.ceil(p.getTotalLength());
      if (l) svg.style.setProperty('--long', l);
    } catch (e) { /* un SVG pas encore rendu : on laisse la valeur par défaut */ }
  });

  /* ── 2. Entrées à l'écran ────────────────────────────────────────────── */
  var cibles = $$('.leve, .revele, .trace');

  if (doux || !('IntersectionObserver' in window)) {
    cibles.forEach(function (el) { el.classList.add('vu'); });
  } else {
    var oeil = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('vu');
        oeil.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    cibles.forEach(function (el) { oeil.observe(el); });

    /* Filet : ce qui est déjà à l'écran au chargement ne doit jamais attendre. */
    window.setTimeout(function () {
      cibles.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('vu');
      });
    }, 90);
  }

  /* ── 3. Le tiroir tactile ────────────────────────────────────────────── */
  var tirette = $('.tirette');
  var tiroir = $('.tiroir');

  if (tirette && tiroir) {
    var basculer = function (ouvrir) {
      tirette.setAttribute('aria-expanded', ouvrir ? 'true' : 'false');
      tiroir.setAttribute('data-ouvert', ouvrir ? 'oui' : 'non');
      tiroir.setAttribute('aria-hidden', ouvrir ? 'false' : 'true');
      document.body.style.overflow = ouvrir ? 'hidden' : '';
      tirette.setAttribute('aria-label', ouvrir ? 'Fermer le menu' : 'Ouvrir le menu');
      if (ouvrir) {
        var premier = tiroir.querySelector('a');
        if (premier) premier.focus({ preventScroll: true });
      }
    };

    tirette.addEventListener('click', function () {
      basculer(tirette.getAttribute('aria-expanded') !== 'true');
    });

    /* on referme dès qu'on part quelque part */
    $$('a', tiroir).forEach(function (a) {
      a.addEventListener('click', function () { basculer(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && tirette.getAttribute('aria-expanded') === 'true') {
        basculer(false);
        tirette.focus();
      }
    });

    /* le tiroir est une vue tactile : il ne survit pas à un passage en desktop */
    window.matchMedia('(min-width: 861px)').addEventListener('change', function (m) {
      if (m.matches) basculer(false);
    });

    /* piège à tabulation tant que le tiroir couvre la page */
    tiroir.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || tirette.getAttribute('aria-expanded') !== 'true') return;
      var f = $$('a, button', tiroir).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var premier = f[0], dernier = f[f.length - 1];
      if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
      else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
    });
  }

  /* ── 4. La section où l'on se trouve s'entoure dans l'enseigne ────────── */
  var liens = $$('.enseigne__lien[data-section]');
  var sections = liens
    .map(function (a) { return document.getElementById(a.getAttribute('data-section')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var marquer = function (id) {
      liens.forEach(function (a) {
        if (a.getAttribute('data-section') === id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };
    var veille = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (e.isIntersecting) marquer(e.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { veille.observe(s); });
  }
})();
