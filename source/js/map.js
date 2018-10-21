// ymaps.ready(init);

// function init () {
//     var myMap = new ymaps.Map(document.getElementsByClassName('contacts__map-yandex')[0], {
//         center:[59.938597,30.323075],
//         zoom: 16.7,
//         controls: []
//     });

//     var myGeoObjects = [];
//     myGeoObjects = new ymaps.Placemark([59.938745, 30.323225],{
//                     balloonContentBody: '',
//                     },{
//                     iconImageHref: 'img/icon-map-pin.svg',
//                     iconImageSize: [67, 100],
//                     iconImageOffset: [-35, -80]
//     });

//     var clusterer = new ymaps.Clusterer({
//         clusterDisableClickZoom: false,
//         clusterOpenBalloonOnClick: false,
//     });

//     clusterer.add(myGeoObjects);
//     myMap.geoObjects.add(clusterer);

//     myMap.behaviors.disable('scrollZoom');

// }
ymaps.ready(function () {
  var myMap = new ymaps.Map(document.getElementsByClassName('contacts__map-yandex')[0], {
          center:[59.938772,30.323197],
          zoom: 16.7,
          controls: []
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Mishka',
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/icon-map-pin.svg',
          // Размеры метки.
          iconImageSize: [67, 100],
          iconImageOffset: [-35, -70]
      })
  myMap.geoObjects
      .add(myPlacemark)
});
