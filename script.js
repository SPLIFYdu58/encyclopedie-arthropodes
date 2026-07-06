const searchInput=document.getElementById('recherche');
if(searchInput){searchInput.addEventListener('input',()=>{const q=searchInput.value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');document.querySelectorAll('[data-search]').forEach(el=>{const txt=(el.innerText+' '+el.dataset.search).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');el.style.display=txt.includes(q)?'':'none';});});}
