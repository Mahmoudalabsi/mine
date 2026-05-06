'use strict';

// AOS Animation Library Initialization
AOS.init({
  once: true,
  offset: 100,
  duration: 800,
  easing: 'ease-out-cubic',
  delay: 100,
});

// Intersection Observer — fade-in on scroll for elements that load after initial viewport
(function () {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = 'running';
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.footer-grid, .footer-bar').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(el);
  });

  // Trigger footer reveal when scrolled into view
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.footer-grid, .footer-bar').forEach((el) =>
    footerObserver.observe(el)
  );
})();
