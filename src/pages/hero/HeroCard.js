import React from 'react';
import { Link } from 'react-router-dom';

import './HeroCard.css';

export default class HeroCard extends React.Component {
	render() {
		const { data: hero } = this.props
		return (
			<div className="Hero-card">
				<div className="Hero-card__wrapper">
					<div className="Hero-card__img"></div>
					<div className="Hero-card__meta">
						<h2 className="Hero-card__title">{hero.name}</h2>
						<div className="Hero-card__desc">
							{hero.description.slice(0, 150)}...
						</div>
					</div>
					<Link to={`/hero/${hero.id}`} className="link-mask"></Link>
				</div>
			</div>
		);
	}
}