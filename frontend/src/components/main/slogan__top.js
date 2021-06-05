import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Score from './score'


const SloganTop = () => {
	return (
		<Fragment>
				<div className="slogan__top">
					Платформа для удобного поиска <br></br> событий рядом с вами и вашем городе
				</div>
				<div className="slogan__center">
					Будь в курсе всех вечеринок. Организуй. Наслаждайся каждым моментом.
				</div>
				<a href="/map" className="slogan__link">
					<button href="" className="slogan__list">Карта мероприятий</button>
				</a>
				<Score/>
		</Fragment>
	);
}

export default SloganTop;