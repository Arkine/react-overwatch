import React, { Component } from 'react';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

import Header from './layouts/Header';

import routes from './server/routes';

import './App.css';

class App extends Component {
  render() {

	return (
		<div className="App">
			<Header />
			{ routes }
		</div>
	);
  }
}

export default App;
