import React from 'react';

import './search.css';
import FormMB from 'form__menubody';
import Menulist from 'menu__list';

const Menubody = () => {
	return (
		<nav className="menu__body">
			<FormMB />
			<Menulist />
		</nav>
	);
}


export default Menubody;