document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollAnimations();
  initHeaderScroll();
});

function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const icon = toggle.querySelector('i');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  icon.className = saved === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    icon.className = next === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  document.querySelectorAll('.nav-dropdown').forEach(t => {
    t.addEventListener('click', e => {
      if (window.innerWidth <= 1024) { e.preventDefault(); t.closest('li').classList.toggle('open'); }
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.querySelector('i').className = 'fa-solid fa-bars';
    }
  });
}

function initScrollAnimations() {
  const animateEls = document.querySelectorAll('[data-animate]');
  const isMobile = window.innerWidth <= 1024;

  
  const entryObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animated');
        entryObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  animateEls.forEach(el => entryObserver.observe(el));

  
  if (isMobile) {
    const hoverEls = document.querySelectorAll('.blog-card, .review-card, .offer-card, .program-card, .team-card, .service-card, .prog-card');
    const autoHoverObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('active-on-scroll');
        } else {
          e.target.classList.remove('active-on-scroll');
        }
      });
    }, { 
      rootMargin: '-25% 0% -25% 0%',
      threshold: 0.4 
    });
    hoverEls.forEach(el => autoHoverObserver.observe(el));
  }
}

function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
}
