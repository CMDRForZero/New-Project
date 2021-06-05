import React, { Fragment } from 'react';

import SloganTop from './slogan__top';
import ForWho from './for-who';

import Questions from './questions';

const Main = () => {
	return (
		<Fragment>
			<section className="header__slogan slogan">
				< SloganTop/>
			</section>
			<section className="for-who">
				< ForWho/>
			</section>
			<section className="questions">
				< Questions/>
			</section>
		</Fragment>
	);
}

export default Main;