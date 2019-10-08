'use strict';

var mapPopup = document.querySelector('.map-popup');
var imgMap = document.querySelector('.about-block__img');
var closeMap = document.querySelector('.map-popup__close');

imgMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('show-popup');
});

closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('show-popup');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains('show-popup')) {
      mapPopup.classList.remove('show-popup');
    }
  }
});