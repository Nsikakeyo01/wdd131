// ===== Temple Data =====
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April 6",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919, November 27",
    area: 42375,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-1.jpg"
  },
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002, June 27",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-1.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-1.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-1.jpg"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August 7",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-1.jpg"
  },
  {
    templeName: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "1986, January 10",
    area: 9600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-1.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October 27",
    area: 52959,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-1.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast Temple",
    location: "Abidjan, Côte d'Ivoire",
    dedicated: "2023, November 19",
    area: 28600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1.jpg"
  }
];

// ===== Function to Display Temples =====
function displayTemples(filteredTemples) {
  const container = document.getElementById("templeContainer");
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <div class="temple-info">
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===== Filtering Functions =====
document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
  displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
});

// ===== Footer Year & Last Modified =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Display All on Load
displayTemples(temples);
