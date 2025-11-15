// Array of temple objects with requested image names
const temples = [
    { name: "Rome Italy Temple", location: "Rome, Italy", dedicated: 2019, area: 70000, img: "images/rome.jpg" },
    { name: "Mesa Arizona Temple", location: "Mesa, Arizona", dedicated: 1927, area: 90000, img: "images/mesa.jpeg" },
    { name: "Aba Nigeria Temple", location: "Aba, Nigeria", dedicated: 2005, area: 10000, img: "images/aba.jpg" },
    { name: "Cardston Alberta Temple", location: "Cardston, Alberta, Canada", dedicated: 1923, area: 17000, img: "images/cardston.jpg" },
    { name: "Accra Ghana Temple", location: "Accra, Ghana", dedicated: 2004, area: 10000, img: "images/accra.jpg" },
    { name: "Laie Hawaii Temple", location: "Laie, Hawaii", dedicated: 1919, area: 38000, img: "images/laie.jpg" },
    { name: "Manti Utah Temple", location: "Manti, Utah", dedicated: 1888, area: 88000, img: "images/manti.jpg" },
    { name: "Logan Utah Temple", location: "Logan, Utah", dedicated: 1884, area: 88000, img: "images/logan.jpg" },
    { name: "St. George Utah Temple", location: "St. George, Utah", dedicated: 1877, area: 11000, img: "images/st-george.jpeg" },
    { name: "Salt Lake Temple", location: "Salt Lake City, Utah", dedicated: 1893, area: 253000, img: "images/salt-lake.jpeg" }
];

// Function to render temple cards
function renderTemples(filter = "home") {
    const container = document.getElementById("temple-grid");
    container.innerHTML = "";

    temples.forEach(temple => {
        let show = false;
        if(filter === "home") show = true;
        else if(filter === "old" && temple.dedicated < 1900) show = true;
        else if(filter === "new" && temple.dedicated > 2000) show = true;
        else if(filter === "large" && temple.area > 90000) show = true;
        else if(filter === "small" && temple.area < 10000) show = true;

        if(show) {
            const card = document.createElement("div");
            card.classList.add("temple-card");
            card.innerHTML = `
                <img src="${temple.img}" alt="${temple.name}" loading="lazy">
                <h2>${temple.name}</h2>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            `;
            container.appendChild(card);
        }
    });
}

// Initial render
renderTemples();

// Navigation filter event listeners
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        renderTemples(link.textContent.toLowerCase());
    });
});

// Footer copyright and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
