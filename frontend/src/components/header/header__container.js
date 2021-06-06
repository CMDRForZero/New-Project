import React, { Fragment } from 'react';
import '../../css/style.scss';

import HeaderLogo from './header__logo';
import HeaderMenu from './header__menu';
import HeaderBurger from './header__burger';


const Headercontainer = () => {
	return (
		<Fragment>
			<HeaderLogo/>
			<HeaderMenu/>
			<HeaderBurger/>
		</Fragment>
	);
}

export default Headercontainer;