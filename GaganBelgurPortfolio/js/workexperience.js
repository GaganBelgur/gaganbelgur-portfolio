// workexperience.js

// Map section IDs to their respective HTML files
const sections = {
  philips: "sections/workexperiences/philips.html",
  navriti: "sections/workexperiences/navriti.html",
  maveric: "sections/workexperiences/maveric.html",
  globaledge: "sections/workexperiences/globaledge.html"
};

// Loop through each company and inject its content
Object.entries(sections).forEach(([id, file]) => {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.text();
    })
    .then(html => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = html;
      } else {
        console.warn(`Container with id="${id}" not found`);
      }
    })
    .catch(err => console.error(err));
});
