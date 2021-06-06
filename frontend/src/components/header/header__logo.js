import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';

const HeaderLogo = () => {
	return (
		<Link to="/">
			<div className="logo-container">
				< Logo/>
			</div>
		</Link>
	);
}

export default HeaderLogo;