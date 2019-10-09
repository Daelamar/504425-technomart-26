'use strict';
(function () {
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
})();
(function () {
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
})();
(function () {
  var contact = document.querySelector('.about-block__contact');
  var link = contact.querySelector('.about-block__link--show');
  var popup = document.querySelector('.write-us-popup');
  var close_btn = popup.querySelector(".write-us-popup__close");
  var login = popup.querySelector('[name=username]');
  var password = popup.querySelector('[name=user-mail]');
  var form = popup.querySelector('form');
  var text = popup.querySelector('textarea');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('login', login.value);
  } catch (error) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('show-popup');

    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

  close_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('show-popup');
    popup.classList.remove('popup-error');
  });

  form.addEventListener('submit', function (evt) {
    if (!login.value || !password.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove('popup-error');
      popup.classList.add('popup-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', login.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains('show-popup')) {
        popup.classList.remove('show-popup');
        popup.classList.remove('popup-error');
      }
    }
  });
})();
(function () {
  var slider = document.querySelector('.slider');

  var sliderItemLeft = slider.querySelector('.slider__left');
  var sliderItemRight = slider.querySelector('.slider__right');

  var sliderArrowLeft = slider.querySelector('.slider__arrow--left');
  var sliderArrowRight = slider.querySelector('.slider__arrow--right');

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

  sliderArrowLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (sliderItemLeft.classList.contains('slider__item--active')) {
      sliderItemRight.classList.add('slider__item--active');
      sliderItemLeft.classList.remove('slider__item--active');
      sliderSpanRight.classList.add('slider__span--active');
      sliderSpanLeft.classList.remove('slider__span--active');
    } else if (sliderItemRight.classList.contains('slider__item--active')) {
      sliderItemLeft.classList.add('slider__item--active');
      sliderItemRight.classList.remove('slider__item--active');
      sliderSpanLeft.classList.add('slider__span--active');
      sliderSpanRight.classList.remove('slider__span--active');
    }
  });
  sliderArrowRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (sliderItemLeft.classList.contains('slider__item--active')) {
      sliderItemRight.classList.add('slider__item--active');
      sliderItemLeft.classList.remove('slider__item--active');
      sliderSpanRight.classList.add('slider__span--active');
      sliderSpanLeft.classList.remove('slider__span--active');
    } else if (sliderItemRight.classList.contains('slider__item--active')) {
      sliderItemLeft.classList.add('slider__item--active');
      sliderItemRight.classList.remove('slider__item--active');
      sliderSpanLeft.classList.add('slider__span--active');
      sliderSpanRight.classList.remove('slider__span--active');
    }
  });
})();
(function () {
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
})();
