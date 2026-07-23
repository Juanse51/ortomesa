/* ============================================================
   ORTOMESA – JavaScript principal
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Menú hamburguesa ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });

    // Cerrar al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── Nav activo en scroll ── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

  function setActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);

  /* ── Animación de entrada al hacer scroll (Intersection Observer) ── */
  const animEls = document.querySelectorAll(
    '.feature-card, .svc-card, .testi-card, .about-img-wrap, .about-content'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      observer.observe(el);
    });
  }

  /* ── Modal de servicios ── */
  const svcOverlay = document.getElementById('svcModalOverlay');

  if (svcOverlay) {
    const svcImg       = document.getElementById('svcModalImg');
    const svcTitle     = document.getElementById('svcModalTitle');
    const svcDesc      = document.getElementById('svcModalDesc');
    const svcTreatment = document.getElementById('svcModalTreatment');
    const svcRecovery  = document.getElementById('svcModalRecovery');

    function openServiceModal(card) {
      const n = card.getAttribute('data-service');
      const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
      const dict = window.ORTOMESA_I18N && window.ORTOMESA_I18N[lang];
      if (!dict) return;

      const img = card.querySelector('img');
      if (img) {
        svcImg.src = img.src;
        svcImg.alt = img.alt;
      }
      svcTitle.textContent   = dict['svc' + n + '_title'];
      svcDesc.textContent    = dict['svc' + n + '_modal_desc'];
      svcTreatment.innerHTML = dict['svc' + n + '_modal_treatment'];
      svcRecovery.innerHTML  = dict['svc' + n + '_modal_recovery'];

      svcOverlay.classList.add('open');
      document.body.classList.add('modal-open');
    }

    function closeServiceModal() {
      svcOverlay.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    document.querySelectorAll('.svc-card[data-service]').forEach(function (card) {
      card.addEventListener('click', function () {
        openServiceModal(card);
      });
    });

    document.getElementById('svcModalClose').addEventListener('click', closeServiceModal);
    svcOverlay.addEventListener('click', function (e) {
      if (e.target === svcOverlay) closeServiceModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeServiceModal();
    });
  }

  /* ── Nav sombra en scroll ── */
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 30px rgba(10,31,68,.13)';
    } else {
      navbar.style.boxShadow = '0 2px 20px rgba(10,31,68,.08)';
    }
  });

});
