///////////////////////////////////////////////
//Making Mobile Navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// background image  Slider section
function dataBackgroundImage() {
  $("[data-bgimg]").each(function () {
    var bgImgUrl = $(this).data("bgimg");
    $(this).css({
      "background-image": "url(" + bgImgUrl + ")", // concatenation
    });
  });
}

$(window).on("load", function () {
  dataBackgroundImage();
});

//for carousel slider of the slider section
$(".slider_area").owlCarousel({
  animateOut: "fadeOut",
  autoplay: true,
  loop: true,
  nav: false,
  autoplayTimeout: 6000,
  items: 1,
  dots: true,
});

/* Cards section */
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

// Cards swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
