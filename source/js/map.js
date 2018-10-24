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
var myMap;
function init () {
			myMap = new ymaps.Map(document.getElementsByClassName("contacts__map-yandex")[0], {
          center:[59.938772,30.323197],
          zoom: 16.7,
          controls: []
      }, {
          searchControlProvider: "yandex#search"
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: "Mishka",
      }, {
          iconLayout: "default#image",
          iconImageHref: "img/icon-map-pin.svg",
          iconImageSize: [67, 100],
          iconImageOffset: [-35, -70]
      })
  myMap.geoObjects
      .add(myPlacemark)
};
