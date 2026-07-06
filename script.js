const search = document.getElementById('recherche');
if (search) {
  search.addEventListener('input', () => {
    const q = search.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    document.querySelectorAll('[data-search]').forEach(el => {
      const data = el.dataset.search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      el.style.display = data.includes(q) ? '' : 'none';
    });
  });
}
