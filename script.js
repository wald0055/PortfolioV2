const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: 0.3
  }
);

reveals.forEach(el => observer.observe(el));


/* LIGHTBOX */
const carouselImages = document.querySelectorAll('.carousel-img'); // your carousel img class
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

carouselImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.dataset.full; // HD version
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }
});

// script.js

// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');

  // Function to check if element is in viewport
  function isInViewport(el, offset = 100) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - offset;
  }

  // Function to trigger animation
  function animateFormOnScroll() {
    if (isInViewport(contactForm)) {
      contactForm.classList.add('animate');
      // Remove scroll listener after animation plays once
      window.removeEventListener('scroll', animateFormOnScroll);
    }
  }

  // Listen for scroll
  window.addEventListener('scroll', animateFormOnScroll);

  // Trigger on page load in case form is already visible
  animateFormOnScroll();
});


/* =========================
   PHOTOGRAPHY MODE TOGGLE
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const photoBtn = document.getElementById("photoModeBtn");
  if (!photoBtn) return;

  // Toggle photography mode
  photoBtn.addEventListener("click", () => {
    const active = document.body.classList.toggle("photo-mode");
    photoBtn.textContent = active ? "Close" : "See Photography";
  });

  // ESC key exits photography mode
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("photo-mode")) {
      document.body.classList.remove("photo-mode");
      photoBtn.textContent = "See Photography";
    }
  });
});
