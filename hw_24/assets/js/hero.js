document.addEventListener("DOMContentLoaded", function () {
  const hoverItems = document.querySelectorAll(".cta__btn");
  hoverItems.forEach(function (hoverItem) {
    hoverItem.addEventListener("mouseover", function () {
      hoverItem.classList.toggle("cta__btn-hovered");
    });

    hoverItem.addEventListener("mouseout", function () {
      hoverItem.classList.toggle("cta__btn-hovered");
    });
  });
});
