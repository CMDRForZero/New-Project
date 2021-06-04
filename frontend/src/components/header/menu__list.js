import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../css/search.scss';

const Menulist = () => {
	return (
		<ul className="menu__list">
			<li><a href="#" className="menu__link">Для кого</a></li>
			<li><a href="#" className="menu__link">Как пользоваться</a></li>
			<li><a href="#" className="menu__link">Вопросы</a></li>
			{/*<Route path="/" component={ <li><Link to="/" className="menu__link">Карта мероприятий</Link></li> } exact/>*/}
		</ul>
	);
}


export default Menulist;