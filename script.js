// Active tab highlight on scroll
  const sections = document.querySelectorAll('section, footer[id]');
  const tabs = document.querySelectorAll('nav.tabs a');
  window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if(rect.top <= 120 && rect.bottom > 120){
        current = sec.id || current;
      }
    });
    tabs.forEach(t => {
      t.classList.toggle('active', t.getAttribute('href') === '#' + current);
    });
  }, {passive:true});
