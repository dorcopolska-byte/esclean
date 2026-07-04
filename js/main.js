
(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if(btn && nav){
    btn.addEventListener('click', function(){
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', function(){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      btn.textContent='☰';
    }));
  }
})();
