document.addEventListener("DOMContentLoaded", function () {
  const hoverItems = document.querySelectorAll(".footer__nav_item");
  hoverItems.forEach(function (hoverItem) {
    hoverItem.addEventListener("mouseover", function () {
      hoverItem.classList.toggle("footer__nav_item-hovered");
    });

    hoverItem.addEventListener("mouseout", function () {
      hoverItem.classList.toggle("footer__nav_item-hovered");
    });
  });
});
