$(document).ready(function () {
  $(".news__slider").slick({
    autoplay: false,
    slidesToShow: 3,
    arrows: true,
    prevArrow: $(".prev-button__item"),
    nextArrow: $(".next-button__item"),
    dots: true,
    dotsClass: "news-dots",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
