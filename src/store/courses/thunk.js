import {addCourse, deleteCourse, loadCourses, updateCourse} from "../../services";
import {createCourseAction} from "./actionCreators";
import {ADD_COURSE, DELETE_COURSE, LOAD_COURSES, UPDATE} from "./actionTypes";

export const fetchCourses = () => {
    return async dispatch => {
        loadCourses(dispatch, createCourseAction, LOAD_COURSES);
    };
};

export const fetchDeleteCourse = (courseId) => {
    return async dispatch => {
        deleteCourse(courseId);
        dispatch(createCourseAction(DELETE_COURSE, courseId));
    };
};

export const fetchAddCourse = (course, task) => {
    const type = task === 'update' ? UPDATE : ADD_COURSE;
    return async dispatch => {
        if (task === 'update') {
            const data = await updateCourse(course);
            dispatch(createCourseAction(type, data));
        } else {
            const data = await addCourse(course);
            dispatch(createCourseAction(type, data));
        }
        // dispatch(createCourseAction(type, course));
        // dispatch(fetchCourses());
    };
};