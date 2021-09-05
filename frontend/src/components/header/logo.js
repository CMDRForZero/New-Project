import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const StyleLogo = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 9px;
	margin-right: 5px;
`;
const StyleText = styled.div`
	font-family: "Neometric";
	font-size: 22px;
	font-weight: 700;
	color: #000;
`;

const Logo = () => {
	return (
		<Fragment>
			<StyleLogo>
				<a><img src="img/logo.png" alt=""></img></a>
			</StyleLogo>
			<StyleText>
				<a>club map</a>
			</StyleText>
		</Fragment>
	);
}

export default Logo;