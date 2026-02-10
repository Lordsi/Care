(() => {
  const nav = document.querySelector('.nav');
  if (!nav) {
    return;
  }

  const menuToggle = nav.querySelector('.menu-toggle');
  const navLinks = nav.querySelector('.nav-links');

  if (!menuToggle || !navLinks) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      closeMenu();
    }
  });
})();
