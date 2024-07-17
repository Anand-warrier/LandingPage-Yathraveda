document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".featuredCard");
  const cards = cardContainer.querySelectorAll(
    "div:not(.material-symbols-outlined)"
  );
  const prevButton = document.getElementById("prevCard");
  const nextButton = document.getElementById("nextCard");
  let currentIndex = 0;
  const cardsPerView = 2;

  function updateCards() {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsPerView) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - cardsPerView + cards.length) % cards.length;
    updateCards();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + cardsPerView) % cards.length;
    updateCards();
  });

  updateCards(); // Initial call to set up the first view
});
