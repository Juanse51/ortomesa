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
