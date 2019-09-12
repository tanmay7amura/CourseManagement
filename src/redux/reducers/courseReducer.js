import * as types from "../actions/actionTypes";

export default function courseReducer(state=[], action){
	switch(action.type){
		case types.CREATE_COURSE:
			return	[...state, {...action.course}];
		case types.LOAD_COURSES_SUCCESS:
			// here we are returning whole response as new state, we are not using currentState for it
			return action.courses;
		default:
			return state;
	}
}