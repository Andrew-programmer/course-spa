import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAuthors, getCourses, getUser} from "../../components/functions";
import {createCourseAction} from "../courses/actionCreators";
import {ADD_COURSE, GET_COURSES} from "../courses/actionTypes";

export const TestRedux = () => {

    const authors = useSelector(state => getAuthors(state));
    const courses = useSelector(state => getCourses(state));
    const user = useSelector(state => getUser(state));

    const [coursesState, setState] = useState(courses);

    const dispatch = useDispatch();

    const divRef = useRef();

    const addCourse = () => dispatch(createCourseAction(ADD_COURSE, {
        test: 'titleTestCourse'
    }))

    const getCoursesFromState = () => {
        const data = dispatch(createCourseAction(GET_COURSES));
        divRef.innerHTML = JSON.stringify(courses);
    };


    return (
        <div>
            <h1 data-testid={'authors-test'}>{JSON.stringify(authors)}</h1>
            <h1 data-testid={'courses-test'}>{JSON.stringify(courses)}</h1>
            <h1 data-testid={'user-test'}>{JSON.stringify(user)}</h1>
            <div ref={divRef} data-testid={'get-courses-test'}></div>

            <button onClick={addCourse} data-testid={'add-course-button'}>AddCourseButton</button>
            <button onClick={getCoursesFromState} data-testid={'get-course-button'}>AddCourseButton</button>
        </div>
    );
};
