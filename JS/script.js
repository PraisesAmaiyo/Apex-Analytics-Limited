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

// zOHO cERTIFICATE vERIICATION

// const SHEET_URL =
//   'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6TTfR0WneGMJoWzzINEkCoTfFzTz7_a5fLD5s-JAIi3cSezXpZRf028TfqyK_8vRcE8qbAWVnUYbM/pub?output=csv';
// const SHEET_URL =
//   'https://sheet.zohopublic.com/sheet/published/h4ip87ec342acd541486ea3710306d2d9eec4?format=csv';
// const SHEET_URL =
//   'https://sheet.zohopublic.com/sheet/published/h4ip87ec342acd541486ea3710306d2d9eec4?download=csv&sheetname=Sheet1';
const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdtOB8EsCnQt7CYo2sa_oGsNbGLuK_AhY0HccN-1dRBCD178Fqo8LWCfaCk1RcYPV_JZp6TJyvdDI1/pub?output=csv';

// Modal Controls
document.getElementById('openModalBtn')?.addEventListener('click', () => {
  document.getElementById('certModal').style.display = 'flex';
});

// Mobile (Second) Verification button
document.getElementById('openModalBtn_2')?.addEventListener('click', () => {
  document.getElementById('certModal').style.display = 'flex';
});

document.querySelector('.close')?.addEventListener('click', closeModal);

function closeModal() {
  document.getElementById('certModal').style.display = 'none';
}

const form = document.getElementById('certModal');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  checkCertificate();
});

// Verification Logic
async function checkCertificate() {
  const certNumber = document
    .getElementById('certNumber')
    .value.trim()
    .toUpperCase();
  const loader = document.getElementById('loader');
  const result = document.getElementById('result');
  const verifyBtn = document.getElementById('verifyBtn');

  result.textContent = '';
  if (!certNumber) {
    result.textContent = 'Please enter a certificate number.';
    return;
  }

  loader.style.display = 'block';
  verifyBtn.disabled = true;

  try {
    const res = await fetch(SHEET_URL);
    const text = await res.text();
    const rows = text.split('\n').map((row) => row.split(','));

    let found = false;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0].trim().toUpperCase() === certNumber) {
        found = rows[i][1].trim();
        break;
      }
    }

    if (found) {
      result.innerHTML = `<a href="${found}" target="_blank">View Certificate</a>`;
    } else {
      result.textContent = 'Certificate not found.';
    }
  } catch (err) {
    result.textContent = 'Error checking certificate.';
  } finally {
    loader.style.display = 'none';
    verifyBtn.disabled = false;
  }
}
