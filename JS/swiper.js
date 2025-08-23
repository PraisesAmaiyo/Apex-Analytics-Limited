var swiper = new Swiper('.swiper-3', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  freeMode: true,
  centeredSlides: true,
  //   loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   //   grid: {
//   //     rows: 2,
//   //   },
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   speed: 3000,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 5,
  loop: true,
  speed: 10000, // bigger = slower continuous speed
  autoplay: {
    delay: 0, // no pause
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
});

var swiper = new Swiper('.team-swiper', {
  slidesPerView: 1,
  spaceBetween: 10, // make them close together
  loop: true,
  speed: 600, // normal slide speed
  freeMode: false, // keep snapping to slides
  autoplay: false, // fully disable autoplay
  navigation: {
    nextEl: '.team-members-pagination_right',
    prevEl: '.team-members-pagination_left',
  },

  // Responsive breakpoints
  breakpoints: {
    1200: {
      slidesPerView: 4, // desktop large
    },
    992: {
      slidesPerView: 4, // tablet landscape
    },
    768: {
      slidesPerView: 2.5, // tablet portrait
    },
    576: {
      slidesPerView: 2, // mobile
    },
    350: {
      slidesPerView: 1.2, // mobile
    },
    0: {
      slidesPerView: 1, // fallback mobile
    },
  },
});

var swiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 10, // make them close together
  loop: true,
  speed: 600, // normal slide speed
  freeMode: false, // keep snapping to slides
  autoplay: false, // fully disable autoplay
  navigation: {
    nextEl: '.review-pagination_right .icon',
    prevEl: '.review-pagination_left .icon',
  },

  // Responsive breakpoints
  //   breakpoints: {
  //     1200: {
  //       slidesPerView: 3, // desktop large
  //     },
  //     992: {
  //       slidesPerView: 3, // tablet landscape
  //     },
  //     768: {
  //       slidesPerView: 2.5, // tablet portrait
  //     },
  //     576: {
  //       slidesPerView: 2, // mobile
  //     },
  //     350: {
  //       slidesPerView: 1.2, // mobile
  //     },
  //     0: {
  //       slidesPerView: 1, // fallback mobile
  //     },
  //   },
});

var swiper = new Swiper('.projectsSwiper', {
  slidesPerView: 1,
  spaceBetween: 5, // make them close together
  loop: true,
  speed: 600, // normal slide speed
  freeMode: false, // keep snapping to slides
  autoplay: false, // fully disable autoplay
  navigation: {
    nextEl: '.team-members-pagination_right',
    prevEl: '.team-members-pagination_left',
  },

  // Responsive breakpoints
  breakpoints: {
    1200: {
      slidesPerView: 5, // desktop large
    },
    992: {
      slidesPerView: 5, // tablet landscape
    },
    768: {
      slidesPerView: 3.5, // tablet portrait
    },
    576: {
      slidesPerView: 3, // mobile
    },
    350: {
      slidesPerView: 2, // mobile
    },
    0: {
      slidesPerView: 1.5, // fallback mobile
    },
  },
});

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Get the main services section and the wrapper
// const servicesSection = document.querySelector('.services-bottom');
// const scrollWrapper = document.querySelector('.scroll-wrapper');

// // Calculate the total horizontal width of all service boxes
// // This will be the distance we need to scroll
// const totalScrollWidth = scrollWrapper.scrollWidth - window.innerWidth;

// // Animate the horizontal scroll
// gsap.to(scrollWrapper, {
//   x: -totalScrollWidth, // Move the wrapper to the left by the calculated width
//   ease: 'none', // No easing for a smooth, linear scroll
//   scrollTrigger: {
//     trigger: servicesSection, // The element that triggers the animation
//     pin: true, // "Pins" the services section so it stays in place
//     scrub: 1, // Connects the scrollbar position to the animation
//     start: 'top top', // When the top of the section hits the top of the viewport
//     end: () => '+=' + totalScrollWidth, // The end point is based on the total width we need to scroll
//   },
// });

// Functional
//
//
//
//
//
//
//
//
//
// Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const servicesSection = document.querySelector('.services-bottom');
// const scrollWrapper = document.querySelector('.scroll-wrapper');
// const firstServiceBox = document.querySelector('.service-box.is-first');
// const lastServiceBox = document.querySelector('.service-box.is-last');

// if (servicesSection && scrollWrapper && firstServiceBox && lastServiceBox) {
//    function setupHorizontalScroll() {
//       // viewport width
//       const vw = window.innerWidth;

//       // margins for smooth start/end (using CSS margins too)
//       const startBuffer = firstServiceBox.offsetLeft;
//       const endBuffer =
//       lastServiceBox.offsetLeft + lastServiceBox.offsetWidth - vw;

//       // total horizontal distance we need to move
//       const scrollableWidth = scrollWrapper.scrollWidth - vw;

//       // kill old ScrollTrigger on resize
//       ScrollTrigger.getAll().forEach((st) => st.kill());

//     gsap.to(scrollWrapper, {
//       x: -scrollableWidth,
//       ease: 'none',
//       scrollTrigger: {
//          trigger: servicesSection,
//         pin: true,
//         scrub: 1,
//         start: 'top top',
//         end: () => `+=${scrollableWidth + startBuffer + 50}`, // dynamic end
//       },
//     });
//    }

//   setupHorizontalScroll();
//   window.addEventListener('resize', setupHorizontalScroll);
// }

// // highlight each box as it enters the center
// const boxes = gsap.utils.toArray('.service-box');

// boxes.forEach((box, i) => {
//    ScrollTrigger.create({
//       trigger: box,
//     scroller: '.scroll-wrapper', // if you’re using a custom scroller
//     start: 'center 60%', // enters when center hits 60% viewport
//     end: 'center 40%', // keeps focus strictly at center
//     onEnter: () => setActive(i),
//     onEnterBack: () => setActive(i),
//    });
// });

// function setActive(index) {
//    boxes.forEach((b, i) => b.classList.toggle('active', i === index));
// }

//
//
//
//
//
//
//
//
//
// Functional

gsap.registerPlugin(ScrollTrigger);

const servicesSection = document.querySelector('.services-bottom');
const scrollWrapper = document.querySelector('.scroll-wrapper');
const boxes = gsap.utils.toArray('.service-box');

if (servicesSection && scrollWrapper && boxes.length) {
  // Calculate the total scrollable distance dynamically
  const getScrollableWidth = () => {
    return scrollWrapper.scrollWidth - window.innerWidth;
  };

  // Create the main horizontal scroll animation
  const mainScrollTween = gsap.to(scrollWrapper, {
    x: () => -getScrollableWidth(),
    ease: 'none',
    scrollTrigger: {
      trigger: servicesSection,
      pin: true,
      scrub: 1,
      start: 'top top',
      end: () => `+=${getScrollableWidth() + window.innerWidth}`,
      invalidateOnRefresh: true,
    },
  });

  // Now, create a more robust ScrollTrigger for each box
  boxes.forEach((box, index) => {
    ScrollTrigger.create({
      trigger: box,
      containerAnimation: mainScrollTween, // This remains the key for synchronizing
      start: 'left 60%', // Trigger when the box's left edge is 60% across the viewport
      end: 'right 40%', // Stay active until its right edge reaches 40% across
      onEnter: () => setActive(index),
      onEnterBack: () => setActive(index),
    });
  });

  function setActive(index) {
    boxes.forEach((box, i) => {
      box.classList.toggle('active', i === index);
    });
  }
}

const section = document.querySelector('.section-tech-achievements');
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
  { threshold: 0.6 }
);

observer.observe(section);
