const slidesContainer = document.querySelector('.carousel__slides');
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

// ✅ Hide navigation if only one slide
if (slides.length <= 1) {
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
}

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
