import { YMaps } from 'react-yandex-maps';

console.log('startscript');
<<<<<<< HEAD
YMaps.ready(init);

function init() {
	console.log('startscript');
	var myPlacemark, newMark,
		myMap = new YMaps.Map('map', {
			center: [55.753994, 37.622093],
			zoom: 9
		}, {
			searchControlProvider: 'yandex#search'
		});

	// клик по карте
	myMap.events.add('click', function (e) {
		var coords = e.get('coords');
		console.log(coords);

		const name = prompt('Название метки')
		const ballon = prompt('описание')
		console.log(name, ballon)
		myPlacemark = createPlacemark(coords, name, ballon);
		//   newMark = createPlacemark([55.787281730573696, 38.23046091992188])
		myMap.geoObjects.add(myPlacemark);

	});

	// Создание метки
	function createPlacemark(coords, name, ballon) {
		return new YMaps.Placemark(coords, {
			//  balloonContentHeader:'<div class="place"><img src="place1.png" class="place1"></div>', name,
			balloonContentHeader: ['<div class="place"><img src="./img/place1.png" class="place1" alt="метка">' + name + '</div>'].join(''),
			iconCaption: name,
			balloonContentFooter: 'Ваше событие!',
			balloonContent: ballon

		}, {
			iconLayout: 'default#image',
			iconImageHref: './source/place/bike.png',
			iconImageSize: [35, 47],
			iconImageOffset: [-19, -44]
			// preset: 'islands#violetDotIconWithCaption',
			// draggable: false
		});
	}


}
=======



>>>>>>> 1097aaec3c8fd3cae4b9c3ce4fa886e964327c91
