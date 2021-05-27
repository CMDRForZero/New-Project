import React, { Fragment } from 'react';
import './search.css';

const Userlink = () => {
	return (
		<Fragment>
			<li><img class="user-header__logo" src="img/Joel_MAxwelljpg.jpg"></img><a>Joel Maxwell</a></li>
			<li><a class="user-header__link" href="#">Мои мероприятия</a></li>
			<li><a class="user-header__link" href="#">Создать мероприятие</a></li>
			<li><a class="user-header__link" href="#">Настройки</a></li>
			<li><a class="user-header__link" href="#">Выход из профиля</a></li>
		</Fragment>
	);
}

export default Userlink;


