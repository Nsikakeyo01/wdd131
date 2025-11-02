// Footer year and last modified
const yearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");
yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Wind Chill Calculation
const temp = 30; // °C
const windSpeed = 8; // km/h
const chillSpan = document.querySelector("#chill");

function calculateWindChill(t, s) {
  // Wind chill formula for Celsius
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

if (temp <= 10 && windSpeed > 4.8) {
  chillSpan.textContent = `${calculateWindChill(temp, windSpeed)}°C`;
} else {
  chillSpan.textContent = "N/A";
}
