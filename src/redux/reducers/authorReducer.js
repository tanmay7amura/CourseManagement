import * as types from "../actions/actionTypes";

export default function authorReducer(state=[], action){
	switch(action.type){		
		case types.LOAD_AUTHORS_SUCCESS:
			// here we are returning whole response as new state, we are not using currentState for it
			return action.authors;
		default:
			return state;
	}
}