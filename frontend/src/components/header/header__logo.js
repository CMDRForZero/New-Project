import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';
import '../../css/style.scss';

const HeaderLogo = () => {
	return (
		<Link to="/">
			<div>
				< Logo/>
			</div>
		</Link>
	);
}

export default HeaderLogo;