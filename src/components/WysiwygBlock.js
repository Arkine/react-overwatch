import React from 'react';
import './WysiwygBlock.css';

export default class WysiwygBlock extends React.Component {
	render() {
		return (
			<section className="Wysiwyg-block">
				<div className="Wysiwyg-block__wrapper">
					{ this.props.children }
				</div>
			</section>
		);
	}
}