// var myMap;
// //ymaps.ready(init);
// ymaps.ready(function () {
//   var myMap = new ymaps.Map(document.getElementsByClassName("contacts__map-yandex")[0], {
//           center:[59.938772,30.323197],
//           zoom: 16.7,
//           controls: []
//       }, {
//           searchControlProvider: "yandex#search"
//       }),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: "Mishka",
//       }, {
//           iconLayout: "default#image",
//           iconImageHref: "img/icon-map-pin.svg",
//           iconImageSize: [67, 100],
//           iconImageOffset: [-35, -70]
//       })
//   myMap.geoObjects
//       .add(myPlacemark)
// });

// ymaps.ready(init);
// function init () {
// 			var myMap = new ymaps.Map(document.getElementsByClassName("contacts__map-yandex")[0], {
//           center:[59.938772,30.323197],
//           zoom: 16.7,
//           controls: []
//       }, {
//           searchControlProvider: "yandex#search"
//       }),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: "Mishka",
//       }, {
//           iconLayout: "default#image",
//           iconImageHref: "img/icon-map-pin.svg",
//           iconImageSize: [67, 100],
//           iconImageOffset: [-35, -70]
//       })
//   myMap.geoObjects
//       .add(myPlacemark)
// };
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}
