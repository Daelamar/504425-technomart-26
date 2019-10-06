'use strict';

var buyBtnArr = document.querySelectorAll('.product-cart__button--buy');
var popup = document.querySelector('.basket-popup');
var close_btn = popup.querySelector('.basket-popup__close');
var continueBtn = popup.querySelector('.basket-popup__continue');


var getPopupBlock = function () {
  var buyBtn;
  for (var i = 0; i < buyBtnArr.length; i++) {
    buyBtn = buyBtnArr[i];
    buyBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('show-popup');
    });
  }
};

close_btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('show-popup');
});

continueBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('show-popup');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('show-popup')) {
      popup.classList.remove('show-popup');
    }
  }
});

getPopupBlock();
