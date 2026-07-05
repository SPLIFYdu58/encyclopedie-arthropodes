const categories = [
  { ordre: 'ARANEAE / ARACHNIDES', nom: 'Arachnides', desc: 'Mygales, araignées, amblypyges et autres espèces apparentées.' },
  { ordre: 'SCORPIONES', nom: 'Scorpions', desc: 'Scorpions désertiques, tropicaux et fiches d’élevage.' },
  { ordre: 'SOLIFUGAE', nom: 'Solifuges', desc: 'Araignées-chameaux et solifuges d’élevage.' },
  { ordre: 'PHASMATODEA', nom: 'Phasmes', desc: 'Phasmes feuilles, bâtons, géants et espèces tropicales.' },
  { ordre: 'COLEOPTERA', nom: 'Coléoptères', desc: 'Cétoines, lucanes, scarabées et larves saproxyliques.' },
  { ordre: 'BLATTODEA', nom: 'Blattes', desc: 'Blattes d’ornement et espèces nourricières.' },
  { ordre: 'MANTODEA', nom: 'Mantes', desc: 'Mantes religieuses, espèces tropicales et fiches de maintenance.' },
  { ordre: 'FORMICIDAE', nom: 'Fourmis', desc: 'Fondations, colonies, nids et espèces de fourmis.' },
  { ordre: 'MOLLUSCA', nom: 'Mollusques', desc: 'Escargots géants et autres mollusques d’élevage.' },
  { ordre: 'MYRIAPODA', nom: 'Myriapodes', desc: 'Iules, scolopendres et autres espèces à nombreuses pattes.' },
  { ordre: 'CRUSTACEA', nom: 'Crustacés', desc: 'Isopodes et autres crustacés terrestres.' },
  { ordre: 'DIVERS', nom: 'Autres arthropodes', desc: 'Espèces diverses, fiches spéciales et catégories temporaires.' }
];

const species = [
  { nom: 'Mygale Goliath', scientifique: 'Theraphosa blondi', categorie: 'Arachnides', desc: 'Fiche à compléter.' },
  { nom: 'Veuve noire', scientifique: 'Latrodectus mactans', categorie: 'Arachnides', desc: 'Fiche à compléter.' },
  { nom: 'Araignée à abdomen-bouclier', scientifique: 'Cyclocosmia ricketti', categorie: 'Arachnides', desc: 'Fiche à compléter.' }
];

const categoryGrid = document.getElementById('categoryGrid');
const speciesGrid = document.getElementById('speciesGrid');
const results = document.getElementById('results');
const resultsGrid = document.getElementById('resultsGrid');
const searchInput = document.getElementById('searchInput');

function renderCategories() {
  categoryGrid.innerHTML = categories.map(cat => `
    <article class="category-card" data-name="${cat.nom.toLowerCase()}">
      <small>${cat.ordre}</small>
      <h3>${cat.nom}</h3>
      <p>${cat.desc}</p>
    </article>
  `).join('');
}

function renderSpecies(target, list) {
  target.innerHTML = list.length ? list.map(sp => `
    <article class="species-card">
      <small>${sp.categorie}</small>
      <h3>${sp.nom}</h3>
      <p><em>${sp.scientifique}</em></p>
      <p>${sp.desc}</p>
    </article>
  `).join('') : '<p class="empty">Aucun résultat trouvé.</p>';
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { results.classList.add('hidden'); return; }
  const found = species.filter(sp =>
    sp.nom.toLowerCase().includes(q) ||
    sp.scientifique.toLowerCase().includes(q) ||
    sp.categorie.toLowerCase().includes(q)
  );
  results.classList.remove('hidden');
  renderSpecies(resultsGrid, found);
});

renderCategories();
renderSpecies(speciesGrid, species);
