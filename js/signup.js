

'use strict';

const html        = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

const nameInput   = document.getElementById('signup-name');
const emailInput  = document.getElementById('signup-email');
const pwInput     = document.getElementById('signup-password');

const nameError   = document.getElementById('name-error');
const emailError  = document.getElementById('email-error');
const pwError     = document.getElementById('pw-error');

const pwEye       = document.getElementById('pw-eye');
const pwEyeIcon   = document.getElementById('pw-eye-icon');

const strengthBar   = document.getElementById('strength-bar');
const strengthLabel = document.getElementById('strength-label');
const signupForm    = document.getElementById('signup-form');


function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('ss_theme', theme);

  if (theme === 'light') {
    themeIcon.className = 'fa-solid fa-moon';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    themeIcon.className = 'fa-solid fa-sun';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  }
}


function initTheme() {
  const saved = localStorage.getItem('ss_theme') || 'dark';
  applyTheme(saved);
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});



pwEye.addEventListener('click', () => {
  const isHidden = pwInput.type === 'password';
  pwInput.type        = isHidden ? 'text' : 'password';
  pwEyeIcon.className = isHidden ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  pwEye.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
});



function getStrength(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8)                      score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw))                         score++;
  if (/[^A-Za-z0-9]/.test(pw))              score++;
  return Math.min(score, 3);
}

const STRENGTH_CONFIG = {
  0: { width: '0%',   cls: '',       label: '' },
  1: { width: '33%',  cls: 'weak',   label: '🔴 Weak' },
  2: { width: '66%',  cls: 'medium', label: '🟡 Medium' },
  3: { width: '100%', cls: 'strong', label: '🟢 Strong' },
};

pwInput.addEventListener('input', () => {
  const score  = getStrength(pwInput.value);
  const config = STRENGTH_CONFIG[score];

  strengthBar.style.width = config.width;
  strengthBar.className   = `strength-bar ${config.cls}`;
  strengthLabel.textContent = config.label;
  strengthLabel.className   = `strength-label ${config.cls}`;

  if (pwError.textContent) clearError(pwInput, pwError);
});



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function showError(input, errorEl, message) {
  errorEl.textContent       = message;
  input.style.borderColor   = 'var(--error-color)';
  input.style.boxShadow     = '0 0 0 3px rgba(255, 77, 109, 0.2)';
}


function clearError(input, errorEl) {
  errorEl.textContent     = '';
  input.style.borderColor = '';
  input.style.boxShadow   = '';
}


function validateSignup() {
  let valid = true;

  
  if (!nameInput.value.trim()) {
    showError(nameInput, nameError, 'Full name is required.');
    valid = false;
  } else if (nameInput.value.trim().length < 2) {
    showError(nameInput, nameError, 'Name must be at least 2 characters.');
    valid = false;
  } else {
    clearError(nameInput, nameError);
  }

  
  if (!emailInput.value.trim()) {
    showError(emailInput, emailError, 'Email address is required.');
    valid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email.');
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (!pwInput.value) {
    showError(pwInput, pwError, 'Password is required.');
    valid = false;
  } else if (pwInput.value.length < 8) {
    showError(pwInput, pwError, 'Password must be at least 8 characters.');
    valid = false;
  } else if (getStrength(pwInput.value) < 2) {
    showError(pwInput, pwError, 'Password too weak. Add uppercase & numbers.');
    valid = false;
  } else {
    clearError(pwInput, pwError);
  }

  return valid;
}


nameInput.addEventListener('blur', () => {
  if (!nameInput.value.trim()) return;
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, nameError, 'Name must be at least 2 characters.');
  } else {
    clearError(nameInput, nameError);
  }
});

emailInput.addEventListener('blur', () => {
  if (!emailInput.value.trim()) return;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email.');
  } else {
    clearError(emailInput, emailError);
  }
});

nameInput.addEventListener('input',  () => { if (nameError.textContent)  clearError(nameInput,  nameError);  });
emailInput.addEventListener('input', () => { if (emailError.textContent) clearError(emailInput, emailError); });

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateSignup()) return;

  const submitBtn = document.getElementById('signup-submit');
  const btnText   = submitBtn.querySelector('.btn-text');

  btnText.textContent  = 'Creating account…';
  submitBtn.disabled   = true;

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1600);
});


document.getElementById('google-signup').addEventListener('click', () => {
  console.log('[Auth] Google OAuth flow would start here.');
});

document.getElementById('apple-signup').addEventListener('click', () => {
  console.log('[Auth] Apple OAuth flow would start here.');
});


const rtlToggle   = document.getElementById('rtl-toggle');

function initRTL() {
  if (!rtlToggle) return;
  
  const saved = localStorage.getItem('rtl') === 'true';
  if (saved) {
    html.setAttribute('dir', 'rtl');
    rtlToggle.textContent = 'RTL';
  }

  rtlToggle.addEventListener('click', () => {
    const isRTL = html.getAttribute('dir') === 'rtl';
    const nextRTL = !isRTL;
    html.setAttribute('dir', nextRTL ? 'rtl' : 'ltr');
    localStorage.setItem('rtl', nextRTL);
    rtlToggle.textContent = nextRTL ? 'RTL' : 'LTR';
  });
}

initTheme();
initRTL();
