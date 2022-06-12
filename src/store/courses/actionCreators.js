import {LOAD_COURSES} from "./actionTypes";

export const createCourseAction = (type, payload) => {
	return {type: type, payload: payload};
}

export const loadCoursesAction = (payload) => {
	return {type: LOAD_COURSES, payload: payload};
};