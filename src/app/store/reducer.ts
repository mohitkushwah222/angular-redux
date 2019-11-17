import { IAppState } from './IAppState';
import * as ACTIONTYPE from './action-type';

export const initialState: IAppState = {
	name: '',
	age: 0
};


export function reducer(state = initialState, action) {
	switch (action.type) {
		// reset store
		case ACTIONTYPE.RESET_STORE:
			return Object.assign({}, state, JSON.parse(JSON.stringify(initialState)));
		case ACTIONTYPE.UPDATE_NAME:
			return Object.assign({}, state, {
				name: action.name
			});
		case ACTIONTYPE.UPDATE_AGE:
			return Object.assign({}, state, {
				age: action.age
			});
		default:
			return state;
	}
}
