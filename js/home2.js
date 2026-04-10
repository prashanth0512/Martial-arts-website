
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initMobileMenu();
  initCounters();
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

function initRTL() {
  const toggle = document.getElementById('rtl-toggle');
  if (!toggle) return;
  const html = document.documentElement;

  const saved = localStorage.getItem('rtl') === 'true';
  if (saved) {
    html.setAttribute('dir', 'rtl');
    toggle.textContent = 'RTL';
  }

  toggle.addEventListener('click', () => {
    const isRTL = html.getAttribute('dir') === 'rtl';
    const nextRTL = !isRTL;
    html.setAttribute('dir', nextRTL ? 'rtl' : 'ltr');
    localStorage.setItem('rtl', nextRTL);
    toggle.textContent = nextRTL ? 'RTL' : 'LTR';
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

  document.querySelectorAll('.nav-dropdown').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 640) {
        e.preventDefault();
        toggle.closest('li').classList.toggle('open');
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


function initCounters() {
  const counters = document.querySelectorAll('.hero2-stat-num[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + (el.dataset.suffix || '');
      }, 25);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}


function initScrollAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    [data-animate] { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
    [data-animate].animated { opacity: 1; transform: translateY(0); }
    [data-animate][data-delay="1"] { transition-delay: 0.1s; }
    [data-animate][data-delay="2"] { transition-delay: 0.2s; }
    [data-animate][data-delay="3"] { transition-delay: 0.3s; }
    [data-animate][data-delay="4"] { transition-delay: 0.4s; }

    
    @media (max-width: 1024px) {
      .active-on-scroll {
        transform: translateY(-10px) scale(1.02) !important;
        box-shadow: 0 15px 30px rgba(209, 18, 49, 0.2) !important;
        border-color: var(--accent-color) !important;
      }
      .offer-card, .team-card, .why-icon, .why-image img {
        transition: transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease !important;
      }
    }
  `;
  document.head.appendChild(style);

  
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animated'); animObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

  
  if (window.innerWidth <= 1024) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-on-scroll');
        } else {
          entry.target.classList.remove('active-on-scroll');
        }
      });
    }, {
      rootMargin: '-20% 0px -20% 0px', 
      threshold: 0.5
    });

    const hoverSelectors = '.offer-card, .team-card, .why-feature, .why-image img';
    document.querySelectorAll(hoverSelectors).forEach(el => scrollObserver.observe(el));
  }
}


function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}
