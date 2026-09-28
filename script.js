const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

if (nav && navLinks) {
  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'nav-toggle';
  toggleBtn.setAttribute('aria-label', '메뉴 열기');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.innerHTML = '<span></span><span></span><span></span>';

  nav.insertBefore(toggleBtn, navLinks);

  const updateMenuState = () => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      navLinks.classList.remove('mobile-open');
      navLinks.style.display = 'flex';
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', '메뉴 열기');
      toggleBtn.style.display = 'none';
      return;
    }

    const isOpen = navLinks.classList.contains('mobile-open');
    navLinks.style.display = isOpen ? 'flex' : 'none';
    toggleBtn.style.display = 'flex';
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  };

  toggleBtn.addEventListener('click', () => {
    if (window.innerWidth > 768) return;

    const isOpen = navLinks.classList.toggle('mobile-open');
    navLinks.style.display = isOpen ? 'flex' : 'none';
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });

  window.addEventListener('resize', updateMenuState);
  updateMenuState();
}
