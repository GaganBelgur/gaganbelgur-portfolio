// loader.js
document.addEventListener("DOMContentLoaded", () => {
  // Load the main workexperience.html
  fetch("sections/workexperience.html")   // adjust path if needed
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load workexperience.html`);
      return res.text();
    })
    .then(html => {
      document.getElementById("work-experience").innerHTML = html;

      // After injecting workexperience.html, dynamically load workexperience.js
      const script = document.createElement("script");
      script.src = "js/workexperience.js";  // adjust path if needed
      document.body.appendChild(script);
    })
    .catch(err => console.error(err));
});
