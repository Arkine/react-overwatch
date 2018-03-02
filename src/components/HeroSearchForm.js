import React from 'react';

export default class HeroSearchForm extends React.Component {
	render() {
		return (
			<section className="Hero-search-form">
				<div className="Hero-search-form__wrapper">
					<label htmlFor="hero">Search for Hero:</label>
					<input type="text" name="hero" />
				</div>
			</section>
		);
	}
}