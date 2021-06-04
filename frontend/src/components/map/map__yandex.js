import React, { useState } from 'react';

import '../../css/search.css';
import { Map, Placemark, YMaps } from "react-yandex-maps";

const Mapyandex = () => {
	const [placemarks, setPlacemarks] = useState(null);

	return (
		<div className="map__yandex" id="map">
			<YMaps>
				<Map
					width="100%" height="100%"
					defaultState={{ center: [55.753994, 37.622093], zoom: 9 }}
					onClick={(e) => click(e)}
				>
					{placemarks && <Placemark
						geometry={placemarks.coords}
					>
					</Placemark>}
				</Map>
			</YMaps>
		</div>
	);

	function click(e) {
		var coords = e.get('coords');
		console.log(coords);

		const name = prompt('Название метки')
		const ballon = prompt('описание')
		console.log(name, ballon)
		setPlacemarks({ 'coords': coords, 'name': name, 'ballon': ballon })
	}
}

export default Mapyandex;
