import React from 'react';

<<<<<<< HEAD:frontend/src/components/map/maps.js
import '../../css/search.css';
=======
import '../css/search.scss';
>>>>>>> 288c86dfa993774fc1da0199a9ac99710d659fb9:frontend/src/components/maps.js
import Mapevents from './map__events';
import Mapyandex from './map__yandex';

const Maps = () => {
	return (
		<section class="map">
			<Mapevents/>
			<Mapyandex/>
		</section>
	);
}

export default Maps;