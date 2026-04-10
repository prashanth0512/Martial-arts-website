
document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initContactAnimations();
});


function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successPanel = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

    let isValid = true;

    const firstName = form.querySelector('#first-name');
    if (firstName && firstName.value.trim().length < 2) {
      showError(firstName, 'Please enter your first name.');
      isValid = false;
    }

    const lastName = form.querySelector('#last-name');
    if (lastName && lastName.value.trim().length < 2) {
      showError(lastName, 'Please enter your last name.');
      isValid = false;
    }

    const email = form.querySelector('#email');
    if (email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
      }
    }

    
    const message = form.querySelector('#message');
    if (message && message.value.trim().length < 10) {
      showError(message, 'Please enter a message (at least 10 characters).');
      isValid = false;
    }

    if (!isValid) return;

    
    const submitBtn = form.querySelector('.contact-submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      form.style.display = 'none';
      if (successPanel) {
        successPanel.classList.add('show');
        successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1500);
  });

  
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => {
      const group = field.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        if (field.value.trim().length > 0) {
          group.classList.remove('has-error');
          field.classList.remove('error');
        }
      }
    });
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group && group.classList.contains('has-error') && field.value.trim().length > 0) {
        group.classList.remove('has-error');
        field.classList.remove('error');
      }
    });
  });
}

function showError(field, message) {
  field.classList.add('error');
  const group = field.closest('.form-group');
  if (!group) return;
  group.classList.add('has-error');
  let errMsg = group.querySelector('.error-msg');
  if (!errMsg) {
    errMsg = document.createElement('span');
    errMsg.className = 'error-msg';
    group.appendChild(errMsg);
  }
  errMsg.textContent = message;
  field.focus();
}


function initContactAnimations() {
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.contact-strip-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    observer.observe(el);
  });

  
  const formBox = document.querySelector('.contact-form-box');
  if (formBox) {
    formBox.style.opacity = '0';
    formBox.style.transform = 'translateY(30px)';
    formBox.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const formObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          formBox.style.opacity = '1';
          formBox.style.transform = 'translateY(0)';
          formObserver.unobserve(formBox);
        }
      });
    }, { threshold: 0.1 });
    formObserver.observe(formBox);
  }

  
  const mapWrapper = document.querySelector('.map-wrapper');
  if (mapWrapper) {
    mapWrapper.style.opacity = '0';
    mapWrapper.style.transform = 'scale(0.97)';
    mapWrapper.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const mapObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mapWrapper.style.opacity = '1';
          mapWrapper.style.transform = 'scale(1)';
          mapObserver.unobserve(mapWrapper);
        }
      });
    }, { threshold: 0.1 });
    mapObserver.observe(mapWrapper);
  }
}
