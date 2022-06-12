import React, {Fragment, useEffect, useState} from 'react';

import {CourseCard} from "./components/CourseCard/CourseCard";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {Button} from "../common/Button/Button";


import {formattedDate, formattedTime} from "../helpers/pipeDuration";
import {useDispatch, useSelector} from "react-redux";
import {PrivateRouter} from "../PrivateRouter/PrivateRouter";
import {Link} from "react-router-dom";
import {getAuthors, getCourses} from "../functions";
import {fetchCourses} from "../../store/courses/thunk";

export const Courses = () => {
    const [sortedCourses, sortCourses] = useState([]);
    const authors = useSelector(state => getAuthors(state));
    const courses = useSelector(state => getCourses(state));

    const dispatch = useDispatch();

    const titles = ['Authors', 'Duration', 'Crated'];

    useEffect(() => {
        async function fetchData() {
            sortCourses(courses);
        }
        fetchData();
    }, [courses]);


    return (
        <Fragment>
            <div className={'search-block'}>
                <SearchBar sortState={{sortedCourses: sortedCourses, sortCourses: sortCourses}}/>
                <PrivateRouter>
                    <Link to={'/courses/add'} data-testid={'link'}>
                        <Button secondClass={'add-new-courseCard-button course-button'}
                                innerText={'Add new course'}/>
                    </Link>
                </PrivateRouter>
            </div>
            <div>
                {
                    sortedCourses.map(course => {
                        return (
                            <CourseCard key={course.id} titles={titles} description={course.description} course={course}
                                        infos={[authors, formattedTime(course.duration), formattedDate(course.creationDate)]}
                                        title={course.title} courseId={course.id}/>
                        )
                    })
                }
            </div>
        </Fragment>


    );
};
