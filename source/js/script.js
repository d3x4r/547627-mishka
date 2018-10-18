var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--open');
  }
});

var buy = document.querySelector(".promo-product__button");
var modal = document.querySelector(".modal-cart");
var overlay = document.querySelector(".modal-overlay");

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-cart--show");
  overlay.classList.add("modal-overlay--show");

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-cart--show")) {
      modal.classList.remove("modal-cart--show");
      overlay.classList.remove("modal-overlay--show");
    }
  }
});
