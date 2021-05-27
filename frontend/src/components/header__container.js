import React from 'react';
import '../css/search.css';
import Headermenu from './header__menu';
import Headeractions from './header__actions';

const Headercontainer = () => {
	return (
			<div className="header__container">
				<a href="/frontend/index.html" className="header__logo"><img src="../img/logo.jpg" alt=""></img></a>
				<a href="/frontend/index.html" className="header__text">club map</a>
				<Headermenu />
				<Headeractions />
			</div>
	);
}

export default Headercontainer;