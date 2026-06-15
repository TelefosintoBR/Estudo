// Simple carousel: autoplay + indicators
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.destaque-slide');
  const dots = document.querySelectorAll('.indicador-rolagem-destaque .indicador');
  let current = 0;
  let interval = null;

  function showSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('ativo', i === idx));
    current = idx;
  }

  function nextSlide() { showSlide((current + 1) % slides.length); }

  function startAutoplay(ms = 4500) {
    stopAutoplay();
    interval = setInterval(nextSlide, ms);
  }
  function stopAutoplay() { if (interval) clearInterval(interval); interval = null; }

  dots.forEach(dot => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.index)));
  });

  const destaque = document.querySelector('.destaque');
  if (destaque) {
    destaque.addEventListener('mouseenter', stopAutoplay);
    destaque.addEventListener('mouseleave', () => startAutoplay(4500));
  }

  if (slides.length) {
    showSlide(0);
    startAutoplay(4500);
  }
});
// simples carousel: autoplay + indicadores
const slides = document.querySelectorAll('.destaque-slide');
const dots = document.querySelectorAll('.indicador-rolagem-destaque .indicador');
let current = 0;
let interval = null;

function showSlide(idx) {
  slides.forEach((s,i) => s.classList.toggle('active', i === idx));
  dots.forEach((d,i) => d.classList.toggle('ativo', i === idx));
  current = idx;
}

function nextSlide() { showSlide((current + 1) % slides.length); }

function startAutoplay(ms = 4000) {
  stopAutoplay();
  interval = setInterval(nextSlide, ms);
}
function stopAutoplay() { if (interval) clearInterval(interval); interval = null; }

// indicadores clicáveis
dots.forEach(dot => {
  dot.addEventListener('click', () => showSlide(Number(dot.dataset.index)));
});

// pausa quando hover na área de destaque
const destaque = document.querySelector('.destaque');
if (destaque) {
  destaque.addEventListener('mouseenter', stopAutoplay);
  destaque.addEventListener('mouseleave', () => startAutoplay(4000));
}

// inicia
document.addEventListener('DOMContentLoaded', () => {
  if (slides.length) {
    showSlide(0);
    startAutoplay(4000);
  }
});

// mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.barra-navegacao');
  const linksNav = document.querySelector('.links-nav');
  if (!menuToggle || !header || !linksNav) return;

  function setExpanded(val) {
    menuToggle.setAttribute('aria-expanded', String(val));
    if (val) header.classList.add('nav-open'); else header.classList.remove('nav-open');
  }

  menuToggle.addEventListener('click', (e) => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  });

  // close when clicking a nav link
  linksNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setExpanded(false)));

  // close when clicking outside header
  document.addEventListener('click', (e) => {
    if (!header.classList.contains('nav-open')) return;
    if (!header.contains(e.target)) setExpanded(false);
  });
});
