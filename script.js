document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.work-card');
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
});
