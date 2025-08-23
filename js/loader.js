document.addEventListener("DOMContentLoaded", () => {
  const lazySections = document.querySelectorAll(".lazy-section");

  lazySections.forEach(section => {
    const src = section.getAttribute("data-src");

    // Load navbar immediately
    if (section.id === "navbar" && src) {
      fetch(src)
        .then(res => res.text())
        .then(data => {
          section.innerHTML = data;
          section.classList.add("fade-in"); // fade effect
        })
        .catch(err => {
          section.innerHTML = `<p class="text-danger">Failed to load navbar</p>`;
        });
      return;
    }

    // Lazy load for other sections
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fetch(src)
            .then(res => res.text())
            .then(data => {
              section.innerHTML = data;
              section.classList.add("fade-in"); // fade effect
              obs.unobserve(section);
              
              // 🔥 tell the world that this section is ready
              const event = new CustomEvent("sectionLoaded", { detail: section.id });
              document.dispatchEvent(event);
              
              // ✅ Initialize filter only after projects section is loaded
              if (section.id === "project") {
                initProjectFilter();
              }
            })
            .catch(err => {
              section.innerHTML = `<p class="text-danger">Failed to load section</p>`;
            });
        }
      });
    }, { threshold: 0.2 });

    observer.observe(section);
  });
});

// ✅ Move filter logic here so loader.js can call it
function initProjectFilter() {
  const buttons = document.querySelectorAll(".filter-btns .btn");
  const cards = document.querySelectorAll("#projectGrid .project");

  if (!buttons.length || !cards.length) {
    return;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter.toLowerCase();
      cards.forEach(card => {
        const tags = (card.dataset.tags || "").toLowerCase();
        const match = filter === "all" || tags.includes(filter);
        card.style.display = match ? "" : "none";
      });
    });
  });

  // ✅ Show all projects on first load
  const defaultBtn = document.querySelector('.filter-btns .btn[data-filter="all"]');
  if (defaultBtn) defaultBtn.click();
}
