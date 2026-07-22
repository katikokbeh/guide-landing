// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Checklist score counter
const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
const scoreEl = document.getElementById('score');

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        cb.closest('.check-item').classList.toggle('checked', cb.checked);
        const count = [...checkboxes].filter(c => c.checked).length;
        scoreEl.textContent = count;

        // Highlight result cards
        document.querySelectorAll('.result-card').forEach(c => c.style.opacity = '0.35');
        if (count <= 4) document.querySelector('.result-bad').style.opacity = '1';
        else if (count <= 7) document.querySelector('.result-mid').style.opacity = '1';
        else document.querySelector('.result-good').style.opacity = '1';
    });
});
