document.addEventListener("sectionLoaded", (e) => {
  if (e.detail === "languages"|| e.detail =="skills") {
    const sections = document.querySelectorAll(".horizontal-rating-block");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const ratingSpans = entry.target.querySelectorAll(".rating-block span.filled");
          ratingSpans.forEach((span, i) =>
            setTimeout(() => span.classList.add("animate"), i * 200)
          );

          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }
});
