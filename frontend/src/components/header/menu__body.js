import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../css/style.scss';
import FormMB from './form__menubody';
import Menulist from './menu__list';

const Menubody = () => {
	return (
		<Router>
			<nav className="menu__body">
				<Route path="/map" render={() => 
					<form action="" method="get">
					<input name="menu_search" placeholder="Поиск мероприятия..." type="search"></input>
					<button type="submit"></button>
					</form>
				} exact/>
				<Menulist />
			</nav>
		</Router>
	);
}


export default Menubody;