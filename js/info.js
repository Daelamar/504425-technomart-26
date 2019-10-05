'use strict';

var list = document.querySelector('.info-block__list');

var deliveryBtn = list.querySelector('.info-block__button--delivery');
var warrantyBtn = list.querySelector('.info-block__button--warranty');
var creditBtn = list.querySelector('.info-block__button--credit');

var deliveryBlock = document.querySelector('.info-block__description--delivery');
var warrantyBlock = document.querySelector('.info-block__description--warranty');
var creditBlock = document.querySelector('.info-block__description--credit');


var getWarrantyBlock = function (evt) {
  evt.preventDefault();
  warrantyBtn.classList.add('info-block__button--active');
  warrantyBlock.classList.add('info-block__description--active');

  deliveryBtn.classList.remove('info-block__button--active');
  creditBtn.classList.remove('info-block__button--active');
  deliveryBlock.classList.remove('info-block__description--active');
  creditBlock.classList.remove('info-block__description--active');
};

var getCreditBlock = function (evt) {
  evt.preventDefault();
  creditBtn.classList.add('info-block__button--active');
  creditBlock.classList.add('info-block__description--active');

  deliveryBtn.classList.remove('info-block__button--active');
  warrantyBtn.classList.remove('info-block__button--active');
  deliveryBlock.classList.remove('info-block__description--active');
  warrantyBlock.classList.remove('info-block__description--active');
};

var getDeliveryBlock = function (evt) {
  evt.preventDefault();
  deliveryBtn.classList.add('info-block__button--active');
  deliveryBlock.classList.add('info-block__description--active');

  creditBtn.classList.remove('info-block__button--active');
  warrantyBtn.classList.remove('info-block__button--active');
  creditBlock.classList.remove('info-block__description--active');
  warrantyBlock.classList.remove('info-block__description--active');
};

warrantyBtn.addEventListener("click", getWarrantyBlock);
creditBtn.addEventListener("click", getCreditBlock);
deliveryBtn.addEventListener("click", getDeliveryBlock);
