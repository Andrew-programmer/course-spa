import React from 'react';
import {CourseCardInfo} from "../Courses/components/CourseCardInfo/CourseCardInfo";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {getAuthorsList, getCurrentCourse} from "../functions";
import {formattedDate, formattedTime} from "../helpers/pipeDuration";
import {useSelector} from "react-redux";

export const CourseInfo = () => {
    const {courseId} = useParams();

    const courses = useSelector(state => state.courses);
    const authors = useSelector(state => state.authors);

    const course = getCurrentCourse(courses, courseId);
    const authorsArray = getAuthorsList(course, authors);

    return (
        <section className={'course-info-section'}>
            <Link to="/courses" className='back-button'>&#60;Back to courses</Link>
            <div className={'course-info-block'}>
                <h1>{course.title}</h1>
                <div className={'course-info'}>
                    <article className={'course-card-info-text'}>
                        {course.description}
                    </article>
                    <CourseCardInfo
                        titles={['ID', 'Duration', 'Created', 'Authors']}
                        authors={authorsArray}
                        separator={'\n'}
                        course={course}
                        infos={[course.id, formattedTime(course.duration), formattedDate(course.creationDate)]}
                    />
                </div>
            </div>
        </section>
    );
};