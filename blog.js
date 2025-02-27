// Ensure GSAP is loaded
gsap.registerPlugin(ScrollTrigger);

// ✅ Menu Toggle Animation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// ✅ Fade-in Animation for All Post Sections
gsap.utils.toArray(".post-page").forEach((section) => {
  gsap.from(section, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

// ✅ GSAP Post Animations (#gsap Section)
gsap.utils.toArray("#gsap p").forEach((line) => {
  gsap.from(line, {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: line,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

// ✅ FIX for "Role of Icons and Fonts" (#font-awesome)
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the section exists before animating
  let fontAwesomeSection = document.querySelector("#font-awesome");
  if (fontAwesomeSection) {
    console.log("✅ #font-awesome found!");

    gsap.utils.toArray("#font-awesome p").forEach((line, index) => {
      gsap.from(line, {
        x: 100, // Slide in from right
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: index * 0.2, // Adds a slight delay for a staggered effect
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    gsap.from("#font-awesome .post-image img", {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#font-awesome .post-image img",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  } else {
    console.error("⚠️ #font-awesome section NOT found. Check your HTML.");
  }
});

// ✅ Horizontal Scroll Effect for Desktop
document.addEventListener("DOMContentLoaded", function () {
  let sections = gsap.utils.toArray(".panel");

  if (window.innerWidth > 768) {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-wrapper",
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    sections.forEach((panel, i) => {
      gsap.from(panel.querySelector(".big-text"), {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(panel.querySelector(".sub-text"), {
        x: i % 2 === 0 ? -150 : 150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      });
    });
  } else {
    sections.forEach((panel) => {
      gsap.from(panel, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }
});

// ✅ Footer Animation (Floating Effect)
gsap.from("footer", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});
