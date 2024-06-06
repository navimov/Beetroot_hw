$(document).ready(function () {
  $(".hero-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: "slider-dots",
  });
  $(".partners-slider__list").slick({
    autoplay: true,
    slidesToShow: 7.99,
    arrows: true,
    prevArrow: $(".partners-slider__next"),
    nextArrow: $(".partners-slider__prev"),
  });
  $(".arrivals-slider__list").slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 4.99,
    prevArrow: $(".arrivals-slider__next"),
    nextArrow: $(".arrivals-slider__prev"),
  });
  $.getJSON("assets/data/arrivals.json", function (data) {
    data.forEach((slide) => {
      let isInStock = slide.inStock ? "In stock" : "sold";
      let sliderItem = `
    <li class="arrivals-slider__item">
    <span class="arrivals-slider__label" data-stock="${isInStock}">${isInStock}</span>
    <img data-lazy="${slide.img}" class="arrivals-slider__img" src="${slide.img}" alt="guitar">
    <h3 class="arrivals-slider__title">${slide.name}</h3>
    <p class="arrivals-slider__price">${slide.price}</p>
    </li>
    `;
      $(".arrivals-slider__list").slick("slickAdd", sliderItem);
    });
    const hoverItems = document.querySelectorAll(".arrivals-slider__item");
    hoverItems.forEach(function (hoverItem) {
      hoverItem.addEventListener("mouseover", function () {
        hoverItem.classList.toggle("arrivals-slider__item-hovered");
      });

      hoverItem.addEventListener("mouseout", function () {
        hoverItem.classList.toggle("arrivals-slider__item-hovered");
      });
    });
  });
});
