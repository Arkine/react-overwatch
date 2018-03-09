import React from 'react';

import WysiwygBlock from '../components/WysiwygBlock';
import HeroSearchForm from '../components/HeroSearchForm';

export default class HomePage extends React.Component {


	render() {
		return (
			<main className="page Home">

				<h1>This is the Home Page</h1>

				<WysiwygBlock>
				<p>
				Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus
				</p>
				<p>
	Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
				</p>

				</WysiwygBlock>

				<HeroSearchForm />

			</main>
		);
	}
}