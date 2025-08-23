document.addEventListener("sectionLoaded", (e) => {
  if (e.detail === "achievements" || e.detail === "responsibilities" || e.detail === "strengths") {
    const sections = document.querySelectorAll(".achievement-item");
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