

'use strict';


const html        = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');
const pwInput     = document.getElementById('login-password');
const pwEye       = document.getElementById('pw-eye');
const pwEyeIcon   = document.getElementById('pw-eye-icon');
const loginForm   = document.getElementById('login-form');
const emailInput  = document.getElementById('login-email');
const emailError  = document.getElementById('email-error');
const pwError     = document.getElementById('pw-error');


function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('ss_theme', theme);

  if (theme === 'light') {
    themeIcon.className  = 'fa-solid fa-moon';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    themeIcon.className  = 'fa-solid fa-sun';
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
  pwInput.type           = isHidden ? 'text' : 'password';
  pwEyeIcon.className    = isHidden ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  pwEye.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
});



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


 
function showError(input, errorEl, message) {
  errorEl.textContent = message;
  input.style.borderColor = 'var(--error-color)';
  input.style.boxShadow   = '0 0 0 3px rgba(255, 77, 109, 0.2)';
}

function clearError(input, errorEl) {
  errorEl.textContent = '';
  input.style.borderColor = '';
  input.style.boxShadow   = '';
}

function validateLogin() {
  let valid = true;

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
  } else if (pwInput.value.length < 6) {
    showError(pwInput, pwError, 'Password must be at least 6 characters.');
    valid = false;
  } else {
    clearError(pwInput, pwError);
  }

  return valid;
}

emailInput.addEventListener('blur', () => {
  if (emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email.');
  } else if (emailInput.value.trim()) {
    clearError(emailInput, emailError);
  }
});

emailInput.addEventListener('input', () => {
  if (emailError.textContent) clearError(emailInput, emailError);
});

pwInput.addEventListener('input', () => {
  if (pwError.textContent) clearError(pwInput, pwError);
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateLogin()) return;

  const submitBtn = document.getElementById('login-submit');
  const btnText   = submitBtn.querySelector('.btn-text');

  btnText.textContent = 'Logging in…';
  submitBtn.disabled  = true;

  setTimeout(() => {
    window.location.href = '../index.html';
  }, 1400);
});


initTheme();
