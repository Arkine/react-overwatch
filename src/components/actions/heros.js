import { Hero } from '../../services/hero/HeroAPI';


// All Heros Actions
export const FETCH_ALL_HEROS_STARTED = 'FETCH_ALL_HEROS_STARTED';
export const FETCH_ALL_HEROS_SUCCESS = 'FETCH_ALL_HEROS_SUCCESS';
export const FETCH_ALL_HEROS_FAILED = 'FETCH_ALL_HEROS_FAILED';

// Single Hero Actions
export const FETCH_HERO_STARTED = 'FETCH_HERO_STARTED';
export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS';
export const FETCH_HERO_FAILED = 'FETCH_HERO_FAILED';

export function recieveAllHerosStarted() {
	return {
		type: FETCH_ALL_HEROS_STARTED,
		heros: {
			isFetching: true,
			error: false
		}
	}
}

export function recieveAllHeros(json) {
	return {
		type: FETCH_ALL_HEROS_SUCCESS,
		heros: {
			isFetching: false,
			error: false,
			data: json
		}
	};
}

export function recieveHero(json) {
	return {
		type: FETCH_HERO_SUCCESS,
		hero: json
	}
}

export function recieveHeroFailed(json) {
	return {
		type: FETCH_HERO_FAILED,
	}
}

export function recieveAllHerosFailed(err) {
	return {
		type: FETCH_ALL_HEROS_FAILED,
		hero: {
			isFetching: false,
			error: err
		}
	}
}

export function fetchAllHeros() {
	return (dispatch, getState) => {

		dispatch(recieveAllHerosStarted());

		return Hero.getAllHeros()
			.then(json => dispatch(recieveAllHeros(json)))
			.catch(err => dispatch(recieveAllHerosFailed(err)));
	}
}

export function fetchHero(heroId) {
	return dispatch => {

		return Hero.getHeroById(heroId)
			.then(json => dispatch(recieveHero(json)))
			.catch(err => dispatch(recieveHeroFailed(err)));
	}
}