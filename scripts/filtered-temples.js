const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1-main.jpg"
  },
  {
    templeName: "St. George Temple",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st-george-utah-temple/st-george-utah-temple-1-main.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-1-main.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 8800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1-main.jpg"
  },
  {
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88595,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-1-main.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-1-main.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-1-main.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-1-main.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-1-main.jpg"
  }
];

const displayTemples = (filteredTemples) => {
  const container = document.getElementById("templeCards");
  container.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
};

displayTemples(temples);

// Filters
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => {
  const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  displayTemples(oldTemples);
});
document.getElementById("new").addEventListener("click", () => {
  const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
  displayTemples(newTemples);
});
document.getElementById("large").addEventListener("click", () => {
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
});
document.getElementById("small").addEventListener("click", () => {
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
});

// Footer Date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
