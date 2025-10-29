// temples.js — Nsikak Eyo

// Dynamic footer info
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// Responsive Hamburger Menu
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    // Toggle symbol
    menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
  });
}
