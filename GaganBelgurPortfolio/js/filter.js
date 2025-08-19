//filter.js
// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".filter-btns .btn");
//     const cards = document.querySelectorAll("#projectGrid .project");

//     buttons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             buttons.forEach(b => b.classList.remove("active"));
//             btn.classList.add("active");

//             const filter = btn.dataset.filter.toLowerCase();
//             cards.forEach(card => {
//                 const tags = (card.dataset.tags || "").toLowerCase();
//                 const match = filter === "all" || tags.includes(filter);
//                 card.style.display = match ? "" : "none";
//             });
//         });
//     });
// });

function initProjectFilter() {
  const buttons = document.querySelectorAll(".filter-btns .btn");
  const cards = document.querySelectorAll("#projectGrid .project");

  if (!buttons.length || !cards.length) {
    console.warn("⚠️ Project filter not initialized: No buttons or cards found.");
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
