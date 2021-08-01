import React, { Fragment } from 'react';

import '../../css/style.scss';

const Logo = () => {
	return (
		<Fragment>
			<a className="header__logo"><img src="img/logo.png" alt=""></img></a>
			<a className="header__text">club map</a>
		</Fragment>
	);
}

export default Logo;