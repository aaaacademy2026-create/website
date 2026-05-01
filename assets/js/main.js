// AAA Academy — UI behavior
(function () {
  'use strict';

  const translations = window.translations || { fr: {}, en: {} };
  let currentLang = 'fr';

  const titles = {
    fr: 'AAA Academy | Cours de chant à Montréal | Singing Classes & Performing Arts',
    en: 'AAA Academy | Singing Classes in Montreal | Vocal Coaching & Performing Arts'
  };

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });

    if (titles[lang]) document.title = titles[lang];
    try { localStorage.setItem('aaa_lang', lang); } catch (e) {}
  }

  // Language toggle
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }

  // Sticky-nav background on scroll
  const nav = document.getElementById('mainNav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Fade-up reveal on scroll (respects reduced motion)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
  }

  // Form submit feedback (the form itself posts to FormSubmit and redirects to thanks.html)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', () => {
      const msg = (translations[currentLang] && translations[currentLang].contact_alert)
        || 'Merci! Votre demande a été envoyée.';
      // Non-blocking toast would be nicer; alert kept for parity with original.
      try { console.info(msg); } catch (e) {}
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initial language: localStorage > <html lang> > fr
  let initial = 'fr';
  try {
    const saved = localStorage.getItem('aaa_lang');
    if (saved && translations[saved]) initial = saved;
    else if (document.documentElement.lang === 'en') initial = 'en';
  } catch (e) {}
  setLanguage(initial);
})();
