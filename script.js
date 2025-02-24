// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Scroll Animations
gsap.utils.toArray('.hero, .posts-grid, .about-section, .contact-section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    }
  });
});

// Card Hover Effects
gsap.utils.toArray('.post-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -10,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Footer Animation
gsap.from('.main-footer', {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.contact-section',
    start: 'top 90%',
    end: 'bottom 90%',
    scrub: true
  }
});

gsap.from('.hero-logo', {
    delay:1,
    y: 100,
    opacity: 0,
    duration: 1,

  });

