import React, {Fragment, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";


import {Header} from './components/Header/Header';
import {Courses} from "./components/Courses/Courses";
import {CourseForm} from "./components/CourseForm/CourseForm";
import {Registration} from "./components/Registration/Registration";
import {Login} from "./components/Login/Login";
import {CourseInfo} from "./components/CourseInfo/CourseInfo";
import {useNavigate} from "react-router";

import {useDispatch} from "react-redux";
import {createCourseAction} from "./store/courses/actionCreators";
import {CLEAR_ALL_COURSES} from "./store/courses/actionTypes";
import {createAuthorAction} from "./store/authors/actionCreators";
import {CLEAR_ALL_AUTHORS} from "./store/authors/actionTypes";
import {clearAll} from "./services";
import {fetchCourses} from "./store/courses/thunk";
import {fetchAuthors} from "./store/authors/thunk";
import {fetchUser} from "./store/user/thunk";


export const App = () => {
    const addCourseAct = createCourseAction;
    const addAuthorAct = createAuthorAction;
    const clearCourses = CLEAR_ALL_COURSES;
    const clearAuthors = CLEAR_ALL_AUTHORS;

    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(() => {

        dispatch(fetchAuthors());
        dispatch(fetchCourses());
        dispatch(fetchUser(navigate));
        return () => {
            clearAll(dispatch, {userAct: addCourseAct, authorAct: addAuthorAct}, {
                clearCourse: clearCourses,
                clearAuthor: clearAuthors
            });
        };
    }, []);


    return (
        <Fragment>
            <Header/>
            <main className={'main-section'} data-testid={'root-container'}>
                {/*     Content     */}
            </main>
            <Routes>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/courses'} element={
                    <Courses/>}
                />
                <Route path={'/courses/add'} element={
                    <CourseForm/>
                }
                />
                <Route path={'/courses/update/:courseId'} element={
                    <CourseForm/>
                }
                />
                <Route path={'/courses/:courseId'} element={<CourseInfo/>}/>
            </Routes>

        </Fragment>
    );
};