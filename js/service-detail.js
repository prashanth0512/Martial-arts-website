const SERVICES = {
  karate: {
    id: 'karate',
    name: 'Karate',
    tagline: 'The Way of the Empty Hand',
    icon: 'fa-hand-fist',
    color: '#d11231',
    heroSub:
      'Master the ancient art of Karate — discipline, power, and precision through traditional kata, kumite, and self-defence training for all ages.',
    aboutTitle: 'WHAT IS KARATE?',
    aboutBody:
      'Karate is a striking art using punching, kicking, knee strikes, elbow strikes, and open-hand techniques. Our curriculum blends traditional Shotokan fundamentals with modern sport application, building physical strength, mental focus, and lifelong discipline.',
    features: [
      'Kata — Traditional forms for strength and memory',
      'Kumite — Controlled sparring for real-world application',
      'Self-defence fundamentals for all ages',
      'Belt progression from White to Black',
      'Classes for children (5+), teens, and adults',
    ],
    image: '../images/hero.png',
    pricing: [
      {
        tier: 'Beginner',
        price: '49',
        period: '/ month',
        featured: false,
        features: [
          { text: '2 classes per week', ok: true },
          { text: 'Uniform (Gi) included', ok: true },
          { text: 'Belt grading every 3 months', ok: true },
          { text: 'Online training videos', ok: false },
          { text: 'Private coaching sessions', ok: false },
        ],
      },
      {
        tier: 'Intermediate',
        price: '79',
        period: '/ month',
        featured: true,
        badge: 'Most Popular',
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Uniform (Gi) included', ok: true },
          { text: 'Belt grading every 3 months', ok: true },
          { text: 'Online training videos', ok: true },
          { text: 'Private coaching sessions', ok: false },
        ],
      },
      {
        tier: 'Advanced',
        price: '119',
        period: '/ month',
        featured: false,
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Uniform (Gi) included', ok: true },
          { text: 'Monthly belt assessments', ok: true },
          { text: 'Online training videos', ok: true },
          { text: '2 private coaching sessions', ok: true },
        ],
      },
    ],
    gallery: [
      { src: '../images/hero.png', label: 'Kata Practice' },
      { src: '../images/programs.png', label: 'Group Training' },
      { src: '../images/join_class.png', label: 'Kumite Sparring' },
      { src: '../images/about_hero_bg.png', label: 'Dojo Training' },
      { src: '../images/about_vision_bg.png', label: 'Belt Grading' },
      { src: '../images/home2_hero.png', label: 'Children\'s Class' },
      { src: '../images/home2_workout.png', label: 'Fitness Training' },
      { src: '../images/programs.png', label: 'Championship' },
    ],
    testimonials: [
      {
        quote:
          '"I started Karate with zero experience and in 18 months I earned my brown belt. The instructors are patient, passionate, and incredibly skilled."',
        name: 'MONICA HALE',
        role: 'Karate — Brown Belt',
        img: '../images/testimonial_woman.png',
        stars: 5,
      },
      {
        quote:
          '"My son is 8 years old and has completely transformed — better focus at school, more confidence, and he loves every single class at GELUD."',
        name: 'JAMES ROBINSON',
        role: 'Parent of Student',
        img: '../images/testimonial_man.png',
        stars: 5,
      },
    ],
  },

  'muay-thai': {
    id: 'muay-thai',
    name: 'Muay Thai',
    tagline: 'The Art of Eight Limbs',
    icon: 'fa-fire-flame-curved',
    color: '#d11231',
    heroSub:
      'Unlock devastating striking power using fists, elbows, knees, and kicks. Muay Thai builds elite conditioning, mental toughness, and unstoppable technique.',
    aboutTitle: 'WHAT IS MUAY THAI?',
    aboutBody:
      'Muay Thai is Thailand\'s national sport and one of the world\'s most effective striking arts. Training at GELUD covers punches, roundhouse kicks, elbow strikes, knee strikes, clinch work, and pad sessions that will push your physical and mental limits.',
    features: [
      'Punches, kicks, elbows and knee combinations',
      'Heavy bag and Thai pad technical training',
      'Clinch & dirty boxing control',
      'Conditioning circuits for peak fitness',
      'Optional light sparring for experienced students',
    ],
    image: '../images/programs.png',
    pricing: [
      {
        tier: 'Beginner',
        price: '55',
        period: '/ month',
        featured: false,
        features: [
          { text: '2 classes per week', ok: true },
          { text: 'Hand wraps + gloves provided', ok: true },
          { text: 'Fundamentals curriculum', ok: true },
          { text: 'Pad work sessions', ok: false },
          { text: 'Sparring access', ok: false },
        ],
      },
      {
        tier: 'Fighter',
        price: '89',
        period: '/ month',
        featured: true,
        badge: 'Most Popular',
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Hand wraps + gloves provided', ok: true },
          { text: 'Fundamentals + advanced curriculum', ok: true },
          { text: 'Intensive pad work sessions', ok: true },
          { text: 'Sparring access', ok: false },
        ],
      },
      {
        tier: 'Champion',
        price: '129',
        period: '/ month',
        featured: false,
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Full gear package', ok: true },
          { text: 'All curriculum levels', ok: true },
          { text: 'Intensive pad work sessions', ok: true },
          { text: 'Full sparring access', ok: true },
        ],
      },
    ],
    gallery: [
      { src: '../images/programs.png', label: 'Heavy Bag Work' },
      { src: '../images/hero.png', label: 'Pad Training' },
      { src: '../images/join_class.png', label: 'Elbow Strikes' },
      { src: '../images/home2_hero.png', label: 'Knee Strikes' },
      { src: '../images/about_hero_bg.png', label: 'Clinch Work' },
      { src: '../images/home2_workout.png', label: 'Conditioning' },
      { src: '../images/about_vision_bg.png', label: 'Group Class' },
      { src: '../images/about_ben.png', label: 'Sparring Session' },
    ],
    testimonials: [
      {
        quote:
          '"Muay Thai at GELUD completely changed my fitness level. I lost 14 kg in 4 months and gained confidence I never thought possible. The coaches are world-class."',
        name: 'ANGELINA DUNN',
        role: 'Muay Thai — 2 Years',
        img: '../images/testimonial_woman.png',
        stars: 5,
      },
      {
        quote:
          '"I competed in my first amateur fight after 8 months of training here. The technical detail and fight preparation from the coaches is second to none."',
        name: 'MICHAEL TAN',
        role: 'Muay Thai — Fighter',
        img: '../images/testimonial_man.png',
        stars: 5,
      },
    ],
  },

  'jiu-jitsu': {
    id: 'jiu-jitsu',
    name: 'Jiu-Jitsu',
    tagline: 'The Gentle Art of Ground Control',
    icon: 'fa-person-falling',
    color: '#d11231',
    heroSub:
      'Master the ground game — submissions, sweeps, positional control, and leverage. BJJ is the ultimate martial art for self-defence and competitive grappling.',
    aboutTitle: 'WHAT IS JIU-JITSU?',
    aboutBody:
      'Brazilian Jiu-Jitsu (BJJ) teaches that a smaller, weaker person can defend against a larger attacker through technique, leverage, and submission holds. GELUD\'s BJJ program covers takedowns, guard positions, sweeps, passes, and a full library of chokes and joint locks.',
    features: [
      'Takedowns, throws, and trips',
      'Guard — closed, open, half & butterfly',
      'Passing, sweeping, and positional dominance',
      'Choke submissions and joint locks',
      'Gi and No-Gi classes available',
    ],
    image: '../images/join_class.png',
    pricing: [
      {
        tier: 'White Belt',
        price: '59',
        period: '/ month',
        featured: false,
        features: [
          { text: '2 classes per week', ok: true },
          { text: 'Gi uniform included', ok: true },
          { text: 'Fundamentals program', ok: true },
          { text: 'No-Gi classes', ok: false },
          { text: 'Open mat rolling', ok: false },
        ],
      },
      {
        tier: 'Blue Belt',
        price: '89',
        period: '/ month',
        featured: true,
        badge: 'Best Value',
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Gi uniform included', ok: true },
          { text: 'Fundamentals + advanced', ok: true },
          { text: 'No-Gi classes', ok: true },
          { text: 'Open mat rolling', ok: false },
        ],
      },
      {
        tier: 'Purple+',
        price: '125',
        period: '/ month',
        featured: false,
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Gi uniform included', ok: true },
          { text: 'All curriculum levels', ok: true },
          { text: 'No-Gi classes', ok: true },
          { text: 'Unlimited open mat rolling', ok: true },
        ],
      },
    ],
    gallery: [
      { src: '../images/join_class.png', label: 'Guard Work' },
      { src: '../images/hero.png', label: 'Takedown Drill' },
      { src: '../images/programs.png', label: 'Submission Hold' },
      { src: '../images/home2_hero.png', label: 'Rolling' },
      { src: '../images/about_hero_bg.png', label: 'No-Gi Class' },
      { src: '../images/home2_workout.png', label: 'Competition Prep' },
      { src: '../images/about_james.png', label: 'Passing Guard' },
      { src: '../images/about_daniel.png', label: 'Choke Finish' },
    ],
    testimonials: [
      {
        quote:
          '"BJJ at GELUD saved me twice in real-life situations. The self-defence aspect is incredible and the community is the most welcoming I\'ve ever been part of."',
        name: 'SARA JOHNSON',
        role: 'BJJ — Blue Belt',
        img: '../images/testimonial_woman.png',
        stars: 5,
      },
      {
        quote:
          '"I went from never training a day in my life to competing at regional level in 14 months. The structured curriculum and dedicated coaches made all the difference."',
        name: 'DANIEL BROOKS',
        role: 'BJJ — Purple Belt',
        img: '../images/testimonial_man.png',
        stars: 5,
      },
    ],
  },

  'kung-fu': {
    id: 'kung-fu',
    name: 'Kung Fu',
    tagline: 'The Path of Mastery & Harmony',
    icon: 'fa-yin-yang',
    color: '#d11231',
    heroSub:
      'Explore a rich tradition of Chinese martial arts — forms, strikes, philosophy, and movement that connects body, mind, and spirit through disciplined practice.',
    aboutTitle: 'WHAT IS KUNG FU?',
    aboutBody:
      'Kung Fu encompasses hundreds of Chinese martial arts styles emphasising fluidity, efficiency, and philosophy. GELUD\'s program draws from Wing Chun and Wushu, blending explosive speed and technique with mindfulness, breathing exercises, and traditional forms (Taolu).',
    features: [
      'Traditional Taolu forms — solo and partner',
      'Strikes, sweeps, and throws from Wing Chun',
      'Wushu acrobatics and flexibility training',
      'Weapons training — staff and nunchaku (advanced)',
      'Breathing & meditation for mental clarity',
    ],
    image: '../images/about_hero_bg.png',
    pricing: [
      {
        tier: 'Foundation',
        price: '49',
        period: '/ month',
        featured: false,
        features: [
          { text: '2 classes per week', ok: true },
          { text: 'Training uniform included', ok: true },
          { text: 'Traditional forms curriculum', ok: true },
          { text: 'Wushu acrobatics', ok: false },
          { text: 'Weapons training', ok: false },
        ],
      },
      {
        tier: 'Practitioner',
        price: '79',
        period: '/ month',
        featured: true,
        badge: 'Most Popular',
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Training uniform included', ok: true },
          { text: 'All forms curriculum', ok: true },
          { text: 'Wushu acrobatics', ok: true },
          { text: 'Weapons training', ok: false },
        ],
      },
      {
        tier: 'Master',
        price: '115',
        period: '/ month',
        featured: false,
        features: [
          { text: 'Unlimited group classes', ok: true },
          { text: 'Full training gear', ok: true },
          { text: 'All curriculum levels', ok: true },
          { text: 'Wushu acrobatics', ok: true },
          { text: 'Weapons training access', ok: true },
        ],
      },
    ],
    gallery: [
      { src: '../images/about_hero_bg.png', label: 'Taolu Forms' },
      { src: '../images/hero.png', label: 'Wing Chun Strikes' },
      { src: '../images/programs.png', label: 'Partner Drills' },
      { src: '../images/join_class.png', label: 'Wushu Movement' },
      { src: '../images/home2_hero.png', label: 'Weapons Training' },
      { src: '../images/about_vision_bg.png', label: 'Meditation' },
      { src: '../images/home2_workout.png', label: 'Flexibility' },
      { src: '../images/about_daniel.png', label: 'Group Class' },
    ],
    testimonials: [
      {
        quote:
          '"Kung Fu at GELUD is unlike any fitness class — it is a journey. I have gained flexibility, balance, inner peace, and skills that I use every single day."',
        name: 'LISA CHEN',
        role: 'Kung Fu — Practitioner',
        img: '../images/testimonial_woman.png',
        stars: 5,
      },
      {
        quote:
          '"The weapons training module blew my mind. The Sifu here has decades of experience and it shows. Best decision I\'ve made for both my body and my mind."',
        name: 'RYAN MASTERS',
        role: 'Kung Fu — Master Level',
        img: '../images/testimonial_man.png',
        stars: 5,
      },
    ],
  },
};


function getServiceParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('service') || 'karate';
}

function stars(n) {
  return Array(n).fill('<i class="fa-solid fa-star"></i>').join('');
}

function renderPricingCard(p) {
  return `
    <div class="pricing-card${p.featured ? ' featured' : ''}">
      ${p.badge ? `<span class="pricing-badge">${p.badge}</span>` : ''}
      <span class="pricing-tier">${p.tier}</span>
      <div class="pricing-amount"><sup>$</sup>${p.price}<span>${p.period}</span></div>
      <span class="pricing-period">Billed monthly, cancel anytime</span>
      <hr class="pricing-divider">
      <ul class="pricing-features">
        ${p.features.map(f => `
          <li class="${f.ok ? '' : 'disabled'}">
            <i class="fa-solid ${f.ok ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
            ${f.text}
          </li>`).join('')}
      </ul>
      <a href="contact.html" class="btn ${p.featured ? 'btn-primary' : 'btn-outline'} pricing-btn">
        ${p.featured ? 'GET STARTED' : 'CHOOSE PLAN'}
      </a>
    </div>`;
}

function renderGalleryItem(item) {
  return `
    <div class="gallery-item">
      <img src="${item.src}" alt="${item.label}" loading="lazy">
      <div class="gallery-item-overlay"><span>${item.label}</span></div>
    </div>`;
}

function renderTestiCard(t) {
  return `
    <div class="testi-card">
      <div class="testi-stars">${stars(t.stars)}</div>
      <p class="testi-quote">${t.quote}</p>
      <div class="testi-author">
        <img src="${t.img}" alt="${t.name}">
        <div><h5>${t.name}</h5><span>${t.role}</span></div>
      </div>
    </div>`;
}


function renderService(key) {
  const s = SERVICES[key] || SERVICES['karate'];

  document.querySelector('.sd-hero-bg-icon i').className = `fa-solid ${s.icon}`;
  document.querySelector('.sd-hero-label').textContent = s.tagline;
  document.querySelector('.sd-hero-title').textContent = s.name.toUpperCase();
  document.querySelector('.sd-hero-sub').textContent = s.heroSub;

  document.querySelector('.sd-breadcrumb-service').textContent = s.name;

  document.title = `${s.name} – GELUD Martial Arts`;

  document.querySelector('.sd-about-badge span').textContent = s.name;
  document.querySelector('.sd-about-title').textContent = s.aboutTitle;
  document.querySelector('.sd-about-body').textContent = s.aboutBody;
  document.querySelector('.sd-features').innerHTML = s.features
    .map(f => `<div class="sd-feature"><i class="fa-solid fa-circle-check"></i><span>${f}</span></div>`)
    .join('');
  const img = document.querySelector('.sd-about-img img');
  img.src = s.image;
  img.alt = s.name + ' Training';

  document.querySelector('.pricing-grid').innerHTML = s.pricing.map(renderPricingCard).join('');

  document.querySelector('.sd-gallery-grid').innerHTML = s.gallery.map(renderGalleryItem).join('');

  document.querySelector('.sd-gallery .sd-section-heading').textContent = `${s.name.toUpperCase()} GALLERY`;

  document.querySelector('.sd-testi-grid').innerHTML = s.testimonials.map(renderTestiCard).join('');
  document.querySelector('.sd-testi .sd-section-heading').textContent = `${s.name.toUpperCase()} REVIEWS`;

  
  document.querySelector('.sd-cta h2').innerHTML = `START YOUR<br>${s.name.toUpperCase()} JOURNEY`;

  
  document.querySelectorAll('.sd-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.service === key);
  });
}


function initTabs() {
  document.querySelectorAll('.sd-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sKey = btn.dataset.service;
      history.replaceState(null, '', `?service=${sKey}`);
      renderService(sKey);
      
      document.querySelector('.sd-about').scrollIntoView({ behavior: 'smooth' });
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const key = getServiceParam();
  renderService(key);
  initTabs();
});
