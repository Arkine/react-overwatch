import React from 'react';

import HeroCard from './HeroCard';

import { Hero } from '../../services/hero/HeroAPI';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

import { FadeAndSlideTransition } from '../../anims/FadeIn';

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
		if (heros.data) {

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
		}

		return (
			<main className="index Heros">
				<section className="Heros-list">
					<TransitionGroup className="herosList">
						<div className="Heros-list__wrapper">
							{items}
						</div>
					</TransitionGroup>
				</section>
			</main>
		);
	}
}