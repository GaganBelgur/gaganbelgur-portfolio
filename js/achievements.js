document.addEventListener("sectionLoaded", (e) => {
  if (e.detail === "achievements" || e.detail === "responsibilities" || e.detail === "strengths") {
    console.log("✅ achievements section loaded");

    const sections = document.querySelectorAll(".achievement-item");
    console.log("🔍 Found achievements blocks:", sections.length);

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