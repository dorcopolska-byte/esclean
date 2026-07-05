
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

(function(){
  function trackEvent(name, params){
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  document.querySelectorAll('a[href^="tel:"]').forEach(function(link){
    link.addEventListener('click', function(){
      trackEvent('click_call_now', {
        event_category: 'lead',
        event_label: link.getAttribute('href')
      });
    });
  });

  document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(link){
    link.addEventListener('click', function(){
      trackEvent('click_whatsapp', {
        event_category: 'lead',
        event_label: link.getAttribute('href')
      });
    });
  });

  document.querySelectorAll('a[href*="#contact"], a[href$="/index.html#contact"]').forEach(function(link){
    link.addEventListener('click', function(){
      trackEvent('click_get_quote', {
        event_category: 'lead',
        event_label: 'get_free_quote'
      });
    });
  });

  document.querySelectorAll('form').forEach(function(form){
    form.addEventListener('submit', function(){
      trackEvent('submit_quote_form', {
        event_category: 'lead',
        event_label: 'quote_form'
      });
    });
  });
})();
