import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

<<<<<<< HEAD:frontend/src/components/header/menu__list.js
import '../../css/style.css';
=======
import '../css/search.scss';
>>>>>>> 288c86dfa993774fc1da0199a9ac99710d659fb9:frontend/src/components/menu__list.js

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