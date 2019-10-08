'use strict';

var buyBtnArr = document.querySelectorAll('.product-cart__button--buy');
var basket = document.querySelector('.basket-popup');
var close_basket = basket.querySelector('.basket-popup__close');
var continueBtn = basket.querySelector('.basket-popup__continue');


var getBasketBlock = function () {
  var buyBtn;
  for (var i = 0; i < buyBtnArr.length; i++) {
    buyBtn = buyBtnArr[i];
    buyBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      basket.classList.add('show-popup');
    });
  }
};

close_basket.addEventListener('click', function (evt) {
  evt.preventDefault();
  basket.classList.remove('show-popup');
});

continueBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  basket.classList.remove('show-popup');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basket.classList.contains('show-popup')) {
      basket.classList.remove('show-popup');
    }
  }
});

getBasketBlock();
