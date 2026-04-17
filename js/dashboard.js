
document.addEventListener('DOMContentLoaded', () => {

  const sidebar      = document.getElementById('sidebar');
  const overlay      = document.getElementById('sidebar-overlay');
  const openBtn      = document.getElementById('sidebar-open');
  const closeBtn     = document.getElementById('sidebar-close');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections     = document.querySelectorAll('.dash-section');
  const topbarTitle  = document.getElementById('topbar-title');
  const themeBtn     = document.getElementById('theme-toggle');
  const root         = document.documentElement;
  const gotoLinks    = document.querySelectorAll('[data-goto]');
  const vidFilters   = document.querySelectorAll('.vid-filter');

  
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  
  const sectionTitles = {
    'overview': 'Overview',
    'belt-progress': 'Belt Progress',
    'videos': 'Technique Videos',
    'testing': 'Testing Dates',
    'messages': 'Dojo Messages',
    'profile': 'Profile'
  };

  function switchSection(sectionId) {
    
    sidebarLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    
    const targetLink = document.querySelector(`.sidebar-link[data-section="${sectionId}"]`);
    const targetSection = document.getElementById(`sec-${sectionId}`);

    if (targetLink) targetLink.classList.add('active');
    if (targetSection) targetSection.classList.add('active');
    topbarTitle.textContent = sectionTitles[sectionId] || 'Dashboard';

    
    closeSidebar();

    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      switchSection(sectionId);
    });
  });

  
  gotoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-goto');
      switchSection(target);
    });
  });

  
  function setTheme(name) {
    if (name === 'light') {
      root.setAttribute('data-theme', 'light');
      themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    }
  }

  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);

  themeBtn.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });

  
  vidFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      
      vidFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.video-grid-full .video-card');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-level') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  
  const rtlBtn = document.getElementById('rtl-toggle');
  
  function setDirection(isRTL) {
    if (isRTL) {
      root.setAttribute('dir', 'rtl');
      if (rtlBtn) rtlBtn.textContent = 'RTL';
      localStorage.setItem('rtl', 'true');
    } else {
      root.setAttribute('dir', 'ltr');
      if (rtlBtn) rtlBtn.textContent = 'LTR';
      localStorage.setItem('rtl', 'false');
    }
  }

  const savedRTL = localStorage.getItem('rtl') === 'true';
  setDirection(savedRTL);

  if (rtlBtn) {
    rtlBtn.addEventListener('click', () => {
      const curRTL = root.getAttribute('dir') === 'rtl';
      setDirection(!curRTL);
    });
  }

});
