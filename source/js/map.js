ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map(document.getElementsByClassName('contacts__map-yandex')[0], {
        center:[59.938597,30.323075],
        zoom: 16.7,
        controls: []
    });

    var myGeoObjects = [];
    myGeoObjects = new ymaps.Placemark([59.938745, 30.323225],{
                    balloonContentBody: '',
                    },{
                    iconImageHref: 'img/icon-map-pin.svg',
                    iconImageSize: [67, 100],
                    iconImageOffset: [-35, -80]
    });

    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);

    myMap.behaviors.disable('scrollZoom');

}
