// Product data
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Populate featured products on index.html
const productList = document.getElementById("product-list");
if(productList) {
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Average Rating: ${product.averagerating} ★</p>
        `;
        productList.appendChild(div);
    });
}

// Contact form DOM interaction
const contactForm = document.getElementById("contactForm");
if(contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value || "Guest";
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const response = document.getElementById("contactResponse");

        if(email && message) {
            response.textContent = `Thank you, ${name}. Your message has been sent successfully!`;
        } else {
            response.textContent = "Please fill in all required fields.";
        }
    });
}
