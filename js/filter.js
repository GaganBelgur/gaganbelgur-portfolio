//filter.js
function initProjectFilter() {
  const buttons = document.querySelectorAll(".filter-btns .btn");
  const cards = document.querySelectorAll("#projectGrid .project");

  if (!buttons.length || !cards.length) {
    return;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active state instead of single select
      btn.classList.toggle("active");

      // Get all active filters
      const activeFilters = Array.from(buttons)
        .filter(b => b.classList.contains("active"))
        .map(b => b.dataset.filter.toLowerCase());

      // Show/hide cards
      cards.forEach(card => {
        const tags = (card.dataset.tags || "").toLowerCase();
        const match = activeFilters.includes("all") || activeFilters.some(f => tags.includes(f));
        card.style.display = match ? "" : "none";
      });
    });
  });

  // ✅ Initialize default state (All active)
  const defaultBtn = document.querySelector('.filter-btns .btn[data-filter="all"]');
  if (defaultBtn) defaultBtn.classList.add("active");
  cards.forEach(card => (card.style.display = ""));
}
