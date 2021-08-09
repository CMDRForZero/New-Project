import React, {useEffect, useState} from 'react';

import { Map, YMaps, GeolocationControl, Placemark } from "react-yandex-maps";
import Form from "./form";
import BContentFooter from "./bcontentFooter";
import ActivePlacemark from "./active-placemark";
//import useFetch from "../../hooks/useFetch";

const Mapyandex = () => {
	const [placemarks, setPlacemarks] = useState([]);
	const [ymaps, setYmaps] = useState(null);
	const [cords, setCords] = useState(null);
	const [modalProps, setModalProps] = useState({});
	const [isModelShown, setIsModelShown] = useState(false);


	useEffect(async () => {
		const response = fetch("/api/events/").then(response => response.json()).then(item => {
			console.log(item)
			item.forEach(element => {
				createPlacemarkFromModal(element.cordX, element.cordY, element.name, element.desk, element.type, element.id)
			})
		});
	}, []);

	const onSubmit = () => {
		console.log('onSubmit true')
	}
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition((pos) => setCords([pos.coords.latitude, pos.coords.longitude]), (e) => console.log(e));
	} else {
		console.log("Not Available");
	}

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
					onLoad={ymaps => setYmaps(ymaps)}
					onClick={click}
					modules={[
						'templateLayoutFactory',
						'geoObject.addon.balloon',
						'clusterer.addon.balloon',
					]}
				>
					{placemarks.map((pm) => {
						console.log("-----------")
						console.log(pm.properties.eventID)
						return <ActivePlacemark key={pm.properties.eventID} geometry={pm.geometry}
																		ymaps={ymaps}
																		balloonContent={<div><div>{pm.properties.iconCaption}</div> <div>{pm.properties.balloonContentBody}</div> <BContentFooter eventID={pm.properties.eventID} editPlacemark={editPlacemark} delitePlacemark={delitPlacemark}/></div>}
																		properties={pm.properties}
																		options={pm.options}
						/>
					})}
					<GeolocationControl options={{ float: 'left' }} />
					{cords && <Placemark geometry={cords} options={{preset: 'islands#blueCircleDotIcon'}}/>}
				</Map>
			</YMaps>
			{/*<Form/>*/}

			{isModelShown? (
				<Form props = {modalProps}/>
			) : null}
		</div>
	);

	function click(e) {
		var cX = e.get('clientX')
		var cY = e.get('clientY')
		var coords = e.get('coords');
		setModalProps({
			clickX: cX,
			clickY: cY,
			cordX: coords[0],
			cordY: coords[1],
			type: "kokt",
			name: "",
			desk: "",
			closeModal: closeModal,
			createPlacemark: createPlacemarkFromModal
		})
		setIsModelShown(true)
	}
	function createPlacemarkFromModal(cordX, cordY, name, desk, type, eventID, categories) {
		//alert(name + desk)
		let myPlacemark = createPlacemark([cordX, cordY], name, desk, type, eventID);
		setPlacemarks(placemarks => ([...placemarks, ...myPlacemark]));
	}


	function updatePlacemark(cordX, cordY, name, desk, type, eventID, categories) {
		fetch("/api/events/" + eventID, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(placemarks[eventID])
		}).then(res => res.json())
	}

	function editPlacemark(e, i) {
		console.log("идет редактирование");
		console.log(e);
		console.log(i);
		let frontEventID = i;
		console.log("!!!!!!");
		console.log(frontEventID);
		console.log(placemarks);
		var cX = e['clientX'];
		var cY = e['clientY'];
		setModalProps({
			clickX: cX,
			clickY: cY,
			cordX: placemarks[frontEventID]['geometry'][0],
			cordY: placemarks[frontEventID]['geometry'][1],
			type: placemarks[frontEventID]['properties']['tapy'],
			name: placemarks[frontEventID]['properties']['iconCaption'],
			desk: placemarks[frontEventID]['properties']['balloonContentBody'],
			closeModal: closeModal,
			createPlacemark: updatePlacemark
		})
		setIsModelShown(true)
		setPlacemarks(placemarks.splice(frontEventID, 1))

		// тут показываем модальной окно
		// мы должны передать в модальное окно, что мы редактируем существующий элемент
	}
	function delitPlacemark (e, i){

		fetch("/api/events/" + i, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			body: null
		})
			.then(response => response.json());

		// тут должен приходит index который мы хоти удалить
		// удаление работае следующий образом
		console.log(i);
		setPlacemarks(placemarks.splice(i, 1));
		console.log(placemarks);
		setYmaps(ymaps);
	}

	function createPlacemark(coords, name, ballon, tapy, eventID) {   //onClick
		// здесь приходит некоторый индекс, если мы редактируем существущую точку, то мы должны ее перезаписать
		// setPlacemarks(placemarks=>({
		//    ...placemarks,
		//    [index]: измененный элемент
		// }))
	//	return new ymaps.Placemark(coords, {
		return {
			geometry: coords,
			properties: {
			//  balloonContentHeader:'<div class="place"><img src="place1.png" class="place1"></div>', name,
			balloonContentHeader:['<div class="place"><img src="/img/place1.png" class="place1" alt="метка">' + name + '</div>'].join(''),
			iconCaption: name,
			balloonContentBody: ballon,
				tapy: tapy,
				eventID: eventID

		}, options: {
			iconLayout: 'default#image',
			iconImageHref: '/img/'+ tapy +'.png',
			iconImageSize: [55, 67],
			iconImageOffset: [-20, -48]
			// preset: 'islands#violetDotIconWithCaption',
			// draggable: false
		},
			modules:
				['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory',]

	};
	}

}


export default Mapyandex;
