import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Hero } from '../../services/hero/HeroAPI';
import * as heroActions from '../../components/actions/heros';

import HeroCard from './HeroCard';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './HeroList.css';

class HerosPage extends React.Component {
	state = {
		"heros": []
	}

	componentWillMount() {
		console.log(this.state)
		const getHeros = this.props.heroActions.fetchAllHeros();

		getHeros.then(results => {
			this.setState({
				"heros": results.heros.data
			});
		})
	}

	render() {
		const { heros } = this.state;

		if (!heros.data) {
			return (<div className="loading-modal">Loading Heros...</div>)
		}

		let items;
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

HerosPage.propTypes = {
	heros: PropTypes.array,
	heroActions: PropTypes.object
}

function mapStateToProps(state) {

	return {
		heros: state.heros
	}
}

function mapDispatchToProps(dispatch) {
	return {
		heroActions: bindActionCreators(heroActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HerosPage);