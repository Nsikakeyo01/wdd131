// getdates.js
// Populate current year and last modified date in the footer.
// Use DOMContentLoaded so the DOM elements are available.
document.addEventListener('DOMContentLoaded', function () {
  // current year -> span with id="currentyear"
  var yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // last modified -> place into element with id="lastModifiedValue"
  var lastModSpan = document.getElementById('lastModifiedValue');
  if (lastModSpan) {
    lastModSpan.textContent = document.lastModified || new Date().toLocaleString();
  }
});
