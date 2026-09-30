const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const topBtn = document.querySelector('.top-btn');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 600);
});
topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
