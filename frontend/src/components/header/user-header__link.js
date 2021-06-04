import React, { Fragment } from 'react';

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


