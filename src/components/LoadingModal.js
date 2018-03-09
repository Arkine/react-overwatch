import React from 'react';

export default class LoadingModal extends React.pureComponent {
	render() {
		return (
			<div className="Loading-modal">
				<div className="Loading-modal__wrapper">
					Loading...
				</div>
			</div>
		);
	}
}