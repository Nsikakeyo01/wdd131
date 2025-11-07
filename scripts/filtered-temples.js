/* scripts/filtered-temples.js
   Nsikak Eyo — W04 Picture Album Enhancement
   10 temples (7 original + 3 added), images from picsum.photos seeds for reliable loading.
*/

const temples = [
  { templeName: "Salt Lake Temple", location: "Salt Lake City, Utah, USA", dedicated: "April 6, 1893", area: 253015, imageUrl: "https://picsum.photos/seed/saltlake/800/500" },
  { templeName: "St. George Temple", location: "St. George, Utah, USA", dedicated: "April 6, 1877", area: 26312, imageUrl: "https://picsum.photos/seed/stgeorge/800/500" },
  { templeName: "Laie Hawaii Temple", location: "Laie, Hawaii, USA", dedicated: "November 27, 1919", area: 44703, imageUrl: "https://picsum.photos/seed/laie/800/500" },
  { templeName: "Kirtland Temple", location: "Kirtland, Ohio, USA", dedicated: "March 27, 1836", area: 8900, imageUrl: "https://picsum.photos/seed/kirtland/800/500" },
  { templeName: "Cardston Alberta Temple", location: "Cardston, Alberta, Canada", dedicated: "August 26, 1923", area: 88595, imageUrl: "https://picsum.photos/seed/cardston/800/500" },
  { templeName: "Rome Italy Temple", location: "Rome, Italy", dedicated: "March 10, 2019", area: 41010, imageUrl: "https://picsum.photos/seed/rome/800/500" },
  { templeName: "Accra Ghana Temple", location: "Accra, Ghana", dedicated: "January 11, 2004", area: 17500, imageUrl: "https://picsum.photos/seed/accra/800/500" },
  { templeName: "Payson Utah Temple", location: "Payson, Utah, USA", dedicated: "June 7, 2015", area: 96630, imageUrl: "https://picsum.photos/seed/payson/800/500" },
  { templeName: "Provo City Center Temple", location: "Provo, Utah, USA", dedicated: "March 20, 2016", area: 85084, imageUrl: "https://picsum.photos/seed/provo/800/500" },
  { templeName: "Aba Nigeria Temple", location: "Aba, Nigeria", dedicated: "August 7, 2005", area: 11500, imageUrl: "https://picsum.photos/seed/aba/800/500" }
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

  // each label-value pair in block lines (to match sample)
  const line1 = document.createElement('div'); line1.appendChild(locLabel); line1.appendChild(locVal);
  const line2 = document.createElement('div'); line2.appendChild(dedLabel); line2.appendChild(dedVal);
  const line3 = document.createElement('div'); line3.appendChild(sizeLabel); line3.appendChild(sizeVal);

  metaDiv.appendChild(line1); metaDiv.appendChild(line2); metaDiv.appendChild(line3);

  const img = document.createElement('img');
  img.className = 'temple-img';
  img.src = t.imageUrl;
  img.alt = `${t.templeName} — ${t.location}`;
  img.loading = 'lazy';
  img.decoding = 'async';

  // assemble: title, meta (labels), image (so labels appear above image like sample)
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
function showOld(){ render(temples.filter(t => { const y = yearFromString(t.dedicated); return y && y < 1900; })); }
function showNew(){ render(temples.filter(t => { const y = yearFromString(t.dedicated); return y && y > 2000; })); }
function showLarge(){ render(temples.filter(t => t.area > 90000)); }
function showSmall(){ render(temples.filter(t => t.area < 10000)); }

// hookup
document.addEventListener('DOMContentLoaded', () => {
  // initial render
  showAll();

  document.getElementById('home').addEventListener('click', (e)=>{ e.preventDefault(); showAll(); });
  document.getElementById('old').addEventListener('click', (e)=>{ e.preventDefault(); showOld(); });
  document.getElementById('new').addEventListener('click', (e)=>{ e.preventDefault(); showNew(); });
  document.getElementById('large').addEventListener('click', (e)=>{ e.preventDefault(); showLarge(); });
  document.getElementById('small').addEventListener('click', (e)=>{ e.preventDefault(); showSmall(); });

  // footer
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified || 'Unknown';
});
