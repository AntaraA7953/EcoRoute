document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  const map = L.map('map').setView([51.505, -0.09], 13); // Default to London

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker
  L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('Default Location: London')
    .openPopup();
});

const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  const root = document.documentElement;

  if (document.body.classList.contains("dark")) {
    // Light mode
    document.body.classList.remove("dark");
    root.style.setProperty('--bg-color', '#e0f7e9');
    root.style.setProperty('--text-color', '#2e7d32');
    root.style.setProperty('--card-bg', '#ffffff');
    root.style.setProperty('--map-bg', '#c8e6c9');
    root.style.setProperty('--input-bg', '#ffffff');
    root.style.setProperty('--progress-bg', '#eee');
    root.style.setProperty('--progress-fill', '#4caf50');
  } else {
    // Dark mode
    document.body.classList.add("dark");
    root.style.setProperty('--bg-color', '#111');
    root.style.setProperty('--text-color', '#c8facc');
    root.style.setProperty('--card-bg', '#1a1a1a');
    root.style.setProperty('--map-bg', '#223322');
    root.style.setProperty('--input-bg', '#2a2a2a');
    root.style.setProperty('--progress-bg', '#333');
    root.style.setProperty('--progress-fill', '#5cf066');
  }
});
