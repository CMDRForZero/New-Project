import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './css/search.scss';
import Header from './components/header';
import Maps from './components/maps';

const Wrapper = () => {
	return (
		<Fragment>
			<Header />
			<Maps />
		</Fragment>
	);
}

ReactDOM.render(<Wrapper/>, document.getElementById('wrapper'));