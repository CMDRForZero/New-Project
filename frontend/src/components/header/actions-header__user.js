import React from 'react';
import Usericon from './user-header__icon';
import Usermenu from './user-header__menu';
import styled from '@emotion/styled';

const StyledHeader = styled.div`

`;

const Headeruser = () => {
	return (
		<div className="actions-header__user user-header">
			<Usericon/>
			<Usermenu/>
		</div>
	);
}

export default Headeruser;




