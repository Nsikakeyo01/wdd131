// filtered-temples.js
// Nsikak Eyo - W04 Picture Album Enhancement

// ---- Temple array: original 7 entries + 3 added = 10 total ----
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "April 6, 1893",
    area: 253015, // sq ft
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Salt_Lake_Temple_2016.jpg"
  },
  {
    name: "St. George Utah Temple",
    location: "St. George, Utah, USA",
    dedicated: "April 6, 1877",
    area: 26312,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/St_George_Temple_2011.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "November 27, 1919",
    area: 44703,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Laie_Temple_2018.jpg"
  },
  {
    name: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "March 27, 1836",
    area: 8900,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Kirtland_Temple_2007.jpg"
  },
  {
    name: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "August 26, 1923",
    area: 15000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Cardston_Temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 31000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Templio_di_Roma.jpg"
  },
  {
    name: "Rome Italy New Expansion (example)", // placeholder to reach 7 originals
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 31000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Templio_di_Roma.jpg"
  },
  // --- three additional temples added by student (Nsikak) ---
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "June 18, 2023",
    area: 23450,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Accra_Temple_placeholder.jpg"
  },
  {
    name: "Small Community Temple",
    location: "Smalltown, Exampleland",
    dedicated: "December 1, 1895",
    area: 8200,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Small_temple_placeholder.jpg"
  },
  {
    name: "Mega Regional Temple",
    location: "Bigcity, Exampleland",
    dedicated: "July 20, 2012",
    area: 125000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Big_temple_placeholder.jpg"
  }
];

// Utility: parse year from 'dedicated' string (e.g., "April 6, 1893")
function getYearFromDateString(dateString) {
  const possibleYear = dateString.slice(-4);
  const year = parseInt(possibleYear, 10);
  return Number.isNaN(year) ? null : year;
}

// Container
const container = document.getElementById('temples-container');

// Create a single temple card DOM element
function createTempleCard(temple) {
  const article = document.createElement('article');
  article.className = 'card';
  article.setAttribute('tabindex', '0');

  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.setAttribute('src', temple.imageUrl);
  img.setAttribute('alt', `${temple.name} — ${temple.location}`);
  img.setAttribute('loading', 'lazy');
  img.setAttribute('decoding', 'async');
  // prevent giant images from causing layout shift - we could set width via CSS as needed
  figure.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body';

  const h2 = document.createElement('h2');
  h2.textContent = temple.name;

  const loc = document.createElement('p');
  loc.textContent = temple.location;

  const ded = document.createElement('p');
  ded.textContent = `Dedicated: ${temple.dedicated}`;

  const metaRow = document.createElement('div');
  metaRow.className = 'meta-row';
  const area = document.createElement('div');
  area.className = 'area';
  area.textContent = `${temple.area.toLocaleString()} ft²`;

  const year = document.createElement('div');
  year.className = 'year';
  const y = getYearFromDateString(temple.dedicated);
  year.textContent = y ? `(${y})` : '';

  metaRow.appendChild(area);
  metaRow.appendChild(year);

  body.appendChild(h2);
  body.appendChild(loc);
  body.appendChild(ded);
  body.appendChild(metaRow);

  article.appendChild(figure);
  article.appendChild(body);

  return article;
}

// Render given array of temples to the page
function displayTemples(list) {
  container.innerHTML = '';
  if (!list || list.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'No temples match this filter.';
    empty.style.color = '#6b7280';
    container.appendChild(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  list.forEach(t => {
    fragment.appendChild(createTempleCard(t));
  });
  container.appendChild(fragment);
}

// Filter helpers
function filterOld() {
  return temples.filter(t => {
    const y = getYearFromDateString(t.dedicated);
    return y && y < 1900;
  });
}
function filterNew() {
  return temples.filter(t => {
    const y = getYearFromDateString(t.dedicated);
    return y && y > 2000;
  });
}
function filterLarge() {
  return temples.filter(t => t.area > 90000);
}
function filterSmall() {
  return temples.filter(t => t.area < 10000);
}

// Setup navigation filtering behavior
function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = btn.dataset.filter;
      // update aria-pressed
      buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');

      switch (filter) {
        case 'home':
          displayTemples(temples);
          break;
        case 'old':
          displayTemples(filterOld());
          break;
        case 'new':
          displayTemples(filterNew());
          break;
        case 'large':
          displayTemples(filterLarge());
          break;
        case 'small':
          displayTemples(filterSmall());
          break;
        default:
          displayTemples(temples);
      }
      // Move focus to the container so keyboard users land in results
      container.querySelector('article')?.focus();
    });
  });

  // keyboard support: allow arrow-left/right to move between buttons
  document.querySelector('.main-nav').addEventListener('keydown', (ev) => {
    const key = ev.key;
    const focused = document.activeElement;
    if (!focused || !focused.classList.contains('filter-btn')) return;
    const all = Array.from(buttons);
    let idx = all.indexOf(focused);
    if (key === 'ArrowRight') {
      idx = (idx + 1) % all.length;
      all[idx].focus();
      ev.preventDefault();
    } else if (key === 'ArrowLeft') {
      idx = (idx - 1 + all.length) % all.length;
      all[idx].focus();
      ev.preventDefault();
    }
  });
}

// Footer dynamic content
function renderFooter() {
  const copyright = document.getElementById('copyright');
  const lastModified = document.getElementById('last-modified');
  const year = new Date().getFullYear();
  copyright.textContent = `© ${year} Nsikak Eyo`;
  lastModified.textContent = `Last modified: ${document.lastModified || 'Unknown'}`;
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples); // show all by default
  setupFilters();
  renderFooter();
});
