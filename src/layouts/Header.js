import React from 'react';

import PrimaryNavigation from '../components/PrimaryNavigation';

import logo from '../assets/images/logo.svg';

export default class Header extends React.Component {
	render() {
		return (
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to React</h1>
			  <PrimaryNavigation />
			</header>
		);
	}
}