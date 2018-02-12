import { combineReducers } from 'redux';

class Reducer {
	counter(state = 0, action){
		switch(action.type){
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
			return state;
		}
	}
}

export default new Reducer().counter;
