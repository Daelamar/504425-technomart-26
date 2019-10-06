'use strict';

var slider = document.querySelector('.slider');

var sliderItemLeft = slider.querySelector('.slider__left');
var sliderItemRight = slider.querySelector('.slider__right');

var sliderArrowLeft = slider.querySelector('.slider__item slider__left');
var sliderArrowRight = slider.querySelector('.slider__item slider__right');

var sliderDotLeft = slider.querySelector('.slider__dot--left');
var sliderDotRight = slider.querySelector('.slider__dot--right');

var sliderSpanLeft = slider.querySelector('.slider__span--left');
var sliderSpanRight = slider.querySelector('.slider__span--right');


sliderDotLeft.addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderItemLeft.classList.add('slider__item--active');
  sliderItemRight.classList.remove('slider__item--active');
  sliderSpanLeft.classList.add('slider__span--active');
  sliderSpanRight.classList.remove('slider__span--active');
});

sliderDotRight.addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderItemRight.classList.add('slider__item--active');
  sliderItemLeft.classList.remove('slider__item--active');
  sliderSpanRight.classList.add('slider__span--active');
  sliderSpanLeft.classList.remove('slider__span--active');
});


// var getSlideItem = function () {
//   if (sliderItemLeft.classList.contains('slider__item--active')) {
//     sliderItemRight.classList.add('slider__item--active');
//     sliderItemLeft.classList.remove('slider__item--active');
//   } else if (sliderItemRight.classList.contains('slider__item--active')) {
//     sliderItemLeft.classList.add('slider__item--active');
//     sliderItemRight.classList.remove('slider__item--active');
//   }
// };
//
// sliderArrowLeft.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   if (sliderItemLeft.classList.contains('slider__item--active')) {
//     sliderItemRight.classList.add('slider__item--active');
//     sliderItemLeft.classList.remove('slider__item--active');
//   } else if (sliderItemRight.classList.contains('slider__item--active')) {
//     sliderItemLeft.classList.add('slider__item--active');
//     sliderItemRight.classList.remove('slider__item--active');
//   }
// });
// sliderArrowRight.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   if (sliderItemLeft.classList.contains('slider__item--active')) {
//     sliderItemRight.classList.add('slider__item--active');
//     sliderItemLeft.classList.remove('slider__item--active');
//   } else if (sliderItemRight.classList.contains('slider__item--active')) {
//     sliderItemLeft.classList.add('slider__item--active');
//     sliderItemRight.classList.remove('slider__item--active');
//   }
// });
