document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btns .btn");
    const cards = document.querySelectorAll("#projectGrid .project");

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
});