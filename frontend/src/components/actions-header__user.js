import React from 'react';
import '../css/search.css';
import Usericon from './user-header__icon';
import Usermenu from './user-header__menu';

const Headeruser = () => {
	return (
		<div className="actions-header__user user-header">
			<Usericon/>
			<Usermenu/>
		</div>
	);
}

export default Headeruser;




