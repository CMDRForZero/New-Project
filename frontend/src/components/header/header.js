import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';

import Headercontainer from './header__container';


const Header = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
	const path = useLocation().pathname
	const [display, setDisplay] = React.useState(false);
	useEffect( () => {
		if ("/map" === path) setDisplay(true)
			else setDisplay(false)
	}, [path]);

	return (
		<div>
			{display &&
				<header className="header">
				<Headercontainer />
			</header>
			}
			<header className={scroll ? "header" : "header-noscroll"}>
				<Headercontainer />
			</header>
		</div>
	);
}

export default Header;