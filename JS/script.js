const openMobileNavBtn = document.querySelector('.btn-mobile-nav');
const closeMobileNavBtn = document.querySelector('.btn-mobile-nav_close');
const allLinks = document.querySelectorAll('a:link');
const headerEl = document.querySelector('body');
const mobileNavBg = document.querySelector('.mobile-nav-bg');
const mainNav = document.querySelector('.main-nav');

openMobileNavBtn.addEventListener('click', function () {
  // When opening
  headerEl.classList.add('nav-open');

  // Delay order: background first, nav after
  mobileNavBg.style.transitionDelay = '0.3s';
  mainNav.style.transitionDelay = '0.6s';
});

closeMobileNavBtn.addEventListener('click', function () {
  // Reverse delay order: nav first, background after
  mainNav.style.transitionDelay = '0.2s';
  mobileNavBg.style.transitionDelay = '0.6s';

  // Trigger close
  headerEl.classList.remove('nav-open');
});

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
      e.preventDefault();
    }

    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

// Sticky Navigation
const navigationHeader = document.querySelector('.navigation-header');
const initialNavigation = document.querySelector('.initial-navigation');
const stickyNavigation = document.querySelector('.sticky-nav');
const sectionHero = document.querySelector('.section-hero');

document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;

  function handleScroll() {
    const scrollTop = window.scrollY;

    if (scrollTop > 40 && scrollTop > lastScrollTop) {
      navigationHeader.classList.add('sticky-nav');
      navigationHeader.classList.remove('initial-navigation');
    } else if (scrollTop <= 40 && scrollTop < lastScrollTop) {
      navigationHeader.classList.remove('sticky-nav');
      navigationHeader.classList.add('initial-navigation');
    }

    lastScrollTop = scrollTop;
  }

  window.addEventListener('scroll', handleScroll);
});

// JavaScript for the slideshow transitions
const images = document.querySelectorAll('.slideshow-image');
const texts = document.querySelectorAll('.hero-text');
let currentIndex = 0;

if (images.length > 0 && texts.length > 0) {
  function showNextSlide() {
    // Remove active from current
    images[currentIndex].classList.remove('active');
    texts[currentIndex].classList.remove('active');

    // Next index
    currentIndex = (currentIndex + 1) % images.length;

    // Add active to next
    images[currentIndex].classList.add('active');
    texts[currentIndex].classList.add('active');
  }

  // Initialize first text
  texts[0].classList.add('active');

  // Change every 6s
  setInterval(showNextSlide, 6500);
}

// Copyright Year Update
const yearEl = document.querySelector('.copyright-year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// particles.js configuration

const particlesContainer = document.getElementById('particles-js');

if (particlesContainer) {
  particlesJS.load('particles-js', '/particlesjs-config.json', function () {
    //  console.log('particles.js config loaded');
  });
}

const section = document.querySelector('.section-tech-achievements');
if (section) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
}

const breakpoint = 50.3 * 16; // ~804.8px
const navItem = document.querySelector('.nav-item.dropdown');
const dropdownIcon = navItem?.querySelector('.dropdown-icon');
const dropdownMenu = navItem?.querySelector('.dropdown-menu');

function isDesktop() {
  return window.innerWidth >= breakpoint;
}

// Reset menu state when switching between desktop & mobile
function resetMenuState() {
  dropdownMenu.style.display = ''; // remove inline style
  dropdownIcon.setAttribute('aria-expanded', 'false');
}

window.addEventListener('resize', resetMenuState);

// Hover for desktop
navItem?.addEventListener('mouseenter', () => {
  if (isDesktop()) {
    dropdownMenu.style.display = 'flex';
  }
});
navItem?.addEventListener('mouseleave', () => {
  if (isDesktop()) {
    dropdownMenu.style.display = 'none';
  }
});

// Click for mobile
dropdownIcon?.addEventListener('click', (e) => {
  e.preventDefault();
  const isOpen = dropdownMenu.style.display === 'flex';
  dropdownMenu.style.display = isOpen ? 'none' : 'flex';
  dropdownIcon.setAttribute('aria-expanded', !isOpen);
});
