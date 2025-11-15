const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "April 6, 1893",
        area: 253015,
        imageUrl: "images/salt-lake.jpeg"
    },
    {
        name: "St. George Temple",
        location: "St. George, Utah",
        dedicated: "April 6, 1877",
        area: 142000,
        imageUrl: "images/st-george.jpeg"
    },
    {
        name: "Logan Utah Temple",
        location: "Logan, Utah",
        dedicated: "May 17, 1884",
        area: 119619,
        imageUrl: "images/logan.jpg"
    },
    {
        name: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated: "May 21, 1888",
        area: 100000,
        imageUrl: "images/manti.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "November 27, 1919",
        area: 42000,
        imageUrl: "images/laie.jpg"
    },
    {
        name: "Cardston Alberta Temple",
        location: "Cardston, Alberta, Canada",
        dedicated: "August 26, 1923",
        area: 88000,
        imageUrl: "images/cardston.jpg"
    },
    {
        name: "Mesa Arizona Temple",
        location: "Mesa, Arizona",
        dedicated: "October 23, 1927",
        area: 75000,
        imageUrl: "images/mesa.jpeg"
    },

    // ⭐ YOUR THREE ADDED TEMPLES ⭐
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "January 11, 2004",
        area: 174500,
        imageUrl: "images/accra.jpg"
    },
    {
        name: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "August 7, 2005",
        area: 28000,
        imageUrl: "images/aba.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "March 10, 2019",
        area: 40000,
        imageUrl: "images/rome.jpg"
    }
];

function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${temple.name}</h3>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        container.appendChild(card);
    });
}

// Filters
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () =>
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);
document.getElementById("new").addEventListener("click", () =>
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);
document.getElementById("large").addEventListener("click", () =>
    displayTemples(temples.filter(t => t.area > 90000))
);
document.getElementById("small").addEventListener("click", () =>
    displayTemples(temples.filter(t => t.area < 10000))
);

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Load all temples on start
displayTemples(temples);
