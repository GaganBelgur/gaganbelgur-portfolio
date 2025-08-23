document.addEventListener('sectionLoaded', (e) => {
  if (e.detail === 'work-experience') {
    const icons = document.querySelectorAll('.fab, .fas');
    icons.forEach(icon => {
      // Force re-render if needed
      icon.classList.add('fa-fw'); // optional fixed width
    });

    document.querySelectorAll('.expand-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.closest('.experience-card').querySelector('.expand-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        btn.querySelector('i').classList.toggle('fa-chevron-down');
        btn.querySelector('i').classList.toggle('fa-chevron-up');
      });
    });
  }
});
