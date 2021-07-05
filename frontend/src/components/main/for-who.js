import React, { Fragment } from 'react';

import Useful from './useful';

const ForWho = () => {
	return (
		<Fragment>
			<div className="for-who__top">
				<h2>Для кого?</h2>
			</div>
			<div className="for-who__down">
				< Useful/>
			</div>
		</Fragment>
	);
}

export default ForWho;