import React, { Fragment } from 'react';

import SloganTop from './slogan__top';
import ForWho from './for-who';

const Main = () => {
	return (
		<Fragment>
			<section className="header__slogan slogan">
				< SloganTop />
			</section>
			<section className="for-who">
				< ForWho/>
			</section>
		</Fragment>
	);
}

export default Main;