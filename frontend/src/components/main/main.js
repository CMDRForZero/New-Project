import React, { Fragment } from 'react';

import SloganTop from './slogan__top';
import ForWho from './for-who';
import How from './how';
import Questions from './questions';
import Footer from '../footer/footer';

const Main = () => {
	return (
		<Fragment>
			<section className="header__slogan slogan">
				< SloganTop/>
			</section>
			<section className="for-who" id="for-who">
				< ForWho/>
			</section>
			<section className="how-to-use" id="how">
				<How/>
			</section>
			<section className="questions" id="questions">
				< Questions/>
			</section>
			<Footer/>
		</Fragment>
	);
}

export default Main;