import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { BrowserRouter as useLocation } from 'react-router-dom';

import Headercontainer from './header__container';

const styles = ({Header}) => css`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100vw;
	display: flex;
	padding-top: 10px;
	padding-bottom: 10px;
	align-items: center;
	text-align: center;
	justify-content: space-between;
	background-color: white;
	margin: auto;
	box-shadow: 0 5px 10px 3px rgba(0, 0, 0, .1);
`;

const stylesNS = ({Headernoscroll}) => css`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100vw;
	display: flex;
	padding-top: 10px;
	padding-bottom: 10px;
	align-items: center;
	text-align: center;
	justify-content: space-between;
	margin: auto;
`;
const Header = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
	const path = useLocation().pathname
	const [display, setDisplay] = React.useState(false);
	useEffect( () => {
		if ("/map" === path) setDisplay(true)
			else setDisplay(false)
	}, [path]);

	return (
			<div>
				{display &&
					<header css={styles({Header})}>
					<Headercontainer />
				</header>
				}
				<header css={scroll ? styles({Header}) : stylesNS({Headernoscroll})}>
					<Headercontainer />
				</header>
			</div>
	);
}

export default Header;