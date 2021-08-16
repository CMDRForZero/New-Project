import React from 'react';

import Mapevents from './map__events';
import Mapyandex from './map__yandex';
import {PlacemarkProvider} from "../../hooks/usePlacemark";

const Maps = () => {
	return (
		<section class="map">
			<PlacemarkProvider>
				<Mapevents/>
				<Mapyandex/>
			</PlacemarkProvider>
		</section>
	);
}

export default Maps;