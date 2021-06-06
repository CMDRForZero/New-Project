import React, { Fragment } from 'react';

import Reg from './how__reg';
import Search from './how__search';
import Create from './how__create';

const HowLinks = () => {
	return (
		<Fragment>
			<div className="how__links">
				<Reg/>
				<Search/>
				<Create/>
			</div>
		</Fragment>
	);
}

export default HowLinks;