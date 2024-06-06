document.addEventListener("DOMContentLoaded", function () {
  const hoverItems = document.querySelectorAll(".nav__item");
  hoverItems.forEach(function (hoverItem) {
    hoverItem.addEventListener("mouseover", function () {
      hoverItem.classList.toggle("nav__item-hovered");
    });

    hoverItem.addEventListener("mouseout", function () {
      hoverItem.classList.toggle("nav__item-hovered");
    });
  });
});
