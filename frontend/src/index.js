import React from 'react';
import ReactDOM from 'react-dom';

import './css/search.css';
import Header from './components/header';
//import Maps from './components/map';


const Wrapper = () => {
	return (
		<Header />
	);
}

ReactDOM.render(<Wrapper/>, document.getElementById('wrapper'));