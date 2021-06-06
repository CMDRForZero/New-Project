import React from 'react';

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