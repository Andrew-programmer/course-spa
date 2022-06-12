import React, {useEffect, useState} from 'react';

import {Title} from "./components/Title/Title";
import {Button} from "../common/Button/Button";
import {CourseDescription} from "./components/Description/CourseDescription";
import {Info} from "./components/Info/Info";
import {checkFields, getCourses, getCurrentCourse} from "../functions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {fetchAddCourse} from "../../store/courses/thunk";

export const CourseForm = () => {
    const {courseId} = useParams();
    const courses = useSelector(state => getCourses(state));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentCourse = getCurrentCourse(courses, courseId);
    const task = currentCourse ? 'update' : 'create';

    const [newCourse, addCourse] = useState({
        id: currentCourse ? currentCourse.id : '',
        title: currentCourse ? currentCourse.title : '',// string
        description: currentCourse ? currentCourse.description : '',// string
        creationDate: currentCourse ? currentCourse.creationDate : '',// string
        duration: currentCourse ? currentCourse.duration : 0,// number
        authors: currentCourse ? currentCourse.authors : '',// [authorId]
    });

    const fieldsForCheck = {
        title: '',// string
        description: '',// string
        duration: 0,// number
        authors: [],// [authorId]
    }

    return (
        <section className={'create-course-block'}>
            <div className={'title-description-block'}>
                <div className={'title-block'}>
                    <Title onAddTitle={addCourse} course={newCourse} value={newCourse.title} required/>
                    <Button secondClass={'crate-course-button'}
                            innerText={currentCourse ? 'Update course' : 'Create course'}
                            onClick={() => {
                                if (checkFields(newCourse, fieldsForCheck)) {
                                    dispatch(fetchAddCourse(newCourse, task));
                                    navigate('/courses');
                                } else {
                                    alert('Заполните все поля')
                                }
                            }
                            }
                    />
                </div>
                <CourseDescription className={'crate-course-description'}
                                   labelText={'Description'}
                                   placeholdetText={'Enter description'}
                                   onAddDescription={addCourse}
                                   course={newCourse}
                                   value={newCourse.description}
                />
            </div>
            <Info course={newCourse} onAddInfo={addCourse}/>
        </section>
    );
}