// temples.js
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  const menuButton = document.getElementById("menu-button");
  const navMenu = document.getElementById("nav-menu");

  // Footer info
  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  // Mobile menu toggle
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
