import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Header from './layouts/Header';
import HomePage from './pages/HomePage';

import HeroPage from './pages/hero/HeroPage';
import HerosIndex from './pages/hero/HerosIndex';
import PlayerPage from './pages/player/PlayerPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/hero/:heroId" component={HeroPage} />
          <Route exact path="/heros" component={HerosIndex} />
          <Route exact path="/player/:battleTag" component={PlayerPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
