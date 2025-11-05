(function () {
    const cardCarousel = document.querySelector(".card-carousel");
    if (!cardCarousel) return;
  
    const track = cardCarousel.querySelector(".carousel-track");
    const cards = Array.from(cardCarousel.querySelectorAll(".card"));
    const prevBtn = cardCarousel.querySelector(".arrow--prev");
    const nextBtn = cardCarousel.querySelector(".arrow--next");
  
    let currentIndex = 0;
  
    function getVisibleCards() {
      // Calculate how many cards fit based on the track width and one card’s width
      const trackWidth = cardCarousel.querySelector(".carousel-viewport").offsetWidth;
      const cardWidth = cards[0].getBoundingClientRect().width;
      return Math.round(trackWidth / cardWidth);
    }
  
    function updateCarousel() {
      const visibleCards = getVisibleCards();
      const maxIndex = cards.length - visibleCards;
  
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;
  
      const cardWidth = cards[0].getBoundingClientRect().width;
      const offset = -(cardWidth * currentIndex);
  
      track.style.transform = `translateX(${offset}px)`;
  
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === maxIndex;
    }
  
    nextBtn.addEventListener("click", () => {
      currentIndex += 1;
      updateCarousel();
    });
  
    prevBtn.addEventListener("click", () => {
      currentIndex -= 1;
      updateCarousel();
    });
  
    window.addEventListener("resize", updateCarousel);
    updateCarousel();
  })();
  