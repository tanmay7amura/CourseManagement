import * as types from "./actionTypes";
import * as authorApi  from "../../api/authorApi"

//  if courses Loaded success fully 
export const loadAuthorsSuccess = (authors) => {
	return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

// Thunk API call returns function call 

export function loadAuthors(){
	// it by defult recieves dispatch
	return function(dispatch){		
		return authorApi.getAuthors().then(	authors => {
			dispatch(loadAuthorsSuccess(authors));
		}).catch(e=>{
			alert("error in action loadAuthors "+e);
		})
	}
}