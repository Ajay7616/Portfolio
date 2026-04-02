function scrollToSection(sectionId) {
  var section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleNavbar() {
  var navbarLinks = document.querySelector('.menuItems');
  navbarLinks.style.display = (navbarLinks.style.display === 'block') ? 'none' : 'block';
}

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  if (window.scrollY > 60) {
    navbar.style.paddingTop  = '18px';
    navbar.style.paddingBottom = '14px';
    navbar.style.background  = 'rgba(4, 21, 45, 0.92)';
    navbar.style.backdropFilter = 'blur(12px)';
    navbar.style.position    = 'fixed';
    navbar.style.top         = '0';
    navbar.style.left        = '0';
    navbar.style.right       = '0';
    navbar.style.margin      = '0';
    navbar.style.padding     = '14px 10%';
    navbar.style.zIndex      = '100';
    navbar.style.borderBottom = '1px solid rgba(87, 108, 188, 0.2)';
    navbar.style.transition  = 'all 0.3s ease';
  } else {
    navbar.style.position   = 'relative';
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
    navbar.style.padding    = '48px 0 0 0';
    navbar.style.margin     = '0 10%';
    navbar.style.borderBottom = 'none';
  }
});

window.addEventListener('scroll', function () {
  var sections = ['me', 'about', 'experience', 'education', 'project', 'skill', 'contact'];
  var links = document.querySelectorAll('#navbar .menuItems a');

  var current = '';
  sections.forEach(function (id) {
    var el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) {
      current = id;
    }
  });

  links.forEach(function (link) {
    link.style.color = '';
    var href = link.getAttribute('href').replace('#', '');
    if (href === current) {
      link.style.color = '#ffffff';
      link.style.fontWeight = '700';
    } else {
      link.style.fontWeight = '500';
    }
  });
});

(function () {
  var style = document.createElement('style');
  style.textContent = `
    .fade-section {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .fade-section.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('#about, #experience, #education, #project, #skill, #contact');
    targets.forEach(function (el) { el.classList.add('fade-section'); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    targets.forEach(function (el) { observer.observe(el); });
  });
})();