import initialState from './initialState';
import {
	FETCH_ALL_HEROS_STARTED,
	FETCH_ALL_HEROS_SUCCESS,
	FETCH_ALL_HEROS_FAILED
} from '../actions/heros';

export default function hero(state = initialState.heros, action) {
	let newState;

	switch (action.type) {
		case FETCH_ALL_HEROS_STARTED:
			console.log('ACTION: FETCH_ALL_HEROS_STARTED');

			return action;

		case FETCH_ALL_HEROS_SUCCESS:
			console.log('ACTION: FETCH_ALL_HEROS_SUCCESS');

			newState = [...state, ...action.heros];

			return newState;

		case FETCH_ALL_HEROS_FAILED:
			console.log('ACTION: FETCH_ALL_HEROS_FAILED');

			return action;

		default:
			return state;
	}
}