import React from 'react';

import HeroCard from './HeroCard';

import { Hero } from '../../services/hero/HeroAPI';

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
		console.log('heros', heros);

		let items;
		if (heros.data) {

			items = heros.data.map( (hero, index) => (
				<HeroCard
					key={index}
					data={hero}
				/>
			));
		}

		return (
			<main className="index Heros">
				<section className="Heros-list">
					<div className="Heros-list__wrapper">
						{items}
					</div>
				</section>
			</main>
		);
	}
}