'use strict';

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
})
;
