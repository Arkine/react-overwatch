import React from 'react';

import { Link } from 'react-router-dom';

export default class PrimaryNavigation extends React.Component {
	render() {
		return (
			<nav className="Primary-navigation">
				<div className="Primary-navigation__wrapper">
					<ul>
						<Link to="/">Home</Link>
						<Link to="/heros">Heros</Link>
					</ul>
				</div>
			</nav>
		);
	}
}