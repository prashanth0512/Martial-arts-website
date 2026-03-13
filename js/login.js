
const themeBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;


function setTheme(themeName) {
    if (themeName === 'light') {
        rootElement.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('gelud_theme', 'light');
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('gelud_theme', 'dark');
    }
}


const savedTheme = localStorage.getItem('gelud_theme') || 'dark';
setTheme(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});


function switchTab(tabId) {
    
    document.getElementById('btn-login').classList.remove('active');
    document.getElementById('btn-signup').classList.remove('active');
    document.getElementById(`btn-${tabId}`).classList.add('active');

    
    document.getElementById('form-login').classList.remove('active');
    document.getElementById('form-signup').classList.remove('active');
    document.getElementById(`form-${tabId}`).classList.add('active');
}


document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#signup") {
        switchTab('signup');
    }
});
