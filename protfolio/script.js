// Simple fade animation
const elements = document.querySelectorAll('.section, .hero-content');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
elements.forEach(el => observer.observe(el));
