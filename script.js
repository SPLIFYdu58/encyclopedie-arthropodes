const searchInput = document.querySelector('#recherche');
if (searchInput) {
  const items = [...document.querySelectorAll('[data-search]')];
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    items.forEach(item => {
      const text = (item.innerText + ' ' + item.dataset.search).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      item.style.display = text.includes(q) ? '' : 'none';
    });
  });
}
