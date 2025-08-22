document.addEventListener("sectionLoaded", (e) => {
    if (e.detail === "stats") {
        console.log("✅ stats section loaded");

        const statCards = document.querySelectorAll(".stat-card h3"); // <- select all numbers
        console.log("🔍 Found Stats blocks:", statCards.length);

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("👀 Stats section visible");

                    // Animate each number
                    statCards.forEach(stat => {
                        const target = +stat.getAttribute("data-target") || parseInt(stat.textContent);
                        let count = 0;

                        const updateCount = () => {
                            count += 1; // increment by 1
                            if (count > target) count = target;
                            stat.textContent = count;
                            if (count < target) {
                                setTimeout(updateCount, 50); // 50ms delay per increment
                            }
                        };
                        updateCount();
                        requestAnimationFrame(updateCount);
                    });

                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        // Observe the stats section container
        const statsSection = document.querySelector("#stats");
        if (statsSection) observer.observe(statsSection);
    }
});
