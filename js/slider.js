'use strict';

var slider = document.querySelector('.slider');

var sliderItemLeft = slider.querySelector('.slider__left');
var sliderItemRight = slider.querySelector('.slider__right');

var sliderArrowLeft = slider.querySelector('.slider__item slider__left');
var sliderArrowRight = slider.querySelector('.slider__item slider__right');

// var getSlideItem = function () {
//   if (sliderItemLeft.classList.contains('slider__item--active')) {
//     sliderItemRight.classList.add('slider__item--active');
//     sliderItemLeft.classList.remove('slider__item--active');
//   } else if (sliderItemRight.classList.contains('slider__item--active')) {
//     sliderItemLeft.classList.add('slider__item--active');
//     sliderItemRight.classList.remove('slider__item--active');
//   }
// };


sliderArrowLeft.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (sliderItemLeft.classList.contains('slider__item--active')) {
    sliderItemRight.classList.add('slider__item--active');
    sliderItemLeft.classList.remove('slider__item--active');
  } else if (sliderItemRight.classList.contains('slider__item--active')) {
    sliderItemLeft.classList.add('slider__item--active');
    sliderItemRight.classList.remove('slider__item--active');
  }
});
sliderArrowRight.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (sliderItemLeft.classList.contains('slider__item--active')) {
    sliderItemRight.classList.add('slider__item--active');
    sliderItemLeft.classList.remove('slider__item--active');
  } else if (sliderItemRight.classList.contains('slider__item--active')) {
    sliderItemLeft.classList.add('slider__item--active');
    sliderItemRight.classList.remove('slider__item--active');
  }
});
