import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

<<<<<<< HEAD
import Header from './components/header/header';
import Main from './components/main/main';
import Map from './components/map/map';
=======
import './css/search.scss';
import Header from './components/header';
import Maps from './components/maps';
>>>>>>> 288c86dfa993774fc1da0199a9ac99710d659fb9

const Wrapper = () => {
	return (
		<Router>
			<Fragment>
				<Header/>
				<Route path="/" component={ Main } exact/>
				<Route path="/map" component={ Map } exact/>
			</Fragment>
		</Router>
	);
}

ReactDOM.render(<Wrapper/>, document.getElementById('wrapper'));