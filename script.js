const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(reveal => observer.observe(reveal));


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

