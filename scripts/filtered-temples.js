/* scripts/filtered-temples.js
   Nsikak Eyo — W04 Picture Album Enhancement
   10 temples (7 original + 3 added)
*/

const temples = [
  { 
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "April 6, 1893",
    area: 253015,
    imageUrl: "https://churchofjesuschrist.org/imgs/57d247ad14f034889fe5bd13a35464af02f7d7f1/full/380%2C%20199/0/default"
  },
  { 
    templeName: "St. George Temple",
    location: "St. George, Utah, USA",
    dedicated: "April 6, 1877",
    area: 26312,
    imageUrl: "https://churchofjesuschrist.org/imgs/4c4b47e225790fbcaa4a16e0fcb3c4124ccddb59/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "November 27, 1919",
    area: 44703,
    imageUrl: "https://churchofjesuschrist.org/imgs/fc962f8acdd0ef18d54cec8034cc3cf580bf0db2/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "March 27, 1836",
    area: 8900,
    imageUrl: "https://churchofjesuschrist.org/imgs/af272e4e0422610ec663b822a854c61419ae7087/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "August 26, 1923",
    area: 88595,
    imageUrl: "https://churchofjesuschrist.org/imgs/0c8b7f092d1a274fa31709a19d27e76d7fbbe5d2/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 41010,
    imageUrl: "https://churchofjesuschrist.org/imgs/29cefa06979e11ed9dfdc6a43c4442b443c1c260/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "January 11, 2004",
    area: 17500,
    imageUrl: "https://churchofjesuschrist.org/imgs/1a177a58537c1df452f9d807959ddcf94bd39e8a/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, USA",
    dedicated: "June 7, 2015",
    area: 96630,
    imageUrl: "https://churchofjesuschrist.org/imgs/68a8d2fb79dfa8fb76e32b6d1d8ac82f32f031b6/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, USA",
    dedicated: "March 20, 2016",
    area: 85084,
    imageUrl: "https://churchofjesuschrist.org/imgs/8894d64b0e10b71fb97dc5a165e0ba2e807f0f7d/full/380%2C%20199/0/default"
  },
  { 
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "August 7, 2005",
    area: 11500,
    imageUrl: "https://churchofjesuschrist.org/imgs/56bbf5ad86fbd52bc6eddd557d8e7791ba0ccfd7/full/380%2C%20199/0/default"
  }
];

// helpers
function yearFromString(s){
  const m = s.match(/(\d{4})/);
  return m ? Number(m[1]) : null;
}

const container = document.getElementById('templeContainer');

function createCard(t){
  const card = document.createElement('article');
  card.className = 'temple-card';

  const title = document.createElement('h2');
  title.textContent = t.templeName;

  const metaDiv = document.createElement('div');
  metaDiv.className = 'temple-meta';

  const locLabel = document.createElement('span');
  locLabel.className = 'label';
  locLabel.textContent = 'Location:';
  const locVal = document.createElement('span');
  locVal.className = 'value';
  locVal.textContent = ` ${t.location}`;

  const dedLabel = document.createElement('span');
  dedLabel.className = 'label';
  dedLabel.textContent = 'Dedicated:';
  const dedVal = document.createElement('span');
  dedVal.className = 'value';
  dedVal.textContent = ` ${t.dedicated}`;

  const sizeLabel = document.createElement('span');
  sizeLabel.className = 'label';
  sizeLabel.textContent = 'Size:';
  const sizeVal = document.createElement('span');
  sizeVal.className = 'value';
  sizeVal.textContent = ` ${t.area.toLocaleString()} sq ft`;

  const line1 = document.createElement('div'); line1.appendChild(locLabel); line1.appendChild(locVal);
  const line2 = document.createElement('div'); line2.appendChild(dedLabel); line2.appendChild(dedVal);
  const line3 = document.createElement('div'); line3.appendChild(sizeLabel); line3.appendChild(sizeVal);

  metaDiv.appendChild(line1); 
  metaDiv.appendChild(line2); 
  metaDiv.appendChild(line3);

  const img = document.createElement('img');
  img.className = 'temple-img';
  img.src = t.imageUrl;
  img.alt = `${t.templeName} — ${t.location}`;
  img.loading = 'lazy';
  img.decoding = 'async';

  card.appendChild(title);
  card.appendChild(metaDiv);
  card.appendChild(img);

  return card;
}

function render(list){
  container.innerHTML = '';
  if(!list || list.length === 0){
    const p = document.createElement('p');
    p.textContent = 'No temples match this filter.';
    p.style.color = '#6b7280';
    container.appendChild(p);
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(t => frag.appendChild(createCard(t)));
  container.appendChild(frag);
}

// filter handlers
function showAll(){ render(temples); }
function showOld(){ render(temples.filter(t => yearFromString(t.dedicated) < 1900)); }
function showNew(){ render(temples.filter(t => yearFromString(t.dedicated) > 2000)); }
function showLarge(){ render(temples.filter(t => t.area > 90000)); }
function showSmall(){ render(temples.filter(t => t.area < 10000)); }

// hookup
document.addEventListener('DOMContentLoaded', () => {
  showAll();

  document.getElementById('home').addEventListener('click', (e)=>{ e.preventDefault(); showAll(); });
  document.getElementById('old').addEventListener('click', (e)=>{ e.preventDefault(); showOld(); });
  document.getElementById('new').addEventListener('click', (e)=>{ e.preventDefault(); showNew(); });
  document.getElementById('large').addEventListener('click', (e)=>{ e.preventDefault(); showLarge(); });
  document.getElementById('small').addEventListener('click', (e)=>{ e.preventDefault(); showSmall(); });

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified || 'Unknown';
});
