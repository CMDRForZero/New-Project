import React, { Fragment } from 'react';
<<<<<<< HEAD:frontend/src/components/header/user-header__link.js
import '../../css/style.css';
=======
import '../css/search.scss';
>>>>>>> 288c86dfa993774fc1da0199a9ac99710d659fb9:frontend/src/components/user-header__link.js

const Userlink = () => {
	return (
		<Fragment>
			<li><img className="user-header__logo" src="../../public/img/Joel_MAxwelljpg.jpg"></img><a>Joel Maxwell</a></li>
			<li><a className="user-header__link" href="#">Мои мероприятия</a></li>
			<li><a className="user-header__link" href="#">Создать мероприятие</a></li>
			<li><a className="user-header__link" href="#">Настройки</a></li>
			<li><a className="user-header__link" href="#">Выход из профиля</a></li>
		</Fragment>
	);
}

export default Userlink;


