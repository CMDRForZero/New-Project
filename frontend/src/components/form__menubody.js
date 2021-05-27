import React from 'react';

import '../css/search.css';

const FormMB = () => {
	return (
			<form action="" method="get">
				<input name="menu_search" placeholder="Поиск мероприятия..." type="search"></input>
				<button type="submit"></button>
			</form>
	);
}

export default FormMB;