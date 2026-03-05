const hero = document.getElementById('cycling_hero');
const main = document.getElementById('trips_overview_main');
const arrow = document.getElementById('cycling_hero_arrow');
let isScrolling = false;

// Helper function to detect mobile
function isMobile() {
  return window.innerWidth <= 800; // adjust breakpoint as needed
}


function updateNavbar() {
  const heroRect = hero.getBoundingClientRect();
  if (heroRect.bottom > 0) { // hero is still visible
    navbar.classList.add('hero_active');
    sidebar.classList.add('hero_active');
  } else {
    navbar.classList.remove('hero_active');
    sidebar.classList.remove('hero_active');
  }
}

updateNavbar();

// Smooth scroll from hero to main
function scrollToMain() {
  if (isScrolling) return;
  isScrolling = true;
  main.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    isScrolling = false;
    updateNavbar();
  }, 1000);
}

// Smooth scroll from main to hero
function scrollToHero() {
  if (isScrolling) return;
  isScrolling = true;
  hero.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    isScrolling = false;
    updateNavbar();
  }, 800);
}





window.addEventListener('scroll', updateNavbar);
