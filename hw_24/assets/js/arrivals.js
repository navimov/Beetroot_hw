document.addEventListener("DOMContentLoaded", function () {
  const hoverPrevItem = document.querySelector(".arrivals-slider__prev");

  hoverPrevItem.addEventListener("mousedown", function () {
    hoverPrevItem.classList.toggle("arrivals-slider__prev-hovered");
  });

  hoverPrevItem.addEventListener("mouseup", function () {
    hoverPrevItem.classList.toggle("arrivals-slider__prev-hovered");
  });

  const hoverNextItem = document.querySelector(".arrivals-slider__next");

  hoverNextItem.addEventListener("mousedown", function () {
    hoverNextItem.classList.toggle("arrivals-slider__next-hovered");
  });

  hoverNextItem.addEventListener("mouseup", function () {
    hoverNextItem.classList.toggle("arrivals-slider__next-hovered");
  });
});
