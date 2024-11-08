// Initialize AOS
AOS.init();

// GSAP Animations
gsap.from(".hero-section h1", { opacity: 0, duration: 1, y: -50 });
gsap.from(".hero-section p", { opacity: 0, duration: 1, delay: 0.5, y: 50 });
gsap.from(".hero-section button", { opacity: 0, duration: 1, delay: 1, y: 30 });
