import React from 'react';

import { Hero } from '../../services/hero/HeroAPI';

import WysiwygBlock from '../../components/WysiwygBlock';

export default class HeroPage extends React.Component {
	state = {
		"hero": undefined
	};

	componentWillMount() {
		const { heroId } = this.props.match.params

		const hero = Hero.getHeroById(heroId);

		hero.then(results => {
			console.log(results);
			this.setState({
				"hero": results
			});
		});
	}

	render() {
		const { hero } = this.state;

		if (hero === undefined) {
			return (
				<span className="loading">Loading hero...</span>
			);
		}

		return (
			<main className="single Hero">
				<section className="Hero__content">
					<div className="Hero__column Hero__column--left">
					</div>

					<div className="Hero__column Hero__column--right">
						<div className="Hero__header">
							<h1 className="Hero__title">
								{hero.name}
							</h1>
							<span className="Hero__role">Role: {hero.role.name}</span>
							<div className="Hero__meta">
								<span className="Hero__meta--item">Health: {hero.health}</span>
								<span className="Hero__meta--item">Armour: {hero.armour}</span>
								<span className="Hero__meta--item">Shield: {hero.shield}</span>
							</div>
							<div className="Hero__desc">
								<WysiwygBlock>
									{hero.description}
								</WysiwygBlock>
							</div>
							<div className="Hero__abilities">
							{hero.abilities.map((ability, index) => (
								<div className="Hero__ability" key={index}>
									<span className="Hero__ability__title">{ability.name}</span>
									<div className="Hero__ability__desc">{ability.description}</div>
								</div>
							))}
							</div>
						</div>

					</div>
				</section>
			</main>
		);
	}
}