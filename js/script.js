// Animación de aparición al hacer scroll
AOS.init({
  once: true,
  duration: 800,
  offset: 100
});

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dropdown para móvil
function toggleDropdown(e) {
  e.preventDefault();
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

