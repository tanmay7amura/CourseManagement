import * as types from "./actionTypes";
import * as courseApi  from "../../api/courseApi"

export function createCourse(course){
	return {type: types.CREATE_COURSE, course}
}

//  if courses Loaded success fully 
export const loadCoursesSuccess = (courses) => {
	return {type: types.LOAD_COURSES_SUCCESS, courses}
}

// Thunk API call returns function call 

export function loadCourses(){
	// it by defult recieves dispatch
	return function(dispatch){		
		return courseApi.getCourses().then(	courses => {
			dispatch(loadCoursesSuccess(courses));
		}).catch(e=>{
			alert("error in action loadCourses "+e);
		})
	}
}