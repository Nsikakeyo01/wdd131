// Hamburger menu toggle
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuButton.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

// Footer dynamic year and last modified date
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
