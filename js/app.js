// Initialize AOS Library
window.addEventListener('load', () => {
  AOS.init({
    duration: 900,
    offset: 200,
    mirror: false,
    once: false
  });
  window.addEventListener('load', AOS.refresh);
});