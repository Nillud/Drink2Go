const sliderElement = document.querySelector('.catalog-form__slider');
const priceFrom = sliderElement.querySelector('.catalog-form__price-input--from');
const priceTo = sliderElement.querySelector('.catalog-form__price-input--to');

const sliderLower = document.querySelector('.noUi-handle-lower');
const sliderUpper = document.querySelector('.noUi-handle-upper');

const navMain = document.querySelector('.main-nav--nojs');
const mobileBurger = document.querySelector('.main-nav__burger');

navMain.classList.remove('main-nav--nojs');

mobileBurger.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

noUiSlider.create(sliderElement, {
  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 1000
  }
});

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  },
);

marker.addTo(map);
