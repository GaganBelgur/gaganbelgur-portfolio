document.addEventListener("sectionLoaded", (e) => {
  if (e.detail === "education" || e.detail == "work-experience") {
    const sections = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }
});