import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from '../pages/HomePage';
import HeroPage from '../pages/hero/HeroPage';
import HerosIndex from '../pages/hero/HerosIndex';
import PlayerPage from '../pages/player/PlayerPage';


export default (
	<Switch>
		<Route exact path="/hero/:heroId" component={HeroPage} />
		<Route exact path="/heros" component={HerosIndex} />
		<Route exact path="/player/:battleTag" component={PlayerPage} />
		<Route exact path="/" component={HomePage} />
	</Switch>
);