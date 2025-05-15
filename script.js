// Lightbox functionality for any clickable product image
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.catalogue-card img, .product-card img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  if (images.length > 0 && lightbox && lightboxImg && closeBtn) {
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }
});

<script>
  let slideIndex = 0;
  const slides = document.querySelectorAll(".top-pick-slide");

  function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
      slide.style.display = i === slideIndex ? "block" : "none";
    });
  }

  function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
  }

  // Auto init
  showSlide(slideIndex);
</script>

