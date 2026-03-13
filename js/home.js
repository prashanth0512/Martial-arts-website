
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initSmoothScroll();
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
  setIcon(icon, saved);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setIcon(icon, next);
  });
}
function setIcon(icon, theme) {
  icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
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

  
  document.querySelectorAll('.nav-dropdown').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const li = toggle.closest('li');
        li.classList.toggle('open');
      }
    });
  });

  
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.querySelector('i').className = 'fa-solid fa-bars';
    }
  });
}


function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      
      const nav = document.querySelector('.nav-links');
      const ham = document.querySelector('.hamburger');
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        ham.setAttribute('aria-expanded', 'false');
        ham.querySelector('i').className = 'fa-solid fa-bars';
      }
    });
  });
}


function initScrollAnimations() {
  const animateEls = document.querySelectorAll('[data-animate]');
  const isMobile = window.innerWidth <= 1024;

  
  const entryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        entryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animateEls.forEach(el => entryObserver.observe(el));

  
  if (isMobile) {
    const hoverEls = document.querySelectorAll('.blog-card, .review-card, .offer-card, .program-card, .team-card, .prog-card');
    const autoHoverObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          entry.target.classList.add('active-on-scroll');
        } else {
          entry.target.classList.remove('active-on-scroll');
        }
      });
    }, { 
      
      rootMargin: '-20% 0% -20% 0%',
      threshold: 0.5 
    });

    hoverEls.forEach(el => autoHoverObserver.observe(el));
  }
}


function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}
