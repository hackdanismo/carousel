const slidesContainer = document.querySelector('.carousel__slides');
const slides = document.querySelectorAll('.slide');
const carouselButtons = document.querySelector('.carousel__buttons');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsContainer = document.querySelector('.carousel__dots');

let currentIndex = 0;

// ✅ Hide navigation if only one slide
if (slides.length <= 1) {
    carouselButtons.style.display = 'none';
    dotsContainer.style.display = 'none';
}

// ✅ Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel__dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.carousel__dot');

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // ✅ Update dot state
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
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
