document.addEventListener("DOMContentLoaded", function () {
  const hoverPrevItem = document.querySelector(".partners-slider__prev");
  hoverPrevItem.addEventListener("mousedown", function () {
    hoverPrevItem.classList.toggle("partners-slider__prev-hovered");
  });

  hoverPrevItem.addEventListener("mouseup", function () {
    hoverPrevItem.classList.toggle("partners-slider__prev-hovered");
  });
});
const hoverNextItem = document.querySelector(".partners-slider__next");
hoverNextItem.addEventListener("mousedown", function () {
  hoverNextItem.classList.toggle("partners-slider__next-hovered");
});

hoverNextItem.addEventListener("mouseup", function () {
  hoverNextItem.classList.toggle("partners-slider__next-hovered");
});
