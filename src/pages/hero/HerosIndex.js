import React from 'react';

import HeroCard from './HeroCard';

import { Hero } from '../../services/hero/HeroAPI';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './HeroList.css';

export default class HerosPage extends React.Component {
	state = {
		"heros": []
	}

	componentWillMount() {
		const data = Hero.getAllHeros();
		data.then(results => {
			this.setState({
				"heros": results
			});
		});
	}

	render() {
		const { heros } = this.state;

		let items;
		if (!heros.data) {
			return (<div className="loading-modal">Loading Heros...</div>)
		}

		items = heros.data.map( (hero, index) => (
			<CSSTransition
			    in={true}
			    key={index}
			    timeout={1000}
			    classNames="fade"
			  >
				<HeroCard
					data={hero}
				/>
			</CSSTransition>
		));

		return (
			<main className="index Heros">
				<section className="Heros-list">
					<TransitionGroup className="Heros-list__wrapper">
						{items}
					</TransitionGroup>
				</section>
			</main>
		);
	}
}