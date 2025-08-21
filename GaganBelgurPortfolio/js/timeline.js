document.addEventListener("sectionLoaded", (e) => {
  if (e.detail === "education" || e.detail == "work-experience") {
    console.log("✅ education section loaded");

    const sections = document.querySelectorAll(".timeline-item");
    console.log("🔍 Found education blocks:", sections.length);

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("👀 Section visible:", entry.target);

          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }
});