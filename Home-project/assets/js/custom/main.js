// Offcanvas Navbar

$(function () {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});

// Offcanvas Navbar End Here

// On Scroll Navbar Fixed

$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 200) {
    $("#header").addClass("nav-change");
  } else {
    $("#header").removeClass("nav-change");
  }
});

// On Scroll Navbar Fixed End Here

// Accordian Active

$(document).ready(function () {
  $(".collapse.in").prev(".card-header").addClass("active");
  $("#accordian-1")
    .on("show.bs.collapse", function (a) {
      $(a.target).prev(".card-header").addClass("active");
    })
    .on("hide.bs.collapse", function (a) {
      $(a.target).prev(".card-header").removeClass("active");
    });
});

// Accordian End Here

// Banner Carousel

$(".banner-carousel").slick({
  slidesToShow: 1,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  fade: true,
  asNavFor: ".small-carousel",
  swipeToSlide: true,
});
$(".small-carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  asNavFor: ".banner-carousel",
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true,
  swipeToSlide: true,
  autoplay: false,
  slide: "div",
});

// Banner Carosuel End Here

// Animate On Scroll

AOS.init({
  duration: 800,
  offset: 120,
});

// Animate On Scroll End Here

$(".services-carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  speed: 1500,
  swipeToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
  centerPadding: "0px",
  slide: "div",
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 200,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
      },
    },
  ],
});

$(".project-carousel").slick({
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: "0px",
  slide: "div",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(".search-place-carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  swipeToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
  centerPadding: "0px",
  slide: "div",
  responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 200,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        dots: true,
        arrows: false,
      },
    },
  ],
});

$(".testimonial-carousel").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  swipeToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
  centerPadding: "0px",
  slide: "div",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(".blog-carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  arrows: true,
  swipeToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
  centerPadding: "0px",
  slide: "div",
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
        dots: true,
      },
    },
  ],
});

// Go to top button
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 200) {
    $("#goTop").addClass("active");
  } else {
    $("#goTop").removeClass("active");
  }
});
