// MAIN-ogwXmain — static tabs + small helpers
(function () {
  const links = Array.from(document.querySelectorAll('a.nav-link[data-tab]'));
  const panels = Array.from(document.querySelectorAll('.panel[data-panel]'));

  function setTab(tab) {
    links.forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === tab));
  }

  links.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      setTab(a.dataset.tab);
    });
  });

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // default
  setTab('navigator');
})();
