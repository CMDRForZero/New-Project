import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Logo from './logo';

const LogoContainer = styled.div`
	margin-left: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HeaderLogo = () => {
	return (
		<Link to="/">
			<LogoContainer>
				<div>
					< Logo/>
				</div>
			</LogoContainer>
		</Link>
	);
}

export default HeaderLogo;