
  (function () {
    const cardCarousel = document.querySelector(".card-carousel");
    if (!cardCarousel) return;

    const track = cardCarousel.querySelector(".carousel-track");
    const cards = Array.from(cardCarousel.querySelectorAll(".card"));
    const prevBtn = cardCarousel.querySelector(".arrow--prev");
    const nextBtn = cardCarousel.querySelector(".arrow--next");

    const visibleCards = 3;
    let currentIndex = 0; // index of the leftmost visible card

    function updateCarousel() {
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
      currentIndex += 1; // move by one card
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex -= 1; // move by one card
      updateCarousel();
    });

    // Keep it aligned when the window resizes
    window.addEventListener("resize", updateCarousel);

    // Initial render
    updateCarousel();
  })();
