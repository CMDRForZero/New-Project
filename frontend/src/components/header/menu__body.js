import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';

import Menulist from './menu__list';


const Menubody = () => {
	const path = useLocation().pathname
	const [display, setDisplay] = React.useState(false);
	useEffect( () => {
		if ("/map" === path) setDisplay(true)
			else setDisplay(false)
	}, [path]);

	return (
		<div>
			<nav className="menu__body">
				{display && 
					<nav className="menu__body">
							<form action="" method="get">
							<input name="menu_search" placeholder="Поиск мероприятия..." type="search"></input>
							<button type="submit"></button>
							</form>
					</nav>
				}
				<Menulist />
			</nav>
		</div>
	)
}

export default Menubody;
