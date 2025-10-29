// temples.js

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle with animation
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.classList.toggle("open"); // triggers the "X" animation
});
