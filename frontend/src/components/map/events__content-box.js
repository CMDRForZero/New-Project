import React, { Fragment } from 'react';
import {usePlacemark} from "../../hooks/usePlacemark";

const Eventscontentbox = () => {
	const {placemarks} = usePlacemark();

	let res = placemarks.map(function(item) {
		return <div className="events__content-box box">
			<div className="box__img">
				<img src="/img/1.jpg"></img>
			</div>
			<div className="box__text">
				<div className="box__text-up text">
					<div className="text__left">
						<img src="/img/kok.jpg"></img>
						<p>{item.properties.iconCaption}</p>
						<p>#Бар</p>
					</div>
					<div className="text__rigth">
						<img src="/img/link1.jpg"></img>
						<img src="/img/link2.jpg"></img>
					</div>
				</div>
				<div className="box__text-address">
					<p>Никольская улица, 10</p>
				</div>
				<div className="box__text-comments">
					<p>{item.properties.balloonContentBody}</p>
				</div>
			</div>
		</div>
	});

	return (
		<div>
			{res}
		</div>
	);
}

export default Eventscontentbox;


