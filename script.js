const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});
const menuButton = document.getElementById('menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu-list');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

    
