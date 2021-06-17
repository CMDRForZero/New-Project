import React, { useState } from 'react';

import { Map, Placemark, YMaps } from "react-yandex-maps";
import Form from "./form";
import Modal from "./modal";
const Mapyandex = () => {
	const [placemarks, setPlacemarks] = useState([]);
	const [isModelShown, setIsModelShown] = useState(false);
	const onSubmit = () => {
		console.log('onSubmit true')
	}
	const test = 'test'
	 const showModal = () => {
	setIsModelShown(true)

	};
	const closeModal = () => {
		setIsModelShown(false)
	};
	const onKeyDown = (event) => {
		if (event.keyCode === 27) {
			closeModal();
		}
	};
	const onClickOutside = (event) => {
		if (this.modal && this.modal.contains(event.target)) return;
	       closeModal();
	};

	const toggleScrollLock = () => {
		document.querySelector('html').classList.toggle('scroll-lock');
	};
	return (
		<div className="map__yandex" id="map">
			<YMaps>
				<Map
					width="100%" height="100%"
					defaultState={{ center: [55.753994, 37.622093], zoom: 9 }}
					onClick={(e) => click(e)}
				>
					{placemarks.map((pm, i) => (
						<Placemark key={i} geometry={pm.geometry} properties={pm.properties} options={pm.options} modules={pm.modules} />
					))}
				</Map>
			</YMaps>
		{/*<Form/>*/}

			{isModelShown? (
				<Modal
					onSubmit={onSubmit}
					// modalRef={(n) => (this.modal = n)}
					// buttonRef={(n) => (this.closeButton = n)}
					closeModal={closeModal}
					onKeyDown={onKeyDown}
					onClickOutside={onClickOutside}
				/>
			) : null}
		</div>
	);

	function click(e) {
		setIsModelShown(true)
		console.log('clickOnMap')
		// // var coords = e.get('coords');
		// console.log(coords);
		//
		// let form = document.getElementById('modalForm')
		// form.style.display = 'block'
		//
		// let cordX = document.getElementById('cordX')
		// let cordY = document.getElementById('cordY')
		// cordX.value =   coords[0]
		// cordY.value =   coords[1]
		// let button = document.getElementById('safeButton')
		// button.addEventListener('click', safeForm)
	//	console.log(name, ballon)
	//	setPlacemarks({ 'coords': coords, 'name': name, 'ballon': ballon })
	}
	function safeForm(){
		let name = document.getElementById('name')
		let desk = document.getElementById('desk')
		let type = document.getElementById('type')
		let cordX = document.getElementById('cordX')
		let cordY = document.getElementById('cordY')
		let myPlacemark = createPlacemark([cordX.value, cordY.value], name.value, desk.value, type.value);
		setPlacemarks([...placemarks, myPlacemark]);
		let form = document.getElementById('modalForm')
		form.style.display = 'none'
	//	name.value = ''
	//	desk.value = ''
	}
	function editPlacemark (e){
		e.preventDefault()
	}
	function delitPlacemark (e){
		e.preventDefault()
	}
	function createPlacemark(coords, name, ballon, tapy) {
	//	return new ymaps.Placemark(coords, {
		return {
			geometry: coords,
			properties: {
			//  balloonContentHeader:'<div class="place"><img src="place1.png" class="place1"></div>', name,
			balloonContentHeader:['<div class="place"><img src="/img/place1.png" class="place1" alt="метка">' + name + '</div>'].join(''),
			iconCaption: name,
			balloonContentFooter: 'Ваше событие! <br><a href="#">Редактировать{test}</a> <a href="#">Удалить</a>',
			balloonContentBody: ballon

		}, options: {
			iconLayout: 'default#image',
			iconImageHref: '/img/'+ tapy +'.png',
			iconImageSize: [35, 47],
			iconImageOffset: [-19, -44]
			// preset: 'islands#violetDotIconWithCaption',
			// draggable: false
		},
			modules:
				['geoObject.addon.balloon', 'geoObject.addon.hint']

	};
	}
}


export default Mapyandex;
