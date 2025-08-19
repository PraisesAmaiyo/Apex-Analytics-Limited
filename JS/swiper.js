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
