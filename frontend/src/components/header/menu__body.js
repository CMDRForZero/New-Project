import React from 'react';
import styled from '@emotion/styled';

import Menulist from './menu__list';

const StyleMenubody = styled.div`
	flex: 1 1 auto;
`;

const Menubody = () => {
	return (
		<StyleMenubody>
			<div>
				<nav className="menu__body">
					<Menulist />
				</nav>
			</div>
		</StyleMenubody>
	)
}

export default Menubody;
