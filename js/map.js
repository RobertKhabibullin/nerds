ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: [59.93864139, 30.32300400],
			zoom: 16,
			controls: ['zoomControl'],
			behaviors: ['drag']
	});
  var placemark = new ymaps.Placemark(myMap.getCenter(), {
		hintContent: 'Мы находимся здесь',
		balloonContent: 'Мы находимся здесь'
	}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-45, -188]
	});
	myMap.geoObjects.add(placemark);
});