// JavaScript to toggle the sticky class based on scroll position
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky-header", window.scrollY > 0);
  });

// Initialize AOS
AOS.init();

// GSAP Animations
gsap.from(".hero-section h1", { opacity: 0, duration: 1, y: -50 });
gsap.from(".hero-section p", { opacity: 0, duration: 1, delay: 0.5, y: 50 });
gsap.from(".hero-section button", { opacity: 0, duration: 1, delay: 1, y: 30 });

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, 
  spaceBetween: 0, 
  loop: true, 
  navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev', 
  },
  breakpoints: {
      1024: {
          slidesPerView: 3, 
      },
      768: {
          slidesPerView: 2, 
      },
      480: {
          slidesPerView: 1, 
      },
  },
});

