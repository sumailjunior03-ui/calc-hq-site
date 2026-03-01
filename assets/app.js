(function(){
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if(!btn || !menu) return;

  btn.addEventListener('click', function(){
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', function(e){
    if(!menu.classList.contains('open')) return;
    const within = menu.contains(e.target) || btn.contains(e.target);
    if(!within){
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }
  });
})();
